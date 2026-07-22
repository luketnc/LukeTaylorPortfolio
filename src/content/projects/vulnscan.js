export default {
        id: "vuln-scanning-and-firewall-config",
        slug: "vuln-scanning-and-firewall-config",
        title: "Vuln Scanning and Firewall Config",
        oneLiner: "Vulnerability scanning with OpenVAS and firewall hardening with pfSense.",
        category: "Network Security",
        tags: ["Vulnerability Scanning", "Firewall"],
        status: "Archived",
        featured: false,
        content: `
## Writeup coming soon

This project walked through vulnerability scanning with OpenVAS/Greenbone against a Windows Server, iterative pfSense firewall hardening based on scan results, and domain-level content filtering. I plan to revisit and rewrite this as a proper standalone writeup.
        `,
        overview: "Vulnerability scanning with OpenVAS and iterative firewall hardening on pfSense.",
        goal: "To practice the feedback loop of scanning, identifying CVEs, and hardening firewall rules to reduce attack surface.",
        features: [
            "OpenVAS/Greenbone vulnerability scanning",
            "Iterative pfSense firewall rule hardening",
            "Domain-level content filtering and DNS blocking"
        ],
        techStack: ["OpenVAS", "pfSense", "Windows Server"],
        results: "Demonstrated measurable reduction in exposed attack surface through iterative scanning and rule tightening.",
        lessons: "TBA",
        links: {
            repo: "",
            demo: "",
            writeup: ""
        }
    };