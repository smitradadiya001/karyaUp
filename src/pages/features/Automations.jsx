import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Check, Settings, Play, Pause, Edit3, CalendarDays, CheckCircle2, X } from "lucide-react";
import FeatureCTA from "../../components/FeatureCTA";
import FeatureStack from "../../components/FeatureStack";
import autoImg from "../../assets/New_Task.png";
import AutomationImg from "../../assets/Automation.png";
import { Helmet } from "react-helmet-async";

/* 3D tilt card — light theme */
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-12, 12]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;   // -1 … 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    rawX.set(x);
    rawY.set(y);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 1000 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={className}
    >
      <div style={{ transform: 'translateZ(30px)' }} className="h-full flex flex-col gap-4 justify-between">
        {children}
      </div>
    </motion.div>
  );
};

export default function Automations() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Hardcoded states for unclickable display
  const toggleStates = [true, false, false];
  const selectedMonths = new Set([0, 3, 6, 9]); // Jan, Apr, Jul, Oct
  const assignedTeams = new Set(["Design Team", "Engineering", "Marketing"]);

  return (
    <>
      <Helmet>
        <title>Workflow Automation & Smart Actions | Karyaup</title>
        <meta name="description" content="Automate repetitive tasks with Karyaup workflow automation. Create smart rules, trigger actions, and streamline your business processes effortlessly." />
        <meta name="keywords" content="workflow automation, task automation, business automation tools, process automation, productivity automation, Karyaup" />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="Workflow Automation & Smart Actions | Karyaup" />
        <meta property="og:description" content="Streamline your workflows with powerful automation and smart triggers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/automation" />
        <meta property="og:site_name" content="Karyaup" />
        <link rel="canonical" href="https://karyaup.com/features/automation" />
      </Helmet>
      <div className="min-h-screen bg-white pt-24 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 text-slate-900 overflow-x-hidden">

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-4 sm:pt-6 lg:pt-4 pb-8 sm:pb-10 lg:pb-12">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-0">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start lg:self-start lg:pt-2">
                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest shadow-sm"
                >
                  AUTOMATIONS — WORK ON AUTOPILOT
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                  className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-[#0f172a] tracking-normal leading-[1.05]"
                >
                  Put Repetitive Tasks
                  <span className="block">
                    on{" "}
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
                    "Construct custom workflows to automate tasks."
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

              {/* Right Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24 mt-4 sm:mt-8 lg:mt-0"
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
        <section className="pt-4 lg:pt-8 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto overflow-hidden">
          {/* Section Tag */}
          <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#f3e8ff] text-[#9333ea] text-[11px] font-black uppercase tracking-[0.15em] mb-4">
              What you can do
            </span>
            <h2 className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-[#0f172a] tracking-normal leading-[1.05]">
              Automation, Built<br />
              <span className="text-gradient">Around Your Workflow</span>
            </h2>
          </div>

          {/* 4-Box TiltCard Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" style={{ perspective: '1200px' }}>

            {/* Box 1 — Toggle Off Anytime */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-full">
              <TiltCard className="relative bg-white border border-slate-200 hover:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 p-5 sm:p-6 rounded-[2rem] h-full transition-colors transition-shadow duration-300 group overflow-hidden cursor-default">
                <div className="absolute top-0 right-0 w-48 h-48 bg-red-50/40 rounded-full blur-3xl -z-10 group-hover:bg-red-100/40 transition-colors duration-500" />

                {/* Mini UI */}
                <div className="flex flex-col gap-2.5 w-full">
                  {[
                    "Monthly Safety Report",
                    "Weekly Standup Tasks",
                    "Quarterly Review Prep",
                  ].map((label, i) => (
                    <div key={i} className="flex items-center justify-between bg-slate-50/80 rounded-xl px-3 py-2.5 border border-slate-100/80 w-full">
                      <span className={`text-[12px] font-semibold transition-all ${toggleStates[i] ? "text-slate-800" : "text-slate-400 line-through"}`}>{label}</span>
                      <div className={`w-8 h-[18px] rounded-full flex items-center px-0.5 transition-colors flex-shrink-0 ml-2 ${toggleStates[i] ? "bg-emerald-500" : "bg-slate-200"}`}>
                        <div className={`w-3.5 h-3.5 bg-white rounded-full shadow-sm transition-transform duration-200 ${toggleStates[i] ? "translate-x-[14px]" : "translate-x-0"}`} />
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-1.5 leading-tight">Turn off anytime</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Pause or disable any automation with a single click.</p>
                </div>
              </TiltCard>
            </motion.div>

            {/* Box 2 — Schedule for any month */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="h-full">
              <TiltCard className="relative bg-white border border-slate-200 hover:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 p-5 sm:p-6 rounded-[2rem] h-full transition-colors transition-shadow duration-300 group overflow-hidden cursor-default">
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-50/50 rounded-full blur-3xl -z-10 group-hover:bg-purple-100/50 transition-colors duration-500" />

                {/* Mini UI */}
                <div className="grid grid-cols-4 gap-1.5 w-full">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m, i) => (
                    <div
                      key={m}
                      className={`text-center py-1.5 rounded-lg text-[10px] font-bold border transition-all ${selectedMonths.has(i)
                          ? "bg-[#9333ea] text-white border-[#9333ea] shadow-sm shadow-purple-300 scale-[1.02]"
                          : "border-slate-200 text-slate-400 bg-slate-50/50"
                        }`}
                    >
                      {m}
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-1.5 leading-tight">Schedule for any month</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Pick exactly which months it fires. Quarterly or every month.</p>
                </div>
              </TiltCard>
            </motion.div>

            {/* Box 3 — Assign to any team */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="h-full">
              <TiltCard className="relative bg-white border border-slate-200 hover:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 p-5 sm:p-6 rounded-[2rem] h-full transition-colors transition-shadow duration-300 group overflow-hidden cursor-default">
                <div className="absolute top-0 right-0 w-48 h-48 bg-fuchsia-50/40 rounded-full blur-3xl -z-10 group-hover:bg-fuchsia-100/40 transition-colors duration-500" />

                {/* Mini UI */}
                <div className="flex flex-col gap-2 w-full">
                  {[
                    { team: "Design Team", icon: "🎨", color: "from-pink-50/50 to-fuchsia-50/50 border-fuchsia-100 text-fuchsia-700" },
                    { team: "Engineering", icon: "⚙️", color: "from-blue-50/50 to-indigo-50/50 border-indigo-100 text-indigo-700" },
                    { team: "Marketing", icon: "📣", color: "from-amber-50/50 to-orange-50/50 border-amber-100 text-amber-700" },
                  ].map((t) => {
                    const isAssigned = assignedTeams.has(t.team);
                    return (
                      <div
                        key={t.team}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl border bg-gradient-to-r w-full ${isAssigned ? t.color : "from-slate-50 to-slate-100 border-slate-200 text-slate-400"
                          }`}
                      >
                        <span className="text-sm">{t.icon}</span>
                        <span className={`text-[12px] font-bold ${isAssigned ? "" : "line-through opacity-50"}`}>{t.team}</span>
                        <div className="ml-auto flex items-center gap-1.5">
                          <div className={`w-1.5 h-1.5 rounded-full ${isAssigned ? "bg-emerald-400" : "bg-slate-300"}`} />
                          <span className={`text-[9px] uppercase tracking-widest font-black ${isAssigned ? "text-emerald-600" : "text-slate-400"}`}>
                            {isAssigned ? "Assigned" : "Unassigned"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-1.5 leading-tight">Assign to any team</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Route automated tasks to the right people automatically.</p>
                </div>
              </TiltCard>
            </motion.div>

            {/* Box 4 — Smart Alerts (New) */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="h-full">
              <TiltCard className="relative bg-white border border-slate-200 hover:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 p-5 sm:p-6 rounded-[2rem] h-full transition-colors transition-shadow duration-300 group overflow-hidden cursor-default">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50/40 rounded-full blur-3xl -z-10 group-hover:bg-blue-100/40 transition-colors duration-500" />

                {/* Mini UI */}
                <div className="flex flex-col gap-2.5 w-full">
                  {[
                    { text: "Automation Executed", time: "Just now", color: "emerald", icon: "✓" },
                    { text: "Approval Required", time: "2h ago", color: "amber", icon: "!" },
                    { text: "Task Auto-Assigned", time: "4h ago", color: "blue", icon: "→" },
                  ].map((notif, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-slate-50/80 rounded-xl px-3 py-2 border border-slate-100/80 w-full">
                      <div className={`w-5 h-5 rounded-full bg-${notif.color}-100 text-${notif.color}-600 flex items-center justify-center text-[10px] font-black shrink-0`}>
                        {notif.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-slate-700 leading-tight">{notif.text}</span>
                        <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-400 mt-0.5">{notif.time}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-1.5 leading-tight">Smart Alerts</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Let the system ping you reliably when critical actions are taken.</p>
                </div>
              </TiltCard>
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
          containerClassName="mt-0"
          paddingClassName="p-2 sm:p-3 lg:p-3.5"
          imageClassName="w-[60%] lg:w-[54%] mx-auto lg:translate-x-10"
          imageOuterClassName="relative w-full max-w-[260px] sm:max-w-[340px] lg:max-w-none lg:w-full mx-auto lg:mx-0 translate-x-0 lg:translate-x-2"
          titleClassName="text-xl sm:text-2xl lg:text-[1.75rem] font-black text-white leading-[1.1] mb-3 tracking-tight drop-shadow-lg"
        />
      </div>
    </>
  );
}
