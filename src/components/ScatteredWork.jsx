"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import {
  CheckCircle2, AlertCircle, TrendingUp, ShieldCheck,
  ArrowRight, Zap, Target, Rocket, X
} from "lucide-react";
import problemImage from '../assets/problem.webp';
import solutionImage from '../assets/Solution1.webp';

export default function ScatteredWork() {
  const problems = [
    "Projects in one place.",
    "Tasks in another.",
    "Scattered chats.",
    "Discrete CRMs.",
  ];

  const solutions = [
    { text: "Plan work", desc: "Strategy to task alignment" },
    { text: "Collaborate", desc: "Team sync in real-time" },
    { text: "Track performance", desc: "KPIs and velocity" },
    { text: "Understand results", desc: "Automated reporting" },
  ];

  return (
    <section className="w-full py-8 sm:py-12 px-2 sm:px-6 bg-white relative font-sans">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center mb-6 px-1 sm:px-4">
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
            className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
          >
            One System
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
          <div className="w-full lg:w-1/2 px-6 pt-4 pb-6 sm:px-10 sm:pt-6 sm:pb-10 lg:px-12 lg:pt-6 lg:pb-12 bg-gradient-to-br from-red-50/30 via-white to-white border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col items-center lg:items-start text-center lg:text-left h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500 border border-purple-100">
                <AlertCircle size={18} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">The Problem</span>
            </div>

            <div className="flex flex-col items-center lg:items-start lg:justify-start">
              <h3 className="text-2xl md:text-[2rem] lg:text-[2.25rem] font-black text-slate-800 tracking-normal leading-[1.05] mb-3">
                Work Across <br />
                <span className="text-purple-500">Too Many Tools.</span>
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed mb-4 max-w-xl">
                The average team struggles with 8–12 tools daily.
              </p>
            </div>

            {/* Problem Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="w-full mb-6 rounded-2xl overflow-hidden h-[130px] sm:h-[160px]"
            >
              <img
                src={problemImage}
                alt="Scattered work across tools"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Negative Result Box */}
            <div className="p-6 bg-red-50/40 rounded-2xl border border-red-200 mt-auto w-full">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400 mb-3">Daily Friction</p>
              <ul className="space-y-3">
                {[
                  "30% time lost in context switching",
                  "Fragmented data & missed deadlines",
                  "Zero visibility into real performance"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-black text-slate-800">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-red-400 shadow-sm border border-red-100">
                      <X size={11} strokeWidth={3.5} className="shrink-0" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* THE SOLUTION SIDE */}
          <div className="w-full lg:w-1/2 px-6 pt-4 pb-6 sm:px-10 sm:pt-6 sm:pb-10 lg:px-12 lg:pt-6 lg:pb-12 relative bg-gradient-to-br from-emerald-50/30 via-white to-white flex flex-col items-center lg:items-start text-center lg:text-left h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-[#7e22ce] border border-purple-100">
                <CheckCircle2 size={18} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#7e22ce]">The Solution</span>
            </div>

            <div className="flex flex-col items-center lg:items-start lg:justify-start">
              <h3 className="text-2xl md:text-[2rem] lg:text-[2.25rem] font-black text-slate-900 tracking-normal leading-[1.05] mb-3">
                One Central Hub. <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Absolute Clarity.
                </motion.span>
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed mb-4 max-w-xl">
                KaryaUp turns your business into one unified engine.
              </p>
            </div>

            {/* Solution Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="w-full mb-6 rounded-2xl overflow-hidden h-[160px] sm:h-[200px]"
            >
              <img
                src={solutionImage}
                alt="Unified solution with KaryaUp"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* List and Outcome Section */}
            <div className="mt-auto lg:mt-6 flex flex-col items-center gap-6 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left w-full">
              {/* Transformation Steps */}
              <div className="relative flex flex-col items-start justify-start text-left gap-6 w-full lg:w-auto">
                {/* Animated Vertical Line */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  className="hidden sm:block absolute left-[8px] top-[14px] bottom-3 w-[4px] origin-top rounded-full bg-gradient-to-b from-[#7e22ce] to-[#c084fc] z-0"
                />

                {[
                  { text: "Plan the Karya.", icon: Target },
                  { text: "Move the Karya.", icon: Zap },
                  { text: "Complete the Karya.", icon: Rocket },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.4 + 0.2 }}
                    className="relative z-10 flex flex-row items-center justify-start text-left gap-4 !w-full !mr-auto"
                  >
                    <div className="hidden sm:block w-5 h-5 rounded-full bg-[#7e22ce] flex-shrink-0" />
                    <span className="text-xl font-black text-slate-800 tracking-normal leading-tight whitespace-nowrap">{step.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Small Outcome Badge */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-[210px] lg:max-w-[230px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 p-4 flex flex-col gap-3 shadow-lg shadow-emerald-100/50 lg:-mr-2"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-600 border border-emerald-200">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-500 mb-0.5">Net Gain</p>
                    <p className="font-black text-sm tracking-normal text-slate-800">40% Boost</p>
                  </div>
                </div>
                <div className="h-[1px] w-full bg-emerald-200" />
                <div className="relative z-10 flex items-center gap-2 px-1">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest whitespace-nowrap">Enterprise Class</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
