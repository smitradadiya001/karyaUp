import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Sparkles, Activity } from "lucide-react";
import Task2 from "../../assets/Task.webp";
import AgentAssign from "../../assets/Agent-Assign.webp";
import FeatureCTA from "../../components/FeatureCTA";
import { Helmet } from "react-helmet-async";
import FeatureStack from "../../components/FeatureStack";

export default function Tasks() {
  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);

  const agentSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: agentSectionRef,
    offset: ["start end", "end start"]
  });
  const listY = useTransform(scrollYProgress, [0, 1], ["5%", "-40%"]);

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
      <div className="min-h-screen bg-white pt-14 sm:pt-16 pb-12 sm:pb-16 lg:pb-20 text-slate-900">

        {/* ── Hero ── */}
        <section className="relative pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">

              {/* Left */}
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] sm:text-xs font-black uppercase tracking-widest"
                >
                  Features <span className="opacity-60">/</span> Tasks
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                  className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]"
                >
                  A Task Management Features    That
                  <span className="block">
                    {" "}
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
                    "Every piece of work, owned and visible.",
                    "Assign, prioritize, and track tasks across your team without losing anything between conversations and meetings."
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 text-left">
                      <div className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#7e22ce] stroke-[4]" />
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                        {text}
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
                <div className="relative overflow-hidden  shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white">
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

        {/* ── AI Agent ── */}
        <section className="pt-4 lg:pt-8 pb-12 sm:pb-16 lg:pb-20" ref={agentSectionRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
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
                    <h2 className="mt-4 sm:mt-5 text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-tight tracking-tight">
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
                      KaryaUp comes with an integrated agent that can take your prompt, break the work into tasks, assign owners,
                      set priority + due dates, and keep progress updated — all inside your workspace.
                    </p>

                    {/* Two-col layout */}
                    <div className="mt-6 sm:mt-7 grid lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch justify-items-center lg:justify-items-stretch">

                      {/* Prompt panel / image */}
                      <div className="lg:col-span-5 flex items-center justify-center w-full">
                        <div className="relative h-[200px] sm:h-[300px] lg:h-[360px] w-fit max-w-full p-[2.5px] rounded-[1.25rem] sm:rounded-3xl overflow-hidden group mx-auto">
                          <div className="absolute inset-[-100%] bg-[conic-gradient(from_var(--border-angle),#ff0000,#ff7f00,#ffff00,#00ff00,#0000ff,#4b0082,#9400d3,#ff0000)] animate-[spin-border_4s_linear_infinite]" />
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
                        <div className="border border-slate-200 rounded-2xl sm:rounded-3xl bg-white overflow-hidden flex flex-col shadow-sm min-h-[300px] sm:min-h-[340px] lg:h-[360px] w-full max-w-[640px] mx-auto lg:max-w-none">
                          <div className="px-4 py-3 sm:px-5 sm:py-4 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 flex-shrink-0 bg-white/95 backdrop-blur-sm text-center sm:text-left relative z-10 shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)]">
                            <div className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-500">
                              Generated tasks
                            </div>
                            <div className="text-[10px] sm:text-xs font-semibold text-slate-400">Auto-assigned · Auto-dated</div>
                          </div>
                          <div className="p-3 sm:p-4 overflow-hidden flex-1 relative bg-slate-50/30" style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent)' }}>
                            <motion.div style={{ y: listY }} className="grid gap-2 sm:gap-3">
                              {[
                                { title: "Finalize landing page wireframe", owner: "Aisha", due: "Wed", pr: "High" },
                                { title: "Implement landing page sections", owner: "Rahul", due: "Thu", pr: "High" },
                                { title: "QA + cross-browser checks", owner: "Priya", due: "Fri", pr: "High" },
                                { title: "Publish & verify analytics", owner: "Rahul", due: "Fri", pr: "Normal" },
                                { title: "Update marketing copy", owner: "Sneha", due: "Mon", pr: "Normal" },
                                { title: "Review SEO performance", owner: "Aisha", due: "Tue", pr: "High" },
                                { title: "Prepare release notes", owner: "Rahul", due: "Wed", pr: "Low" },
                                { title: "Schedule social media updates", owner: "Priya", due: "Thu", pr: "Normal" },
                              ].map((t, i) => (
                                <motion.div
                                  key={t.title}
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: false, amount: 0.3 }}
                                  transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                                  className="border border-slate-200 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 flex flex-wrap sm:flex-nowrap items-start sm:items-center gap-2 sm:gap-3"
                                >
                                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#7e22ce]" />
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

        {/* ── Task Analytics ── */}
        <section className={`${sectionSpacing} bg-white relative overflow-hidden`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 sm:gap-12 lg:gap-20 items-center">

              {/* Chart */}
              <motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative order-2 lg:order-1 w-full flex items-center justify-center lg:justify-start lg:-mt-20 xl:-mt-28"
              >
                <div className="relative z-10 h-[240px] sm:h-[300px] lg:h-[350px] w-full max-w-[560px] mx-auto lg:mx-0 flex flex-col pl-2 sm:pl-10 lg:pl-12">
                  <div className="flex-1 relative overflow-hidden">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 800 300" preserveAspectRatio="none">
                      {[0, 1, 2, 3, 4].map(i => (
                        <line key={i} x1="0" y1={i * 75} x2="800" y2={i * 75} stroke="#f1f5f9" strokeWidth="1.5" strokeDasharray="4,4" />
                      ))}
                      {[20, 15, 10, 5, 0].map((v, i) => (
                        <text key={v} x="-45" y={i * 75 + 5} className="text-[12px] fill-slate-400 font-bold select-none">{v}</text>
                      ))}
                      <motion.path
                        d="M0,150 C50,150 70,240 120,240 C150,240 170,225 220,225 C270,225 290,300 340,300 C390,300 420,0 470,0 C520,0 550,255 600,255 C630,255 650,300 700,300 C730,300 750,45 800,255"
                        fill="none" stroke="#6366f1" strokeWidth="3.5" strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                      />
                      <motion.path
                        d="M0,300 C50,300 80,150 130,150 C180,150 200,300 250,300 L450,300 C500,300 530,90 580,90 C630,90 650,250 700,250 C750,250 780,300 800,300"
                        fill="none" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }}
                      />
                      <motion.path
                        d="M0,300 L250,300 C300,300 320,165 370,165 C420,165 450,285 500,285 L600,285 C650,285 680,225 730,225 C760,225 780,150 800,300"
                        fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 3, ease: "easeInOut", delay: 0.6 }}
                      />
                    </svg>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 lg:w-48 bg-gradient-to-r from-transparent to-white z-20" />
                  </div>

                  {/* X-Axis */}
                  <div className="flex justify-between text-[8px] sm:text-[10px] font-bold text-slate-400 select-none px-1 sm:px-2 mt-2">
                    <span>2026-02-20</span>
                    <span>2026-03-11</span>
                    <span>2026-03-15</span>
                    <span>2026-03-19</span>
                  </div>

                  {/* Legend */}
                  <div className="mt-4 sm:mt-5 lg:mt-6 flex flex-wrap justify-center gap-x-4 sm:gap-x-8 lg:gap-x-10 gap-y-2 sm:gap-y-3">
                    {[
                      { l: "Completed", c: "#10b981" },
                      { l: "Overdue", c: "#f59e0b" },
                      { l: "Active (created)", c: "#6366f1" }
                    ].map(i => (
                      <div key={i.l} className="flex items-center gap-2 sm:gap-3 group">
                        <div className="relative w-6 h-3 sm:w-8 sm:h-4 flex items-center justify-center">
                          <div className="w-full h-[2.5px] sm:h-[3px] rounded-full" style={{ backgroundColor: i.c }} />
                          <div className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-100" style={{ backgroundColor: i.c }} />
                        </div>
                        <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">
                          {i.l}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="order-1 lg:order-2 text-center lg:text-left flex flex-col items-center lg:items-start lg:-mt-10"
              >
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#7e22ce]/10 border border-[#7e22ce]/20 text-[#7e22ce] text-[10px] font-black uppercase tracking-widest mb-4 sm:mb-6">
                  <Activity className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Visual Analytics
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.06] tracking-tight">
                  Turn Your Task Data Into{" "}
                  <br className="hidden lg:block" />
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Actionable Insights.
                  </motion.span>
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Gain a birds-eye view of your productivity. Track progress, identify bottlenecks,
                  and optimize your team's workflow with built-in, real-time analytics.
                </p>

                <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 w-full max-w-lg">
                  {[
                    "Custom filters for members, status, and priority",
                    "Real-time completion and trend tracking",
                    "Visual work distribution across your whole team"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 justify-center lg:justify-start">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                      </div>
                      <span className="text-sm sm:text-base text-slate-700 font-bold text-left">{item}</span>
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
