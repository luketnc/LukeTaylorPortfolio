import { projectsData } from '../data/api';
import ProjectCard from '../components/ProjectCard';
import { useSearchParams } from 'react-router-dom';

export default function ProjectsIndex() {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTag = searchParams.get('tag') || 'All';

    // Extract all unique tags to build the filter bar dynamically
    const tagCounts = {};
    projectsData.forEach(p => {
        if (p.tags) {
            p.tags.forEach(tag => {
                tagCounts[tag] = (tagCounts[tag] || 0) + 1;
            });
        }
    });

    // Sort tags by frequency and pick the top 6-8 for the quick-filter bar
    const sortedTags = Object.entries(tagCounts)
        .sort((a, b) => b[1] - a[1])
        .map(t => t[0]);
    const topTags = ['All', ...sortedTags.slice(0, 7)];

    // Sort: Featured first, then Active, then others.
    const sortedProjects = [...projectsData].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        if (a.status === 'Active' && b.status !== 'Active') return -1;
        if (a.status !== 'Active' && b.status === 'Active') return 1;
        return 0;
    });

    const filteredProjects = activeTag === 'All'
        ? sortedProjects
        : sortedProjects.filter(p => p.tags && p.tags.includes(activeTag));

    return (
        <div className="projects-page container section-padding">
            <header className="page-header">
                <h1>Projects & Labs</h1>
                <p className="page-subtitle">A collection of tools built, labs completed, and systems broken.</p>
            </header>

            <div className="filters">
                {topTags.map(tag => (
                    <button
                        key={tag}
                        className={`filter-btn ${activeTag === tag ? 'active' : ''}`}
                        onClick={() => {
                            if (tag === 'All') {
                                setSearchParams({});
                            } else {
                                setSearchParams({ tag });
                            }
                        }}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                {filteredProjects.length === 0 && (
                    <p className="empty-state">No projects found for {activeTag}.</p>
                )}
            </div>
        </div>
    );
}
