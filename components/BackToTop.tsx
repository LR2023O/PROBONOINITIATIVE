'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-pbi-700 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-pbi-800 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 3a.75.75 0 01.53.22l6 6a.75.75 0 11-1.06 1.06L10.75 5.56V16.25a.75.75 0 01-1.5 0V5.56L4.53 10.28a.75.75 0 01-1.06-1.06l6-6A.75.75 0 0110 3z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
