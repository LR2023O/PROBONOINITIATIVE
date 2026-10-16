'use client';

import { useState } from 'react';
import type { MiniCard } from '@/content/siteContent';

export default function SubTopicCarousel({ items }: { items: MiniCard[] }) {
  // A Set so cards in different columns can be open independently of one another.
  const [activeIds, setActiveIds] = useState<Set<number>>(new Set());

  if (items.length === 0) return null;

  function toggle(index: number) {
    setActiveIds((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    // CSS multi-column layout: each column flows on its own, so expanding a card
    // only pushes items below it in the same column.
    <div className="columns-1 gap-4 sm:columns-2">
      {items.map((item, index) => {
        const isActive = activeIds.has(index);

        return (
          <div key={`${item.title}-${index}`} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isActive}
              className={`
                group relative block w-full overflow-hidden rounded-2xl
                border bg-white text-left
                transition-all duration-300 ease-out
                focus:outline-none focus:ring-2 focus:ring-pbi-300
                ${
                  isActive
                    ? 'border-pbi-300 shadow-lg'
                    : 'border-pbi-100 shadow-sm hover:scale-[1.02] hover:border-pbi-200 hover:shadow-md'
                }
              `}
            >
              {/* Card Header */}
              <div
                className={`
                  flex items-center gap-3
                  transition-all duration-300
                  ${isActive ? 'bg-pbi-50/70 px-5 py-4' : 'px-4 py-3'}
                `}
              >
                <div
                  className={`
                    flex flex-shrink-0 items-center justify-center
                    rounded-xl text-base
                    transition-all duration-300
                    ${
                      isActive
                        ? 'h-10 w-10 bg-pbi-700 text-white shadow-sm'
                        : 'h-9 w-9 bg-pbi-100 text-pbi-700 group-hover:scale-105'
                    }
                  `}
                >
                  <span>{'\u{1F4CC}'}</span>
                </div>

                <div className="min-w-0 flex-1">
                  <h4
                    className={`
                      font-serif font-bold
                      transition-colors duration-300
                      ${
                        isActive
                          ? 'text-base text-pbi-900'
                          : 'text-sm text-pbi-800 group-hover:text-pbi-700'
                      }
                    `}
                  >
                    {item.title}
                  </h4>

                  {!isActive && (
                    <p className="mt-0.5 line-clamp-1 text-xs text-gray-400">{item.body}</p>
                  )}
                </div>

                <span
                  className={`
                    flex h-8 w-8 flex-shrink-0 items-center justify-center
                    rounded-full text-pbi-600
                    transition-all duration-300
                    ${isActive ? 'rotate-90 bg-pbi-100' : 'group-hover:translate-x-0.5'}
                  `}
                >
                  ›
                </span>
              </div>

              {/* Vertical expansion */}
              <div
                className={`
                  grid transition-[grid-template-rows,opacity]
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                `}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-pbi-100 bg-pbi-50/70 px-5 pb-5 pt-4">
                    <p className="whitespace-pre-line text-sm leading-7 text-gray-600">{item.body}</p>
                  </div>
                </div>
              </div>

              {/* Active indicator */}
              <div
                className={`
                  pointer-events-none absolute bottom-0 left-0 right-0
                  h-1 bg-pbi-700
                  transition-opacity duration-300
                  ${isActive ? 'opacity-100' : 'opacity-0'}
                `}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}
