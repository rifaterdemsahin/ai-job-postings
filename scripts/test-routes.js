#!/usr/bin/env node

/**
 * Endpoint testing script to verify all worker and admin routes
 */

const targetUrl = process.argv[2] || 'http://localhost:8787';

const routes = [
  '/',
  '/jobs',
  '/jobs/forward-deployed-engineer',
  '/admin/azure-storage',
  '/admin/deployment',
  '/admin/cost',
  '/admin/comparison',
  '/admin/architecture',
  '/api/aggregate',
  '/api/azure-history',
  '/api/jobs',
  '/api/health'
];

async function runTests() {
  console.log(`🧪 Testing endpoints on: ${targetUrl}\n`);
  let hasFailure = false;

  for (const route of routes) {
    const url = `${targetUrl.replace(/\/$/, '')}${route}`;
    const start = Date.now();
    try {
      const res = await fetch(url);
      const elapsed = Date.now() - start;
      const contentType = res.headers.get('content-type') || '';
      
      if (res.ok) {
        console.log(`✅ [${res.status}] ${route.padEnd(35)} (${elapsed}ms) - ${contentType}`);
      } else {
        console.error(`❌ [${res.status}] ${route.padEnd(35)} (${elapsed}ms)`);
        hasFailure = true;
      }
    } catch (err) {
      console.error(`❌ [ERR] ${route.padEnd(35)} - ${err.message}`);
      hasFailure = true;
    }
  }

  if (hasFailure) {
    console.error('\n⚠️ Some endpoint tests failed.');
    process.exit(1);
  } else {
    console.log('\n🌟 All endpoint checks passed successfully!');
  }
}

runTests();
