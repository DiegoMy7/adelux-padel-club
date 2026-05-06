import { useState, useCallback } from 'react';
import AdeluxLogo from './AdeluxLogo';
import './Navbar.css';

const ARROW = '\u2197';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header className="top-nav reveal" data-reveal="right">
      <a className="brand-logo" href="#home" aria-label="Adelux home">
        <AdeluxLogo />
      </a>

      <nav className={`nav-menu${menuOpen ? ' open' : ''}`}>
        <a className="active" href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About Us</a>
        <a href="#booking" onClick={closeMenu}>Booking Court</a>
        <a href="#academy" onClick={closeMenu}>Pages</a>
        <a href="#contact" onClick={closeMenu}>Contact Us</a>
      </nav>

      <a className="join-button" href="#contact">
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
