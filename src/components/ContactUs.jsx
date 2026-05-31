import { useCallback, useState } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import InnerMembershipCta from './InnerMembershipCta';

export default function ContactUs() {
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
    <section className="template-page-section contact-page-section" id="contact-us" ref={sectionRef}>
      <div className="template-banner template-banner-contact reveal" data-reveal="up">
        <div className="template-banner-content">
          <h1>Get in Touch</h1>
          <nav className="template-breadcrumb" aria-label="Breadcrumb">
            <a href="#/">Home</a>
            <span>/</span>
            <span>Contact Us</span>
          </nav>
        </div>
      </div>

      <div className="template-content template-contact-grid">
        <div className="template-contact-copy reveal" data-reveal="right">
          <div className="template-heading-block">
            <span className="template-subheading">We&apos;re Here to Help!</span>
            <h2>Get in Touch with Adelux Padel Club</h2>
            <p>
              Whether you&apos;re ready to book a court, join our club, or simply have a question, our team is always available to assist you. Connect with us today and be part of the growing padel community.
            </p>
          </div>

          <div className="template-contact-list">
            <article>
              <span className="template-contact-icon" aria-hidden="true">P</span>
              <div>
                <h6>Phone Number</h6>
                <h4>+1 (800) 123-4567</h4>
              </div>
            </article>
            <article>
              <span className="template-contact-icon" aria-hidden="true">@</span>
              <div>
                <h6>Email Address</h6>
                <h4>hello@adeluxpadel.com</h4>
              </div>
            </article>
            <article>
              <span className="template-contact-icon" aria-hidden="true">H</span>
              <div>
                <h6>Opening Hours</h6>
                <h4>Mon - Fri: 08:00 AM - 10:00 PM</h4>
                <h4>Sat - Sun: 09:00 AM - 11:00 PM</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="template-contact-card reveal" data-reveal="left" data-delay="120">
          <h3>Send Us a Message</h3>
          <p>Have questions, booking inquiries, or feedback? Fill out the form below and our team will respond within 24 hours.</p>

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
              <label>
                <span>Full Name</span>
                <input type="text" name="name" placeholder="Your Name" required />
              </label>
              <label>
                <span>Email Address</span>
                <input type="email" name="email" placeholder="Your Email" required />
              </label>
            </div>
            <div className="template-form-row">
              <label>
                <span>Phone Number</span>
                <input type="tel" name="phone" placeholder="Your Phone" required />
              </label>
              <label>
                <span>Your Subject</span>
                <input type="text" name="subject" placeholder="Your Subject" required />
              </label>
            </div>
            <label>
              <span>Messages</span>
              <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
            </label>

            <button className="template-send-button" type="submit">
              <span>Send Messages</span>
              <span className="join-icon small">&#8599;</span>
            </button>
          </form>
        </div>
      </div>

      <div className="template-content template-map-wrap reveal" data-reveal="up" data-delay="180">
        <iframe
          className="template-map"
          loading="lazy"
          src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=14&output=embed&iwloc=near"
          title="London Eye, London, United Kingdom"
          aria-label="London Eye, London, United Kingdom"
        ></iframe>
      </div>

      <InnerMembershipCta compact />
    </section>
  );
}
