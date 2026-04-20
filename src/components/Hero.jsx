import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Play, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
// ── Data ───────────────────────────────────────────────────────────────────────
const INTRO_SENTENCES = [
  "Plan The Karya.",
  "Move The Karya.",
  "Complete The Karya.",
];

// Summary: alternating words and dots
const SUMMARY_ITEMS = [
  { type: "word", text: "Plan", gradient: false },
  { type: "dot" },
  { type: "word", text: "Move", gradient: false },
  { type: "dot" },
  { type: "word", text: "Complete", gradient: false },
];

// Main headline (single line)
const MAIN_PREFIX = "Your Company's ";
const MAIN_SUFFIX = "Operating System";
// ── Timing (ms) ────────────────────────────────────────────────────────────────
const INTRO_CHAR_DELAY = 60; // Slowed down from 45ms
const SENTENCE_HOLD = 850; // intro: hold after full sentence
const SENTENCE_GAP = 300; // intro: gap between sentences
const SUMMARY_ITEM_DELAY = 220; // Slowed down from 140ms
const SUMMARY_HOLD = 2000; // summary: hold after all items shown (Longer for emphasis)
const MAIN_CHAR_DELAY = 45; // Slowed down from 35ms

// ── Hook ──────────────────────────────────────────────────────────────────────
// Phases: "intro" → "summary" → "summaryExit" → "main"
function useIntroSequence() {
  const [phase, setPhase] = useState("intro");
  const [sentenceIdx, setSentenceIdx] = useState(0);
  const [introVisible, setIntroVisible] = useState(0);
  const [summaryVisible, setSummaryVisible] = useState(0);
  const [mainVisible, setMainVisible] = useState(0);

  // ── Intro: reveal char by char, cycle sentences ──
  useEffect(() => {
    if (phase !== "intro") return;
    const sentenceLen = INTRO_SENTENCES[sentenceIdx].length;

    if (introVisible < sentenceLen) {
      const t = setTimeout(
        () => setIntroVisible((v) => v + 1),
        INTRO_CHAR_DELAY,
      );
      return () => clearTimeout(t);
    }
    // sentence complete → hold → next sentence or go to summary
    const t = setTimeout(() => {
      if (sentenceIdx < INTRO_SENTENCES.length - 1) {
        setTimeout(() => {
          setSentenceIdx((i) => i + 1);
          setIntroVisible(0);
        }, SENTENCE_GAP);
      } else {
        setPhase("summary");
      }
    }, SENTENCE_HOLD);
    return () => clearTimeout(t);
  }, [phase, sentenceIdx, introVisible]);

  // ── Summary: reveal items one by one, then exit ──
  useEffect(() => {
    if (phase !== "summary") return;
    if (summaryVisible < SUMMARY_ITEMS.length) {
      const t = setTimeout(
        () => setSummaryVisible((v) => v + 1),
        SUMMARY_ITEM_DELAY,
      );
      return () => clearTimeout(t);
    }
    // all shown → hold → exit
    const t = setTimeout(() => {
      setPhase("summaryExit");
      setTimeout(() => setPhase("main"), 480);
    }, SUMMARY_HOLD);
    return () => clearTimeout(t);
  }, [phase, summaryVisible]);

  // ── Main: reveal headline chars one by one ──
  useEffect(() => {
    if (phase !== "main") return;
    const totalMainChars = MAIN_PREFIX.length + MAIN_SUFFIX.length;
    if (mainVisible < totalMainChars) {
      const t = setTimeout(() => setMainVisible((v) => v + 1), MAIN_CHAR_DELAY);
      return () => clearTimeout(t);
    }
  }, [phase, mainVisible]);

  return { phase, sentenceIdx, introVisible, summaryVisible, mainVisible };
}

// ── Component ─────────────────────────────────────────────────────────────────
const Hero = () => {
  const { phase, sentenceIdx, introVisible, summaryVisible, mainVisible } =
    useIntroSequence();

  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-white min-h-screen pt-24 sm:pt-32 lg:pt-40 pb-16 flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <link rel="preload" as="image" href="/Hero_BG.webp" />
        <img
          src="/Hero_BG.webp"
          alt=""
          aria-hidden="true"
          loading="eager"
          width="1920"
          height="1080"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full scale-105 object-cover blur-[6px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.2)_0%,rgba(15,23,42,0.12)_34%,rgba(15,23,42,0.22)_100%)]" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-5xl w-full">
            {/* ── HEADLINE AREA ── */}
            <div className="mb-5 min-h-[7rem] sm:min-h-[8.5rem] lg:min-h-[11rem] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {/* ──── PHASE: intro typewriter sentences ──── */}
                {phase === "intro" && (
                  <motion.div
                    key="intro"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.97 }}
                    transition={{ duration: 0.38, ease: "easeIn" }}
                    className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 flex-wrap"
                  >
                    {INTRO_SENTENCES[sentenceIdx]
                      .split(" ")
                      .map((word, wIdx, arr) => {
                        const isGradient = word.endsWith(".");
                        const wordStartIdx =
                          arr.slice(0, wIdx).join(" ").length +
                          (wIdx > 0 ? 1 : 0);

                        if (isGradient) {
                          return (
                            <span
                              key={`g-${wIdx}`}
                              className="inline-block py-1 text-[2.2rem] sm:text-[2.75rem] lg:text-[4.5rem] font-black tracking-normal leading-[1.15] drop-shadow-[0_8px_24px_rgba(15,23,42,0.4)] whitespace-nowrap"
                            >
                              <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] via-fuchsia-400 to-[#7e22ce]">
                                {word.split("").map((char, cIdx) => (
                                  <motion.span
                                    key={cIdx}
                                    initial={{ opacity: 0 }}
                                    animate={
                                      wordStartIdx + cIdx < introVisible
                                        ? { opacity: 1 }
                                        : { opacity: 0 }
                                    }
                                    transition={{
                                      duration: 0.15,
                                      ease: "easeOut",
                                    }}
                                  >
                                    {char}
                                  </motion.span>
                                ))}
                              </motion.span>
                            </span>
                          );
                        } else {
                          return (
                            <span
                              key={`w-${wIdx}`}
                              className="inline-block py-1 text-[2.2rem] sm:text-[2.75rem] lg:text-[4.5rem] font-black tracking-normal leading-[1.15] drop-shadow-[0_8px_24px_rgba(15,23,42,0.4)] text-white whitespace-nowrap"
                            >
                              {word.split("").map((char, cIdx) => (
                                <motion.span
                                  key={cIdx}
                                  initial={{ opacity: 0 }}
                                  animate={
                                    wordStartIdx + cIdx < introVisible
                                      ? { opacity: 1 }
                                      : { opacity: 0 }
                                  }
                                  transition={{
                                    duration: 0.15,
                                    ease: "easeOut",
                                  }}
                                >
                                  {char}
                                </motion.span>
                              ))}
                            </span>
                          );
                        }
                      })}
                  </motion.div>
                )}

                {/* ──── PHASE: summary  Plan · Move · Complete ──── */}
                {(phase === "summary" || phase === "summaryExit") && (
                  <motion.div
                    key="summary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12, scale: 0.97 }}
                    transition={{ duration: 0.38, ease: "easeOut" }}
                    className="flex items-center justify-center gap-x-1.5 sm:gap-x-4 lg:gap-x-6 w-full max-w-4xl mx-auto whitespace-nowrap"
                  >
                    {SUMMARY_ITEMS.map((item, i) => (
                      <React.Fragment key={i}>
                        {item.type === "word" ? (
                          <motion.span
                            initial={{ opacity: 0, y: 16 }}
                            animate={
                              i < summaryVisible
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 16 }
                            }
                            transition={{ duration: 0.26 }}
                            className={`inline-block pb-[2px] text-[1.55rem] sm:text-4xl lg:text-[4rem] font-black tracking-normal leading-[1.15] drop-shadow-[0_8px_24px_rgba(15,23,42,0.4)] ${item.gradient ? "text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] via-fuchsia-400 to-[#7e22ce]" : "text-white"}`}
                          >
                            {item.text}
                          </motion.span>
                        ) : (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.3 }}
                            animate={
                              i < summaryVisible
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.3 }
                            }
                            transition={{ duration: 0.2 }}
                            className="inline-flex items-center justify-center shrink-0 mx-1 sm:mx-2"
                            aria-hidden="true"
                          >
                            <span
                              className="rounded-none bg-white"
                              style={{
                                width: "4px",
                                height: "clamp(32px, 5vw, 52px)",
                                boxShadow: "0 0 8px 1px rgba(255,255,255,0.4)",
                              }}
                            />
                          </motion.span>
                        )}
                      </React.Fragment>
                    ))}
                  </motion.div>
                )}

                {/* ──── PHASE: main headline typewriter ──── */}
                {phase === "main" && (
                  <motion.div
                    key="main"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-0 pb-3"
                  >
                    <h1 className="text-[2.4rem] sm:text-[2.75rem] lg:text-[4.25rem] font-black tracking-normal leading-[1.08] drop-shadow-[0_10px_32px_rgba(15,23,42,0.34)]">
                      <span className="text-white">
                        {MAIN_PREFIX.split("").map((char, idx) => (
                          <motion.span
                            key={`p-${idx}`}
                            initial={{ opacity: 0 }}
                            animate={
                              idx < mainVisible
                                ? { opacity: 1 }
                                : { opacity: 0 }
                            }
                            transition={{ duration: 0.15, ease: "easeOut" }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                      </span>
                    </h1>
                    <h1 className="text-[2.4rem] sm:text-[2.75rem] lg:text-[4.25rem] font-black tracking-normal leading-[1.08] drop-shadow-[0_10px_32px_rgba(15,23,42,0.34)]">
                      <motion.span
                                                                className="inline text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] whitespace-nowrap"
                                                                animate={{
                                                                  backgroundPosition: ["0% center", "-200% center"],
                                                                }}
                                                                transition={{
                                                                  duration: 4,
                                                                  repeat: Infinity,
                                                                  ease: "linear",
                                                                }}
                                                              >
                        {MAIN_SUFFIX.split("").map((char, idx) => {
                          const globalIdx = MAIN_PREFIX.length + idx;
                          return (
                            <motion.span
                              key={`s-${idx}`}
                              initial={{ opacity: 0 }}
                              animate={
                                globalIdx < mainVisible
                                  ? { opacity: 1 }
                                  : { opacity: 0 }
                              }
                              transition={{ duration: 0.15, ease: "easeOut" }}
                            >
                              {char === " " ? "\u00A0" : char}
                            </motion.span>
                          );
                        })}
                      </motion.span>
                    </h1>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── STATIC CONTENT – always visible ── */}

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42, ease: "easeOut" }}
              className="mt-2 text-lg sm:text-xl lg:text-2xl font-medium text-white/90 leading-relaxed max-w-3xl mx-auto"
            >
              Run your entire business from one place.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 w-full mt-16"
            >
              <Link
                to="https://app.karyaup.com/auth"
                className="group relative z-10 flex h-[3.5em] w-full max-w-[14em] shrink-0 items-center justify-center overflow-hidden rounded-[30em] font-bold text-[15px] transition-all duration-300 active:scale-95"
                style={{ boxShadow: "0 18px 40px rgba(126, 34, 206, 0.22)" }}
              >
                <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
                <div className="absolute -inset-[3px] -z-10 origin-left scale-x-0 rounded-[30em] bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-active:scale-x-100" />
                <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-slate-800 group-active:text-slate-800">
                  Start Free Workspace
                </span>
              </Link>

              <button className="group relative flex h-[3.5em] w-full max-w-[14em] shrink-0 items-center justify-center gap-3 rounded-[30em] border border-white hover:border-[#c084fc] hover:bg-[#c084fc]/10 font-bold text-[15px] text-white transition-all duration-300 active:scale-95">
                <div className="w-9 h-9 rounded-full bg-white/10 shadow-lg backdrop-blur-sm flex items-center justify-center border border-white/20 transition-transform">
                  <Play className="w-4 h-4 fill-white text-white ml-[2px]" />
                </div>
                <span>Watch Video</span>
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col items-center gap-2.5 text-sm font-semibold text-white/80 mx-auto w-full"
            >
              <div className="flex items-center justify-center gap-2 text-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 stroke-[2.5]" />
                <p>No credit card required</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 stroke-[2.5]" />
                <p className="flex items-center">
                  Setup in minutes
                  <span className="ml-2 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black italic text-white backdrop-blur-sm transition-colors duration-300 hover:border-[#7e22ce] hover:bg-white/15">
                    &lt; 2 minutes
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
