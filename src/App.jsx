import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Services from './components/Services';
import Booking from './components/Booking';
import Academy from './components/Academy';
import Events from './components/Events';
import Community from './components/Community';
import Testimonials from './components/Testimonials';
import Membership from './components/Membership';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  // Parallax effect for hero background
  useEffect(() => {
    const heroBackground = document.querySelector('.hero-bg');

    const updateParallax = () => {
      if (!heroBackground) return;
      const offset = Math.min(window.scrollY * 0.08, 42);
      heroBackground.style.transform = `scale(1.02) translate3d(0, ${offset}px, 0)`;
    };

    updateParallax();
    window.addEventListener('scroll', updateParallax, { passive: true });
    return () => window.removeEventListener('scroll', updateParallax);
  }, []);

  return (
    <main className="page-shell">
      <Hero />
      <About />
      <WhyChoose />
      <Services />
      <Booking />
      <Academy />
      <Events />
      <Community />
      <Testimonials />
      <Membership />
      <Blog />
      <Footer />
    </main>
  );
}
