import React from "react";
import { motion } from "framer-motion";
import { Check, Clock, Activity, FileText, Download } from "lucide-react";

export default function AttendanceHero() {
  const tags = [
    "Auto check-in",
    "Real-time logs",
    "Timesheets",
    "Audit-ready exports",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white pt-24 pb-20">
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/2 rounded-full bg-purple-100/60 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] -translate-x-1/4 translate-y-1/2 rounded-full bg-fuchsia-100/40 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-100 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-purple-700 shadow-sm"
            >
              <Activity size={14} className="animate-pulse" />
              Management <span className="opacity-40">/</span> Monitoring
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="mt-6 text-5xl font-black tracking-tight leading-[1.05] text-slate-900 md:text-6xl lg:text-7xl"
            >
              Attendance{" "}
              <span className="mt-2 block">
                tracked.{" "}
                <motion.span
                  className="bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Records kept.
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-slate-600 md:text-xl"
            >
              Presence tracked. Records kept. No follow-ups required. Attendance
              logs itself in real time so your data is always clean, compliant,
              and ready when you need it, not just at appraisal time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="mt-10 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition-all hover:border-purple-200 hover:shadow-md"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-100 transition-transform group-hover:scale-110">
                    <Check size={14} className="stroke-[4] text-[#7e22ce]" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-600">
                    {tag}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-tr from-[#7e22ce]/16 via-fuchsia-500/10 to-transparent blur-3xl opacity-60" />

            <div className="relative z-10 overflow-hidden rounded-[3rem] border border-purple-900/30 bg-slate-950 p-4 shadow-2xl shadow-purple-900/20">
              <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-purple-600/15 blur-[60px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-fuchsia-600/15 blur-[60px]" />

              <div className="relative rounded-[2.5rem] border border-purple-900/35 bg-slate-900/60 p-8 backdrop-blur-xl">
                <div className="mb-8 flex items-center justify-between">
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

                <div className="mb-8 space-y-4">
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
                  <div className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#7e22ce] to-fuchsia-600 px-6 py-4 transition-all active:scale-95 hover:from-purple-700 hover:to-fuchsia-500">
                    <FileText size={16} className="text-white" />
                    <span className="text-[11px] font-black uppercase tracking-wider text-white">
                      Export Audit Log
                    </span>
                  </div>
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
