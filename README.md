# AI Job Postings Edge Hub ⚡

[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-V8_Isolates-F38020?logo=cloudflare)](https://ai-job-postings.polished-boat-17b2.workers.dev)
[![Big Tech](https://img.shields.io/badge/Big_Tech-Palantir_|_MSFT_|_Apple_|_Google_|_Meta-0078D4)](#-big-tech--frontier-ai-careers-section)
[![Azure Key Vault](https://img.shields.io/badge/Azure_Key_Vault-dp--kv--deliverypilot-0078D4?logo=microsoftazure)](https://azure.microsoft.com/)
[![Azure Blob Storage](https://img.shields.io/badge/Azure_Blob_Storage-dpstoryboardsa-0089D6?logo=microsoftazure)](https://azure.microsoft.com/)

High-performance, edge-native job board aggregating **Forward Deployed AI Engineer (FDE / FDSE)**, foundation model systems, and applied AI roles across **Palantir**, **Microsoft**, **Apple**, **Google DeepMind**, **Meta**, and **JobServe**. Built on **Cloudflare Workers (V8 Isolates)** with automated once-daily **Azure Blob Object Storage** archiving.

---

## 🌐 Live Production Application

- **Production URL:** [https://ai-job-postings.polished-boat-17b2.workers.dev](https://ai-job-postings.polished-boat-17b2.workers.dev)
- **🏢 Big Tech AI Hub:** [https://ai-job-postings.polished-boat-17b2.workers.dev/big-tech](https://ai-job-postings.polished-boat-17b2.workers.dev/big-tech)
- **All Jobs Catalog:** [https://ai-job-postings.polished-boat-17b2.workers.dev/jobs](https://ai-job-postings.polished-boat-17b2.workers.dev/jobs)

### 🏢 Big Tech & Frontier AI Requisitions
- **Palantir FDSE (AIP & LLMs):** [https://ai-job-postings.polished-boat-17b2.workers.dev/jobs/palantir-forward-deployed-software-engineer](https://ai-job-postings.polished-boat-17b2.workers.dev/jobs/palantir-forward-deployed-software-engineer)
- **Microsoft Applied AI (Copilot & Semantic Kernel):** [https://ai-job-postings.polished-boat-17b2.workers.dev/jobs/microsoft-applied-ai-engineer-copilot](https://ai-job-postings.polished-boat-17b2.workers.dev/jobs/microsoft-applied-ai-engineer-copilot)
- **Apple Intelligence (Edge Runtime & CoreML):** [https://ai-job-postings.polished-boat-17b2.workers.dev/jobs/apple-intelligence-edge-runtime-engineer](https://ai-job-postings.polished-boat-17b2.workers.dev/jobs/apple-intelligence-edge-runtime-engineer)
- **Google DeepMind (Gemini Applied Research):** [https://ai-job-postings.polished-boat-17b2.workers.dev/jobs/google-deepmind-forward-deployed-research-engineer](https://ai-job-postings.polished-boat-17b2.workers.dev/jobs/google-deepmind-forward-deployed-research-engineer)
- **Meta Generative AI (Llama & PyTorch Systems):** [https://ai-job-postings.polished-boat-17b2.workers.dev/jobs/meta-generative-ai-systems-engineer](https://ai-job-postings.polished-boat-17b2.workers.dev/jobs/meta-generative-ai-systems-engineer)

### 👑 Admin Section (`/admin`)
- **Admin > Azure Object Data:** [https://ai-job-postings.polished-boat-17b2.workers.dev/admin/azure-storage](https://ai-job-postings.polished-boat-17b2.workers.dev/admin/azure-storage)
- **Admin > Deployment Guide:** [https://ai-job-postings.polished-boat-17b2.workers.dev/admin/deployment](https://ai-job-postings.polished-boat-17b2.workers.dev/admin/deployment)
- **Admin > Cost Breakdown ($0/mo):** [https://ai-job-postings.polished-boat-17b2.workers.dev/admin/cost](https://ai-job-postings.polished-boat-17b2.workers.dev/admin/cost)
- **Admin > Vs Fly.io Comparison:** [https://ai-job-postings.polished-boat-17b2.workers.dev/admin/comparison](https://ai-job-postings.polished-boat-17b2.workers.dev/admin/comparison)
- **Admin > Architecture & Aggregator Engine:** [https://ai-job-postings.polished-boat-17b2.workers.dev/admin/architecture](https://ai-job-postings.polished-boat-17b2.workers.dev/admin/architecture)

### ⚡ JSON Edge APIs
- **Big Tech Jobs API:** [`GET /api/big-tech`](https://ai-job-postings.polished-boat-17b2.workers.dev/api/big-tech)
- **Aggregated Jobs API:** [`GET /api/jobs`](https://ai-job-postings.polished-boat-17b2.workers.dev/api/jobs)
- **Azure Sync History API:** [`GET /api/azure-history`](https://ai-job-postings.polished-boat-17b2.workers.dev/api/azure-history)
- **Health Check:** [`GET /api/health`](https://ai-job-postings.polished-boat-17b2.workers.dev/api/health)

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

## 🚀 Deployment & Push

```bash
# Validate build & bundle
npm run build

# Deploy to Cloudflare Edge using JIT Azure Key Vault secrets
npm run deploy:azure

# Test all edge & admin routes
npm run test https://ai-job-postings.polished-boat-17b2.workers.dev
```
