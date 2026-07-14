export const blogData = [
    {
        id: "post-1",
        slug: "intercom-evil-portal",
        date: "2026-02-20",
        title: "The Classic 'Intercom' Evil Portal",
        excerpt: "Writeup coming soon for one of my favorite social engineering tricks.",
        content: `Writeup coming soon. This is an older project I want to revisit and document properly.`,
        tags: ["WiFi", "Social Engineering"],
        relatedProjectSlug: ""
    },
    {
        id: "post-3",
        slug: "site-redesign-react",
        date: "2026-01-15",
        title: "Site Redesign",
        excerpt: "Ported my old HTML blog over to a React SPA.",
        content: 'Ported my old HTML blog over to a React SPA. I\'m not a web developer so I vibe coded the style and layout stuff. I think it looks pretty good as it is now but it\'s missing some of the janky early 2000s swag my old site had.',
        tags: ["Meta"],
        relatedProjectSlug: null
    },
    {
        id: "post-daily-quote",
        slug: "daily-quote-oop",
        date: "2024-03-01",
        title: "Practice Makes Progress: My Daily Quote Program",
        excerpt: "A simple Python program that grabs quotes from an API. Nothing crazy, but my first real time working with structured JSON and API calls.",
        content: `Back in 2023 I built a small Python program that pulls a random quote from an API and pushes it to the Mac notification bar. That's pretty much it.

It's not a complex program. I could've written the whole thing in one file and called it a day. But I wanted to practice OOP, so I broke it out into classes and parent classes just to get reps in with that pattern. First time I actually worked with structured JSON and made real API calls too.

Simple project, but it's where I started getting comfortable with Python beyond just writing scripts.`,
        tags: ["Python", "OOP", "Learning"],
        relatedProjectSlug: null
    },
    {
        id: "post-keylogger",
        slug: "virus-ftp-keylogger",
        date: "2023-11-10",
        title: "Virus FTP Keylogger: Making Malware",
        excerpt: "Took sample keylogger code from class and wired it up to an FTP server. Pretty basic, but that's the point.",
        content: `We covered keyloggers in my security class, so I grabbed the sample Python code my teacher provided and modified it to exfiltrate the logged keystrokes to a FileZilla FTP server I set up. Really rudimentary stuff. But messing with basic malware, even simple stuff like this, helps you understand what you're actually defending against.`,
        tags: ["Malware", "Python"],
        relatedProjectSlug: null
    },
    {
        id: "post-overthewire",
        slug: "overthewire-wargames",
        date: "2023-07-20",
        title: "Diving into CLI with OverTheWire",
        excerpt: "Beat Bandit and Leviathan over the summer to get better at Linux. Bandit was great for fundamentals, Leviathan stepped it up with actual vulnerability analysis.",
        content: `Did the OverTheWire Bandit and Leviathan wargames on my own time over the summer. Beat both.

Bandit is all about hammering down common Linux commands. File navigation, permissions, piping, SSH, all the basics you need to not be lost in a terminal. It also had some cool least privilege challenges that made you think about how file permissions actually work.

Leviathan was a step up. Instead of just running commands, you're examining small compiled programs and code snippets to find vulnerabilities. Some buffer overflow stuff, a race condition challenge, that kind of thing. Definitely more interesting than Bandit but it builds on those same fundamentals.

Both are free and I'd recommend them to anyone trying to get comfortable with Linux.`,
        tags: ["Linux", "CTF"],
        relatedProjectSlug: null
    },
    {
        id: "post-pwnagotchi",
        slug: "building-a-pwnagotchi",
        date: "2023-08-05",
        title: "Building an AI-Powered Pwnagotchi",
        excerpt: "Built a Pwnagotchi for passive WPA2 handshake capture. Full build guide is on the project page.",
        content: `Built a Pwnagotchi over the summer. If you don't know what that is, it's basically a Raspberry Pi with an e-ink display that passively captures WPA2 handshakes using AI to get better at it over time. Think Tamagotchi but for WiFi hacking.

The full build guide is on my pwnagotchi-cookbook project page, but a couple things worth mentioning here: my Waveshare 3 screen came dead on arrival, so I had to swap the config to Waveshare 4. Also had to manually enable some settings to get the AI/ML features to actually work, which wasn't obvious from the docs.

Big shout out to jayofelony's fork of the Pwnagotchi OS. It's way better maintained than the official one and saved me a ton of headaches with compatibility.`,
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
        excerpt: "Sophomore year finals. Wrote a Python parser to batch convert practice tests into one big Quizlet.",
        content: `Sophomore year finals were coming up and I had a bunch of practice tests scattered across my school's website and Canvas. I wanted to combine them all into one big Quizlet to study from, but copying questions by hand was going to take forever.

I tried using AI to just do the conversion directly but it wasn't great at handling the inconsistent HTML formatting across different sources. So I wrote an OOP Python parser instead. It takes the raw HTML from the school site and Canvas, figures out the formatting rules for each source, and spits out a Quizlet-importable format.

The tricky part was that every page formatted questions differently. Some used tables, some used numbered lists, some were just raw text. I got around it by writing specific parsing rules for each format and falling back to more general ones when needed.

I lost the code at some point but I'll dig it up eventually. When I do, I want to use AI to help tune the parser to handle even more formats.`,
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

Because WireGuard is "cryptographically silent," any unauthorized probes sent to the UDP ports are instantly dropped. Without the cryptographic handshake, the Tailnet operates as a black hole, keeping the massive attack surface of the media ecosystem entirely hidden from the public internet. Pretty solid defense.`,
        tags: ["Pentesting", "Network Architecture"],
        relatedProjectSlug: null
    }
];
