import React from "react";
import { motion } from "framer-motion";
import { Zap, FileText, Database, Check } from "lucide-react";
import ClickUpLogo from "../assets/ClickUp.webp";
import JiraLogo from "../assets/Jira.webp";
import KaryaUpLogo from "../assets/logo.webp";

const DataImport = () => {
  const fileVariants = {
    animate: (i) => ({
      offsetDistance: ["0%", "100%"],
      opacity: [0, 1, 1, 0],
      scale: [0.5, 1, 1, 0.5],
      transition: {
        duration: 6,
        repeat: Infinity,
        delay: i * 1.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="py-3 sm:py-6 lg:py-8 bg-white overflow-x-hidden overflow-y-hidden relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
          {/* Left: Content */}
          <div className="w-full flex-[0.45] text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-3 sm:mb-6 shadow-sm">
                <Zap className="w-3.5 h-3.5 text-[#7e22ce]" />
                <span className="text-[10px] font-bold text-[#7e22ce] uppercase tracking-wider">
                  Zero Friction Sync
                </span>
              </div>
              <h2 className="mx-auto text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1] mb-8 sm:mb-10 lg:mx-0">
                Seamless Import <br className="hidden md:block" />
                From Your <br className="hidden md:block" />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-[#ec4899] to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{
                    backgroundPosition: ["0% center", "-200% center"],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Existing Tools
                </motion.span>
              </h2>
              <div className="flex flex-col items-start justify-start text-left gap-2 sm:gap-4 mb-8 sm:mb-12">
                <div className="flex items-center justify-start text-left gap-2.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100">
                    <Check className="w-3 h-3 text-[#7e22ce]" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-700">One-click Migration from ClickUp & Jira</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100">
                    <Check className="w-3 h-3 text-[#7e22ce]" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-700">Zero Data Loss & Pure Productivity</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100">
                    <Check className="w-3 h-3 text-[#7e22ce]" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-700">Retain all comments, attachments & histories</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual Area */}
          <div className="flex-[0.55] relative w-full max-w-full overflow-hidden flex items-center justify-center lg:justify-end pr-0 sm:pr-4 lg:pr-12">
            {/* ══════════════════════════════════
                            DESKTOP  sm and above — UNCHANGED
                        ══════════════════════════════════ */}
            <div className="hidden sm:block relative w-full h-[420px] sm:h-[500px]">
              {/* KaryaUp hub */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30">
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.25, 0.1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-100 rounded-full blur-[100px] -z-10"
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="w-36 h-36 lg:w-48 lg:h-48 flex items-center justify-center p-4 -translate-y-[12px]"
                >
                  <img
                    src={KaryaUpLogo}
                    alt="Karyaup"
                    width="192"
                    height="192"
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>

              {/* Source tools left column */}
              <div className="absolute inset-x-0 h-full flex flex-col justify-between py-12 lg:py-20 pointer-events-none">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="self-start pl-4 lg:pl-0 pointer-events-auto -translate-y-8"
                >
                  <img
                    src={ClickUpLogo}
                    alt="ClickUp"
                    width="112"
                    height="112"
                    loading="lazy"
                    className="w-20 h-20 lg:w-28 lg:h-28 object-contain drop-shadow-2xl"
                  />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="self-start pl-4 lg:pl-0 pointer-events-auto"
                >
                  <img
                    src={JiraLogo}
                    alt="Jira"
                    width="112"
                    height="112"
                    loading="lazy"
                    className="w-20 h-20 lg:w-28 lg:h-28 object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </div>

              {/* Desktop animated file icons — original paths */}
              <div className="absolute inset-0 z-40 pointer-events-none overflow-hidden">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`f-cu-${i}`}
                    className="absolute top-0 left-0 w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-md border border-slate-100 text-[#7e22ce] -translate-x-1/2 -translate-y-1/2"
                    style={{
                      offsetPath:
                        "path('M70 120 L210 120 C270 120, 270 250, 310 250 L440 250')",
                      offsetRotate: "0deg",
                    }}
                    custom={i}
                    variants={fileVariants}
                    animate="animate"
                  >
                    <FileText className="w-4 h-4" />
                  </motion.div>
                ))}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`f-ji-${i}`}
                    className="absolute top-0 left-0 w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-md border border-slate-100 text-[#ec4899] -translate-x-1/2 -translate-y-1/2"
                    style={{
                      offsetPath:
                        "path('M70 380 L210 380 C270 380, 270 250, 310 250 L440 250')",
                      offsetRotate: "0deg",
                    }}
                    custom={i + 0.6}
                    variants={fileVariants}
                    animate="animate"
                  >
                    <Database className="w-4 h-4" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ══════════════════════════════════
                            MOBILE  below sm
                            Layout mirrors big screen:
                              ClickUp  top-left    (~x=56,  y=60)
                              Jira     bottom-left (~x=56,  y=240)
                              KaryaUp  right-center (~x=255, y=150)
                            Paths curve from each logo → hub center
                        ══════════════════════════════════ */}
            <div className="block sm:hidden relative w-full max-w-[320px] mx-auto h-[240px]">
              {/* Glow behind KaryaUp */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute rounded-full bg-slate-100 blur-[50px] -z-10"
                style={{ width: 100, height: 100, top: 62, right: 12 }}
              />

              {/* KaryaUp logo — right center */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute flex items-center justify-center"
                style={{ width: 84, height: 84, top: 76, right: 12 }}
              >
                <img
                  src={KaryaUpLogo}
                  alt="Karyaup"
                  width="84"
                  height="84"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* ClickUp — top left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute"
                style={{ left: 10, top: 12 }}
              >
                <img
                  src={ClickUpLogo}
                  alt="ClickUp"
                  width="64"
                  height="64"
                  loading="lazy"
                  className="w-16 h-16 object-contain drop-shadow-xl"
                />
              </motion.div>

              {/* Jira — bottom left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute"
                style={{ left: 10, bottom: 12 }}
              >
                <img
                  src={JiraLogo}
                  alt="Jira"
                  width="64"
                  height="64"
                  loading="lazy"
                  className="w-16 h-16 object-contain drop-shadow-xl"
                />
              </motion.div>

              {/* Mobile animated file icons
                                offsetPath coordinates are relative to the element's
                                containing block (the 300px-tall div).
                                ClickUp logo center  ≈ left:8 + 32 = x40,  top:24 + 32 = y56
                                Jira logo center     ≈ left:8 + 32 = x40,  bottom:24 → top ~220, center y252 → use y240
                                KaryaUp logo center  ≈ right:10 + 52 = from-right ~62 → 
                                  We don't know exact container width on mobile (~360px typical)
                                  KaryaUp right edge: containerWidth - 10 - 0 = ~350
                                  KaryaUp center x  ≈ 350 - 52 = 298 → use 260 (safe center estimate)
                                  KaryaUp center y  ≈ 98 + 52 = 150
                            */}
              <div className="absolute inset-0 z-40 pointer-events-none overflow-hidden">
                {/* ClickUp → KaryaUp */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`m-cu-${i}`}
                    className="absolute top-0 left-0 w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-md border border-slate-100 text-[#7e22ce] -translate-x-1/2 -translate-y-1/2"
                    style={{
                      offsetPath:
                        "path('M42 44 C112 44, 148 118, 204 118 L232 118')",
                      offsetRotate: "0deg",
                    }}
                    custom={i}
                    variants={fileVariants}
                    animate="animate"
                  >
                    <FileText className="w-3 h-3" />
                  </motion.div>
                ))}

                {/* Jira → KaryaUp */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`m-ji-${i}`}
                    className="absolute top-0 left-0 w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-md border border-slate-100 text-[#ec4899] -translate-x-1/2 -translate-y-1/2"
                    style={{
                      offsetPath:
                        "path('M42 196 C112 196, 148 118, 204 118 L232 118')",
                      offsetRotate: "0deg",
                    }}
                    custom={i + 0.6}
                    variants={fileVariants}
                    animate="animate"
                  >
                    <Database className="w-3 h-3" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataImport;
