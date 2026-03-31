import { Mail, Github, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        // Simulate submission safely
        setTimeout(() => {
            setFormStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact-page container section-padding">
            <header className="page-header">
                <h1>Contact</h1>
                <p className="page-subtitle">Got a question or want to collaborate? Reach out securely.</p>
            </header>

            <div className="contact-grid">
                <div className="contact-info">
                    <h2>Connect</h2>
                    <p className="contact-desc">
                        I'm generally open to discussing security topics, reviewing labs, or collaborating on open-source tooling.
                    </p>
                    <div className="social-links">
                        {/* Pseudonymous links */}
                        <a href="mailto:hello@nullgarden.local" className="social-link">
                            <Mail size={20} /> hello@nullgarden.local
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Github size={20} /> @nullgardenBuilder
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Twitter size={20} /> @nullgardenSec
                        </a>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <h2>Secure Message</h2>
                    {formStatus === 'success' ? (
                        <div className="form-success">
                            <p>Message sent successfully. I'll get back to you soon.</p>
                            <button className="btn btn-secondary" onClick={() => setFormStatus('idle')}>Send Another</button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name / Alias</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={formStatus === 'submitting'}
                            >
                                {formStatus === 'submitting' ? 'Sending...' : <><Send size={16} /> Send Message</>}
                            </button>
                            <p className="form-note">Data is processed purely client-side in this demo frontend.</p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
