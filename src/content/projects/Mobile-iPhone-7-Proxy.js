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

One lesson is worth writing down now, because it had nothing to do with Burp.

## What your network path says about you

Getting this rig online without tripping platform anti-abuse taught me more about detection than the interception did. Where your traffic originates is not a neutral detail. It is a signal, and each option tells a defender a completely different story:

- **Data center ranges** read as automation. Known bulk allocations with no residential history, so most anti-abuse systems treat them as bot traffic by default.
- **A VPS** reads as threat infrastructure. A lone cloud host reaching out is exactly the shape an analyst is trained to pull the thread on.
- **Residential addresses** read as a person, which is precisely why that space is valuable and precisely why it deserves scrutiny.

That last one is the part I would not have gotten from reading about it. Residential proxy pools are frequently assembled from consumer devices whose owners never meaningfully agreed to it, sometimes through malware and sometimes through an SDK bundled into a free app. Understanding how that supply chain actually works changed how I think about the whole category, and it is part of why this project is sitting paused rather than finished.

The takeaway I keep coming back to: interception was the easy half. The operational side, and the ethics of the infrastructure you lean on to get there, is where the real education was.
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
