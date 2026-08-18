#!/usr/bin/env node

/**
 * Cloudflare Worker Deployment via Azure Key Vault Secrets
 * 
 * Dynamically fetches all credentials from Azure Key Vault 'dp-kv-deliverypilot':
 * - 'cloudflare-api-token'
 * - 'cloudflare-account-id'
 * - 'azure-storage-jobs-account'
 * - 'azure-storage-jobs-container'
 * - 'azure-storage-jobs-sas'
 * 
 * Injects them as runtime secrets or wrangler deploy variables just-in-time.
 * Guarantees zero plaintext tokens are persisted to disk or git.
 */

import { execSync, spawnSync } from 'node:child_process';

const KEY_VAULT_NAME = process.env.AZURE_KEYVAULT_NAME || 'dp-kv-deliverypilot';

function getSecret(secretName) {
  process.stdout.write(`🔒 Fetching [${secretName}] just-in-time from Azure Key Vault (${KEY_VAULT_NAME})...\n`);
  try {
    const output = execSync(
      `az keyvault secret show --vault-name "${KEY_VAULT_NAME}" --name "${secretName}" --query value -o tsv`,
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }
    );
    const val = output.trim();
    if (!val) {
      throw new Error(`Retrieved secret "${secretName}" was empty.`);
    }
    return val;
  } catch (err) {
    console.error(`❌ Failed to retrieve secret "${secretName}" from Azure Key Vault:`, err.message);
    process.exit(1);
  }
}

async function setWorkerSecret(name, value, apiToken, accountId) {
  process.stdout.write(`🔐 Syncing worker secret [${name}]...\n`);
  const res = spawnSync('npx', ['-y', 'wrangler', 'secret', 'put', name], {
    input: value,
    encoding: 'utf8',
    env: {
      ...process.env,
      CLOUDFLARE_API_TOKEN: apiToken,
      CLOUDFLARE_ACCOUNT_ID: accountId
    }
  });
  if (res.status !== 0) {
    console.warn(`⚠️ Warning: could not set secret ${name} via wrangler:`, res.stderr);
  }
}

async function main() {
  console.log('🚀 Starting Just-In-Time Azure Key Vault deployment workflow...\n');

  // Step 1: Pre-build validation
  console.log('📦 Step 1: Running build validation...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
  } catch (err) {
    console.error('❌ Build validation failed before deployment.');
    process.exit(1);
  }

  // Step 2: Fetch secrets directly to ephemeral process memory
  console.log('\n🔑 Step 2: Fetching credentials from Azure Key Vault...');
  const apiToken = getSecret('cloudflare-api-token');
  const accountId = getSecret('cloudflare-account-id');
  const storageAccount = getSecret('azure-storage-jobs-account');
  const storageContainer = getSecret('azure-storage-jobs-container');
  const storageSas = getSecret('azure-storage-jobs-sas');
  console.log('✅ All credentials loaded securely into process memory.');

  // Step 3: Set secrets on Cloudflare Worker
  console.log('\n🔒 Step 3: Provisioning Worker Environment Secrets...');
  await setWorkerSecret('AZURE_STORAGE_ACCOUNT', storageAccount, apiToken, accountId);
  await setWorkerSecret('AZURE_STORAGE_CONTAINER', storageContainer, apiToken, accountId);
  await setWorkerSecret('AZURE_STORAGE_SAS', storageSas, apiToken, accountId);

  // Step 4: Deploy using Wrangler with ephemeral environment variables
  console.log('\n☁️  Step 4: Deploying Cloudflare Worker directly to Cloudflare Edge...');
  const deployResult = spawnSync('npx', ['-y', 'wrangler', 'deploy'], {
    stdio: 'inherit',
    env: {
      ...process.env,
      CLOUDFLARE_API_TOKEN: apiToken,
      CLOUDFLARE_ACCOUNT_ID: accountId
    }
  });

  if (deployResult.status !== 0) {
    console.error('❌ Cloudflare Worker deployment failed.');
    process.exit(deployResult.status || 1);
  }

  console.log('\n🎉 Deployment complete! Zero secrets were saved to disk or repository.');
}

main().catch(err => {
  console.error('Fatal deployment error:', err);
  process.exit(1);
});
