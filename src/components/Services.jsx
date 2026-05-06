import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const ARROW = '\u2197';

export default function Services() {
  const sectionRef = useRevealOnScroll();

  return (
    <section className="services-section light-section" id="services" ref={sectionRef}>
      <div className="content-wrap">
        <div className="section-head reveal" data-reveal="right">
          <div>
            <span className="section-pill pill-light">Our Service</span>
            <h2>Explore Our Padel Services</h2>
          </div>
          <a className="cta-pill" href="#contact">
            <span>View All Service</span>
            <span className="join-icon small">{ARROW}</span>
          </a>
        </div>

        <div className="service-grid">
          <article className="service-card reveal" data-reveal="right">
            <div className="service-icon">{'\u2301'}</div>
            <div className="service-image service-one"></div>
            <div className="service-overlay">
              <h3>Padel Court Rental</h3>
              <a href="#contact">{ARROW}</a>
            </div>
          </article>
          <article className="service-card reveal" data-reveal="right" data-delay="70">
            <div className="service-icon">{'\u25C9'}</div>
            <div className="service-image service-two"></div>
            <div className="service-overlay">
              <h3>Padel Academy &amp; Coaching</h3>
              <a href="#contact">{ARROW}</a>
            </div>
          </article>
          <article className="service-card reveal" data-reveal="right" data-delay="140">
            <div className="service-icon">{'\u25CE'}</div>
            <div className="service-image service-three"></div>
            <div className="service-overlay">
              <h3>Padel Tournaments</h3>
              <a href="#contact">{ARROW}</a>
            </div>
          </article>
          <article className="service-card reveal" data-reveal="right" data-delay="210">
            <div className="service-icon">{'\u25CC'}</div>
            <div className="service-image service-four"></div>
            <div className="service-overlay">
              <h3>Padel Club Membership</h3>
              <a href="#contact">{ARROW}</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
