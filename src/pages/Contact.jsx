import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
    return (
        <div className="contact-page container section-padding">
            <header className="page-header">
                <h1>Contact</h1>
                <p className="page-subtitle">Open to opportunities and always happy to talk security.</p>
            </header>

            <div className="contact-content" style={{ maxWidth: '600px' }}>
                <div className="contact-info" style={{ marginBottom: '3rem' }}>
                    <h2>Get in Touch</h2>
                    <p className="contact-desc">
                        I'm a recent cybersecurity grad looking for roles in security analysis, red teaming, and security engineering. I'm also always down to talk shop, review labs, or collaborate on open-source tooling.
                    </p>
                    <div className="social-links">
                        <a href="mailto:luketnc@gmail.com" className="social-link">
                            <Mail size={20} /> luketnc@gmail.com
                        </a>
                        <a href="https://github.com/luketnc" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Github size={20} /> github.com/luketnc
                        </a>
                        <a href="https://www.linkedin.com/in/luketaylorapp/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Linkedin size={20} /> linkedin.com/in/luketaylorapp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
