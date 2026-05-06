import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const ARROW = '\u2197';

export default function Events() {
  const sectionRef = useRevealOnScroll();

  return (
    <section className="events-section light-section" id="events" ref={sectionRef}>
      <div className="content-wrap">
        <div className="events-head centered reveal" data-reveal="right">
          <span className="section-pill pill-light">Upcoming Tournament</span>
          <h2>Join Our Exciting Upcoming Padel Events</h2>
        </div>

        <div className="events-grid">
          <article className="event-card tall zoom-card reveal" data-reveal="right">
            <div className="event-image event-image-one"></div>
            <div className="event-tags">
              <span>Open For All</span>
              <span>Competitive</span>
              <span>Beginner Friendly</span>
              <span>Monthly Series</span>
              <span>Free Registration</span>
            </div>
            <div className="event-overlay">
              <h3>Adelux Open 2025</h3>
              <p>Lorem ipsum dolor sit amet adipiscing elit ut elit tellus luctus nec ullam.</p>
              <ul>
                <li>July 15-17, 2025</li>
                <li>Men&apos;s &amp; Women&apos;s Singles</li>
                <li>$10.000</li>
              </ul>
              <a href="#contact">{ARROW}</a>
            </div>
          </article>

          <article className="event-feature reveal" data-reveal="left">
            <div className="event-feature-copy">
              <h3>Ready to Serve Your Best Game?</h3>
              <p>Register now or explore all upcoming events. Whether you&apos;re a beginner or a seasoned athlete, Adelux welcomes your competitive spirit.</p>
              <a className="cta-pill" href="#contact">
                <span>Sign Up Now</span>
                <span className="join-icon small">{ARROW}</span>
              </a>
            </div>
            <div className="event-feature-image zoom-card">
              <div className="event-image event-image-two"></div>
            </div>
          </article>

          <article className="event-card short zoom-card reveal" data-reveal="right" data-delay="80">
            <div className="event-image event-image-three"></div>
            <div className="event-tags">
              <span>Open for All</span>
              <span>Competitive</span>
              <span>Beginner Friendly</span>
            </div>
            <div className="event-overlay compact">
              <h3>Junior Padel Community</h3>
              <a href="#contact">{ARROW}</a>
            </div>
          </article>

          <article className="event-card short lime zoom-card reveal" data-reveal="left" data-delay="140">
            <div className="event-image event-image-four"></div>
            <div className="event-tags dark-tags">
              <span>Open for All</span>
              <span>Competitive</span>
              <span>Beginner Friendly</span>
            </div>
            <div className="event-overlay compact light">
              <h3>Community Padel Night</h3>
              <a href="#contact">{ARROW}</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
