import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const WhyOneRupee = ({ onExploreClick }) => {
  const { language } = useLanguage();
  const t = translations[language].whyOneRupee;

  return (
    <section
      id="why-one-rupee"
      className="py-16 sm:py-20 lg:py-24 bg-[#f3efe9]/60 border-y border-[#e6e2db]"
      aria-labelledby="why-heading"
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
            id="why-heading"
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

        {/* 4 Architectural Matrix Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {t.reasons.map((reason, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[#e6e2db] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-editorial-impact text-2xl text-[#f15a24]">
                    {reason.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#fff5f0] flex items-center justify-center text-[#f15a24] group-hover:scale-110 transition-transform">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0f172a] mb-2.5">
                  {reason.title}
                </h3>

                <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
                  {reason.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f3efe9] flex items-center gap-2 text-xs font-semibold text-[#f15a24]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f15a24]"></span>
                <span>Practical eTender Guru Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Quote Box */}
        <div className="rounded-3xl bg-[#0f172a] text-white p-8 sm:p-10 lg:p-12 relative overflow-hidden text-left shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <span className="font-editorial-serif text-5xl sm:text-6xl text-[#f15a24] block leading-none mb-2">
              “
            </span>
            <p className="font-editorial-serif text-lg sm:text-2xl text-white/95 leading-relaxed italic mb-6">
              {t.quote}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f15a24] flex items-center justify-center text-white font-bold text-sm">
                TG
              </div>
              <div>
                <p className="font-bold text-sm sm:text-base text-white">
                  {t.quoteAuthor}
                </p>
                <p className="text-xs text-white/70">
                  Government Tender Expert & Consultant
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
