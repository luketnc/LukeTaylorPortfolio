export default {
    id: "quizlet-data-parser",
    slug: "quizlet-data-parser",
    title: "Quizlet Data Parser",
    oneLiner: "A custom Python automation tool designed to scrape, parse, and structure flashcard data.",
    category: "Automation",
    tags: ["Python", "Data Parsing", "Automation", "ETL"],
    status: "Completed",
    featured: false,
    content: `
## Overview

Retrieving bulk data from educational platforms and restructuring it for offline study or integration into other applications can be incredibly tedious. This project is a Python-based data parser specifically built to automate the extraction and formatting of Quizlet flashcard sets.

## How It Works

Using Python, the script performs an ETL (Extract, Transform, Load) process:

1. **Extract:** It takes a target Quizlet URL (or raw HTML if dealing with authenticated views) and uses HTML parsing libraries (like \`BeautifulSoup\`) to isolate the flashcard grid elements.
2. **Transform:** The raw text is stripped of unnecessary characters, whitespace, and HTML tags. The terms and definitions are matched into dictionary key-value pairs.
3. **Load:** The structured dictionary is then exported into multiple formats, including pure JSON, CSV, and Anki-compatible text files for offline spaced-repetition studying.

## Technical Highlights

The script handles edge cases such as multi-line definitions, missing terms, and rate-limiting. It uses modular Python functions, making it trivial to extend the framework for other flashcard websites in the future.
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
    links: {
        repo: "",
        demo: "",
        writeup: ""
    }
};
