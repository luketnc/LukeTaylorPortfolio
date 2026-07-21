import { useParams, Link } from 'react-router-dom';
import { blogData, withBase } from '../data/api';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeRaw from 'rehype-raw';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost() {
    const { slug } = useParams();
    const post = blogData.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="container section-padding text-center">
                <h2>Post not found.</h2>
                <Link to="/blog" className="btn btn-secondary" style={{marginTop: '1rem'}}>Return to Logs</Link>
            </div>
        );
    }

    const formattedDate = new Date(post.date).toISOString().split('T')[0];

    return (
        <div className="blog-post-page container section-padding">
            <Link to="/blog" className="back-link">
                <ArrowLeft size={16} /> cd ..
            </Link>

            <article className="blog-post-content mt-8">
                <header className="blog-post-header">
                    <div className="blog-post-meta">
                        <span className="blog-date">[{formattedDate}]</span>
                        <span className="blog-tags">{post.tags?.map(t => `#${t.toLowerCase()}`).join(' ')}</span>
                    </div>
                    <h1 className="blog-post-title">{post.title}</h1>
                </header>

                <div className="markdown-body">
                    <ReactMarkdown 
                        remarkPlugins={[remarkGfm, remarkBreaks]} 
                        rehypePlugins={[rehypeRaw]}
                    >
                        {withBase(post.content)}
                    </ReactMarkdown>
                </div>
            </article>
        </div>
    );
}
