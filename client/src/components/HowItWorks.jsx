import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const HowItWorks = ({ onStartClick }) => {
  const { language } = useLanguage();
  const t = translations[language].howItWorks;

  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-20 lg:py-24 bg-[#faf8f5]"
      aria-labelledby="how-it-works-heading"
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
            id="how-it-works-heading"
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

        {/* 3 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">

          {t.steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-3xl bg-white border border-[#e6e2db] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* Step Indicator Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-editorial-impact text-4xl text-[#f15a24]">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748b] bg-[#f3efe9] px-2.5 py-1 rounded-full">
                    Step {idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0f172a] mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Step Mini Footer */}
              <div className="pt-6 mt-6 border-t border-[#f3efe9] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#f15a24]">
                  {idx === 0 ? '4 Options' : idx === 1 ? 'UPI / QR' : 'Instant Start'}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#f15a24]"></span>
              </div>
            </div>
          ))}

        </div>

        {/* Callout Prompt */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onStartClick}
            className="inline-flex items-center gap-3 bg-[#f15a24] hover:bg-[#e04b16] text-white text-sm sm:text-base font-black px-8 py-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer"
          >
            <span>{t.actionPrompt} — START FOR ₹1</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};
