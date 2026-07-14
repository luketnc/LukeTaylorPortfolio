export default {
    id: "krack-attack-research",
    slug: "krack-attack-research",
    title: "KRACK Attack Research & Implications",
    oneLiner: "Investigating the Key Reinstallation Attack (KRACK) against WPA2 and its modern implications.",
    category: "Wireless Security",
    tags: ["Wireless Security", "WPA2", "Cryptography", "Network Recon"],
    status: "Active",
    featured: false,
    content: `
## Project Staging Overview

*This project is currently in the research and staging phase.*

The **Key Reinstallation Attack (KRACK)** was a severe vulnerability in the WPA2 protocol that allowed attackers to intercept, decrypt, and manipulate Wi-Fi traffic. Even though WPA3 has been introduced and major vendors patched the KRACK vulnerability years ago, exploring how this attack fundamentally broke the 4-way handshake provides crucial lessons in applied cryptography.

## Planned Research Goals

1. **Protocol Analysis:** Deep dive into the IEEE 802.11i standard and dissect the exact stage of the 4-way handshake where the vulnerability occurs.
2. **Lab Simulation:** Recreate the unpatched attack environment using legacy virtualized access points to capture the nonce reuse in real time.
3. **Remediation & WPA3 Evaluation:** Compare the patched behavior and transition to analyzing the mitigations introduced by WPA3's SAE (Simultaneous Authentication of Equals).

Stay tuned for the full technical writeup once the lab is fully constructed and the theoretical analysis is finalized in my test environment.
    `,
    overview: "Formulating a research paper and practical simulation of the WPA2 KRACK vulnerability.",
    goal: "To deeply understand cryptographic handshake weaknesses and wireless network security.",
    features: [
        "4-way handshake technical teardown",
        "Legacy vulnerability reproduction",
        "WPA3 security comparison"
    ],
    techStack: ["Wireshark", "Aircrack-ng", "Cryptography"],
    results: "TBA - Project in staging",
    lessons: "TBA",
    links: {
        repo: "",
        demo: "",
        writeup: ""
    }
};
