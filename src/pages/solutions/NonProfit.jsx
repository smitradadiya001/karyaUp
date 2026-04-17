import { Helmet } from "react-helmet-async";
import React, { useState, useRef, useEffect, useMemo, isStackOpen } from "react";
import { Sparkles } from "lucide-react";
import {
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion";
import FeatureCTA from "../../components/FeatureCTA";
import FeatureStack from "../../components/FeatureStack";
import dashboardImage from "../../assets/dashboard2.webp";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ClipboardList,
  Database,
  LineChart,
  HeartHandshake,
  Users,
  Rocket,
  ShieldCheck,
  BrainCircuit,
  Zap,
  Search,
  CalendarDays,
} from "lucide-react";

const CheckIcon = ({ className }) => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="3,9 7,13 13,5" />
  </svg>
);

const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-12, 12]), { stiffness: 300, damping: 30 });

  const processInput = (clientX, clientY) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate position relative to center (-1 to 1)
    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((clientY - rect.top) / rect.height) * 2 - 1;
    
    rawX.set(x);
    rawY.set(y);
  };

  const handleMouseMove = (e) => processInput(e.clientX, e.clientY);

  const handleTouchMove = (e) => {
    // Prevents page scrolling while tilting the card
    if (e.touches.length > 0) {
      processInput(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleReset = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleReset}
      // Mobile Support
      onTouchMove={handleTouchMove}
      onTouchEnd={handleReset}
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: 'preserve-3d', 
        perspective: 1000 // Moved to standard style property
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={className}
    >
      <div 
        style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }} 
        className="h-full flex flex-col"
      >
        {children}
      </div>
    </motion.div>
  );
};

const getColorClasses = (color) => {
  const colorMap = {
    purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-active:bg-purple-600 group-active:text-white",
    fuchsia: "bg-fuchsia-50 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white group-active:bg-fuchsia-600 group-active:text-white",
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-active:bg-blue-600 group-active:text-white",
    pink: "bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white group-active:bg-pink-600 group-active:text-white",
    emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-active:bg-emerald-600 group-active:text-white",
    orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white group-active:bg-orange-600 group-active:text-white",
  };
  return colorMap[color] || "bg-slate-50 text-slate-600 group-hover:bg-slate-600 group-hover:text-white group-active:bg-slate-600 group-active:text-white";
};
const ImpactCard = ({ icon: Icon, title, description }) => (
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7e22ce]/10 text-[#7e22ce]">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
  </div>
);

export default function NonProfit() {

  const DEFAULT_ICON_MAP = {
    "MISSION MATCH": { icon: BrainCircuit, color: "#4c1d95" },
    "LIVE IMPACT": { icon: Zap, color: "#4c1d95" },
    "GRANT FIND": { icon: Search, color: "#4c1d95" },
  }
  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  const whyItWorksFeatures = [
    {
      title: "Simple for mission-driven teams",
      desc: "Simple interface for busy nonprofit teams.",
    },
    {
      title: "Collaboration across your ecosystem",
      desc: "Supports collaboration across departments and volunteers.",
    },
    {
      title: "One place for the full picture",
      desc: "Keeps planning, tasks, and communication in one place.",
    },
  ];

  const impactCards = [
    {
      icon: HeartHandshake,
      title: "Unified Intelligence",
      description:
        "Replaces 5+ disconnected tools with one ecosystem where your data and AI work together.",
    },
    {
      icon: Users,
      title: "Reduced Admin Friction",
      description:
        "Helps your team focus more on high-value creative or mission work and less on manual data entry.",
    },
    {
      icon: Rocket,
      title: "Real-time Visibility",
      description:
        "Provides a single source of truth across departments, volunteers, or clients..",
    },
    {
      icon: ShieldCheck,
      title: "Trusted and organized",
      description:
        "Keep important information, tasks, and updates structured in one place for smoother coordination.",
    },
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Non Profit | Karyaup</title>
        <meta
          name="description"
          content="Karyaup AI Workspace helps nonprofit teams organize work, manage forms, track reporting, and collaborate more effectively."
        />
        <meta
          name="keywords"
          content="non-profit, nonprofit workspace, NGO software, team collaboration, forms, surveys, reporting, Karyaup"
        />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="Non Profit | Karyaup" />
        <meta
          property="og:description"
          content="Organize nonprofit work with a powerful AI workspace for collaboration, forms, reporting, and team operations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/non-profit" />
        <meta property="og:site_name" content="Karyaup" />
        <link rel="canonical" href="https://karyaup.com/features/non-profit" />
      </Helmet>

      {/* HERO SECTION */}


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
                Non-Profit - Unified Non-Profit
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                // className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
                className="text-3xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1"
              >
                Grow your Non-Profit
                <span className="block">

                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    with KARYAUP.
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
                  { text: " Your Startup Journey, Powered by KaryaUp.", icon: Check },
                  { text: "The all-in-one workspace designed to help founders gap between vision and execution", icon: Check }

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
              <FeatureStack
                items={[
                  { label: "MISSION MATCH", icon: BrainCircuit },
                  { label: "LIVE IMPACT", icon: Zap },
                  { label: "GRANT FIND", icon: Search }
                ]}
              />
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

      {/* INTELLIGENCE + WORKSPACE (centered header | image left | Why it works right) */}

      <section className="py-4 px-6 pb-7 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative z-10">

            <motion.h1
              initial={{ opacity: 0, y: 40, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-1 drop-shadow-sm"
            >
              Supercharge your <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Daily Workflows
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed"
            >
              Centralize communication, assign dynamic tasks, and execute flawlessly with enterprise grade AI execution.
            </motion.p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Image Card Container */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative rounded-[2.5rem] p-2 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 border border-slate-100 shadow-2xl">
                <img
                  src={dashboardImage}
                  alt="Workspace Preview"
                  className="relative z-10 w-full h-auto rounded-[2rem] border border-white/50 shadow-sm transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </motion.div>

            {/* Feature List -numbered steps with connecting lines */}
            <div className="flex flex-col">
              {whyItWorksFeatures.map((item, i) => {
                const isActive = activeFeature === i;
                const activeColor = i === 1 ? "#d946ef" : "#7c3aed";
                return (
                <div key={i} className="flex items-stretch gap-5">

                  {/* Left column: number circle + connecting line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <motion.div
                      animate={
                        isActive
                          ? { backgroundColor: activeColor, color: "#ffffff", scale: 1.1 }
                          : { backgroundColor: "#f3f4f6", color: "#9ca3af", scale: 1 }
                      }
                      transition={{ duration: 0.3 }}
                      className="w-11 h-11 rounded-full flex items-center justify-center text-base font-bold shrink-0 z-10"
                    >
                      {i + 1}
                    </motion.div>

                    {/* Connecting line -hidden after last item */}
                    {i < whyItWorksFeatures.length - 1 && (
                      <motion.div
                        animate={
                          isActive
                            ? { backgroundColor: activeColor, opacity: 0.35 }
                            : { backgroundColor: "#e5e7eb", opacity: 1 }
                        }
                        transition={{ duration: 0.3 }}
                        className="w-0.5 flex-1 my-1 min-h-8"
                      />
                    )}
                  </div>

                  {/* Right column: feature card */}
                  <motion.div
                    onMouseEnter={() => setActiveFeature(i)}
                    onMouseLeave={() => setActiveFeature(null)}
                    onTouchStart={() => setActiveFeature(i)}
                    className={`relative p-6 rounded-[2rem] cursor-pointer transition-all duration-500 border flex-1 mb-4 ${isActive
                      ? "bg-white border-slate-200 shadow-xl shadow-purple-500/5 translate-x-2"
                      : "bg-transparent border-transparent opacity-60 hover:opacity-100"
                      }`}
                  >
                    <h3 className="text-xl font-bold text-slate-900 leading-none">
                      {item.title}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          className="text-slate-500 font-medium text-sm leading-relaxed overflow-hidden"
                        >
                          {item.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                </div>
              )})}
            </div>

          </div>
        </div>
      </section>

      <section className="w-full py-7 pb-15 relative overflow-hidden bg-white">
        {/* Animated Background Glows for Glass Effect */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-white rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 opacity-40 animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-3"
            >
              Streamline the <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Mission Lifecycle
              </motion.span>
            </motion.h1>
            <p className="text-center text-slate-600 text-base sm:text-lg font-medium leading-relaxed max-w-[320px] sm:max-w-xl mx-auto px-4 mt-4">
              One connected workspace for every stage of nonprofit work from fundraising and programs to volunteer reporting.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {[
              { title: "Fundraising & stewardship", desc: "Track campaigns, donor touchpoints, pledges so relationships stay personal at scale.", icon: HeartHandshake, color: "fuchsia" },
              { title: "Programs & outreach", desc: "Plan events, field programs, and community campaigns with clear ownership and timelines.", icon: CalendarDays, color: "purple" },
              { title: "Volunteers & operations", desc: "Coordinate schedules, roles, and internal tasks across staff and volunteers.", icon: Users, color: "fuchsia" },
              { title: "Impact & reporting", desc: "Measure outcomes, share progress with boards funders, and tell your story with data.", icon: LineChart, color: "purple" },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <TiltCard
                key={idx}
                className="bg-white border border-slate-200 hover:border-purple-300 active:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl active:shadow-2xl hover:shadow-purple-900/15 active:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-pointer h-fulltransition-colors transition-shadow duration-300 group">
                  {/* --- FLEX CONTAINER: LOGO & TITLE SIDE-BY-SIDE --- */}
                  <div className="flex items-center gap-4 mb-5 sm:mb-6">
                    <div className={`
            w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center 
            transition-all duration-300 shrink-0
            group-hover:shadow-md group-hover:scale-110 
            ${getColorClasses(feature.color)}
          `}>
                      <Icon size={20} strokeWidth={2.5} />
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                      {feature.title}
                    </h3>
                  </div>

                  {/* --- DESCRIPTION --- */}
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    {feature.desc}
                  </p>

                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FeatureCTA
        title={<>Tasks That Connect To <br /> Everything You Do</>}
        description="Work smarter with tasks that can live in your whiteboards, chat, and calendar -anywhere you work."
        image={dashboardImage}
        containerClassName="mb-12 md:mb-10"
      />
    </div>
  );
}