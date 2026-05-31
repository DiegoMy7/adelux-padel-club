import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { useCountUp } from '../hooks/useCountUp';

export default function About() {
  const sectionRef = useRevealOnScroll();
  const { ref: counter1Ref, displayValue: counter1Value } = useCountUp(2022, '');
  const { ref: counter2Ref, displayValue: counter2Value } = useCountUp(100, '+');
  const { ref: counter3Ref, displayValue: counter3Value } = useCountUp(25, '+');

  return (
    <section className="about-section light-section" id="about" ref={sectionRef}>
      <div className="content-wrap two-col">
        <div className="about-visual reveal" data-reveal="right">
          <div className="about-photo"></div>
          <div className="about-highlight">
            <h3>Adelux is a premier padel destination where passion, performance, and people come together.</h3>
            <a href="#contact">Learn More <span>&#9679;</span></a>
          </div>
        </div>

        <div className="about-copy">
          <span className="section-pill pill-light reveal" data-reveal="left">About Us</span>
          <h2 className="reveal" data-reveal="left" data-delay="80">More Than Just a Padel Club, It&apos;s a Community.</h2>
          <div className="about-text reveal" data-reveal="left" data-delay="150">
            <p>At Adelux, we go beyond the game. Established with a vision to grow the padel sport, we offer world-class padel courts, certified coaches, and a welcoming community that supports every player&apos;s journey.</p>
            <p>From personal training programs to tournaments and social events, Adelux is built for those who want to improve their skills, stay active, and be part of something bigger. Whether you&apos;re joining for fun, fitness, or professional growth Adelux has something for everyone.</p>
          </div>

          <div className="stats-row reveal" data-reveal="left" data-delay="220">
            <article>
              <strong ref={counter1Ref}>{counter1Value}</strong>
              <span>Padel Found In</span>
            </article>
            <article>
              <strong ref={counter2Ref}>{counter2Value}</strong>
              <span>Matches Host</span>
            </article>
            <article>
              <strong ref={counter3Ref}>{counter3Value}</strong>
              <span>Active Members</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
