import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const FounderSection = ({ onExploreClick }) => {
  const { language } = useLanguage();
  const t = translations[language].founder;

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-[#faf8f5] border-t border-[#e6e2db]"
      aria-labelledby="founder-heading"
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
            id="founder-heading"
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

        {/* Main Stage Grid: Left Portrait + Right Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">

          {/* Left Column: Portrait & Credential Badge */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden border border-[#e6e2db] bg-white shadow-lg">
              <div className="aspect-4/5 w-full overflow-hidden bg-[#f3efe9]">
                <img
                  src="/owner&founder/image.png"
                  alt={t.roleTitle}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Overlaid Bottom Details Bar */}
              <div className="p-5 bg-white border-t border-[#e6e2db] flex flex-col gap-1">
                <span className="text-base font-bold text-[#0f172a]">
                  {t.roleTitle}
                </span>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-xs font-semibold text-[#f15a24] bg-[#fff5f0] border border-[#f15a24]/20 px-2.5 py-0.5 rounded-full">
                    {t.experienceTag}
                  </span>
                  <span className="text-xs font-medium text-[#475569] bg-[#f3efe9] px-2.5 py-0.5 rounded-full">
                    {t.verifiedTag}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Quote, 4 Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between">

            {/* Narrative & Quote */}
            <div className="mb-8">
              <p className="text-base sm:text-lg text-[#0f172a] font-medium leading-relaxed mb-4">
                {t.bio1}
              </p>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                {t.bio2}
              </p>

              {/* Quote Box */}
              <blockquote className="p-5 sm:p-6 rounded-2xl bg-[#fff5f0] border-l-4 border-[#f15a24] shadow-xs">
                <p className="font-editorial-serif italic text-base sm:text-lg text-[#0f172a] leading-relaxed">
                  “{t.quote}”
                </p>
              </blockquote>
            </div>

            {/* 4 Pillars Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {t.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#e6e2db] shadow-xs hover:border-[#f15a24]/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-editorial-impact text-base text-[#f15a24]">
                      0{idx + 1}
                    </span>
                    <span className="h-0.5 w-4 bg-[#f15a24]" aria-hidden="true"></span>
                    <h4 className="font-bold text-sm text-[#0f172a]">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2.5 bg-[#f15a24] hover:bg-[#e04b16] text-white text-sm sm:text-base font-black px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>{t.ctaBtn}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
