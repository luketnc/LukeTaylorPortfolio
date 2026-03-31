import { blogData } from '../data/mockData';
import BlogPreview from '../components/BlogPreview';

export default function Blog() {
    return (
        <div className="blog-page container section-padding">
            <header className="page-header">
                <h1>/var/log/nullgarden</h1>
                <p className="page-subtitle">Security research, project deep-dives, and terminal musings.</p>
            </header>

            <div className="blog-list">
                {blogData.map(post => (
                    <BlogPreview key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}
