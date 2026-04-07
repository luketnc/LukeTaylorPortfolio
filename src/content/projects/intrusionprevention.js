export default {
        id: "intrusion-detection-and-prevention",
        slug: "intrusion-detection-and-prevention",
        title: "Intrusion Detection and Prevention",
        oneLiner: "Lab that explains how to install and configure SNORT and how IPS/IDS works.",
        category: "Test",
        tags: ["IPS", "IDS", "Tool"],
        status: "Archived",
        featured: false,
        content: `
## WHy is Intrusion Detection and Preventiomn Important?

IDPS is important for a few reasons
Both IPS and IDS monitor network and host activity for malicious behavior and block and mitigate threats
These technologies can be used in tandem with SOAR (Security orchestration Automation and response)
While IDPS is important, on its own it is not enough to provide adequate security for most companies

## Common Methods of Intrusion Detection and Prevention

Some common IDP systems are:
Checkpoint Quantem (They were at cyber summit)
Cisco Secure IPS
Snort
Zeek
Some of these systems are open source like Zeek or Snort and some of them are commercialized products like CIsco IPS and Checkpoint quantem

## What does Snort do?
We know that snort is a Intrusion prevention system but what exactly does it do?
Conceptually Snort follows these steps:
Packet Capture 
Preprocessing (packets are normalized)
Detection (Packets are compared against rules)
Action (Alert, Log, etc)
Understanding Snort and its specific functions will help us later in this exercise

<img src="/images/intrusion-prevention/IPS-1.png" alt="IPS-1" style="width: 100%; border-radius: 8px;" />

## Configuring Snort Part 1
Before we begin this exercise we need to add snort to our firewall
Snort can be installed on Cisco Firepower, pfSense, and OPNsense
We will access our PFSense firewall from our windows server and install snort like so

<img src="/images/intrusion-prevention/IPS-2.png" alt="IPS-2" style="width: 100%; border-radius: 8px;" />

## Snort Configuration Part 2
Once inside the SNORT settings we will do the following steps:
Global settings - check click to enable download of snort gplv2 community rules
Update interval - every day
This will basically grab our ruleset that we want to compare our packets against

<img src="/images/intrusion-prevention/IPS-3.png" alt="IPS-3" style="width: 100%; border-radius: 8px;" />

## Force Updates And Add Interfaces
Now that we have changed some of snorts settings we need to force our updates. This is really finicky and sometimes doesn't work because of our IP so we will be persistent and try to work through
We will also add our Interfaces (Both WAN and LAN)
We will enable packet captures and block offenders for WAN and just packet capture for LAN
We will also enable glpv2 rules for both

<img src="/images/intrusion-prevention/IPS-4.png" alt="IPS-4" style="width: 100%; border-radius: 8px;" />

## Using Kali to Scan our Machine
Now that we have Snort set up, we will take it for a spin
To start we will do a virus scan of our windows server (192.168.1.2)
We are less interested in the results of this scan and more interested in what snort does
NOTE: The kali linux machine we have is an external user on the internal network
 
<img src="/images/intrusion-prevention/IPS-5.png" alt="IPS-5" style="width: 100%; border-radius: 8px;" />

## Blocking Our Kali Machine
As we do our scan we can look at the Alerts for snort under LAN (Or WAN)
What we see is that a user is trying to do a vulnerability scan
Snort also goes ahead and blocks the ip address of our Kali Machine
We configured the firewall to kill our state as well so our session ends and sqlmap slowly times out

<img src="/images/intrusion-prevention/IPS-6.png" alt="IPS-6" style="width: 100%; border-radius: 8px;" />

<img src="/images/intrusion-prevention/IPS-7.png" alt="IPS-7" style="width: 100%; border-radius: 8px;" />

## Detecting a SQL Injection Attempt from Kali
Next we will take this a step further and attempt a SQL injection on our website (after unblocking the kali machine)
We will specifically use the ‘ OR ‘1’=’1 payload for testing purposes
This will work because I forgot to change our code to sanitize inputs in the SQL injection lab






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
    };