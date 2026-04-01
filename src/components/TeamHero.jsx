import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Mail, MoreVertical, ChevronDown, Search, UserPlus } from 'lucide-react';
import FeatureStack from "./FeatureStack";

const DarkRoleManagementPreview = () => {
  return (
    <div className="relative w-full max-w-[480px] mx-auto z-10 pointer-events-none select-none">
      {/* Container Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] rounded-[2rem] transform -rotate-1 scale-[1.02] opacity-50 blur-sm -z-20 border border-white/5" />

      {/* Main Dashboard Panel */}
      <div className="bg-[#0f172a]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-5 sm:p-6 shadow-2xl shadow-black/40 relative overflow-hidden">

        {/* Top Navigation Bar */}
        <div className="flex items-center gap-3 mb-5 relative z-20">
          <div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 flex items-center gap-2.5 text-slate-400 shadow-inner">
            <Search size={16} className="opacity-80" />
            <span className="text-sm font-medium">Search team members...</span>
          </div>
          <div className="bg-gradient-to-tr from-[#7e22ce] to-[#a855f7] text-white px-4 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg">
            <UserPlus size={16} /> Add 
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-5 mb-5 border-b border-white/10 pb-3 overflow-x-auto scrollbar-hide relative z-20">
          <div className="text-white text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap relative">
            All (2)
            <div className="absolute -bottom-[13px] left-0 w-full h-[2px] bg-gradient-to-r from-fuchsia-500 to-purple-600" />
          </div>
          {["Managers (0)", "Employees (1)", "Sales (0)"].map(tab => (
            <div key={tab} className="text-slate-400 text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
              {tab}
            </div>
          ))}
        </div>

        {/* Cards Stack */}
        <div className="space-y-3.5 relative z-20">
          
          {/* Card 1: Administrator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col gap-3.5 relative shadow-xl shadow-black/20"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-lg ring-1 ring-purple-500/30">
                  t
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base leading-tight">testabc2</h4>
                  <div className="flex items-center gap-1.5 text-slate-400 mt-1">
                    <Mail size={12} />
                    <span className="text-xs font-semibold tracking-wide">testabc2@gmail.com</span>
                  </div>
                </div>
              </div>
              <button className="text-slate-500">
                <MoreVertical size={18} />
              </button>
            </div>

            <div className="h-px w-full bg-white/5" />

            <div className="flex justify-between items-center relative">
              <div className="flex items-center gap-1.5 px-3 py-1.5 border border-purple-500/40 rounded-lg text-xs font-bold text-purple-200 bg-purple-500/20 ring-1 ring-purple-400/20">
                Administrator <ChevronDown size={14} className="ml-0.5 opacity-80" />
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500 tracking-wide uppercase">Joined Feb 23, 2026</span>
            </div>
          </motion.div>

          {/* Card 2: Team Member */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col gap-3.5 relative shadow-xl shadow-black/20"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-lg ring-1 ring-blue-500/30">
                  t
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base leading-tight">testabc</h4>
                  <div className="flex items-center gap-1.5 text-slate-400 mt-1">
                    <Mail size={12} />
                    <span className="text-xs font-semibold tracking-wide">testabc@gmail.com</span>
                  </div>
                </div>
              </div>
              <button className="text-slate-500">
                <MoreVertical size={18} />
              </button>
            </div>

            <div className="h-px w-full bg-white/5" />

            <div className="flex justify-between items-center relative">
              <div className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-lg text-xs font-bold text-slate-300 bg-white/5">
                Team Member <ChevronDown size={14} className="ml-0.5 opacity-80" />
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500 tracking-wide uppercase">Joined Feb 23, 2026</span>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default function TeamHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-[0.15em] mb-2"
            >
              Features <span className="opacity-60">/</span> Team
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]"
            >
              Structure That{" "}
              <span className="block">
                Scales With{" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Ambition.
                </motion.span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: isMobile ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="mt-4 sm:mt-6 space-y-3 w-full"
            >
              {[
                "Define roles, distribute ownership, and get complete visibility into how your team's capacity is being used.",
                "Stay ahead of burnout and workload issues before they become a problem, not after."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 text-left">
                  <div className="mt-1.5 w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-[#7e22ce] stroke-[4]" />
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </motion.div>

            <FeatureStack items={["Roles & permissions", "Workload visibility", "Department hierarchy", "Member profiles"]} />
          </div>

          {/* Right Side Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: isMobile ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            <DarkRoleManagementPreview />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
