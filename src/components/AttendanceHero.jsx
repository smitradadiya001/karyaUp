import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Clock, Activity, FileText, Download } from "lucide-react";
import FeatureStack from "./FeatureStack";

export default function AttendanceHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white pt-8 sm:pt-10 lg:pt-4 pb-16 sm:pb-20 lg:pb-24">
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/2 rounded-full bg-purple-100/60 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] -translate-x-1/4 translate-y-1/2 rounded-full bg-fuchsia-100/40 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start lg:self-start lg:pt-2">
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest shadow-sm"
            >
              ATTENDANCE — TRACK TIME PRECISELY
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="mt-4 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
            >
              Attendance Tracked
              <span className="block">
                &{" "}
                <motion.span
                  className="bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Records Kept.
                </motion.span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: isMobile ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="mt-4 sm:mt-6 space-y-3 w-full max-w-[28rem] mx-auto lg:max-w-none lg:mx-0"
            >
              {[
                "Precise tracking, real-time sync",
                "Audit-ready logs for payroll"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 text-left justify-center lg:justify-start">
                  <div className="mt-1.5 w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-[#7e22ce] stroke-[4]" />
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </motion.div>

            <FeatureStack items={["Auto check-in", "Real-time logs", "Timesheets", "Audit-ready exports"]} />
          </div>

          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0"
          >
            <div className="relative z-10 overflow-hidden rounded-[3rem] border border-purple-900/30 bg-slate-950 p-4 shadow-2xl shadow-purple-900/20">
              <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-purple-600/15 blur-[60px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-fuchsia-600/15 blur-[60px]" />

              <div className="relative rounded-[2.5rem] border border-purple-900/35 bg-slate-900/60 p-5 sm:p-8 backdrop-blur-xl">
                <div className="mb-5 sm:mb-8 flex items-center justify-between">
                  <div>
                    <h4 className="flex items-center gap-2 text-xl font-black text-white">
                      Real-time Tracking
                      <div className="mt-0.5 h-2 w-2 rounded-full bg-fuchsia-500 animate-pulse" />
                    </h4>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Live from cloud workspace
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#7e22ce] to-fuchsia-600 shadow-lg shadow-purple-500/25">
                    <Clock className="text-white" size={20} />
                  </div>
                </div>

                <div className="mb-5 sm:mb-8 space-y-3 sm:space-y-4">
                  <div className="group flex items-center justify-between rounded-3xl border border-purple-900/20 bg-black/50 p-4 transition-all hover:border-purple-500/35">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-900/40 bg-slate-900 text-xs font-black text-purple-300">
                        AJ
                      </div>
                      <div>
                        <p className="text-xs font-black text-white">Arjun Jetti</p>
                        <p className="text-[10px] font-bold text-slate-500">
                          Clocked In · 09:02 AM
                        </p>
                      </div>
                    </div>
                    <div className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-[9px] font-black uppercase text-purple-300">
                      On Time
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-3xl border border-purple-900/15 bg-black/40 p-4 opacity-60">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-900/30 bg-slate-900 text-xs font-black text-purple-300">
                        SD
                      </div>
                      <div>
                        <p className="text-xs font-black text-white">Smit Doshi</p>
                        <p className="text-[10px] font-bold text-slate-500">
                          Clocked Out · 06:15 PM
                        </p>
                      </div>
                    </div>
                    <div className="rounded-full border border-slate-500/20 bg-slate-500/10 px-2.5 py-1 text-[9px] font-black uppercase text-slate-500">
                      Archive
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button type="button" className="btn-primary flex-1 px-6 py-4 !border-0 !ring-0 !outline-none">
                    <FileText size={16} className="text-white" />
                    <span className="text-[11px] font-black uppercase tracking-wider text-white">
                      Export Audit Log
                    </span>
                  </button>
                  <div className="flex w-14 cursor-pointer items-center justify-center rounded-2xl border border-purple-900/30 bg-slate-800 transition-all active:scale-95 hover:bg-slate-700">
                    <Download size={18} className="my-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-10 -bottom-10 -z-10 h-64 w-64 rounded-full bg-purple-600/20 blur-[80px]" />
            <div className="absolute -top-10 -left-10 -z-10 h-48 w-48 rounded-full bg-fuchsia-600/10 blur-[70px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
