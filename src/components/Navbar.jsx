import { useState, useCallback, useEffect } from 'react';
import AdeluxLogo from './AdeluxLogo';
import './Navbar.css';

const ARROW = '\u2197';

const bookingLinks = [
  ['Booking Court', '#/booking'],
  ['Events', '#events'],
  ['Membership', '#membership'],
];

const pageLinks = [
  ['Our Services', '#/service'],
  ['Coaching', '#academy'],
  ['Community', '#/community'],
  ['Blog', '#blog'],
  ['404 Error', '#/404'],
];

function getActiveLink() {
  const hash = window.location.hash;

  if (hash.startsWith('#/about')) return 'about';
  if (hash.startsWith('#/contact')) return 'contact';
  if (hash.startsWith('#/booking') || hash === '#booking' || hash === '#events' || hash === '#membership') return 'booking';
  if (
    hash.startsWith('#/service') ||
    hash.startsWith('#/community') ||
    hash.startsWith('#/404') ||
    hash === '#academy' ||
    hash === '#blog'
  ) return 'pages';

  return 'home';
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState('');
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
    setOpenDropdown('');
  }, []);

  const toggleDropdown = useCallback((name) => {
    setOpenDropdown((current) => (current === name ? '' : name));
  }, []);

  return (
    <header className="top-nav reveal" data-reveal="right">
      <a className="brand-logo" href="#/" aria-label="Adelux home">
        <AdeluxLogo />
      </a>

      <nav className={`nav-menu${menuOpen ? ' open' : ''}`}>
        <a className={activeLink === 'home' ? 'active' : undefined} href="#/" onClick={closeMenu}>Home</a>
        <a className={activeLink === 'about' ? 'active' : undefined} href="#/about" onClick={closeMenu}>About Us</a>

        <div
          className={`nav-dropdown${openDropdown === 'booking' ? ' is-open' : ''}`}
        >
          <button
            className={`nav-dropdown-trigger${activeLink === 'booking' ? ' active' : ''}`}
            type="button"
            aria-expanded={openDropdown === 'booking'}
            onClick={() => toggleDropdown('booking')}
          >
            <span>Booking Court</span>
            <span className="nav-chevron" aria-hidden="true"></span>
          </button>
          <div className="nav-dropdown-menu">
            {bookingLinks.map(([label, href]) => (
              <a href={href} key={label} onClick={closeMenu}>{label}</a>
            ))}
          </div>
        </div>

        <div
          className={`nav-dropdown${openDropdown === 'pages' ? ' is-open' : ''}`}
        >
          <button
            className={`nav-dropdown-trigger${activeLink === 'pages' ? ' active' : ''}`}
            type="button"
            aria-expanded={openDropdown === 'pages'}
            onClick={() => toggleDropdown('pages')}
          >
            <span>Pages</span>
            <span className="nav-chevron" aria-hidden="true"></span>
          </button>
          <div className="nav-dropdown-menu">
            {pageLinks.map(([label, href]) => (
              <a href={href} key={label} onClick={closeMenu}>{label}</a>
            ))}
          </div>
        </div>

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
