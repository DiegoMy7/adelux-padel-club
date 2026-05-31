import { useCallback, useState } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const ASSET_BASE = '/adelux-assets';
const ARROW_LEFT = '\u2190';
const ARROW_RIGHT = '\u2192';

const testimonials = [
  {
    quote: '"This is by far the best padel club I\'ve ever joined. Great atmosphere, well-maintained courts, and a real sense of community. Highly recommended!"',
    image: 'young-bearded-man-portrait-outdoors-in-the-mountai-6Z46ZMB.jpg',
    name: 'James Miller',
    role: 'Fitness Enthusiasts',
  },
  {
    quote: '"From the first visit, I felt welcomed. Booking a court is easy, and the coaching programs are top-notch. It\'s a great place to improve."',
    image: 'attractive-happy-woman-in-red-dress-smiling-outdoo-UW49SNL.jpg',
    name: 'Elena Gomez',
    role: 'Business Consultant',
  },
  {
    quote: '"From the first visit, I felt welcomed. Booking a court is easy, and the coaching programs are top-notch. It\'s a great place to improve."',
    image: 'the-smile-that-city-living-gave-portrait-of-a-conf-JTBTDGD.jpg',
    name: 'Daniel Carter',
    role: 'University Student',
  },
  {
    quote: '"A fantastic place to train, play, and socialize. The academy helped boost my skills, and the community is both diverse and inspiring."',
    image: 'young-asian-teenager-woman-vlog-at-home-female-usi-XHTT2JT.jpg',
    name: 'Sophia Bennet',
    role: 'Marketing Executive',
  },
  {
    quote: '"What I love most is the flexibility and the quality of the courts. Whether you\'re a beginner or a pro, there\'s something here for everyone."',
    image: 'close-up-of-young-man-smiling-outdoors-DELEX88.jpg',
    name: 'Mark Tunner',
    role: 'Software Developer',
  },
  {
    quote: '"This club takes padel seriously and makes it fun too! I\'ve attended several tournaments and always walk away with great experiences."',
    image: 'black-carefree-woman-laughing-QY76GB7.jpg',
    name: 'Isabella Collins',
    role: 'Creative Director',
  },
];

const sideImages = {
  left: [
    ['young-bearded-man-portrait-outdoors-in-the-mountai-6Z46ZMB.jpg', 'lg', 'end'],
    ['attractive-happy-woman-in-red-dress-smiling-outdoo-UW49SNL.jpg', 'sm', 'center'],
    ['the-smile-that-city-living-gave-portrait-of-a-conf-JTBTDGD.jpg', 'md', 'end'],
  ],
  right: [
    ['young-asian-teenager-woman-vlog-at-home-female-usi-XHTT2JT.jpg', 'md', 'start'],
    ['close-up-of-young-man-smiling-outdoors-DELEX88.jpg', 'lg', 'center'],
    ['black-carefree-woman-laughing-QY76GB7.jpg', 'sm', 'start'],
  ],
};

function TestimonialSide({ position }) {
  return (
    <div className={`template-testimonial-side ${position}`} aria-hidden="true">
      {sideImages[position].map(([image, size, align]) => (
        <img
          className={`template-testimonial-avatar ${size} align-${align}`}
          src={`${ASSET_BASE}/${image}`}
          alt=""
          key={image}
        />
      ))}
    </div>
  );
}

export default function InnerTestimonials() {
  const sectionRef = useRevealOnScroll();
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];

  const goToPrev = useCallback(() => {
    setCurrentIndex((index) => (index - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % testimonials.length);
  }, []);

  return (
    <section className="template-testimonial-section" ref={sectionRef}>
      <div className="template-content">
        <div className="template-testimonial-heading reveal" data-reveal="right">
          <span className="template-subheading">Testimonials</span>
          <h2>What Our Members Say</h2>
        </div>

        <div className="template-testimonial-content reveal" data-reveal="left" data-delay="100">
          <TestimonialSide position="left" />

          <article className="template-testimonial-card">
            <div className="template-testimonial-controls">
              <button type="button" aria-label="Previous testimonial" onClick={goToPrev}>{ARROW_LEFT}</button>
              <button type="button" aria-label="Next testimonial" onClick={goToNext}>{ARROW_RIGHT}</button>
            </div>

            <div className="template-testimonial-slide" key={current.name}>
              <p>{current.quote}</p>
              <img src={`${ASSET_BASE}/${current.image}`} alt={current.name} />
              <span className="template-testimonial-name">{current.name}</span>
              <span className="template-testimonial-role">{current.role}</span>
            </div>

            <div className="template-testimonial-dots" aria-hidden="true">
              {testimonials.map((item, index) => (
                <button
                  className={index === currentIndex ? 'active' : ''}
                  key={item.name}
                  type="button"
                  tabIndex="-1"
                  onClick={() => setCurrentIndex(index)}
                ></button>
              ))}
            </div>
          </article>

          <TestimonialSide position="right" />
        </div>
      </div>
    </section>
  );
}
