export default {
    id: "shodan-iot-discovery",
    slug: "shodan-iot-discovery",
    title: "IoT Attack Surface Discovery",
    oneLiner: "Leveraging the Shodan API to perform targeted reconnaissance and map exposed devices.",
    category: "OSINT & Recon",
    tags: ["Python", "OSINT", "API Integration", "Attack Surface Management"],
    status: "Completed",
    featured: false,
    content: `
## Overview

The internet is fundamentally noisy, and search engines like Google only index traditional web pages. Search engines like Shodan, however, index the underlying ports and banners of the entire IPv4 space. For this project, I wrote custom Python tooling to automate interactions with the Shodan API, specifically searching for misconfigured Internet of Things (IoT) devices and exposed industrial interfaces.

## Tactical Execution

Using the \`shodan\` Python library, I built an automated scanning script that searches for specific service banners. Rather than using the web console, interacting with the API allowed me to:
1. Filter out honeypots programmatically.
2. Cross-reference IP blocks with ASN ownership to determine if the exposed devices belonged to cloud providers or direct organizations.
3. Automatically generate CSV reports highlighting exposed ports (like 21, 23, 3389, and unauthenticated webcams).

## Findings & Realities

The results of querying internet-wide telemetry are always staggering. I discovered numerous assets that should strictly exist behind VPNs or zero-trust gateways sitting cleanly on the open internet with default credentials. 

### Why This Matters for Security
This project highlighted the importance of continuous attack surface management (ASM). Organizations often lose track of shadow IT or vendor-installed hardware. By utilizing tools like Shodan in a defensive posture, security teams can discover their own exposed infrastructure before threat actors do. 
    `,
    overview: "Automated the Shodan API via Python to map exposed industrial and IoT devices.",
    goal: "To understand internet-wide scanning telemetry and practice automated open-source intelligence (OSINT).",
    features: [
        "Automated API queries to bypass web-console limitations",
        "ASN and organizational filtering",
        "Data parsing into actionable CSV formats"
    ],
    techStack: ["Python", "Shodan API", "Data Parsing"],
    results: "Developed a reusable Python script that quickly identifies critical exposures based on organizational parameters.",
    lessons: "Security through obscurity does not work on the internet. Automated scanners hit every IP address on Earth constantly.",
    links: {
        repo: "",
        demo: "",
        writeup: ""
    }
};
