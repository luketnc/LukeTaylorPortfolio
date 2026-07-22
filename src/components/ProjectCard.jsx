import { Link } from 'react-router-dom';
import { assetUrl } from '../data/api';

export default function ProjectCard({ project }) {
    // Track the cursor position as CSS vars so the ambient spotlight follows it.
    const handlePointer = (e) => {
        const el = e.currentTarget;
        const r = el.getBoundingClientRect();
        el.style.setProperty('--spot-x', `${((e.clientX - r.left) / r.width) * 100}%`);
        el.style.setProperty('--spot-y', `${((e.clientY - r.top) / r.height) * 100}%`);
    };

    const statusColorMap = {
        Active: 'var(--status-active)',
        'Coming Soon': 'var(--status-staging)',
        Completed: 'var(--status-completed)',
        Archived: 'var(--status-archived)'
    };

    const tierLabel = { 'real-world': 'Real-world', build: 'Build', lab: 'Lab' };

    // "Completed" is the silent default; only surface a status chip when it says something.
    const showStatus = project.status && project.status !== 'Completed';

    return (
        <div
            className={`project-card ${project.image ? 'has-media' : ''} ${project.wide ? 'is-wide' : ''} ${project.size === 'feature' ? 'is-feature' : ''}`}
            onMouseMove={handlePointer}
        >
            {project.image && (
                <div className="project-card-media">
                    <img
                        src={assetUrl(project.image)}
                        alt={project.imageAlt || project.title}
                        loading="lazy"
                    />
                </div>
            )}
            <div className="project-badges">
                {project.tier && (
                    <span className={`tier-pill tier-${project.tier}`}>{tierLabel[project.tier]}</span>
                )}
                {project.deepDive && <span className="depth-badge">Deep dive</span>}
                {showStatus && (
                    <span
                        className="project-status"
                        style={{ '--status-color': statusColorMap[project.status] || 'var(--text-muted)' }}
                    >
                        {project.status}
                    </span>
                )}
            </div>
            <div className="project-card-header">
                <h3 className="project-title">
                    <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>
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
