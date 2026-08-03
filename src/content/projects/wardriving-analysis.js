export default {
    id: "wardriving-analysis",
    slug: "wardriving-analysis",
    title: "Wardriving & Signal Analysis",
    oneLiner: "Mapping and analyzing exposed 802.11 networks using a headless portable rig.",
    category: "Wireless Security",
    tags: ["Hardware / IoT", "Linux", "Network Recon", "Packet Analysis"],
    status: "Completed",
    featured: false,
    tier: "real-world",
    image: "/images/wardriving/IMG_8695.jpg",
    imageAlt: "Headless wardriving rig with Raspberry Pi, GPS module, and high-gain Alfa adapter",
    content: `
## The Setup

I wanted to actually get hands-on with mapping and testing wireless networks in the real world. I built a headless rig using a portable battery, a Raspberry Pi, a GPS module, and a high-gain Alfa adapter to capture everything around me.

## The Workflow

The recon and attack methodology was pretty straightforward, utilizing the full \`aircrack-ng\` suite:

1. **Reconnaissance (\`airodump-ng\`)**: Fired up monitor mode (\`airmon-ng\`) and started sweeping. I mapped out tons of networks, but narrowed in on specific targets to test. 
2. **Topology Visualization**: To make sense of the noise, I converted the raw \`airodump\` CSVs into primitive but effective network topology graphs using \`airgraph-ng\`.
3. **Deauthentication & Handshake Capture (\`aireplay-ng\`)**: Broadcast deauths are too noisy and inefficient. I used \`airodump\` to identify the specific MAC address of the most chatty client on the network, and sent targeted deauth frames specifically to them to force an authentication reset and capture the 4-way handshake.
4. **Cracking (\`aircrack-ng\`)**: Once I had the \`.cap\` file, I ran it against custom dictionaries (like \`wifite.txt\`) to attempt to crack the pre-shared key. 

## Unexpected Findings

Wardriving always turns up weird stuff. Aside from standard routers, I mapped out open IoT devices, poorly configured HP OfficeJet printers running open ad-hoc networks, and a scary amount of weakly encrypted neighborhood networks.
    `,
    overview: "Built a portable wardriving rig to map out urban Wi-Fi networks and execute targeted deauth attacks to capture handshakes.",
    goal: "Map physical wireless perimeters, graph topologies, and execute handshake captures for dictionary cracking.",
    features: [
        "Headless Raspberry Pi + Alfa Adapter rig",
        "Targeted Deauth attacks with Aireplay-ng",
        "Network topology graphing with Airgraph-ng",
        "Dictionary attacks against captured WPA2 handshakes"
    ],
    techStack: ["Linux", "Aircrack-ng Suite", "Airgraph-ng", "Hardware Setup"],
    results: "Mapped out numerous access points and successfully executed targeted deauthentication attacks to farm handshake ACKs.",
    lessons: "Broadcast deauths suck. Targeting the chattiest client specifically yields way better handshakes. Also, hiding your SSID does literally nothing to stop air-sniffing.",
    links: {
        repo: "",
        demo: "",
        writeup: ""
    }
};
