// Shared site navigation used inside the sticky application shell.
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'
import { usePortfolio } from '../context/usePortfolio';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { content, language, toggleLanguage } = usePortfolio();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const pageTitle = content.pageTitles[location.pathname] || 'Portfolio';

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
        {content.navItems.map((item) => (
          <button
            key={item.path}
            type="button"
            className={`nav-link ${location.pathname === item.path ? 'is-active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </button>
        ))}
        <button
          type="button"
          className="language-toggle"
          onClick={toggleLanguage}
          aria-label={`Switch language to ${content.language.label}`}
        >
          {language.toUpperCase()} / {content.language.short}
        </button>
      </nav>
    </div>
  )
}

export default Navbar
