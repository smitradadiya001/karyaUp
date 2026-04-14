  import { Helmet } from "react-helmet-async";
import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
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
    purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    fuchsia: "bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white",
    emerald: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
    orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
    blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white"
  };
  return colorMap[color] || "bg-slate-100 text-slate-600 group-hover:bg-slate-600 group-hover:text-white";
};
const features = [
  { title: "Intelligent Task Routing", desc: "Automatically assign tasks to the right team members based on capacity and skill sets." },
  { title: "Real-time Collaboration", desc: "Comment, tag, and securely share files within each task layer for instant approvals." },
  { title: "Visual Progress Tracking", desc: "Customizable boards and instant metric dashboards keep your delivery on speed." }
];


export default function Enterprise() {
  
  const DEFAULT_ICON_MAP = {
    "GLOBAL ROUTE"    : { icon: BrainCircuit, color: "#4c1d95" },
    "ELITE SYNC"      : { icon: Zap, color: "#4c1d95" },
    "ENTERPRISE FIND" : { icon: Search, color: "#4c1d95" },
}
 
  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

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

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-2 py-1.5 rounded-full bg-purple-50 text-[11px] font-black uppercase tracking-widest text-purple-600 mb-3 border border-purple-100">
              Employee Experience
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1"
            >
              The World's most Powerful<br />
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Enterprise Software.
              </motion.span>
            </motion.h1>

            <div className="mt-5 space-y-3 max-w-lg w-full">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium">  Brainstorm, Plan, and Execute your Team's Marketing Programs.</p>
              </div>
            </div>

            <div className="mt-5 space-y-3 max-w-lg w-full">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium">Multi channel campaigns to global events and more with KaryaUp</p>
              </div>
            </div>
          
            <FeatureStack
              items={[
                { label: "GLOBAL ROUTE", icon: BrainCircuit },
                { label: "ELITE SYNC", icon: Zap },
                { label: "ENTERPRISE FIND", icon: Search }
              ]}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24"
          >
            <div className="relative overflow-hidden  shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white mt-[-30px] lg:mt-[-50px]">
              <img
                src={dashboardImage}
                alt="KaryaUp task management"
                className="w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[380px] xl:h-[350px] object-cover object-left-top bg-white transition-all duration-300"
              />
            </div>
          </motion.div>
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
            KaryaUp is trusted by global enterprises to deliver secure, scalable,
            
            and integrated solutions that empower teams worldwide.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {[
            { title: "Enterprise Workspace", desc: "High-Velocity Enterprise Workspace.", icon: Zap, color: "purple" },
            { title: "Strategic Dashboards", desc: "Strategic Executive Dashboards.", icon: Lock, color: "fuchsia" },
            { title: "Adaptive Roadmaps (Gantt)", desc: "Visualize the future of enterprise delivery with high-fidelity visual scheduling.", icon: Grid, color: "purple" },
            { title: "Secure Data", desc: "Scale globally without compromising sensitive data. KaryaUp is trusted by global enterprises", icon: Globe, color: "fuchsia" },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <TiltCard key={idx} className="bg-white border border-slate-200 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-default h-full transition-colors transition-shadow duration-300 group">
                <div className={`w-10 h-10 sm:w-12 sm:h-10 rounded-xl flex items-center justify-center mb-5 sm:mb-6 transition-all duration-300 group-hover:shadow-md group-hover:scale-110 ${getColorClasses(feature.color)}`}>
                  <Icon size={20} strokeWidth={2.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2.5 leading-tight">{feature.title}</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{feature.desc}</p>
              </TiltCard>
            );
          })}
        </motion.div>
      </section>

      {/* ================= AI WORKSPACE SECTION ================= */}
      <section className="py-2 px-6 bg-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-24 -right-24 w-90 h-90 bg-purple-50 rounded-full blur-[120px] pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto">
          {/* CENTERED HEADING & DESCRIPTION */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-[11px] font-black uppercase tracking-widest text-purple-600 mb-4 border border-purple-100">
                Unified Task Workspace
              </span>

              <h1 className="text-4xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-3">
                Supercharge your <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Daily Workflows.
                </motion.span>
              </h1>

              <p className="text-[1rem] text-slate-600 leading-relaxed font-medium max-w-xl mx-auto">
                Centralize communication, assign dynamic tasks,
                <br />
                and execute flawlessly with enterprise grade AI execution.
              </p>
            </motion.div>
          </div>

          {/* SIDE-BY-SIDE GRID (IMAGE LEFT | FEATURES RIGHT) */}
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

            {/* Feature List — numbered steps with connecting lines */}
            <div className="flex flex-col">
              {features.map((item, i) => (
                <div key={i} className="flex items-stretch gap-5">

                  {/* Left column: number circle + connecting line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <motion.div
                      animate={
                        activeFeature === i
                          ? { backgroundColor: "#7c3aed", color: "#ffffff", scale: 1.1 }
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
                          activeFeature === i
                            ? { backgroundColor: "#7c3aed", opacity: 0.35 }
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
                    className={`relative p-6 rounded-[2rem] cursor-pointer transition-all duration-500 border flex-1 mb-4 ${activeFeature === i
                        ? "bg-white border-slate-200 shadow-xl shadow-purple-500/5 translate-x-2"
                        : "bg-transparent border-transparent opacity-60 hover:opacity-100"
                      }`}
                  >
                    <h3 className="text-xl font-bold text-slate-900 leading-none">
                      {item.title}
                    </h3>
                    <AnimatePresence>
                      {activeFeature === i && (
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
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
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