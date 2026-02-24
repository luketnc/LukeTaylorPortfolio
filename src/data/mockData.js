export const projectsData = [
    {
        id: "vuln-scanner-go",
        slug: "vuln-scanner-go",
        title: "Concurrent Vuln Scanner",
        oneLiner: "A fast, concurrent vulnerability scanner built in Go.",
        category: "Tooling",
        tags: ["Go", "Concurrency", "Security"],
        status: "Active",
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
    },
    {
        id: "auth-lab-infra",
        slug: "auth-lab-infra",
        title: "Zero-Trust Auth Lab",
        oneLiner: "Terraform-deployed lab for testing zero-trust auth flows.",
        category: "Infrastructure",
        tags: ["Terraform", "AWS", "IAM"],
        status: "Completed",
        featured: true,
        overview: "A lab environment to test various identity and access management configurations under a Zero Trust model.",
        goal: "Learn IAM best practices and Infrastructure as Code.",
        features: [
            "Automated deployment of VPC and subnets",
            "Strict IAM roles and policies",
            "Simulated attack paths"
        ],
        techStack: ["Terraform", "AWS", "Python"],
        results: "Successfully modeled 3 common attack paths and implemented preventative controls.",
        lessons: "IAM policies can be overly permissive by default. Explicit denies are crucial.",
        links: {
            repo: "https://github.com",
            demo: "",
            writeup: ""
        }
    },
    {
        id: "legacy-packet-sniffer",
        slug: "legacy-packet-sniffer",
        title: "Basic Packet Sniffer",
        oneLiner: "An educational packet sniffer to understand TCP/IP.",
        category: "Networking",
        tags: ["Python", "Scapy", "Networking"],
        status: "Archived",
        featured: false,
        overview: "A simple script to capture and analyze local network traffic.",
        goal: "Understand the structure of IP, TCP, and UDP headers.",
        features: [
            "Live capture filtering",
            "Hex dump viewing of payloads"
        ],
        techStack: ["Python", "Scapy"],
        results: "Gained a deep understanding of standard networking protocols.",
        lessons: "Parsing packets manually is error-prone; using libraries like Scapy is much safer but slower.",
        links: {
            repo: "https://github.com",
            demo: "",
            writeup: ""
        }
    }
];

export const updatesData = [
    {
        id: "update-1",
        date: "2026-02-20",
        title: "Finished Go Vuln Scanner MVP",
        body: "Finally got the concurrent scanning working without race conditions. Go channels are incredibly powerful once you understand the mental model. Next step: writing tests.",
        tags: ["Go", "Milestone"],
        relatedProjectSlug: "vuln-scanner-go"
    },
    {
        id: "update-2",
        date: "2026-02-10",
        title: "Starting the Zero-Trust Lab",
        body: "Just planned out the architecture for the Zero-Trust Auth lab. Will be using Terraform to make it easily reproducible. Planning to focus heavily on AWS IAM permissions boundaries.",
        tags: ["Planning", "Cloud"],
        relatedProjectSlug: "auth-lab-infra"
    },
    {
        id: "update-3",
        date: "2026-01-15",
        title: "Site Redesign",
        body: "Ported my old HTML blog over to a React SPA. Needed something cleaner that reflected my focus better. Decided to go with a dark 'security' aesthetic.",
        tags: ["Meta"],
        relatedProjectSlug: null
    }
];
