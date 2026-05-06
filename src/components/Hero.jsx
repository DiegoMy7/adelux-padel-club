import { useRef } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { useImageSlider } from '../hooks/useImageSlider';
import Navbar from './Navbar';
import './Hero.css';

const ARROW = '\u2197';

const heroImages = [
  'https://images.pexels.com/photos/6203526/pexels-photo-6203526.jpeg?auto=compress&cs=tinysrgb&w=1800',
  'https://images.pexels.com/photos/8224403/pexels-photo-8224403.jpeg?auto=compress&cs=tinysrgb&w=1800',
  'https://images.pexels.com/photos/6203681/pexels-photo-6203681.jpeg?auto=compress&cs=tinysrgb&w=1800',
];

const heroOverlay =
  'linear-gradient(90deg, rgba(14, 14, 14, 0.62), rgba(14, 14, 14, 0.26) 42%, rgba(14, 14, 14, 0.56)), ';

export default function Hero() {
  const sectionRef = useRevealOnScroll();
  const { slideRef } = useImageSlider(heroImages, 6000, heroOverlay);
  const bgRef = useRef(null);

  return (
    <section className="hero-section" id="home" ref={sectionRef}>
      <div className="hero-bg" ref={bgRef}>
        <div className="hero-slide is-current" ref={slideRef}></div>
      </div>
      <div className="hero-overlay"></div>

      <div className="hero-frame">
        <Navbar />

        <div className="hero-content">
          <div className="hero-left">
            <span className="section-pill reveal" data-reveal="right">
              Padel Club &amp; Community
            </span>
            <h1 className="reveal" data-reveal="right" data-delay="100">
              Join the Future of Padel
            </h1>

            <div className="member-card glass reveal" data-reveal="right" data-delay="180">
              <div className="member-thumb"></div>
              <div className="member-copy">
                <div className="member-head">
                  <strong>25+</strong>
                  <div className="avatars">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="more">+</span>
                  </div>
                </div>
                <p>
                  Padel Enthusiasts. One Club Enjoy world-class facilities and a thriving community.
                </p>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-side-top">
              <ul className="social-stack reveal" data-reveal="left" data-delay="140">
                <li><span className="social-icon">f</span><span>Facebook</span></li>
                <li><span className="social-icon">ig</span><span>Instagram</span></li>
                <li><span className="social-icon">x</span><span>X Twitter</span></li>
                <li><span className="social-icon">tt</span><span>Tiktok</span></li>
              </ul>

              <aside className="potential-card glass reveal" data-reveal="left" data-delay="220">
                <h2>Unlock Your Full Potential</h2>
                <div className="mini-avatars">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p>With expert Padel tips, gear recommendations, and pro level training.</p>
              </aside>
            </div>

            <div className="hero-caption glass reveal" data-reveal="left" data-delay="280">
              <h3>Active Members and Unlock Premium Padel Facilities</h3>
              <p>
                Experience professional training, top-notch facilities, and a vibrant community at
                Adelux your premier padel destination.
              </p>
              <div className="hero-caption-actions">
                <a className="cta-pill hero-primary" href="#booking">
                  <span>Book a Court</span>
                  <span className="join-icon small">{ARROW}</span>
                </a>
                <button className="hero-play" type="button" aria-label="Play intro video">
                  <span className="hero-play-ring"></span>
                  <span className="hero-play-core">&#9654;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
