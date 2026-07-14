export default {
    id: "ai-log-analyzer",
    slug: "ai-log-analyzer",
    title: "AI Security Log Analyzer",
    oneLiner: "Using Machine Learning anomaly detection and LLMs to parse and summarize noisy firewall logs.",
    category: "Security Tooling",
    tags: ["Python", "Machine Learning", "AI", "Incident Response", "SOC Automation", "AI Enhanced"],
    status: "Active",
    featured: false,
    content: `
## Project Overview

*This project is currently in active development.*

Security Operations Centers (SOCs) are constantly inundated with massive amounts of noise from firewall and server access logs. Alert fatigue is a serious issue. This project aims to combat that by using a combination of traditional machine learning and modern Generative AI to automate the initial triage process.

## Architecture

The system is designed in a two-tier architecture:
1. **Anomaly Detection:** Using Scikit-Learn (specifically Isolation Forests), the script ingests standard web access logs and flags anomalous requests based on payload size, user-agent entropy, and request frequency.
2. **AI Summarization:** Instead of dumping an obscure JSON payload on a security analyst, flagged anomalies are passed to an LLM which outputs a clean, plain-English "Incident Summary" explaining exactly *why* the traffic is suspicious.

### Next Steps
Currently, I am gathering anonymized datasets of malicious web traffic to train the anomaly detection baseline. Once the baseline is reliable, I will wire up the LLM summarization pipeline.
    `,
    overview: "Creating a tool to reduce SOC alert fatigue using ML and LLMs.",
    goal: "To automate the triage process of suspicious network logs.",
    features: [
        "Unsupervised anomaly detection",
        "Automated incident summarization",
        "Reduction of false positives"
    ],
    techStack: ["Python", "Scikit-Learn", "Prompt Engineering"],
    results: "Work in progress.",
    lessons: "TBA",
    links: {
        repo: "",
        demo: "",
        writeup: ""
    }
};
