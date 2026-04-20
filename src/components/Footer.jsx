export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} Luke Taylor Security.
                    </p>
                    <div className="footer-links">
                        {/* Keeping it pseudonymous as requested */}
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="/blog">RSS/Blog</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
