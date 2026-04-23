import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";

const CARDS = [
  {
    eyebrow: "EXCLUSIVITY",
    title: "100\nCompanies",
    desc: "We onboard  100 companies manually. Because real results need real attention.",
    points: [
      "Personalized setup",
      "Deep onboarding",
      "Real results",
    ],
  },
  {
    eyebrow: "OUR PROCESS",
    title: "Proven\nSystem",
    desc: "Every successful engagement\nfollows the same rigorous\nmethodology.",
    points: [
      "Discovery call",
      "Custom blueprint",
      "Hands-on build",
    ],
  },
  {
    eyebrow: "THE OUTCOME",
    title: "40%\nGain",
    desc: "Measurable impact within 90\ndays or we keep working\nuntil you see it.",
    points: [
      "Founder access",
      "Small batches",
      "Proven outcomes",
    ],
  },
];

export default function NotebookExclusivity() {
  const [activeCard, setActiveCard] = useState(-1);

  useEffect(() => {
    // Only cycle automatically on mobile (< 768px)
    const checkMobileAndCycle = () => {
      if (window.innerWidth < 768) {
        setActiveCard((prev) => (prev + 1) % CARDS.length);
      } else {
        setActiveCard(-1);
      }
    };

    if (window.innerWidth < 768) {
      setActiveCard(0);
    }

    const interval = setInterval(checkMobileAndCycle, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-4 py-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CARDS.map((card, idx) => {
            const isActive = activeCard === idx;
            return (
            <div
              key={idx}
              className={`group relative h-[320px] sm:h-[340px] overflow-hidden rounded-[2rem] border border-purple-500 bg-white shadow-xl shadow-slate-200/50 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-900/20 ${isActive ? 'shadow-2xl shadow-purple-900/20' : ''}`}
            >
              {/* Default State Container */}
              <div className={`absolute inset-0 px-8 pt-16 sm:px-10 sm:pt-20 flex flex-col items-center justify-start transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? '-translate-y-full' : 'group-hover:-translate-y-full'}`}>
                <span className="mb-4 text-[11px] font-black tracking-[0.2em] uppercase bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
                  {card.eyebrow}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 text-center mb-4 leading-[1.1] whitespace-pre-line">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-center text-sm md:text-base px-2 whitespace-pre-line">
                  {card.desc}
                </p>
              </div>

              {/* Shutter Layer (Slides up from bottom) */}
              <div className={`absolute inset-0 bg-slate-950 p-6 sm:p-10 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`}>
                {/* Background glow for shutter */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(192,132,252,0.15),transparent_70%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(192,132,252,0.15),transparent_70%)] pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full items-center">
                  {/* Heading that moves up to the top of the shutter */}
                  <div className={`mb-4 sm:mb-8 flex flex-col items-center text-center transform transition-all duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>
                    <span className="mb-2 block text-[11px] font-black tracking-[0.2em] uppercase text-fuchsia-400">
                      {card.eyebrow}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white whitespace-pre-line">
                      {card.title}
                    </h3>
                    {/* Add a subtle divider */}
                    <div className="mt-4 sm:mt-6 h-px w-24 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />
                  </div>

                  {/* 3 Points */}
                  <ul className="space-y-3 sm:space-y-5 flex-1 flex flex-col justify-center mb-2 sm:mb-4">
                    {card.points.map((pt, i) => (
                      <li
                        key={i}
                        className={`flex items-center gap-4 transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}
                        style={{ transitionDelay: `${150 + (i * 100)}ms` }}
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20">
                          <Check className="h-4 w-4 text-fuchsia-400" strokeWidth={3} />
                        </span>
                        <span className="text-slate-300 font-medium text-base sm:text-lg">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );})}
        </div>
      </div>
    </section>
  );
}
