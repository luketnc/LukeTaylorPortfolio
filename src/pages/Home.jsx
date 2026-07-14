import { projectsData, blogData } from '../data/api';
import ProjectCard from '../components/ProjectCard';
import BlogPreview from '../components/BlogPreview';
import { Link } from 'react-router-dom';

export default function Home() {
    const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);
    const latestPost = blogData[0];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero container">
                <h1 className="hero-title">
                    Luke Taylor
                </h1>
                <div className="hero-statement">
                    <p style={{ color: 'var(--accent-text)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                        Security Analyst & Researcher
                    </p>
                    <p>
                        Security analyst with a focus on breaking things to understand how they work.
                        I dig into networks, build detection systems, and occasionally write about what I find.
                    </p>
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
