import { projectsData } from '../data/mockData';
import ProjectCard from '../components/ProjectCard';
import { useState } from 'react';

export default function ProjectsIndex() {
    const [filter, setFilter] = useState('All');

    // Sort: Featured first, then Active, then others. Realistically would use date updated.
    const sortedProjects = [...projectsData].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        if (a.status === 'Active' && b.status !== 'Active') return -1;
        if (a.status !== 'Active' && b.status === 'Active') return 1;
        return 0;
    });

    const filteredProjects = filter === 'All'
        ? sortedProjects
        : sortedProjects.filter(p => p.status === filter || p.category === filter);

    const categories = ['All', 'Active', 'Tooling', 'Infrastructure', 'Networking'];

    return (
        <div className="projects-page container section-padding">
            <header className="page-header">
                <h1>Projects & Labs</h1>
                <p className="page-subtitle">A collection of tools built, labs completed, and systems broken.</p>
            </header>

            <div className="filters">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                {filteredProjects.length === 0 && (
                    <p className="empty-state">No projects found for this filter.</p>
                )}
            </div>
        </div>
    );
}
