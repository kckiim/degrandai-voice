'use client';

import { useEffect, useRef, useState } from 'react';

const PHRASES = [
  'We make your operations run without you in the middle of everything.',
  'We cut the manual work out of your business so your team can actually move.',
  'We build real AI systems that run your operation while you focus on growth.',
  'We turn the bottlenecks slowing your team down into automated workflows.',
  'We make your front desk, follow-ups, and admin run without lifting a finger.',
  'We replace the busywork holding your business back with systems that scale.',
];

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function useTypewriter(phrases: string[]) {
  const [displayed, setDisplayed] = useState('');
  const stateRef = useRef({
    phraseIndex: 0,
    charIndex: 0,
    isDeleting: false,
    started: false,
  });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const tick = () => {
      const s = stateRef.current;
      const current = phrases[s.phraseIndex];

      if (!s.started) {
        s.started = true;
        timeoutRef.current = setTimeout(tick, 600);
        return;
      }

      if (!s.isDeleting) {
        // Typing
        s.charIndex = Math.min(s.charIndex + 1, current.length);
        setDisplayed(current.slice(0, s.charIndex));

        if (s.charIndex === current.length) {
          // Finished typing — pause then start deleting
          timeoutRef.current = setTimeout(() => {
            s.isDeleting = true;
            tick();
          }, 7000);
        } else {
          timeoutRef.current = setTimeout(tick, randomBetween(28, 58));
        }
      } else {
        // Deleting (backspace feel)
        s.charIndex = Math.max(s.charIndex - 1, 0);
        setDisplayed(current.slice(0, s.charIndex));

        if (s.charIndex === 0) {
          // Finished deleting — move to next phrase
          s.isDeleting = false;
          s.phraseIndex = (s.phraseIndex + 1) % phrases.length;
          timeoutRef.current = setTimeout(tick, 400);
        } else {
          timeoutRef.current = setTimeout(tick, randomBetween(18, 28));
        }
      }
    };

    timeoutRef.current = setTimeout(tick, 0);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [phrases]); // eslint-disable-line react-hooks/exhaustive-deps

  return displayed;
}

export default function Hero() {
  const text = useTypewriter(PHRASES);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16"
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(0,0,0,0.75)', zIndex: 1 }} />

      {/* Subtle grid on top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          zIndex: 2,
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full" style={{ zIndex: 3 }}>
        {/* Headline with typewriter */}
        <h1 className="hero-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-8 max-w-4xl">
          {text}
          <span
            style={{
              display: 'inline-block',
              width: '3px',
              height: '0.9em',
              background: '#2563eb',
              marginLeft: '4px',
              verticalAlign: 'middle',
              animation: 'blink 0.7s step-end infinite',
            }}
          />
        </h1>

        {/* Cursor blink keyframe + responsive headline height */}
        <style>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .hero-headline {
            height: 5em;
            overflow: hidden;
          }
          @media (max-width: 640px) {
            .hero-headline {
              height: auto;
              min-height: 6.6em;
              overflow: visible;
            }
          }
        `}</style>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
          Real systems for businesses tired of manual work. No slide decks, no frameworks — just working solutions.
        </p>

        {/* Label */}
        <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-6 opacity-70">
          AI &amp; Automation Consulting
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-colors duration-200 text-sm tracking-wide"
          >
            Let&apos;s Talk
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/15 hover:border-white/30 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-200 text-sm tracking-wide"
          >
            See What We Build
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600" style={{ zIndex: 3 }}>
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="animate-bounce"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
