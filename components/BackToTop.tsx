
'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    function updateScroll() {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;

        const progress =
          scrollableHeight > 0
            ? Math.min(100, Math.max(0, (scrollTop / scrollableHeight) * 100))
            : 0;

        setVisible(scrollTop > 400);
        setScrollProgress(progress);

        ticking = false;
      });
    }

    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);

    updateScroll();

    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={`Back to top. ${Math.round(scrollProgress)}% page progress`}
      title="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`
        fixed bottom-6 right-6 z-50
        flex h-12 w-12 items-center justify-center
        rounded-full bg-pbi-800 text-white
        shadow-lg shadow-pbi-900/20
        transition-[opacity,transform,background-color,box-shadow]
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-1 hover:bg-pbi-700 hover:shadow-xl
        active:scale-90
        focus-visible:outline-none
        focus-visible:ring-4 focus-visible:ring-pbi-300
        ${
          visible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-8 scale-75 opacity-0'
        }
        motion-reduce:transition-none
      `}
    >
      {/* Scroll progress ring */}
      <svg
        className="absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="21"
          stroke="currentColor"
          strokeOpacity="0.2"
          strokeWidth="2"
        />

        <circle
          cx="24"
          cy="24"
          r="21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={2 * Math.PI * 21}
          strokeDashoffset={
            2 * Math.PI * 21 * (1 - scrollProgress / 100)
          }
          className="transition-[stroke-dashoffset] duration-150 ease-linear"
        />
      </svg>

      {/* Arrow icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 3a.75.75 0 01.53.22l6 6a.75.75 0 11-1.06 1.06L10.75 5.56V16.25a.75.75 0 01-1.5 0V5.56L4.53 10.28a.75.75 0 01-1.06-1.06l6-6A.75.75 0 0110 3z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
