import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const ARROW = '\u2197';

export default function Community() {
  const sectionRef = useRevealOnScroll();

  return (
    <section className="community-section light-section" ref={sectionRef}>
      <div className="content-wrap community-grid">
        <div className="community-visual zoom-card reveal" data-reveal="right">
          <div className="community-image"></div>
          <div className="community-highlight">
            <h3>Be Part of Something Bigger Than the Game</h3>
            <a href="#contact">Join The Community <span>{ARROW}</span></a>
          </div>
        </div>

        <div className="community-copy">
          <span className="section-pill pill-light reveal" data-reveal="left">Adelux Padel Community</span>
          <h2 className="reveal" data-reveal="left" data-delay="70">Grow With a Passionate Padel Community</h2>
          <div className="community-list">
            <article className="reveal" data-reveal="left" data-delay="120">
              <div className="community-icon">1</div>
              <div>
                <h3>Weekly Meetups</h3>
                <p>Casual games and friendly matches every weekend to build lasting bonds on the court.</p>
              </div>
            </article>
            <article className="reveal" data-reveal="left" data-delay="180">
              <div className="community-icon">2</div>
              <div>
                <h3>Skill-Level Based Groups</h3>
                <p>Connect with players at your level beginner, intermediate, or advanced.</p>
              </div>
            </article>
            <article className="reveal" data-reveal="left" data-delay="240">
              <div className="community-icon">3</div>
              <div>
                <h3>Member Only Events</h3>
                <p>Exclusive workshops, networking nights, and closed tournaments for members.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
