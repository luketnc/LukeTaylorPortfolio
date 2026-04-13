export default {
    id: "wardriving-analysis",
    slug: "wardriving-analysis",
    title: "Wardriving & Signal Analysis",
    oneLiner: "Mapping and analyzing exposed 802.11 networks using a headless portable rig.",
    category: "Wireless Security",
    tags: ["Hardware / IoT", "Linux", "Network Recon", "Packet Analysis"],
    status: "Completed",
    featured: false,
    content: `
## Overview

Wireless networks are often the most exposed perimeter of an organization. To better understand the landscape of wireless security in urban environments, I built a portable, headless wardriving rig to capture and map 802.11 signals. 

## Hardware & Methodology

I utilized a Raspberry Pi paired with a GPS module and a high-gain Alfa network adapter capable of monitor mode. The rig was run "headless" (powered by a portable battery bank without a screen) and stowed in a backpack. 

Using Kismet, I captured raw 802.11 frames while walking through various commercial districts. The captured data mapped out access points, their encryption standards (WEP, WPA2, WPA3, or OPN), and hidden SSIDs.

## Data Analysis

After the physical reconnaissance phase, I pulled the \`.pcap\` and \`.kismet\` database files back into my lab. I utilized Wireshark to dissect the plaintext management frames and mapped the GPS coordinates using external visualization tools.

### Key Takeaways
- A surprising number of networks are still utilizing deprecated encryption standards.
- Hidden SSIDs provide zero actual security, as they are trivially revealed by observing client probe requests or forced deauthentication frames.
- Performing targeted signal intelligence (SIGINT) on a budget is highly accessible, reinforcing the necessity of strict wireless security policies for enterprises.

*Note: All data capture was passive, observing only broadcasted radio frequencies in public airspace. No offensive actions (like deauthentication attacks or handshake capturing) were performed against out-of-scope targets.*
    `,
    overview: "Mapped urban 802.11 signals using a custom headless Raspberry Pi rig.",
    goal: "To map physical wireless perimeters and analyze the prevalence of outdated encryption protocols.",
    features: [
        "Custom headless hardware rig assembly",
        "Passive radio frequency capturing via Kismet",
        "GPS data mapping and PCAP analysis"
    ],
    techStack: ["Raspberry Pi", "Kismet", "Wireshark", "Linux"],
    results: "Successfully mapped hundreds of networks, revealing systemic flaws in commercial wireless deployments.",
    lessons: "Passive reconnaissance leaves no logs. If a signal breaches the physical walls of a building, it must be robustly encrypted.",
    links: {
        repo: "",
        demo: "",
        writeup: ""
    }
};
