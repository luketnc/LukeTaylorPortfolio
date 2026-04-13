export default {
    id: "disk-forensics-analysis",
    slug: "disk-forensics-analysis",
    title: "Digital Forensics & Memory Analysis",
    oneLiner: "A deep-dive digital forensics investigation utilizing Autopsy, Volatility, and custom Python scripts.",
    category: "Incident Response",
    tags: ["Digital Forensics", "Incident Response", "Volatility", "Autopsy", "Python"],
    status: "Completed",
    featured: true,
    content: `
## The Premise

I acquired a raw Windows 10 Home hard drive image and decided to do a deep-dive forensic analysis to see what I could uncover about the previous owner. Forensics is rarely as clean as they make it look on TV—sometimes you have to dig incredibly deep just to figure out what you are even looking at.

## The Hunt 

### 1. Registry Diving & Password Dumping
I mounted the image in a Linux root terminal and started tearing through the \`System32/config/\` directory using \`chntpw\` and \`samdump2\`. 
- **Identifying the OS:** Poking around \`CurrentVersion\`, I confirmed it was a Windows 10 Home client.
- **Account Discovery:** I checked the SAM dumps to extract the local hashes. I pulled out hashes for \`Administrator\`, \`Guest\`, and a mystery account called \`defaultuser0\`.
- **System Configs:** Digging into the \`Winlogon\` registry hive, I found that the machine was configured to auto-admin-logon directly into \`defaultuser0\`.

### 2. Hunting for Network Artifacts
I wanted to see where this machine had been. I manually parsed through the NetworkList Profiles and Tcpip interfaces in the registry, but hit a dead end. Nothing there. 

Next, I exported the \`WebCache\` utilizing \`libesedb-utils\` to see if I could extract any browser treasures, and utilized \`Foremost\` to carve out old deleted files.

### 3. Memory Forensics (\`Volatility\` & \`MemProcFS\`)
The hard drive had a massive \`hiberfil.sys\` file (the Windows hibernation dump, which is basically a snapshot of RAM). 
I used **Volatility 3** (\`layerwriter\` plugin) to dump the raw hibernation data to my lab environment. To interact with it natively, I used **MemProcFS** via Dokany to mount the memory structure as a virtual file system to search for rogue processes.

## The Verdict

After ripping apart the registry, dumping SAM passwords, and actively mounting the hibernation memory... I found almost nothing malicious or personal. 

But that *was* the answer. Based on the \`WDAGUtilityAccount\` presence, the \`defaultuser0\` auto-login forced loop, and the completely blank network history, I was able to confidently conclude that this disk came from a **Retail Demo/Display Unit** rather than a personal computer!
    `,
    overview: "Conducted a raw forensic analysis of an unknown Windows hard drive, utilizing Volatility, MemProcFS, and SAM dumping to profile the system.",
    goal: "To manually extract and analyze artifacts from an unknown hard drive to definitively identify its origin and history.",
    features: [
        "Registry analysis using chntpw",
        "SAM hash dumping with samdump2",
        "Hibernation memory extraction with Volatility 3",
        "Virtual memory mounting via MemProcFS & Dokany"
    ],
    techStack: ["Volatility 3", "MemProcFS", "Linux Forensics", "chntpw"],
    results: "Proved through memory and registry forensics that the hard drive originated from a sanitized retail display unit.",
    lessons: "Not all forensics yields massive malware discoveries. Real forensics is about following dead ends until you can confidently prove exactly what a machine was used for.",
    links: {
        repo: "",
        demo: "",
        writeup: ""
    }
};
