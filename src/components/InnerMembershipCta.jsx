const ASSET_BASE = '/adelux-assets';
const ARROW = '\u2197';

export default function InnerMembershipCta({ compact = false }) {
  return (
    <section className={`template-membership-cta${compact ? ' compact' : ''}`}>
      <div className="template-content template-membership-grid">
        <article className="template-member-join reveal" data-reveal="right">
          <h3>Become an Adelux Member Today</h3>
          <ul>
            <li>Priority Court Booking</li>
            <li>Free Access to Weekly Meetups</li>
            <li>Member-Only Tournament Slots</li>
            <li>Discounted Coaching Sessions</li>
          </ul>
          <a className="cta-pill white-pill" href="#/contact">
            <span>Sign Up Now</span>
            <span className="join-icon small">{ARROW}</span>
          </a>
        </article>

        <article className="template-member-benefit reveal" data-reveal="left" data-delay="90">
          <p>
            Unlock exclusive benefits, member-only events, discounted court bookings, and priority access to tournaments. Whether you&apos;re a casual player or a future champion.
          </p>
          <div className="template-member-media">
            <div className="membership-tags">
              <span>Player Feedback</span>
              <span>Reel Stories</span>
              <span>Member Voices</span>
            </div>
            <img src={`${ASSET_BASE}/man-playing-padel-9KR4F3U-e1750063137155.jpg`} alt="Call to Action" />
            <h4>25+ Active Members | 7-Day Access | All Skill Levels Welcome</h4>
          </div>
        </article>
      </div>
    </section>
  );
}
