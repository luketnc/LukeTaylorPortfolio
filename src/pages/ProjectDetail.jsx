import { useParams, Navigate, Link } from 'react-router-dom';
import { projectsData } from '../data/api';
import { Github, ExternalLink, FileText, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeRaw from 'rehype-raw';

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = projectsData.find(p => p.slug === slug);

    if (!project) return <Navigate to="/projects" replace />;

    const statusColorMap = {
        Active: 'var(--status-active)',
        Completed: 'var(--status-completed)',
        Archived: 'var(--status-archived)'
    };

    return (
        <div className="project-detail-page container section-padding">
            <Link to="/projects" className="back-link">
                <ArrowLeft size={16} /> Back to Projects
            </Link>

            <header className="project-detail-header">
                <div className="project-detail-meta">
                    <span className="project-category">{project.category}</span>
                    <span
                        className="project-status"
                        style={{ '--status-color': statusColorMap[project.status] || 'var(--text-muted)' }}
                    >
                        {project.status}
                    </span>
                </div>
                <h1 className="project-detail-title">{project.title}</h1>
                <p className="project-one-liner">{project.oneLiner}</p>

                <div className="project-links">
                    {project.links?.repo && (
                        <a href={project.links.repo} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                            <Github size={16} /> Repository
                        </a>
                    )}
                    {project.links?.demo && (
                        <a href={project.links.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} /> Live Demo
                        </a>
                    )}
                    {project.links?.writeup && (
                        <a href={project.links.writeup} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                            <FileText size={16} /> Writeup
                        </a>
                    )}
                </div>
            </header>

            <div className="project-content">
                {project.content ? (
                    <div className="markdown-body">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm, remarkBreaks]}
                            rehypePlugins={[rehypeRaw]}
                        >
                            {project.content}
                        </ReactMarkdown>

                        {project.tags && project.tags.includes('AI Enhanced') && project.aiEnhancements && (
                            <div className="alert-box warning" style={{marginTop: '2rem'}}>
                                <div className="alert-content">
                                    <strong>AI Enhancements:</strong> {project.aiEnhancements}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <section className="project-section">
                            <h2>Overview</h2>
                            <p>{project.overview}</p>
                        </section>

                        <section className="project-section">
                            <h2>Goal / Problem</h2>
                            <p>{project.goal}</p>
                        </section>

                        <section className="project-section">
                            <h2>What was Built</h2>
                            <ul>
                                {project.features?.map(feature => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="project-section">
                            <h2>Tech Stack</h2>
                            <div className="project-tags">
                                {project.techStack?.map(tech => (
                                    <span key={tech} className="tag">{tech}</span>
                                ))}
                            </div>
                        </section>

                        <section className="project-section">
                            <h2>Results & Outcomes</h2>
                            <p>{project.results}</p>
                        </section>

                        <section className="project-section">
                            <h2>Lessons & Tradeoffs</h2>
                            <p>{project.lessons}</p>
                        </section>

                        {project.tags && project.tags.includes('AI Enhanced') && project.aiEnhancements && (
                            <section className="project-section">
                                <h2>AI Enhancements</h2>
                                <div className="alert-box warning" style={{marginBottom: '0'}}>
                                    <div className="alert-content">
                                        <p style={{marginBottom: 0}}>{project.aiEnhancements}</p>
                                    </div>
                                </div>
                            </section>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
