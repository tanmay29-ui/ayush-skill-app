import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="public-navbar">
      <div className="container public-navbar-inner">
        <Link to="/" className="public-brand" aria-label="Ayush Skill Intelligence home">
          <span className="public-brand-mark" aria-hidden="true">A</span>
          <span className="public-brand-copy">
            <strong>AYUSH</strong>
            <span>SKILL INTELLIGENCE</span>
          </span>
        </Link>
        <div className="public-nav-meta" aria-label="Platform status">
          <span className="status-dot" aria-hidden="true" />
          <span>National skill network</span>
        </div>
      </div>
    </header>
  );
}
