import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const FAQSection = () => {
  const { language } = useLanguage();
  const t = translations[language].faq;
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 lg:py-24 bg-[#f3efe9]/50 border-t border-[#e6e2db]"
      aria-labelledby="faq-heading"
    >
      <div className="site-container">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#f15a24]">
              {t.eyebrow}
            </span>
            <span className="h-0.5 w-8 bg-[#f15a24]" aria-hidden="true"></span>
          </div>

          {/* Heading */}
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4"
          >
            <span className="font-editorial-serif text-[#0f172a] mr-2">
              {t.titleSerif}
            </span>
            <span className="font-editorial-impact text-[#f15a24] uppercase tracking-wide">
              {t.titleImpact}
            </span>
          </h2>

          <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
            {t.support}
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl space-y-3.5 text-left">
          {t.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-btn-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen ? 'border-[#f15a24] shadow-md ring-1 ring-[#f15a24]/10' : 'border-[#e6e2db] hover:border-[#cbd5e1]'
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full py-4.5 px-6 flex items-center justify-between gap-4 text-left font-bold text-base sm:text-lg text-[#0f172a] hover:text-[#f15a24] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f15a24] cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="leading-snug">{item.q}</span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#f15a24] text-white rotate-180'
                        : 'bg-[#f3efe9] text-[#64748b]'
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#475569] leading-relaxed border-t border-[#f3efe9] animate-in fade-in duration-150"
                  >
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
