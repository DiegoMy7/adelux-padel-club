import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const ARROW = '\u2197';

export default function Membership() {
  const sectionRef = useRevealOnScroll();

  return (
    <section className="membership-section light-section" ref={sectionRef}>
      <div className="content-wrap membership-grid">
        <article className="membership-card lime-card reveal" data-reveal="right">
          <h2>Become an Adelux Member Today</h2>
          <ul>
            <li>Priority Court Booking</li>
            <li>Free Access to Weekly Meetups</li>
            <li>Member-Only Tournament Slots</li>
            <li>Discounted Coaching Sessions</li>
          </ul>
          <a className="cta-pill white-pill" href="#contact">
            <span>Sign Up Now</span>
            <span className="join-icon small">{ARROW}</span>
          </a>
        </article>

        <article className="membership-card dark-membership reveal" data-reveal="left">
          <p>Unlock exclusive benefits, member-only events, discounted court bookings, and priority access to tournaments. Whether you&apos;re a casual player or a future champion.</p>
          <div className="membership-media zoom-card">
            <div className="membership-tags">
              <span>Player Feedback</span>
              <span>Reel Stories</span>
              <span>Member Voices</span>
            </div>
            <div className="membership-image"></div>
            <div className="membership-caption">25+ Active Members | 7-Day Access | All Skill Levels Welcome</div>
          </div>
        </article>
      </div>
    </section>
  );
}
