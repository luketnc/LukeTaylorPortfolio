export default {
    id: "pdf-binding-exploitation",
    slug: "pdf-binding-exploitation",
    title: "PDF Binding & Weaponization",
    oneLiner: "Exploring Initial Access vectors by weaponizing PDF 'OpenAction' events.",
    category: "Offensive Security",
    tags: ["Malware Analysis", "Offensive Security", "Phishing", "Payload Delivery"],
    status: "Active",
    featured: false,
    content: `
## Project Overview

*This project is currently active.*

The objective of this research is to analyze and reproduce techniques used by Advanced Persistent Threats (APTs) to gain initial access via socially engineered phishing campaigns. Specifically, this project focuses on **PDF wrapping/binding**, where malicious code is executed passively when a target attempts to open a seemingly innocuous PDF file.

## Technical Methodology

The core mechanism behind this exploit relies on abusing the Adobe PDF specification, specifically the \`/OpenAction\` and JavaScript execution parameters inherent in the PDF structure.

### Current Implementation Steps:
1. **Payload Generation:** Creating a benign, highly obfuscatable reverse shell or reconnaissance beacon.
2. **Structure Manipulation:** Manually editing the structural hex/ASCII of a standard PDF document to insert a malicious \`/Action\` dictionary.
3. **Execution Masking:** Ensuring the PDF still renders the expected cover page (e.g., a fake invoice or resume) so the user is entirely unaware that code execution has triggered in the background.

## Defense & Mitigation

Once the attack vector is successfully crafted and reverse-engineered, the second half of this project focuses entirely on detection. I will be writing YARA rules to detect the anomalous \`/OpenAction\` commands injected into standard PDF architecture and testing Endpoint Detection & Response (EDR) solutions against the payload.
    `,
    overview: "Developing and analyzing a PDF weaponization pipeline to understand initial access methods.",
    goal: "To explore how file-format abuse leads to code execution and how to write detection rules to stop it.",
    features: [
        "PDF specification manipulation",
        "Payload obfuscation and binding",
        "YARA rule generation for malicious signatures"
    ],
    techStack: ["Python", "Metasploit", "YARA", "Hex/File Analysis"],
    results: "Currently analyzing execution triggers across different PDF viewing clients.",
    lessons: "Complex file types are practically mini-operating systems, creating massive attack surfaces for initial access.",
    links: {
        repo: "",
        demo: "",
        writeup: ""
    }
};
