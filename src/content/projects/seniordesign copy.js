export default {
    id: "homelab-project",
    slug: "homelab-project",
    title: "Making my own homelab",
    oneLiner: "Making my own homelab from the ground up",
    category: "Homelab",
    tags: ["Homelab", "Docker", "Kubernetes", "Networking"],
    status: "Completed",
    featured: true,
    tier: "real-world",
    deepDive: true,
    size: "feature",
    image: "/images/homelab/Physicaltopology.drawio.png",
    imageAlt: "Making my own homelab",
    content: `
   
    ## Intro
    
    For a lot of my software/defensive security/ethica hacking preojects I use my gaming computer. It has plenty of RAM, a decent cpu and a pretty good gfraphics card so it was always the obvious choice over my myriad of laptops. One constant drawback was my enviornment. Trying to do security reserach on my main machine has its drawbacks. For example I have been honing my reverse4 engineering capabilities and have transitioned to both guided (and unguided) malware detonnations (Writeup coming soon ish). While this has been solid running windows as the Host OS is kinda reckless consdering more and more malware has been uusing VM escape and detecting controlled detonnation. Furthermore I have been itching to run some persistant services I can access over WAN and I am tired of buying compute engine resources all the time and having to worry about reccurring payments and annoyance with google. 

    For a while I had a few ways to kinda bypass my enviornment limitations, like initially a few years ago i spun up ubuntu on a raspberry pi5 and then threw DVWA, JuiceShop, and a few other intentionally vulerable apps as services on it. I used a spare router (with the radios enabled because I wanted to utilize my computers wireless antenna for lab while using ethernet for WAN). This came with obvious issues like the roputer interferring with the AP and wthe raspberry pi not being a great multip[urpose cyberrange. I also rana  little DFIR lab with a managed switch, 2 raspberry pi (a 5 and a 3B) You can see that setup here(link). This worked well but was a highly specialized airgrapped setup that I seldom used, in favor for decompiling malware in FlARE. This setup also had computer issues like the Pis being unreliable for packet caopture and net simulation.

    The answer here seems obivoius right? build a home lab like every other CS/IT/COmpENG student. Despite the obvious answer I had some potential drawbacks. First off money, a decent managed switch, proper AP, and server hardware is expensive, and without a clear use case my fear was any system i put together miught end up sitting and taking up space while simontaniosuly deprecaiating. When I tried to justify it initially i saw the classic homelab use cases, media server, local google drive, game servers etc. This didnt interest me because i already have people who run those services and reduntant services made no sense.

    However despite some practical drawbacks, and my interest in networking and security won out. So I bought some used hardware (gaming, not server grade hardware) to start my homelab. The compromise was that i would opt for the cheeaper hardware now, and if i finished and felt like i needed more I could always just get a 4u case3 for the gaming stuff and throw it in a rack with a better switch an a more modern server later on. 

    Before even starting to create any logical desighn plan i also settled on some of the services I wanted to run. 
    
    ## Services
    These were the intial services (and subsequent writeups) I will release.
    - Prometheus + Node Exporter + Grafana
    - MatrixChat + Element
    - A Lab for my more aggressive automated fuzzing projects
    - A place for my DFIR and malware detonnation activities
    - An Active OSINT Scraper that pulls from telegrams, DISCORD, twitter, and VK
    

    




    ment keys, and API billing were all things I had to grind through myself. If anything the skill this project really built was learning to drive an AI toolchain kind of like running a small team. Overall this was one of my favorite projects and I am really happy with how it came out!
    `,
    aiEnhancements: "I want to be upfront: this project leaned on AI heavily, and that is part of the point. Claude played a major role in teaching me what to look for. It helped me recognize that the CRC32 and PE-parsing capabilities together pointed at hash-based import resolution, explained the ring model and why LdrLoadDll was the right chokepoint to break on, and helped me interpret a lot of what the tools were surfacing. What I brought was the safe setup and detonation, running the tools, deciding what to chase, and verifying claims instead of taking the model's word for it. I came out of this knowing more reverse engineering than I went in with, and being honest about how is more useful than pretending I did it unaided.",
    overview: "A static and dynamic reverse engineering teardown of an in-the-wild external CS2 cheat, motivated by wanting to work in anticheat.",
    goal: "Understand how a modern external cheat is built and what it touches, prove whether the sample was also malware, and work out how I would detect it.",
    results: "Identified a ring-3 external ESP and aimbot with no observed network payload (about 90% confidence), and defined a CRC32 hash-extraction method to close the remaining gap.",
    lessons: "Hash-based import resolution can hide a program's real capabilities from static analysis, so you pick a chokepoint (LdrLoadDll) that the technique cannot avoid. Anti-analysis behavior is itself a detection signal."
};
