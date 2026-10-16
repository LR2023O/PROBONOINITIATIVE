'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import type { GalleryImage } from '@/content/siteContent';

// Every 5th image (1st, 6th, 11th...) is featured large. On desktop the first five
// tiles fill a clean 4x2 block with no gaps.
const SPAN_PATTERN = ['col-span-2 md:row-span-2', '', '', '', ''];

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpenIndex((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length]
  );

  // Keyboard controls and page-scroll lock while the viewer is open.
  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, close, step]);

  if (images.length === 0) return null;

  const active = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <div className="grid auto-rows-[150px] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 md:auto-rows-[210px] md:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Open photo: ${img.caption || img.alt}`}
            className={`group relative overflow-hidden rounded-2xl bg-pbi-100 shadow-sm ring-1 ring-pbi-100 transition-shadow duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-pbi-500 ${
              SPAN_PATTERN[i % SPAN_PATTERN.length]
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Hover gradient + caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-pbi-900/85 via-pbi-900/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
            {img.caption && (
              <p className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left text-sm font-medium leading-snug text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                {img.caption}
              </p>
            )}

            {/* Expand icon */}
            <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-pbi-800 opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path d="M3 3h5v2H5v3H3V3zm9 0h5v5h-2V5h-3V3zM3 12h2v3h3v2H3v-5zm12 0h2v5h-5v-2h3v-3z" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {/* Full-screen viewer */}
      {active && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
          className="fixed inset-0 z-[90] flex animate-fadeIn items-center justify-center bg-pbi-900/95 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close viewer"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
          >
            ×
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 sm:left-6"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 sm:right-6"
              >
                ›
              </button>
            </>
          )}

          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex w-full max-w-5xl flex-col items-center"
          >
            <div className="relative h-[68vh] w-full">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                className="rounded-lg object-contain"
              />
            </div>
            {active.caption && (
              <figcaption className="mt-4 max-w-2xl text-center text-sm text-pbi-100">
                {active.caption}
              </figcaption>
            )}
            <p className="mt-2 text-xs text-pbi-100/60">
              {openIndex + 1} / {images.length}
            </p>
          </figure>
        </div>
      )}
    </>
  );
}
