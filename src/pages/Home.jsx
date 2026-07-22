import { projectsData, blogData } from '../data/api';
import ProjectCard from '../components/ProjectCard';
import BlogPreview from '../components/BlogPreview';
import { Link } from 'react-router-dom';

export default function Home() {
    // Lead with the feature card (the 2x2 hero), then photo'd work, then the rest.
    // Placing the feature first keeps the grid from leaving a hole beside it.
    const featureRank = p => (p.size === 'feature' ? 2 : 0) + (p.image ? 1 : 0);
    const featuredProjects = projectsData
        .filter(p => p.featured)
        .sort((a, b) => featureRank(b) - featureRank(a))
        // 5 tiles cleanly: the 2x2 feature (4 cells) + the wide card (2) + 3 singles = 9 = 3 full rows.
        .slice(0, 5);
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
                        Hey, I'm Luke. This is where I put the security stuff I actually build. Hardware, wireless, reverse engineering, whatever's caught my attention lately. Some of it's client work, some is just rabbit holes I've jumped down trying to widen my scope.
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
