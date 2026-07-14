export default {
        id: "vuln-scanning-and-firewall-config",
        slug: "vuln-scanning-and-firewall-config",
        title: "Vuln Scanning and Firewall Config",
        oneLiner: "Network analysis guide detailing detection and removal of a CATBOMBER virus.",
        category: "Test",
        tags: ["Vulnerability Scanning", "Firewall"],
        status: "Archived",
        featured: false,
        content: `
## Quick Overview of Network Attacks
Network attacks are a broad category of cybersecurity attacks with many sub categories
As the name suggests these attacks are carried out over the network and normally targeting information or seek to disrupt operations
Some examples of these attacks are:
Malware
Phishing
MITM Attacks
Denial of service attacks
Ransomware

## Importance of Vulnerability Scanning (Blue Team)
If we take a look at the MITRE ATT&CK framework we can see that the first step is reconnaissance
Within reconnaissance is ‘gathering victim host information’ and ‘active scanning’
Both of these activities and their placement in the ATT&CK Framework illustrate how vulnerability scanning our own servers is important

<img src="/images/vuln-scan/vuln-1.png" alt="vuln-1" style="width: 100%; border-radius: 8px;" />
(Credit to MITRE for the photo)

## Importance of Vulnerability Scanning (Part 2)
If we are hosting a service with any kind of public facing frontend it is crucial that we maintain a high level of security to protect our infrastructure as much as customer or user data
Vulnerability scanning allows us to basically scan our servers or networks and ensure that all of the software running is up to date and has no known security issues
An incredibly recent instance of a supposed lack vulnerability scanning biting someone in the butt is the 4chan hack that happened yesterday
The website 4chan was breached and taken down due to php vulnerabilities that would have been seen if proper vulnerability scanning was taking place

## OpenVAS/Greenbone Setup
We will begin by quickly setting up and logging into our OpenVAS VM that we installed
We will connect to this from the IP address in the shell and ensure that we can scan what we need to (IE we will define a server (Our Windows Server) by IP and do a preliminary scan (With our “Allow All” rule in place on the PFSense Firewall)
This is basically DMZ mode which is generally never recommended for any network outside of a testing environment

<img src="/images/vuln-scan/vuln-2.png" alt="vuln-2" style="width: 100%; border-radius: 8px;" />

## Our Windows Server is not very safe...
Yikes it looks like our server is very vulnerable according to our first scan
These charts don't mean as much because we only have 1 host and have only done one scan but we can look further into it by accessing the scans report 

<img src="/images/vuln-scan/vuln-3.png" alt="vuln-3" style="width: 100%; border-radius: 8px;" />

## Looking at our Scan Report
After Analyzing the scan report we can see that OpenVas has ranked the vulnerabilities based on their threat level which is very helpful
Now that we have taken a look at our current vulnerability report we will restrict our firewall by removing the allow all feature and adding some new rules

<img src="/images/vuln-scan/vuln-4.png" alt="vuln-4" style="width: 100%; border-radius: 8px;" />

## PF Sense Firewall Changes
For this test we want to set some rules to allow users outside of our private network to ping our server, access our webserver and connect to a windows file share
The hints for how to do this are in the instructions so we will allow the following ports
ICMP (For Pinging)
80 (for HTTP) 
443 (For HTTPS)
445 (For File Share)
These ports are noteworthy because we have used all of them in previous attack simulations to gain access to information that we wouldnt have otherwise

## Analyzing the open port scan
When we look at the results and the CVE reports of this scan we see more or less what we expected, a high severity score of 7.5 (The same as or scan with all open ports) and some pretty scary CVEs (Common vulnerabilities and exposures)
This is definitely not good so we will roll back these changes and block ICMP and port 445 on the WAN side again and do another scan
This is called Network hardening and it means that we are blocking ports that we don't regularly use to minimize potential attackers attack surfaces
We are also minimizing our servers exposure and making sure unwanted traffic times out

<img src="/images/vuln-scan/vuln-5.png" alt="vuln-5" style="width: 100%; border-radius: 8px;" />

<img src="/images/vuln-scan/vuln-6.png" alt="vuln-6" style="width: 100%; border-radius: 8px;" />

## Shared Drive Fail and Analysis
To ensure that we blocked these ports correctly we will attempt to connect to our shared drive and our web server over port 80
When that fails we will know for sure that we have edited the rules correctly
This time we did not get any vulnerabilities because the necessary ports were blocked

<img src="/images/vuln-scan/vuln-7.png" alt="vuln-7" style="width: 100%; border-radius: 8px;" />

<img src="/images/vuln-scan/vuln-8.png" alt="vuln-8" style="width: 100%; border-radius: 8px;" />

## Switching Gears....
Thus Far we have been approaching firewall configuration from the perspective of keeping the bad guys out, but what about keeping employees on task or protecting them from malicious sites?
For this step we will pretend  that girlsgeekout.org is a site that is known to have security flaws and hosts malware
We don't want our employees to visit that site so we will put up a rule to prevent it
For this will we select TCP for our protocol and block the website “girlsgeekout” by its IP address (Obtained via NSlookup) 

## More Filtering
Let's say that our employees are watching too much youtube during the day and we want to stop them from goofing off
This is not as easy as blocking girlsgeekout because youtube has a lot of ip addresses that our computers DNS server routes through to maintain distributed traffic for QoS purposes

<img src="/images/vuln-scan/vuln-9.png" alt="vuln-9" style="width: 100%; border-radius: 8px;" />

## Youtube is Blocked!
Luckily PFsense can block entire domains like youtube
By navigating to DNS settings in PFsense we can make a rule to prevent us from accessing any of youtube's many ip addresses

<img src="/images/vuln-scan/vuln-10.png" alt="vuln-10" style="width: 100%; border-radius: 8px;" />

## Allowing Youtube Again
To prove that this worked we will Allow youtube again by removing or pausing the firewall rule and just like that we can watch videos again
NOTE: Some browsers cache websites you have visited recently so to ensure that this works it is important to clear your browser cache when checking if something has been successfully blocked or not

<img src="/images/vuln-scan/vuln-11.png" alt="vuln-11" style="width: 100%; border-radius: 8px;" />

## Conclusion
Throughout this assignment we have practiced firewall configuration, some network hardening techniques, and minimizing exposure
This was good practice but it is important to understand a few ways that this process may change or improve in the real world
Another way we could improve our scanning hygiene is by automating scans (daily or weekly) and sending the output to someones email for more often checkups and audits
We could also increase our threat intelligence and hook up a database filled with our own known vulnerabilities by having a team scour breach forums and the likes to make sure that no new vulnerabilities that are posted there can endanger us
Finally we could analyze our firewall periodically and make sure that our website blocking stays up to date with current threats and employee distractions

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