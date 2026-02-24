import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

export default function UpdateItem({ update }) {
    const formattedDate = new Date(update.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <article className="update-item">
            <div className="update-meta">
                <div className="update-date">
                    <Calendar size={14} />
                    <time dateTime={update.date}>{formattedDate}</time>
                </div>
                {update.tags && (
                    <div className="update-tags">
                        {update.tags.map(tag => (
                            <span key={tag} className="tag tag-sm">{tag}</span>
                        ))}
                    </div>
                )}
            </div>

            <h3 className="update-title">{update.title}</h3>
            <p className="update-body">{update.body}</p>

            {update.relatedProjectSlug && (
                <Link to={`/projects/${update.relatedProjectSlug}`} className="update-related">
                    Related Project →
                </Link>
            )}
        </article>
    );
}
