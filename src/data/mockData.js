import { projectsData as catbomber } from './CATBOMBERData';
import { projectsData as iprev } from './IntrusionPrevention';
import { projectsData as ransomware } from './Ransomware-least-priv';
import { projectsData as vuln } from './vulnScan';
import { projectsData as pgpKey } from './pgpkey';

const mockProjects = [
    {
        id: "markdown-demo-project",
        slug: "markdown-demo-project",
        title: "Markdown Rendering Test",
        oneLiner: "A sample project exported from Google Docs demonstrating rich text.",
        category: "Test",
        tags: ["Markdown", "Demo"],
        status: "Active",
        featured: false,
        content: `
## Overview

This is an example of dropping **Markdown** directly into the \`content\` field of a project. Because this field exists, the page bypasses the rigid template and instead dynamically renders whatever is presented here.

### Why is this useful?
As an engineer keeping notes in Google Docs, you can easily export them via Add-ons or copy-pasting into Markdown without manually sorting them into "Overview", "Goals", and "Lessons".

### Features Supported

*   **Bold** and *Italic* text.
*   [Links to resources](https://github.com)
*   Images embedded directly in the flow:

<img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800" alt="Sample code image" style="width: 100%; border-radius: 8px;" />

> "It even supports blockquotes for notes and callouts."
> - Future You

### Code Snippets

\`\`\`javascript
// And standard codeblocks!
function helloWorld() {
    console.log("Hello, Nullgarden!");
}
\`\`\`

---

*End of Demo.*
        `,
        overview: "",
        goal: "",
        features: [],
        techStack: [],
        results: "",
        lessons: "",
        links: {
            repo: "",
            demo: "",
            writeup: ""
        }
    },

    {
        id: "pwnagotchi-cookbook",
        slug: "pwnagotchi-cookbook",
        title: "Pwnagotchi Cookbook",
        oneLiner: "A somewhat recent guide to building and configuring a pwnagotchi.",
        category: "Test",
        tags: ["WiFi", "Hardware", "Hacking"],
        status: "Archived",
        featured: false,
        content: `
## Overview

As you have probably gathered the pwnagotchi is a handheld wifi pwning device that looks and acts like a tamagotchi pet. It uses reinforcement learning to help maximize reward (In this case this means switching channels on monitor mode and trying different attacks (Deauth and association) to try to get as much wpa key material as possible. You can then dump this information to your computer and use bruteforce/dictionary attacks to attempt to crack the password (Assuming you collected enough information and have a good wordlist) 

### Limits of the pwnagotchi

- The pwnagotchi, while being cool and “working” in many senses is not the most updated method of cracking WPA2 WiFi  
  - [KRACK Attack](https://www.krackattacks.com/)  
- It lacks the range or the reliability of the [alfa](https://www.amazon.com/Alfa-Long-Range-Dual-Band-Wireless-External/dp/B00VEEBOPG)  
- Pwnagotchi stores material in .pcap files which is ok but the hot new packet capture files are .pcapng as they are richer in information and allow for better analysis and potentially access to more exploits

## What you can expect to learn:

- Soldering skills  
- WPA Wifi cracking techniques  
- 4-way handshake and some networking skills  
- Process enjoyment and experiencing “flow”

# Parts Needed:

- [Raspberry pi 0 w (2017 Model)](https://www.amazon.com/Raspberry-Pi-Zero-Wireless-model/dp/B06XFZC3BX/ref=sr_1_3_pp?crid=2OMU27JWX0365&dib=eyJ2IjoiMSJ9.FiXY83smwHsE1d-G2Fuq78PGTyiTImQlUYK68xjtMiPYvtsNC1RK2IR2EeUU9rR8-HmkjX7VFPZk7G33Hem-jn5udS_uoSTdf752a9LjzrAXspBQm4Rki-YFoECP_jZcHqYmCepR9i_13pYMps0aINCD8sdrsKV4lfvZ8dMUTfPIjFflq6-QdUvN2QsiUVIuVCjMyljyfhgDg-cOQ7q0W8jPtZiiUahabGMcUlbTBag.xipIVPF72kaIpy8mYkwxFbLTkp-5hNzaTeNLHfkC9WU&dib_tag=se&keywords=pi+0+w&qid=1746041825&sprefix=pi+0+%2Caps%2C132&sr=8-3)  
- [Waveshare E-INK Dsiplay](https://www.amazon.com/dp/B07Q22WDB9?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1)  
- [Pisugar 3 Portable Battery](https://www.amazon.com/Portable-Pwnagotchi-Raspberry-Accessories-handhold/dp/B09MJ8SCGD/ref=sr_1_1?crid=SNUSV4JYFWTR&dib=eyJ2IjoiMSJ9.8vrkiWvAZDVK5TFg6xCSWkj8HP6KyTPABXJNO4OZE9d1GfJpw7ACXe_RR6i88H67EduN98PnvhK84tH68FE1LYlFsYbQ2cfNPf6meiytcNM0i9djniYaga2VJLv9XiniwVZAisdTCoGKn6zFeatuL9Tn5AIdLw2afdauxVp0Dir5zdnu6JDoWJQNsKQmPr-2h0OnVcGZQugrJq_NJd78qvsQetS-GrwHnaEeUZ-nyrrE4jI54rACjYYKyVkBnPX96IVI_izkQd8ue_cmvQUNT1nEPjW1h8ipHAc3u_1wSxA.QuoNZMJz1yUb2askJEs-Cw4exfO3_QE-wgO3QDO5COI&dib_tag=se&keywords=pi+sugar+3&qid=1746041608&s=electronics&sprefix=pi+sugar+3%2Celectronics%2C124&sr=1-1)  
- [Male Header Pins](https://www.amazon.com/dp/B083DYVWDN?ref_=ppx_hzsearch_conn_dt_b_fed_asin_title_4)

Total Price: \~$83  
(You can thank Trump, I got mine for like $60)

# Software Needed:

- [VirtualBox](https://www.virtualbox.org/wiki/Downloads)   
- [Kali (VM)](https://www.kali.org/get-kali/#kali-virtual-machines)   
  - This a prebuilt in a VM and a good thing to have in your home lab. Comes pre loaded with hashcat, John, and some decent wordlists (RockYou, Wifite, etc)  
- [Whonix](https://www.whonix.org/wiki/VirtualBox)  
  - If you want to find some better or newer wordlists  
  - Also good if you want to look for some of the latest techniques   
  - NOTE: Uses Tor relay which may be flagged by your ISP  
  - No Qubes also means its a little easier to get slapped so be careful where you visit   
    - ALWAYS MAKE SURE [JAVASCRIPT IS DISABLED](https://forums.whonix.org/t/how-dangerous-is-javascipt/8194)  
- OPTIONAL: Dummy router  
  - Its nice to have a dummy router for cracking, and also a little safer LOL

#Hardware Assembly

## Step 1: Soldering your header pins

You probably already know this but you can actually buy the Pi 0 W (And most dev boards) with header pins already attached for a $5 markup. However this is definitely the weenie hut jrs route and I advice strongly against it. While it admittedly isn’t a skill that will directly help you get a job, it helped me further cultivate an interest in hacking as a whole and provided me with a nice early sense of accomplishment. This was a 2+ hour process for me that I initially didn't enjoy at the time, but after the fact it helped me start to appreciate delayed gratification a little more which I think is really important in hacking/cybersecurity. It also opens the floodgates for some really cool projects that, unlike the pwnagotchi, you can't buy pre-built (ESP BLE Spammer, BIOS lock hardware bypass, Signal j\*mmer (LOL), headless wardriving rig etc).

Anyways I digress, this was my soldering setup:

<img src="nullgarden\public\images\solder-setup.png" alt="Sample code image" style="width: 100%; border-radius: 8px;" />


I didn't have flux paste or a desolder pump (and I didnt have a small enough tip) which made my experience pretty taxing. The iron I recommended at the top has these things and no extra bullshit.

I also recommend watching this video or this video to help get the basics down. \-- remember you only (Likely) have 1 raspberry pi on hand so practice on some wires or an expansion board or some shit if you want.

### TIPS

- Don’t hold the whole spool of solder, its rather unwieldy and just a pain in the ass. Instead wrap a coil into a ring around your ringer and control it like that  
- Dial the heat in, you dont want to go too hot and fuck anything up but you want to be able to heat your pins and solder up uniformly so you get nice clean solders  
- TAKE YOUR TIME  
- Take breaks and get back at it later if needed. Definitely don’t rush it this is one of those measure twice cut once things  
- Having a window open is nice even though you'll be using leadless solder, huffing fumes will give you a headache

## Step 2: Multimeter/Testing Your Work

After soldering it’s always smart to test your work. After this point is when things started to go wrong for me so the testing is really important. Consult the pinout diagrams here. This is super important and overlooked in the shitty old cookbook I followed when I did this project initially. Understanding pinout diagrams looks daunting but is worth it so you can rule out your soldering job or hardware failures if anything goes wrong later.

## 

## Step 3: Attaching the PiSugar

This step is easy as fuck lmao. Literally all you have to do is line up the 2 switches on the back of the pi sugar and the 2 power plates on the back of the pi 0\. 

<img src="nullgarden\public\images\backof-battery.png" alt="Sample code image" style="width: 100%; border-radius: 8px;" />

<img src="nullgarden\public\images\battery-pins.png" alt="Sample code image" style="width: 100%; border-radius: 8px;" />

Now you need to use the clear spacers and plastic bolts and nuts that the battery provides. These will space the Pi perfectly from the battery and allow you to get power consistently. DONT LOSE THEM. I lost 2 and I have to be so careful with my shit now lmao.

## Step 4: Plug in the screen

Again this a super easy one. If you haven't done it already, line up the pins and plug your screen in. Be careful with the pins and be gentle, kinda work it in left to right and don’t jam the pins super deep, you can use the multimeter to see if they are far enough as explained in the pinout doc if you are paranoid about breaking components.


<img src="nullgarden\public\images\full-assembly-side.png" alt="Sample code image" style="width: 100%; border-radius: 8px;" />

If everything looks good you are officially done with hardware\! Congrats\!

# Software Setup

The first part of this is relatively easy as you're just flashing the pwnagotchi OS onto your micro SD card. However there are a few caveats. When I did this last year I tried so hard to get the latest pwnagotchi main release to work to no avail. Luckily there is a workable fork by JayoFelony which is apprently still being maintained which is sick and saves us a fuck ton of time.

## Step 1: Grab Pwnagotchi OS from github

This is self explanatory

Use [this link](https://github.com/jayofelony/pwnagotchi) for latest release (What I used)

No need to unzip your file just let the Imager in the next step handle that

## Step 2: Flash the Pwnagotchi OS

NOTE: Use Raspberry Pi Imager. I used Balenaetcher when I did it and kept getting bad writes for some reason so probably best to stick with what works



### Features Supported

*   **Bold** and *Italic* text.
*   [Links to resources](https://github.com)
*   Images embedded directly in the flow:

<img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800" alt="Sample code image" style="width: 100%; border-radius: 8px;" />

> "It even supports blockquotes for notes and callouts."
> - Future You

### Code Snippets

\`\`\`javascript
// And standard codeblocks!
function helloWorld() {
    console.log("Hello, Nullgarden!");
}
\`\`\`

---

*End of Demo.*
        `,
        overview: "",
        goal: "",
        features: [],
        techStack: [],
        results: "",
        lessons: "",
        links: {
            repo: "",
            demo: "",
            writeup: ""
        }
    },


    {
        id: "2far",
        slug: "pwnagotchi-cookbook",
        title: "Pwnagotchi Cookbook",
        oneLiner: "A somewhat recent guide to building and configuring a pwnagotchi",
        category: "Tooling",
        tags: ["Go", "Hardware", "Wifi"],
        status: "Archived",
        featured: true,
        overview: "Built a Pwnagotchi to learn about hardware, wifi, and AI.",
        goal: "To understand the basics of sniffing handshakes and configuring a pi zero w",
        features: [
            "Soldering of a pi zero w",
            "Configuring pwnagotchi OS",
            "Troubleshooting bugs and glitches"
        ],
        techStack: ["Bash", "WPA2", "TCP/IP"],
        results: "Got a pwnagotchi to sniff handshakes and function on a semi supported screen",
        lessons: "Troubleshooting hardware and software issues simultaneously is a pain and requires a lot of patience. Also, the pi zero w is a solid platform for small projects.",
        content: `
            # Intro

As you have probably gathered the pwnagotchi is a handheld wifi pwning device that looks and acts like a tamagotchi pet. It uses reinforcement learning to help maximize reward (In this case this means switching channels on monitor mode and trying different attacks (Deauth and association) to try to get as much wpa key material as possible. You can then dump this information to your computer and use bruteforce/dictionary attacks to attempt to crack the password (Assuming you collected enough information and have a good wordlist) 

## Limits of the pwnagotchi

- The pwnagotchi, while being cool and “working” in many senses is not the most updated method of cracking WPA2 WiFi  
  - [KRACK Attack](https://www.krackattacks.com/)  
- It lacks the range or the reliability of the [alfa](https://www.amazon.com/Alfa-Long-Range-Dual-Band-Wireless-External/dp/B00VEEBOPG)  
- Pwnagotchi stores material in .pcap files which is ok but the hot new packet capture files are .pcapng as they are richer in information and allow for better analysis and potentially access to more exploits

## What you can expect to learn:

- Soldering skills  
- WPA Wifi cracking techniques  
- 4-way handshake and some networking skills  
- Process enjoyment and experiencing “flow”

# Parts Needed:

- [Raspberry pi 0 w (2017 Model)](https://www.amazon.com/Raspberry-Pi-Zero-Wireless-model/dp/B06XFZC3BX/ref=sr_1_3_pp?crid=2OMU27JWX0365&dib=eyJ2IjoiMSJ9.FiXY83smwHsE1d-G2Fuq78PGTyiTImQlUYK68xjtMiPYvtsNC1RK2IR2EeUU9rR8-HmkjX7VFPZk7G33Hem-jn5udS_uoSTdf752a9LjzrAXspBQm4Rki-YFoECP_jZcHqYmCepR9i_13pYMps0aINCD8sdrsKV4lfvZ8dMUTfPIjFflq6-QdUvN2QsiUVIuVCjMyljyfhgDg-cOQ7q0W8jPtZiiUahabGMcUlbTBag.xipIVPF72kaIpy8mYkwxFbLTkp-5hNzaTeNLHfkC9WU&dib_tag=se&keywords=pi+0+w&qid=1746041825&sprefix=pi+0+%2Caps%2C132&sr=8-3)  
- [Waveshare E-INK Dsiplay](https://www.amazon.com/dp/B07Q22WDB9?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1)  
- [Pisugar 3 Portable Battery](https://www.amazon.com/Portable-Pwnagotchi-Raspberry-Accessories-handhold/dp/B09MJ8SCGD/ref=sr_1_1?crid=SNUSV4JYFWTR&dib=eyJ2IjoiMSJ9.8vrkiWvAZDVK5TFg6xCSWkj8HP6KyTPABXJNO4OZE9d1GfJpw7ACXe_RR6i88H67EduN98PnvhK84tH68FE1LYlFsYbQ2cfNPf6meiytcNM0i9djniYaga2VJLv9XiniwVZAisdTCoGKn6zFeatuL9Tn5AIdLw2afdauxVp0Dir5zdnu6JDoWJQNsKQmPr-2h0OnVcGZQugrJq_NJd78qvsQetS-GrwHnaEeUZ-nyrrE4jI54rACjYYKyVkBnPX96IVI_izkQd8ue_cmvQUNT1nEPjW1h8ipHAc3u_1wSxA.QuoNZMJz1yUb2askJEs-Cw4exfO3_QE-wgO3QDO5COI&dib_tag=se&keywords=pi+sugar+3&qid=1746041608&s=electronics&sprefix=pi+sugar+3%2Celectronics%2C124&sr=1-1)  
- [Male Header Pins](https://www.amazon.com/dp/B083DYVWDN?ref_=ppx_hzsearch_conn_dt_b_fed_asin_title_4)

Total Price: \~$83  
(You can thank Trump, I got mine for like $60)

# Software Needed:

- [VirtualBox](https://www.virtualbox.org/wiki/Downloads)   
- [Kali (VM)](https://www.kali.org/get-kali/#kali-virtual-machines)   
  - This a prebuilt in a VM and a good thing to have in your home lab. Comes pre loaded with hashcat, John, and some decent wordlists (RockYou, Wifite, etc)  
- [Whonix](https://www.whonix.org/wiki/VirtualBox)  
  - If you want to find some better or newer wordlists  
  - Also good if you want to look for some of the latest techniques   
  - NOTE: Uses Tor relay which may be flagged by your ISP  
  - No Qubes also means its a little easier to get slapped so be careful where you visit   
    - ALWAYS MAKE SURE [JAVASCRIPT IS DISABLED](https://forums.whonix.org/t/how-dangerous-is-javascipt/8194)  
- OPTIONAL: Dummy router  
  - Its nice to have a dummy router for cracking, and also a little safer LOL

# Hardware Assembly

## Step 1: Soldering your header pins

You probably already know this but you can actually buy the Pi 0 W (And most dev boards) with header pins already attached for a $5 markup. However this is definitely the weenie hut jrs route and I advice strongly against it. While it admittedly isn’t a skill that will directly help you get a job, it helped me further cultivate an interest in hacking as a whole and provided me with a nice early sense of accomplishment. This was a 2+ hour process for me that I initially didn't enjoy at the time, but after the fact it helped me start to appreciate delayed gratification a little more which I think is really important in hacking/cybersecurity. It also opens the floodgates for some really cool projects that, unlike the pwnagotchi, you can't buy pre-built (ESP BLE Spammer, BIOS lock hardware bypass, Signal j\*mmer (LOL), headless wardriving rig etc).

Anyways I digress, this was my soldering setup:

I didn't have flux paste or a desolder pump (and I didnt have a small enough tip) which made my experience pretty taxing. The iron I recommended at the top has these things and no extra bullshit.

I also recommend watching this video or this video to help get the basics down. \-- remember you only (Likely) have 1 raspberry pi on hand so practice on some wires or an expansion board or some shit if you want.

### TIPS

- Don’t hold the whole spool of solder, its rather unwieldy and just a pain in the ass. Instead wrap a coil into a ring around your ringer and control it like that  
- Dial the heat in, you dont want to go too hot and fuck anything up but you want to be able to heat your pins and solder up uniformly so you get nice clean solders  
- TAKE YOUR TIME  
  - Take breaks and get back at it later if needed. Definitely don’t rush it this is one of those measure twice cut once things  
- Having a window open is nice even though you'll be using leadless solder, huffing fumes will give you a headache

## Step 2: Multimeter/Testing Your Work

After soldering it’s always smart to test your work. After this point is when things started to go wrong for me so the testing is really important. Consult the pinout diagrams here. This is super important and overlooked in the shitty old cookbook I followed when I did this project initially. Understanding pinout diagrams looks daunting but is worth it so you can rule out your soldering job or hardware failures if anything goes wrong later.

## 

## Step 3: Attaching the PiSugar

This step is easy as fuck lmao. Literally all you have to do is line up the 2 switches on the back of the pi sugar and the 2 power plates on the back of the pi 0\. 

Now you need to use the clear spacers and plastic bolts and nuts that the battery provides. These will space the Pi perfectly from the battery and allow you to get power consistently. DONT LOSE THEM. I lost 2 and I have to be so careful with my shit now lmao.

## Step 4: Plug in the screen

Again this a super easy one. If you haven't done it already, line up the pins and plug your screen in. Be careful with the pins and be gentle, kinda work it in left to right and don’t jam the pins super deep, you can use the multimeter to see if they are far enough as explained in the pinout doc if you are paranoid about breaking components.

If everything looks good you are officially done with hardware\! Congrats\!

# Software Setup

The first part of this is relatively easy as your just flashing the pwnagotchi OS onto your micro SD card. However there are a few caveats. When I did this last year I tried so hard to get the latest pwnagotchi main release to work to no avail. Luckily there is a workable fork by JayoFelony which is apprently still being maintained which is sick and saves us a fuck ton of time.

## Step 1: Grab Pwnagotchi OS from github

This is self explanatory

Use [this link](https://github.com/jayofelony/pwnagotchi) for latest release (What I used)

No need to unzip your file just let the Imager in the next step handle that

## Step 2: Flash the Pwnagotchi OS

NOTE: Use Raspberry Pi Imager. I used Balenaetcher when I didi it and kept getting bad writes for some reason so probably best to stick with what works


            
            
            `
    },
    {
        id: "vuln-scanner-go",
        slug: "vuln-scanner-go",
        title: "Concurrent Vuln Scanner",
        oneLiner: "A fast, concurrent vulnerability scanner built in Go.",
        category: "Tooling",
        tags: ["Go", "Concurrency", "Security"],
        status: "Active",
        featured: true,
        overview: "Built a lightweight vulnerability scanner to check local container images for known CVEs.",
        goal: "To understand concurrent programming in Go while reinforcing knowledge of CVE databases.",
        features: [
            "Concurrent scanning of multiple images",
            "Integration with OSV database",
            "JSON reporting output"
        ],
        techStack: ["Go", "Docker API", "OSV Database"],
        results: "Reduced scanning time by 40% compared to sequential scripts.",
        lessons: "Handling goroutines and channels safely was tricky. Learned a lot about avoiding race conditions.",
        links: {
            repo: "https://github.com",
            demo: "",
            writeup: ""
        }
    },
    {
        id: "auth-lab-infra",
        slug: "auth-lab-infra",
        title: "Zero-Trust Auth Lab",
        oneLiner: "Terraform-deployed lab for testing zero-trust auth flows.",
        category: "Infrastructure",
        tags: ["Terraform", "AWS", "IAM"],
        status: "Completed",
        featured: true,
        overview: "A lab environment to test various identity and access management configurations under a Zero Trust model.",
        goal: "Learn IAM best practices and Infrastructure as Code.",
        features: [
            "Automated deployment of VPC and subnets",
            "Strict IAM roles and policies",
            "Simulated attack paths"
        ],
        techStack: ["Terraform", "AWS", "Python"],
        results: "Successfully modeled 3 common attack paths and implemented preventative controls.",
        lessons: "IAM policies can be overly permissive by default. Explicit denies are crucial.",
        links: {
            repo: "https://github.com",
            demo: "",
            writeup: ""
        }
    },
    {
        id: "legacy-packet-sniffer",
        slug: "legacy-packet-sniffer",
        title: "Basic Packet Sniffer",
        oneLiner: "An educational packet sniffer to understand TCP/IP.",
        category: "Networking",
        tags: ["Python", "Scapy", "Networking"],
        status: "Archived",
        featured: false,
        overview: "A simple script to capture and analyze local network traffic.",
        goal: "Understand the structure of IP, TCP, and UDP headers.",
        features: [
            "Live capture filtering",
            "Hex dump viewing of payloads"
        ],
        techStack: ["Python", "Scapy"],
        results: "Gained a deep understanding of standard networking protocols.",
        lessons: "Parsing packets manually is error-prone; using libraries like Scapy is much safer but slower.",
        links: {
            repo: "https://github.com",
            demo: "",
            writeup: ""
        }
    }
];

export const projectsData = [
    ...mockProjects,
    ...catbomber,
    ...iprev,
    ...ransomware,
    ...vuln,
    ...pgpKey
];

export const updatesData = [
    {
        id: "update-1",
        date: "2026-02-20",
        title: "Finished Go Vuln Scanner MVP",
        body: "Finally got the concurrent scanning working without race conditions. Go channels are incredibly powerful once you understand the mental model. Next step: writing tests.",
        tags: ["Go", "Milestone"],
        relatedProjectSlug: "vuln-scanner-go"
    },
    {
        id: "update-2",
        date: "2026-02-10",
        title: "Starting the Zero-Trust Lab",
        body: "Just planned out the architecture for the Zero-Trust Auth lab. Will be using Terraform to make it easily reproducible. Planning to focus heavily on AWS IAM permissions boundaries.",
        tags: ["Planning", "Cloud"],
        relatedProjectSlug: "auth-lab-infra"
    },
    {
        id: "update-3",
        date: "2026-01-15",
        title: "Site Redesign",
        body: "Ported my old HTML blog over to a React SPA. Needed something cleaner that reflected my focus better. Decided to go with a dark 'security' aesthetic.",
        tags: ["Meta"],
        relatedProjectSlug: null
    }
];
