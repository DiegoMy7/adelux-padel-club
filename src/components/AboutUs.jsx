import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { useCountUp } from '../hooks/useCountUp';
import InnerMembershipCta from './InnerMembershipCta';
import InnerTestimonials from './InnerTestimonials';

const ASSET_BASE = '/adelux-assets';
const ARROW = '\u2197';

const socialIcons = {
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2.2a3.6 3.6 0 0 0-3.6 3.6v8.4a3.6 3.6 0 0 0 3.6 3.6h8.4a3.6 3.6 0 0 0 3.6-3.6V7.8a3.6 3.6 0 0 0-3.6-3.6H7.8ZM12 7.2A4.8 4.8 0 1 1 12 16.8 4.8 4.8 0 0 1 12 7.2Zm0 2.2A2.6 2.6 0 1 0 12 14.6 2.6 2.6 0 0 0 12 9.4Zm5-2.95a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.2 8.1V6.6c0-.75.35-1.18 1.25-1.18h1.85V2.2c-.32-.04-1.42-.14-2.7-.14-2.67 0-4.5 1.63-4.5 4.62V8.1H7.1v3.6h3v10.24h4.1V11.7h2.84l.45-3.6H14.2Z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.82 10.47 21.01 2h-1.7l-6.24 7.35L8.08 2H2.33l7.54 11.1L2.33 22h1.7l6.59-7.77L15.9 22h5.76l-7.84-11.53Zm-2.33 2.75-.76-1.1-6.08-8.8h2.62l4.9 7.1.76 1.1 6.38 9.24h-2.62l-5.2-7.54Z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.95C17.93 4.78 12 4.78 12 4.78s-5.93 0-7.64.46A2.75 2.75 0 0 0 2.42 7.2 28.8 28.8 0 0 0 1.96 12c0 1.64.16 3.25.46 4.81a2.75 2.75 0 0 0 1.94 1.95c1.71.46 7.64.46 7.64.46s5.93 0 7.64-.46a2.75 2.75 0 0 0 1.94-1.95c.3-1.56.46-3.17.46-4.81 0-1.64-.16-3.25-.46-4.81ZM9.95 15.25v-6.5L15.35 12l-5.4 3.25Z" />
    </svg>
  ),
};

const missionCards = [
  {
    className: 'court',
    image: 'portrait-of-attractive-woman-padel-tennis-player-i-NJU5BZU.jpg',
    title: 'State of the art Padel Courts',
    text: 'Professional-grade courts available for booking, training, or fun matches.',
  },
  {
    className: 'academy',
    image: 'monitor-teaching-padel-class-RQUY73T.jpg',
    title: 'Top tier Academy Programs',
    text: 'Classes and coaching sessions for all levels, from kids to adults.',
  },
  {
    className: 'tournament',
    image: 'black-athletic-woman-playing-padel-doubles-on-outd-8U5QAM8.jpg',
    title: 'Community & Tournaments',
    text: 'Regular events, leagues, and meetups to keep the competitive spirit alive.',
  },
  {
    className: 'membership',
    image: 'multiracial-group-of-happy-friends-leaving-the-cou-CNDKVTB.jpg',
    title: 'Club Membership',
    text: 'Exclusive access, premium perks, and a place to belong.',
  },
];

const partners = ['Client-1.png', 'Client-2.png', 'Client-3.png', 'Client-4.png', 'Client-6.png', 'Client-7.png', 'Client-8.png'];

const chooseCards = [
  ['Icon-1.png', 'Professional-Grade Padel Courts', false],
  ['Icon-2.png', 'Certified Coaches & Training', true],
  ['Icon-3.png', 'Tournaments & Competitive Events', false],
  ['Icon-4.png', 'Modern Club Facilities', false],
];

const team = [
  ['ImageGen-7-853x1024.jpg', 'Alex Romeo', 'Head Coach'],
  ['ImageGen-2-853x1024.jpg', 'Sofia Delgado', 'Senior Padel Trainer'],
  ['ImageGen-4-853x1024.jpg', 'Isabelle Caron', 'Fitness & Conditioning'],
  ['ImageGen-6-853x1024.jpg', 'Mateo Vargas', 'Tournament Strategy'],
];

export default function AboutUs() {
  const sectionRef = useRevealOnScroll();
  const { ref: yearRef, displayValue: yearValue } = useCountUp(2022, '');
  const { ref: matchesRef, displayValue: matchesValue } = useCountUp(100, '+');
  const { ref: membersRef, displayValue: membersValue } = useCountUp(25, '+');

  return (
    <section className="template-page-section" id="about-us" ref={sectionRef}>
      <div className="template-banner template-banner-about reveal" data-reveal="up">
        <div className="template-banner-content">
          <h1>About Us</h1>
          <nav className="template-breadcrumb" aria-label="Breadcrumb">
            <a href="#/">Home</a>
            <span>/</span>
            <span>About Us</span>
          </nav>
        </div>
      </div>

      <div className="template-content template-about-welcome">
        <div className="template-welcome-copy">
          <div className="template-heading-block reveal" data-reveal="right">
            <span className="template-subheading">Welcome to Adelux</span>
            <h2>Where Passion Meets the Court</h2>
          </div>
          <h4 className="template-welcome-text reveal" data-reveal="left" data-delay="120">
            At Adelux Padel Club &amp; Academy, we&apos;re more than just a sports facility &mdash; we&apos;re a thriving community of padel lovers, beginners, and professionals dedicated to the fast-growing sport of padel. Founded with a mission to bring people together through world-class courts, elite training, and community-driven experiences, Adelux is your go-to destination for padel excellence.
          </h4>
        </div>

        <div className="template-mission-grid">
          {missionCards.map((card, index) => (
            <article className={`template-mission-card ${card.className} reveal`} data-reveal="up" data-delay={index * 80} key={card.title}>
              <div className="template-mission-image">
                <img src={`${ASSET_BASE}/${card.image}`} alt="" />
              </div>
              <div className="template-mission-copy">
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="template-partners reveal" data-reveal="up" data-delay="160" aria-label="Adelux partners">
          <div className="template-partner-track">
            {[...partners, ...partners].map((partner, index) => (
              <img src={`${ASSET_BASE}/${partner}`} alt="" key={`${partner}-${index}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="template-content template-detail-about">
        <div className="template-detail-visual reveal" data-reveal="right">
          <img src={`${ASSET_BASE}/multiracial-group-of-athletes-playing-paddle-tenni-SNHZS26.jpg`} alt="About Us" />
          <div className="template-detail-card reveal" data-reveal="up" data-delay="130">
            <h4>Adelux is a premier padel destination where passion, performance, and people come together.</h4>
            <a href="#/about">Learn More <span>{ARROW}</span></a>
          </div>
        </div>

        <div className="template-detail-copy">
          <div className="template-heading-block reveal" data-reveal="left">
            <span className="template-subheading">About Us</span>
            <h2>More Than Just a Padel Club, It&apos;s a Community.</h2>
          </div>
          <div className="template-detail-text reveal" data-reveal="left" data-delay="90">
            <p>At Adelux, we go beyond the game. Established with a vision to grow the padel sport, we offer world-class padel courts, certified coaches, and a welcoming community that supports every player&apos;s journey.</p>
            <p>From personal training programs to tournaments and social events, Adelux is built for those who want to improve their skills, stay active, and be part of something bigger. Whether you&apos;re joining for fun, fitness, or professional growth &mdash; Adelux has something for everyone.</p>
          </div>
          <div className="template-about-stats reveal" data-reveal="left" data-delay="150">
            <article><strong ref={yearRef}>{yearValue}</strong><span>Padel Found In</span></article>
            <article><strong ref={matchesRef}>{matchesValue}</strong><span>Matches Host</span></article>
            <article><strong ref={membersRef}>{membersValue}</strong><span>Active Members</span></article>
          </div>
        </div>
      </div>

      <div className="template-content template-choose-page">
        <div className="template-choose-copy">
          <div className="template-heading-block reveal" data-reveal="right">
            <span className="template-subheading">Why Choose Us</span>
            <h2>Why Padel Players Choose Adelux.</h2>
            <p>Discover what makes Adelux the top destination for padel enthusiasts of all levels.</p>
          </div>
          <div className="template-choose-photo reveal" data-reveal="right" data-delay="120">
            <img src={`${ASSET_BASE}/multiracial-group-of-athletes-going-for-an-outdoor-ZAZBUZY-1024x683.jpg`} alt="Why Choose Us" />
            <div className="choose-badge">
              <div className="avatars small"><span></span><span></span><span></span></div>
              <strong>25+ Membership</strong>
              <span>Enjoy our Facility</span>
            </div>
          </div>
        </div>

        <div className="template-choose-cards">
          {chooseCards.map(([icon, title, dark], index) => (
            <article className={`template-choose-card${dark ? ' lime' : ''} reveal`} data-reveal="left" data-delay={index * 70} key={title}>
              <img src={`${ASSET_BASE}/${icon}`} alt="" />
              <h4>{title}</h4>
              <a href="#/contact" aria-label={title}>{ARROW}</a>
            </article>
          ))}
        </div>
      </div>

      <InnerMembershipCta />

      <InnerTestimonials />

      <div className="template-team-section template-content">
        <div className="template-team-grid reveal" data-reveal="right">
          {team.map(([image, name, role]) => (
            <article className="template-team-card" key={name}>
              <img src={`${ASSET_BASE}/${image}`} alt={name} />
              <div className="template-team-overlay">
                <h4>{name}</h4>
                <h6>{role}</h6>
                <div>
                  <a href="#/contact" aria-label={`${name} Instagram`}>{socialIcons.instagram}</a>
                  <a href="#/contact" aria-label={`${name} Facebook`}>{socialIcons.facebook}</a>
                  <a href="#/contact" aria-label={`${name} X`}>{socialIcons.x}</a>
                  <a href="#/contact" aria-label={`${name} YouTube`}>{socialIcons.youtube}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="template-team-copy reveal" data-reveal="left">
          <span className="template-subheading">Our Coaching</span>
          <h2>Meet Our Coaching Team</h2>
          <p>Each member of our team brings world-class expertise, a love for padel, and a commitment to helping players of all levels grow and succeed on the court.</p>
          <a className="cta-pill" href="#/contact">
            <span>Meet Our Coaching</span>
            <span className="join-icon small">{ARROW}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
