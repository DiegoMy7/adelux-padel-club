import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
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
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';

function getRouteFromHash() {
  const route = window.location.hash.replace('#/', '');
  if (route === 'about' || route === 'contact') return route;
  return 'home';
}

export default function App() {
  const [route, setRoute] = useState(getRouteFromHash);

  useEffect(() => {
    const handleRouteChange = () => {
      const hash = window.location.hash;
      setRoute(getRouteFromHash());

      window.setTimeout(() => {
        if (hash && !hash.startsWith('#/')) {
          document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
          return;
        }

        window.scrollTo({ top: 0, behavior: 'auto' });
      }, 0);
    };

    window.addEventListener('hashchange', handleRouteChange);
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

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

  if (route === 'about') {
    return (
      <main className="page-shell">
        <div className="subpage-nav-wrap">
          <Navbar />
        </div>
        <AboutUs />
        <Footer />
      </main>
    );
  }

  if (route === 'contact') {
    return (
      <main className="page-shell">
        <div className="subpage-nav-wrap">
          <Navbar />
        </div>
        <ContactUs />
        <Footer />
      </main>
    );
  }

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
