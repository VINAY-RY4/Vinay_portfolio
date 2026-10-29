import { FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <a href="#home" className="footer-logo">
            <span className="navbar-logo-bracket">&lt;</span>
            Vinay<span className="navbar-logo-dot">.</span>RY
            <span className="navbar-logo-bracket">/&gt;</span>
          </a>

          <nav className="footer-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>

          <div className="footer-socials">
            <a href="https://github.com/VINAY-RY4" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/vinay-r-y-5a1aa3363" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Vinay R Y. All rights reserved.</p>
          <button className="footer-top-btn" onClick={scrollTop} aria-label="Back to top">
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
