import { projectsData, updatesData } from '../data/mockData';
import ProjectCard from '../components/ProjectCard';
import UpdateItem from '../components/UpdateItem';
import { Link } from 'react-router-dom';
import { Shield, Server, Terminal, ArrowRight } from 'lucide-react';

export default function Home() {
    const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);
    const latestUpdate = updatesData[0];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero container">
                <h1 className="hero-title">
                    Security engineer in the making. <br />
                    <span className="text-muted">Building practical labs and tools.</span>
                </h1>
                <p className="hero-statement">
                    I break things to understand how they work, then I build better defenses.
                    Currently focused on cloud infrastructure, concurrent tooling, and zero-trust architectures.
                </p>

                <div className="focus-areas">
                    <div className="focus-item">
                        <Server className="focus-icon" />
                        <span>Cloud & Infrastructure Security</span>
                    </div>
                    <div className="focus-item">
                        <Terminal className="focus-icon" />
                        <span>Custom Security Tooling</span>
                    </div>
                    <div className="focus-item">
                        <Shield className="focus-icon" />
                        <span>Applied Zero-Trust</span>
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
            </section>

            {/* Featured Projects */}
            <section className="featured-section container section-padding">
                <div className="section-header">
                    <h2>Featured Work</h2>
                    <Link to="/projects" className="view-all-link">All Projects →</Link>
                </div>
                <div className="projects-grid">
                    {featuredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>

            {/* Latest Update */}
            {latestUpdate && (
                <section className="latest-update-section container section-padding">
                    <div className="section-header">
                        <h2>Latest Update</h2>
                        <Link to="/updates" className="view-all-link">All Updates →</Link>
                    </div>
                    <div className="latest-update-card">
                        <UpdateItem update={latestUpdate} />
                    </div>
                </section>
            )}
        </div>
    );
}
