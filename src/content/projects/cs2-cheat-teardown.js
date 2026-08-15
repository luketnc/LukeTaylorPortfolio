export default {
    id: "cs2-cheat-teardown",
    slug: "cs2-cheat-teardown",
    title: "Taking Apart a CS2 Cheat and Learning How to Catch One",
    oneLiner: "A full static and dynamic reverse engineering pass on an in the wild CS2 cheat, complete with safe detonation and some theory on how to catch it",
    category: "Reverse Engineering",
    tags: ["Reverse Engineering", "Malware Analysis", "Anti-Cheat", "Ghidra", "Counter-Strike", "AI Enhanced"],
    status: "Completed",
    featured: true,
    tier: "real-world",
    deepDive: true,
    image: "/images/takingapaaartcs2cheat/capa.png",
    imageAlt: "capa output showing the cheat's capabilities, including CRC32 hashing and keylogging, mapped to ATT&CK and MBC",
    content: `

I love counter-strike. It's fast paced, compettive, and easy to learn but hard to master. Those are some of my favorite qualities in videogames, and it has kept me playing it for years. What I dont like is the rampant cheating issue that has plagued CS pretty much since its inception. This has led me to an interest in how anticheat systems detect and prevent cheaters from ruining competitive games.

## Why I chose to analyze this cheat in particular

If you want to build anticheat, you need a working mental model of the thing you're defending against. Cheats aren't monolithic, they live at different privilege levels and use fundamentally different techniques. External programs read and write another process's memory from user space. Injected cheats run code inside the game itself. Some ship their own signed kernel drivers (BYOD, or "bring your own driver") to operate below the anticheat. There are even crazier cheats that use hardware features like DMA to read and write memory from outside the computer entirely. I figure whenn you're staring at a SIEM panel full of flagged-player telemetry, knowing which of those categories a signal points is important.

I picked this particular EZfrags revival deliberately. It's free, which makes it easy to obtain and analyze, and it advertises itself as a CS2 build while openly disclaiming any connection to the original CSGO cheat. I think its worth noting that the CS:GO version of this cheat is infamous and I remember running into rage hackers claiming to have been using it back in the day. A free cheat from a sketchy source is really is dicey though, as there are plenty of trojaned builds out there that are happy to steal your banking details or crypto keys.
<img src="/images/takingapaaartcs2cheat/ezfragssite.png" alt="The ezfrags revival download site advertising a supposedly undetected CS2 build" style="width: 100%; border-radius: 8px;" />

## Detonating safely

The binary came from ezfrags[.]online, a domain registered in late 2024 behind a Namecheap privacy service, so no useful OSINT there. My working assumption was that this was, at worst, a low effort trojaned fork rather than a targeted threat, so I calibrated my environment accordingly, a fresh Windows ISO in VirtualBox with Defender disabled via group policy (so it wouldn't quarantine my sample mid-analysis), the FLARE reverse engineering toolkit installed, and then the machine sealed off, with host-only networking disabled, clipboard sharing off, and snapshots taken before and after each stage.

The threat model in my head was simple, I wasn't willing to gamble my credentials, password chains, or crypto on a cheat forum download, but I also wasn't treating it like a nation state implant. For a run like this, an isolated, snapshotted VM with no network and no clipboard bridge felt like a reasonable floor. If I were doing this again, or handling something I genuinely didn't trust, I'd load up Qubes and its hardware level compartmentalization rather than lean on a single hypervisor boundary. I think a good rule of thumb is to assume the sandbox can be escaped and design so that escape still gives the attacker nothing worth having.

## What it actually is

Static triage told me a lot more than I initially expected. CFF Explorer showed a native x64 C++ binary, compiled with Visual Studio 2022 just two days before I grabbed it, entry point landing cleanly in .text, and virtual size matching raw size, none of the hallmarks of a packer. Detect It Easy (DIE) and a clean FLOSS string dump agreed that the binary was unpacked, with a leftover PDB path (\`D:\\Sources\\EzFrags\\CS2_External-master\\x64\\Release\\Ezfrags.pdb\`) that all but confirms it was built from a public "CS2 External" ESP framework. I tried to find this exact repo on google but couldn't quite match it. I think a fork with some custom code is likely the case.

<img src="/images/takingapaaartcs2cheat/machinetype64.png" alt="CFF Explorer confirming a native x64 binary compiled with Visual Studio 2022" style="width: 100%; border-radius: 8px;" />

The imports drew the shape of the thing. Fifty one from kernel32, forty one from user32, one from shell32, and among them \`OpenProcess\`, \`ReadProcessMemory\`, and \`WriteProcessMemory\`, with no \`VirtualAllocEx\`. After looking into the function of each import, it became clear that this was an external cheat. From my research I concluded it runs as its own process, uses Toolhelp32 to find cs2.exe, locates the module base, and reads and writes game memory from the outside rather than injecting code into the game. In ring terms (ring 0 is the kernel, rings 1 and 2 the historical driver space, ring 3 user applications) this thing lives entirely in ring 3. capa (my new favorite tool) filled in the rest: an ImGui/DX11 overlay drawing ESP, keystroke logging for hotkey toggles, clipboard use for sharing configs, application and process discovery (I'd already seen cs2 in the strings), and, notably, zero network socket capabilities which was a big suprise to me.

<img src="/images/takingapaaartcs2cheat/imports.png" alt="Import table showing OpenProcess, ReadProcessMemory, and WriteProcessMemory with no VirtualAllocEx" style="width: 100%; border-radius: 8px;" />

## The most interesting find

The part I'm proudest of started as a hunch about the imports and turned into the technical centerpiece of the whole project.

capa flagged four capabilities that, taken together, meant more than the sum of their parts. These were hashing data with CRC32, resolving functions by parsing PE exports, enumerating PE sections, and parsing PE headers. That combination is apparently a well known technique used by both cheats and malware, instead of importing functions by name (which would show up in the import table and in a string dump), the program keeps a table of CRC32 hashes of the API names it wants, then at runtime walks a DLL's export table, hashes each export, and matches against its table. The function gets called with its name appearing nowhere in the binary. 

<img src="/images/takingapaaartcs2cheat/capa.png" alt="capa flagging CRC32 hashing alongside PE export and section parsing, the fingerprint of hash-based import resolution" style="width: 100%; border-radius: 8px;" />

The reason this mattered for my investigation is that static analysis alone could no longer prove the cheat doesn't touch the network. The imports I could read were only the honest ones that the developer chose not to hide. If networking APIs were being resolved by hash, they'd be invisible to CFF Explorer and FLOSS both. This was the gap I had to close before I could say anything confident about whether the sample was ratted or not.

## The stealth tells

I did some research and asked Claude a few things and learned two more important findings. \`SetWindowDisplayAffinity\` is used to hide the ESP overlay from screen capture, a feature meant to keep the cheat off a stream or a recording which is interesting. \`IsDebuggerPresent\` was a straightforward anti debug check, presumably to slow down people doing exactly what I was doing. It didnt because the plugin ScyllaHide handled it, and I was past this in minutes.

On the detection side of things, these anti analysis features make the cheat more detectable, not less. A legitimate game adjacent process has no reason to hide its window from capture or probe for a debugger. The presence of those specific behaviors is itself a high quality signal. I feel that anticheat doesnt have to defeat the obfuscation, it can treat the obfuscation as the fingerprint (in this case at least).

## The dynamic run

To close the CRC32 gap I mentioned above, I moved to dynamic analysis. I set up a decoy cs2.exe (a renamed Notepad++, betting the cheat only string matches the process name, which it did), ran FakeNet-NG to capture any outbound traffic, filtered Procmon across the process tree, and set breakpoints in x64dbg at the real chokepoint: \`ntdll!LdrLoadDll\`, plus \`CreateProcessW\`, \`NtCreateUserProcess\`, and \`ShellExecuteW\` for good measure. When I got everything setup I took a pre run snapshot of my VM so I could run again if something failed.

<img src="/images/takingapaaartcs2cheat/x64dbgbreakdowndlllview.png" alt="x64dbg stopped at a breakpoint on ntdll!LdrLoadDll, watching every module load" style="width: 100%; border-radius: 8px;" />

The logic behind LdrLoadDll is the interesting bit. CRC32 hashing lets the cheat resolve a function from a DLL that's already loaded without ever calling GetProcAddress by name, but it cannot conjure a module that isn't mapped. The networking DLLs (ws2_32, wininet, winhttp, wsock32, urlmon) aren't loaded by default, so any attempt to reach the network has to pass through a DLL load first. Breaking on LdrLoadDll turns that into a single, unmissable chokepoint. Suprisingly othing network related ever loaded. FakeNet stayed silent. Procmon showed no beacon.

<img src="/images/takingapaaartcs2cheat/fakenetsimevidense.png" alt="FakeNet-NG capturing no outbound network traffic during the run" style="width: 100%; border-radius: 8px;" />

## Ghidra confirms the boring truth

With the network question mostly settled, I moved to Ghidra to understand a little more about the cheat. Following the CRT math imports (\`atan2f\`, \`acosf\`, \`powf\`) led straight to the aimbot: it reads an enemy's coordinates out of game memory, uses trigonometry to compute the angle from the player's current view to a target point on the enemy model (head for rage, body for legit), and translates that into synthetic mouse input to drag the crosshair onto the target. Recognizing that math in stripped, unnamed functions is a skill I'm still building but the shape made more sense when I knew what library to follow.

<img src="/images/takingapaaartcs2cheat/decompiledaimbotcode.png" alt="Ghidra decompiling the CRT trig import atan2f, the thread that led to the aimbot" style="width: 100%; border-radius: 8px;" />

I also chased down the one string that had been bothering me. I had recorded in my notes a  \`system()\` call as "need to check what this runs," and I learned a system() in a cheat is exactly the kind of thing that should make me nervous. It was referenced twice in the decompilation, and on inspection both were \`system("cls")\`, clearing the console window for a cosmetic menu redraw. This was Anticlimactic and again, dissapointing, but it served as a good reminder that the scarylooking import is often nothing, but you don't get to assume that, you go read it.

## The verdict, and the honest 10%

I'm about 90% confident this sample is a plain external cheat with no malware payload. Multiple independent methods (clean static triage, no network capabilities in capa, no network DLL loads under a live breakpoint, a silent FakeNet run) all point the same way, and commodity cheat malware typically beacons on launch regardless of whether the game is running, so a fully silent run is meaningful on its own.

The remaining 10% is where I'd focus next, and I know exactly how I'd get there. My decoy proved the cheat's process discovery trigger fired, but a Notepad++ in a trenchcoat can't satisfy a payload that's gated on actually attaching to a real CS2. Dormant-until-real-game is a legitimate sandbox-evasion trick. Rather than fight that with a better fake, I'd turn the cheat's own obfuscation against it: extract the exact CRC32 parameters it uses (polynomial, initial value, final XOR, case handling, character width, terminator), hash the candidate networking module and API names with those parameters, and search .rdata and .data for the resulting 4-byte constants in little-endian. If the hashes of ws2_32.dll, WSAStartup, connect, and friends aren't in the table, the cheat cannot resolve networking functions, game running or not. That's a stronger proof than any dynamic run, and it closes the gap the hashing technique opened in the first place.

## Where I'd take anticheat

Doing this from the attacker's side clarified what I actually believe about defending against it. Ring-3 anticheat fundamentally can't stop another user-space process from reading your game's memory, and cheaters have repeatedly demonstrated they can bypass kernel-level anticheat too. Chasing the cheat down the privilege ladder is a losing arms race. I think the durable advantage is on the server and in the data.

Behavioral detection is where the leverage is. Movement is the cleanest example: bunny-hopping consistently is nearly impossible for a human, and demo and replay files contain the movement data to model it. You can learn the signature of a bhop script and flag inhuman consistency. The same applies to aiming artifacts: impossible crosshair placement, unnatural snaps, spinbotting. Big data, up to and including LLM-assisted review of flagged sessions, is an underused weapon here.

I'm also drawn to the softer, more strategic responses. Instead of an instant ban that just tells a cheater to buy a new account and come back, you can shadow them: quietly pool cheaters against other cheaters, log hardware and network identifiers to fight the buy-ban-rebuy cycle, and keep them contained instead of loose in real matches. The longer you can hold a bad actor without tipping them off, the more you learn and the less they can hurt legitimate players. Even the idea of running a controlled "cheat" as a honeypot to flag and hardware-ban its users has real merit against that resale economy.

## What's next

My next project is reversing a Lumma Stealer sample a coworker handed me, real malware, which is exactly why I want to run the CRC32 hash-extraction workflow against something I know resolves imports dynamically before I trust my read on a quiet cheat. I'm also planning to script the static-to-dynamic pipeline I settled into here so the repetitive parts (triage, string filtering, CRC32 hashing sweeps) get out of the way faster.

If you're on an anticheat team and you've read this far: this is the work I want to be doing, and I'd love to talk.
    `,
    aiEnhancements: "I want to be upfront: this project leaned on AI heavily, and that is part of the point. Claude played a major role in teaching me what to look for. It helped me recognize that the CRC32 and PE-parsing capabilities together pointed at hash-based import resolution, explained the ring model and why LdrLoadDll was the right chokepoint to break on, and helped me interpret a lot of what the tools were surfacing. What I brought was the safe setup and detonation, running the tools, deciding what to chase, and verifying claims instead of taking the model's word for it. I came out of this knowing more reverse engineering than I went in with, and being honest about how is more useful than pretending I did it unaided.",
    overview: "A static and dynamic reverse engineering teardown of an in-the-wild external CS2 cheat, motivated by wanting to work in anticheat.",
    goal: "Understand how a modern external cheat is built and what it touches, prove whether the sample was also malware, and work out how I would detect it.",
    results: "Identified a ring-3 external ESP and aimbot with no observed network payload (about 90% confidence), and defined a CRC32 hash-extraction method to close the remaining gap.",
    lessons: "Hash-based import resolution can hide a program's real capabilities from static analysis, so you pick a chokepoint (LdrLoadDll) that the technique cannot avoid. Anti-analysis behavior is itself a detection signal."
};
