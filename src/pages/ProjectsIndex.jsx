import { projectsData } from '../data/api';
import ProjectCard from '../components/ProjectCard';
import { useSearchParams } from 'react-router-dom';
import { Bot } from 'lucide-react';

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

    const sortedTags = Object.entries(tagCounts)
        .sort((a, b) => b[1] - a[1])
        .map(t => t[0]);
    
    // Always include 'AI Enhanced' if it exists, right next to 'All'
    const topTags = ['All'];
    if (sortedTags.includes('AI Enhanced')) {
        topTags.push('AI Enhanced');
    }
    const remainingTags = sortedTags.filter(t => t !== 'AI Enhanced').slice(0, 6);
    topTags.push(...remainingTags);

    // Within a tier, lead with the feature card (2x2), then the wide banner, then
    // photo'd work, then the rest. Placing the big shapes first keeps the grid from
    // leaving holes around them.
    const shapeRank = p => (p.size === 'feature' ? 4 : 0) + (p.wide ? 2 : 0) + (p.image ? 1 : 0);
    const orderInTier = list => [...list].sort((a, b) => shapeRank(b) - shapeRank(a));

    const inTier = tier => orderInTier(projectsData.filter(p => p.tier === tier));
    const realWorld = inTier('real-world');
    const builds = inTier('build');
    const labs = inTier('lab');

    const filteredProjects = activeTag === 'All'
        ? null
        : orderInTier(projectsData.filter(p => p.tags && p.tags.includes(activeTag)));

    const Section = ({ title, blurb, items }) => items.length === 0 ? null : (
        <section className="tier-section">
            <div className="tier-section-head">
                <h2>{title}</h2>
                <p className="tier-section-blurb">{blurb}</p>
            </div>
            <div className="projects-grid">
                {items.map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
        </section>
    );

    return (
        <div className="projects-page container section-padding">
            <header className="page-header">
                <h1>Projects & Labs</h1>
                <p className="page-subtitle">A collection of tools built, labs completed, and systems broken.</p>

                <div className="alert-box warning" style={{ marginTop: '2rem' }}>
                    <Bot className="alert-icon" size={24} />
                    <div className="alert-content">
                        <strong>AI Enhanced Development.</strong> Times are changing fast, and AI is getting better by the day. I have decided to revisit some of my older projects to practice spec-based development and collaborating with AI agents, combining their output with my own critical thinking and problem-solving skills. Projects that have been revisited will feature the <code style={{color: 'inherit', background: 'rgba(0,0,0,0.2)'}}>AI Enhanced</code> tag, along with notes detailing exactly what was enhanced and how AI assisted the upgrade.
                    </div>
                </div>
            </header>

            <div className="filters">
                {topTags.map(tag => (
                    <button
                        key={tag}
                        className={`filter-btn ${activeTag === tag ? 'active' : ''} ${tag === 'AI Enhanced' ? 'ai-enhanced-tag' : ''}`}
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

            {activeTag !== 'All' ? (
                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    {filteredProjects.length === 0 && (
                        <p className="empty-state">No projects found for {activeTag}.</p>
                    )}
                </div>
            ) : (
                <>
                    <Section
                        title="Real-world"
                        blurb="Real targets, real stakes. Paid engagements, live networks, and my own hardware in the wild."
                        items={realWorld}
                    />
                    <Section
                        title="Builds"
                        blurb="Things I designed and made, from hardware drop boxes to custom tooling."
                        items={builds}
                    />
                    {labs.length > 0 && (
                        <details className="tier-section labs-section">
                            <summary>
                                <span className="labs-summary-title">Labs &amp; coursework</span>
                                <span className="labs-summary-count">{labs.length} projects</span>
                            </summary>
                            <p className="tier-section-blurb">Guided labs and coursework where I learned the fundamentals. Simulated environments, not live targets.</p>
                            <div className="projects-grid">
                                {labs.map(p => <ProjectCard key={p.id} project={p} />)}
                            </div>
                        </details>
                    )}
                </>
            )}
        </div>
    );
}
