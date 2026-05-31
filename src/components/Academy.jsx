import { useEffect, useRef, useState, useCallback } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { useCountUp } from '../hooks/useCountUp';

const ARROW = '\u2197';

export default function Academy() {
  const sectionRef = useRevealOnScroll();
  const academySectionRef = useRef(null);
  const videoFrameRef = useRef(null);
  const playerRef = useRef(null);
  const playerReadyRef = useRef(false);
  const observerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { ref: counter1Ref, displayValue: counter1Value } = useCountUp(150, '+');
  const { ref: counter2Ref, displayValue: counter2Value } = useCountUp(30, '+');
  const { ref: counter3Ref, displayValue: counter3Value } = useCountUp(85, '+');

  const handleVideoAction = useCallback((action) => {
    if (!playerReadyRef.current || !playerRef.current) return;

    const player = playerRef.current;
    const currentTime = (player.getCurrentTime && player.getCurrentTime()) || 0;

    if (action === 'rewind') {
      player.seekTo(Math.max(currentTime - 10, 0), true);
    } else if (action === 'forward') {
      player.seekTo(currentTime + 10, true);
    } else if (action === 'toggle') {
      const state = player.getPlayerState && player.getPlayerState();
      const playing = state === (window.YT && window.YT.PlayerState && window.YT.PlayerState.PLAYING);
      if (playing) {
        player.pauseVideo();
        setIsPlaying(false);
      } else {
        player.playVideo();
        setIsPlaying(true);
      }
    }
  }, []);

  useEffect(() => {
    const playerElement = document.getElementById('academyYoutubePlayer');
    if (!playerElement) return;

    const isHttpContext =
      window.location.protocol === 'http:' || window.location.protocol === 'https:';
    const playerVars = {
      playsinline: 1,
      controls: 0,
      rel: 0,
      modestbranding: 1,
      iv_load_policy: 3,
      fs: 0,
    };
    if (isHttpContext) {
      playerVars.origin = window.location.origin;
    }

    const initPlayer = () => {
      playerRef.current = new window.YT.Player('academyYoutubePlayer', {
        videoId: '8aYr-ChFuFc',
        playerVars,
        events: {
          onReady: () => {
            playerReadyRef.current = true;
            setIsReady(true);
            setHasError(false);

            if (academySectionRef.current && !observerRef.current) {
              observerRef.current = new IntersectionObserver(
                (entries) => {
                  entries.forEach((entry) => {
                    if (!playerReadyRef.current || !playerRef.current) return;
                    if (entry.isIntersecting) {
                      playerRef.current.mute();
                      playerRef.current.playVideo();
                      setIsPlaying(true);
                    } else {
                      playerRef.current.pauseVideo();
                      setIsPlaying(false);
                    }
                  });
                },
                { threshold: 0.45 }
              );
              observerRef.current.observe(academySectionRef.current);
            }
          },
          onStateChange: (event) => {
            const ytPlaying = window.YT && window.YT.PlayerState && window.YT.PlayerState.PLAYING;
            setIsPlaying(event.data === ytPlaying);
          },
          onError: () => {
            playerReadyRef.current = false;
            setIsReady(false);
            setHasError(true);
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.head.append(script);
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const frameClasses = [
    'video-frame',
    isPlaying ? 'is-playing' : '',
    isReady ? 'is-ready' : '',
    hasError ? 'has-error' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className="academy-section" id="academy" ref={academySectionRef}>
      <div className="content-wrap academy-shell reveal" data-reveal="right" ref={sectionRef}>
        <div className="academy-top">
          <div className="academy-intro">
            <span className="section-pill academy-pill">School &amp; Academy</span>
            <h2>Build Your Skills with Our Padel Academy</h2>
          </div>
          <div className="academy-figure"></div>
          <div className="academy-side">
            <p>From beginners to future pros our structured training programs are designed for every age and skill level. Join certified coaches and elevate your game.</p>
            <a className="cta-pill" href="#contact">
              <span>Explore our Programs</span>
              <span className="join-icon small">{ARROW}</span>
            </a>
          </div>
        </div>

        <div className="academy-stats">
          <article>
            <strong ref={counter1Ref}>{counter1Value}</strong>
            <h3>Students Trained to Competitive Level</h3>
            <p>Our academy has successfully trained over 150 players who now compete in regional and national tournaments.</p>
          </article>
          <article>
            <strong ref={counter2Ref}>{counter2Value}</strong>
            <h3>National Certifications &amp; Recognitions</h3>
            <p>Adelux Academy is officially recognized by 3 national-level padel and sports development organizations.</p>
          </article>
          <article>
            <strong ref={counter3Ref}>{counter3Value}</strong>
            <h3>Championship Won by Our Coaches</h3>
            <p>Our coaching team has collectively earned 12 prestigious padel championship titles a testament to their expertise.</p>
          </article>
        </div>

        <div className="academy-video">
          <div className={frameClasses} ref={videoFrameRef}>
            <div id="academyYoutubePlayer" className="academy-video-player" aria-label="Padel academy video"></div>
            <div className="academy-video-controls" aria-label="Video controls">
              <button type="button" className="academy-control-btn" aria-label="Retroceder 10 segundos" onClick={() => handleVideoAction('rewind')}>&#9664;</button>
              <button type="button" className="academy-control-btn play-toggle" aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'} onClick={() => handleVideoAction('toggle')}>
                {isPlaying ? <>&lsaquo;&lsaquo;</> : <>&#9654;</>}
              </button>
              <button type="button" className="academy-control-btn" aria-label="Avanzar 10 segundos" onClick={() => handleVideoAction('forward')}>&#9654;</button>
            </div>
            <a className="academy-video-fallback" href="https://www.youtube.com/watch?v=8aYr-ChFuFc" target="_blank" rel="noopener noreferrer">Ver video en YouTube</a>
          </div>

          <div className="academy-features">
            <div>
              <span>Beginner &amp; Intermediate Classes</span>
              <span>Kids &amp; Teens Training Program</span>
              <span>Private Coaching Sessions</span>
            </div>
            <div>
              <span>Group Technique Workshops</span>
              <span>Fitness &amp; Game Strategy</span>
              <span>Certified Professional Coaches</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
