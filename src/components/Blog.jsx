import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const ARROW = '\u2197';

export default function Blog() {
  const sectionRef = useRevealOnScroll();

  return (
    <section className="blog-section light-section" ref={sectionRef}>
      <div className="content-wrap">
        <div className="section-head reveal" data-reveal="right">
          <div>
            <span className="section-pill pill-light">Blog &amp; Tips</span>
            <h2>Latest Blog &amp; Padel Tips</h2>
          </div>
          <a className="cta-pill" href="#contact">
            <span>Read More</span>
            <span className="join-icon small">{ARROW}</span>
          </a>
        </div>

        <div className="blog-grid">
          <article className="blog-card zoom-card reveal" data-reveal="right">
            <div className="blog-image blog-one"></div>
            <div className="blog-overlay">
              <div className="blog-meta">16 Jun 2025 <span>Padel Lifestyle</span></div>
              <h3>Why Joining a Padel Community Matters</h3>
            </div>
          </article>
          <article className="blog-card zoom-card reveal" data-reveal="right" data-delay="90">
            <div className="blog-image blog-two"></div>
            <div className="blog-overlay">
              <div className="blog-meta">16 Jun 2025 <span>Events &amp; News</span></div>
              <h3>Booking Courts Online: Quick &amp; Easy Guide</h3>
            </div>
          </article>
          <article className="blog-card zoom-card reveal" data-reveal="right" data-delay="180">
            <div className="blog-image blog-three"></div>
            <div className="blog-overlay">
              <div className="blog-meta">16 Jun 2025 <span>Events &amp; News</span></div>
              <h3>Recap: Adelux Spring Tournament 2025</h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
