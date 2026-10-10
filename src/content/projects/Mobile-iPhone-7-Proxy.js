export default {
    id: "mobile-iphone-7-proxy",
    slug: "mobile-proxy",
    title: "Mobile Interception Rig on a Jailbroken iPhone 7",
    oneLiner: "A jailbroken iPhone 7 routing all traffic through Burp. The rig is built, the writeup is waiting on authorized targets.",
    category: "Web Security",
    tags: ["Mobile Security", "Burp Suite", "Certificate Pinning", "iOS", "API"],
    status: "Active",
    featured: false,
    tier: "build",
    image: "/images/mobile-iphone7-proxy/IMG_0220.jpg",
    imageAlt: "Jailbroken iPhone 7 wired up for traffic interception",
    content: `
## Writeup coming soon

I built a mobile interception rig on a jailbroken iPhone 7. The phone routes all of its traffic through Burp on a laptop, so I can watch what apps actually say to their backends. checkm8 made the old hardware a good pick, since it is a bootrom exploit and does not care which iOS version is on the device.

The rig works. The writeup is on hold because the hard part turned out not to be technical. Finding apps with real disclosure programs is harder than building the thing, and I am not pointing this at anything out of scope just because I can. Once I have targets inside a bug bounty or a published security.txt, the full piece goes up with actual findings in it.


## Issues...

Getting this rig online without tripping certain platform anti-abuse systems taught me a lot about the systems put in place to defend against the type of testing I was doing.

Believe it or not, Apple doesn't love the idea of people jailbreaking their iPhones and routing through Burp Suite to intercept traffic. Some of the ways they prevent this kind of behavior is implicitly distrusting data center/VPN IPs (understandable), enforcing pretty harsh geofencing measures, and requiring very frequent MFA reverification to prevent someone from buying a 15-cent temp number and using it for verification. Of course there are ways around this (Residential Proxies, Pay-Go SIMs, longer number leases etc) but at some point I had to question why I was doing all of that. My plan wasn't to hack a bunch of old apps on the store and get in trouble, I really just wanted to explore using mobile devices as a proxy and look at how mobile app APIs are designed and learn more about cert pinning and dumping/reversing binaries. 

## Circling Back Around

Because of these issues I figured my time would be better spent grabbing an app, sideloading it on my jailbroken iPhone, and analyzing it from there. Sure I lose some of the cert pinning and routing intricacies but it would give me a better project and prep me to eventually try my hand at some mobile bug bounties. That's where this sits right now, I still learned a lot and it was fun to read up on the checkm8 exploit but the real meat of this project is yet to come.

    `,
    overview: "A mobile traffic interception setup using a checkm8-jailbroken iPhone 7 proxied through Burp Suite.",
    goal: "Build a real-device mobile testing rig for authorized app security testing, rather than relying on an emulator.",
    features: [
        "checkm8 bootrom jailbreak, independent of iOS version",
        "Full device traffic proxied through Burp Suite",
        "Certificate pinning bypass tooling"
    ],
    techStack: ["Burp Suite", "checkra1n", "iOS", "SSL Kill Switch 2"],
    results: "Rig is functional. Paused pending targets with published disclosure programs.",
    lessons: "The interception was straightforward. The operational side, including how traffic origin reads to a defender and how residential proxy supply chains actually work, was the real lesson."
};
