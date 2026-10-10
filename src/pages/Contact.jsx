export default function Contact() {
    return (
        <div className="contact-page container section-padding">
            <header className="page-header">
                <h1>Contact</h1>
            </header>

            <div className="contact-content" style={{ maxWidth: '600px' }}>
                <div className="contact-info" style={{ marginBottom: '3rem' }}>
                    <p className="contact-desc">
                        I'm a recent cybersecurity grad looking for roles in IT, Networking, and Security Analysis.
                    </p>
                    <div className="social-links">
                        <a href="mailto:luketnc@gmail.com" className="social-link">
                            luketnc@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/luketaylorapp/" target="_blank" rel="noopener noreferrer" className="social-link">
                            linkedin.com/in/luketaylorapp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
