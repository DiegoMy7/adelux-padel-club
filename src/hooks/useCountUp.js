import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that animates a number counting up when the element is visible.
 *
 * @param {number} target - The target number to count up to
 * @param {string} suffix - A suffix to append (e.g., '+')
 * @param {number} duration - Animation duration in ms
 * @returns {{ ref: React.RefObject, displayValue: string }}
 */
export function useCountUp(target, suffix = '', duration = 1400) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(`${target}${suffix}`);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            observer.unobserve(entry.target);

            const start = performance.now();
            const step = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const value = Math.round(target * eased);
              setDisplayValue(`${value}${suffix}`);

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setDisplayValue(`${target}${suffix}`);
              }
            };

            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.55 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target, suffix, duration]);

  return { ref, displayValue };
}
