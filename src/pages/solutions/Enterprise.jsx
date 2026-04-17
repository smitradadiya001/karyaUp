 import { Helmet } from "react-helmet-async";
import React, { useRef, useState, useEffect, useMemo, isStackOpen } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import FeatureCTA from '../../components/FeatureCTA';
import FeatureStack from "../../components/FeatureStack";
import dashboardImage from "../../assets/dashboard2.webp";
import { Link } from "react-router-dom";
import { Zap, Lock, Grid, Globe, UserPlus, ClipboardCheck, TrendingUp, BrainCircuit, Search, ShieldCheck, Check } from "lucide-react";

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
    purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-active:bg-purple-600 group-active:text-white",
    fuchsia: "bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white group-active:bg-fuchsia-600 group-active:text-white",
    emerald: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-active:bg-emerald-600 group-active:text-white",
    orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white group-active:bg-orange-600 group-active:text-white",
    blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-active:bg-blue-600 group-active:text-white",
    pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white group-active:bg-pink-600 group-active:text-white"
  };
  return colorMap[color] || "bg-slate-100 text-slate-600 group-hover:bg-slate-600 group-hover:text-white group-active:bg-slate-600 group-active:text-white";
};
const features = [
  { title: "Intelligent Task Routing", desc: "Automatically assign tasks to the right team members based on capacity and skill sets." },
  { title: "Real-time Collaboration", desc: "Comment, tag, and securely share files within each task layer for instant approvals." },
  { title: "Visual Progress Tracking", desc: "Customizable boards and instant metric dashboards keep your delivery on speed." }
];


export default function Enterprise() {

  const DEFAULT_ICON_MAP = {
    "GLOBAL ROUTE": { icon: BrainCircuit, color: "#4c1d95" },
    "ELITE SYNC": { icon: Zap, color: "#4c1d95" },
    "ENTERPRISE FIND": { icon: Search, color: "#4c1d95" },
  }

  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <div className="bg-white font-sans overflow-hidden min-h-screen">
      <Helmet>
        <title>Enterprise | Karyaup</title>
        <meta name="description" content="Plan and manage schedules with Karyaup calendar. Track tasks, deadlines, meetings, and events in one unified calendar for better team coordination." />
        <meta name="keywords" content="enterprise, team calendar, scheduling software, task calendar, project deadlines, meeting planner, Karyaup" />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="Enterprise | Karyaup" />
        <meta property="og:description" content="Organize tasks, events, and deadlines with a powerful team calendar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/enterprise" />
        <meta property="og:site_name" content="Karyaup" />
        <link rel="canonical" href="https://karyaup.com/features/enterprise" />
      </Helmet>

      {/* ================= HERO SECTION ================= */}

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
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm mb-2 sm:mb-4"
              >
                Enterprise - Employee Experience
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                // className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
                className="text-3xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1"
              >
                The World's most Powerful
                <span className="block">

                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Enterprise Software.
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
                  { text: " Brainstorm, Plan, and Execute your Team's Marketing Programs.", icon: Check },
                  { text: "Multi channel campaigns to global events and more with KaryaUp.", icon: Check }

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
                  { label: "GLOBAL ROUTE", icon: BrainCircuit },
                  { label: "ELITE SYNC", icon: Zap },
                  { label: "ENTERPRISE FIND", icon: Search }
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

      {/* ================= ENTERPRISE ADVANTAGES SECTION ================= */}
      <section className="w-full py-1 px-2 lg:px-5 pb-10 bg-white">
        <div className="max-w-10xl mx-auto text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 mb-3"
          >
            Enterprise-Ready <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Reliability & Scale
            </motion.span>
          </motion.h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            KaryaUp is trusted by global enterprises to deliver secure,

            and integrated solutions that empower teams.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4"
        >
          {[
            { title: "Enterprise Workspace", desc: "High-Velocity Enterprise Workspace.", icon: Zap, color: "purple" },
            { title: "Strategic Dashboards", desc: "Strategic Executive Dashboards.", icon: Lock, color: "fuchsia" },
            { title: "Smart Gantt", desc: "Visualize the future of enterprise delivery.", icon: Grid, color: "purple" },
            { title: "Secure Data", desc: "Scale globally without compromising sensitive data.", icon: Globe, color: "fuchsia" },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <TiltCard key={idx} className="bg-white border border-slate-200 hover:border-purple-300 active:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl active:shadow-2xl hover:shadow-purple-900/15 active:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-pointer h-fulltransition-colors transition-shadow duration-300 group">

                {/* LOGO AND HEADING SIDE-BY-SIDE */}
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
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

                {/* DESCRIPTION */}
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </TiltCard>
            );
          })}
        </motion.div>
      </section>

      {/* ================= AI WORKSPACE SECTION ================= */}

      <section className="py-6 px-6 pb-7 bg-white-50 relative overflow-hidden">
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

          {/* SIDE-BY-SIDE GRID (IMAGE LEFT | FEATURES RIGHT) */}
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-15 items-center">

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

            {/* Feature List — numbered steps with connecting lines */}
            <div className="flex flex-col">
              {features.map((item, i) => {
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

                    {/* Connecting line — hidden after last item */}
                    {i < features.length - 1 && (
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


      {/* ================= CTA ================= */}
      <FeatureCTA
        title={<>Tasks That Connect To <br /> Everything You Do</>}
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