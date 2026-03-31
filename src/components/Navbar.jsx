import { Link, useLocation } from 'react-router-dom';
import { Terminal, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Updates', path: '/updates' },
    { name: 'Coin', path: '/coin' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="brand">
          <Terminal className="brand-icon" size={24} />
          <span className="brand-text">nullgarden</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="nav-links desktop-nav">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="nav-cta">Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <nav className="mobile-nav">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="nav-link cta"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
