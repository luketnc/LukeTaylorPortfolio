export default {
    id: "Mobile Iphone 7 Proxy",
    slug: "mobile-proxy",
    title: "Mobile App pentesting",
    oneLiner: "Mobile App pentesting using an iPhone 7 as a proxy for Burp Suite",
    category: "Web Security",
    tags: ["Certificate Pinning", "Web Vuln", "API", "Root", "Exploit"],
    status: "Completed",
    featured: true,
    content: `
## Writeup coming soon

This project repurposed a jailbroken iPhone 7 as a self-hosted 4G mobile proxy with automated IP rotation. Leveraging the checkra1n jailbreak (checkm8 bootrom exploit), I gained root access to bind a proxy server to the cellular interface and wrote scripts to rotate the IP on demand via Airplane Mode toggling. Full writeup is in progress.
    `,
    overview: "Repurposing a jailbroken iPhone 7 as a self-hosted 4G mobile proxy with automated IP rotation.",
    goal: "To build a cost-effective mobile proxy node using deprecated consumer hardware and open-source networking tools.",
    features: [
        "checkra1n jailbreak via checkm8 bootrom exploit",
        "Proxy server bound to the cellular interface (pdp_ip0)",
        "Automated IP rotation via Airplane Mode toggling"
    ],
    techStack: ["checkra1n", "OpenSSH", "3proxy", "Bash"],
    results: "Work in progress.",
    lessons: "TBA"
};
