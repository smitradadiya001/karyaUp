"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { 
  CheckCircle2, AlertCircle, TrendingUp, ShieldCheck, 
  ArrowRight, Zap, Target, Rocket
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
    <section className="w-full pt-16 pb-12 sm:pb-16 px-6 bg-white relative overflow-hidden font-sans">

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center mb-10 px-4">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[#7e22ce] bg-purple-50 px-5 py-2 rounded-full border border-purple-100 mb-6"
          >
            Efficiency Audit
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9]"
          >
            Consolidate your <br className="hidden md:block" />tools 
            for<br className="hidden md:block" /> <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-[#ec4899] to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              maximum output.
            </motion.span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="bg-white border border-slate-200 rounded-[3rem] shadow-2xl shadow-purple-900/5 overflow-hidden flex flex-col lg:flex-row"
        >
          {/* THE PROBLEM SIDE */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-white border-b lg:border-b-0 lg:border-r border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500 border border-red-100">
                <AlertCircle size={20} />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-slate-400">The Problem</span>
            </div>

            <h3 className="text-3xl font-black text-slate-800 tracking-tight leading-none mb-4">
              Work is scattered across <br />
              <span className="text-red-500">too many tools.</span>
            </h3>

            <p className="text-slate-500 font-bold text-sm mb-6">
              The average team struggles with 8–12 tools daily.
            </p>

            <div className="space-y-3 mb-8">
              {problems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-slate-700 font-bold text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  {item}
                </motion.div>
              ))}
            </div>

            {/* Negative Result Box */}
            <div className="p-7 bg-red-50/50 rounded-3xl border border-red-100">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400 mb-4">Daily Friction</p>
              <ul className="space-y-3">
                {[
                  "30% time lost in context switching",
                  "Fragmented data & missed deadlines",
                  "Zero visibility into real performance"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-black text-red-700">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-red-500 shadow-sm border border-red-100">
                      <span className="text-[10px] scale-150">×</span>
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* THE SOLUTION SIDE */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 relative bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-[#7e22ce] border border-purple-100">
                <CheckCircle2 size={20} />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-[#7e22ce]">The Solution</span>
            </div>

            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-6">
              One central hub. <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Absolute clarity.
              </motion.span>
            </h3>

            <p className="text-slate-500 font-medium text-lg leading-relaxed mb-6 max-w-xl">
              KaryaUp brings every thread of your business into a single, high-fidelity pulse built for elite execution.
            </p>

            {/* Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {solutions.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, borderColor: "#7e22ce" }}
                  className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm transition-all group"
                >
                  <h4 className="font-black text-slate-800 text-lg mb-1 group-hover:text-[#7e22ce] transition-colors">{item.text}</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* List and Outcome Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-8">
              {/* Transformation Steps */}
              <div className="space-y-4">
                {[
                  { text: "Plan the Karya.", icon: Target },
                  { text: "Move the Karya.", icon: Zap },
                  { text: "Complete the Karya.", icon: Rocket },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7e22ce]" />
                    <span className="text-lg font-black text-slate-800">{step.text}</span>
                  </div>
                ))}
              </div>

              {/* Small Outcome Badge */}
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="p-5 bg-slate-900 rounded-[2rem] text-white flex flex-col gap-4 shadow-xl shadow-purple-900/20 relative overflow-hidden min-w-[200px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7e22ce]/10 to-transparent pointer-events-none" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 mb-0.5">Net Gain</p>
                    <p className="font-black text-base tracking-tight">40% Boost</p>
                  </div>
                </div>
                <div className="h-[1px] w-full bg-slate-800" />
                <div className="relative z-10 flex items-center gap-2 px-1">
                  <ShieldCheck size={14} className="text-purple-400" />
                  <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest whitespace-nowrap">Enterprise Class</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}