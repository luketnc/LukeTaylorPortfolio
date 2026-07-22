export default {
    id: "rfid-analysis",
    slug: "rfid-analysis",
    title: "The Badge My Flipper Couldn't Read",
    oneLiner: "Two weeks reverse engineering an unsupported 125 kHz badge, patching Flipper firmware, and cloning it onto a smart ring.",
    category: "Access Control",
    tags: ["Noralsy", "Access Control", "RFID", "Flipper Zero", "Reverse Engineering", "Physical Security", "AI Enhanced"],
    status: "Active",
    featured: true,
    image: "/images/RFID/Screenshot%202026-07-21%20130351.png",
    imageAlt: "RFID signal analysis showing phase shift keying and peak detection",
    // Panoramic waveform capture, so let the card span two columns instead of
    // cropping it into a square.
    wide: true,
    content: `
## The badge that started it

This whole thing started because I was sick of my badge.

You know the type: an access card on a retractable belt reel, the little string that zips back into the housing. Mine kept snapping. And every time it did, I had the same thought: the best form factor for an access badge is no badge at all.

The truly committed move here is a subdermal implant, a bioglass RFID/NFC capsule under the skin. I'm not there yet (maybe soon). So I compromised and bought a ceramic smart ring with both a 13.56 MHz NFC chip and a 125 kHz T5577 inside. The plan: clone my badge onto the ring, wear the ring, never fight the reel again.

First I had to figure out what I was even holding. I shined a flashlight through the back of the card and watched the antenna coil light up, a big copper loop running the whole perimeter. That's 125 kHz low-frequency RFID. I'd cloned cards on my Flipper Zero before, the point-and-shoot, press-a-button kind. I figured this was a fifteen-minute job.

I was very, very wrong. What follows is the two weeks that "fifteen minutes" turned into.

## When point-and-shoot stops working

I set the card on the Flipper and hit read. Nothing. It cycled through ASK and PSK modulation and came up empty. The stock firmware didn't recognize the protocol at all. My only option was Read RAW, which doesn't decode anything; it just records the raw waveform to a \`.ask.raw\` file.

So now I had a file full of raw pulses and no idea what they meant. Time to actually learn how this works instead of pressing buttons.

I pulled the raw capture into Python and started building a pipeline to reconstruct the signal: raw pulses to a clean binary waveform to a histogram of pulse lengths. That histogram was the first real "oh, I get it" moment. Two clean peaks showed up, one at roughly half the width of the other, a tidy 1:2 ratio. Two pulse widths in a 1:2 ratio is the fingerprint of a Manchester-encoded signal: a self-clocking code where every bit is a mid-bit transition, so the "short" and "long" pulses are just half-bit and full-bit timing.

From there I could turn the pulses into a bitstream, find where it repeated (the frame), and go hunting for a preamble, the manufacturer's marker at the front of every frame. Convert the bits to hex, match the leading pattern against known formats, and the card announced itself: a Noralsy tag, a 125 kHz ASK/Manchester access format that stock Flipper firmware doesn't support. Mystery card, identified. That felt like winning.

Then the real fight started.

## Two things named "block 0" (and why I lost an hour to it)

Here's where I have to be honest about a place I got genuinely tangled: the word block 0 means two completely different things depending on what you're looking at, and I conflated them for way too long.

- There's the T5577 chip's block 0, the config register. It tells the chip how to broadcast: modulation, clock rate, terminator settings. It's a setting, not data.
- And there's the frame's "first block", the first 32 bits of the actual transmitted Noralsy data, which carries the preamble and some fixed bytes. On the chip, that data actually lives in block 1.

I kept trying to reason about "block 0" as one thing and confusing myself about where the config ended and the data began. Once it clicked that one "block 0" is the chip's instruction sheet and the other is the payload, half my confusion evaporated. Naming collisions are a menace.

## The STT: the wall I couldn't climb

Every Noralsy frame ends with an STT, a Sequence Terminator. And the STT is the thing that nearly broke me.

The STT isn't a normal bit. It's a deliberate Manchester violation, a spot where the guaranteed mid-bit transition is intentionally missing, so the reader knows where one frame ends and the next begins. My decoding library, not knowing about it, hit that violation, threw an error, and "restarted". In doing so, it slipped the framing by exactly one bit. That single slipped bit was the difference between two candidate card IDs that were maddeningly close but not equal.

The cruelest part: I could see the repeating pattern, plain as day, in the graphed \`.ask\` signal. The data was right there. I just couldn't reliably reproduce it, because I couldn't pin down where the STT started or how long it was.

I leaned on the checksums to referee. Noralsy stores two little 4-bit check values: XOR the data nibbles together, and it should match. So I'd try an alignment, run the math, and one checksum would hit (instant fist pump), and then the second one would hold out and fail. Over and over. And the odds sat there mocking me: a 4-bit checksum passes by pure luck 1 in 16 tries; both together, 1 in 256. So a single lucky pass meant nothing. I needed both to agree and the same answer across multiple clean reads before I could trust it. That discipline, refusing to let a lucky checksum fool me into "massaging" the data until it turned green, was the hardest thing to hold onto when I just wanted a win.

## Patching the firmware to chase a single bit

Here's the part I'm proudest of. To even write a Noralsy tag, the T5577's config block needs the STT bit set, and the writer app I was using didn't expose that option. Its config screen let me set the RF clock and the modulation, but there was no "sequence terminator" toggle.

The STT flag is one bit in the config word: \`0x8\`. That's it. One bit.

So I cloned the app's source, dug through ~700 lines of C I was not fluent in, and found the function that assembled the config word from the on-screen settings. It built up the value by OR-ing together the modulation, the clock, and the block count, and I added exactly one line:

\`\`\`c
my_model->content[0] |= 0x8;   // T5577 sequence terminator (STT)
\`\`\`

Then I built it with \`ufbt\`, flashed it over USB-C, and along the way learned that a Flipper app's identity is keyed to its \`appid\`. Rename that and the auto-generated icon header, the install path, and the saved-config folder all shift with it. Fun little cascade of "why is my new app empty?" moments. But it compiled, it flashed, and I had a firmware that could finally write the terminator my card needed.

Going from "I don't really write C" to "I forked an app, found the one line that mattered, and flashed my own build" was the single best feeling of the whole project.

## The jumper-cable wristbands

For testing I didn't want to keep rewriting the actual ring, so I grabbed a pack of cheap T5577 wristbands. And because I wanted to tell my test clones apart at a glance, I tied leftover colored ESP jumper cables to them: orange, white, yellow, blue. (I did take the cables off during every read and write, out of paranoia that even a few centimeters of stray wire would detune the antenna. Small metal, big fear.)

Four color-coded wristbands, dangling jumper wires, spread across my desk like a very stupid science fair. It worked, though. I could clone a candidate to a band, read it back, and compare its waveform against the original card, all without touching the ring.

## The plot twist (and where it stands)

Every comparison came back no match. My first read was "the whole thing failed." But when I actually looked at the clone captures instead of trusting the summary, the peaks told a different story: the card's pulses sat at ~256 and ~512, and the clones sat at ~128 and ~256, exactly half the width.

The clones weren't garbage. They were running at double speed. I'd written them at the wrong RF clock. The card is effectively RF/64, and I'd been writing at RF/32. A 2x clock error is exactly the kind of thing that makes every downstream comparison fail while the underlying data is perfectly fine. It also fits the theme: this card is a little off-spec everywhere, which is probably why standard tools kept choking on it.

So that's where I am right now: about to rewrite the bands at the correct clock and run the comparison one more time. I haven't come this far to admit defeat and buy a Proxmark just yet.

To be continued.

## What I actually took away

I went in expecting a button press and came out having reconstructed a raw RF signal from scratch, identified an unsupported protocol, understood a modulation scheme, and patched and compiled my own firmware. The badge is almost beside the point now.

But the lesson that stuck hardest wasn't technical. A lot of this was me working alongside an AI, and the temptation the whole way was to just run whatever code I was handed because it sounded right. Early on I did exactly that, and it bit me. At one point I was confidently pointed at the wrong card ID, and the only reason I caught it was that I'd started forcing myself to understand each step instead of blindly executing it.

That's the balance I keep coming back to. AI can out-code me all day; I can't match its speed or recall anymore, and pretending otherwise is a losing game. But it can't supply the judgment: the "wait, that doesn't add up," the decision to trust a checksum over a coincidence, the instinct to actually look at the graph before believing the summary. Read it before you run it. The moment I stopped being a passenger is the moment the project started going anywhere.

(The specific card ID is redacted, obviously. The signal graph is on full display below. Good luck cloning my front door from a pulse-width histogram.)

## The signal

<img src="/images/RFID/Screenshot%202026-07-21%20130351.png" alt="Raw RFID waveform capture showing the repeating Noralsy frame" style="width: 100%; border-radius: 8px;" />

<img src="/images/RFID/Screenshot%202026-07-21%20130426.png" alt="Pulse-width histogram showing two peaks in a 1:2 ratio" style="width: 100%; border-radius: 8px;" />
    `,
    overview: "Reverse engineering an unsupported 125 kHz Noralsy access badge and cloning it onto a wearable T5577 smart ring.",
    goal: "Replace a constantly-breaking retractable badge reel by cloning the credential onto a ring, which meant decoding a protocol the Flipper Zero doesn't support.",
    features: [
        "Raw waveform capture and reconstruction in Python",
        "Pulse-width histogram analysis to identify Manchester encoding",
        "Preamble matching to fingerprint the Noralsy format",
        "Patched and compiled custom Flipper firmware to set the T5577 STT bit"
    ],
    techStack: ["Flipper Zero", "Python", "Google Colab", "C", "ufbt", "T5577"],
    results: "Protocol identified and custom firmware built and flashed. Clones were written at RF/32 instead of RF/64, so the comparison is being rerun at the correct clock.",
    lessons: "A 4-bit checksum passes by luck 1 in 16 times, so one lucky match proves nothing. Look at the graph before trusting a summary, and read code before running it.",
    aiEnhancements: "I worked through this alongside an AI, mostly for the Python signal pipeline and for making sense of Manchester decoding. It moved me faster than I could have gone alone, and it also confidently pointed me at the wrong card ID early on. That is why I started checking every step instead of running whatever I was handed. The protocol identification, the checksum discipline, and the firmware patch are mine."
};
