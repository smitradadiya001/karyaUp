import React from "react";
import { motion } from "framer-motion";
import { Check, MessageSquare, Hash, FileText, Reply, Users, Bot, Sparkles, Send } from "lucide-react";
import { FeatureCard, CTABanner } from "../../components/SubPageLayout";
import FeatureCTA from "../../components/FeatureCTA";
import agentAssignImg from "../../assets/Agent-Assign.png";
import chatImg from "../../assets/chat.png";

export default function Chat() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-0">
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest"
              >
                Features <span className="opacity-60">/</span> Chat
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]"
              >
                Where Conversations
                <span className="block mt-2">
                  Turn Into{" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Action
                  </motion.span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="mt-6 space-y-4 max-w-2xl mx-auto lg:mx-0"
              >
                <div className="flex items-start gap-3.5 text-left">
                  <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#7e22ce] stroke-[4]" />
                  </div>
                  <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                    Conversations that stay close to the work. Chat directly inside projects, tasks, and teams — so context never gets lost in a separate inbox or a thread no one can find later.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 max-w-md mx-auto lg:mx-0"
              >
                {[
                  { label: "Threaded replies", icon: Reply },
                  { label: "Direct messages", icon: MessageSquare },
                  { label: "Project channels", icon: Hash },
                  { label: "File sharing", icon: FileText }
                ].map((tag) => (
                  <div key={tag.label} className="group flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-slate-50/50 border border-slate-200/60 shadow-sm hover:border-purple-200 hover:bg-purple-50/50 transition-all duration-300">
                    <div className="w-5 h-5 rounded-md bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <tag.icon className="w-3 h-3 text-[#7e22ce] stroke-[4]" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-600 truncate">{tag.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Hero Preview */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="relative lg:-mr-16"
            >
              <div className="absolute -inset-8 bg-gradient-to-tr from-[#7e22ce]/16 via-fuchsia-500/8 to-transparent blur-3xl opacity-55" />

              {/* Chat Card */}
              <div className="relative border border-purple-900/30 rounded-3xl shadow-2xl shadow-purple-900/20 bg-slate-950 overflow-hidden flex flex-col h-[400px] sm:h-[450px]">
                {/* Glow blobs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/15 rounded-full blur-[60px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-600/15 rounded-full blur-[60px] pointer-events-none" />

                {/* Header */}
                <div className="px-5 py-4 bg-slate-900/60 backdrop-blur-md border-b border-purple-900/40 flex items-center justify-between shadow-sm z-10">
                  <div className="flex items-center gap-2">
                    {/* Group Logo Avatar Stack */}
                    <div className="flex -space-x-2 mr-1">
                      <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[9px] font-black text-white ring-2 ring-slate-900 z-30">P</div>
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[9px] font-black text-white ring-2 ring-slate-900 z-20">A</div>
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[9px] font-black text-white ring-2 ring-slate-900 z-10">S</div>
                    </div>
                    <div className="font-black text-white tracking-tight">Project Alpha</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping opacity-75" />
                      <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full z-10 border-2 border-white ring-1 ring-slate-100" />
                    </div>
                    <span className="text-[11px] font-black uppercase text-emerald-600 tracking-wider">3 members active now</span>
                  </div>
                </div>

                {/* Messages Base */}
                <div className="flex-1 p-5 overflow-y-auto space-y-6 flex flex-col justify-end pb-8 custom-scrollbar">
                  {/* Message 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex gap-3 items-end justify-end relative z-10"
                  >
                    <div className="flex flex-col items-end">
                      <span className="text-[11px] font-black uppercase tracking-wide text-slate-500 mb-1 mr-1">Priya</span>
                      <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 border border-purple-500/20 text-white px-4 py-3 rounded-2xl rounded-br-sm text-sm font-medium shadow-[0_0_20px_rgba(217,70,239,0.3)]">
                        Designs are ready for review, dropping link below
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-black shadow-[0_0_15px_rgba(168,85,247,0.4)] ring-2 ring-slate-900 mb-1 shrink-0">
                      P
                    </div>
                  </motion.div>

                  {/* Message 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="flex gap-3 items-end relative z-10"
                  >
                    <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-black shadow-[0_0_15px_rgba(59,130,246,0.4)] ring-2 ring-slate-900 mb-1 shrink-0">
                      A
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-black uppercase tracking-wide text-slate-500 mb-1 ml-1">Arjun</span>
                      <div className="bg-slate-900 border border-slate-800 text-slate-300 px-4 py-3 rounded-2xl rounded-bl-sm text-sm font-medium shadow-sm">
                        On it — will check before EOD
                      </div>
                    </div>
                  </motion.div>

                  {/* Message 3 */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.9 }}
                    className="flex gap-3 items-end relative z-10"
                  >
                    <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-black shadow-[0_0_15px_rgba(16,185,129,0.4)] ring-2 ring-slate-900 mb-1 shrink-0">
                      S
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-black uppercase tracking-wide text-slate-500 mb-1 ml-1">Sara</span>
                      <div className="bg-slate-900 border border-slate-800 text-slate-300 px-4 py-3 rounded-2xl rounded-bl-sm text-sm font-medium shadow-sm">
                        QA flagged one issue, created a task already
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Input Area (Static representation) */}
                <div className="p-4 bg-slate-900/60 backdrop-blur-md border-t border-purple-900/40 mt-auto z-10">
                  <div className="h-10 w-full bg-slate-800/80 border border-slate-700 rounded-full flex items-center px-4 animate-pulse">
                    <span className="text-xs text-slate-400 font-black uppercase tracking-wide">Message Project Alpha...</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Chat Modes Section */}
      <section className="bg-slate-50/50 border-y border-slate-200/50 py-20 mt-12 mb-16 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-purple-500/5 to-transparent blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4"
            >
              Chat designed for <br className="hidden sm:block" />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                every scenario
              </motion.span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 font-medium"
            >
              Whether you're blasting an update to the company or hashing out a quick design detail privately, we have a space for it.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 1. Group Chat */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:bg-slate-950 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-900/30 transition-all duration-500 cursor-default">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-fuchsia-600/15 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-purple-900/40 group-hover:border-purple-500/30 group-hover:text-purple-400 transition-colors duration-500">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="relative z-10 text-2xl font-black text-slate-900 group-hover:text-white transition-colors duration-500 mb-3">Group Chat</h3>
              <p className="relative z-10 text-slate-600 group-hover:text-slate-300 font-medium mb-8 min-h-[48px] transition-colors duration-500">"Collaborate with your entire team in real time"</p>
              <div className="relative z-10 space-y-4">
                {["Team discussions", "File sharing", "Mentions & threads", "Instant updates"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors duration-500">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-slate-700 font-bold text-sm tracking-wide group-hover:text-slate-200 transition-colors duration-500">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Personal Chat */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:bg-slate-950 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-900/30 transition-all duration-500 cursor-default">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-fuchsia-600/15 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 w-12 h-12 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-purple-900/40 group-hover:border-purple-500/30 group-hover:text-purple-400 transition-colors duration-500">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="relative z-10 text-2xl font-black text-slate-900 group-hover:text-white transition-colors duration-500 mb-3">Personal Chat</h3>
              <p className="relative z-10 text-slate-600 group-hover:text-slate-300 font-medium mb-8 min-h-[48px] transition-colors duration-500">"Quick 1:1 conversations without noise"</p>
              <div className="relative z-10 space-y-4">
                {["Direct messaging", "Fast decision-making", "Private discussions"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors duration-500">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-slate-700 font-bold text-sm tracking-wide group-hover:text-slate-200 transition-colors duration-500">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Project-Based Chat */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:bg-slate-950 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-900/30 transition-all duration-500 cursor-default">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-fuchsia-600/15 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-900/40 group-hover:border-purple-500/30 group-hover:text-purple-400 transition-colors duration-500">
                <Hash className="w-6 h-6" />
              </div>
              <h3 className="relative z-10 text-2xl font-black text-slate-900 group-hover:text-white transition-colors duration-500 mb-3">Project-Based Chat</h3>
              <p className="relative z-10 text-slate-600 group-hover:text-slate-300 font-medium mb-8 min-h-[48px] transition-colors duration-500">"Every project gets its own conversation space"</p>
              <div className="relative z-10 space-y-4">
                {["Chat inside projects", "Context never lost", "Link tasks, files, updates"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors duration-500">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-slate-700 font-bold text-sm tracking-wide group-hover:text-slate-200 transition-colors duration-500">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>







      {/* AI Agent Section */}
      <section className="relative bg-slate-950 py-8 lg:py-12 overflow-hidden w-full mt-10">
        {/* Animated Cyber/Circuit Background mimicking reference image */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none select-none overflow-hidden">
          <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="circuitGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                <stop offset="50%" stopColor="#d946ef" stopOpacity="1" />
                <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Left side traces */}
            <motion.path
              d="M 100 -50 V 200 L 150 250 V 600 L 100 650 V 1000"
              stroke="url(#circuitGlow)" strokeWidth="1" fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
            />
            <motion.path
              d="M 180 -50 V 250 L 230 300 V 500 L 180 550 V 1000"
              stroke="url(#circuitGlow)" strokeWidth="0.8" fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 5.5, ease: "easeInOut", delay: 1.2, repeat: Infinity, repeatType: "mirror" }}
            />
            <motion.path
              d="M 250 -50 V 150 L 200 200 V 450 L 300 550 V 1000"
              stroke="url(#circuitGlow)" strokeWidth="1.5" fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 5, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatType: "mirror" }}
            />
            <motion.path
              d="M 400 -50 V 350 L 350 400 V 700 L 450 800 V 1000"
              stroke="url(#circuitGlow)" strokeWidth="0.5" fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 6, ease: "easeInOut", delay: 2, repeat: Infinity, repeatType: "mirror" }}
            />
            {/* Right side traces */}
            <motion.path
              d="M 950 -50 V 200 L 900 250 V 550 L 1000 650 V 1000"
              stroke="url(#circuitGlow)" strokeWidth="0.7" fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4.8, ease: "easeInOut", delay: 0.8, repeat: Infinity, repeatType: "mirror" }}
            />
            <motion.path
              d="M 1100 -50 V 300 L 1150 350 V 600 L 1050 700 V 1000"
              stroke="url(#circuitGlow)" strokeWidth="1" fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4.5, ease: "easeInOut", delay: 1, repeat: Infinity, repeatType: "mirror" }}
            />
            <motion.path
              d="M 1300 -50 V 100 L 1200 200 V 550 L 1350 700 V 1000"
              stroke="url(#circuitGlow)" strokeWidth="1.5" fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 6, ease: "easeInOut", delay: 0.2, repeat: Infinity, repeatType: "mirror" }}
            />
          </svg>
        </div>

        {/* Floating Violet Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 blur-[130px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-fuchsia-600/15 blur-[130px] rounded-full mix-blend-screen pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* AI Text Left */}
              <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="badge-glass-multicolor"
                >
                  <div>
                    KaryaUp AI
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl sm:text-5xl lg:text-5xl font-black text-white leading-tight mb-4 tracking-tight"
                >
                  Your personal <br className="hidden sm:block" />
                  <span className="glass-text-gradient-shimmer bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-[length:200%_auto] inline-block">
                    Agent in every chat
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-base sm:text-lg text-slate-400 font-medium mb-6 leading-relaxed max-w-xl"
                >
                  Don't just chat—execute. Ask the AI agent to summarize unread threads, extract action items, create tasks directly from messages, or draft replies for you.
                </motion.p>

                {/* Feature bullets */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-3"
                >
                  {[
                    "Summarize 100+ message threads instantly",
                    "Auto-create tasks from action items",
                    "Draft context-aware replies",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-fuchsia-400" />
                      </div>
                      <span className="text-slate-300 font-medium">{item}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Side - Agent Assign Graphic with Rainbow Border */}
              <div className="relative flex justify-center w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-[380px] w-fit p-[1.5px] rounded-3xl overflow-hidden group"
                >
                  {/* Animated Rainbow Border */}
                  <div className="absolute inset-[-100%] bg-[conic-gradient(from_var(--border-angle),#ff0000,#ff7f00,#ffff00,#00ff00,#0000ff,#4b0082,#9400d3,#ff0000)] animate-[spin-border_4s_linear_infinite]" />

                  {/* Image Wrapper */}
                  <div className="relative h-full w-full bg-slate-950 rounded-[calc(1.5rem-1.5px)] flex items-center justify-center p-1.5 overflow-hidden z-10">
                    <img
                      src={agentAssignImg}
                      alt="AI Agent Workflow"
                      className="h-full w-auto object-contain rounded-xl"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature CTA Section */}
      <FeatureCTA
        title={<>Chat that connects to <br /> every project you run</>}
        description="Communicate seamlessly within your tasks, documents, and workflows—so you never lose context."
        image={chatImg}
        imageAlt="KaryaUp Chat Interface"
        containerClassName="mt-10 mb-6"
        paddingClassName="p-3 lg:p-4 lg:py-6"
      />
    </div>
  );
}
