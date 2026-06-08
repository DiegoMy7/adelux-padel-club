import Events from './Events';
import Academy from './Academy';
import Community from './Community';
import InnerMembershipCta from './InnerMembershipCta';
import InnerTestimonials from './InnerTestimonials';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export default function CommunityPage() {
  const sectionRef = useRevealOnScroll();

  return (
    <section className="template-page-section community-page" id="community-page" ref={sectionRef}>
      <div className="template-banner template-banner-community reveal" data-reveal="up">
        <div className="template-banner-content">
          <h1>Community</h1>
          <nav className="template-breadcrumb" aria-label="Breadcrumb">
            <a href="#/">Home</a>
            <span>/</span>
            <span>Community</span>
          </nav>
        </div>
      </div>

      <Events />
      <Academy />
      <InnerTestimonials />
      <Community />
      <InnerMembershipCta compact />
    </section>
  );
}
