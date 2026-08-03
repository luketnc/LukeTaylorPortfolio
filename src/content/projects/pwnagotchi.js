export default {
  id: "pwnagotchi-cookbook",
  slug: "pwnagotchi-cookbook",
  title: "Pwnagotchi Cookbook",
  oneLiner: "A somewhat recent guide to building and configuring a pwnagotchi",
  category: "Tooling",
  tags: ["Hardware / IoT", "Linux", "Network Security", "AI"],
  status: "Completed",
  featured: true,
  tier: "build",
  deepDive: true,
  image: "/images/Pwnagotchi-Images/finishedpwn.jpg",
  imageAlt: "Finished Pwnagotchi running, e-ink display showing 12 handshakes captured and the AI indicator active",
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
## Intro

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

## Parts Needed:

- [Raspberry pi 0 w (2017 Model)](https://www.amazon.com/Raspberry-Pi-Zero-Wireless-model/dp/B06XFZC3BX/ref=sr_1_3_pp?crid=2OMU27JWX0365&dib=eyJ2IjoiMSJ9.FiXY83smwHsE1d-G2Fuq78PGTyiTImQlUYK68xjtMiPYvtsNC1RK2IR2EeUU9rR8-HmkjX7VFPZk7G33Hem-jn5udS_uoSTdf752a9LjzrAXspBQm4Rki-YFoECP_jZcHqYmCepR9i_13pYMps0aINCD8sdrsKV4lfvZ8dMUTfPIjFflq6-QdUvN2QsiUVIuVCjMyljyfhgDg-cOQ7q0W8jPtZiiUahabGMcUlbTBag.xipIVPF72kaIpy8mYkwxFbLTkp-5hNzaTeNLHfkC9WU&dib_tag=se&keywords=pi+0+w&qid=1746041825&sprefix=pi+0+%2Caps%2C132&sr=8-3)  
- [Waveshare E-INK Dsiplay](https://www.amazon.com/dp/B07Q22WDB9?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1)  
- [Pisugar 3 Portable Battery](https://www.amazon.com/Portable-Pwnagotchi-Raspberry-Accessories-handhold/dp/B09MJ8SCGD/ref=sr_1_1?crid=SNUSV4JYFWTR&dib=eyJ2IjoiMSJ9.8vrkiWvAZDVK5TFg6xCSWkj8HP6KyTPABXJNO4OZE9d1GfJpw7ACXe_RR6i88H67EduN98PnvhK84tH68FE1LYlFsYbQ2cfNPf6meiytcNM0i9djniYaga2VJLv9XiniwVZAisdTCoGKn6zFeatuL9Tn5AIdLw2afdauxVp0Dir5zdnu6JDoWJQNsKQmPr-2h0OnVcGZQugrJq_NJd78qvsQetS-GrwHnaEeUZ-nyrrE4jI54rACjYYKyVkBnPX96IVI_izkQd8ue_cmvQUNT1nEPjW1h8ipHAc3u_1wSxA.QuoNZMJz1yUb2askJEs-Cw4exfO3_QE-wgO3QDO5COI&dib_tag=se&keywords=pi+sugar+3&qid=1746041608&s=electronics&sprefix=pi+sugar+3%2Celectronics%2C124&sr=1-1)  
- [Male Header Pins](https://www.amazon.com/dp/B083DYVWDN?ref_=ppx_hzsearch_conn_dt_b_fed_asin_title_4)

Total Price: \~$83  
(You can thank Trump, I got mine for like $60)

## Software Needed:

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

## Hardware Assembly

## Step 1: Soldering your header pins

You probably already know this but you can actually buy the Pi 0 W (And most dev boards) with header pins already attached for a $5 markup. However this is definitely the weenie hut jrs route and I advice strongly against it. While it admittedly isn’t a skill that will directly help you get a job, it helped me further cultivate an interest in hacking as a whole and provided me with a nice early sense of accomplishment. This was a 2+ hour process for me that I initially didn't enjoy at the time, but after the fact it helped me start to appreciate delayed gratification a little more which I think is really important in hacking/cybersecurity. It also opens the floodgates for some really cool projects that, unlike the pwnagotchi, you can't buy pre-built (ESP BLE Spammer, BIOS lock hardware bypass, Signal j\*mmer (LOL), headless wardriving rig etc).

Anyways I digress, this was my soldering setup:

<img src="/images/Pwnagotchi-Images/solder-setup.png" alt="Soldering station set up with iron, solder, and the Pi Zero W" style="width: 100%; border-radius: 8px;" />

<img src="/images/Pwnagotchi-Images/IMG_8697.JPG" alt="Workbench mid-build: soldering iron, jumper wires, and the Pi Zero under a magnifier lamp" style="width: 100%; border-radius: 8px;" />


I didn't have flux paste or a desolder pump (and I didnt have a small enough tip) which made my experience pretty taxing. The iron I recommended at the top has these things and no extra bullshit.

I also recommend watching this video or this video to help get the basics down. \-- remember you only (Likely) have 1 raspberry pi on hand so practice on some wires or an expansion board or some shit if you want.

## TIPS

- Don’t hold the whole spool of solder, its rather unwieldy and just a pain in the ass. Instead wrap a coil into a ring around your ringer and control it like that  
- Dial the heat in, you dont want to go too hot and fuck anything up but you want to be able to heat your pins and solder up uniformly so you get nice clean solders  
- TAKE YOUR TIME  
- Take breaks and get back at it later if needed. Definitely don’t rush it this is one of those measure twice cut once things  
- Having a window open is nice even though you'll be using leadless solder, huffing fumes will give you a headache

## Step 2: Multimeter/Testing Your Work

After soldering it’s always smart to test your work. After this point is when things started to go wrong for me so the testing is really important. Consult the pinout diagrams here. This is super important and overlooked in the shitty old cookbook I followed when I did this project initially. Understanding pinout diagrams looks daunting but is worth it so you can rule out your soldering job or hardware failures if anything goes wrong later.

## Step 3: Attaching the PiSugar

This step is easy as fuck lmao. Literally all you have to do is line up the 2 switches on the back of the pi sugar and the 2 power plates on the back of the pi 0\. 

<img src="/images/Pwnagotchi-Images/back-of-battery.png" alt="Sample code image" style="width: 100%; border-radius: 8px;" />

<img src="/images/Pwnagotchi-Images/battery-pins.png" alt="Sample code image" style="width: 100%; border-radius: 8px;" />

Now you need to use the clear spacers and plastic bolts and nuts that the battery provides. These will space the Pi perfectly from the battery and allow you to get power consistently. DONT LOSE THEM. I lost 2 and I have to be so careful with my shit now lmao.

## Step 4: Plug in the screen

Again this a super easy one. If you haven't done it already, line up the pins and plug your screen in. Be careful with the pins and be gentle, kinda work it in left to right and don’t jam the pins super deep, you can use the multimeter to see if they are far enough as explained in the pinout doc if you are paranoid about breaking components.


<img src="/images/Pwnagotchi-Images/full-assembly-side.png" alt="Sample code image" style="width: 100%; border-radius: 8px;" />

If everything looks good you are officially done with hardware\! Congrats\!

## Software Setup

The first part of this is relatively easy as you're just flashing the pwnagotchi OS onto your micro SD card. However there are a few caveats. When I did this last year I tried so hard to get the latest pwnagotchi main release to work to no avail. Luckily there is a workable fork by JayoFelony which is apprently still being maintained which is sick and saves us a fuck ton of time.

## Step 1: Grab Pwnagotchi OS from github

This is self explanatory

Use [this link](https://github.com/jayofelony/pwnagotchi) for latest release (What I used)

No need to unzip your file just let the Imager in the next step handle that

## Step 2: Flash the Pwnagotchi OS

NOTE: Use Raspberry Pi Imager. I used Balenaetcher when I did it and kept getting bad writes for some reason so probably best to stick with what works

<img src="/images/Pwnagotchi-Images/pi-imager.png" alt="Flashing Pwnagotchi OS with Raspberry Pi Imager" style="width: 100%; border-radius: 8px;" />

## Step 3: Configure config.toml

Once it's flashed, before you eject the SD card, pop open the boot partition and set up your \`config.toml\`. This is where all your settings live (WiFi whitelist, display type, plugins, the AI section, etc). Two gotchas cost me a stupid amount of time here:

- **Set the right display.** My Waveshare V3 e-ink came dead on arrival, so I swapped to a V4 and had to set \`ui.display.type = "waveshare_4"\` in the config. These are NOT interchangeable. If your screen stays blank after boot, 90% of the time it's the wrong display type in here, not busted hardware. Double check the exact model you actually have.
- **You have to actually turn the AI on.** This one got me. Out of the box the reinforcement learning brain isn't really doing anything useful until you enable and configure the \`ai\` section (\`ai.enabled = true\`) and give it time to train. Skip this and you basically just have a dumb deauther with a cute face. Turn it on, let it cook, and it'll start tuning its own parameters over time.

## Step 4: First Boot and a Word on Forks

Boot it up, watch the face, and confirm it's hopping channels and grabbing handshakes.

One more time for the people in the back: use [jayofelony's fork](https://github.com/jayofelony/pwnagotchi), not the official repo. The official one is basically abandonware at this point and fighting with it is a miserable time. Jay's fork is actively maintained, plays nice with newer Pi OS and hardware, and has way better plugin support. Do yourself a favor and start there instead of learning it the hard way like I did.

From here it's mostly plugin config and letting it run. Take it on a walk, let it collect handshakes, then dump the pcaps to your cracking rig when you get home.
        `
};
