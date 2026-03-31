import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

// ── Data ───────────────────────────────────────────────────────────────────────
const INTRO_SENTENCES = [
  ["Plan", "The", "Karya."],
  ["Move", "The", "Karya."],
  ["Complete", "The", "Karya."],
];

// Summary: alternating words and dots
const SUMMARY_ITEMS = [
  { type: "word", text: "Plan", gradient: false },
  { type: "dot" },
  { type: "word", text: "Move", gradient: false },
  { type: "dot" },
  { type: "word", text: "Complete", gradient: false },
  { type: "dot" },

];

// Main headline words: line1 then line2
const MAIN_LINE1 = ["The", "Platform", "To", "Run", "Your"];
const MAIN_LINE2 = ["Entire", "Company"];
const MAIN_ALL = [...MAIN_LINE1, ...MAIN_LINE2];

// ── Timing (ms) ────────────────────────────────────────────────────────────────
const WORD_DELAY = 170;   // intro: ms per word
const SENTENCE_HOLD = 550;   // intro: hold after full sentence
const SENTENCE_GAP = 180;   // intro: gap between sentences
const SUMMARY_ITEM_DELAY = 130;   // summary: ms per item (word or dot)
const SUMMARY_HOLD = 1200;  // summary: hold after all items shown
const MAIN_WORD_DELAY = 140;   // main: ms per word

// ── Hook ──────────────────────────────────────────────────────────────────────
// Phases: "intro" → "summary" → "summaryExit" → "main"
function useIntroSequence() {
  const [phase, setPhase] = useState("intro");
  const [sentenceIdx, setSentenceIdx] = useState(0);
  const [introVisible, setIntroVisible] = useState(0);
  const [summaryVisible, setSummaryVisible] = useState(0);
  const [mainVisible, setMainVisible] = useState(0);

  // ── Intro: reveal words one by one, cycle sentences ──
  useEffect(() => {
    if (phase !== "intro") return;
    const sentence = INTRO_SENTENCES[sentenceIdx];

    if (introVisible < sentence.length) {
      const t = setTimeout(() => setIntroVisible((v) => v + 1), WORD_DELAY);
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
      const t = setTimeout(() => setSummaryVisible((v) => v + 1), SUMMARY_ITEM_DELAY);
      return () => clearTimeout(t);
    }
    // all shown → hold → exit
    const t = setTimeout(() => {
      setPhase("summaryExit");
      setTimeout(() => setPhase("main"), 480);
    }, SUMMARY_HOLD);
    return () => clearTimeout(t);
  }, [phase, summaryVisible]);

  // ── Main: reveal headline words one by one ──
  useEffect(() => {
    if (phase !== "main") return;
    if (mainVisible < MAIN_ALL.length) {
      const t = setTimeout(() => setMainVisible((v) => v + 1), MAIN_WORD_DELAY);
      return () => clearTimeout(t);
    }
  }, [phase, mainVisible]);

  return { phase, sentenceIdx, introVisible, summaryVisible, mainVisible };
}

// ── Component ─────────────────────────────────────────────────────────────────
const Hero = () => {
  const { phase, sentenceIdx, introVisible, summaryVisible, mainVisible } = useIntroSequence();

  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-white min-h-screen pt-[3.5rem] pb-8 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16 flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/Hero_BG.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-105 object-cover blur-[6px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.2)_0%,rgba(15,23,42,0.12)_34%,rgba(15,23,42,0.22)_100%)]" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="flex min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-96px)] flex-col items-center justify-center text-center">
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
                    className="flex items-center justify-center gap-3 flex-wrap"
                  >
                    {INTRO_SENTENCES[sentenceIdx].map((word, i) => (
                      <motion.span
                        key={`${sentenceIdx}-${i}`}
                        initial={{ opacity: 0, y: 18 }}
                        animate={i < introVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                        transition={{ duration: 0.26, ease: "easeOut" }}
                        className={`inline-block py-1 text-[2.6rem] sm:text-5xl lg:text-[4.5rem] font-black tracking-tight leading-[1.15] drop-shadow-[0_8px_24px_rgba(15,23,42,0.4)] ${word.endsWith(".")
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] via-fuchsia-400 to-[#7e22ce]"
                          : "text-white"
                          }`}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.div>
                )}

                {/* ──── PHASE: summary  Plan · Move / Complete · Karya ──── */}
                {(phase === "summary" || phase === "summaryExit") && (
                  <motion.div
                    key="summary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12, scale: 0.97 }}
                    transition={{ duration: 0.38, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-y-2 sm:gap-y-0"
                  >
                    {/* ── Row 1: Plan · Move ── */}
                    <div className="flex items-center justify-center">
                      <motion.span initial={{ opacity: 0, y: 16 }} animate={0 < summaryVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={{ duration: 0.26 }} className="inline-block pb-[2px] text-[2.2rem] sm:text-4xl lg:text-[4rem] font-black tracking-tight leading-[1.15] drop-shadow-[0_8px_24px_rgba(15,23,42,0.4)] text-white">Plan</motion.span>
                      <motion.span initial={{ opacity: 0, scale: 0.3 }} animate={1 < summaryVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 }} transition={{ duration: 0.2 }} className="inline-flex items-center justify-center mx-2 sm:mx-3 lg:mx-4" aria-hidden="true"><span className="block rounded-full bg-white" style={{ width: "clamp(7px,1vw,13px)", height: "clamp(7px,1vw,13px)", transform: "translateY(4px)", boxShadow: "0 0 8px 1px rgba(255,255,255,0.45)" }} /></motion.span>
                      <motion.span initial={{ opacity: 0, y: 16 }} animate={2 < summaryVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={{ duration: 0.26 }} className="inline-block pb-[2px] text-[2.2rem] sm:text-4xl lg:text-[4rem] font-black tracking-tight leading-[1.15] drop-shadow-[0_8px_24px_rgba(15,23,42,0.4)] text-white">Move</motion.span>
                    </div>

                    {/* ── Middle dot — desktop only ── */}
                    <motion.span initial={{ opacity: 0, scale: 0.3 }} animate={3 < summaryVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 }} transition={{ duration: 0.2 }} className="hidden sm:inline-flex items-center justify-center mx-2 sm:mx-3 lg:mx-4" aria-hidden="true"><span className="block rounded-full bg-white" style={{ width: "clamp(7px,1vw,13px)", height: "clamp(7px,1vw,13px)", transform: "translateY(4px)", boxShadow: "0 0 8px 1px rgba(255,255,255,0.45)" }} /></motion.span>

                    {/* ── Row 2: Complete · Karya ── */}
                    <div className="flex items-center justify-center">
                      <motion.span initial={{ opacity: 0, y: 16 }} animate={4 < summaryVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={{ duration: 0.26 }} className="inline-block pb-[2px] text-[2.2rem] sm:text-4xl lg:text-[4rem] font-black tracking-tight leading-[1.15] drop-shadow-[0_8px_24px_rgba(15,23,42,0.4)] text-white">Complete</motion.span>
                      <motion.span initial={{ opacity: 0, scale: 0.3 }} animate={5 < summaryVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 }} transition={{ duration: 0.2 }} className="inline-flex items-center justify-center mx-2 sm:mx-3 lg:mx-4" aria-hidden="true"><span className="block rounded-full bg-white" style={{ width: "clamp(7px,1vw,13px)", height: "clamp(7px,1vw,13px)", transform: "translateY(4px)", boxShadow: "0 0 8px 1px rgba(255,255,255,0.45)" }} /></motion.span>
                      <motion.span initial={{ opacity: 0, y: 16 }} animate={6 < summaryVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={{ duration: 0.26 }} className="inline-block pb-[2px] text-[2.2rem] sm:text-4xl lg:text-[4rem] font-black tracking-tight leading-[1.15] drop-shadow-[0_8px_24px_rgba(15,23,42,0.4)] text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] via-fuchsia-400 to-[#7e22ce]">Karya</motion.span>
                    </div>
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
                    {/* Line 1 */}
                    <div className="flex items-center justify-center flex-wrap gap-x-4">
                      {MAIN_LINE1.map((word, i) => (
                        <motion.span
                          key={`l1-${word}`}
                          initial={{ opacity: 0, y: 22 }}
                          animate={i < mainVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="inline-block py-1 text-[2.9rem] sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] drop-shadow-[0_10px_32px_rgba(15,23,42,0.34)]"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </div>

                    {/* Line 2 – gradient */}
                    <div className="flex items-center justify-center flex-wrap gap-x-4">
                      {MAIN_LINE2.map((word, i) => {
                        const globalIdx = MAIN_LINE1.length + i;
                        return (
                          <motion.span
                            key={`l2-${word}`}
                            initial={{ opacity: 0, y: 22 }}
                            animate={globalIdx < mainVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-block py-1 text-[2.9rem] sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.08] drop-shadow-[0_10px_32px_rgba(15,23,42,0.34)]"
                          >
                            <motion.span
                              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                              {word}
                            </motion.span>
                          </motion.span>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* ── STATIC CONTENT – always visible ── */}

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="mx-auto max-w-2xl text-lg sm:text-xl font-bold text-white/90 mb-6"
            >
              KaryaUp replaces <span className="text-[#e9d5ff]">6+ tools</span> with one unified system.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 w-full"
            >
              <Link
                to="https://www.karyaup.com/auth"
                className="group relative z-10 flex h-[3.5em] w-full max-w-[14em] shrink-0 items-center justify-center overflow-hidden rounded-[30em] font-bold text-[15px] transition-all duration-300 active:scale-95"
                style={{ boxShadow: "0 18px 40px rgba(126, 34, 206, 0.22)" }}
              >
                <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
                <div className="absolute -inset-[3px] -z-10 origin-left scale-x-0 rounded-[30em] bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-active:scale-x-100" />
                <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-slate-800 group-active:text-slate-800">
                  Start Free Workspace
                </span>
              </Link>

              <button className="group flex items-center gap-4 text-white font-black text-base transition-colors hover:text-[#f5d0fe]">
                <div className="w-12 h-12 rounded-full bg-white/14 shadow-lg shadow-slate-900/20 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-white text-white ml-0.5 group-hover:fill-[#f5d0fe] group-hover:text-[#f5d0fe] transition-colors" />
                </div>
                Watch Video
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col items-center gap-2.5 text-sm font-semibold text-white/80"
            >
              <div className="flex items-center gap-2 text-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 stroke-[2.5]" />
                <p>No credit card required</p>
              </div>
              <div className="flex items-center gap-2 text-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 stroke-[2.5]" />
                <p className="flex items-center">
                  Setup in minutes
                  <span className="ml-2 inline-flex items-center justify-center bg-white/10 border border-white/15 text-white px-2 py-0.5 text-xs rounded-md font-black italic backdrop-blur-sm">
                    &lt; 5 minutes
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
