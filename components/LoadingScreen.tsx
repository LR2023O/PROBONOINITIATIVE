'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

/** How long the loading screen stays up (ms) before it fades away. Change freely. */
const DISPLAY_MS = 3200;
const FADE_MS = 600;

export default function LoadingScreen({
  orgName,
  messages,
}: {
  orgName: string;
  messages: string[];
}) {
  const [phase, setPhase] = useState<'showing' | 'fading' | 'gone'>('showing');

  useEffect(() => {
    // Stop the page scrolling behind the overlay while it is up.
    document.body.style.overflow = 'hidden';

    const fadeTimer = setTimeout(() => setPhase('fading'), DISPLAY_MS);
    const goneTimer = setTimeout(() => {
      setPhase('gone');
      document.body.style.overflow = '';
    }, DISPLAY_MS + FADE_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(goneTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (phase === 'gone') return null;

  const step = 4.5 / Math.max(messages.length, 1);

  return (
    <div
      aria-live="polite"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-pbi-900 transition-opacity ease-out ${
        phase === 'fading' ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <Image
        src="/logo.png"
        alt={orgName}
        width={96}
        height={96}
        priority
        className="mb-7 animate-pulse rounded-full shadow-xl"
      />

      <div className="mb-5 h-1.5 w-56 overflow-hidden rounded-full bg-pbi-700/50">
        <div className="h-full w-1/3 animate-loadingBar rounded-full bg-white" />
      </div>

      <div className="mb-3 flex gap-1.5">
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            style={{ animationDelay: `${delay}ms` }}
            className="h-1.5 w-1.5 animate-bounceDot rounded-full bg-pbi-100/80"
          />
        ))}
      </div>

      <div className="relative h-5 w-72 text-center">
        {messages.map((message, i) => (
          <p
            key={message}
            style={{ animationDelay: `${i * step}s` }}
            className="absolute inset-0 animate-cycleText text-sm font-medium tracking-wide text-pbi-100/80 opacity-0"
          >
            {message}
          </p>
        ))}
      </div>
    </div>
  );
}
