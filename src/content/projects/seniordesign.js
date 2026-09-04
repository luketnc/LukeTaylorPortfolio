export default {
    id: "senior-design-project",
    slug: "senior-design-project",
    title: "Phishing detection and prevention for small businesses",
    oneLiner: "Phishing detection and prevention for small businesses",
    category: "Security Engineering",
    tags: ["Security Engineering", "Phishing Detection", "Phishing Prevention", "Machine Learning"],
    status: "Completed",
    featured: true,
    tier: "real-world",
    deepDive: true,
    size: "feature",
    image: "/images/seniordesign/Systemsdiagram.png",
    imageAlt: "Phishing detection and prevention for small businesses",
    content: `

My senior design project was probably the class I was most excited for. A lot of my time in school was spent learning theory and doing projects that were a good intro to defensive and offensive security, but it was rare that I got to go out on my own and design AND implement my own system. Starting this class felt like a way to step up and build something that would actually be useful in a business setting, justify the business case for it, and then go implement it.

In a lot of ways I think this project is a culmination of my facets as a business conscious IC, a researcher, and a developer. This was my chance to make something that was an example of the business driving the tech and not the other way around.

## The Core Business Problem

Part of this project was picking a company. I chose a biomedical pharmaceutical company that specialized in vaccine and drug development. They were growing quick, had a lot of proprietary data and information, and based on my poking around on LinkedIn, had a lot of employees who were likely not that tech savvy.

A company like this faces a lot of unique security challenges. Just one major data breach could completely put a smallish biomedical company out of business. From my threat landscape knowledge I knew that the overwhelming majority of breaches come back to phishing, Cofense has put the share that involve it as high as 93%. A very common form of phishing is business email compromise (BEC) or vendor email compromise (VEC). Stock email providers like Google are good at filtering out cold call, kingphisher style campaigns using crap domains and weird senders, but they are much less effective against targeted attacks where the attacker has compromised a trusted address and used spearphishing or whaling tactics. That issue is what my proposed system would address.

## The Proposed System

After identifying a problem the company would face, I had to think about some ways my solution would solve it from a business perspective. It isn't every employee's job to be super tuned to phishing and attempted compromise, so training, while necessary, wouldn't really address the problem at its core. This led me to thinking more about technical solutions. There were a lot of open questions, what email provider did the company use? do they self host? what is the volume of email they get? Not all of these questions would be answerable since this project was using a real company more as a table top exercise. Ultimately I didn't feel like that mattered all that much though, because I wanted my system to be scalable, and if I made it to specifically interface with one email provider and the company decided to switch providers later I would make a ton of potential tech debt which would cost a lot in time and money.

My answer to making the system less brittle was to make a vendor agnostic system that had built in access control so a SOC could review potential phishing emails, and have the scanning logic operate through both raw SMTP and parsed text.

In short I wanted to make a phishing detection and prevention system that would sit in the cloud and protect the company from initial access attempts, but be flexible enough to deploy across multiple environments.

## How It Works

After conceptualizing the best way to approach this problem, I started thinking about how EXACTLY I wanted my system to function. This meant some SDLC and planning work which included making a bunch of DFDs. This blog post isn't meant to mirror the 64 page writeup I submitted to the professor, so I'll spare you all my diagrams, but I'll show the system diagram below with links to the rest of the diagrams here. Excuse the deviation from crows foot.

![System Diagram](/images/seniordesign/Systemsdiagram.png)

As you can see in the diagram we have email coming in from the internet, it reaches our SMTP server, where the REST API agent puts the email content into the database marked unclean. The scanner polls the REST API agent looking for unclean emails, which then get scanned using a collection of API tools (VirusTotal, Scamalytics, RDAP). The emails are scored and put back in the database based on the scanner's scoring system (weight tuning will be explained later). If the email is above a certain score it gets flagged and put into a queue for a SOC analyst to review and either deliver or block. If it passes, the REST agent sends it on to its intended user.

The design decision I am happiest with is that no service ever talks to another one directly, everything goes through the central API and its data contract. That sounds like a small thing but it is what let me build, restart, and debug each piece on its own without touching the rest of the pipeline, and honestly it's a big reason one person could cover this much ground. Two smaller things fall out of that same idea. Every OSINT lookup gets cached in the database keyed on the actual indicator, an IP, a domain, or a URL, instead of the email, so a hundred phishing emails from one campaign only cost one lookup between them and I stay under the free tier limits. And when a live vendor isn't available the same code path falls back to deterministic fixture data, tagged so it can never pretend to be a real result, which keeps demos totally reproducible while new input still hits the real APIs.

I built the whole thing in phases which kept it sane. Phase one was just a local proof of the API contracts using Postman's hosting, no docker yet, just making sure the calls I wanted were solid. Phase two was containerizing and breaking that proof into the separate services orchestrated by docker compose, and moving the datastore off SQLite onto PostgreSQL for real concurrency and durability. Phase three brought in the live OSINT integrations, the caching and rate limiting, and the analyst dashboard. Phase four was cloud deployment and hardening.

To make a system like this work in a business environment I decided docker was the right way to go. It would let the company deploy it however they pleased, and let anyone spin up their own local environment to test with. This ended up being a solo build in practice (LOL) so I never had to worry about compatibility or teaching anyone to use WSL, I just kept moving.

## The AI Intent Analsyis Layer

Reputation services like VirusTotal and Scamalytics are great at known malicious links and IPs, but they have a blind spot. A business email compromise or a wire fraud request usually has no link and no attachment at all, it's just a believable message from a believable looking address, and it passes every signature based check clean. To close that gap I added a language model layer on top using Google Gemini that reads each message and hands back a structured verdict, whether it thinks the email is phishing, a confidence score, the social engineering tactics it noticed like financial urgency or authority impersonation, and a quick reason why. The scoring engine treats that as one more weighted signal, and when the model catches something VirusTotal called clean the dashboard tags it as caught by AI intent analysis.

Being fully honest about where it sits, the layer is built and it works, but the live model calls need a Google account with API quota and the accounts I had came back with zero quota under Google's current billing. So right now it runs on its deterministic fallback and the live path is basically one billing step away with no code changes. Even on the fallback it did exactly what I built it for, catching linkless BEC emails that the signature based tools waved through, which was the whole point of adding it.

## The Stack

Here is the final tech stack I ended up using.

- Postman. I mapped all my data contracts here first so I could work on multiple parts of the system at once and define a source of truth for what I expected the program to do. This also let me lean on Claude to cover a ton of the build, hand it the contract and it could write most of a component's code. More on Claude later.
- REST API. Absolutely LOVE REST, it's such a breeze to use and it's stupid reliable. TONS of docs on it too so AI workflows become a force multiplier quick.
- Docker.
- PostgreSQL, with native JSON columns for the nested threat data.
- Flask and Gunicorn for the API.
- Claude Opus 4.8, the coding engine behind the project.
- smtplib.
- Google Antigravity IDE.
- Google Cloud Platform, I used Compute Engine to host my VM.
- Google SSO. I wanted my system actually deployed in the cloud facing the public internet for my professor to access, I didn't want to make just some crapware senior design project that talks a big talk and doesn't back it up.
- VirusTotal, Scamalytics, and RDAP, my threat intelligence sources.

Because this was going to sit on the public internet, I treated hardening as part of the build instead of an afterthought. Caddy sits in front of the whole stack and handles HTTPS with an auto renewing Let's Encrypt cert. oauth2-proxy gates the entire dashboard behind Google SSO before a request ever hits the app, scoped to my school's email domain plus a small allowlist so I wasn't handing my VM resources to the whole internet. Every internal service port is closed off to the outside as defense in depth alongside the cloud firewall.

The full request path in the deployed system goes browser to Caddy for HTTPS, then oauth2-proxy for the Google SSO check, then Nginx serving the frontend and reverse proxying the API, then Flask, then into Postgres. Nginx making the browser and the API look like one origin, and every user supplied value going into the database as a parameterized query instead of getting concatenated into the SQL, is my main defense against injection. One honest caveat is the API doesn't do any auth of its own, it trusts the proxy gate in front of it, so if it were ever reachable directly it would be exposed. Network isolation and the firewall cover that for now, and native API auth is the next thing I would add.

Then I went after it myself. I fuzzed the API with GoBuster, intercepted and messed with requests in Burp Suite, and probed for SQL injection with sqlmap. The parameterized queries held against the injection attempts and the SSO gate held against unauthenticated access, which was exactly what I wanted to confirm. I'd rather find out my defensive decisions actually hold up than just assume they do.

## The Results

I am incredibly proud to say this project was a massive success. I was able to get it deployed on Compute Engine, and I even snagged phishsorter.com for a year to host it on. Google SSO worked amazingly and I was able to give access to everyone at my school by whitelisting the @appstate.edu address to protect my VM resources as much as possible. Even though this wasn't a commercially deployed system I still wanted the AAA and CIA triads to be at play and Google SSO fit both of those frameworks well. The free APIs I used were also surprisingly robust, and I was able to hit them hard without running into any issues (of course this would be an issue in a production environment and I would have to work on a plan for that).

![SSO](/images/seniordesign/googlessobetter.png)

My system did really well detecting threats that were attempting to compromise it, and it also did a good job of identifying safe emails to pass through. I did have to do a decent amount of tuning though, because at first I wasn't weighting individual VirusTotal engines enough so emails that were clearly phishing but just not flagged by enough engines were sneaking through. I ended up putting the quarantine line at 60 out of 100 and giving each malicious VirusTotal engine 20 points capped at 60, so three engines calling a link malicious is enough to quarantine on its own with no help from the IP or domain. I also weighted a Tor sender way above a regular proxy, since no real corporate correspondent is relaying mail through a Tor exit node. It's a delicate balance though, because if you make the engine too aggressive you risk hitting people with false positives which is the last thing we want to do.

To actually test it I built a scripted campaign of 7 emails, 4 phishing and 3 safe, and made each phish lean on a different signal. One rode a known malicious link, one came from a Tor exit node, one used a domain registered days earlier, one was a homoglyph typosquat, one hid behind a URL shortener, and one was a linkless wire fraud BEC that gave a URL scanner nothing to catch and had to get flagged on sender IP, domain age, and language alone. I also slipped a legit DocuSign notice in right next to a DocuSign phish, because clearing the real one cleanly matters just as much as catching the fake.

![Dashboard](/images/seniordesign/PanelLandingPage.png)

Because I was deploying live on Compute Engine I temporarily neutered the SMTP part of the system because I wanted my attack surface to be as low as possible. In my deliverable I emphasized the try it yourself part of my project and invited visitors to test their own phishing emails. I was going to make it a little game to see if users could sneak their own attack infrastructure past my system, but I ultimately decided that was way too much scope creep and I would sit on that idea for later.

![Send mail page](/images/seniordesign/TestemailResults.png)

## Where AI Fit In

Claude was a hUGE help in this process. I had 6 weeks and 4 of those were for planning so I really only had 2 weeks to get this system live and working, and Claude helped me complete it as an IC which was so cool to me. I was very careful to make sure my data contracts and context were up to speed so Claude didn't run wild and suggest implementations that deviated from my business goals. I made the architecture calls, tuned the scoring, and checked its work instead of just trusting it.

Leaning on a model didn't take away the need to actually understand the system or write code either, and plenty of the real work was stuff a model couldn't do for me. DNS propagation, firewall rules, the OAuth config, SSH deployment keys, and API billing were all things I had to grind through myself. If anything the skill this project really built was learning to drive an AI toolchain kind of like running a small team. Overall this was one of my favorite projects and I am really happy with how it came out!
    `,
    aiEnhancements: "I want to be upfront: this project leaned on AI heavily, and that is part of the point. Claude played a major role in teaching me what to look for. It helped me recognize that the CRC32 and PE-parsing capabilities together pointed at hash-based import resolution, explained the ring model and why LdrLoadDll was the right chokepoint to break on, and helped me interpret a lot of what the tools were surfacing. What I brought was the safe setup and detonation, running the tools, deciding what to chase, and verifying claims instead of taking the model's word for it. I came out of this knowing more reverse engineering than I went in with, and being honest about how is more useful than pretending I did it unaided.",
    overview: "A static and dynamic reverse engineering teardown of an in-the-wild external CS2 cheat, motivated by wanting to work in anticheat.",
    goal: "Understand how a modern external cheat is built and what it touches, prove whether the sample was also malware, and work out how I would detect it.",
    results: "Identified a ring-3 external ESP and aimbot with no observed network payload (about 90% confidence), and defined a CRC32 hash-extraction method to close the remaining gap.",
    lessons: "Hash-based import resolution can hide a program's real capabilities from static analysis, so you pick a chokepoint (LdrLoadDll) that the technique cannot avoid. Anti-analysis behavior is itself a detection signal."
};
