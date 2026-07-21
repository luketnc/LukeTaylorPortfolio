export default {
    id: "spike-rogue-ap",
    slug: "spike-rogue-ap",
    title: "Spike Rogue AP and MANA",
    oneLiner: "Using an ESP32 as a rogue access point and MANA attack vector",
    category: "Security Tooling",
    tags: ["IoT", "ESP-32", "Rogue AP", "Offensive Security", "MANA"],
    status: "Completed",
    featured: true,
    content: `
## Overview
This project involved the design and physical prototyping of a stealthy rogue Wi-Fi access point (AP) and micro-Command and Control (C2) node. Utilizing an ESP32 microcontroller concealed inside a small porcupine statue, the device serves as a physical red-teaming dropbox. By leveraging Evil Twin and rogue AP concepts (inspired by the MANA toolkit), the "porcupine" broadcasts a target SSID and forces connecting clients into a custom "Gnome Trap" captive portal. To merge offensive network capabilities with a physical hardware aesthetic, the statue was wired with pulsing LED eyes to indicate system status.

<img src="/images/spike_rogueAP/IMG_0521.jpg" alt="ESP32 rogue AP concealed inside the porcupine statue" style="width: 100%; border-radius: 8px;" />

## Results
Stealth Hardware Enclosure: Successfully embedded offensive network infrastructure inside an inconspicuous physical object, proving the viability of low-cost drop devices for physical penetration testing and social engineering labs.

Micro-Captive Portal Deployment: Engineered a custom captive portal hosted entirely on the ESP32's flash memory. The portal actively intercepts client web traffic and serves custom HTML payloads to test credential harvesting and HTTP redirection flows.

Visual Hardware Feedback: Integrated and programmed pulsing LED eyes into the porcupine's face, providing a real-time, screenless indicator of AP status and successful client connections.

Standalone Rogue Infrastructure: Demonstrated that a low-voltage microcontroller can independently handle SSID broadcasting, DHCP assignment, and DNS hijacking without needing a full Linux OS or external power brick.

## Lessons
DNS Spoofing is Mandatory: For modern Android and iOS devices to automatically trigger their captive portal pop-up screens, the network must intercept and hijack all DNS requests. Configuring the ESP32's internal DNS server to forcefully resolve all traffic back to its own IP is the most critical step in a rogue AP setup.

Hardware Limitations: While the ESP32 is a powerhouse for IoT, its Wi-Fi stack and memory are constrained. It requires highly optimized code to handle simultaneous AP broadcasting, DNS spoofing, and web-serving without crashing when multiple clients connect.

Physical Concealment Challenges: Embedding active microcontrollers and LEDs into a small, enclosed statue requires careful consideration of heat dissipation and battery placement to ensure the device remains operational and undetectable in a physical environment.
    `,
    overview: "An ESP32-based rogue Wi-Fi access point and micro-C2 node concealed inside a porcupine statue as a physical red-team dropbox.",
    goal: "To prototype a low-cost, stealthy drop device that broadcasts a rogue SSID and forces clients into a custom captive portal.",
    features: [
        "Rogue AP / Evil Twin broadcasting on an ESP32",
        "Custom captive portal served from onboard flash memory",
        "DNS hijacking to trigger captive portal pop-ups",
        "LED status eyes for screenless feedback"
    ],
    techStack: ["ESP32", "Arduino / C", "HTML/CSS", "DNS Spoofing"],
    results: "A working stealth dropbox that broadcasts a target SSID, serves a captive portal from flash, and signals status via LED eyes.",
    lessons: "DNS hijacking is mandatory for captive portal pop-ups, and the ESP32's constrained Wi-Fi and memory stack requires tight code to stay stable under multiple clients."
};
