
'use client';

import { useEffect, useRef, useState } from 'react';

export default function FadeInSection({
  children,
  delayMs = 0,
  className = '',
}: {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect the user's reduced-motion preference.
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion ||
        typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setHasEntered(true);
        } else {
          // Reset after leaving the viewport so it can animate again.
          setVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -35px 0px',
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: visible ? `${delayMs}ms` : '0ms',
      }}
      className={`
        transition-[opacity,transform,filter]
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        motion-reduce:transition-none
        ${
          visible
            ? 'translate-y-0 scale-100 opacity-100 blur-0'
            : hasEntered
              ? 'translate-y-5 scale-[0.99] opacity-0 blur-[2px]'
              : 'translate-y-8 scale-[0.98] opacity-0 blur-[3px]'
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
