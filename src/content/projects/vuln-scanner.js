export default {
    id: "vuln-scanner-go",
    slug: "vuln-scanner-go",
    title: "Concurrent Vuln Scanner",
    oneLiner: "A fast, concurrent vulnerability scanner built in Go.",
    category: "Tooling",
    tags: ["Golang", "Concurrency", "DevSecOps", "Vulnerability Management"],
    status: "Staging",
    featured: true,
    overview: "Built a lightweight vulnerability scanner to check local container images for known CVEs.",
    goal: "To understand concurrent programming in Go while reinforcing knowledge of CVE databases.",
    features: [
        "Concurrent scanning of multiple images",
        "Integration with OSV database",
        "JSON reporting output"
    ],
    techStack: ["Go", "Docker API", "OSV Database"],
    results: "Reduced scanning time by 40% compared to sequential scripts.",
    lessons: "Handling goroutines and channels safely was tricky. Learned a lot about avoiding race conditions.",
    links: {
        repo: "https://github.com",
        demo: "",
        writeup: ""
    }
};
