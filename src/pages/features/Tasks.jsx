import React from "react";
import { motion } from "framer-motion";
import { Check, CornerDownLeft, Sparkles, Filter, ChevronDown, Download, Clock, Target, CheckCircle2, AlertCircle, Users, Activity, BarChart3, PieChart, TrendingUp, Calendar } from "lucide-react";
import Task2 from "../../assets/Task2.png";
import AgentAssign from "../../assets/Agent-Assign.png";
import ChartImg from "../../assets/chart.png";
import BorderBeam from "../../components/BorderBeam";

const tags = "Assignees · Due dates · Priorities · Sub-tasks";

export default function Tasks() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest"
              >
                Features <span className="opacity-60">/</span> Tasks
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]"
              >
                A task management features
                <span className="block">
                  that{" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    saves time
                  </motion.span>
                  
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="mt-6 space-y-4 max-w-2xl mx-auto lg:mx-0"
              >
                {[
                  "Every piece of work, owned and visible.",
                  "Assign, prioritize, and track tasks across your team without losing anything between conversations and meetings."
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3.5 text-left">
                    <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#7e22ce] stroke-[4]" />
                    </div>
                    <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 max-w-md mx-auto lg:mx-0"
              >
                {["Assignees", "Due dates", "Priorities", "Sub-tasks"].map((tag) => (
                  <div key={tag} className="group flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-slate-50/50 border border-slate-200/60 shadow-sm hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300">
                    <div className="w-5 h-5 rounded-md bg-emerald-100 border border-emerald-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-3 h-3 text-emerald-600 stroke-[4]" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-600 truncate">{tag}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="relative lg:-mr-24 xl:-mr-40"
            >
              <div className="absolute -inset-8 bg-gradient-to-tr from-[#7e22ce]/16 via-fuchsia-500/8 to-transparent blur-3xl opacity-55" />
              <div className="relative overflow-hidden border border-slate-200/80 rounded-3xl shadow-2xl shadow-slate-900/10 bg-white">
                <img
                  src={Task2}
                  alt="KaryaUp task management"
                  className="w-full h-[360px] sm:h-[420px] lg:h-[500px] object-cover object-left"
                />
                {/* Right-side invisible/fade effect like reference */}
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-44 lg:w-56 bg-gradient-to-r from-transparent via-white/70 to-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Agent */}
      <section className="mt-14 sm:mt-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="border border-slate-200 rounded-3xl bg-white overflow-hidden"
              style={{ boxShadow: "0 18px 50px -36px rgba(2,6,23,0.28)" }}
            >
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-2 text-purple-700 font-black uppercase tracking-widest text-xs">
                  <Sparkles className="w-4 h-4" />
                  AI Agent for Tasks
                </div>
                <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                  Prompt it. The agent <br className="hidden sm:block" />{" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    automates everything.
                  </motion.span>
                </h2>
                <p className="mt-2 text-slate-600 font-medium max-w-3xl">
                  KaryaUp comes with an integrated agent that can take your prompt, break the work into tasks, assign owners,
                  set priority + due dates, and keep progress updated — all inside your workspace.
                </p>

                <div className="mt-7 grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                  {/* Prompt panel */}
                  <div className="lg:col-span-5 flex items-center justify-center">
                    <div className="relative h-[380px] w-fit p-[1.5px] rounded-3xl overflow-hidden group">
                      {/* Animated Rainbow Border */}
                      <div 
                        className="absolute inset-[-100%] bg-[conic-gradient(from_var(--border-angle),#ff0000,#ff7f00,#ffff00,#00ff00,#0000ff,#4b0082,#9400d3,#ff0000)] animate-[spin-border_4s_linear_infinite]"
                      />
                      
                      {/* Image Wrapper */}
                      <div className="relative h-full w-full bg-white rounded-[calc(1.5rem-1.5px)] flex items-center justify-center p-8 z-10">
                        <img
                          src={AgentAssign}
                          alt="AI Agent Workflow"
                          className="h-full w-auto object-contain transform group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Output panel */}
                  <div className="lg:col-span-7 h-full">
                    <div className="border border-slate-200 rounded-3xl bg-white overflow-hidden h-[380px] flex flex-col shadow-sm">
                      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between flex-shrink-0 bg-white">
                        <div className="text-xs font-black uppercase tracking-widest text-slate-500">
                          Generated tasks
                        </div>
                        <div className="text-xs font-semibold text-slate-400">Auto-assigned • Auto-dated</div>
                      </div>
                      <div className="p-4 grid gap-3 overflow-y-auto flex-1 custom-scrollbar">
                        {[
                          { title: "Finalize landing page wireframe", owner: "Aisha", due: "Wed", pr: "High" },
                          { title: "Implement landing page sections", owner: "Rahul", due: "Thu", pr: "High" },
                          { title: "QA + cross-browser checks", owner: "Priya", due: "Fri", pr: "High" },
                          { title: "Publish & verify analytics", owner: "Rahul", due: "Fri", pr: "Normal" },
                        ].map((t, i) => (
                          <motion.div
                            key={t.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.4 }}
                            transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                            className="border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-3"
                          >
                            <span className="w-7 h-7 rounded-lg bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                              <Check className="w-4 h-4 text-[#7e22ce]" />
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="font-black text-slate-900 truncate">{t.title}</div>
                              <div className="mt-0.5 text-xs font-semibold text-slate-500 flex flex-wrap gap-x-3 gap-y-1">
                                <span>Owner: <span className="text-slate-700">{t.owner}</span></span>
                                <span>Due: <span className="text-slate-700">{t.due}</span></span>
                              </div>
                            </div>
                            <span
                              className="text-[11px] font-black uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border"
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
                      </div>
                      <div className="px-4 pb-4">
                        <div className="text-xs font-semibold text-slate-500">
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

      {/* Task Analytics Feature Highlight */}
      <section className="mt-20 sm:mt-24 py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            {/* Curved SVG Chart - Pixel Perfect Recreation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-2 lg:order-1 w-full"
            >
              <div className="relative z-10 bg-white border border-slate-100 rounded-[3rem] p-8 sm:p-12 shadow-2xl h-[500px] flex flex-col">
                <div className="flex-1 relative pb-10 sm:pb-12 border-l border-b border-slate-200">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 800 300" preserveAspectRatio="none">
                    {/* Horizontal Grid Lines */}
                    {[0, 1, 2, 3, 4].map(i => (
                      <line 
                        key={i} 
                        x1="0" 
                        y1={i * 75} 
                        x2="800" 
                        y2={i * 75} 
                        stroke="#f1f5f9" 
                        strokeWidth="1.5" 
                        strokeDasharray="4,4"
                      />
                    ))}
                    
                    {/* Y-Axis Labels */}
                    {[20, 15, 10, 5, 0].map((v, i) => (
                      <text 
                        key={v} 
                        x="-45" 
                        y={i * 75 + 5} 
                        className="text-[12px] fill-slate-400 font-bold select-none"
                      >
                        {v}
                      </text>
                    ))}

                    {/* Active tasks (Blue/Purple) - Matching reference image peaks */}
                    <motion.path
                      d="M0,150 C50,150 70,240 120,240 C150,240 170,225 220,225 
                         C270,225 290,300 340,300 C390,300 420,0 470,0 
                         C520,0 550,255 600,255 C630,255 650,300 700,300 
                         C730,300 750,45 800,255"
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 3, ease: "easeInOut" }}
                    />

                    {/* Completed tasks (Green) - Matching reference image peaks */}
                    <motion.path
                      d="M0,300 C50,300 80,150 130,150 C180,150 200,300 250,300 
                         L450,300 C500,300 530,90 580,90 
                         C630,90 650,250 700,250 C750,250 780,300 800,300"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }}
                    />

                    {/* Overdue tasks (Orange) - Matching reference image peaks */}
                    <motion.path
                      d="M0,300 L250,300 C300,300 320,165 370,165 
                         C420,165 450,285 500,285 L600,285 
                         C650,285 680,225 730,225 C760,225 780,150 800,300"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 3, ease: "easeInOut", delay: 0.6 }}
                    />
                  </svg>
                  
                  {/* X-Axis Labels - Spaced out for readability */}
                  <div className="absolute -bottom-10 inset-x-0 hidden sm:flex justify-between text-[11px] font-bold text-slate-400 select-none px-2">
                    <span>2026-02-20</span>
                    <span>2026-03-11</span>
                    <span>2026-03-15</span>
                    <span>2026-03-19</span>
                  </div>
                </div>

                {/* Legend at Bottom matching provided image */}
                <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6">
                  {[
                    { l: "Completed", c: "#10b981" },
                    { l: "Overdue", c: "#f59e0b" },
                    { l: "Active (created)", c: "#6366f1" }
                  ].map(i => (
                    <div key={i.l} className="flex items-center gap-3 group">
                       <div className="relative w-8 h-4 flex items-center justify-center">
                         <div className="w-full h-[3px] rounded-full" style={{ backgroundColor: i.c }} />
                         <div className="absolute w-2.5 h-2.5 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-100" style={{ backgroundColor: i.c }} />
                       </div>
                       <span className="text-sm font-bold text-slate-600 tracking-tight group-hover:text-slate-900 transition-colors uppercase tracking-widest text-[11px]">
                        {i.l}
                       </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-br from-purple-100/60 to-blue-100/40 rounded-full blur-[140px] -z-10 animate-pulse" />
            </motion.div>

            {/* Text Content - Swapped to Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7e22ce]/10 border border-[#7e22ce]/20 text-[#7e22ce] text-[10px] font-black uppercase tracking-widest mb-6">
                <Activity className="w-3.5 h-3.5" />
                Visual Analytics
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                Turn your task data into <br className="hidden lg:block" />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  actionable insights.
                </motion.span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 font-medium leading-relaxed">
                Gain a birds-eye view of your productivity. Track progress, identify bottlenecks, 
                and optimize your team's workflow with built-in, real-time analytics.
              </p>
              
              <div className="mt-8 space-y-4">
                {[
                  "Custom filters for members, status, and priority",
                  "Real-time completion and trend tracking",
                  "Visual work distribution across your whole team"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="mt-24 sm:mt-32 pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              Tasks built for <br className="hidden sm:block" />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                modern team performance.
              </motion.span>
            </h2>
          </div>
          <div className="max-w-5xl mx-auto grid gap-6 sm:gap-8">
            {[
              {
                title: "Create tasks your team actually finishes",
                desc: "Break work into clear steps with owners, due dates, priorities, and status — so everyone knows what to do next.",
              },
              {
                title: "Keep all context inside the task",
                desc: "Attachments, notes, and comments stay with the task. No more hunting across tools to find what matters.",
              },
              {
                title: "Stay on top with filters + views",
                desc: "Search and filter by member, priority, or brand to instantly focus. Switch views as your workflow changes.",
              },
            ].map((b) => (
              <div key={b.title} className="border border-slate-200 rounded-3xl p-6 sm:p-8 bg-white">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">{b.title}</h2>
                <p className="mt-2 text-slate-600 font-medium">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
