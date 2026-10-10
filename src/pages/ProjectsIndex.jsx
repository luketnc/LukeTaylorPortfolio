import { projectsData } from '../data/api';
import ProjectCard from '../components/ProjectCard';
export default function ProjectsIndex() {
    // Within a tier, lead with the feature card (2x2), then the wide banner, then
    // photo'd work, then the rest. Placing the big shapes first keeps the grid from
    // leaving holes around them.
    const shapeRank = p => (p.size === 'feature' ? 4 : 0) + (p.wide ? 2 : 0) + (p.image ? 1 : 0);
    const orderInTier = list => [...list].sort((a, b) => shapeRank(b) - shapeRank(a));

    const inTier = tier => orderInTier(projectsData.filter(p => p.tier === tier));
    const realWorld = inTier('real-world');
    const builds = inTier('build');
    const labs = inTier('lab');

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
            </header>

            <Section
                title="Real world"
                items={realWorld}
            />
            <Section
                title="Builds"
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
        </div>
    );
}
