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

        {/* Section Header Row (Exact Reference Split Headline & Support Column) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 text-left">
          {/* Left Column: Eyebrow + Serif/Impact Title */}
          <div className="max-w-xl">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#f15a24] block mb-2">
              {t.eyebrow}
            </span>
            <h2 id="founder-heading" className="leading-[1.04]">
              <span className="font-editorial-serif text-[#0f172a] text-3xl sm:text-4xl lg:text-[46px] block font-normal tracking-tight">
                {t.titleSerif}
              </span>
              <span className="font-editorial-impact text-[#0f172a] text-4xl sm:text-5xl lg:text-[56px] block tracking-wide mt-1">
                {t.titleImpact}
                <span className="text-[#f15a24]">.</span>
              </span>
            </h2>
          </div>

          {/* Right Column: Subtle Divider & Support Narrative */}
          <div className="md:max-w-md lg:max-w-lg border-l-2 border-[#cbd5e1] pl-5 sm:pl-6 py-1">
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
              {t.support}
            </p>
          </div>
        </div>

        {/* Main Stage Enclosing Card (Exact Reference White Box Container) */}
        <div className="bg-white rounded-[28px] sm:rounded-[36px] border border-[#e6e2db] p-6 sm:p-8 lg:p-10 shadow-sm text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

            {/* Left Column: Portrait Card with Floating Title & Badge Overlay */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs flex flex-col justify-end bg-[#0f172a]">
                <img
                  src="/owner&founder/image.png"
                  alt={t.roleTitle}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy"
                />

                {/* Smooth Dark Vignette / Gradient Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Overlaid Bottom Details Bar */}
                <div className="relative z-10 p-5 sm:p-6 flex flex-col gap-2">
                  <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
                    {t.roleTitle}
                  </h3>
                  <div className="w-fit">
                    <span className="inline-block bg-black/60 backdrop-blur-md text-[#f15a24] text-[11px] sm:text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg border border-white/10">
                      {t.experienceTag}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative, Quote, 4 Pillars Matrix, and Dual CTA Buttons */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">

              {/* Narrative & Quote */}
              <div className="space-y-4 sm:space-y-5">
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  {t.bio1}
                </p>

                {/* Quote Box with Orange Accent Border */}
                <blockquote className="p-4 sm:p-5 rounded-xl bg-[#fff8f5] border border-[#f15a24]/20 border-l-4 border-l-[#f15a24] shadow-2xs">
                  <p className="font-editorial-serif italic text-sm sm:text-base text-[#0f172a] leading-relaxed">
                    <span className="text-[#f15a24] font-serif text-lg font-bold not-italic mr-1.5">“</span>
                    {t.quote}
                  </p>
                </blockquote>
              </div>

              {/* 4 Pillars Matrix (Porcelain-tinted 2x2 Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {t.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-4.5 rounded-xl bg-[#f5f2eb] border border-[#e8e4dc] text-left hover:border-[#f15a24]/30 transition-colors"
                  >
                    <span className="font-editorial-impact text-base text-[#f15a24] block mb-1">
                      0{idx + 1}
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-[#0f172a] mb-1.5 leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#64748b] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="https://wa.me/918459461239?text=Hello%20eTender%20Guru%2C%20I%20want%20to%20connect%20with%20the%20instructor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#f15a24] hover:bg-[#e04b16] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 sm:px-7 py-3.5 rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  {t.connectBtn || 'CONNECT WITH INSTRUCTOR'}
                </a>

                <button
                  type="button"
                  onClick={onExploreClick}
                  className="inline-flex items-center justify-center bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 sm:px-7 py-3.5 rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  {t.exploreBtn || 'EXPLORE ALL COURSES'}
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
