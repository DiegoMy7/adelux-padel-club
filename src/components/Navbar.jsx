import { useState, useCallback, useEffect } from 'react';
import AdeluxLogo from './AdeluxLogo';
import './Navbar.css';

const ARROW = '\u2197';

function getActiveLink() {
  const hash = window.location.hash;

  if (hash.startsWith('#/about')) return 'about';
  if (hash.startsWith('#/contact')) return 'contact';
  if (hash === '#booking') return 'booking';
  if (hash === '#academy') return 'pages';

  return 'home';
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(getActiveLink);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(getActiveLink());
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header className="top-nav reveal" data-reveal="right">
      <a className="brand-logo" href="#/" aria-label="Adelux home">
        <AdeluxLogo />
      </a>

      <nav className={`nav-menu${menuOpen ? ' open' : ''}`}>
        <a className={activeLink === 'home' ? 'active' : undefined} href="#/" onClick={closeMenu}>Home</a>
        <a className={activeLink === 'about' ? 'active' : undefined} href="#/about" onClick={closeMenu}>About Us</a>
        <a className={activeLink === 'booking' ? 'active' : undefined} href="#booking" onClick={closeMenu}>Booking Court</a>
        <a className={activeLink === 'pages' ? 'active' : undefined} href="#academy" onClick={closeMenu}>Pages</a>
        <a className={activeLink === 'contact' ? 'active' : undefined} href="#/contact" onClick={closeMenu}>Contact Us</a>
      </nav>

      <a className="join-button" href="#/contact">
        <span>Join The Club</span>
        <span className="join-icon">{ARROW}</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Open menu"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
