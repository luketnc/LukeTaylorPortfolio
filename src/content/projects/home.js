export default {
    id: "homelab-project",
    slug: "homelab-project",
    title: "Making my own homelab",
    oneLiner: "Making my own homelab from the ground up",
    category: "Homelab",
    tags: ["Homelab", "Proxmox", "OPNsense", "Networking"],
    status: "Completed",
    featured: true,
    tier: "real-world",
    deepDive: true,
    size: "feature",
    image: "/images/homelab/Physicaltopology.drawio.png",
    imageAlt: "Making my own homelab",
    content: `
   
    ## Intro

    For a lot of my software/defensive security/ethical hacking projects I use my gaming computer. It has plenty of RAM, a decent cpu and a pretty good graphics card so it was always the obvious choice over my myriad of laptops. One constant drawback was my environment. Trying to do security research on my main machine has its problems. For example I have been honing my reverse engineering capabilities and have transitioned to both guided (and unguided) malware detonations (writeup coming soon-ish). While this has been solid, running Windows as the host OS is kinda reckless considering more and more malware uses VM escape and detects controlled detonation. Furthermore I have been itching to run some persistent services I can access over WAN and I am tired of buying compute engine resources all the time and having to worry about recurring payments and annoyance with google.

    For a while I had a few ways to kinda bypass my environment limitations, like initially a few years ago I spun up Ubuntu on a Raspberry Pi 5 and then threw DVWA, JuiceShop, and a few other intentionally vulnerable apps as services on it. I used a spare router (with the radios enabled because I wanted to utilize my computer's wireless antenna for the lab while using ethernet for WAN). This came with obvious issues like the router interfering with the AP and the raspberry pi not being a great multipurpose cyberrange. I also ran a little DFIR lab with a managed switch, 2 raspberry pi (a 5 and a 3B). You can see that setup here (link). This worked well but was a highly specialized airgapped setup that I seldom used, in favor of decompiling malware in FLARE. This setup also had issues like the Pis being unreliable for packet capture and net simulation.

    The answer here seems obvious right? build a home lab like every other CS/IT/COMPENG student. Despite the obvious answer I had some potential drawbacks. First off, a decent managed switch, proper AP, and server hardware is expensive, and without a clear use case my fear was any system I put together might end up sitting and taking up space while simultaneously depreciating. When I tried to justify it initially I saw the classic homelab use cases, media server, local Google Drive, game servers etc. This didn't interest me because I already have people who run those services and redundant services made no sense.

    However, despite some practical drawbacks, my interest in networking and security won out. So I bought some used hardware (gaming, not server grade hardware) to start my homelab. The compromise was that I would opt for the cheaper hardware now, and if I finished and felt like I needed more I could always just get a 4U case for the gaming stuff and throw it in a rack with a better switch and a more modern server later on.

    Before even starting to create any logical design plan I also settled on some of the services I wanted to run.

    ## Services

    These were the initial services (and subsequent writeups) I will release.

    - Prometheus + Node Exporter + Grafana
    - Matrix + Element
    - A Lab for my more aggressive automated fuzzing projects   
    - A place for my DFIR and malware detonation activities
    - An Active OSINT Scraper that pulls from Telegram, Discord, Twitter/X, and VK

    ## Design fundamentals

    After figuring out what services I wanted, the next logical step was to think about the logical design of the homelab. My services vary significantly in terms of their computational requirements as well as their purpose. For that reason I opted to run Proxmox as my OS and spin up individual VMs for each service. Another issue I had is my services and VMs would be different in access control. Because I was going to have my matrix server facing WAN I was explicitly committed to designing this with least privilege and no implicit trust. For that reason I decided to create 4 different VLANs (shown before in the logical design) with different levels of access and permissions.

    

    <img src="/images/homelab/PhysicalTopology1-Logical Topology.svg" alt="Homelab Logical Topology" style="width: 100%; border-radius: 8px;" />

    The real trick is that all of the traffic for this design is routed through the OPNsense VM on the Proxmox box. There is no WAN connection directly on the switch. This makes monitoring easier because I can SPAN-port everything when I'm ready and run it against Suricata. The VLANs physically segment the devices into multiple networks so I have the luxury of my management ports being a physical port that I can plug into, which keeps my machine in trusted and means if I were to get Ratted it would be hard to get to my management panel without somehow crashing and resetting my switch. Each of the 4 VLANs has a /24 subnet assigned in the 10.10.x.x range [VERIFY: during the build vlan02/03/04 were assigned /30 — confirm these are actually /24 before publishing, a /30 only fits one host], and OPNsense DHCP auto assigns the devices on each network, which leads us into some of the annoying parts of this build.

    ## The difficult parts

    This was not a smooth project through and through, there were some bumps in the road. My switch for one had an unintuitive UI and lacked some of the features I really wanted. It's a managed layer 2 switch — it can tag and trunk VLANs, but that's where it stops. What I really wanted was a layer 2 AND 3 switch that handles some of the routing at the network layer so I wouldn't have to do all of it in OPNsense on a VM. That, plus a less painful UI, would have certainly made the process a little easier.

    On the user error side I locked myself out of my management panel for Proxmox by plugging my main pc into the wrong switch port (LOL). I also refused to use the switch discovery tool and stuck to the ARP tables, in hindsight I should have gotten a real arp-scan tool that could hop subnets because I'd occasionally lose or reset a management panel (for Proxmox or OPNsense or the switch) and end up having to replug my Proxmox machine to a monitor, or search the subnets until I found the panel (that had been given a DHCP lease).

    ## Next Steps

    This project isn't done, this is really just the first part and the basic networking. Next I will be deploying my matrix server, which may or may not be a writeup depending on how interesting the process ends up being. Overall this was fun and reminded me how rewarding networking is when everything finally works.
    `,
    overview: "Building a bare-metal homelab environment from scratch using Proxmox and OPNsense.",
    goal: "To create a segmented, secure, and self-hosted environment for reverse engineering, malware detonation, and persistent services.",
    results: "Successfully set up a Proxmox host with 4 isolated VLANs, routing all traffic through an OPNsense VM for monitoring and control.",
    lessons: "Layer 3 switches would have simplified routing significantly, and relying solely on ARP tables without proper discovery tools can lead to getting locked out of management interfaces."
};
