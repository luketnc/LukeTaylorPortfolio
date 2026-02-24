import { AlertTriangle, ExternalLink } from 'lucide-react';

export default function Coin() {
    return (
        <div className="coin-page container section-padding">
            <header className="page-header">
                <h1>The Coin Experiment</h1>
                <p className="page-subtitle">A conceptual exploration of decentralized identity and value.</p>
            </header>

            <div className="alert-box warning">
                <AlertTriangle size={20} className="alert-icon" />
                <div className="alert-content">
                    <strong>Disclaimer:</strong> This is a technical experiment for educational purposes only.
                    There is no financial value associated with this project, nor any guarantees of security or functionality.
                </div>
            </div>

            <div className="content-blocks">
                <section className="content-block">
                    <h2>What It Is</h2>
                    <p>
                        An experimental token deployed on a testnet to test out smart contract development,
                        understand the ERC-20 standard deeply, and experiment with token-gated access mechanisms
                        for some of the labs documented on this site.
                    </p>
                </section>

                <section className="content-block">
                    <h2>What It Isn't</h2>
                    <p>
                        An investment, a promise of future utility, or a "web3 startup." It is pure sandbox engineering.
                    </p>
                </section>

                <section className="content-block">
                    <h2>Current Status</h2>
                    <p>
                        <span className="status-badge">Phase 1: Planning</span>
                    </p>
                    <p>
                        Currently drafting the smart contracts and defining the initial supply mathematics.
                        No testnet deployment has occurred yet.
                    </p>
                </section>

                <section className="content-block">
                    <h2>High-Level Mechanics</h2>
                    <ul>
                        <li>Fixed supply</li>
                        <li>No minting functions post-deployment</li>
                        <li>Burnable by holders</li>
                        <li>Integrated with a minimal governance test contract</li>
                    </ul>
                </section>

                <section className="content-block">
                    <h2>Roadmap</h2>
                    <ul className="roadmap-list">
                        <li className="done">Define Tokenomics & Standards</li>
                        <li className="active">Draft Smart Contracts (In Progress)</li>
                        <li>Deploy to Sepolia Testnet</li>
                        <li>Build Token-Gated Demo App</li>
                    </ul>
                </section>

                <section className="content-block">
                    <h2>Resources</h2>
                    <div className="resource-links">
                        <a href="#" className="resource-link"><ExternalLink size={16} /> Concept Paper (Coming Soon)</a>
                        <a href="#" className="resource-link"><ExternalLink size={16} /> GitHub Repository (Private)</a>
                    </div>
                </section>
            </div>
        </div>
    );
}
