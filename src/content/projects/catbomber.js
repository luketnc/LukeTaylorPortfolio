export default {
    id: "catbomber-network-analysis",
    slug: "catbomber-network-analysis",
    title: "Catbomber Network Analysis",
    oneLiner: "Network analysis guide detailing detection and removal of a CATBOMBER virus.",
    category: "Test",
    tags: ["Incident Response", "Packet Analysis", "Malware Analysis"],
    status: "Archived",
    featured: false,
    content: `
## What Data is Captured in a PCAP FIle
- PCAPS (or packet captures) are files that hold network traffic information. 
These files can be used to:
    - Troubleshoot network issues
    - Monitor network usage
    - Map logical network topologies
- Some common tools for capturing packets are:
    - Wireshark
    - TCPdump

## Methadology and Theory
- The CATBOMBER PCAP is almost certainly taken from the domain controller
    - A domain controller is basically a server that manages security, authorization, and authentication.


## First Steps
The first thing I want to do is filter by \`\`\`http.requests\`\`\` (messages sent by our client to a server)

<img src="/images/CATBOMBER/catbomber-1.png" alt="catbomber-1" style="width: 100%; border-radius: 8px;" />

Interestingly, some GET requests show up, 2 of which have .PNG files in the info section
A GET request a is used to retrieve data from a server, so these are worth looking into

## Interesting Files in POST Packets
After looking at one of the packets and following the tcp/http stream we see a message saying ‘this program cannot be run in DOS mode’ as well as a MZ header on the data, pointing to these PNGs being executables

<img src="/images/CATBOMBER/catbomber-2.png" alt="catbomber-2" style="width: 100%; border-radius: 8px;" />

NOTE: the only reason we can see this information is because the data was transmitted in plaintext using HTTP instead of HTTPS

## Saving Images to Computer
Using the export function in Wireshark, we can save these files to our computer for further analysis.
 It is very important to do this in a deliberate way, if these are booby trapped PNG files we don't want them to mess up our system
Having a quarantined environment (a virtual machine) and excluding Windows Defender from scanning our quarantine folder will do for this exercise

<img src="/images/CATBOMBER/catbomber-3.png" alt="catbomber-3" style="width: 100%; border-radius: 8px;" />

## Get Hashes of Suspicious Files
Next step in our analysis, we need to get the hash from the files.
Doing this is simple and just requires a \`\`\`‘get-FileHash <filename>’\`\`\` command.

<img src="/images/CATBOMBER/catbomber-4.png" alt="catbomber-4" style="width: 100%; border-radius: 8px;" />

## Trojans Discovered
After uploading the cursor.png and the imgpaper.png hashes to VirusTotal we can see that they are definitely Trojans. This step is very important because it saves us trying to dissect and reverse engineer potential malware.
This step can also help others who use VirusTotal determine if they have malware on their system

<img src="/images/CATBOMBER/catbomber-5.png" alt="catbomber-5" style="width: 100%; border-radius: 8px;" />

<img src="/images/CATBOMBER/catbomber-6.png" alt="catbomber-6" style="width: 100%; border-radius: 8px;" />

## What Machine is Infected?
At this point we can be pretty sure that these files have infected a machine on the network but which machine?
Looking again at the http GET requests for the images we see the source IP as being 10.5.28.229
 
<img src="/images/CATBOMBER/catbomber-7.png" alt="catbomber-7" style="width: 100%; border-radius: 8px;" />

Looking back at our instructions we see our LAN segment range as being a /24 network (10.5.28.0 through 10.5.28.255) so we know this is one of our endpoints

## POST Packets
To figure out more we have to inspect POST data. POST is used to send data to a server (The opposite of GET basically) and login credentials or form submissions often use it. 
After looking around at all the different POST packets in the http.requests filter it appears that there is a particularly large one coming from 10.5.28.229

<img src="/images/CATBOMBER/catbomber-8.png" alt="catbomber-8" style="width: 100%; border-radius: 8px;" />

## Windows Client
After again following TCP/HTTP we discover the host name and user account of an infected Windows Client.
Username: phillip.ghent
Host Name: Cat-bomb-W7-PC

<img src="/images/CATBOMBER/catbomber-9.png" alt="catbomber-9" style="width: 100%; border-radius: 8px;" />

<img src="/images/CATBOMBER/catbomber-10.png" alt="catbomber-10" style="width: 100%; border-radius: 8px;" />

## Domain Controller
Conveniently for us the domain controller is specified in the instructions as being 10.5.28.8 so we know what IP to look for
So, to find its post we can go back to ‘http.requests’ as our filter or we can get a little fancier and use ‘http.request.method == "POST" and ip.addr == 10.5.28.8’ to get a little more specific. 

<img src="/images/CATBOMBER/catbomber-11.png" alt="catbomber-11" style="width: 100%; border-radius: 8px;" />

## Domain Controller Information
Generally getting more specific is probably better because in a real world scenario there would likely be a lot more white noise then what is in this PCAP
The other user account name and host name are:
Account Name: Administrator
Host Name: Catbomber-DC

<img src="/images/CATBOMBER/catbomber-12.png" alt="catbomber-12" style="width: 100%; border-radius: 8px;" />

## Finding the Infected User's Email Password
There are a couple of ways to do this, the way I used was to use the ‘http.request’ filter while showing full request URL in my columns. I then looked at the URLs until I saw /81 suffix
The /81 suffix seems to be an attempt to obfuscate the request URL to prevent it from being detected by security tools

<img src="/images/CATBOMBER/catbomber-13.png" alt="catbomber-13" style="width: 100%; border-radius: 8px;" />

## Post Analysis Conclusion
From my analysis, this is what we can gather happened:
An employee (Phillip) downloaded and presumably launched 2 booby trapped .PNG files that infected his workstation (from 162.216.0.163)
The trojans in those files then started exfiltrating information from phillips workstation (namely his email and password to 36.89.106.69)
The POST traffic indicates that the attackers also had/have access to the domain controller (based on the ipconfig /all commands that were exfiltrated from both devices and sent to 203.176.135.102)

## Incident Response Plan
These are some proposed incident response actions based on this event:
Both the domain controller and the infected workstation need to be fully reset.
The firewall needs to be configured to block all traffic to what is possibly the attackers exfiltration server (203.176.135.102).
The IP address where Phillip’s email password was sent needs to be blocked and investigated (36.89.106.69)
The server where Phillip got the images from (162.216.0.163) needs to be investigated and potentially blocked depending on what exactly it is.
Phillip's email and password need to be reset immediately.
Phillip's needs to be interviewed to understand more about the human side of this event.

## Why is PAcket Analysis Important?
Packet analysis is an important tool for network analysts, security analysts and incident responders among more
As displayed in this scenario it can be invaluable for detecting malware in a business/company setting
 Packet analysis is also important for troubleshooting network issues that aren't related to malware (ie performance)

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