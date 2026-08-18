#!/usr/bin/env node

/**
 * Automated Build & Syntax Validation for Cloudflare Worker
 */

import { execSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

console.log('⚡ Validating Cloudflare Worker source code...');

const entryFile = resolve('src/index.js');
if (!existsSync(entryFile)) {
  console.error(`❌ Entry file not found at: ${entryFile}`);
  process.exit(1);
}

try {
  // Syntax check via node --check
  execSync(`node --check "${entryFile}"`, { stdio: 'inherit' });
  
  const content = readFileSync(entryFile, 'utf8');
  console.log(`✅ Syntax check passed. Bundle size: ${(content.length / 1024).toFixed(2)} KB.`);
  console.log('✅ Build validation completed successfully.');
} catch (err) {
  console.error('❌ Build validation error:', err.message);
  process.exit(1);
}
