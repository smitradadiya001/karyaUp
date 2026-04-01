import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Settings, Play, Pause, Edit3, CalendarDays, CheckCircle2, X } from "lucide-react";
import FeatureCTA from "../../components/FeatureCTA";
import FeatureStack from "../../components/FeatureStack";
import autoImg from "../../assets/New_Task.png";
import AutomationImg from "../../assets/Automation.png";
import { Helmet } from "react-helmet-async";

const automationFeatures = [
  {
    id: "add-repetitive",
    tab: "Add Repetitive Task",
    title: "Schedule",
    titleHighlight: "Repetitive Tasks",
    description: "Easily set up recurring tasks. Choose the exact month, day, and time so your team knows exactly what to do without being told twice.",
    bullets: ["Select specific months and days for execution.", "Automatically assign to the right team members."],
  },
  {
    id: "edit-anytime",
    tab: "Edit Anytime",
    title: "Always",
    titleHighlight: "Editable",
    description: "Conditions change, and your automations should too. Jump in and modify any active automation rule seamlessly without starting over.",
    bullets: ["Update task descriptions, assignees, or priority.", "Changes propagate instantly without downtime."],
  },
  {
    id: "turn-off",
    tab: "Turn Off / On",
    title: "Instant",
    titleHighlight: "Control",
    description: "Not needed this month? Pause automations with a single click and turn them back on when you're ready. Complete control at your fingertips.",
    bullets: ["One-click toggle switches for every rule.", "Paused rules retain all historical configuration."],
  }
];



export default function Automations() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeTab = automationFeatures[activeTabIdx];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Bento Card 1 — toggle states
  const [toggleStates, setToggleStates] = useState([true, false, false]);
  const flipToggle = (i) => setToggleStates(prev => prev.map((v, idx) => idx === i ? !v : v));

  // Bento Card 2 — selected months (Jan, Apr, Jul, Oct pre-selected)
  const [selectedMonths, setSelectedMonths] = useState(new Set([0, 3, 6, 9]));
  const toggleMonth = (i) => setSelectedMonths(prev => {
    const next = new Set(prev);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });

  // Bento Card 3 — assigned teams
  const [assignedTeams, setAssignedTeams] = useState(new Set(["Design Team", "Engineering", "Marketing"]));
  const toggleTeam = (team) => setAssignedTeams(prev => {
    const next = new Set(prev);
    next.has(team) ? next.delete(team) : next.add(team);
    return next;
  });

  return (
    <>
      <Helmet>
  <title>Workflow Automation & Smart Actions | Karyaup</title>

  <meta
    name="description"
    content="Automate repetitive tasks with Karyaup workflow automation. Create smart rules, trigger actions, and streamline your business processes effortlessly."
  />

  <meta
    name="keywords"
    content="workflow automation, task automation, business automation tools, process automation, productivity automation, Karyaup"
  />

  <meta name="author" content="Karyaup" />

  <meta
    property="og:title"
    content="Workflow Automation & Smart Actions | Karyaup"
  />
  <meta
    property="og:description"
    content="Streamline your workflows with powerful automation and smart triggers."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://karyaup.com/features/automation"
  />
  <meta property="og:site_name" content="Karyaup" />

  <link
    rel="canonical"
    href="https://karyaup.com/features/automation"
  />
</Helmet>
    <div className="min-h-screen bg-white pt-14 sm:pt-16 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-2 lg:pt-4 py-12 sm:py-16 lg:py-20">

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-3xl bg-[#f3e8ff] text-[#9333ea] text-[11px] font-black uppercase tracking-[0.15em] mb-4"
              >
                Features <span className="opacity-50">/</span> Automations
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] tracking-tight leading-[1.06]"
              >
                Put Repetitive<br/>
                Tasks on<br className="hidden sm:block"/>
                <span className="block sm:inline"> {" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-[#c026d3] to-[#9333ea] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Autopilot
                  </motion.span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="mt-5 sm:mt-6 space-y-4 max-w-lg w-full mx-auto lg:mx-0"
              >
                {[
                  "Eliminate manual data entry and routine busywork.",
                  "Construct custom workflows to automate tasks across your entire team securely without writing code."
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3.5 text-left">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#f3e8ff] flex flex-col items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#9333ea] stroke-[3.5]" />
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg text-[#475569] font-medium leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                className="mt-5 lg:mt-5 w-full"
              >
                <FeatureStack items={["Triggers", "Actions", "Conditions", "Schedules", "Dynamic Rules", "Auto-Assign"]} />
              </motion.div>
            </div>

            {/* Right Hero Image — Clean Shadow Container */}
            <motion.div 
              initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24 mt-10 lg:mt-0"
            >
              <div className="relative overflow-hidden shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl">
                <img
                  src={AutomationImg}
                  alt="KaryaUp automation rule builder"
                  className="w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[480px] xl:h-[520px] object-cover object-[44%_28%] sm:object-left transition-all duration-300"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Features Bento Section */}
      <section className="pt-6 pb-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Section Tag */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#f3e8ff] text-[#9333ea] text-[11px] font-black uppercase tracking-[0.15em] mb-4">
            What you can do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-tight">
            Automation, Built<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333ea] to-[#c026d3]">Around Your Workflow</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Card 1 — Toggle Off Anytime */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white/60 backdrop-blur-xl border border-slate-200/60 rounded-[1.75rem] p-6 overflow-hidden flex flex-col gap-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_45px_rgb(0,0,0,0.08)] hover:border-purple-200/60 transition-all duration-500 group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-50/40 rounded-full blur-3xl -z-10 group-hover:bg-red-100/40 transition-colors duration-500" />
            {/* Mini UI: Toggle list */}
            <div className="flex flex-col gap-2.5">
              {[
                "Monthly Safety Report",
                "Weekly Standup Tasks",
                "Quarterly Review Prep",
              ].map((label, i) => (
                <button
                  key={i}
                  onClick={() => flipToggle(i)}
                  className="flex items-center justify-between bg-slate-50 rounded-xl px-4 py-3 border border-slate-100 cursor-pointer hover:bg-slate-100 transition-colors w-full text-left"
                >
                  <span className={`text-[13px] font-semibold transition-all ${toggleStates[i] ? "text-slate-800" : "text-slate-400 line-through"}`}>{label}</span>
                  <div className={`w-9 h-5 rounded-full flex items-center px-0.5 transition-colors flex-shrink-0 ml-3 ${toggleStates[i] ? "bg-emerald-500" : "bg-slate-200"}`}>
                    <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${toggleStates[i] ? "translate-x-4" : "translate-x-0"}`} />
                  </div>
                </button>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 mb-1">Turn off anytime</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">Pause or disable any automation with a single click. Full control — always.</p>
            </div>
          </motion.div>

          {/* Card 2 — Set for any month */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative bg-white/60 backdrop-blur-xl border border-slate-200/60 rounded-[1.75rem] p-6 overflow-hidden flex flex-col gap-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_45px_rgb(0,0,0,0.08)] hover:border-purple-200/60 transition-all duration-500 group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-50/50 rounded-full blur-3xl -z-10 group-hover:bg-purple-100/50 transition-colors duration-500" />
            {/* Mini UI: Month selector */}
            <div className="grid grid-cols-4 gap-2">
              {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m, i) => (
                <button
                  key={m}
                  onClick={() => toggleMonth(i)}
                  className={`text-center py-2 rounded-xl text-[11px] font-bold border transition-all cursor-pointer ${
                    selectedMonths.has(i)
                      ? "bg-[#9333ea] text-white border-[#9333ea] shadow-sm shadow-purple-300 scale-105"
                      : "border-slate-200 text-slate-400 bg-slate-50 hover:border-purple-300 hover:text-purple-500"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 mb-1">Schedule for any month</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">Pick exactly which months your automation fires. Quarterly, bi-annual, or every month — your call.</p>
            </div>
          </motion.div>

          {/* Card 3 — Assign to any team */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative bg-white/60 backdrop-blur-xl border border-slate-200/60 rounded-[1.75rem] p-6 overflow-hidden flex flex-col gap-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_45px_rgb(0,0,0,0.08)] hover:border-purple-200/60 transition-all duration-500 md:col-span-2 lg:col-span-1 group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-fuchsia-50/40 rounded-full blur-3xl -z-10 group-hover:bg-fuchsia-100/40 transition-colors duration-500" />
            {/* Mini UI: Team assignment pills */}
            <div className="flex flex-col gap-3">
              {[
                { team: "Design Team", icon: "🎨", color: "from-pink-50 to-fuchsia-50 border-fuchsia-200 text-fuchsia-700" },
                { team: "Engineering", icon: "⚙️", color: "from-blue-50 to-indigo-50 border-indigo-200 text-indigo-700" },
                { team: "Marketing", icon: "📣", color: "from-amber-50 to-orange-50 border-amber-200 text-amber-700" },
              ].map((t) => {
                const isAssigned = assignedTeams.has(t.team);
                return (
                  <button
                    key={t.team}
                    onClick={() => toggleTeam(t.team)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border bg-gradient-to-r transition-all cursor-pointer w-full text-left ${
                      isAssigned ? t.color : "from-slate-50 to-slate-100 border-slate-200 text-slate-400"
                    }`}
                  >
                    <span className="text-lg">{t.icon}</span>
                    <span className={`text-[13px] font-bold transition-colors ${isAssigned ? "" : "line-through opacity-50"}`}>{t.team}</span>
                    <div className="ml-auto flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full transition-colors ${isAssigned ? "bg-emerald-400" : "bg-slate-300"}`} />
                      <span className={`text-[11px] font-semibold transition-colors ${isAssigned ? "text-emerald-600" : "text-slate-400"}`}>
                        {isAssigned ? "Assigned" : "Unassigned"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 mb-1">Assign to any team</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">Route automated tasks to the right people automatically. No more manual hand-offs.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Automations CTA */}
      <FeatureCTA 
        title={<>Put Your Workflow on Autopilot.</>}
        description="Stop manually creating identical tasks every single month. Set up rule-based automations and let our system handle the boring stuff."
        buttonText="Set up automations"
        image={autoImg}
        imageAlt="Automated Task System"
        containerClassName="mt-10 mb-12 lg:mb-16"
        paddingClassName="p-2 sm:p-3 lg:p-3.5"
        imageClassName="w-[60%] lg:w-[54%] mx-auto lg:translate-x-10"
        imageOuterClassName="relative w-full max-w-[260px] sm:max-w-[340px] lg:max-w-none lg:w-full mx-auto lg:mx-0 translate-x-0 lg:translate-x-2"
        titleClassName="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.15] mb-3 tracking-tight drop-shadow-lg"
      />
      </div>
      </>
  );
}