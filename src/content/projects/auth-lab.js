export default {
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
};
