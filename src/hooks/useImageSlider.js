import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Custom hook for a simple image slider that preloads images and cycles through them.
 *
 * @param {string[]} urls - Array of image URLs
 * @param {number} interval - Interval between slides in ms
 * @param {string} overlay - Optional CSS gradient overlay
 * @returns {{ slideRef: React.RefObject, currentUrl: string }}
 */
export function useImageSlider(urls, interval = 6000, overlay = '') {
  const slideRef = useRef(null);
  const [loadedUrls, setLoadedUrls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload images
  useEffect(() => {
    let cancelled = false;

    const preload = async () => {
      const results = await Promise.all(
        urls.map(
          (url) =>
            new Promise((resolve) => {
              const img = new Image();
              img.onload = () => resolve(url);
              img.onerror = () => resolve(null);
              img.src = url;
            })
        )
      );

      if (!cancelled) {
        setLoadedUrls(results.filter(Boolean));
      }
    };

    preload();
    return () => { cancelled = true; };
  }, [urls]);

  // Set background on the slide element
  const setSlide = useCallback(
    (index) => {
      const el = slideRef.current;
      if (!el || !loadedUrls.length) return;

      const url = loadedUrls[index];
      el.classList.remove('is-current');
      el.style.backgroundImage = `${overlay}url("${url}")`;
      void el.offsetWidth; // force reflow
      el.classList.add('is-current');
    },
    [loadedUrls, overlay]
  );

  // Initial slide
  useEffect(() => {
    if (loadedUrls.length) {
      setSlide(0);
    }
  }, [loadedUrls, setSlide]);

  // Auto-rotate
  useEffect(() => {
    if (loadedUrls.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % loadedUrls.length;
        setSlide(next);
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [loadedUrls, interval, setSlide]);

  return { slideRef, currentUrl: loadedUrls[currentIndex] || '' };
}
