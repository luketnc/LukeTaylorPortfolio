export default {
    id: "nethunter-pro",
    slug: "nethunter-pro",
    title: "Installing Nethunter Pro on a OnePlus 6T",
    oneLiner: "Installing Nethunter Pro on a OnePlus 6T and evaluating its usability as a penetration testing platform.",
    category: "Penetration Testing",
    tags: ["Kali Nethunter", "OnePlus 6T", "Penetration Testing", "Linux"],
    status: "Completed",
    featured: true,
    content: `
## Overview
The goal of this project was to engineer a highly portable, stealthy offensive security and wireless auditing platform by repurposing a carrier-branded OnePlus 6T. This required low-level hardware flashing to convert the device to an international variant using the MSMDownloadTool in Emergency Download (EDL) mode, followed by provisioning the phone with bare-metal Kali NetHunter Pro. The resulting platform serves as a dedicated environment for mobile security testing, digital forensics (using tools like Autopsy), and wireless network auditing (utilizing Kismet, Airodump-ng, and Reaver).

## Results
Successful Bare-Metal Provisioning: Achieved a stable, native Kali Linux environment on a mobile form factor, moving beyond a standard rooted Android setup.

Seamless Remote Access: Established secure, headless access to the device via SSH and remote desktop, enabling full control of the device from a primary workstation.

System Policy Customization: Successfully modernized the device's security manager by rewriting legacy .pkla rules into JavaScript-based PolKit rules, permanently bypassing graphical authentication loops (e.g., colord prompts) during remote sessions.

UI Stabilization: Troubleshot and resolved Phosh/XWayland display manager glitches, including clearing corrupted xfce-perchannel-xml configurations to remove ghost taskbars and restore a clean mobile UI.

## Lessons
Mobile Linux Quirks: Mobile Linux environments (like Phosh) aggressively attempt to manage background scripts as GUI applications. Forcing scripts to run invisibly requires specific detached execution (nohup) or explicitly routing them through native mobile console shortcuts.

Firmware Constraints: Flashing carrier-branded hardware requires strict adherence to unbricking protocols (EDL mode) before open-source operating systems can be successfully mounted to the bootloader.
    `,
    overview: "Repurposing a carrier-branded OnePlus 6T into a portable offensive security and wireless auditing platform running bare-metal Kali NetHunter Pro.",
    goal: "To flash and provision a OnePlus 6T with NetHunter Pro and evaluate its usability as a mobile penetration testing platform.",
    features: [
        "EDL-mode flashing to convert the device to an international variant",
        "Bare-metal Kali NetHunter Pro provisioning",
        "Headless SSH and remote desktop access",
        "PolKit and Phosh customization for stable remote sessions"
    ],
    techStack: ["Kali NetHunter Pro", "Linux", "MSMDownloadTool / EDL", "SSH"],
    results: "A stable, native Kali environment on a mobile form factor usable for forensics, wireless auditing, and mobile security testing.",
    lessons: "Mobile Linux aggressively manages background scripts as GUI apps, and flashing carrier hardware demands strict EDL unbricking protocols before open-source OSes will boot."
};
