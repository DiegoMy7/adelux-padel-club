import { useCallback, useState } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import InnerTestimonials from './InnerTestimonials';

const ASSET_BASE = '/adelux-assets';
const ARROW = '\u2197';

const steps = [
  ['01', 'Select your court', 'Indoor or outdoor courts available'],
  ['02', 'Pick a date & time', 'Real-time availability for flexible scheduling'],
  ['03', 'Add extras', 'Choose equipment rental or request a coach (optional)'],
  ['04', 'Confirm & pay', 'Instant booking confirmation via email'],
];

const perks = [
  'Professional-grade courts (indoor & outdoor)',
  'Friendly on-site staff',
  'Clean, well-maintained facilities',
  'Flexible cancellation options',
  'Easy online booking system',
  'LED lighting for evening games',
];

export default function BookingPage() {
  const sectionRef = useRevealOnScroll();
  const [status, setStatus] = useState('');

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setStatus('error');
      return;
    }

    setStatus('success');
    form.reset();
  }, []);

  return (
    <section className="template-page-section" id="booking-page" ref={sectionRef}>
      <div className="template-banner template-banner-booking reveal" data-reveal="up">
        <div className="template-banner-content">
          <h1>Booking Court</h1>
          <nav className="template-breadcrumb" aria-label="Breadcrumb">
            <a href="#/">Home</a>
            <span>/</span>
            <span>Booking Court</span>
          </nav>
        </div>
      </div>

      <div className="template-content template-booking-process">
        <div className="template-heading-block centered reveal" data-reveal="right">
          <span className="template-subheading">How to Book</span>
          <h2>Reserve Your Court in Seconds Play Your Game</h2>
        </div>

        <div className="template-process-grid">
          {steps.map(([number, title, text], index) => (
            <article className="template-process-card reveal" data-reveal="up" data-delay={index * 80} key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="template-content template-booking-form-section">
        <div className="template-booking-form-card reveal" data-reveal="right">
          <h3>Book Your Court Now</h3>
          <p>Fill in the form to schedule your padel session. Fast, secure, and convenient.</p>

          {status === 'success' && (
            <div className="template-alert success" role="status">
              <span>OK</span>
              <p>Thank you! Form submitted successfully.</p>
            </div>
          )}
          {status === 'error' && (
            <div className="template-alert error" role="alert">
              <span>!</span>
              <p>Oops! Form submission failed. Please try again.</p>
            </div>
          )}

          <form className="template-contact-form" onSubmit={handleSubmit}>
            <div className="template-form-row">
              <label><span>Full Name</span><input type="text" placeholder="Your Name" required /></label>
              <label><span>Email Address</span><input type="email" placeholder="Your Email" required /></label>
            </div>
            <div className="template-form-row">
              <label><span>Phone Number</span><input type="tel" placeholder="Your Phone" required /></label>
              <label><span>Choose Court</span><input type="text" placeholder="Indoor / Outdoor" required /></label>
            </div>
            <div className="template-form-row">
              <label><span>Date</span><input type="date" required /></label>
              <label><span>Time</span><input type="time" required /></label>
            </div>
            <label><span>Notes</span><textarea rows="4" placeholder="Additional request"></textarea></label>
            <button className="template-send-button" type="submit">
              <span>Book Court</span>
              <span className="join-icon small">{ARROW}</span>
            </button>
          </form>
        </div>

        <div className="template-booking-detail reveal" data-reveal="left" data-delay="120">
          <article>
            <h3>Why Book with Adelux?</h3>
            <ul className="template-check-list">
              {perks.map((perk) => <li key={perk}>{perk}</li>)}
            </ul>
          </article>
          <article>
            <h3>Opening Hours</h3>
            <p>Monday - Friday: 08:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 09:00 AM - 11:00 PM</p>
          </article>
          <article>
            <h3>Booking Rates</h3>
            <p>Weekday Rates: Starting from $25/hour</p>
            <p>Weekend Rates: Starting from $35/hour</p>
            <p>Coaching Add-on: +$20/hour</p>
            <p>Equipment Rental: +$5/session</p>
          </article>
        </div>
      </div>

      <div className="template-content template-training-cta reveal" data-reveal="up">
        <div>
          <h2>Ready to Train with the Best?</h2>
          <p>Whether you&apos;re picking up a racquet for the first time or aiming for pro tournaments, our coaches are here to support your journey.</p>
          <a className="cta-pill white-pill" href="#/contact">
            <span>Get Started</span>
            <span className="join-icon small">{ARROW}</span>
          </a>
        </div>
        <img src={`${ASSET_BASE}/2AH2LFJ-1.png`} alt="Adelux coach" />
      </div>

      <InnerTestimonials />
    </section>
  );
}
