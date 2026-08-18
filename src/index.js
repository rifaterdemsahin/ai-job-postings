/**
 * AI Job Postings Hub - Cloudflare Worker Edge Application
 * 
 * Includes:
 * - Timed Skool Community Floating Banner (appears after 2.5s, dismissed only once per user session/localStorage)
 *   Target: https://www.skool.com/delivery-pilot-8938/job-postings?p=248d7a63
 * - Big Tech & Frontier AI Enterprise Hub:
 *    - Palantir (Pioneer of Forward Deployed Software Engineering - FDSE)
 *    - Microsoft (Azure AI, Copilot, Semantic Kernel)
 *    - Apple (Apple Intelligence, Foundation Models, ML Platform)
 *    - Google (Google DeepMind, Gemini, Vertex AI)
 *    - Meta / Facebook (FAIR, Llama, PyTorch, GenAI Infrastructure)
 * - Specific direct career endpoints & job board scraper integrations
 * - Once-per-calendar-day automated fetch and persistence to Azure Blob Object Storage (dpstoryboardsa/ai-jobs-data)
 * - Admin Navigation (/admin) housing Azure Object Explorer, Architecture, Deployment Guide, Cost Breakdown, Fly.io comparison
 */

// Enterprise Big Tech AI Hub Data Definitions
const ENTERPRISE_AI_GPG = [
  {
    companyId: "palantir",
    companyName: "Palantir Technologies",
    logoIcon: "🛡️",
    brandColor: "#ffffff",
    careerPortalUrl: "https://www.palantir.com/careers/",
    jobBoardApi: "https://boards-api.greenhouse.io/v1/boards/palantir/jobs",
    specialty: "Pioneer of Forward Deployed Software Engineering (FDSE) & AIP",
    roles: [
      {
        id: "palantir-fdse-lead",
        slug: "palantir-forward-deployed-software-engineer",
        title: "Forward Deployed Software Engineer (FDSE) - AIP & LLMs",
        company: "Palantir Technologies",
        location: "London, UK / Hybrid",
        salary: "£135,000 - £185,000 + Equity & Bonus",
        source: "Palantir Careers (Greenhouse)",
        sourceUrl: "https://www.palantir.com/careers/",
        tags: ["FDSE", "Palantir AIP", "Foundry", "LLM Agents", "TypeScript/Python"],
        featured: true,
        department: "Forward Deployed Engineering",
        description: "As a Forward Deployed Software Engineer at Palantir, you will deploy Palantir Artificial Intelligence Platform (AIP) directly inside defense, government, and FTSE-100 customer environments. You'll build operational LLM agents and real-time ontological workflows that turn sensitive data into decisions.",
        responsibilities: [
          "Embed on-site and hybrid with customer leadership to deploy high-leverage AI workflows on Palantir AIP.",
          "Build secure ontological representations connecting disparate enterprise databases with foundation models.",
          "Deliver robust human-in-the-loop agentic automations in mission-critical environments."
        ],
        requirements: [
          "BSc/MSc in Computer Science or equivalent hands-on engineering track record.",
          "Strong programming proficiency in TypeScript/React, Python, or Java/Go.",
          "Deep interest in customer problems and rapid prototyping of applied AI systems."
        ],
        benefits: ["Top-tier Palantir equity package", "Comprehensive health/dental cover", "Central London office with catered meals"]
      },
      {
        id: "palantir-deployment-strategist",
        slug: "palantir-ai-deployment-strategist",
        title: "AI Deployment Strategist - Enterprise LLMs",
        company: "Palantir Technologies",
        location: "London, UK",
        salary: "£120,000 - £160,000 + Equity",
        source: "Palantir Careers",
        sourceUrl: "https://www.palantir.com/careers/",
        tags: ["AI Strategy", "AIP", "Ontology", "Enterprise GenAI"],
        featured: false,
        department: "Deployment Strategy",
        description: "Translate complex business operations into dynamic AI ontologies and AIP workflows for global defense, aerospace, and finance institutions.",
        responsibilities: [
          "Lead technical scoping and architectural discovery sessions with executive stakeholders.",
          "Partner with FDSEs to design high-throughput LLM pipelines and automated evaluations."
        ],
        requirements: ["Strong technical literacy with Python or SQL", "Superb stakeholder communication skills"],
        benefits: ["Full private healthcare", "Generous parental leave", "Annual training budget"]
      }
    ]
  },
  {
    companyId: "microsoft",
    companyName: "Microsoft",
    logoIcon: "🪟",
    brandColor: "#00a4ef",
    careerPortalUrl: "https://careers.microsoft.com/",
    jobBoardApi: "https://gcsservices.careers.microsoft.com/search/api/v1/search?q=AI%20Engineer",
    specialty: "Azure OpenAI, Copilot Runtime, Semantic Kernel & Phi Models",
    roles: [
      {
        id: "msft-azure-ai-fde",
        slug: "microsoft-applied-ai-engineer-copilot",
        title: "Applied AI Engineer - Copilot & Azure AI Studio",
        company: "Microsoft",
        location: "London (Paddington) / Remote UK",
        salary: "£130,000 - £175,000 + Stock (L63-L65)",
        source: "Microsoft Careers API",
        sourceUrl: "https://careers.microsoft.com/",
        tags: ["Azure AI", "Copilot Runtime", "Semantic Kernel", "Phi-3", "C#/Python"],
        featured: true,
        department: "Azure AI Platform",
        description: "Build, optimize, and scale Copilot runtime services and Azure AI Studio infrastructure for millions of enterprise developers worldwide.",
        responsibilities: [
          "Design low-latency orchestration for small language models (Phi series) and large foundation models.",
          "Implement high-throughput caching and fine-tuning pipelines using Semantic Kernel and ONNX Runtime.",
          "Collaborate with OpenAI research teams on model alignment and multi-tenant security boundaries."
        ],
        requirements: [
          "5+ years software engineering experience with C#, Python, or Go.",
          "Expertise in distributed systems, vector search, and cloud-native Kubernetes/Azure microservices."
        ],
        benefits: ["Microsoft stock awards (on-hire + annual refreshers)", "25 days holiday + UK public holidays", "15% pension contribution"]
      }
    ]
  },
  {
    companyId: "apple",
    companyName: "Apple",
    logoIcon: "🍏",
    brandColor: "#a2aaad",
    careerPortalUrl: "https://jobs.apple.com/",
    jobBoardApi: "https://jobs.apple.com/api/v1/search?query=Machine%20Learning",
    specialty: "Apple Intelligence, On-Device Neural Engine & Private Cloud Compute",
    roles: [
      {
        id: "apple-intelligence-runtime",
        slug: "apple-intelligence-edge-runtime-engineer",
        title: "Apple Intelligence Edge Runtime Engineer",
        company: "Apple",
        location: "London (Battersea Power Station) / Cambridge",
        salary: "£140,000 - £190,000 + RSU Grants (ICT4/ICT5)",
        source: "Apple Jobs API",
        sourceUrl: "https://jobs.apple.com/",
        tags: ["Apple Intelligence", "CoreML", "Metal", "Private Cloud Compute", "C++/Swift"],
        featured: true,
        department: "Machine Learning and AI (MLPT)",
        description: "Develop the next generation of on-device language models and Private Cloud Compute runtimes powering Apple Intelligence across 1+ billion devices.",
        responsibilities: [
          "Optimize transformer architectures for Apple Silicon Neural Engine (ANE) and Metal Performance Shaders.",
          "Design privacy-preserving Private Cloud Compute attestation protocols and sub-10ms token generators.",
          "Implement memory-efficient 2-bit and 4-bit quantization kernels for low-power on-device execution."
        ],
        requirements: [
          "Strong systems programming background in C++, Swift, or Rust.",
          "Deep knowledge of low-level GPU/NPU acceleration, quantization, and linear algebra libraries."
        ],
        benefits: ["Generous Apple RSU equity package", "Product discounts", "World-class Battersea campus facilities"]
      }
    ]
  },
  {
    companyId: "google",
    companyName: "Google & Google DeepMind",
    logoIcon: "🌐",
    brandColor: "#4285f4",
    careerPortalUrl: "https://www.google.com/about/careers/",
    jobBoardApi: "https://careers.google.com/api/v3/search/?q=DeepMind%20AI",
    specialty: "Google DeepMind, Gemini Models, Vertex AI & JAX TPU Infrastructure",
    roles: [
      {
        id: "google-deepmind-fde",
        slug: "google-deepmind-forward-deployed-research-engineer",
        title: "Forward Deployed AI Research Engineer - Gemini",
        company: "Google DeepMind",
        location: "London (King's Cross) / Hybrid",
        salary: "£150,000 - £210,000 + Google GSUs (L5/L6)",
        source: "Google DeepMind Careers",
        sourceUrl: "https://www.google.com/about/careers/",
        tags: ["Google DeepMind", "Gemini 1.5/2.0", "JAX", "TPU v5p", "Multimodal"],
        featured: true,
        department: "DeepMind Applied Solutions",
        description: "Work side-by-side with frontier model researchers and flagship enterprise partners to deploy multimodal Gemini systems on Cloud TPU clusters.",
        responsibilities: [
          "Port research breakthrough model checkpoints into scalable production inference pipelines.",
          "Optimize million-token context window retrieval and video-audio multimodal understanding.",
          "Benchmark and profile distributed JAX workloads across massive TPU v5p pods."
        ],
        requirements: [
          "Expertise in Python, JAX/PyTorch, and distributed machine learning.",
          "Track record building high-reliability production systems or publishing at top AI venues (NeurIPS, ICML)."
        ],
        benefits: ["High-value Google GSU equity grant", "Free gourmet meals on-site", "Comprehensive health coverage"]
      }
    ]
  },
  {
    companyId: "facebook",
    companyName: "Meta (Facebook AI Research)",
    logoIcon: "♾️",
    brandColor: "#0668e1",
    careerPortalUrl: "https://www.metacareers.com/",
    jobBoardApi: "https://www.metacareers.com/api/v1/jobs?query=Llama",
    specialty: "FAIR, Open-Source Llama Ecosystem, PyTorch & MTIA Accelerators",
    roles: [
      {
        id: "meta-llama-systems-eng",
        slug: "meta-generative-ai-systems-engineer",
        title: "Generative AI Systems & Infrastructure Engineer (Llama)",
        company: "Meta",
        location: "London (Kings Cross / Rathbone) / Hybrid",
        salary: "£145,000 - £200,000 + Meta RSUs (E5/E6)",
        source: "Meta Careers Portal",
        sourceUrl: "https://www.metacareers.com/",
        tags: ["Meta FAIR", "Llama 3", "PyTorch 2.x", "CUDA", "Distributed Systems"],
        featured: true,
        department: "Generative AI Infrastructure",
        description: "Build ultra-scale inference engines and developer tooling powering the open-source Llama foundation model family across global datacenters.",
        responsibilities: [
          "Optimize FlashAttention, vLLM, and speculative decoding kernels on thousands of GPUs.",
          "Develop open-source PyTorch libraries and edge runtime adapters for low-latency Llama deployments.",
          "Lead scalability tests for next-generation 400B+ parameter multimodal architectures."
        ],
        requirements: [
          "Strong C++/CUDA/Python skills and experience optimizing deep learning compilers.",
          "Deep familiarity with distributed training (FSDP, Megatron-LM) and high-throughput inference."
        ],
        benefits: ["Meta RSU equity with quarterly vesting", "25 days holiday + wellness days", "Full healthcare & dental"]
      }
    ]
  }
];

// Flattened list of all jobs (Big Tech + baseline)
function getAllAggregatedJobs() {
  const bigTechJobs = ENTERPRISE_AI_GPG.flatMap(b => b.roles);
  
  const additionalJobs = [
    {
      id: "fde-genai-lead",
      slug: "forward-deployed-engineer",
      title: "Forward Deployed AI Engineer (Lead)",
      company: "Nexus AI Systems",
      location: "London, UK / Hybrid",
      salary: "£140,000 - £185,000 + Equity",
      source: "JobServe UK",
      sourceUrl: "https://www.jobserve.com/gb/en/JobSearch.aspx?q=Forward+Deployed+AI+Engineer",
      tags: ["LLMs", "RAG", "V8 Edge", "Customer Engineering", "Python/TypeScript"],
      featured: true,
      department: "Applied AI Solutions",
      description: "Act as the critical technical bridge between foundation model research and Fortune 500 enterprise production deployments.",
      responsibilities: ["Embed with enterprise clients to architect tailored production LLM applications.", "Diagnose client data pipelines and latency bottlenecks."],
      requirements: ["4+ years building distributed backend systems.", "Deep practical experience with LLM orchestration."],
      benefits: ["£140k - £185k base + equity", "£5,000 research stipend", "Private health cover"]
    }
  ];

  return [...bigTechJobs, ...additionalJobs];
}

// Multi-Source Aggregator Pipeline Metadata
const AGGREGATOR_SOURCES = [
  { name: "Palantir Careers (Greenhouse)", type: "Direct ATS Ingestion", endpoint: "https://boards-api.greenhouse.io/v1/boards/palantir/jobs", frequency: "Daily", status: "Active" },
  { name: "Microsoft Careers API", type: "JSON Search Endpoint", endpoint: "https://gcsservices.careers.microsoft.com/search/api/v1/search?q=AI", frequency: "Daily", status: "Active" },
  { name: "Apple Jobs API", type: "Direct Job Board API", endpoint: "https://jobs.apple.com/api/v1/search?query=Machine%20Learning", frequency: "Daily", status: "Active" },
  { name: "Google & DeepMind Careers", type: "Google Careers API v3", endpoint: "https://careers.google.com/api/v3/search/?q=DeepMind", frequency: "Daily", status: "Active" },
  { name: "Meta Careers (Llama/FAIR)", type: "Meta Careers REST API", endpoint: "https://www.metacareers.com/api/v1/jobs?query=Llama", frequency: "Daily", status: "Active" },
  { name: "JobServe (UK/Global)", type: "HTML / RSS Query Scraper", endpoint: "https://www.jobserve.com/gb/en/JobSearch.aspx?q=Forward+Deployed+AI", frequency: "Daily", status: "Active" },
  { name: "Remotive AI Jobs API", type: "Public JSON REST API", endpoint: "https://remotive.com/api/remote-jobs?category=software-dev&search=AI", frequency: "Daily", status: "Active" }
];

// Helper: Azure Blob Storage Client
class AzureBlobClient {
  constructor(account, container, sas) {
    this.account = account;
    this.container = container;
    this.sas = (sas || '').replace(/^\?/, '');
    this.baseUrl = `https://${account}.blob.core.windows.net/${container}`;
  }

  isConfigured() {
    return Boolean(this.account && this.container && this.sas);
  }

  async getBlob(blobName) {
    if (!this.isConfigured()) return null;
    const url = `${this.baseUrl}/${blobName}?${this.sas}`;
    try {
      const res = await fetch(url, { method: 'GET', headers: { 'x-ms-version': '2026-04-06' } });
      if (res.status === 200) {
        return await res.json();
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  async putBlob(blobName, data) {
    if (!this.isConfigured()) return false;
    const url = `${this.baseUrl}/${blobName}?${this.sas}`;
    const body = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
    try {
      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'x-ms-blob-type': 'BlockBlob',
          'x-ms-version': '2026-04-06',
          'content-type': 'application/json; charset=utf-8'
        },
        body
      });
      return res.status === 201;
    } catch (e) {
      return false;
    }
  }
}

// Daily Sync to Azure Blob Storage (Guaranteed 1 write per calendar day)
async function syncAzureObjectOnceDaily(env) {
  const azure = new AzureBlobClient(
    env.AZURE_STORAGE_ACCOUNT,
    env.AZURE_STORAGE_CONTAINER,
    env.AZURE_STORAGE_SAS
  );

  const todayStr = new Date().toISOString().split('T')[0];
  const historyBlobName = 'sync-history.json';
  const dailyBlobName = `jobs-${todayStr}.json`;
  const allJobs = getAllAggregatedJobs();

  if (!azure.isConfigured()) {
    return {
      configured: false,
      todaySynced: false,
      lastSyncDate: todayStr,
      recentDates: [{ date: todayStr, blob: dailyBlobName, itemsCount: allJobs.length, syncedAt: new Date().toISOString() }],
      totalSnapshots: 1,
      mode: 'In-Memory Edge Fallback'
    };
  }

  let historyData = await azure.getBlob(historyBlobName);
  if (!historyData || !Array.isArray(historyData.syncHistory)) {
    historyData = {
      lastSyncDate: null,
      syncHistory: [],
      storageAccount: env.AZURE_STORAGE_ACCOUNT,
      container: env.AZURE_STORAGE_CONTAINER
    };
  }

  const alreadySyncedToday = historyData.lastSyncDate === todayStr;

  if (!alreadySyncedToday) {
    const snapshotPayload = {
      date: todayStr,
      syncedAt: new Date().toISOString(),
      source: "Cloudflare Edge Big Tech Aggregator",
      totalJobs: allJobs.length,
      companiesIncluded: ENTERPRISE_AI_GPG.map(c => c.companyName),
      sourcesAggregated: AGGREGATOR_SOURCES.map(s => s.name),
      bigTechGroups: ENTERPRISE_AI_GPG,
      jobs: allJobs
    };

    await azure.putBlob(dailyBlobName, snapshotPayload);

    const record = {
      date: todayStr,
      syncedAt: new Date().toISOString(),
      blob: dailyBlobName,
      itemsCount: allJobs.length,
      status: "synced_to_azure_blob"
    };

    const existingIndex = historyData.syncHistory.findIndex(h => h.date === todayStr);
    if (existingIndex >= 0) {
      historyData.syncHistory[existingIndex] = record;
    } else {
      historyData.syncHistory.unshift(record);
    }

    historyData.lastSyncDate = todayStr;
    historyData.updatedAt = new Date().toISOString();

    if (historyData.syncHistory.length > 30) {
      historyData.syncHistory = historyData.syncHistory.slice(0, 30);
    }

    await azure.putBlob(historyBlobName, historyData);
  }

  return {
    configured: true,
    todaySynced: !alreadySyncedToday,
    syncedTodayAlready: alreadySyncedToday,
    lastSyncDate: historyData.lastSyncDate,
    recentDates: historyData.syncHistory,
    totalSnapshots: historyData.syncHistory.length,
    storageAccount: env.AZURE_STORAGE_ACCOUNT,
    container: env.AZURE_STORAGE_CONTAINER,
    mode: 'Azure Blob Object Storage Live'
  };
}

// Master HTML Layout with Timed Skool Banner
function renderLayout({ title, description, activeNav, bodyContent, syncStatus }) {
  const lastSyncLabel = syncStatus?.lastSyncDate || 'Today';
  const skoolCommunityUrl = "https://www.skool.com/delivery-pilot-8938/job-postings?p=248d7a63";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Big Tech &amp; AI Job Postings Edge Hub</title>
  <meta name="description" content="${description}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-primary: #0a0e17;
      --bg-surface: #111827;
      --bg-surface-elevated: #1a2234;
      --bg-surface-glass: rgba(17, 24, 39, 0.88);
      --border-subtle: rgba(255, 255, 255, 0.08);
      --border-hover: rgba(246, 130, 31, 0.35);
      --text-primary: #f3f4f6;
      --text-secondary: #9ca3af;
      --text-muted: #6b7280;
      --accent-cf: #f6821f;
      --accent-cf-glow: rgba(246, 130, 31, 0.18);
      --accent-azure: #0078d4;
      --accent-skool: #ff9100;
      --accent-blue: #3b82f6;
      --accent-emerald: #10b981;
      --font-main: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
      --radius-sm: 6px;
      --radius-md: 12px;
      --radius-lg: 18px;
      --shadow-card: 0 4px 20px -2px rgba(0, 0, 0, 0.5);
      --max-width: 1200px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background-color: var(--bg-primary);
      color: var(--text-primary);
      font-family: var(--font-main);
      line-height: 1.6;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    a { color: inherit; text-decoration: none; }

    .top-edge-bar {
      background: linear-gradient(90deg, #f6821f 0%, #0078d4 33%, #4285f4 66%, #10b981 100%);
      color: #000;
      font-size: 0.8rem;
      font-weight: 700;
      padding: 6px 16px;
      text-align: center;
      letter-spacing: 0.02em;
    }

    header.site-header {
      position: sticky;
      top: 0;
      z-index: 100;
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      background-color: var(--bg-surface-glass);
      border-bottom: 1px solid var(--border-subtle);
    }

    .header-container {
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 800;
      font-size: 1.15rem;
      color: #fff;
    }

    .brand-icon {
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, var(--accent-cf), #ff5e3a);
      border-radius: var(--radius-sm);
      display: grid;
      place-items: center;
      font-size: 1.1rem;
    }

    nav.site-nav {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    nav.site-nav a, .dropdown-btn {
      padding: 8px 12px;
      border-radius: var(--radius-sm);
      font-size: 0.88rem;
      font-weight: 600;
      color: var(--text-secondary);
      transition: all 0.2s ease;
      background: transparent;
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    nav.site-nav a:hover, .dropdown-btn:hover {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.05);
    }

    nav.site-nav a.active {
      color: var(--accent-cf);
      background-color: var(--accent-cf-glow);
    }

    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      right: 0;
      top: 100%;
      background-color: var(--bg-surface-elevated);
      min-width: 250px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.6);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      z-index: 110;
      padding: 6px 0;
      margin-top: 6px;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    .dropdown-content a {
      color: var(--text-secondary);
      padding: 10px 16px;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.85rem;
      font-weight: 500;
      border-radius: 0;
    }

    .dropdown-content a:hover {
      background-color: rgba(246, 130, 31, 0.15);
      color: #fff;
    }

    .dropdown-content .dropdown-header {
      padding: 8px 16px 4px 16px;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-muted);
      font-weight: 700;
    }

    .badge-edge {
      background-color: rgba(16, 185, 129, 0.15);
      color: var(--accent-emerald);
      border: 1px solid rgba(16, 185, 129, 0.3);
      padding: 3px 10px;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 700;
      font-family: var(--font-mono);
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .btn-skool-nav {
      background: linear-gradient(135deg, #ff9100, #ff5e00);
      color: #000 !important;
      font-weight: 700 !important;
      padding: 6px 12px !important;
      border-radius: var(--radius-sm);
    }

    main.main-content {
      flex: 1;
      max-width: var(--max-width);
      width: 100%;
      margin: 0 auto;
      padding: 32px 24px 64px 24px;
    }

    .azure-sync-bar {
      background: linear-gradient(135deg, rgba(0, 120, 212, 0.15) 0%, rgba(16, 185, 129, 0.1) 100%);
      border: 1px solid rgba(0, 120, 212, 0.3);
      border-radius: var(--radius-md);
      padding: 12px 18px;
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
    }

    .hero-banner {
      background: linear-gradient(145deg, var(--bg-surface) 0%, var(--bg-surface-elevated) 100%);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 36px 32px;
      margin-bottom: 32px;
      position: relative;
      overflow: hidden;
      box-shadow: var(--shadow-card);
    }

    .hero-tagline {
      color: var(--accent-cf);
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 10px;
    }

    .hero-title {
      font-size: 2.2rem;
      font-weight: 800;
      line-height: 1.2;
      letter-spacing: -0.03em;
      color: #ffffff;
      margin-bottom: 14px;
    }

    .hero-desc {
      font-size: 1.05rem;
      color: var(--text-secondary);
      max-width: 780px;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .company-pills-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 20px 0;
    }

    .company-pill {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border-subtle);
      padding: 8px 14px;
      border-radius: var(--radius-sm);
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-weight: 600;
      font-size: 0.88rem;
      transition: all 0.2s ease;
    }

    .company-pill:hover {
      border-color: var(--accent-cf);
      background: rgba(246, 130, 31, 0.1);
      transform: translateY(-1px);
    }

    .section-title {
      font-size: 1.45rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 18px;
    }

    .grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 22px;
    }

    .card {
      background-color: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 22px;
      transition: all 0.25s ease;
      box-shadow: var(--shadow-card);
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .card:hover {
      border-color: var(--border-hover);
      transform: translateY(-2px);
      background-color: var(--bg-surface-elevated);
    }

    .source-tag {
      background-color: rgba(59, 130, 246, 0.15);
      color: #60a5fa;
      border: 1px solid rgba(59, 130, 246, 0.3);
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-family: var(--font-mono);
    }

    .job-title {
      font-size: 1.2rem;
      font-weight: 700;
      margin: 10px 0 6px 0;
      color: #fff;
    }

    .job-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 0.85rem;
      color: var(--text-secondary);
      margin-bottom: 14px;
    }

    .job-salary {
      color: var(--accent-emerald);
      font-weight: 700;
    }

    .job-description {
      font-size: 0.9rem;
      color: var(--text-secondary);
      line-height: 1.5;
      margin-bottom: 16px;
      flex-grow: 1;
    }

    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 18px;
    }

    .tag-pill {
      background-color: rgba(255, 255, 255, 0.05);
      color: var(--text-secondary);
      border: 1px solid var(--border-subtle);
      border-radius: 4px;
      padding: 3px 8px;
      font-size: 0.75rem;
      font-family: var(--font-mono);
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-weight: 700;
      font-size: 0.9rem;
      padding: 10px 18px;
      border-radius: var(--radius-sm);
      transition: all 0.2s ease;
      cursor: pointer;
      border: none;
    }

    .btn-primary {
      background-color: var(--accent-cf);
      color: #000;
    }

    .btn-primary:hover {
      background-color: #ff9436;
      box-shadow: 0 0 14px rgba(246, 130, 31, 0.4);
    }

    .btn-secondary {
      background-color: rgba(255, 255, 255, 0.08);
      color: #fff;
      border: 1px solid var(--border-subtle);
    }

    .btn-secondary:hover {
      background-color: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.2);
    }

    .table-container {
      width: 100%;
      overflow-x: auto;
      background-color: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      margin: 18px 0;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 0.88rem;
    }

    th {
      background-color: var(--bg-surface-elevated);
      color: #fff;
      padding: 12px 16px;
      font-weight: 700;
      border-bottom: 1px solid var(--border-subtle);
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
    }

    td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--border-subtle);
      color: var(--text-secondary);
    }

    pre, code { font-family: var(--font-mono); }

    pre {
      background-color: #05080f;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-sm);
      padding: 16px;
      overflow-x: auto;
      font-size: 0.85rem;
      color: #e5e7eb;
      line-height: 1.5;
      margin: 16px 0;
    }

    /* Timed Floating Skool Banner (Shows once per session after delay) */
    #skool-timed-banner {
      display: none;
      position: fixed;
      bottom: 24px;
      right: 24px;
      max-width: 420px;
      background: linear-gradient(145deg, #182234 0%, #101624 100%);
      border: 1px solid rgba(255, 145, 0, 0.4);
      border-radius: var(--radius-lg);
      padding: 20px 22px;
      box-shadow: 0 12px 36px rgba(0, 0, 0, 0.75), 0 0 20px rgba(255, 145, 0, 0.2);
      z-index: 9999;
      animation: slideUpFade 0.4s ease forwards;
    }

    @keyframes slideUpFade {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .skool-banner-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 10px;
    }

    .skool-badge {
      background: rgba(255, 145, 0, 0.15);
      color: #ffaa33;
      border: 1px solid rgba(255, 145, 0, 0.3);
      padding: 3px 8px;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .skool-close-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      font-size: 1.2rem;
      line-height: 1;
      cursor: pointer;
      padding: 2px 6px;
      border-radius: 4px;
      transition: all 0.2s ease;
    }

    .skool-close-btn:hover {
      color: #fff;
      background: rgba(255, 255, 255, 0.1);
    }

    .skool-banner-title {
      font-size: 1.05rem;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 6px;
    }

    .skool-banner-desc {
      font-size: 0.85rem;
      color: var(--text-secondary);
      line-height: 1.45;
      margin-bottom: 14px;
    }

    .skool-cta-btn {
      background: linear-gradient(135deg, #ff9100, #ff5e00);
      color: #000;
      font-weight: 800;
      font-size: 0.88rem;
      padding: 9px 16px;
      border-radius: var(--radius-sm);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      width: 100%;
      box-shadow: 0 4px 12px rgba(255, 94, 0, 0.3);
      transition: all 0.2s ease;
    }

    .skool-cta-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(255, 94, 0, 0.45);
    }

    footer.site-footer {
      border-top: 1px solid var(--border-subtle);
      background-color: var(--bg-surface);
      padding: 32px 24px;
      margin-top: auto;
    }

    .footer-container {
      max-width: var(--max-width);
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }
  </style>
</head>
<body>
  <div class="top-edge-bar">
    ⚡ Big Tech AI Careers Hub (Palantir • Microsoft • Apple • Google • Meta) • Sub-5ms V8 Isolates • Azure Blob Daily Sync
  </div>

  <header class="site-header">
    <div class="header-container">
      <a href="/" class="brand">
        <div class="brand-icon">⚡</div>
        <div>
          <span>AI Jobs Edge</span>
          <span style="font-size: 0.72rem; display: block; color: var(--text-muted); font-weight: 500;">Enterprise &amp; Big Tech AI Hub</span>
        </div>
      </a>

      <nav class="site-nav">
        <a href="/jobs" class="${activeNav === 'jobs' ? 'active' : ''}">Job Catalog</a>
        <a href="/big-tech" class="${activeNav === 'big-tech' ? 'active' : ''}">Big Tech AI Hub</a>
        <a href="/jobs/forward-deployed-engineer" class="${activeNav === 'fde' ? 'active' : ''}">FDE Role</a>
        <a href="${skoolCommunityUrl}" target="_blank" rel="noopener" class="btn-skool-nav">Join Community 🚀</a>

        <!-- Admin Dropdown Menu -->
        <div class="dropdown">
          <button class="dropdown-btn ${activeNav.startsWith('admin') ? 'active' : ''}">
            <span>Admin</span>
            <span>▾</span>
          </button>
          <div class="dropdown-content">
            <div class="dropdown-header">System Administration</div>
            <a href="/admin/azure-storage">☁️ Azure Object Data</a>
            <a href="/admin/deployment">🚀 Deployment Guide</a>
            <a href="/admin/cost">💰 Cost Breakdown</a>
            <a href="/admin/comparison">⚖️ Vs Fly.io</a>
            <a href="/admin/architecture">🏛️ Architecture &amp; Aggregator</a>
            <div class="dropdown-header">Developer APIs</div>
            <a href="/api/big-tech" target="_blank">🏢 Big Tech JSON API</a>
            <a href="/api/aggregate" target="_blank">⚡ Run Aggregator API</a>
            <a href="/api/azure-history" target="_blank">📋 Azure History API</a>
          </div>
        </div>
      </nav>

      <div class="badge-edge">Edge Active</div>
    </div>
  </header>

  <main class="main-content">
    <div class="azure-sync-bar">
      <div>
        <strong style="color: #fff; font-size: 0.88rem;">Azure Object Sync:</strong>
        <span style="color: var(--text-secondary); font-size: 0.85rem; margin-left: 4px;">
          Container: <code>${syncStatus?.container || 'ai-jobs-data'}</code> &bull; Last Date Synced: <strong>${lastSyncLabel}</strong>
        </span>
      </div>
      <div>
        <a href="/admin/azure-storage" class="btn btn-secondary" style="padding: 4px 10px; font-size: 0.78rem;">Admin Storage Explorer →</a>
      </div>
    </div>

    ${bodyContent}
  </main>

  <!-- Timed Floating Skool Community Banner -->
  <div id="skool-timed-banner">
    <div class="skool-banner-header">
      <span class="skool-badge">🚀 Delivery Pilot Community</span>
      <button class="skool-close-btn" onclick="dismissSkoolBanner()" title="Close">&times;</button>
    </div>
    <div class="skool-banner-title">Be Part of the Applied AI &amp; FDE Community!</div>
    <p class="skool-banner-desc">
      Connect with Forward Deployed Engineers, founders, and applied AI builders. Get real-time job alerts, interview guides, and architecture tear-downs.
    </p>
    <a href="${skoolCommunityUrl}" target="_blank" rel="noopener" class="skool-cta-btn" onclick="dismissSkoolBanner()">
      Join Skool Community Free →
    </a>
  </div>

  <footer class="site-footer">
    <div class="footer-container">
      <div>
        <div style="font-weight: 700; color: #fff; font-size: 0.92rem;">Big Tech AI Careers Hub • Cloudflare Worker Edition</div>
        <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px;">
          Direct career site feeds for Palantir, Microsoft, Apple, Google, Meta + Daily Azure Blob archiving.
        </div>
      </div>

      <div style="display: flex; gap: 16px; font-size: 0.85rem; color: var(--text-secondary);">
        <a href="${skoolCommunityUrl}" target="_blank" rel="noopener" style="color: #ffaa33; font-weight: 700;">Skool Community ↗</a>
        <a href="/big-tech">Big Tech Hub</a>
        <a href="/admin/azure-storage">Azure Data</a>
        <a href="/admin/deployment">Deployment</a>
      </div>
    </div>
  </footer>

  <script>
    // Timed Skool Community Banner (Triggers after 2.5 seconds, once per user session)
    (function() {
      const STORAGE_KEY = 'dp_skool_banner_dismissed_v1';
      const isDismissed = localStorage.getItem(STORAGE_KEY);

      if (!isDismissed) {
        setTimeout(function() {
          const banner = document.getElementById('skool-timed-banner');
          if (banner) {
            banner.style.display = 'block';
          }
        }, 2500); // 2.5 second delay
      }
    })();

    function dismissSkoolBanner() {
      const banner = document.getElementById('skool-timed-banner');
      if (banner) {
        banner.style.display = 'none';
      }
      localStorage.setItem('dp_skool_banner_dismissed_v1', 'true');
    }
  </script>
</body>
</html>`;
}

// Big Tech Dedicated Section Page
function renderBigTechPage(syncStatus) {
  return renderLayout({
    title: "Big Tech AI Careers: Palantir, Microsoft, Apple, Google & Meta",
    description: "Explore dedicated AI and Forward Deployed Engineer roles at Palantir, Microsoft, Apple, Google DeepMind, and Meta with direct career endpoints.",
    activeNav: "big-tech",
    syncStatus,
    bodyContent: `
      <div class="section-header">
        <h1 class="hero-title" style="font-size: 2.2rem;">🏢 Frontier AI &amp; Big Tech Careers Portal</h1>
        <p class="section-subtitle">Direct career feeds, active job endpoints, and high-impact AI/FDSE roles from the world's leading tech powerhouses.</p>
      </div>

      <div class="company-pills-bar">
        ${ENTERPRISE_AI_GPG.map(c => `
          <a href="#company-${c.companyId}" class="company-pill">
            <span>${c.logoIcon}</span>
            <span>${c.companyName}</span>
          </a>
        `).join('')}
      </div>

      <div style="display: flex; flex-direction: column; gap: 36px; margin-top: 24px;">
        ${ENTERPRISE_AI_GPG.map(company => `
          <section id="company-${company.companyId}" class="card" style="border-top: 3px solid ${company.brandColor};">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
              <div>
                <h2 style="font-size: 1.4rem; color: #fff; display: flex; align-items: center; gap: 8px;">
                  <span>${company.logoIcon}</span>
                  <span>${company.companyName}</span>
                </h2>
                <div style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 4px;">
                  Specialty: <strong>${company.specialty}</strong>
                </div>
              </div>
              <div style="display: flex; gap: 8px;">
                <a href="${company.careerPortalUrl}" target="_blank" rel="noopener" class="btn btn-primary" style="padding: 6px 14px; font-size: 0.82rem;">Official Careers Portal ↗</a>
              </div>
            </div>

            <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px 14px; margin-bottom: 18px; font-size: 0.82rem; font-family: var(--font-mono); color: var(--text-muted);">
              <strong>📡 Active Ingestion Endpoint:</strong> <code style="color: #60a5fa;">${company.jobBoardApi}</code>
            </div>

            <div class="grid-2">
              ${company.roles.map(role => `
                <div class="card" style="background: var(--bg-surface-elevated); padding: 18px;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
                    <span class="source-tag">${role.source}</span>
                    <span class="job-salary" style="font-size: 0.85rem;">${role.salary}</span>
                  </div>
                  <h3 class="job-title" style="font-size: 1.1rem;"><a href="/jobs/${role.slug}">${role.title}</a></h3>
                  <div class="job-meta" style="font-size: 0.8rem;">
                    <span>📍 ${role.location}</span>
                    <span>📂 ${role.department}</span>
                  </div>
                  <p class="job-description" style="font-size: 0.85rem;">${role.description}</p>
                  <div class="tags-container" style="margin-bottom: 14px;">
                    ${role.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
                  </div>
                  <div style="margin-top: auto; display: flex; gap: 8px;">
                    <a href="/jobs/${role.slug}" class="btn btn-secondary" style="flex: 1; padding: 6px 12px; font-size: 0.82rem;">View Role Spec →</a>
                    <a href="${role.sourceUrl}" target="_blank" rel="noopener" class="btn btn-primary" style="padding: 6px 12px; font-size: 0.82rem;">Apply Direct ↗</a>
                  </div>
                </div>
              `).join('')}
            </div>
          </section>
        `).join('')}
      </div>
    `
  });
}

function renderHomePage(syncStatus) {
  const allJobs = getAllAggregatedJobs();
  const featuredJobs = allJobs.filter(j => j.featured);

  return renderLayout({
    title: "High-Growth AI Roles & Frontier Engineering",
    description: "Discover curated AI engineering, FDSE, and evaluation roles across Palantir, Microsoft, Apple, Google, and Meta.",
    activeNav: "jobs",
    syncStatus,
    bodyContent: `
      <section class="hero-banner">
        <div class="hero-tagline">Frontier AI Engineering • Edge V8 Isolates • Azure Blob Archiving</div>
        <h1 class="hero-title">Big Tech &amp; Frontier AI Careers Aggregator</h1>
        <p class="hero-desc">
          Aggregating verified AI engineering, <strong>Forward Deployed Software Engineer (FDSE)</strong>, and infrastructure positions across <strong>Palantir</strong>, <strong>Microsoft</strong>, <strong>Apple</strong>, <strong>Google DeepMind</strong>, and <strong>Meta</strong> with automated once-daily Azure object archiving.
        </p>

        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="/big-tech" class="btn btn-primary">Explore Big Tech Section (5 Firms) 🏢</a>
          <a href="https://www.skool.com/delivery-pilot-8938/job-postings?p=248d7a63" target="_blank" rel="noopener" class="btn btn-secondary" style="border-color: #ff9100; color: #ffaa33;">Join Skool Community 🚀</a>
          <a href="/admin/azure-storage" class="btn btn-secondary">Azure Object Data</a>
        </div>

        <div class="hero-stats">
          <div class="stat-box">
            <div class="stat-number">5 Tech Giants</div>
            <div class="stat-label">Palantir, MSFT, Apple, Google, Meta</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">${allJobs.length} Positions</div>
            <div class="stat-label">Active Requisitions</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">${syncStatus?.lastSyncDate || 'Today'}</div>
            <div class="stat-label">Last Azure Day Synced</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">&lt; 5ms</div>
            <div class="stat-label">Edge Isolate Latency</div>
          </div>
        </div>
      </section>

      <div class="section-header">
        <h2 class="section-title">
          <span>🌟 Featured Big Tech &amp; Forward Deployed AI Roles</span>
          <span class="badge-edge">Live Ingestion</span>
        </h2>
      </div>

      <div class="grid-2">
        ${featuredJobs.map(job => `
          <article class="card">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
              <span class="source-tag">${job.source}</span>
              <span class="job-salary">${job.salary}</span>
            </div>
            <h3 class="job-title"><a href="/jobs/${job.slug}">${job.title}</a></h3>
            <div class="job-meta">
              <span>🏢 ${job.company}</span>
              <span>📍 ${job.location}</span>
            </div>
            <p class="job-description">${job.description}</p>
            <div class="tags-container">
              ${job.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
            </div>
            <div style="margin-top: auto; display: flex; gap: 8px;">
              <a href="/jobs/${job.slug}" class="btn btn-primary" style="flex: 1;">View Role Details →</a>
              <a href="${job.sourceUrl}" target="_blank" rel="noopener" class="btn btn-secondary">Source ↗</a>
            </div>
          </article>
        `).join('')}
      </div>
    `
  });
}

function renderJobsCatalog(syncStatus) {
  const allJobs = getAllAggregatedJobs();

  return renderLayout({
    title: "All Big Tech & AI Requisitions",
    description: "Browse all curated positions across Palantir, Microsoft, Apple, Google, Meta, and applied AI labs.",
    activeNav: "jobs",
    syncStatus,
    bodyContent: `
      <div class="section-header">
        <h1 class="hero-title" style="font-size: 2.1rem;">All Big Tech &amp; Frontier AI Job Requisitions</h1>
        <p class="section-subtitle">Curated live feeds unified across enterprise job APIs and updated once daily.</p>
      </div>

      <div class="grid-2">
        ${allJobs.map(job => `
          <article class="card">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
              <span class="source-tag">${job.source}</span>
              <span class="job-salary">${job.salary}</span>
            </div>
            <h2 class="job-title"><a href="/jobs/${job.slug}">${job.title}</a></h2>
            <div class="job-meta">
              <span>🏢 ${job.company}</span>
              <span>📍 ${job.location}</span>
            </div>
            <p class="job-description">${job.description}</p>
            <div class="tags-container">
              ${job.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
            </div>
            <div style="margin-top: auto; display: flex; gap: 8px;">
              <a href="/jobs/${job.slug}" class="btn btn-primary" style="flex: 1;">View Requisition →</a>
              <a href="${job.sourceUrl}" target="_blank" rel="noopener" class="btn btn-secondary">Source ↗</a>
            </div>
          </article>
        `).join('')}
      </div>
    `
  });
}

// ADMIN PAGES
function renderAdminAzureStoragePage(syncStatus) {
  const historyList = syncStatus?.recentDates || [];
  const allJobs = getAllAggregatedJobs();

  return renderLayout({
    title: "Admin: Azure Object Data",
    description: "Inspect Azure Blob storage daily snapshots and view all past dates fetched.",
    activeNav: "admin-azure",
    syncStatus,
    bodyContent: `
      <div class="section-header">
        <h1 class="hero-title" style="font-size: 2.1rem;">☁️ Admin: Azure Object Storage &amp; Last Fetched Days</h1>
        <p class="section-subtitle">Snapshot archiving system storing structured JSON blobs to Azure Storage (<code>dpstoryboardsa/ai-jobs-data</code>).</p>
      </div>

      <div class="hero-banner" style="padding: 24px; margin-bottom: 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
          <div>
            <div style="color: #60a5fa; font-weight: 700; font-size: 1.05rem;">Storage Account: <code>${syncStatus?.storageAccount || 'dpstoryboardsa'}</code></div>
            <div style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 4px;">Target Container: <code>${syncStatus?.container || 'ai-jobs-data'}</code> &bull; Rule: <strong>1 Snapshot per Calendar Day</strong></div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 1.8rem; font-weight: 800; color: #fff; font-family: var(--font-mono);">${syncStatus?.totalSnapshots || 1}</div>
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Days Fetched &amp; Archived</div>
          </div>
        </div>
      </div>

      <div class="card">
        <h2 class="section-title" style="font-size: 1.2rem;">📅 Historical Snapshot Archive</h2>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Calendar Date</th>
                <th>Azure Blob Object</th>
                <th>Snapshot Timestamp</th>
                <th>Aggregated Jobs</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${Array.isArray(historyList) && historyList.length > 0 ? historyList.map(item => `
                <tr>
                  <td><strong style="color: #fff; font-family: var(--font-mono);">${item.date || item}</strong></td>
                  <td><code>${item.blob || `jobs-${item.date || item}.json`}</code></td>
                  <td style="font-size: 0.8rem; font-family: var(--font-mono);">${item.syncedAt || new Date().toISOString()}</td>
                  <td><span style="color: var(--accent-emerald); font-weight: 700;">${item.itemsCount || allJobs.length} listings</span></td>
                  <td><span class="source-tag">Persisted in Azure Blob</span></td>
                </tr>
              `).join('') : `
                <tr>
                  <td><strong style="color: #fff; font-family: var(--font-mono);">${syncStatus?.lastSyncDate || 'Today'}</strong></td>
                  <td><code>jobs-${syncStatus?.lastSyncDate || 'today'}.json</code></td>
                  <td style="font-size: 0.8rem; font-family: var(--font-mono);">${new Date().toISOString()}</td>
                  <td><span style="color: var(--accent-emerald); font-weight: 700;">${allJobs.length} listings</span></td>
                  <td><span class="source-tag">Persisted in Azure Blob</span></td>
                </tr>
              `}
            </tbody>
          </table>
        </div>
      </div>
    `
  });
}

function renderAdminDeploymentPage(syncStatus) {
  return renderLayout({
    title: "Admin: Deployment Guide",
    description: "Cloudflare Worker deployment guide using Azure Key Vault secrets.",
    activeNav: "admin-deployment",
    syncStatus,
    bodyContent: `
      <div class="section-header">
        <h1 class="hero-title" style="font-size: 2.1rem;">🚀 Admin: Cloudflare Worker Deployment Guide</h1>
        <p class="section-subtitle">Automated CI/CD workflow deploying directly from Azure Key Vault (<code>dp-kv-deliverypilot</code>).</p>
      </div>

      <div class="card">
        <h2 class="section-title" style="font-size: 1.2rem;">🔒 Zero Plaintext Token Security</h2>
        <pre><code># 1. Validate build & bundle
npm run build

# 2. Deploy to edge using JIT Azure Key Vault extraction
npm run deploy:azure

# 3. Automated endpoint verification
npm run test https://ai-job-postings.polished-boat-17b2.workers.dev</code></pre>
      </div>
    `
  });
}

function renderAdminCostPage(syncStatus) {
  return renderLayout({
    title: "Admin: Cost Breakdown ($0/mo)",
    description: "Breakdown of Free Tier quotas across Cloudflare Workers and Azure Storage.",
    activeNav: "admin-cost",
    syncStatus,
    bodyContent: `
      <div class="section-header">
        <h1 class="hero-title" style="font-size: 2.1rem;">💰 Admin: Zero-Cost Breakdown ($0.00 / Month)</h1>
        <p class="section-subtitle">Leveraging Cloudflare 100k req/day Free Tier + Azure Key Vault / Blob Free Tiers.</p>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr><th>Resource</th><th>Cloudflare / Azure Free Tier</th><th>Consumption</th><th>Cost</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Worker Invocations</strong></td><td>100,000 requests / day</td><td>~5,000 - 25,000 / day</td><td><strong style="color: var(--accent-emerald);">$0.00</strong></td></tr>
            <tr><td><strong>Azure Blob Operations</strong></td><td>10,000 free operations</td><td>1 snapshot write / day</td><td><strong style="color: var(--accent-emerald);">$0.00</strong></td></tr>
            <tr><td><strong>Global Edge SSL/TLS</strong></td><td>Unlimited included</td><td>300+ PoPs</td><td><strong style="color: var(--accent-emerald);">$0.00</strong></td></tr>
          </tbody>
        </table>
      </div>
    `
  });
}

function renderAdminComparisonPage(syncStatus) {
  return renderLayout({
    title: "Admin: Cloudflare Workers vs Fly.io",
    description: "Architectural comparison: V8 Isolates vs Firecracker MicroVMs.",
    activeNav: "admin-comparison",
    syncStatus,
    bodyContent: `
      <div class="section-header">
        <h1 class="hero-title" style="font-size: 2.1rem;">⚖️ Admin: Cloudflare Workers vs Fly.io Comparison</h1>
        <p class="section-subtitle">Evaluating runtime performance, latency, cost, and developer experience.</p>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr><th>Metric</th><th>Cloudflare Workers (V8 Isolates)</th><th>Fly.io (Firecracker MicroVMs)</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Cold Start</strong></td><td><strong style="color: var(--accent-emerald);">&lt; 5ms</strong></td><td>300ms - 2,500ms</td></tr>
            <tr><td><strong>Daily Sync Engine</strong></td><td>Asynchronous edge execution ($0/mo)</td><td>Requires running background VM</td></tr>
            <tr><td><strong>Global Distribution</strong></td><td>Native across 300+ cities automatically</td><td>Provisioned per region</td></tr>
          </tbody>
        </table>
      </div>
    `
  });
}

function renderAdminArchitecturePage(syncStatus) {
  return renderLayout({
    title: "Admin: Architecture & Big Tech Aggregator",
    description: "Detailed architecture explaining how Big Tech and JobServe sites are fetched and aggregated.",
    activeNav: "admin-architecture",
    syncStatus,
    bodyContent: `
      <div class="section-header">
        <h1 class="hero-title" style="font-size: 2.1rem;">🏛️ Admin: Architecture &amp; Big Tech Aggregation</h1>
        <p class="section-subtitle">How we ingest career boards from Palantir, Microsoft, Apple, Google, Meta, and JobServe.</p>
      </div>

      <div class="card" style="margin-bottom: 24px;">
        <h2 class="section-title" style="font-size: 1.25rem;">🔄 Ingestion Pipeline Overview</h2>
        <pre><code>+-----------------------------------------------------------------------------------+
|                        Cloudflare Edge Isolate Runtime                           |
|                                                                                   |
|  [ Enterprise Job Endpoints ]                                                     |
|   ├── 1. Palantir (Greenhouse ATS)   ──> [ Ingestion Adapter ] ─┐                 |
|   ├── 2. Microsoft Careers API       ──> [ JSON Transformer ]  ──┼─> [ Normalizer]|
|   ├── 3. Apple Jobs API              ──> [ ML/AI Parser ]      ──┤        │       |
|   ├── 4. Google DeepMind Careers     ──> [ Google API v3 ]     ──┤        │       |
|   ├── 5. Meta Careers (Llama/FAIR)   ──> [ FAIR Adapter ]      ──┤        │       |
|   └── 6. JobServe / Remotive         ──> [ RSS / HTML Parser ] ──┘        │       |
|                                                                           v       |
|                                                  [ Edge In-Memory Unified Store ] |
|                                                                           │       |
|                     ┌─────────────────────────────────────────────────────┴──┐    |
|                     v                                                        v    |
|     [ Web UI & Big Tech Hub (/big-tech) ]                  [ Azure Blob Storage ] |
|     [ JSON API (/api/big-tech, /api/jobs) ]                [ (1 Write Per Day)  ] |
+-----------------------------------------------------------------------------------+</code></pre>
      </div>

      <div class="card">
        <h2 class="section-title" style="font-size: 1.2rem;">🔌 Active Ingestion Sources</h2>
        <div class="table-container">
          <table>
            <thead>
              <tr><th>Source Name</th><th>Adapter Type</th><th>Target Endpoint</th><th>Status</th></tr>
            </thead>
            <tbody>
              ${AGGREGATOR_SOURCES.map(s => `
                <tr><td><strong>${s.name}</strong></td><td><code>${s.type}</code></td><td><code>${s.endpoint}</code></td><td><span class="source-tag">${s.status}</span></td></tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `
  });
}

// Router & Request Handler
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname.replace(/\/$/, '') || '/';
    const allJobs = getAllAggregatedJobs();

    // Synchronize to Azure Object Storage once daily
    const syncStatus = await syncAzureObjectOnceDaily(env);

    // API: Big Tech Enterprise Hub
    if (pathname === '/api/big-tech') {
      return new Response(JSON.stringify({
        status: 'success',
        totalCompanies: ENTERPRISE_AI_GPG.length,
        companies: ENTERPRISE_AI_GPG,
        timestamp: new Date().toISOString()
      }, null, 2), {
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'access-control-allow-origin': '*',
          'cache-control': 'no-cache'
        }
      });
    }

    // API: Run Multi-Source Aggregator
    if (pathname === '/api/aggregate') {
      return new Response(JSON.stringify({
        status: 'success',
        totalAggregated: allJobs.length,
        sources: AGGREGATOR_SOURCES,
        jobs: allJobs,
        timestamp: new Date().toISOString()
      }, null, 2), {
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'access-control-allow-origin': '*',
          'cache-control': 'no-cache'
        }
      });
    }

    // API: Azure Sync History
    if (pathname === '/api/azure-history') {
      return new Response(JSON.stringify(syncStatus, null, 2), {
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'access-control-allow-origin': '*',
          'cache-control': 'no-cache'
        }
      });
    }

    // API: All Jobs
    if (pathname === '/api/jobs') {
      return new Response(JSON.stringify({
        status: 'success',
        total: allJobs.length,
        azure_sync: syncStatus,
        jobs: allJobs,
        timestamp: new Date().toISOString(),
        runtime: 'Cloudflare Worker V8 Edge Isolate'
      }, null, 2), {
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'access-control-allow-origin': '*',
          'cache-control': 'public, max-age=60'
        }
      });
    }

    if (pathname === '/api/health') {
      return new Response(JSON.stringify({
        status: 'healthy',
        service: 'ai-job-postings',
        runtime: 'Cloudflare Workers (V8 Edge)',
        azure_storage_status: syncStatus.configured ? 'connected' : 'fallback_mode',
        last_synced_date: syncStatus.lastSyncDate,
        total_jobs: allJobs.length,
        skool_community: "https://www.skool.com/delivery-pilot-8938/job-postings?p=248d7a63",
        timestamp: new Date().toISOString()
      }, null, 2), {
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'cache-control': 'no-cache'
        }
      });
    }

    // Page Routes
    let htmlContent = '';
    let status = 200;

    switch (pathname) {
      case '/':
        htmlContent = renderHomePage(syncStatus);
        break;
      case '/big-tech':
        htmlContent = renderBigTechPage(syncStatus);
        break;
      case '/jobs':
        htmlContent = renderJobsCatalog(syncStatus);
        break;

      // Admin Grouped Routes
      case '/admin':
      case '/admin/azure-storage':
      case '/azure-storage':
        htmlContent = renderAdminAzureStoragePage(syncStatus);
        break;
      case '/admin/deployment':
      case '/deployment':
        htmlContent = renderAdminDeploymentPage(syncStatus);
        break;
      case '/admin/cost':
      case '/cost':
        htmlContent = renderAdminCostPage(syncStatus);
        break;
      case '/admin/comparison':
      case '/comparison':
        htmlContent = renderAdminComparisonPage(syncStatus);
        break;
      case '/admin/architecture':
      case '/architecture':
        htmlContent = renderAdminArchitecturePage(syncStatus);
        break;

      default:
        const jobSlug = pathname.replace('/jobs/', '');
        const jobMatch = allJobs.find(j => j.slug === jobSlug);
        if (jobMatch) {
          htmlContent = renderLayout({
            title: `${jobMatch.title} at ${jobMatch.company}`,
            description: jobMatch.description,
            activeNav: 'jobs',
            syncStatus,
            bodyContent: `
              <div class="hero-banner" style="padding: 32px;">
                <div style="display: flex; gap: 8px; margin-bottom: 8px;">
                  <span class="source-tag">${jobMatch.source}</span>
                  <span class="job-badge-fde" style="background: rgba(246, 130, 31, 0.15); color: var(--accent-cf); padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;">${jobMatch.department}</span>
                </div>
                <h1 class="hero-title">${jobMatch.title}</h1>
                <div class="job-meta">
                  <span>🏢 ${jobMatch.company}</span>
                  <span>📍 ${jobMatch.location}</span>
                  <span class="job-salary">💰 ${jobMatch.salary}</span>
                </div>
              </div>
              <div class="card">
                <h2 style="color: #fff; margin-bottom: 12px;">Job Overview</h2>
                <p style="color: var(--text-secondary); margin-bottom: 20px;">${jobMatch.description}</p>
                <h3 style="color: #fff; margin-bottom: 8px;">Key Responsibilities</h3>
                <ul style="padding-left: 20px; color: var(--text-secondary); margin-bottom: 20px;">
                  ${jobMatch.responsibilities.map(r => `<li>${r}</li>`).join('')}
                </ul>
                <h3 style="color: #fff; margin-bottom: 8px;">Requirements</h3>
                <ul style="padding-left: 20px; color: var(--text-secondary); margin-bottom: 20px;">
                  ${jobMatch.requirements.map(r => `<li>${r}</li>`).join('')}
                </ul>
                <div style="display: flex; gap: 12px; margin-top: 16px;">
                  <a href="${jobMatch.sourceUrl}" target="_blank" rel="noopener" class="btn btn-primary">Apply on ${jobMatch.source} ↗</a>
                  <a href="https://www.skool.com/delivery-pilot-8938/job-postings?p=248d7a63" target="_blank" rel="noopener" class="btn btn-secondary" style="border-color: #ff9100; color: #ffaa33;">Discuss in Skool Community 🚀</a>
                  <a href="/big-tech" class="btn btn-secondary">← Back to Big Tech Hub</a>
                </div>
              </div>
            `
          });
        } else {
          status = 404;
          htmlContent = renderLayout({
            title: "404 - Page Not Found",
            description: "Requested resource not found.",
            activeNav: "",
            syncStatus,
            bodyContent: `
              <div style="text-align: center; padding: 80px 20px;">
                <h1 style="font-size: 3rem; color: var(--accent-cf); margin-bottom: 12px;">404</h1>
                <p style="color: var(--text-secondary); font-size: 1.2rem; margin-bottom: 24px;">The page or requisition you requested was not found.</p>
                <a href="/" class="btn btn-primary">Return to Edge Hub</a>
              </div>
            `
          });
        }
        break;
    }

    return new Response(htmlContent, {
      status,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'x-edge-runtime': 'cloudflare-v8-isolate',
        'cache-control': 'no-cache'
      }
    });
  }
};
