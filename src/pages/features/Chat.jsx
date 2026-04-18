import React, { useState, useEffect, useRef } from "react";
import {
  motion as Motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Check,
  X,
  MessageSquare,
  FileText,
  Reply,
  Users,
  Bot,
  Sparkles,
  Send,
  Kanban,
  Zap,
  Shield,
  Link as LinkIcon,
  Briefcase,
} from "lucide-react";
import { FeatureCard, CTABanner } from "../../components/SubPageLayout";

import FeatureCTA from "../../components/FeatureCTA";
import FeatureStack from "../../components/FeatureStack";
import agentAssignImg from "../../assets/Agent-Assign.webp";
import chatImg from "../../assets/Chat.webp";
import { Helmet } from "react-helmet-async";

export default function Chat() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const TiltCard = ({ children, className }) => {
    const ref = useRef(null);
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);

    const rotateX = useSpring(useTransform(rawY, [-1, 1], [10, -10]), {
      stiffness: 300,
      damping: 30,
    });
    const rotateY = useSpring(useTransform(rawX, [-1, 1], [-10, 10]), {
      stiffness: 300,
      damping: 30,
    });

    const getCoords = (rect, clientX, clientY) => ({
      x: ((clientX - rect.left) / rect.width) * 2 - 1,
      y: ((clientY - rect.top) / rect.height) * 2 - 1,
    });

    const handleMouseMove = (e) => {
      if (isMobile) return;
      const { x, y } = getCoords(ref.current.getBoundingClientRect(), e.clientX, e.clientY);
      rawX.set(x);
      rawY.set(y);
    };

    const handleMouseLeave = () => {
      if (isMobile) return;
      rawX.set(0);
      rawY.set(0);
    };

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      const { x, y } = getCoords(ref.current.getBoundingClientRect(), touch.clientX, touch.clientY);
      rawX.set(x);
      rawY.set(y);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const { x, y } = getCoords(ref.current.getBoundingClientRect(), touch.clientX, touch.clientY);
      rawX.set(x);
      rawY.set(y);
    };

    const handleTouchEnd = () => {
      rawX.set(0);
      rawY.set(0);
    };

    return (
      <Motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transformPerspective: 1000,
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        tabIndex={0}
        className={`${className} active:border-purple-300 active:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/30`}
      >
        <div style={{ transform: "translateZ(20px)" }} className="h-full flex flex-col">
          {children}
        </div>
      </Motion.div>
    );
  };

  const sectionSpacing = "py-12 sm:py-16 lg:py-20";

  return (
    <>
      <Helmet>
        {/* Title (Chrome Tab) */}
        <title>Team Chat & Collaboration | Karyaup Features</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Collaborate with your team using Karyaup chat. Message inside projects, tasks, and teams with threaded replies, direct messages, and AI-powered workflows."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="team chat software, project communication tool, collaboration platform, chat inside tasks, AI chat assistant, Karyaup"
        />

        {/* Author */}
        <meta name="author" content="Karyaup" />

        {/* Open Graph (Essential Only) */}
        <meta
          property="og:title"
          content="Team Chat & Collaboration | Karyaup"
        />
        <meta
          property="og:description"
          content="Chat inside projects and tasks with real-time collaboration and AI-powered assistance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/chat" />
        <meta property="og:site_name" content="Karyaup" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://karyaup.com/features/chat" />
      </Helmet>

      <div className="min-h-screen bg-white pt-24 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
        {/* Hero Section */}
        <section className="relative pt-4 sm:pt-6 lg:pt-4 pb-2 sm:pb-4 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start lg:self-start lg:pt-2">
                <Motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest "
                >
                  CHAT — COLLABORATE IN REAL-TIME
                </Motion.div>

                <Motion.h1
                  initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.08,
                  }}
                  className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
                >
                  Where Conversations
                  <span className="block mt-2">
                    Turn Into{" "}
                    <Motion.span
                      className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                      animate={{
                        backgroundPosition: ["0% center", "-200% center"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      Action
                    </Motion.span>
                  </span>
                </Motion.h1>

                <Motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.18,
                  }}
                  className="mt-5 sm:mt-6 space-y-4 max-w-2xl w-full mx-auto lg:mx-0"
                >
                  <div className="flex items-start gap-3.5 text-left">
                    <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#7e22ce] stroke-[4]" />
                    </div>
                    <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                      Conversations that stay close to the work.
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5 text-left">
                    <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#7e22ce] stroke-[4]" />
                    </div>
                    <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                      Chat directly inside projects, tasks, and teams
                    </p>
                  </div>
                </Motion.div>

                <FeatureStack
                  items={[
                    { label: "Threaded replies", icon: Reply },
                    "Direct messages",
                    { label: "Project channels", icon: Kanban },
                    "File sharing",
                  ]}
                />
              </div>

              {/* Right Hero Preview */}
              <Motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.18,
                }}
                className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24"
              >
                {/* Chat Card */}
                <div className="relative border border-purple-900/30 rounded-3xl bg-slate-950 overflow-hidden flex flex-col h-[400px] sm:h-[450px]">
                  {/* Glow blobs */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/15 rounded-full blur-[60px] pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-600/15 rounded-full blur-[60px] pointer-events-none" />

                  {/* Header */}
                  <div className="px-5 py-4 bg-slate-900/60 backdrop-blur-md border-b border-purple-900/40 flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                      {/* Group Logo Avatar Stack */}
                      <div className="flex -space-x-2 mr-1">
                        <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[9px] font-black text-white ring-2 ring-slate-900 z-30">
                          P
                        </div>
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[9px] font-black text-white ring-2 ring-slate-900 z-20">
                          A
                        </div>
                        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[9px] font-black text-white ring-2 ring-slate-900 z-10">
                          S
                        </div>
                      </div>
                      <div className="font-black text-white tracking-tight">
                        Project Alpha
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {/* Active members indicator removed as requested */}
                    </div>
                  </div>

                  {/* Messages Base */}
                  <div className="flex-1 p-5 overflow-y-auto space-y-6 flex flex-col justify-end pb-8 custom-scrollbar">
                    {/* Message 1 */}
                    <Motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="flex gap-3 items-end justify-end relative z-10"
                    >
                      <div className="flex flex-col items-end">
                        <span className="text-[11px] font-black uppercase tracking-wide text-slate-500 mb-1 mr-1">
                          Priya
                        </span>
                        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 border border-purple-500/20 text-white px-4 py-3 rounded-2xl rounded-br-sm text-sm font-medium]">
                          Designs are ready for review, dropping link below
                        </div>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-black shadow-[0_0_15px_rgba(168,85,247,0.4)] ring-2 ring-slate-900 mb-1 shrink-0">
                        P
                      </div>
                    </Motion.div>

                    {/* Message 2 */}
                    <Motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      className="flex gap-3 items-end relative z-10"
                    >
                      <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-black shadow-[0_0_15px_rgba(59,130,246,0.4)] ring-2 ring-slate-900 mb-1 shrink-0">
                        A
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black uppercase tracking-wide text-slate-500 mb-1 ml-1">
                          Arjun
                        </span>
                        <div className="bg-slate-900 border border-slate-800 text-slate-300 px-4 py-3 rounded-2xl rounded-bl-sm text-sm font-medium shadow-sm">
                          On it -will check before EOD
                        </div>
                      </div>
                    </Motion.div>

                    {/* Message 3 */}
                    <Motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.9 }}
                      className="flex gap-3 items-end relative z-10"
                    >
                      <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-black shadow-[0_0_15px_rgba(16,185,129,0.4)] ring-2 ring-slate-900 mb-1 shrink-0">
                        S
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black uppercase tracking-wide text-slate-500 mb-1 ml-1">
                          Sara
                        </span>
                        <div className="bg-slate-900 border border-slate-800 text-slate-300 px-4 py-3 rounded-2xl rounded-bl-sm text-sm font-medium shadow-sm">
                          QA flagged one issue, created a task already
                        </div>
                      </div>
                    </Motion.div>
                  </div>

                  {/* Input Area (Static representation) */}
                  <div className="p-4 bg-slate-900/60 backdrop-blur-md border-t border-purple-900/40 mt-auto z-10">
                    <div className="h-10 w-full bg-slate-800/80 border border-slate-700 rounded-full flex items-center px-4 animate-pulse">
                      <span className="text-xs text-slate-400 font-black uppercase tracking-wide">
                        Message Project Alpha...
                      </span>
                    </div>
                  </div>
                </div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* Three Chat Modes Section */}
        <section className="pt-2 lg:pt-4 pb-12 sm:pb-16 lg:pb-20 bg-white relative overflow-hidden z-0">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px]  blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
              <Motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05] mb-3"
              >
                Chat Designed For <br className="hidden sm:block" />
                <Motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{
                    backgroundPosition: ["0% center", "-200% center"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  Every Scenario
                </Motion.span>
              </Motion.h2>
              <Motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base sm:text-lg text-slate-600 font-medium"
              >
                Whether you're blasting an update to the company or hashing out
                a quick design detail privately, we have a space for it.
              </Motion.p>
            </div>

            <div
              className="grid lg:grid-cols-3 gap-6 lg:gap-8 relative z-10 max-w-6xl mx-auto"
              style={{ perspective: "1200px" }}
            >
              {/* 1. Group Chat */}
              <TiltCard className="bg-white border border-slate-200 hover:border-purple-300 focus-within:border-purple-300 active:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 focus-within:shadow-purple-900/15 active:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-pointer h-full transition-colors transition-shadow duration-300 group outline-none">
                <div className="absolute top-0 right-0 w-28 h-28 bg-purple-500/10 rounded-full blur-3xl -mr-8 -mt-8 pointer-events-none" />

                <div className="flex items-center gap-4 mb-5 sm:mb-6">
                  <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:scale-110 group-hover:bg-[#7e22ce] group-hover:text-white group-focus-within:bg-[#7e22ce] group-focus-within:text-white group-active:bg-[#7e22ce] group-active:text-white text-purple-600">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="relative z-10 text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    Group Chat
                  </h3>
                </div>
                <p className="relative z-10 text-slate-600 text-sm font-medium leading-relaxed mb-4 min-h-0 sm:min-h-[40px]">
                  "Collaborate with your entire team in real time"
                </p>
                <div className="relative z-10 space-y-2.5">
                  {[
                    { text: "Team discussions", icon: Users },
                    { text: "File sharing", icon: FileText },
                    { text: "Mentions & threads", icon: Reply },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-[10px] h-[10px]" />
                      </div>
                      <span className="text-slate-700 font-bold text-xs sm:text-sm tracking-wide">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </TiltCard>

              {/* 2. Personal Chat */}
              <TiltCard className="bg-white border border-slate-200 hover:border-purple-300 focus-within:border-purple-300 active:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 focus-within:shadow-purple-900/15 active:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-pointer h-full transition-colors transition-shadow duration-300 group outline-none">
                <div className="absolute top-0 right-0 w-28 h-28 bg-purple-500/10 rounded-full blur-3xl -mr-8 -mt-8 pointer-events-none" />

                <div className="flex items-center gap-4 mb-5 sm:mb-6">
                  <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:scale-110 group-hover:bg-[#7e22ce] group-hover:text-white group-focus-within:bg-[#7e22ce] group-focus-within:text-white group-active:bg-[#7e22ce] group-active:text-white text-purple-600">
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="relative z-10 text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    Personal Chat
                  </h3>
                </div>
                <p className="relative z-10 text-slate-600 text-sm font-medium leading-relaxed mb-4 min-h-0 sm:min-h-[40px]">
                  "Quick 1:1 conversations without noise"
                </p>
                <div className="relative z-10 space-y-2.5">
                  {[
                    { text: "Direct messaging", icon: Send },
                    { text: "Fast decision-making", icon: Zap },
                    { text: "Private discussions", icon: Shield },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-[10px] h-[10px]" />
                      </div>
                      <span className="text-slate-700 font-bold text-xs sm:text-sm tracking-wide">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </TiltCard>

              {/* 3. Project-Based Chat */}
              <TiltCard className="bg-white border border-slate-200 hover:border-purple-300 focus-within:border-purple-300 active:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 focus-within:shadow-purple-900/15 active:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-pointer h-full transition-colors transition-shadow duration-300 group outline-none">
                <div className="absolute top-0 right-0 w-28 h-28 bg-purple-500/10 rounded-full blur-3xl -mr-8 -mt-8 pointer-events-none" />

                <div className="flex items-center gap-4 mb-5 sm:mb-6">
                  <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:scale-110 group-hover:bg-[#7e22ce] group-hover:text-white group-focus-within:bg-[#7e22ce] group-focus-within:text-white group-active:bg-[#7e22ce] group-active:text-white text-purple-600">
                    <Kanban className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="relative z-10 text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    Project-Based Chat
                  </h3>
                </div>
                <p className="relative z-10 text-slate-600 text-sm font-medium leading-relaxed mb-4 min-h-0 sm:min-h-[40px]">
                  "Every project gets its own conversation space"
                </p>
                <div className="relative z-10 space-y-2.5">
                  {[
                    { text: "Chat inside projects", icon: MessageSquare },
                    { text: "Context never lost", icon: Sparkles },
                    { text: "Link tasks, files, updates", icon: LinkIcon },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-[10px] h-[10px]" />
                      </div>
                      <span className="text-slate-700 font-bold text-xs sm:text-sm tracking-wide">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* AI Agent Section */}
        <section
          className={`${sectionSpacing} relative bg-slate-950 overflow-hidden w-full`}
        >
          {/* Floating Violet Orbs */}
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 blur-[130px] rounded-full mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-fuchsia-600/15 blur-[130px] rounded-full mix-blend-screen pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto relative">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* AI Text Left */}
                <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                  <Motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="badge-glass-multicolor"
                  >
                    <div>KaryaUp AI</div>
                  </Motion.div>

                  <Motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-white leading-[1.08] sm:leading-[1.05] mb-4 tracking-normal lg:max-w-none"
                  >
                    <span className="block lg:whitespace-nowrap">Your Personal Agent </span>
                    <span className="block lg:whitespace-nowrap">
                     {" "}
                      <span className="inline-block pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]">
                      In Every Chat
                      </span>
                    </span>
                  </Motion.h2>

                  <Motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-base sm:text-lg text-slate-400 font-medium mb-6 leading-relaxed max-w-xl"
                  >
                    Don't just chat—execute. Ask the AI agent to summarize
                    unread threads, extract action items.
                  </Motion.p>

                  {/* Feature bullets */}
                  <Motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-3 w-full sm:w-auto text-left ml-2 sm:ml-0"
                  >
                    {[
                      "Summarize 100+ message threads instantly",
                      "Auto-create tasks from action items",
                      "Draft context-aware replies",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start sm:items-center gap-3 text-left"
                      >
                        <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                          <Check className="w-3.5 h-3.5 text-fuchsia-400" />
                        </div>
                        <span className="text-slate-300 font-medium leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </Motion.div>
                </div>

                {/* Right Side - Agent Assign Graphic with Rainbow Border */}
                <div className="relative flex justify-center w-full">
                  <Motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative h-[380px] w-fit p-[1.5px] rounded-3xl overflow-hidden group shadow-2xl shadow-purple-900/20"
                  >
                    {/* Animated Rainbow Border */}
                    <div className="absolute inset-[-100%] bg-[conic-gradient(from_var(--border-angle),#7e22ce,#ec4899,#00ccff,#7e22ce)] animate-[spin-border_4s_linear_infinite]" />

                    {/* Image Wrapper without extra padding */}
                    <div className="relative h-full w-full bg-slate-950 rounded-[calc(1.5rem-1.5px)] flex items-center justify-center overflow-hidden z-10">
                      <img
                        src={agentAssignImg}
                        alt="AI Agent Workflow"
                        className="h-full w-auto object-contain rounded-[calc(1.5rem-1.5px)] bg-slate-950"
                      />
                    </div>
                  </Motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-6 sm:pt-10 lg:pt-16 pb-12 sm:pb-10 lg:pb-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
              <Motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black leading-[1.02] tracking-normal text-slate-900"
              >
                Stop Meeting Chaos,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]">
                  Start A Better Chat Flow
                </span>
              </Motion.h2>
              <Motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="mt-4 text-base sm:text-lg lg:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed"
              >
                Keep conversations, summaries, and action items connected in one place so your team moves faster without context switching.
              </Motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-slate-200 bg-white shadow-[0_24px_80px_-30px_rgba(15,23,42,0.12)]">
              <div className="p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50/70">
                <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-rose-600 mb-5">
                  <span className="h-2 w-2 rounded-full bg-rose-500" />
                  Before AI-Powered Chat
                </div>
                <div className="space-y-4">
                  {[
                    "App-switching between Slack, Zoom, and email.",
                    "Manual notes, summaries, and follow-ups.",
                    "Decisions buried across disconnected threads.",
                    "Action items lost after the meeting ends.",
                  ].map((item) => (
                  <div
                      key={item}
                      className="group flex items-start gap-3 text-left"
                    >
                      <div className="mt-1 shrink-0 rounded-full p-[1.5px] bg-rose-200 transition-all duration-300 group-hover:bg-rose-500 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(244,63,94,0.35)]">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-50 text-rose-500 transition-all duration-300 group-hover:bg-white group-hover:text-rose-600">
                          <X className="h-3.5 w-3.5 stroke-[3.5] transition-transform duration-300 group-hover:scale-110" />
                        </div>
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed text-slate-600">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-12 bg-white">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700 mb-5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  With AI-Powered Chat
                </div>
                <div className="space-y-4">
                  {[
                    "Your team and work stay connected in one place.",
                    "AI summaries and action items appear instantly.",
                    "Every conversation stays tied to the project context.",
                    "Decisions become searchable and easy to revisit.",
                  ].map((item) => (
                  <div
                      key={item}
                      className="group flex items-start gap-3 text-left"
                    >
                      <div className="mt-1 shrink-0 rounded-full p-[1.5px] bg-emerald-200 transition-all duration-300 group-hover:bg-emerald-500 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-white group-hover:text-emerald-700">
                          <Check className="w-3 h-3 stroke-[4] transition-transform duration-300 group-hover:scale-110" />
                        </div>
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed text-slate-600">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature CTA Section */}
        <FeatureCTA
          title={
            <>
              Chat That Connects <br /> To Your Project
            </>
          }
          description="Communicate seamlessly within your tasks, documents, and workflows so you never lose context."
          image={chatImg}
          imageAlt="KaryaUp Chat Interface"
          imageClassName="w-full rounded-[calc(1.5rem-1.5px)] bg-slate-950 overflow-hidden"
          containerClassName="mt-8 sm:mt-12 lg:mt-14"
          paddingClassName="p-3 pt-6 sm:p-4 lg:p-4 lg:py-6"
          imageFrameClassName="p-[1.5px] rounded-3xl bg-[conic-gradient(from_var(--border-angle),#7e22ce,#ec4899,#00ccff,#7e22ce)] shadow-[0_0_40px_rgba(126,34,206,0.25)]"
        />
      </div>
    </>
  );
}
