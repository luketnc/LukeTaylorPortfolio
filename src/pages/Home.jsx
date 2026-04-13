import { projectsData, blogData } from '../data/api';
import ProjectCard from '../components/ProjectCard';
import BlogPreview from '../components/BlogPreview';
import { Link } from 'react-router-dom';
import { Key, Server, Terminal, ArrowRight } from 'lucide-react';

export default function Home() {
    const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);
    const latestPost = blogData[0];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero container">
                <h1 className="hero-title">
                    Luke T.
                </h1>
                <div className="hero-statement">
                    <p style={{ color: 'var(--accent-text)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                        Security Analyst & Researcher
                    </p>
                    <p>
                        Welcome to my professional portfolio. I specialize in identifying vulnerabilities, 
                        building robust defense architectures, and analyzing complex network anomalies. 
                    </p>
                    <p>
                        Explore my projects below to see my hands-on experience with SIEM deployments,
                        penetration testing, and applied machine learning in threat hunting.
                    </p>
                </div>

                <div className="focus-areas">
                    <div className="focus-item">
                        <Server className="focus-icon" />
                        <span>Cloud & Infrastructure Security</span>
                    </div>
                    <div className="focus-item">
                        <Terminal className="focus-icon" />
                        <span>Network Analysis & Incident Response</span>
                    </div>
                    <div className="focus-item">
                        <Key className="focus-icon" />
                        <span>Vulnerability Assessment & Pentesting</span>
                    </div>
                </div>

                <div className="hero-ctas">
                    <Link to="/projects" className="btn btn-primary">
                        View Projects <ArrowRight size={16} />
                    </Link>
                    <Link to="/contact" className="btn btn-secondary">
                        Contact Me
                    </Link>
                </div>
            </section >

            {/* Featured Projects */}
            < section className="featured-section container section-padding" >
                <div className="section-header">
                    <h2>Featured Work</h2>
                    <Link to="/projects" className="view-all-link">All Projects →</Link>
                </div>
                <div className="projects-grid">
                    {featuredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section >

            {/* Latest Update */}
            {
                latestPost && (
                    <section className="latest-update-section container section-padding">
                        <div className="section-header">
                            <h2>Latest Post</h2>
                            <Link to="/blog" className="view-all-link">All Posts →</Link>
                        </div>
                        <div className="latest-update-card">
                            <BlogPreview post={latestPost} />
                        </div>
                    </section>
                )
            }
        </div >
    );
}
