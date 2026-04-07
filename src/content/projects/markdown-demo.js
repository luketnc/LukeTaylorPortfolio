export default {
    id: "markdown-demo-project",
    slug: "markdown-demo-project",
    title: "Markdown Rendering Test",
    oneLiner: "A sample project exported from Google Docs demonstrating rich text.",
    category: "Test",
    tags: ["Markdown", "Demo"],
    status: "Active",
    featured: false,
    content: `
## Overview

This is an example of dropping **Markdown** directly into the \`content\` field of a project. Because this field exists, the page bypasses the rigid template and instead dynamically renders whatever is presented here.

### Why is this useful?
As an engineer keeping notes in Google Docs, you can easily export them via Add-ons or copy-pasting into Markdown without manually sorting them into "Overview", "Goals", and "Lessons".

### Features Supported

*   **Bold** and *Italic* text.
*   [Links to resources](https://github.com)
*   Images embedded directly in the flow:

<img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800" alt="Sample code image" style="width: 100%; border-radius: 8px;" />

> "It even supports blockquotes for notes and callouts."
> - Future You

### Code Snippets

\`\`\`javascript
// And standard codeblocks!
function helloWorld() {
    console.log("Hello, nullgarden!");
}
\`\`\`

---

*End of Demo.*
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
