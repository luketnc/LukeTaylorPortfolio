export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} Luke Taylor
                    </p>
                    <div className="footer-links">
                        <a href="https://github.com/luketnc" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/luketaylorapp/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
