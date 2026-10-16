'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Wraps children and reveals them with a subtle fade/slide-up animation
 * the first time they scroll into view.
 */
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

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ animationDelay: visible ? `${delayMs}ms` : undefined }}
      className={`${visible ? 'animate-fadeInUp' : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  );
}
