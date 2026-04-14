import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useAnimationFrame, useMotionValue } from "framer-motion";
import { Check, Sparkles, Activity, Eye, MessageSquare, Filter, CheckCircle2, Users } from "lucide-react";
import Task2 from "../../assets/Task.webp";
import AgentAssign from "../../assets/Agent-Assign.webp";
import GrowthGraph from "../../components/GrowthGraph";
import FeatureCTA from "../../components/FeatureCTA";
import { Helmet } from "react-helmet-async";
import FeatureStack from "../../components/FeatureStack";

export default function Tasks() {
  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);
  const aiAgentRef = useRef(null);
  const listContainerRef = useRef(null);

  // Define task list items once to reuse for infinite scroll doubling
  const taskListItems = [
    { title: "Finalize landing page wireframe", owner: "Aisha", due: "Wed", pr: "High" },
    { title: "Implement landing page sections", owner: "Rahul", due: "Thu", pr: "High" },
    { title: "QA + cross-browser checks", owner: "Priya", due: "Fri", pr: "High" },
    { title: "Publish & verify analytics", owner: "Rahul", due: "Fri", pr: "Normal" },
    { title: "Update marketing copy", owner: "Sneha", due: "Mon", pr: "Normal" },
    { title: "Review SEO performance", owner: "Aisha", due: "Tue", pr: "High" },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Component for rolling task items with dynamic 3D barrel effect
  const BarrelItem = ({ t, containerRef }) => {
    const itemRef = useRef(null);
    const rotateX = useMotionValue(0);
    const scale = useMotionValue(1);
    const opacity = useMotionValue(1);

    useAnimationFrame(() => {
      if (!itemRef.current || !containerRef.current) return;
      const container = containerRef.current.getBoundingClientRect();
      const item = itemRef.current.getBoundingClientRect();

      const containerCenter = container.top + container.height / 2;
      const itemCenter = item.top + item.height / 2;
      const normalizedDistance = (itemCenter - containerCenter) / (container.height / 2);
      const clamped = Math.max(-1, Math.min(1, normalizedDistance));

      rotateX.set(clamped * -45);
      scale.set(1 - Math.abs(clamped) * 0.15);
      opacity.set(1 - Math.abs(clamped) * 0.7);
    });

    return (
      <div ref={itemRef} style={{ perspective: "1000px" }}>
        <motion.div
          className="rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 flex flex-wrap sm:flex-nowrap items-start sm:items-center gap-2 sm:gap-3 bg-white shadow-sm"
          animate={{
            borderColor: t.pr === "High" ? "rgba(248, 113, 113, 0.38)" : "rgba(134, 239, 172, 0.42)",
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          whileHover={{
            borderColor: t.pr === "High" ? "rgba(248, 113, 113, 0.52)" : "rgba(74, 222, 128, 0.58)",
          }}
          style={{
            rotateX,
            scale,
            opacity,
            transformStyle: "preserve-3d",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0 text-purple-700">
            <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
          </span>
          <div className="min-w-0 flex-1 w-full sm:w-auto">
            <div className="font-black text-slate-900 text-xs sm:text-sm break-words leading-snug">{t.title}</div>
            <div className="mt-0.5 text-[10px] sm:text-xs font-semibold text-slate-500 flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-0.5">
              <span>Owner: <span className="text-slate-700">{t.owner}</span></span>
              <span>Due: <span className="text-slate-700">{t.due}</span></span>
            </div>
          </div>
          <span
            className="ml-auto sm:ml-0 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.12em] px-2 py-1 rounded-full border flex-shrink-0"
            style={{
              borderColor: t.pr === "High" ? "rgba(239,68,68,0.35)" : "rgba(148,163,184,0.45)",
              background: t.pr === "High" ? "rgba(239,68,68,0.08)" : "rgba(148,163,184,0.10)",
              color: t.pr === "High" ? "rgb(185,28,28)" : "rgb(71,85,105)",
            }}
          >
            {t.pr}
          </span>
        </motion.div>
      </div>
    );
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <Helmet>
        {/* Primary Title (Chrome Tab) */}
        <title>Task Management  | Karyaup</title>

        {/* SEO Meta */}
        <meta
          name="description"
          content="Explore Karyaup task management features. Organize tasks, assign work, track progress, and boost team productivity with smart workflow tools."
        />

        <meta
          name="keywords"
          content="task management software, team tasks, project tracking, productivity tools, Karyaup features"
        />

        <meta name="author" content="Karyaup" />

        {/* Open Graph (Social Sharing) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Task Management Features | Karyaup" />
        <meta
          property="og:description"
          content="Organize, assign, and track tasks efficiently with Karyaup."
        />
        <meta property="og:url" content="https://karyaup.com/features/tasks" />
        <meta property="og:site_name" content="Karyaup" />


        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Task Management Features | Karyaup" />
        <meta
          name="twitter:description"
          content="Smart task management tools to boost team productivity."
        />


        {/* Canonical URL */}
        <link rel="canonical" href="https://karyaup.com/features/tasks" />
      </Helmet>
      <div className="min-h-screen bg-white pt-24 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 text-slate-900">

        {/* ── Hero ── */}
        <section className="relative pt-4 sm:pt-6 lg:pt-4 pb-2 sm:pb-4 lg:pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">

              {/* Left */}
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm mb-2 sm:mb-4"
                >
                  TASKS — SIMPLIFY YOUR TO-DO LISTS
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                  className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
                >
                  Task Management
                  <span className="block">
                    That{" "}
                    <motion.span
                      className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                      animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      Saves Time
                    </motion.span>
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                  className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 max-w-lg w-full"
                >
                  {[
                    { text: "Every piece of work, owned and visible.", icon: Eye },
                    { text: "Turn conversations into tasks with a single click.", icon: MessageSquare }

                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-left">
                      <div className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#7e22ce] stroke-[4]" />
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </motion.div>

                <FeatureStack items={["Assignees", "Due dates", "Priorities", "Sub-tasks"]} />
              </div>

              {/* Right – Image */}
              <motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24"
              >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white">
                  <img
                    src={Task2}
                    alt="KaryaUp task management"
                    className="w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[380px] xl:h-[350px] object-cover object-left-top bg-white transition-all duration-300"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="pt-2 lg:pt-4 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="border border-slate-200 rounded-2xl sm:rounded-3xl bg-white overflow-hidden"
                style={{ boxShadow: "0 18px 50px -36px rgba(2,6,23,0.28)" }}
              >
                <div className="p-5 sm:p-8 lg:p-10 text-center lg:text-left">
                  {/* Header */}
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-purple-700 font-black uppercase tracking-widest text-[10px] sm:text-xs">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    AI Agent for Tasks
                  </div>
                  <h2 className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.05] tracking-normal">
                    Prompt It. The Agent{" "}
                    <br className="hidden sm:block" />
                    <motion.span
                      className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                      animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      Automates Everything.
                    </motion.span>
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                    Our integrated AI agent transforms your prompts into structured tasks, assigns owners, and tracks progress automatically—all within your workspace.
                  </p>

                  {/* Two-col layout */}
                  <div className="mt-6 sm:mt-7 grid lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch justify-items-center lg:justify-items-stretch">

                    {/* Prompt panel / image */}
                    <div className="lg:col-span-5 flex items-center justify-center w-full">
                      <div className="relative h-[220px] sm:h-[300px] lg:h-[360px] w-fit max-w-full p-[2.5px] rounded-[1.25rem] sm:rounded-3xl overflow-hidden group mx-auto">
                        <div className="absolute inset-[-100%] bg-[conic-gradient(from_var(--border-angle),#7e22ce,#ec4899,#00ccff,#7e22ce)] animate-[spin-border_4s_linear_infinite]" />
                        <div className="relative h-full w-full rounded-[calc(1.25rem-2.5px)] sm:rounded-[calc(1.5rem-2.5px)] flex items-center justify-center p-0 z-10 overflow-hidden bg-white">
                          <img
                            src={AgentAssign}
                            alt="AI Agent Workflow"
                            className="w-full h-full object-cover mx-auto transform group-hover:scale-[1.03] transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Output panel */}
                    <div className="lg:col-span-7 w-full">
                      <div className="border border-slate-200 rounded-2xl sm:rounded-3xl bg-white overflow-hidden flex flex-col shadow-sm h-[320px] sm:h-[340px] lg:h-[360px] w-full max-w-[640px] mx-auto lg:max-w-none">
                        <div className="px-4 py-3 sm:px-5 sm:py-4 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 flex-shrink-0 bg-white/95 backdrop-blur-sm text-center sm:text-left relative z-10 shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)]">
                          <div className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-500">
                            Generated tasks
                          </div>
                          <div className="text-[10px] sm:text-xs font-semibold text-slate-400">Auto-assigned · Auto-dated</div>
                        </div>
                        <div ref={listContainerRef} className="p-3 sm:p-4 overflow-hidden flex-1 relative bg-slate-50/30"
                          style={{
                            maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                            perspective: "1000px"
                          }}>
                          <motion.div
                            animate={{ y: ["0%", "-50%"] }}
                            transition={{
                              y: {
                                repeat: Infinity,
                                duration: 30,
                                ease: "linear",
                              },
                            }}
                            className="grid gap-2 sm:gap-3"
                            style={{ transformStyle: "preserve-3d" }}
                          >
                            {[...taskListItems, ...taskListItems].map((t, i) => (
                              <BarrelItem key={`${t.title}-${i}`} t={t} containerRef={listContainerRef} />
                            ))}
                          </motion.div>
                        </div>
                        <div className="px-4 py-3 sm:py-4 relative z-10 bg-white/95 backdrop-blur-sm border-t border-slate-100 shadow-[0_-4px_15px_-5px_rgba(0,0,0,0.05)]">
                          <div className="text-[10px] sm:text-xs font-semibold text-slate-500">
                            The agent can also update statuses, reassign owners, and add subtasks from a single prompt.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>



        {/* 🔥 Visual Analytics - Restored Section */}
        <section className="pt-2 sm:pt-4 lg:pt-4 pb-12 sm:pb-20 lg:pb-24 bg-slate-50/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">

              {/* Left – Animated Graph */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 border border-slate-200 shadow-[0_22px_70px_-30px_rgba(2,6,23,0.12)]">
                  <GrowthGraph />
                </div>
                {/* Decorative background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-br from-purple-100/60 to-blue-100/40 rounded-full blur-[140px] -z-10 animate-pulse" />
              </motion.div>

              {/* Right – Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="order-1 lg:order-2 text-center lg:text-left flex flex-col items-center lg:items-start"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-widest mb-6">
                  <Activity className="w-3.5 h-3.5" />
                  Visual Analytics
                </div>
                <h2 className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.1] tracking-normal">
                  Turn Task Into <br className="hidden lg:block" />
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Actionable Insights.
                  </motion.span>
                </h2>


                <div className="mt-8 space-y-4 w-full max-w-md">
                  {[
                    { text: "Custom filters for members, status, and priority", icon: Filter },
                    { text: "Real-time completion and trend tracking", icon: Activity },
                    { text: "Visual work distribution across your whole team", icon: Users }
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-4 text-left">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#7e22ce] stroke-[4]" />
                      </div>
                      <span className="text-sm sm:text-base text-slate-700 font-bold leading-tight">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── Feature CTA ── */}
        <FeatureCTA
          title={<>Tasks That Connect To <br /> Everything You Do</>}
          description="Work smarter with tasks that can live in your whiteboards, chat, calendar—anywhere you work."
          image={Task2}
          imageAlt="KaryaUp Task Interface"
          containerClassName="mt-0"
        />
      </div>
    </>
  );
}
