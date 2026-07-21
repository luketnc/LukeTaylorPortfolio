export default {
    id: "rfid-analysis",
    slug: "rfid-analysis",
    title: "RFID analysis and manual cloning using Google Colab",
    oneLiner: "Analyzing and cloning RFID tags using the Flipper 0s read RAW function",
    category: "Access Control",
    tags: ["Noralsy", "Access Control", "RFID", "Google Colab", "Physical Security"],
    status: "Completed",
    featured: true,
    content: `
## Project Overview

I was having issues with the Noralsy access control system at my apartment complex, so I decided to do some research and figure out if there was a way to get around it. I ended up finding a way to clone the RFID tags using a Flipper 0 and Google Colab. Here is some more information about the project:

## Architecture

<img src="/images/RFID/Screenshot%202026-07-21%20130351.png" alt="RFID signal analysis in Google Colab" style="width: 100%; border-radius: 8px;" />

<img src="/images/RFID/Screenshot%202026-07-21%20130426.png" alt="RFID waveform and peak analysis" style="width: 100%; border-radius: 8px;" />



## Results



## Lessons


    `,
    overview: "Cloning RFID tags from a Noralsy access control system using a Flipper Zero's read RAW function and Google Colab.",
    goal: "To research and reproduce the RFID credentials used by an apartment complex access control system.",
    features: [
        "Reading RAW RFID data with a Flipper Zero",
        "Analyzing and decoding Noralsy tags in Google Colab",
        "Manually cloning working credentials"
    ],
    techStack: ["Flipper Zero", "Google Colab", "Python", "RFID"],
    results: "Work in progress.",
    lessons: "TBA"
};
