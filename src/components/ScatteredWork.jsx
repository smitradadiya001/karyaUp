"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import {
  CheckCircle2, AlertCircle, TrendingUp, ShieldCheck,
  ArrowRight, Zap, Target, Rocket, X
} from "lucide-react";

export default function ScatteredWork() {
  const problems = [
    "Projects in one place.",
    "Tasks in another.",
    "Conversations somewhere else.",
    "CRM in a separate system.",
  ];

  const solutions = [
    { text: "Plan work", desc: "Strategy to task alignment" },
    { text: "Collaborate", desc: "Team sync in real-time" },
    { text: "Track performance", desc: "KPIs and velocity" },
    { text: "Understand results", desc: "Automated reporting" },
  ];

  return (
    <section className="w-full py-8 sm:py-12 px-6 bg-white relative font-sans">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center mb-6 px-4">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-[#7e22ce] bg-purple-50 px-4 py-1.5 rounded-full border border-purple-100 mb-3"
          >
            Efficiency Audit
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[0.95]"
          >
            Consolidate Your <br className="hidden md:block" />Tools
            For<br className="hidden md:block" /> <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-[#ec4899] to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Maximum Output.
            </motion.span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="bg-white border border-slate-200 rounded-[3rem] shadow-2xl shadow-purple-900/5 overflow-hidden flex flex-col lg:flex-row max-w-[1300px] mx-auto"
        >
          {/* THE PROBLEM SIDE */}
          <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-12 bg-white border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col items-center lg:items-start text-center lg:text-left h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500 border border-purple-100">
                <AlertCircle size={18} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">The Problem</span>
            </div>

            <div className="flex flex-col items-center lg:items-start lg:justify-start">
              <h3 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tighter leading-[0.9] mb-4">
                Work is Scattered <br className="md:hidden" /> Across <br />
                <span className="text-purple-500">Too Many Tools.</span>
              </h3>
              <p className="text-slate-500 font-medium text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                The average team struggles with 8–12 tools daily.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 w-full">
              {problems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-3.5 sm:p-4 rounded-xl border border-slate-100 bg-white shadow-sm transition-all flex items-center"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                    <span className="font-black text-slate-800 text-base">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Negative Result Box */}
            <div className="p-6 bg-purple-50/50 rounded-2xl border border-purple-100 mt-auto w-full">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400 mb-3">Daily Friction</p>
              <ul className="space-y-3">
                {[
                  "30% time lost in context switching",
                  "Fragmented data & missed deadlines",
                  "Zero visibility into real performance"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-black text-purple-700">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-purple-500 shadow-sm border border-purple-100">
                      <X size={11} strokeWidth={3.5} className="shrink-0" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* THE SOLUTION SIDE */}
          <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-12 relative bg-white flex flex-col items-center lg:items-start text-center lg:text-left h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-[#7e22ce] border border-purple-100">
                <CheckCircle2 size={18} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#7e22ce]">The Solution</span>
            </div>

            <div className="flex flex-col items-center lg:items-start lg:justify-start">
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-4">
                One Central Hub. <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Absolute Clarity.
                </motion.span>
              </h3>
              <p className="text-slate-500 font-medium text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                KaryaUp brings every thread of your business into a single, high-fidelity pulse built for elite execution.
              </p>
            </div>

            {/* Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 mt-2 w-full">
              {solutions.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, borderColor: "#7e22ce" }}
                  className="p-3.5 sm:p-4 rounded-xl border border-slate-100 bg-white shadow-sm transition-all group flex flex-col justify-center"
                >
                  <h4 className="font-black text-slate-800 text-base mb-1 group-hover:text-[#7e22ce] transition-colors">{item.text}</h4>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* List and Outcome Section */}
            <div className="mt-auto lg:mt-6 flex flex-col items-center gap-6 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left w-full">
              {/* Transformation Steps */}
              <div className="flex flex-col lg:items-start gap-4">
                {[
                  { text: "Plan the Karya.", icon: Target },
                  { text: "Move the Karya.", icon: Zap },
                  { text: "Complete the Karya.", icon: Rocket },
                ].map((step, i) => (
                  <div key={i} className="flex items-center justify-center gap-4 py-0.5 lg:justify-start">
                    <div className="w-2 h-2 rounded-full bg-[#7e22ce] shadow-[0_0_8px_rgba(126,34,206,0.4)] flex-shrink-0" />
                    <span className="text-lg font-black text-slate-800 tracking-tight leading-tight whitespace-nowrap">{step.text}</span>
                  </div>
                ))}
              </div>

              {/* Small Outcome Badge */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-[210px] lg:max-w-[230px] overflow-hidden rounded-[1.5rem] bg-slate-900 p-4 text-white flex flex-col gap-3 shadow-2xl shadow-purple-900/30 lg:-mr-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7e22ce]/10 to-transparent pointer-events-none" />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 border border-emerald-500/10">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 mb-0.5">Net Gain</p>
                    <p className="font-black text-sm tracking-tight">40% Boost</p>
                  </div>
                </div>
                <div className="h-[1px] w-full bg-slate-800" />
                <div className="relative z-10 flex items-center gap-2 px-1">
                  <ShieldCheck size={14} className="text-purple-400" />
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest whitespace-nowrap">Enterprise Class</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
