 import { Helmet } from "react-helmet-async";
import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.webp";
import planImage from "../../assets/Gantt.webp";
import FeatureCTA from "../../components/FeatureCTA";
import FeatureStack from "../../components/FeatureStack";
import { Link } from "react-router-dom";
import { Lightbulb, Rocket, TrendingUp, Sparkles, Check, BrainCircuit, Zap, Search, ShieldCheck } from "lucide-react";

const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-12, 12]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
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
      <div style={{ transform: 'translateZ(30px)' }} className="h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

const getColorClasses = (color) => {
  const colorMap = {
    purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    fuchsia: "bg-fuchsia-50 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white",
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
    pink: "bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
    orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
  };
  return colorMap[color] || "bg-slate-50 text-slate-600 group-hover:bg-slate-600 group-hover:text-white";
};

export default function Startup() {

  const DEFAULT_ICON_MAP = {
    "SMART EXECUTE" : { icon: BrainCircuit, color: "#4c1d95" },
    "VISION ALIGN"  : { icon: Zap, color: "#4c1d95" },
    "RAPID INSIGHT" : { icon: Search, color: "#4c1d95" },
}

  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="bg-white font-sans">
      <Helmet>
        <title>Startup | Karyaup</title>
        <meta name="description" content="Plan and manage schedules with Karyaup calendar. Track tasks, deadlines, meetings, and events in one unified calendar for better team coordination." />
        <meta name="keywords" content="startup, team calendar, scheduling software, task calendar, project deadlines, meeting planner, Karyaup" />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="Startup | Karyaup" />
        <meta property="og:description" content="Organize tasks, events, and deadlines with a powerful team calendar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/startup" />
        <meta property="og:site_name" content="Karyaup" />
        <link rel="canonical" href="https://karyaup.com/features/startup" />
      </Helmet>

      {/* ================= HERO SECTION ================= */}

      <section className="py-22 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-2 py-1.5 rounded-full bg-purple-50 text-[11px] font-black uppercase tracking-widest text-purple-600 mb-3 border border-purple-100">
            Founder Intelligence
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-3"
            >
              The Everything App<br />
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                for Startup Work
              </motion.span>
            </motion.h1>

            <div className="mt-5 space-y-3 max-w-lg w-full">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium">Your Startup Journey, Powered by KaryaUp.</p>
              </div>
            </div>

            <div className="mt-4 space-y-3 max-w-lg w-full">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium">The all-in-one workspace designed to help <br />founders gap between vision and execution</p>
              </div>
            </div>
          
            <FeatureStack
              items={[
                { label: "SMART EXECUTE", icon: BrainCircuit },
                { label: "VISION ALIGN", icon: Zap },
                { label: "RAPID INSIGHT", icon: Search }
              ]}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24"
          >
            <div className="relative overflow-hidden  shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white mt-[-30px] lg:mt-[-40px]">
              <img
                src={dashboardImage}
                alt="KaryaUp task management"
                className="w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[380px] xl:h-[350px] object-cover object-left-top bg-white transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ROADMAP SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 bg-white border-b border-slate-200">
        <div className="max-w-[90rem] mx-auto flex flex-col-reverse lg:flex-row items-stretch">

          {/* Left: Text Container */}
          <div className="w-full lg:w-[45%] p-10 md:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200">
            <div>


              <motion.h1
                initial={{ opacity: 0, y: 40, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 100,
                  delay: 0.1
                }}
                className="text-4xl sm:text-4xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-2 drop-shadow-sm"
              >
                Connect Your  <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Roadmap for daily work
                </motion.span>
              </motion.h1>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-4 max-w-xl">
              Manage everything from product roadmaps to sales pipelines in a single place with 10+ customizable views.
            </p>
            <div>

            </div>

          </div>

          {/* Right: Image Container */}
          <div className="w-full lg:w-[55%] p-8 md:p-14 border-b lg:border-b-0 border-slate-200 flex items-center justify-center bg-[#fafbfc]">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full shadow-[0_15px_40px_rgba(0,0,0,0.06)] rounded-2xl overflow-hidden border border-slate-100 bg-white group hover:scale-[1.02] transition-transform duration-500"
            >
              <img src={planImage} alt="KaryaUp Project Roadmap" className="w-full h-auto object-cover" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ================= SCALE SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 bg-white border-b border-slate-200">
        <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row items-stretch">

          {/* Left: Image Container */}
          <div className="w-full lg:w-[55%] p-8 md:p-14 lg:p-20 border-b lg:border-b-0 lg:border-r border-slate-200 flex items-center justify-center bg-slate-50/30">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full rounded-2xl"
            >
              <div className="w-full shadow-2xl rounded-2xl overflow-hidden border border-slate-200 bg-white group hover:scale-[1.02] transition-transform duration-500">
                <img src={dashboardImage} alt="KaryaUp Project Scale Layout" className="w-full h-auto object-cover opacity-90" />
              </div>

              
            </motion.div>
          </div>

          {/* Right: Text Container */}
          <div className="w-full lg:w-[67%] p-10 md:p-16 lg:p-24 flex flex-col justify-center">

            <div>


              <motion.h1
                initial={{ opacity: 0, y: 40, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 100,
                  delay: 0.1
                }}
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-3 drop-shadow-sm"
              >
                Scale from Startup<br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  to Unicorn
                </motion.span>
              </motion.h1>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Build the perfect organization that grows with your startup. KaryaUp's Hierarchy makes it easy to expand your team.
            </p>
            <div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= STARTUP GROWTH JOURNEY SECTION ================= */}
     {/* ================= STARTUP GROWTH JOURNEY SECTION ================= */}
<section className="w-full py-5 lg:px-5 bg-white">
  <div className="max-w-9xl mx-auto text-center mb-16">
    <motion.h1
      initial={{ opacity: 0, y: 40, x: -10 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 100,
        delay: 0.1
      }}
      className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-3 drop-shadow-sm"
    >
      Your Startup Journey <br />
      <motion.span
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
        animate={{ backgroundPosition: ["0% center", "-200% center"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        Powered by KaryaUp
      </motion.span>
    </motion.h1>

    <p className="text-[1rem] text-gray-600 max-w-2xl mx-auto">
      From idea to unicorn, KaryaUp gives startups the 
      <br />
      tools to plan, execute, and scale all in one platform.
    </p>
  </div>

  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="grid md:grid-cols-4 gap-8 px-4"
  >
    {[
      { title: "Ideation", desc: "Capture ideas, collaborate with co-founders, and align vision.", icon: Lightbulb, color: "fuchsia" },
      { title: "Launch", desc: "Plan sprints, track tasks, and deliver your MVP faster.", icon: Rocket, color: "purple" },
      { title: "Growth", desc: "Automate workflows, manage sales pipelines, and expand your reach.", icon: TrendingUp, color: "fuchsia" },
      { title: "Scale", desc: "Build hierarchies, manage complex projects, and grow into a unicorn.", icon: Sparkles, color: "purple" },
    ].map((feature, idx) => {
      const Icon = feature.icon;
      return (
        <TiltCard key={idx} className="bg-white border border-slate-200 hover:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-default h-full transition-colors transition-shadow duration-300 group">
          
          {/* HEADER ROW: Icon and Title side-by-side */}
          <div className="flex items-center gap-4 mb-5 sm:mb-3">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:scale-110 flex-shrink-0 ${getColorClasses(feature.color)}`}>
              <Icon size={20} strokeWidth={2.5} />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
              {feature.title}
            </h3>
          </div>

          <p className="text-slate-600 text-sm font-medium leading-relaxed">
            {feature.desc}
          </p>
        </TiltCard>
      );
    })}
  </motion.div>
</section>
      <FeatureCTA
        title={
          <>
            Tasks that connect to everything you do

          </>
        }
        description="Work Smater with tasks that can live in your whiteboaards,chat,calendar - anywhere you work"
        image={dashboardImage}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-10 mb-5"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px]"
        imageOuterClassName="relative w-[108%] lg:w-full translate-x-2 lg:translate-x-8"
      />
    </div>
  );
}