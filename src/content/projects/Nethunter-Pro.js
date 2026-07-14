export default {
    id: "Nethnter-Pro",
    slug: "nethnter-pro",
    title: "Installing Nethunter Pro on a OnePlus 6T",
    oneLiner: "Installing Nethunter Pro on a OnePlus 6T and evalutating its usablility as a penetration testing platform.",
    category: "Penetration Testing",
    tags: ["Kali Nethunter", "OnePlus 6T", "Penetration Testing", "Linux"],
    status: "Complete",
    featured: true,
    content: `


## Overview
The goal of this project was to engineer a highly portable, stealthy offensive security and wireless auditing platform by repurposing a carrier-branded OnePlus 6T. This required low-level hardware flashing to convert the device to an international variant using the MSMDownloadTool in Emergency Download (EDL) mode, followed by provisioning the phone with bare-metal Kali NetHunter Pro. The resulting platform serves as a dedicated environment for mobile security testing, digital forensics (using tools like Autopsy), and wireless network auditing (utilizing Kismet, Airodump-ng, and Reaver).

## Results
Successful Bare-Metal Provisioning: Achieved a stable, native Kali Linux environment on a mobile form factor, moving beyond a standard rooted Android setup.

Seamless Remote Access: Established secure, headless access to the device via SSH and remote desktop, enabling full control of the device from a primary workstation.

System Policy Customization: Successfully modernized the device's security manager by rewriting legacy .pkla rules into JavaScript-based PolKit rules, permanently bypassing graphical authentication loops (e.g., colord prompts) during remote sessions.

UI Stabilization: Troubleshot and resolved Phosh/XWayland display manager glitches, including clearing corrupted xfce-perchannel-xml configurations to remove ghost taskbars and restore a clean mobile UI.

Lessons
Mobile Linux Quirks: Mobile Linux environments (like Phosh) aggressively attempt to manage background scripts as GUI applications. Forcing scripts to run invisibly requires specific detached execution (nohup) or explicitly routing them through native mobile console shortcuts.

Firmware Constraints: Flashing carrier-branded hardware requires strict adherence to unbricking protocols (EDL mode) before open-source operating systems can be successfully mounted to the bootloader.

Links
[Link to NetHunter Pro Documentation]

[Link to OnePlus 6T MSMDownloadTool / EDL Guide]

[Add any personal GitHub gists or setup scripts here]




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
