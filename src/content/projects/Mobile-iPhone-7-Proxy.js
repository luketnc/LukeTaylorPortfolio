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
Overview
This project involved the design and physical prototyping of a stealthy rogue Wi-Fi access point (AP) and micro-Command and Control (C2) node. Utilizing an ESP32 microcontroller concealed inside a small porcupine statue, the device serves as a physical red-teaming dropbox. By leveraging Evil Twin and rogue AP concepts (inspired by the MANA toolkit), the "porcupine" broadcasts a target SSID and forces connecting clients into a custom "Gnome Trap" captive portal. To merge offensive network capabilities with a physical hardware aesthetic, the statue was wired with pulsing LED eyes to indicate system status.

Results
Stealth Hardware Enclosure: Successfully embedded offensive network infrastructure inside an inconspicuous physical object, proving the viability of low-cost drop devices for physical penetration testing and social engineering labs.

Micro-Captive Portal Deployment: Engineered a custom captive portal hosted entirely on the ESP32's flash memory. The portal actively intercepts client web traffic and serves custom HTML payloads to test credential harvesting and HTTP redirection flows.

Visual Hardware Feedback: Integrated and programmed pulsing LED eyes into the porcupine's face, providing a real-time, screenless indicator of AP status and successful client connections.

Standalone Rogue Infrastructure: Demonstrated that a low-voltage microcontroller can independently handle SSID broadcasting, DHCP assignment, and DNS hijacking without needing a full Linux OS or external power brick.

Lessons
DNS Spoofing is Mandatory: For modern Android and iOS devices to automatically trigger their captive portal pop-up screens, the network must intercept and hijack all DNS requests. Configuring the ESP32's internal DNS server to forcefully resolve all traffic back to its own IP is the most critical step in a rogue AP setup.

Hardware Limitations: While the ESP32 is a powerhouse for IoT, its Wi-Fi stack and memory are constrained. It requires highly optimized code to handle simultaneous AP broadcasting, DNS spoofing, and web-serving without crashing when multiple clients connect.

Physical Concealment Challenges: Embedding active microcontrollers and LEDs into a small, enclosed statue requires careful consideration of heat dissipation and battery placement to ensure the device remains operational and undetectable in a physical environment.

Links
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
