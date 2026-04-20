import { Mail, MessageCircle, Wallet } from 'lucide-react';

export default function Contact() {
    return (
        <div className="contact-page container section-padding">
            <header className="page-header">
                <h1>Contact</h1>
                <p className="page-subtitle">Got a question or want to collaborate? Reach out securely.</p>
            </header>

            <div className="contact-content" style={{ maxWidth: '600px' }}>
                <div className="contact-info" style={{ marginBottom: '3rem' }}>
                    <h2>Connect</h2>
                    <p className="contact-desc">
                        I'm generally open to discussing security topics, reviewing labs, or collaborating on open-source tooling.
                    </p>
                    <div className="social-links">
                        <a href="mailto:luketnc@gmail.com" className="social-link">
                            <Mail size={20} /> luketnc@gmail.com
                        </a>
                        <a href="https://t.me/nullgarden" target="_blank" rel="noopener noreferrer" className="social-link">
                            <MessageCircle size={20} /> @nullgarden
                        </a>
                    </div>
                </div>

                <div className="support-info">
                    <h2>Support</h2>
                    <p className="contact-desc">
                        If you found my writeups helpful or use my open-source tools, consider sending a small tip. Monero (XMR) is strongly preferred to maintain privacy.
                    </p>
                    <div className="social-link" style={{ cursor: 'text', wordBreak: 'break-all', alignItems: 'flex-start', padding: '1.5rem', background: 'var(--surface-hover)', border: '1px dashed var(--border-color)' }}>
                        <Wallet size={24} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--accent-color)' }} /> 
                        <span style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
                            4AMEv9uedBiTcnejLp5yzE9oUaJ97E4nZZTa4iHZaj5k1iBTUz9YWvpCoipk97h6d35tNXDiXNbDEcpYzUaEebm2DffZeyN
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
