import { projectsData } from '../data/api';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

export default function Home() {
    // Lead with the feature card (the 2x2 hero), then photo'd work, then the rest.
    // Placing the feature first keeps the grid from leaving a hole beside it.
    const featureRank = p => (p.size === 'feature' ? 2 : 0) + (p.image ? 1 : 0);
    const featuredProjects = projectsData
        .filter(p => p.featured)
        .sort((a, b) => featureRank(b) - featureRank(a))
        // 6 tiles cleanly for a uniform grid: 2 rows of 3 columns.
        .slice(0, 6);

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
                        <ProjectCard key={project.id} project={project} uniformSize={true} />
                    ))}
                </div>
            </section >

            {/* Latest Post section hidden while the blog is disabled. */}
        </div >
    );
}
