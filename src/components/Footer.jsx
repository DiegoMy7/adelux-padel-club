import { useCallback, useState } from 'react';
import AdeluxLogo from './AdeluxLogo';

const ARROW = '\u2197';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'loading', 'success', 'error'
  
  // URL de tu API Gateway
  const API_URL = "https://8ngon1q9i3.execute-api.us-east-1.amazonaws.com/prod/subscribe";

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }, [email]);

  return (
    <footer className="site-footer-full">
      <div className="footer-shell">
        <div className="content-wrap footer-grid">
          <section className="footer-brand">
            <a className="brand-logo footer-logo" href="#home" aria-label="Adelux home">
              <AdeluxLogo />
            </a>
            <h3>Adelux Padel Club &amp; Academy</h3>
            <p>Experience the future of padel through modern courts, expert coaching, and an inclusive community.</p>
            <div className="footer-socials">
              <a href="#/contact">f</a>
              <a href="#/contact">x</a>
              <a href="#/contact">yt</a>
              <a href="#/contact">tt</a>
              <a href="#/contact">in</a>
            </div>
          </section>

          <section className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#/about">About Us</a></li>
              <li><a href="#academy">School &amp; Academy</a></li>
              <li><a href="#/booking">Book a Court</a></li>
              <li><a href="#events">Tournament</a></li>
              <li><a href="#/service">Our Services</a></li>
              <li><a href="#/community">Community</a></li>
              <li><a href="#contact">Our Blog</a></li>
              <li><a href="#/contact">Contact Us</a></li>
            </ul>
          </section>

          <section className="footer-contact" id="contact">
            <h3>Contact Info</h3>
            <div className="footer-contact-list">
              <article>
                <span className="footer-icon">P</span>
                <div>
                  <small>Phone Number</small>
                  <strong>+1 (800) 123-4567</strong>
                </div>
              </article>
              <article>
                <span className="footer-icon">E</span>
                <div>
                  <small>Email Address</small>
                  <strong>hello@adeluxpadel.com</strong>
                </div>
              </article>
              <article>
                <span className="footer-icon">L</span>
                <div>
                  <small>Location</small>
                  <strong>Adelux Padel Center, 123 Avenue Court, New York, NY</strong>
                </div>
              </article>
            </div>
          </section>

          <section className="footer-newsletter">
            <h3>Subscribe Newsletter</h3>
            <p>Get the latest updates on tournaments, promotions &amp; padel tips.</p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Subscribe to Our Newsletter" 
                aria-label="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading'}
              />
              <button className="cta-pill footer-submit" type="submit" disabled={status === 'loading'}>
                <span>{status === 'loading' ? 'Enviando...' : 'Subscribe Now'}</span>
                {status !== 'loading' && <span className="join-icon small">{ARROW}</span>}
              </button>
            </form>
            {status === 'success' && <p style={{ color: '#4ade80', marginTop: '10px', fontSize: '14px' }}>¡Suscripción exitosa!</p>}
            {status === 'error' && <p style={{ color: '#f87171', marginTop: '10px', fontSize: '14px' }}>Hubo un error. Intenta de nuevo.</p>}
          </section>
        </div>

        <div className="content-wrap footer-bottom">
          <div className="footer-legal">
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms &amp; Conditions</a>
          </div>
          <p>&copy; 2025 Adelux Padel Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
