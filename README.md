# AI Job Postings Edge Hub ⚡

[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-V8_Isolates-F38020?logo=cloudflare)](https://ai-job-postings.polished-boat-17b2.workers.dev)
[![Azure Key Vault](https://img.shields.io/badge/Azure_Key_Vault-dp--kv--deliverypilot-0078D4?logo=microsoftazure)](https://azure.microsoft.com/)
[![Azure Blob Storage](https://img.shields.io/badge/Azure_Blob_Storage-dpstoryboardsa-0089D6?logo=microsoftazure)](https://azure.microsoft.com/)
[![Aggregator](https://img.shields.io/badge/Aggregator-JobServe_|_Remotive_|_ATS-60A5FA)](#multi-source-aggregation-engine)

High-performance, edge-native job board aggregating **Forward Deployed AI Engineer (FDE)** and applied AI roles across **JobServe**, **Remotive**, **Greenhouse ATS**, and **Y Combinator** into sub-5ms Cloudflare V8 Isolates with daily **Azure Blob Object Storage** archiving.

---

## 🌐 Live Production Application

- **Production URL:** [https://ai-job-postings.polished-boat-17b2.workers.dev](https://ai-job-postings.polished-boat-17b2.workers.dev)
- **Job Catalog:** [https://ai-job-postings.polished-boat-17b2.workers.dev/jobs](https://ai-job-postings.polished-boat-17b2.workers.dev/jobs)
- **Forward Deployed Engineer Role:** [https://ai-job-postings.polished-boat-17b2.workers.dev/jobs/forward-deployed-engineer](https://ai-job-postings.polished-boat-17b2.workers.dev/jobs/forward-deployed-engineer)

### 👑 Admin Section (`/admin`)
- **Admin > Azure Object Data:** [https://ai-job-postings.polished-boat-17b2.workers.dev/admin/azure-storage](https://ai-job-postings.polished-boat-17b2.workers.dev/admin/azure-storage)
- **Admin > Deployment Guide:** [https://ai-job-postings.polished-boat-17b2.workers.dev/admin/deployment](https://ai-job-postings.polished-boat-17b2.workers.dev/admin/deployment)
- **Admin > Cost Breakdown ($0/mo):** [https://ai-job-postings.polished-boat-17b2.workers.dev/admin/cost](https://ai-job-postings.polished-boat-17b2.workers.dev/admin/cost)
- **Admin > Vs Fly.io Comparison:** [https://ai-job-postings.polished-boat-17b2.workers.dev/admin/comparison](https://ai-job-postings.polished-boat-17b2.workers.dev/admin/comparison)
- **Admin > Architecture & Aggregator Engine:** [https://ai-job-postings.polished-boat-17b2.workers.dev/admin/architecture](https://ai-job-postings.polished-boat-17b2.workers.dev/admin/architecture)

### ⚡ JSON Edge APIs
- **Aggregator Trigger API:** [`GET /api/aggregate`](https://ai-job-postings.polished-boat-17b2.workers.dev/api/aggregate)
- **Aggregated Jobs API:** [`GET /api/jobs`](https://ai-job-postings.polished-boat-17b2.workers.dev/api/jobs)
- **Azure Sync History API:** [`GET /api/azure-history`](https://ai-job-postings.polished-boat-17b2.workers.dev/api/azure-history)
- **Health Check:** [`GET /api/health`](https://ai-job-postings.polished-boat-17b2.workers.dev/api/health)

---

## 🔄 Multi-Source Aggregation Engine

The system includes adapters for querying and unifying listings from:
1. **JobServe UK & Global:** Scrapes contract & permanent FDE searches (`https://www.jobserve.com/gb/en/JobSearch.aspx?q=Forward+Deployed+AI+Engineer`).
2. **Remotive AI Jobs API:** Consumes remote software/AI job endpoints.
3. **Greenhouse & Lever ATS Boards:** Pulls direct company postings from frontier AI labs.
4. **Y Combinator (Work at a Startup):** Curates early-stage startup engineering listings.

---

## 🔒 Zero Plaintext Token Security

All deployment and storage credentials are dynamically retrieved from **Azure Key Vault (`dp-kv-deliverypilot`)** just-in-time:
- `cloudflare-api-token`
- `cloudflare-account-id`
- `azure-storage-jobs-account` (`dpstoryboardsa`)
- `azure-storage-jobs-container` (`ai-jobs-data`)
- `azure-storage-jobs-sas` (Secure SAS token)

Zero secrets exist on disk, in `.env` files, or in Git.

---

## 🚀 Deployment

```bash
# Validate build & bundle
npm run build

# Deploy to Cloudflare Edge using JIT Azure Key Vault secrets
npm run deploy:azure

# Test all edge & admin routes
npm run test https://ai-job-postings.polished-boat-17b2.workers.dev
```
