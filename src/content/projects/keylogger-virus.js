export default {
    id: "keylogger-virus",
    slug: "keylogger-virus",
    title: "Python FTP Keylogger",
    oneLiner: "A functional software keylogger built to demonstrate post-exploitation data exfiltration.",
    category: "Malware Development",
    tags: ["Python", "Malware", "Post-Exploitation"],
    status: "Completed",
    featured: false,
    content: `
## Overview

During my managing security coursework on hardware and software keyloggers, I decided to build a functional software prototype to better understand how modern malware captures and exfiltrates data. 

## Technical Details

This project is a Python-based keylogger that hooks directly into the host machine's input events to record keystrokes. However, a keylogger is only useful if the attacker can retrieve the data. To solve this, I implemented an automated FTP exfiltration module.

The malware periodically packages the captured logs and securely transfers them over FTP to an external FileZilla server that I hosted, demonstrating a complete post-exploitation data collection and exfiltration lifecycle.

    `,
    overview: "Built a Python post-exploitation tool to capture keystrokes and exfiltrate data via FTP.",
    goal: "To understand malware development and data exfiltration techniques through hands-on implementation.",
    features: [
        "System-level keystroke hooking",
        "Automated log packaging",
        "FTP data exfiltration"
    ],
    techStack: ["Python", "FTP", "FileZilla"],
    results: "Successfully developed a functional data exfiltration script to test endpoint detection.",
    lessons: "Writing real malware from scratch is incredibly effective for understanding exactly what defenders need to look for.",
    links: {
        repo: "",
        demo: "",
        writeup: ""
    }
};
