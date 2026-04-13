export const blogData = [
    {
        id: "post-1",
        slug: "intercom-evil-portal",
        date: "2026-02-20",
        title: "The Classic 'Intercom' Evil Portal",
        excerpt: "Evil portal attacks aren't particularly technical feats, but in my experience they are hilariously effective. NO ONE can resist the <insert company apartment or office building name> Intercom.  ",
        content: `Evil portal attacks aren't particularly technical feats, but in my experience they are often hilariously effective.
         NO ONE can resist the classic '<insert company apartment or office building name> Intercom' ESSID.
         It's just funny and harmless sounding enough that, with the right amount of subtle egging certain people will throw their creds
         in without a second thought. 
         
         Why is the intercom broadcasted on 2.4ghz? Why does it prompt me to enter my employee ID/email/Resident ID and password? Why have i never heard
         an intercom in this building before?

         Doesnt matter bro, just put your creds in it'll be funny.

         Furthermore when I am doing this for a pentest (or an authorized prank) I usually rip the HTML/CSS/JS from thier real login page 
         (whether that be from a website, wifi login, or whatever else) and then change the header to "Intercom" and host it on a laptop 
         or my Pi 3 (Flipper with ESP32 if im doing a demo).

        Even though intercom is my favorite evil portal, I also like these

        - Ring-Camera-Setup
            - Good for harvesting Ring or google creds
        - Garage_Gate_Controller
            - Good for harvesting company creds 
        - SmartThermostat_AP
            - Could harvest whatever, just use a fake page to bait user into thinking they can control the thermostat then redirect to 
            a page that says "Your thermostat is broken, please contact building maintenance" or "Login to control your thermostat as a guest".
        - <real wifi name>_5ghz
            - Good for harvesting company creds 

        The point is the more curious the target is the more likely they are to interact with the rogue AP. The classic 'Guest Wifi' or 
        'Free Wifi' doesnt really cut it anymore, some relatively innocent fun or the mild voyeurism of accessing public cameras is usually enough to get the job done.

         
         `,
        tags: ["Go", "Milestone"],
        relatedProjectSlug: "vuln-scanner-go"
    },
    {
        id: "post-3",
        slug: "site-redesign-react",
        date: "2026-01-15",
        title: "Site Redesign",
        excerpt: "Ported my old HTML blog over to a React SPA.",
        content: 'Ported my old HTML blog over to a React SPA. I\'m not a web developer so I vibe coded the style and layout stuff. I think it looks pretty good as it is now but its missing some of the janky early 2000s swag my old site had.',
        tags: ["Meta"],
    },
    {
        id: "post-daily-quote",
        slug: "daily-quote-oop",
        date: "2024-03-01",
        title: "Practice Makes Progress: My Daily Quote Program",
        excerpt: "Building a Python OOP script simply for the sake of learning scalable architecture.",
        content: `Recently, I built a simple program that delivers a daily quote using various APIs. At first glance, it’s just a simple app, but for me, it was more of a learning experience and opportunity to practice good programming habits.

This program could have easily been written as a single .py file. However, I intentionally chose to over-engineer it by implementing object-oriented programming (OOP) principles and using parent classes. The goal for me wasn’t to make the simplest program possible, it was to practice building more complex, scalable solutions.

Throughout the process, I focused on:
- Practicing OOP to structure my code better.
- Working with web APIs to fetch dynamic data.
- Checking changes into GitHub with meaningful commit descriptions (good habits matter!).

The end result may look simple, but the real achievement was honing my skills and pushing myself to work thoughtfully.`,
        tags: ["Python", "OOP", "Learning"],
        relatedProjectSlug: null
    },
    {
        id: "post-keylogger",
        slug: "virus-ftp-keylogger",
        date: "2023-11-10",
        title: "Virus FTP Keylogger: Making Malware",
        excerpt: "Applying classroom theory to write a functional software keylogger with data exfiltration.",
        content: `Last fall in my managing security class we went over keylogger hardware and software. I decided to take what I had learned and give it a spin myself. In doing so I was able to create a program that both took keylogs from a target machine and used FTP to transfer the recorded log data to an external FileZilla server. There's nothing quite like writing real malware to understand precisely how to defend against it.`,
        tags: ["Malware", "Python"],
        relatedProjectSlug: null
    },
    {
        id: "post-overthewire",
        slug: "overthewire-wargames",
        date: "2023-07-20",
        title: "Diving into CLI with OverTheWire",
        excerpt: "Pushing through Bandit and Leviathan challenges to solidify Linux command line fluency.",
        content: `Over the summer, I took on the OverTheWire Bandit and Leviathan Wargames to expand my skills and explore cybersecurity and Linux in an interactive way.

What I Learned:
- A wide array of useful Linux commands for file navigation and permissions.
- Practiced outside-the-box thinking to solve unique privilege escalation challenges.
- Persistence to push through tough puzzles.

This experience reinforced my commitment to learning beyond the classroom. I'm excited to continue stepping outside my comfort zone to grow in this field, and I highly recommend OverTheWire for making their wargames freely available as an introduction to cybersecurity and Linux.`,
        tags: ["Linux", "CTF"],
        relatedProjectSlug: null
    },
    {
        id: "post-pwnagotchi",
        slug: "building-a-pwnagotchi",
        date: "2023-08-05",
        title: "Building an AI-Powered Pwnagotchi",
        excerpt: "An exercise in hardware hacking, OS compatibility, and capturing 802.11 handshakes.",
        content: `Over the summer, I embarked on a project to build a Pwnagotchi, an AI-powered WiFi hacking tool that passively captures WPA2 handshakes. This served as an introduction to hardware hacking and hands-on wireless network security.

Key Skills Acquired:
- Soldering: Learned basic soldering techniques and reworked connections to ensure proper alignment on the Pi board.
- WiFi Security: Gained deeper insights into WPA2 handshakes.
- Troubleshooting: Diagnosed issues caused by incompatible SD cards and had to implement a custom fork of the Pwnagotchi OS to ensure compatibility with my specific e-ink screen hardware.

Challenges like finding the exact OS build that worked with my screen taught me the importance of adaptability and persistence in tackling technical integrations.`,
        tags: ["Hardware", "Wireless"],
        relatedProjectSlug: null
    },
    {
        id: "post-flipper-zero",
        slug: "flipper-zero-car-theft",
        date: "2024-02-15",
        title: "Mythbusting the Flipper Zero",
        excerpt: "Testing government sensationalism by attempting to steal my own car with a Flipper Zero.",
        content: `After hearing politicians blame the Flipper Zero for a wave of car thefts, I decided to test some methods of "Car Theft" on my own car using my Flipper. Thankfully, I did some preliminary research and didn't end up accidentally de-syncing my key fob, but what I found was interesting.

I could record and play-back Sub-GHz signals from my key fob, but not much else. Furthermore, I had to be using my keys in extremely close proximity to the Flipper, and I had to be out of range of my car—otherwise, the rolling code security feature of modern car key systems rendered my captured code completely unusable.

In terms of actually stealing a car, this process required physical access to the keys and did not solve the issue of starting the ignition. Banning tools like the Flipper won't solve insecure systems, and we need much more informed perspectives in cybersecurity discourse before journalists spread misinformation.`,
        tags: ["Hardware", "Sub-GHz"],
        relatedProjectSlug: null
    },
    {
        id: "post-quizlet-parser",
        slug: "html-quizlet-parser",
        date: "2023-12-10",
        title: "Creating a Quiz Data Parser with AI",
        excerpt: "Leveraging Python and AI to automate translating raw LMS HTML into formatted flashcards.",
        content: `During finals, my study efficiency was bottlenecked by my school’s quizzes, which were presented in a raw HTML format incompatible with tools like Quizlet. To solve this, I developed a Python parser that converted the raw data into a clean CSV format for bulk uploading.

Given the tight deadline, I leveraged ChatGPT as a pair programmer. I approached the problem by breaking it into detailed structural questions, allowing the AI to handle the implementation of Regex logic that parsed the questions, options, and correct answers. 

By clearly defining the problem and breaking it into actionable pieces, I was able to use AI to handle the tedious heavy lifting of string manipulation, ultimately saving hours of manual data entry during my busiest week.`,
        tags: ["Python", "Automation"],
        relatedProjectSlug: null
    },
    {
        id: "post-lockpicking-safe",
        slug: "real-world-lockpicking",
        date: "2023-06-25",
        title: "Applying Lock Picking to the Real World",
        excerpt: "When the clear acrylic practice locks finally pay off on a lost safe key.",
        content: `Last summer, someone in my family lost a key to a safe that stored his passport and important paperwork. I had picked up lock picking a few years ago but had mostly practiced single-pin picking on standard padlock tumblers.

After some research on the safe mechanism, I decided to try raking. It took quite a few tries to get used to the tension timing, but eventually, the core turned and I got it open! It felt incredibly rewarding to apply a niche cybersecurity hobby to a real-world problem and successfully recover high-value documentation for family.`,
        tags: ["Physical Security", "Hobby"],
        relatedProjectSlug: null
    },
    {
        id: "post-plex-pentest",
        slug: "media-server-pentest",
        date: "2024-03-24",
        title: "Penetration Testing a Complex Media Server",
        excerpt: "Mapping out a Plex ecosystem only to be thwarted by the cryptographic silence of Carrier-Grade NAT.",
        content: `I recently conducted an authorized external penetration test on an automated home media server network running Plex, Radarr, Sonarr, Overseerr, and Tautulli.

I started by sweeping the provided public IP. Utilizing advanced Nmap techniques like source-port spoofing, fragmentation, and decoy scans, I was able to parse XML endpoints on the exposed web port and even attempted fuzzing the API with \`ffuf\`. However, despite exhaustive external scanning for the 3rd-party integration ports, the firewall black-holed everything.

Through a mix of technical enumeration and social engineering (asking my friend on Discord how his bot worked), I discovered the fatal flaw in my recon: the server was operating entirely inside a Tailscale (WireGuard) VPN. 

Because WireGuard is "cryptographically silent," any unauthorized probes sent to the UDP ports are instantly dropped. Without the cryptographic handshake, the Tailnet operates as a black hole, keeping the massive attack surface of the media ecosystem entirely hidden from the public internet. A fantastic demonstration of network defense.`,
        tags: ["Pentesting", "Network Architecture"],
        relatedProjectSlug: null
    }
];
