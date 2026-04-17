import { Helmet } from "react-helmet-async";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect, useMemo, isStackOpen } from "react";
import FeatureCTA from '../../components/FeatureCTA';
import FeatureStack from "../../components/FeatureStack";
import dashboardImage from "../../assets/lead.webp";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Zap,
  BrainCircuit,
  Sparkles,
  Database,
  Mail,
  History,
  RefreshCw,
  Phone,
  Target,
  Layers,
  Globe,
  Search,
  UserCheck,
  ListTodo,
  Calendar,
  Clock,
  CheckCircle2,
  UserPlus,
  ClipboardCheck,
  Check

} from "lucide-react";

// --- TILT CARD COMPONENT ---
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [12, -12]), {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-12, 12]), {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    rawX.set(x);
    rawY.set(y);
  };

  const handleTouchMove = (e) => {
    if (!ref.current || e.touches.length === 0) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.touches[0].clientY - rect.top) / rect.height) * 2 - 1;
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
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,         // ✅ correct property name
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={className}
    >
      <div style={{ transform: "translateZ(20px)", height: "100%", display: "flex", flexDirection: "column" }}>
        {children}
      </div>
    </motion.div>
  );
};

export default function TemplateCRM() {

  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);

  const aiFeatures = [
    {
      icon: BrainCircuit,
      title: "Call Transcription & Summaries",
      desc: "AI automatically records, transcribes, and extracts key action items from your client calls in real-time.",
      color: "purple",
    },
    {
      icon: Sparkles,
      title: "Automated Data Entry",
      desc: "Contact details, deal sizes, and company info are extracted directly from emails and populated into your CRM intuitively.",
      color: "fuchsia",
    },
    {
      icon: TrendingUp,
      title: "Predictive Forecasting",
      desc: "Leverage machine learning to calculate win probabilities based on historical data and prospect engagement levels.",
      color: "purple",
    },
    {
      icon: Mail,
      title: "Drafted Follow-Ups",
      desc: "Your AI agent drafts highly personalized follow-up emails instantly after a meeting concludes, ready for review.",
      color: "fuchsia",
    },
    {
      icon: RefreshCw,
      title: "Pipeline Auto-Progression",
      desc: "Deals automatically advance stages when specific criteria (like a signed NDA or sent proposal) are met.",
      color: "purple",
    },
    {
      icon: Target,
      title: "At-Risk Deal Alerts",
      desc: "Sentiment analysis scans ongoing communications to flag deals that have stalled or show negative prospect sentiment.",
      color: "fuchsia",
    }
  ];

  // const features = [
  //   { icon: ListTodo, title: "Contextual Task Creation", desc: "AI identifies tasks buried in meeting notes and syncs them across your workspace.", color: "purple" },
  //   { icon: Calendar, title: "Smart Scheduling", desc: "Automatically finds meeting times by analyzing your team and prospect availability.", color: "fuchsia" },
  //   { icon: Zap, title: "Urgency Prioritization", desc: "Tasks are dynamically re-ordered based on deal health and closing proximity.", color: "purple" },
  // ];
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      title: "Intelligent Task Routing",
      desc: "Automatically assign tasks to the right team members based on capacity and skill sets.",
    },
    {
      title: "Real-time Collaboration",
      desc: "Comment, tag, and securely share files within each task layer for instant approvals.",
    },
    {
      title: "Visual Progress Tracking",
      desc: "Customizable boards and instant metric dashboards keep your delivery on speed.",
    },
  ];
  const DEFAULT_ICON_MAP = {
    "DEAL ROUTING" : { icon: BrainCircuit, color: "#4c1d95" },
    "PIPELINE SYNC" : { icon: Zap, color: "#4c1d95" },
    "CONTACT FIND"  : { icon: Search, color: "#4c1d95" },
}
 
  // REMOVED group-hover CLASSES TO KEEP COLORS STATIC
  const getColorClasses = (color) => {
    const classes = {
      purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-active:bg-purple-600 group-active:text-white",
      fuchsia: "bg-fuchsia-50 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white group-active:bg-fuchsia-600 group-active:text-white",
      blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-active:bg-blue-600 group-active:text-white",
      pink: "bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white group-active:bg-pink-600 group-active:text-white",
      emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-active:bg-emerald-600 group-active:text-white",
      orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white group-active:bg-orange-600 group-active:text-white",
    };
    return classes[color] || "bg-slate-50 text-slate-600 group-hover:bg-slate-600 group-hover:text-white group-active:bg-slate-600 group-active:text-white";
  };

  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-purple-100">
      <Helmet>
        <title>Template C R M | Karyaup</title>
        <meta name="description" content="Plan and manage schedules with Karyaup calendar. Track tasks, deadlines, meetings, and events in one unified calendar for better team coordination." />
        <meta name="keywords" content="template-c-r-m, team calendar, scheduling software, task calendar, project deadlines, meeting planner, Karyaup" />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="Template C R M | Karyaup" />
        <meta property="og:description" content="Organize tasks, events, and deadlines with a powerful team calendar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/template-c-r-m" />
        <meta property="og:site_name" content="Karyaup" />
        <link rel="canonical" href="https://karyaup.com/features/template-c-r-m" />
      </Helmet>

      {/* --- HERO SECTION --- */}

      <section className="relative pt-26 sm:pt-30 lg:pt-34 pb-8 sm:pb-16 lg:pb-20 px-4 sm:px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div
            className={`grid lg:grid-cols-2 items-center transition-all duration-300 ${isStackOpen ? "gap-10" : "gap-0"
              }`}
            style={{ transition: "gap 0.32s ease" }}
          >
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm mb-2 sm:mb-4"
              >
                Template CRM - Revenue Intelligence
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="text-3xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1"
              >
                Close more Deals with
                <span className="block">

                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Less Manual Effort.
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
                  { text: "KaryaUp CRM unifies your contacts into a single, AI driven interface", icon: Check },
                  { text: "Turn every interaction into growth with a smarter, connected CRM.", icon: Check }

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
              <FeatureStack items={["DEAL ROUTING", "PIPELINE SYNC", "CONTACT FIND"]} />
            </div>

            <div className="pt-6 relative w-full max-w-[540px] mx-auto lg:max-w-none overflow-hidden rounded-[10px]">
              <img
                src={dashboardImage}
                alt="Dashboard"
                className="w-full h-auto rounded-[10px] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- AI WORKSPACE --- */}
    {/* --- SECTION SPACING UPDATED (py-16 lg:py-24) --- */}
<section className="py-10 lg:py-20 bg-white relative overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 relative z-10">
    <div className="text-center mb-20"> {/* Increased margin-bottom */}
      <motion.h1
        initial={{ opacity: 0, y: 40, x: -10 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 100,
          delay: 0.1
        }}
        className="text-center text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
      >
        The AI Workspace Built for<br />
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
          animate={{ backgroundPosition: ["0% center", "-200% center"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          High-Velocity Sales
        </motion.span>
      </motion.h1>
      <p className="text-[1rem] text-slate-600 max-w-2xl mx-auto font-medium">KaryaUp AI listens, analyzes, and updates your CRM automatically.</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9">
      {aiFeatures.map((feat, i) => (
        <TiltCard 
          key={i} 
          className="bg-white border border-slate-200 hover:border-purple-300 active:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl active:shadow-2xl hover:shadow-purple-900/15 active:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-pointer h-fulltransition-colors transition-shadow duration-300 group">
      
          {/* --- FLEX CONTAINER: LOGO & TITLE SIDE-BY-SIDE --- */}
          <div className="flex items-center gap-4 mb-5 sm:mb-6">
            <div className={`
              w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center 
              transition-all duration-300 shrink-0
              group-hover:shadow-md group-hover:scale-110 
              ${getColorClasses(feat.color)}
            `}>
              <feat.icon size={22} strokeWidth={2.5} />
            </div>

            <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
              {feat.title}
            </h3>
          </div>
          {/* DESCRIPTION */}
          <p className="text-slate-600 text-sm font-medium leading-relaxed">
            {feat.desc}
          </p>
        </TiltCard>
      ))}
    </div>
  </div>
</section>

      {/* --- AI TASK ORCHESTRATION --- */}
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Visual Side: Interactive Task List */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <TiltCard className="bg-[#FCFCFD] border border-slate-200 p-6 sm:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <h5 className="font-black text-slate-900 text-xl">Today's Priority</h5>
                  <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">AI Sorted</span>
                </div>

                <div className="space-y-4">
                  {[
                    { task: "Follow up with TechCorp", status: "High Priority", time: "10:30 AM", color: "text-rose-500 bg-rose-50" },
                    { task: "Review Call Summary - Sarah", status: "New Task", time: "1:00 PM", color: "text-purple-500 bg-purple-50" },
                    { task: "Send Proposal to Logistics Ltd", status: "Deal Closing", time: "3:45 PM", color: "text-emerald-500 bg-emerald-50" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-md border-2 border-slate-200 flex items-center justify-center">
                          {i === 2 && <CheckCircle2 className="text-emerald-500" size={14} />}
                        </div>
                        <div>
                          <p className="text-slate-800 font-bold text-sm">{item.task}</p>
                          <p className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded mt-1 inline-block ${item.color}`}>
                            {item.status}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400">
                        <Clock size={12} />
                        <span className="text-[11px] font-medium">{item.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-50 rounded-full blur-3xl opacity-50" />
              </TiltCard>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-3"
              >
                Centralize Your <br />
                <span className="block">Workflow</span>
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  with KARYAUP AI.
                </motion.span>
              </motion.h1>

              <p className="text-slate-600 text-[1rem] mb-8 leading-relaxed font-medium">
                KaryaUp AI treats every task as part of the bigger picture. 
                <br />
                It doesn't just tell you what to do; it prepares everything 
                <br />
                you need to do it.
              </p>

              <div className="flex flex-col order-1 lg:order-2 w-full max-w-[min(100%,400px)] sm:max-w-[440px] lg:max-w-[460px] mx-auto lg:mx-0 lg:justify-self-start">
              {features.map((item, i) => {
                const isActive = activeFeature === i;
                const activeColor = i === 1 ? "#D946EF" : "#7E22CE";
                const activeBorderColor = i === 1 ? "rgba(217,70,239,0.26)" : "rgba(126,34,206,0.26)";

                // Gap from circle edge to row boundary:
                //   collapsed row ≈ 52px  → center=26, radius=22, gap=4
                //   expanded  row ≈ 104px → center=52, radius=22, gap=30
                const COLL = 4;
                const EXP = 30;
                const upperGap = activeFeature === i ? EXP : COLL;
                const lowerGap = activeFeature === i + 1 ? EXP : COLL;
                // connector height fills: mb-4 gap (16px) + both circle-edge gaps
                const connHeight = 16 + upperGap + lowerGap;

                return (
                  <div key={i}>
                    {/* Row: circle CENTERED with card */}
                    <div
                      className="flex items-center gap-5 mb-4 last:mb-0"
                      onMouseEnter={() => setActiveFeature(i)}
                      onMouseLeave={() => setActiveFeature(null)}
                      onTouchStart={() => setActiveFeature(i)}
                    >
                      {/* Number Circle — no ring so line can touch */}
                      <motion.div
                        animate={{
                          scale: isActive ? 1.1 : 1,
                          backgroundColor:
                            isActive ? activeColor : "#f1f5f9",
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 shadow-md z-10"
                      >
                        <span
                          className={`font-black text-base leading-none ${isActive ? "text-white" : "text-slate-400"}`}
                        >
                          {i + 1}
                        </span>
                      </motion.div>

                      {/* Card */}
                      <motion.div
                        animate={{
                          borderColor: isActive
                            ? activeBorderColor
                            : "rgba(0,0,0,0)",
                          boxShadow: isActive
                            ? "0 4px 20px rgba(0,0,0,0.08)"
                            : "0 1px 4px rgba(0,0,0,0.04)",
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex-1 bg-white border rounded-2xl px-5 py-4 cursor-pointer"
                      >
                        <motion.h3
                          animate={{ color: isActive ? "#0f172a" : "#64748b" }}
                          className="text-[1.05rem] font-black tracking-tight"
                        >
                          {item.title}
                        </motion.h3>

                        <AnimatePresence>
                          {isActive && (
                            <motion.p
                              key="desc"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="text-slate-500 font-medium text-sm leading-relaxed mt-2 overflow-hidden"
                            >
                              {item.desc}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    {/* Connector — neg margins pull it flush to both circle edges */}
                    {i < features.length - 1 && (
                      <div
                        className="flex gap-5"
                        style={{
                          marginTop: `-${upperGap}px`,
                          marginBottom: `-${lowerGap}px`,
                        }}
                      >
                        <div className="w-11 flex justify-center">
                          <motion.div
                            animate={{
                              backgroundColor: isActive
                                ? activeColor
                                : "#e2e8f0",
                            }}
                            transition={{ duration: 0.4 }}
                            style={{ height: `${connHeight}px` }}
                            className="w-0.5 rounded-full"
                          />
                        </div>
                        <div className="flex-1" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          
            </div>
          </div>
        </div>
      </section>
      {/* --- FINAL CTA --- */}
      <FeatureCTA
        title={<>Tasks that connect to <br /> everything you do</>}
        description="Work Smarter with tasks that can live in your whiteboards, chat, calendar - anywhere you work"
        image={dashboardImage}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-10 mb-10 px-6"
        paddingClassName="p-6 lg:p-8 lg:py-12"
        imageClassName="w-full max-w-[940px]"
        imageOuterClassName="relative w-full"
      />
    </div>
  );
}