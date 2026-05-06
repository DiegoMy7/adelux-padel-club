import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const ARROW = '\u2197';

export default function WhyChoose() {
  const sectionRef = useRevealOnScroll();

  return (
    <section className="choose-section light-section" ref={sectionRef}>
      <div className="content-wrap choose-grid">
        <div className="choose-copy">
          <span className="section-pill pill-light reveal" data-reveal="right">Why Choose Us</span>
          <h2 className="reveal" data-reveal="right" data-delay="80">Why Padel Players Choose Adelux.</h2>
          <p className="reveal" data-reveal="right" data-delay="140">Discover what makes Adelux the top destination for padel enthusiasts of all levels.</p>

          <div className="choose-image reveal" data-reveal="right" data-delay="220">
            <div className="choose-badge">
              <div className="avatars small"><span></span><span></span><span></span></div>
              <strong>25+ Membership</strong>
              <span>Enjoy our Facility</span>
            </div>
          </div>
        </div>

        <div className="benefit-cards">
          <article className="benefit-card reveal" data-reveal="left">
            <div className="icon-box">{'\u2726'}</div>
            <h3>Professional-Grade Padel Courts</h3>
            <a href="#contact">{ARROW}</a>
          </article>
          <article className="benefit-card dark reveal" data-reveal="left" data-delay="70">
            <div className="icon-box">{'\u25CE'}</div>
            <h3>Certified Coaches &amp; Training</h3>
            <a href="#contact">{ARROW}</a>
          </article>
          <article className="benefit-card reveal" data-reveal="left" data-delay="140">
            <div className="icon-box">{'\uD83C\uDFC5'}</div>
            <h3>Tournaments &amp; Competitive Events</h3>
            <a href="#contact">{ARROW}</a>
          </article>
          <article className="benefit-card reveal" data-reveal="left" data-delay="210">
            <div className="icon-box">{'\u279C'}</div>
            <h3>Modern Club Facilities</h3>
            <a href="#contact">{ARROW}</a>
          </article>
        </div>
      </div>
    </section>
  );
}
