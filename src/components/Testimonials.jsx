import { useState, useCallback } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const sectionRef = useRevealOnScroll();
  const [currentIndex, setCurrentIndex] = useState(0);

  const item = testimonials[currentIndex];

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  return (
    <section className="testimonials-section light-section" ref={sectionRef}>
      <div className="content-wrap">
        <div className="events-head centered reveal" data-reveal="right">
          <span className="section-pill pill-light">Testimonials</span>
          <h2>What Our Members Say</h2>
        </div>

        <div className="testimonials-stage reveal" data-reveal="left">
          <div className="avatar-float avatar-a"></div>
          <div className="avatar-float avatar-b"></div>
          <div className="avatar-float avatar-c"></div>
          <div className="avatar-float avatar-d"></div>
          <div className="avatar-float avatar-e"></div>
          <div className="avatar-float avatar-f"></div>

          <div className="testimonial-card">
            <div className="testimonial-world" aria-hidden="true"></div>
            <p className="testimonial-quote">{item.quote}</p>
            <div className="testimonial-nav">
              <button type="button" aria-label="Previous testimonial" onClick={goToPrev}>&#8592;</button>
              <button type="button" aria-label="Next testimonial" onClick={goToNext}>&#8594;</button>
            </div>
            <div className="testimonial-person">
              <div className="avatar-float avatar-main" style={{ backgroundImage: `url("${item.image}")` }}></div>
              <h3>{item.name}</h3>
              <span>{item.role}</span>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <span key={i} className={i === currentIndex ? 'active' : ''}></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
