import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const FinalCTA = ({ onExploreClick }) => {
  const { language } = useLanguage();
  const t = translations[language].finalCta;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#faf8f5] relative overflow-hidden">
      <div className="site-container">
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-[#f15a24] via-[#ea580c] to-[#c2410c] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl text-left">

          {/* Architectural Background Circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-xl pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-black/10 blur-xl pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 max-w-2xl">
            {/* Eyebrow */}
            <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              {t.eyebrow}
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
              <span className="block font-editorial-serif text-white">
                {t.titleSerif}
              </span>
              <span className="block font-editorial-impact text-amber-200 uppercase tracking-wide mt-1">
                {t.titleImpact}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8">
              {t.subtitle}
            </p>

            {/* Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center gap-3 bg-white hover:bg-amber-100 text-[#0f172a] hover:text-[#f15a24] font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{t.ctaBtn}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <span className="text-xs text-white/80 font-medium">
                {t.priceNotice}
              </span>
            </div>

            {/* Mini Trust Note */}
            <div className="mt-8 pt-6 border-t border-white/20 text-xs text-white/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>{t.instantAccess}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
