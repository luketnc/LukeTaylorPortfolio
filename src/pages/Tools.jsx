import { toolsData } from '../data/api';
import { Download, TerminalSquare } from 'lucide-react';

export default function Tools() {
  return (
    <div className="tools-page container section-padding">
      <header className="page-header">
        <h1>Tools & Scripts</h1>
        <p className="page-subtitle">A collection of standalone scripts, payloads, and quick utilities.</p>
      </header>

      <div className="tools-grid">
        {toolsData.map(tool => (
          <div key={tool.id} className="tool-card">
            <div className="tool-card-header">
              <h3 className="tool-title">
                <TerminalSquare size={18} className="tool-icon" />
                {tool.name}
              </h3>
              <span className="tool-badge">{tool.language}</span>
            </div>
            
            <p className="tool-desc">{tool.description}</p>
            
            <div className="tool-footer">
              <span className="tool-size">{tool.size}</span>
              <a href={tool.filePath} download className="btn btn-primary btn-sm">
                <Download size={14} /> Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
