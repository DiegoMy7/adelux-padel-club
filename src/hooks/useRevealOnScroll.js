import { useEffect, useRef } from 'react';

/**
 * Custom hook that adds a reveal animation class when the element scrolls into view.
 * Uses IntersectionObserver for efficient scroll detection.
 *
 * @param {Object} options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for the observer
 * @returns {React.RefObject} ref to attach to the target element
 */
export function useRevealOnScroll({ threshold = 0.18, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    // Observe the main element and all children with .reveal
    const revealElements = element.querySelectorAll('.reveal');
    revealElements.forEach((el) => {
      const delay = el.dataset.delay;
      if (delay) {
        el.style.setProperty('--delay', `${delay}ms`);
      }
      observer.observe(el);
    });

    // Also observe the element itself if it has .reveal
    if (element.classList.contains('reveal')) {
      const delay = element.dataset.delay;
      if (delay) {
        element.style.setProperty('--delay', `${delay}ms`);
      }
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
