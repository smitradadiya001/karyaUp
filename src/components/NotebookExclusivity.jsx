import { useEffect, useRef, useState } from "react";
import { Check, ChevronRight, ChevronLeft, Zap, Users, TrendingUp } from "lucide-react";

const PAGES = [
  {
    // Page 1: Left = Exclusivity focus, Right = Feature list with checkmarks
    left: {
      eyebrow: "EXCLUSIVITY",
      title: "We onboard just 100 companies manually.",
      desc: "Why? Because real results need real attention.",
      highlight: "100",
    },
    right: {
      eyebrow: "WHAT YOU GET",
      layout: "list",
      points: [
        { title: "Personalized setup", desc: "Done-for-you configuration of your workflows." },
        { title: "Deep onboarding", desc: "Direct support from the founders, end to end." },
        { title: "Real results", desc: "Measurable change in how your team operates." },
      ],
    },
  },
  {
    // Page 2: Left = Process focus, Right = Numbered steps
    left: {
      eyebrow: "OUR PROCESS",
      title: "A proven system for transformation.",
      desc: "Every successful engagement follows the same rigorous methodology.",
      highlight: "system",
    },
    right: {
      eyebrow: "HOW WE WORK",
      layout: "steps",
      steps: [
        { num: "01", title: "Discovery call", desc: "We map your goals, stack and bottlenecks together." },
        { num: "02", title: "Custom blueprint", desc: "A tailored plan built around your team, not a template." },
        { num: "03", title: "Hands-on build", desc: "We ship the systems with you, week by week." },
      ],
    },
  },
  {
    // Page 3: Left = Results focus, Right = Feature cards with icons
    left: {
      eyebrow: "THE OUTCOME",
      title: "40% efficiency gain guaranteed.",
      desc: "Measurable impact within 90 days or we keep working until you see it.",
      highlight: "40%",
    },
    right: {
      eyebrow: "WHY IT WORKS",
      layout: "cards",
      cards: [
        { icon: Zap, title: "Founder access", desc: "Talk directly to the people building your solution." },
        { icon: Users, title: "Small batches", desc: "Limited spots mean undivided attention on your account." },
        { icon: TrendingUp, title: "Proven outcomes", desc: "Track record of measurable, lasting transformation." },
      ],
    },
  },
];

const FLIP_MS = 600;

// Helper function to render right side content based on layout
function renderRightContent(pageData, isCompact = false) {
  const { layout } = pageData.right;
  const baseClasses = isCompact ? "space-y-3" : "space-y-6";
  
  if (layout === "list") {
    return (
      <ul className={baseClasses}>
        {pageData.right.points.map((p) => (
          <li key={p.title} className={`flex gap-4 ${isCompact ? 'text-left' : ''}`}>
            <span className={`mt-0.5 shrink-0 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center shadow-md ${isCompact ? 'h-6 w-6' : 'h-7 w-7'}`}>
              <Check className={`text-white ${isCompact ? 'h-3.5 w-3.5' : 'h-4 w-4'}`} strokeWidth={3} />
            </span>
            <div>
              <h3 className={`font-semibold text-slate-900 ${isCompact ? 'text-sm' : 'text-lg'}`}>{p.title}</h3>
              <p className={`text-slate-500 ${isCompact ? 'text-xs mt-0.5' : 'text-sm md:text-base mt-1'}`}>{p.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  
  if (layout === "steps") {
    return (
      <div className={baseClasses}>
        {pageData.right.steps.map((s, idx) => (
          <div key={s.num} className="flex gap-4 items-start">
            <span className={`flex shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white font-bold shadow-md ${isCompact ? 'h-7 w-7 text-xs' : 'h-8 w-8 text-sm'}`}>
              {s.num}
            </span>
            <div className={`flex-1 ${isCompact ? 'pt-0' : 'pt-0.5'}`}>
              <div className="flex items-center gap-2">
                <h3 className={`font-semibold text-slate-900 ${isCompact ? 'text-sm' : 'text-base'}`}>{s.title}</h3>
                {idx === 0 && !isCompact && <span className="px-2 py-0.5 rounded-full bg-fuchsia-100 text-fuchsia-700 text-[10px] font-bold">START</span>}
              </div>
              <p className={`text-slate-500 ${isCompact ? 'text-xs mt-0.5' : 'text-xs md:text-sm mt-1'}`}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  if (layout === "cards") {
    const iconMap = { Zap, Users, TrendingUp };
    return (
      <div className={`grid grid-cols-1 ${isCompact ? 'gap-2' : 'gap-3'}`}>
        {pageData.right.cards.map((c) => {
          const Icon = iconMap[c.icon] || Zap;
          return (
            <div key={c.title} className={`flex gap-3 rounded-xl bg-gradient-to-r from-slate-50 to-white border border-slate-100 shadow-sm ${isCompact ? 'p-2' : 'p-3'}`}>
              <span className={`flex shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white shadow-md ${isCompact ? 'h-8 w-8' : 'h-10 w-10'}`}>
                <Icon className={isCompact ? 'h-4 w-4' : 'h-5 w-5'} />
              </span>
              <div className="flex-1">
                <h3 className={`font-bold text-slate-900 ${isCompact ? 'text-xs' : 'text-sm'}`}>{c.title}</h3>
                <p className={`text-slate-500 leading-relaxed ${isCompact ? 'text-[10px] mt-0' : 'text-xs mt-0.5'}`}>{c.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  
  return null;
}

function useCountTo(target, start, page, duration = 2000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, page, duration]);
  return value;
}

export default function NotebookExclusivity() {
  const [page, setPage] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    obs.observe(el);

    // Auto-flip timer
    let timer;
    if (visible && !flipping) {
      timer = setInterval(() => {
        goNext();
      }, 4000); // Flip every 4 seconds
    }

    return () => {
      obs.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [visible, flipping, page]); // Re-run when visible, flipping state, or page changes

  const count = useCountTo(100, visible, page, 2200);

  const goNext = () => {
    if (flipping) return;
    setFlipDirection("next");
    setFlipping(true);
    window.setTimeout(() => {
      setPage((p) => (p + 1) % PAGES.length);
      setFlipping(false);
    }, FLIP_MS);
  };

  const goPrev = () => {
    if (flipping || page <= 0) return;
    setFlipDirection("prev");
    setFlipping(true);
    window.setTimeout(() => {
      setPage((p) => p - 1);
      setFlipping(false);
    }, FLIP_MS);
  };

  const current = PAGES[page];
  const nextPage = PAGES[(page + 1) % PAGES.length];

  return (
    <section className="w-full px-4" ref={ref}>
      <div
        className="mx-auto max-w-6xl rounded-3xl border border-slate-200/60 bg-white p-4 md:p-6 shadow-[0_30px_80px_-30px_rgba(120,40,200,0.25)]"
        style={{ perspective: "2400px" }}
      >
        <div
          className="flex flex-col md:grid md:grid-cols-2 gap-0 min-h-[640px] md:min-h-[380px] relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* LEFT/TOP CARD - Different content for each page */}
          <div className="relative p-8 md:p-12 flex-1 flex flex-col justify-center md:border-r border-slate-200/60">
            <span className="text-xs font-semibold tracking-[0.2em] bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              {current.left.eyebrow}
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.05]">
              {current.left.title.split(current.left.highlight).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <>
                      {current.left.highlight === "100" && <br className="hidden md:block" />}
                      <span className="bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent tabular-nums">
                        {current.left.highlight === "100" ? count : current.left.highlight}
                      </span>
                    </>
                  )}
                </span>
              ))}
            </h2>
            <p className="mt-4 text-slate-500 text-sm md:text-base max-w-md">
              {current.left.desc}
            </p>
          </div>

          <div className="relative p-8 md:p-10 flex-1 flex flex-col justify-center">
            {/* Current page content - Different layout for each page */}
            <div className="transition-opacity duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                  {current.right.eyebrow}
                </span>
              </div>

              {/* Page 1: List with checkmarks */}
              {current.right.layout === "list" && (
                <ul className="space-y-4">
                  {current.right.points.map((p) => (
                    <li key={p.title} className="flex gap-3">
                      <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center shadow-md">
                        <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">{p.title}</h3>
                        <p className="mt-0.5 text-slate-500 text-xs md:text-sm">{p.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* Page 2: Numbered steps */}
              {current.right.layout === "steps" && (
                <div className="space-y-5">
                  {current.right.steps.map((s, idx) => (
                    <div key={s.num} className="flex gap-4 items-start">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white text-sm font-bold shadow-md">
                        {s.num}
                      </span>
                      <div className="flex-1 pt-0.5">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
                          {idx === 0 && <span className="px-2 py-0.5 rounded-full bg-fuchsia-100 text-fuchsia-700 text-[10px] font-bold">START</span>}
                        </div>
                        <p className="mt-1 text-slate-500 text-xs md:text-sm">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Page 3: Feature cards with icons */}
              {current.right.layout === "cards" && (
                <div className="grid grid-cols-1 gap-3">
                  {current.right.cards.map((c) => {
                    const Icon = c.icon;
                    return (
                      <div key={c.title} className="flex gap-3 p-3 rounded-xl bg-gradient-to-r from-slate-50 to-white border border-slate-100 shadow-sm">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white shadow-md">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-slate-900">{c.title}</h3>
                          <p className="mt-0.5 text-slate-500 text-xs leading-relaxed">{c.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* FLIPPING CARD - Moved to parent level for correct 50/50 pivot */}
          {flipping && (
            <div
              className="absolute z-50 pointer-events-none"
              style={{
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                willChange: "transform",
                // Mobile (Vertical) vs Desktop (Horizontal)
                transformOrigin: window.innerWidth < 768 ? "top center" : (flipDirection === "next" ? "right center" : "left center"),
                animation:
                  window.innerWidth < 768
                    ? `nb-flip-v-b-to-t ${FLIP_MS}ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards`
                    : (flipDirection === "next"
                      ? `nb-flip-l-to-r ${FLIP_MS}ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards`
                      : `nb-flip-r-to-l ${FLIP_MS}ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards`),
                // Position adjustments for the flipping surface
                ...(window.innerWidth < 768 ? {
                  top: "50%",
                  height: "50%",
                } : {
                  left: flipDirection === "next" ? "0%" : "50%",
                  width: "50%",
                  height: "100%",
                })
              }}
            >
              {/* Front face */}
              <div
                className="absolute inset-0 bg-white rounded-r-2xl shadow-sm overflow-hidden"
                style={{
                  transform: "rotateY(0deg)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden"
                }}
              >
                <div className="p-8 md:p-12 flex flex-col justify-center h-full">
                  {window.innerWidth < 768 ? (
                    // On mobile, front face of flip shows current right side content
                    <>
                      <span className="text-xs font-semibold tracking-[0.2em] text-slate-500 mb-4 block uppercase">{current.right.eyebrow}</span>
                      {renderRightContent(current, true)}
                    </>
                  ) : (
                    flipDirection === "next" ? (
                      // Flipping left to right: show current left side content
                      <>
                        <span className="text-xs font-semibold tracking-[0.2em] bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent uppercase">{current.left.eyebrow}</span>
                        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.05]">
                          {current.left.title.split(current.left.highlight).map((part, i, arr) => (
                            <span key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                <>
                                  {current.left.highlight === "100" && <br className="hidden md:block" />}
                                  <span className="bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent tabular-nums">
                                    {current.left.highlight === "100" ? count : current.left.highlight}
                                  </span>
                                </>
                              )}
                            </span>
                          ))}
                        </h2>
                        <p className="mt-5 text-slate-500 text-base md:text-lg">{current.left.desc}</p>
                      </>
                    ) : (
                      // Flipping right to left: show current right side content with proper layout
                      <>
                        <span className="text-xs font-semibold tracking-[0.2em] text-slate-500 mb-6 block uppercase">{current.right.eyebrow}</span>
                        {renderRightContent(current)}
                      </>
                    )
                  )}
                </div>
              </div>

              {/* Back face */}
              <div
                className="absolute inset-0 bg-white rounded-l-2xl shadow-sm overflow-hidden"
                style={{
                  transform: window.innerWidth < 768 ? "rotateX(-180deg)" : "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden"
                }}
              >
                <div className="p-8 md:p-12 flex flex-col justify-center h-full">
                  {window.innerWidth < 768 ? (
                    // On mobile, back face shows current left side content
                    <>
                      <span className="text-xs font-semibold tracking-[0.2em] bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent uppercase">{current.left.eyebrow}</span>
                      <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 leading-[1.05]">
                        {current.left.title.split(current.left.highlight).map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <span className="bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent tabular-nums">
                                {current.left.highlight}
                              </span>
                            )}
                          </span>
                        ))}
                      </h2>
                      <p className="mt-5 text-slate-500 text-base md:text-lg">{current.left.desc}</p>
                    </>
                  ) : (
                    flipDirection === "next" ? (
                      // Next page right side content with proper layout
                      <>
                        <span className="text-xs font-semibold tracking-[0.2em] text-slate-500 mb-6 block uppercase">{nextPage.right.eyebrow}</span>
                        {renderRightContent(nextPage)}
                      </>
                    ) : (
                      // Previous page left side content
                      <>
                        <span className="text-xs font-semibold tracking-[0.2em] bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent uppercase">{nextPage.left.eyebrow}</span>
                        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.05]">
                          {nextPage.left.title.split(nextPage.left.highlight).map((part, i, arr) => (
                            <span key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                <>
                                  {nextPage.left.highlight === "100" && <br className="hidden md:block" />}
                                  <span className="bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent tabular-nums">
                                    {nextPage.left.highlight === "100" ? (page === 0 ? count : 100) : nextPage.left.highlight}
                                  </span>
                                </>
                              )}
                            </span>
                          ))}
                        </h2>
                        <p className="mt-5 text-slate-500 text-base md:text-lg">{nextPage.left.desc}</p>
                      </>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

      </div>

      <style>{`
        @keyframes nb-flip-l-to-r {
          0%   { transform: rotateY(0deg); }
          100% { transform: rotateY(180deg); }
        }
        @keyframes nb-flip-r-to-l {
          0%   { transform: rotateY(0deg); }
          100% { transform: rotateY(-180deg); }
        }
        @keyframes nb-flip-v-b-to-t {
          0%   { transform: rotateX(0deg); }
          100% { transform: rotateX(180deg); }
        }
      `}</style>
    </section>
  );
}
