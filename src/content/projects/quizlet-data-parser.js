export default {
    id: "quizlet-data-parser",
    slug: "quizlet-data-parser",
    title: "Quizlet Data Parser",
    oneLiner: "A custom Python automation tool designed to scrape, parse, and structure flashcard data.",
    category: "Automation",
    tags: ["Python", "Data Parsing", "Automation", "ETL", "AI Enhanced"],
    status: "Completed",
    featured: false,
    tier: "build",
    content: `
## Overview

Retrieving bulk data from educational platforms and restructuring it for offline study or integration into other applications can be incredibly tedious. This project is a Python-based data parser specifically built to automate the extraction and formatting of Quizlet flashcard sets.

## How It Works

Using Python, the script performs an ETL (Extract, Transform, Load) process:

This is an older project (2022) and I have not located the code (somehow i idiotically didnt make a github repo back then) so I cant show the actual code yet. Once I do i will update this page.

    `,
    overview: "Built a Python web scraper and parser to automate the extraction of study data.",
    goal: "To automate the manual process of migrating flashcards to offline study tools using Python.",
    features: [
        "Automated HTML parsing",
        "Data cleaning and transformation",
        "Multi-format export (JSON, CSV, Anki)"
    ],
    techStack: ["Python", "BeautifulSoup", "Data Parsing"],
    results: "Reduced the time needed to migrate a 500-card study deck from hours to seconds.",
    lessons: "Web structures change frequently; relying on brittle CSS selectors in scraping requires frequent maintenance.",
    aiEnhancements: "I originally wrote this script using procedural code. I collaborated with an AI agent to completely refactor the python script into modular functions, which dramatically improved maintainability and allowed me to add multi-format exporting without spaghetti code.",
    links: {
        repo: "",
        demo: "",
        writeup: ""
    }
};
