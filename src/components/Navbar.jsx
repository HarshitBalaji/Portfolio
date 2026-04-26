// Shared site navigation used inside the sticky application shell.
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'
import { navItems } from '../data/portfolio';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // These titles are shown next to the logo so the current section is obvious.
  const pageTitles = {
    '/app/about': 'The Engineer',
    '/app/about/experience': 'Professional Experience',
    '/app/about/education': 'Education',
    '/app/about/skills': 'Tech Stack',
    '/app/work': 'Projects',
    '/app/contact': 'Get in Touch',
  };

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const pageTitle = pageTitles[location.pathname] || 'Portfolio';

  return (
    <div className="navbar">
      <button className="brand" onClick={() => navigate('/')} type="button">
        <img className="logoButton" src={Logo} alt="logo" height="50" />
        <span className="page-title">{pageTitle}</span>
      </button>

      {/* Hamburger button only becomes visible on smaller screens via CSS. */}
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Navigation items come from shared data so labels and routes live in one place. */}
      <nav className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.path}
            type="button"
            className={`nav-link ${location.pathname === item.path ? 'is-active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Navbar
