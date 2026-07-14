# Writeup Audit & Handoff Summary

This document serves as a complete handoff, containing the original audit of the writeups, your directions on how to fix them, your answers regarding the blog posts, and the current status of the fixes.

---

## 1. Current Status of Fixes

The previous AI attempted to run two parallel background tasks to fix everything:

*   ✅ **Blog Post Rewriter (Completed):** Successfully rewrote the 5 blog posts in `src/content/blog/index.js` to match your authentic voice, removing corporate jargon and adding your specific context. It also uncommented the "Intercom Evil Portal" post and set it to "Writeup coming soon".
*   ❌ **Project File Fixer (Failed):** Was assigned to fix all typos, copy-pasted structured fields, standardize `##` markdown headers, and remove placeholder links across ~14 project files. This task **crashed due to an API rate limit** before it could complete. These files still need to be fixed.
*   ⏳ **User Task:** You are handling the `Mobile-iPhone-7-Proxy.js` content rewrite yourself.

---

## 2. Your Directions & Answers

### General Directions
*   **Structured Fields:** Fix all the structured fields based on the content, remove the link fields for now. (You will fix mobile proxy).
*   **Header Formatting:** Standardize to `##` formatting across the headers for all writeups.
*   **Typos:** Just fix all the typos.
*   **Tone:** The website is an extension of your resume, but tune up the resume-sounding stuff so it's not soulless. No em dashes (—) and no cliché crap on the front page. Write more posts in your authentic voice (like the Flipper Zero post).
*   **Incomplete content (pwnagotchi cuts off, intrusion detection):** Don't remove, leave as is but include in the writeup.
*   **Commented-out posts (Intercom Evil Portal, Black Beacon C2):** Archive them with a "Writeup coming soon" note since they are defunct.
*   **Placeholder links:** Remove them ("the links one is dumb").

### Blog Post Context (Your Answers)
*   **Daily Quote Program:** "It was actually not super cool, just my first interaction with structured JSOn and using API calls to grab quotes to serve via my Macs notifcation bar. It was a few years ago (Like 2023 or so) and again was a good exerccise to learn python and dip my toes into API. Should not be marketetd as something actually cool though."
*   **OverTheWire Wargames:** "on my own, i did this to tune up my linux command skiulls, i beat bandit (again a few years ago) and went on to beat leviathan too. They were good introductory level skill honing projects, definintly nothing insane but bandit helped me hamer down common linux commands and leviathan helped me examine small bytes of code and identify vulberabilities in it. Bandit hadf some cool least priv things and leviathan had some neat buffer overflow and race condition stuff."
*   **Pwnagotchi:** "blog post should actually just point towards the content I think, and the software setup was pretty siumple, just make sure to include that in my case I had to change the waveshare 3 to 4 because my 3 came dead in the config file and for the AI/ML to actually work you have to enable some things, also shout out jayofelony's fork because it is WAY better maintained than the official slop."
*   **Quiz Data Parser:** "It was for studying for finals in my sophmore year of school. I was about to be on winter break and wanted to batch proccess a bunch of practice tests into one big quizlet for studying. AI is not the most efficient tool for that so I chose to do some object orineted python work to make a parse that took raw html and parsed based on the formatting rules on my school website and canvas and made them into a format that quizlet could understand. It was tricky because parsing from multipe formats could be annoying but I was able to get around it by being clever with my rules. I lost the code for now but will find it very soon. When i find it AI will again help me to tune up the aprsing to even more formats."
*   **Virus FTP Keylogger:** "This was an early project on some sample python keylogger code I grabbed from a teacher, i modified it to point at a filezilla server. This was honestly really rudimentary and doesnt really show anything i think would help me in the job industry. This might be a better blog post or more of a (writeup coming soon) kind of thing."

---

## 3. Original Writeup Audit

### 🚨 Critical: Copy-Paste Catastrophe
Five project files have their structured fields (overview, goal, features, techStack) **copy-pasted from `ai-log-analyzer.js`** - they all incorrectly say "SOC alert fatigue using ML and LLMs" regardless of the actual project topic:

| File | Actual Topic | What it currently says |
|---|---|---|
| `spike-rogueap-mana.js` | ESP32 rogue AP / porcupine statue | "SOC alert fatigue using ML and LLMs" |
| `Mobile-iPhone-7-Proxy.js` | iPhone Burp Suite mobile pentesting | **Entire `content` field** is the ESP32 porcupine text + wrong structured fields |
| `Thermal-Printer-Exploit.js` | ZebraSploit BLE printer exploit | Wrong structured fields + placeholder links |
| `Nethunter-Pro.js` | Kali Nethunter on OnePlus 6T | Wrong structured fields + placeholder links |
| `RFID-Analysis.js` | RFID cloning with Google Colab | Wrong structured fields + empty Results/Lessons/Links |

### Typos Across Files

| File | Typo | Fix |
|---|---|---|
| `ransomware.js` | "Ransomeware" (×3, title + oneLiner + heading) | Ransomware |
| `ransomware.js` | "Methadology", "Encyrpting", "seperate", "checker her" | Methodology, Encrypting, separate, check her |
| `vulnscan.js` | "CHanges", "A incredibly", "our is very vulnerable", "dont", "out employees" | Changes, An incredibly, our server is..., don't, our employees |
| `catbomber.js` | "FIle", "Methadology", "PAcket", "Phillip's needs" | File, Methodology, Packet, Phillip needs |
| `intrusionprevention.js` | "WHy", "Preventiomn", "CIsco", "Checkpoint Quantem/quantem" | Why, Prevention, Cisco, Quantum |
| `Nethunter-Pro.js` | slug "nethnter-pro", "evalutating" | nethunter-pro, evaluating |
| `RFID-Analysis.js` | "Google Collab" (×3), "Phsyical Security" | Google Colab, Physical Security |
| `Mobile-iPhone-7-Proxy.js` | "a Iphone", "burpe suite" | an iPhone, Burp Suite |
| `ml-data-analysis.js` | "based off of", "insightful insights", repo: "YOUR_GITHUB_LINK_HERE" | based on, (remove redundancy), (remove placeholder) |

### AI-Sounding Blog Posts
*These have already been rewritten by the successful background task, but here is the original audit for context.*

| Post | Worst offenders |
|---|---|
| "Practice Makes Progress" | "honing my skills and pushing myself to work thoughtfully", "the real achievement was honing my skills" |
| "Diving into CLI" | "reinforced my commitment to learning beyond the classroom", "stepping outside my comfort zone to grow" |
| "Building a Pwnagotchi" | "Key Skills Acquired:", "the importance of adaptability and persistence" - reads like a skills matrix |
| "Creating a Quiz Parser" | "ultimately saving hours of manual data entry", "actionable pieces" - corporate jargon |
| "Virus FTP Keylogger" | Very brief, one cliché paragraph |
| **Authentic Posts** | Flipper Zero, Real-world lockpicking, Media server pentest (These sound like you) |

### Incomplete / Broken Content

| File | Issue |
|---|---|
| `pwnagotchi.js` | Content **cuts off mid-guide** at Step 2 of Software Setup |
| `intrusionprevention.js` | **Ends abruptly** after mentioning SQL injection - no conclusion |
| `RFID-Analysis.js` | Results, Lessons, and Links sections are **completely empty** |
| Blog: Intercom Evil Portal | **Entire post commented out** - tags/related project don't match content |
| Project: `black-beacon-c2.js` | **Entire export commented out** |
