import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';

export default function BlogPreview({ post }) {
    const formattedDate = new Date(post.date).toISOString().split('T')[0]; // Format: YYYY-MM-DD

    return (
        <article className="blog-preview-item">
            <div className="blog-preview-meta">
                <span className="blog-preview-date">[{formattedDate}]</span>
                {post.tags && (
                    <span className="blog-preview-tags">
                        {post.tags.map(tag => `#${tag.toLowerCase()}`).join(' ')}
                    </span>
                )}
            </div>
            
            <h3 className="blog-preview-title">
                <Terminal size={18} className="blog-prompt-icon" />
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            
            <p className="blog-preview-excerpt">{post.excerpt}</p>
        </article>
    );
}
