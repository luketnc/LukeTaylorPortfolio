import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
    const statusColorMap = {
        Active: 'var(--status-active)',
        Staging: 'var(--status-staging)',
        Completed: 'var(--status-completed)',
        Archived: 'var(--status-archived)'
    };

    return (
        <div className="project-card">
            <div className="project-card-header">
                <h3 className="project-title">
                    <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>
                <span
                    className="project-status"
                    style={{ '--status-color': statusColorMap[project.status] || 'var(--text-muted)' }}
                >
                    {project.status}
                </span>
            </div>

            <p className="project-oneliner">{project.oneLiner}</p>

            <div className="project-meta">
                <span className="project-category">{project.category}</span>
                <div className="project-tags">
                    {project.tags?.map(tag => (
                        <Link key={tag} to={`/projects?tag=${encodeURIComponent(tag)}`} className={`tag ${tag === 'AI Enhanced' ? 'ai-enhanced-tag' : ''}`}>
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
