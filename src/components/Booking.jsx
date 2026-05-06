import { useEffect, useRef, useCallback } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const ARROW = '\u2197';

const bookingImages = [
  'https://images.pexels.com/photos/8224403/pexels-photo-8224403.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/6203681/pexels-photo-6203681.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/8224737/pexels-photo-8224737.jpeg?auto=compress&cs=tinysrgb&w=1200',
];

export default function Booking() {
  const sectionRef = useRevealOnScroll();
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const currentRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startTranslateRef = useRef(0);
  const currentTranslateRef = useRef(0);
  const autoTimerRef = useRef(null);

  const setTranslate = useCallback((value, withTransition = true) => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = withTransition ? 'transform 0.55s ease' : 'none';
    track.style.transform = `translate3d(${value}px, 0, 0)`;
  }, []);

  const goTo = useCallback(
    (index, withTransition = true) => {
      const slider = sliderRef.current;
      if (!slider) return;
      const count = bookingImages.length;
      currentRef.current = ((index % count) + count) % count;
      currentTranslateRef.current = -currentRef.current * slider.clientWidth;
      setTranslate(currentTranslateRef.current, withTransition);
    },
    [setTranslate]
  );

  const startAuto = useCallback(() => {
    clearInterval(autoTimerRef.current);
    autoTimerRef.current = setInterval(() => {
      if (!isDraggingRef.current) {
        goTo(currentRef.current + 1);
      }
    }, 3400);
  }, [goTo]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    goTo(0, false);
    startAuto();

    const onPointerDown = (e) => {
      isDraggingRef.current = true;
      startXRef.current = e.clientX;
      startTranslateRef.current = currentTranslateRef.current;
      slider.setPointerCapture(e.pointerId);
      setTranslate(currentTranslateRef.current, false);
      clearInterval(autoTimerRef.current);
    };

    const onPointerMove = (e) => {
      if (!isDraggingRef.current) return;
      const delta = e.clientX - startXRef.current;
      currentTranslateRef.current = startTranslateRef.current + delta;
      setTranslate(currentTranslateRef.current, false);
    };

    const endDrag = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      const width = slider.clientWidth;
      const dragged = currentTranslateRef.current + currentRef.current * width;
      const threshold = width * 0.18;

      if (dragged <= -threshold) goTo(currentRef.current + 1);
      else if (dragged >= threshold) goTo(currentRef.current - 1);
      else goTo(currentRef.current);

      startAuto();
    };

    const onResize = () => goTo(currentRef.current, false);

    slider.addEventListener('pointerdown', onPointerDown);
    slider.addEventListener('pointermove', onPointerMove);
    slider.addEventListener('pointerup', endDrag);
    slider.addEventListener('pointercancel', endDrag);
    slider.addEventListener('pointerleave', endDrag);
    window.addEventListener('resize', onResize);

    return () => {
      clearInterval(autoTimerRef.current);
      slider.removeEventListener('pointerdown', onPointerDown);
      slider.removeEventListener('pointermove', onPointerMove);
      slider.removeEventListener('pointerup', endDrag);
      slider.removeEventListener('pointercancel', endDrag);
      slider.removeEventListener('pointerleave', endDrag);
      window.removeEventListener('resize', onResize);
    };
  }, [goTo, startAuto, setTranslate]);

  return (
    <section className="booking-section light-section" id="booking" ref={sectionRef}>
      <div className="content-wrap booking-grid">
        <div className="booking-gallery">
          <div className="tag-cloud reveal" data-reveal="right">
            <span className="tag dark">No Membership</span>
            <span className="tag">Indoor &amp; Outdoor</span>
            <span className="tag">Real-Time Slot</span>
            <span className="tag">Flexible Hours</span>
            <span className="tag">Instant Access</span>
            <span className="tag">Easy Booking</span>
            <span className="tag">Night Play</span>
          </div>

          <div className="booking-slider reveal" data-reveal="right" data-delay="100" ref={sliderRef}>
            <div className="booking-track" ref={trackRef}>
              {bookingImages.map((url, i) => (
                <div key={i} className="booking-item" style={{ backgroundImage: `url('${url}')` }}></div>
              ))}
            </div>
          </div>
        </div>

        <div className="booking-copy">
          <span className="section-pill pill-light reveal" data-reveal="left">Booking Court</span>
          <h2 className="reveal" data-reveal="left" data-delay="70">Book Your Padel Court Instantly.</h2>

          <div className="booking-bottom">
            <article className="booking-card dark-card reveal" data-reveal="left" data-delay="140">
              <div className="booking-mini-icon">{'\u25A3'}</div>
              <h3>Ready to Play? Reserve Your Padel Court Today</h3>
              <a className="cta-pill compact" href="#contact">
                <span>Book a Court</span>
                <span className="join-icon small">{ARROW}</span>
              </a>
            </article>

            <div className="benefits-list reveal" data-reveal="left" data-delay="210">
              <h3>The Benefits</h3>
              <ul>
                <li>Hourly court rental with real-time availability</li>
                <li>Indoor &amp; outdoor courts with pro-level surface</li>
                <li>Lights for night play included</li>
                <li>No membership required for booking</li>
                <li>Mobile-friendly reservation system</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
