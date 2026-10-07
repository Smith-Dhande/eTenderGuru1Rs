import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const PHILOSOPHY_LOCALES = {
  en: {
    manifestoBadge: "02 — OUR PHILOSOPHY",
    manifestoSeal: "100% PRACTICAL • ZERO BROKER DEPENDENCY",
    pillarTags: ["ZERO FINANCIAL RISK", "LIVE PORTAL DEMOS", "100% SELF-RELIANT", "GROUND REALITY"],
    takeaways: [
      "No ₹15,000 upfront risk",
      "Decode live NITs directly",
      "Eliminate agent commissions",
      "Battle-tested compliance rules"
    ],
    realityCheckTitle: "THE GROUND REALITY CHECK",
    realityCheckSubtitle: "Why the conventional coaching system fails contractors",
    oldWayHeader: "Old Coaching & Middlemen",
    newWayHeader: "eTender Guru ₹1 Model",
    comparisonRows: [
      {
        aspect: "Upfront Cost",
        old: "₹10,000 – ₹25,000 fee before you even see a real portal screen",
        newWay: "₹1 symbolic token — test, inspect and learn with zero risk"
      },
      {
        aspect: "Teaching Method",
        old: "Boring textbook slides and obsolete classroom theories",
        newWay: "Live Mahatender & GeM screen walkthroughs and real NIT decoding"
      },
      {
        aspect: "Your Independence",
        old: "Keeps you reliant on third-party brokers charging heavy percentages",
        newWay: "Equips you to evaluate, prepare documents, and submit bids yourself"
      },
      {
        aspect: "Disqualification Risk",
        old: "Ignores ground compliance; 80% of bids get disqualified on minor errors",
        newWay: "Rigorous technical document preparation to ensure qualification"
      }
    ],
    actionCta: "EXPLORE ₹1 COURSES NOW",
    trustNote: "Instant WhatsApp Access • English & Marathi • 100% Practical"
  },
  mr: {
    manifestoBadge: "०२ — आमची भूमिका",
    manifestoSeal: "१००% प्रॅक्टिकल • शून्य मध्यस्थ",
    pillarTags: ["शून्य आर्थिक धोका", "थेट पोर्टल प्रॅक्टिकल", "१००% स्वावलंबन", "मैदानी वास्तव"],
    takeaways: [
      "₹१५,०००+ चा धोका नाही",
      "लाईव्ह NIT थेट समजून घ्या",
      "दलालांचे कमिशन बंद करा",
      "अचूक सरकारी नियम व खात्री"
    ],
    realityCheckTitle: "मैदानी वास्तविकता पडताळणी",
    realityCheckSubtitle: "पारंपरिक क्लासेस व दलालांची पद्धत कंत्राटदारांना मागे का ठेवते?",
    oldWayHeader: "जुने क्लासेस व मध्यस्थ",
    newWayHeader: "eTender Guru ₹१ मॉडेल",
    comparisonRows: [
      {
        aspect: "सुरुवातीची फी",
        old: "पोर्टल न पाहताच आधी ₹१०,००० ते ₹२५,००० ची जबरदस्तीची फी",
        newWay: "फक्त ₹१ चे टोकन — कोणताही आर्थिक धोका न पत्करता थेट सुरुवात"
      },
      {
        aspect: "शिकवण्याची पद्धत",
        old: "केवळ जुन्या थिअरी स्लाईड्स आणि पुस्तकी व्याख्याने",
        newWay: "लाईव्ह Mahatender व GeM स्क्रीन, प्रत्यक्ष NIT वाचन व डॉक्युमेंट्स"
      },
      {
        aspect: "स्वावलंबन",
        old: "कंत्राटदाराला कायम एजंट्स आणि दलालांवर अवलंबून ठेवणे",
        newWay: "स्वतःच्या बळावर टेंडर शोधणे, भरणे आणि जिंकण्यासाठी पूर्ण सक्षम करणे"
      },
      {
        aspect: "टेंडर बाद होण्याचा धोका",
        old: "तांत्रिक नियमांकडे दुर्लक्ष; छोट्या चुकांमुळे ८०% बिड्स बाद होतात",
        newWay: "तांत्रिक क्वालिफिकेशनचे काटेकोर ज्ञान, जेणेकरून टेंडर बाद होणार नाही"
      }
    ],
    actionCta: "₹१ कोर्सेस आताच पहा",
    trustNote: "तात्काळ ऍक्सेस • मराठी व इंग्रजी • व्हॉट्सॲपवर डिलिव्हरी"
  }
};

export const WhyOneRupee = ({ onExploreClick }) => {
  const { language } = useLanguage();
  const t = translations[language].whyOneRupee;
  const loc = PHILOSOPHY_LOCALES[language] || PHILOSOPHY_LOCALES.en;

  const [activePillar, setActivePillar] = useState(0);

  return (
    <section
      id="why-one-rupee"
      className="philosophy-section"
      aria-labelledby="philosophy-main-heading"
    >
      {/* Decorative Outlined Architectural Wordmark Layer */}
      <div className="philosophy-watermark" aria-hidden="true">
        <span>₹1 PHILOSOPHY</span>
      </div>

      <div className="section-container">
        {/* Section Header Row */}
        <div className="philosophy-header-row">
          <div>
            {/* Eyebrow */}
            <div className="courses-eyebrow-wrap">
              <span className="courses-eyebrow">{loc.manifestoBadge}</span>
            </div>

            {/* Editorial Heading */}
            <h2 className="philosophy-heading" id="philosophy-main-heading">
              <span className="philosophy-heading-serif">{t.titleSerif}</span>
              <span className="philosophy-heading-impact">{t.titleImpact}</span>
            </h2>
          </div>

          {/* Subtitle & Seal */}
          <div className="flex flex-col items-start lg:items-end gap-3 max-w-lg">
            <p className="philosophy-support-text">
              {t.support}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#e6e2db] shadow-xs text-[11px] font-bold text-[#f15a24] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#f15a24] animate-pulse"></span>
              <span>{loc.manifestoSeal}</span>
            </div>
          </div>
        </div>

        {/* Two-Plane Asymmetric Spread (NOT a standard 3/4 card grid) */}
        <div className="philosophy-spread-layout">

          {/* Left Plane: Connected Interactive Manifesto Rail */}
          <div className="manifesto-rail" role="region" aria-label="Philosophy Pillars">
            {t.reasons.map((reason, idx) => {
              const isActive = activePillar === idx;
              const tag = loc.pillarTags[idx] || "PRACTICAL STANDARD";
              const takeaway = loc.takeaways[idx] || "Direct eTender Guru Principle";

              return (
                <div
                  key={idx}
                  className={`manifesto-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActivePillar(idx)}
                  onMouseEnter={() => setActivePillar(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActivePillar(idx);
                    }
                  }}
                  aria-pressed={isActive}
                >
                  {/* Numeral Badge */}
                  <div className="manifesto-num-badge" aria-hidden="true">
                    {reason.num}
                  </div>

                  {/* Narrative Content */}
                  <div className="manifesto-content">
                    <div className="manifesto-top-meta">
                      <span className="manifesto-tag">{tag}</span>
                      <span className="manifesto-highlight-pill">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f15a24]"></span>
                        <span>Pillar {idx + 1} of 4</span>
                      </span>
                    </div>

                    <h3 className="manifesto-item-title">
                      {reason.title}
                    </h3>

                    <p className="manifesto-item-desc">
                      {reason.desc}
                    </p>

                    {/* Ground Takeaway Footer */}
                    <div className="manifesto-takeaway-bar">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f15a24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{takeaway}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Plane: Ground Reality Ledger + Obsidian Plaque */}
          <div className="philosophy-right-col">

            {/* Dossier Card: The Reality Check Comparison */}
            <div className="reality-ledger-card">
              <div className="reality-ledger-header">
                <div className="reality-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span>Scorecard</span>
                </div>
                <h3 className="reality-ledger-title">{loc.realityCheckTitle}</h3>
                <p className="reality-ledger-sub">{loc.realityCheckSubtitle}</p>
              </div>

              {/* Table Ledger Rows */}
              <div className="reality-table">
                {loc.comparisonRows.map((row, rIdx) => (
                  <div key={rIdx} className="reality-row">
                    <div className="reality-row-label">
                      {row.aspect}
                    </div>
                    <div className="reality-comparison-split">
                      <div className="reality-cell-old">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                        <span>{row.old}</span>
                      </div>
                      <div className="reality-cell-new">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{row.newWay}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Obsidian Plaque: Founder's Certified Mission */}
            <div className="philosophy-obsidian-card">
              <span className="philosophy-quote-mark" aria-hidden="true">“</span>
              <p className="philosophy-quote-text">
                {t.quote}
              </p>

              <div className="philosophy-author-wrap">
                <div className="philosophy-author-info">
                  <div className="philosophy-author-avatar">TG</div>
                  <div>
                    <p className="philosophy-author-name">{t.quoteAuthor}</p>
                    <p className="philosophy-author-role">eTender Guru • Ground Practice</p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#f15a24] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#f15a24]"></span>
                  <span>Verified</span>
                </div>
              </div>

              {/* Seamless Action Button linking down to courses */}
              <button
                type="button"
                onClick={onExploreClick}
                className="philosophy-cta-btn"
                aria-label={loc.actionCta}
              >
                <span>{loc.actionCta}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <div className="philosophy-trust-pills">
                <span>{loc.trustNote}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
