export default {
    id: "juice-shop-defense",
    slug: "juice-shop-defense",
    title: "OWASP Juice Shop Defense",
    oneLiner: "Deploying and actively defending a purposely vulnerable web application.",
    category: "Defensive Security",
    tags: ["Web Security", "OWASP", "Defensive Security", "AppSec"],
    status: "Completed",
    featured: false,
    content: `
## Overview

The OWASP Juice Shop is arguably the most modern and sophisticated insecure web application built for security training. While many use it to practice *attacking*, this project focused entirely on *defending* it. 

## The Defense Architecture

I deployed the Juice Shop application inside a structured containerized environment and placed it behind a Web Application Firewall (WAF) using ModSecurity. 

My goals were to:
1. Allow normal traffic to function seamlessly.
2. Detect and block OWASP Top 10 attacks (like SQL Injection, XSS, and Broken Access Control) using custom rule sets.
3. Pipe the logs into a structured SIEM for real-time monitoring and alerting.

## Analyzing the Attacks

Instead of just blocking the traffic, I configured the WAF to log the raw payloads. This allowed me to analyze the specific syntax of modern cross-site scripting (XSS) and SQL injection attempts. By studying the blocked payloads, I continually refined the WAF rules to reduce false positives while maintaining a strict security posture.

This project bridged the gap between theoretical web vulnerabilities and practical, real-world mitigation strategies.
    `,
    overview: "Built a defensive perimeter around the intentionally vulnerable OWASP Juice Shop.",
    goal: "To understand how to write and deploy Web Application Firewall (WAF) rules against the OWASP Top 10.",
    features: [
        "Docker container deployment",
        "ModSecurity WAF configuration",
        "Log analysis and rule refinement"
    ],
    techStack: ["Docker", "ModSecurity", "OWASP", "SIEM"],
    results: "Successfully blocked simulated OWASP Top 10 attacks automatically while maintaining app uptime.",
    lessons: "WAFs require constant tuning. A WAF that is too strict breaks the app; a WAF that is too loose gets you breached.",
    links: {
        repo: "",
        demo: "",
        writeup: ""
    }
};
