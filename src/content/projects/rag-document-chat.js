export default {
    id: "rag-document-chat",
    slug: "rag-document-chat",
    title: "RAG-Powered Document Assistant",
    oneLiner: "Building a Retrieval-Augmented Generation (RAG) system to securely query and summarize internal documentation.",
    category: "AI & Machine Learning",
    tags: ["Python", "AI", "LLMs & RAG", "Backend Engineering"],
    status: "Active",
    featured: false,
    content: `
## Project Overview

*This project is currently in active development.*

The goal of this project is to build a highly secure, locally-hosted Retrieval-Augmented Generation (RAG) pipeline. Modern enterprises require LLM capabilities (like summarization and Q&A) without sending sensitive documentation or proprietary architecture diagrams to external APIs over the open internet.

## Infrastructure & Approach

I am building this application using **LangChain** and a local vector database. The pipeline ingests PDF and Markdown documentation, chunks it, and generates embeddings. When a user queries the system, it performs a semantic search against the vector database, retrieves the most relevant context, and passes it to an open-weights Language Model to generate an informed, verifiable response.

### Current Progress
- [x] Initialized Python backend with FastAPI.
- [x] Configured document parsing and chunking logic.
- [ ] Integrating local Vector DB (ChromaDB).
- [ ] Building front-end UI for chat interactions.

Stay tuned for updates as this project gets closer to deployment!
    `,
    overview: "Building a secure RAG pipeline for internal documentation.",
    goal: "To deploy an AI assistant that can answer questions based on a private knowledge base without leaking data.",
    features: [
        "Semantic search over proprietary documents",
        "Integration with open-weight LLMs",
        "FastAPI backend for easy integration"
    ],
    techStack: ["Python", "LangChain", "FastAPI", "ChromaDB"],
    results: "Work in progress.",
    lessons: "TBA",
    links: {
        repo: "",
        demo: "",
        writeup: ""
    }
};
