import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import InnerMembershipCta from './InnerMembershipCta';
import InnerTestimonials from './InnerTestimonials';

const ASSET_BASE = '/adelux-assets';
const ARROW = '\u2197';

const services = [
  ['Icon-5.png', 'happy-sportswomen-giving-high-five-after-playing-p-D8ZSZV5.jpg', 'Padel Court Rental'],
  ['Icon-6.png', 'young-athletic-woman-playing-padel-doubles-on-outd-SKA9CG9.jpg', 'Padel Academy & Coaching'],
  ['Icon-7.png', 'young-athletic-woman-hitting-the-ball-while-playin-J9XJQ27.jpg', 'Padel Tournaments'],
  ['Icon-8.png', 'paddle-tennis-player-making-an-effort-to-while-hit-QPJDK5U.jpg', 'Padel Club Membership'],
  ['Icon-1.png', 'man-playing-padel-4E8WZX7.jpg', 'Club Membership'],
  ['Icon-2.png', 'portrait-of-two-smiling-sportsmans-posing-on-padel-V3NLU7F.jpg', 'Community & Social Events'],
  ['Icon-3.png', 'man-trying-to-reach-the-ball-playing-pickleball-9W7DN8G.jpg', 'Kids & Youth Programs'],
  ['Icon-4.png', 'happy-women-having-fun-while-playing-paddle-tennis-FXTHC9A.jpg', 'Equipment Rental'],
];

const plans = [
  {
    name: 'Basic',
    price: '29',
    text: 'Perfect for casual players who want to enjoy the court without commitment.',
    benefits: ['4 Court Hours / Month', '1 Group Training Session', 'Access to Community Events', 'Club Newsletter Subscription', 'Standard Booking Access'],
  },
  {
    name: 'Standart',
    price: '49',
    text: 'Ideal for regular players seeking balance between play and progress.',
    benefits: ['8 Court Hours / Month', '2 Group Training Session', 'Priority Court Booking', 'Access to Member Only Tournaments', 'Community Forum Access', '10% Off Coaching Packages'],
  },
  {
    name: 'Premium',
    price: '89',
    text: 'For passionate padel players who want the full experience with exclusive benefits.',
    benefits: ['Unlimited Court Booking', '4 Private Coaching Sessions', 'VIP Tournament Access', 'Free Equipment Rental', 'Priority Event Registration', '20% Off Club Merchandise'],
  },
];

export default function ServicePage() {
  const sectionRef = useRevealOnScroll();

  return (
    <section className="template-page-section" id="service-page" ref={sectionRef}>
      <div className="template-banner template-banner-service reveal" data-reveal="up">
        <div className="template-banner-content">
          <h1>Our Services</h1>
          <nav className="template-breadcrumb" aria-label="Breadcrumb">
            <a href="#/">Home</a>
            <span>/</span>
            <span>Services</span>
          </nav>
        </div>
      </div>

      <div className="template-content template-service-section">
        <div className="section-head reveal" data-reveal="right">
          <div>
            <span className="section-pill pill-light">Our Service</span>
            <h2>Explore Our Padel Services</h2>
          </div>
          <a className="cta-pill" href="#/service">
            <span>View All Service</span>
            <span className="join-icon small">{ARROW}</span>
          </a>
        </div>

        <div className="template-service-grid">
          {services.map(([icon, image, title], index) => (
            <article className="template-service-card reveal" data-reveal="up" data-delay={(index % 4) * 70} key={title}>
              <img className="template-service-img" src={`${ASSET_BASE}/${image}`} alt={title} />
              <span className="template-service-icon">
                <img src={`${ASSET_BASE}/${icon}`} alt="" />
              </span>
              <div className="template-service-overlay">
                <h3>{title}</h3>
                <a href="#/contact" aria-label={title}>{ARROW}</a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <InnerMembershipCta compact />

      <div className="template-content template-pricing-section">
        <div className="template-heading-block centered reveal" data-reveal="right">
          <span className="template-subheading">Membership Package</span>
          <h2>Choose the Membership that Fits your Goals</h2>
        </div>

        <div className="template-pricing-grid">
          {plans.map((plan, index) => (
            <article className="template-pricing-card reveal" data-reveal="up" data-delay={index * 90} key={plan.name}>
              <div className="template-pricing-top">
                <h3>{plan.name}</h3>
                <div className="template-price">
                  <span>$</span>
                  <strong>{plan.price}</strong>
                  <small>/ Month</small>
                </div>
              </div>
              <p>{plan.text}</p>
              <ul>
                {plan.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
              </ul>
              <a className="cta-pill compact" href="#/contact">
                <span>Join Now</span>
                <span className="join-icon small">{ARROW}</span>
              </a>
            </article>
          ))}
        </div>
      </div>

      <InnerTestimonials />
    </section>
  );
}
