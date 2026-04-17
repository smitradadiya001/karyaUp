import { Helmet } from "react-helmet-async";
import React, { useRef, useState, useEffect, useMemo, isStackOpen } from "react";
import FeatureCTA from "../../components/FeatureCTA";
import FeatureStack from "../../components/FeatureStack";
import dashboardImage from "../../assets/dashboard2.webp";
import { Link } from "react-router-dom";
import {
  useInView,
  useScroll
} from "framer-motion";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Video, Megaphone, Layers, Check, CheckCircle2, Zap, BarChart3, Users, BrainCircuit, Search, ShieldCheck } from "lucide-react";

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

const WorkflowStep = ({ title, desc, icon: Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ margin: "-100px" }}
    transition={{ delay: index * 0.1 }}
    className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-purple-200 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500"
  >
    <div className="flex gap-6 items-start">
      <div className="p-4 rounded-2xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="text-xl font-black text-slate-900 mb-2">{title}</h4>
        <p className="text-slate-500 leading-relaxed text-sm font-medium">{desc}</p>
      </div>
    </div>
  </motion.div>
);

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
export default function Agency() {

  const DEFAULT_ICON_MAP = {
    "SMART TASKING": { icon: BrainCircuit, color: "#4c1d95" },
    "RAPID DELIVER": { icon: Zap, color: "#4c1d95" },
    "AGENCY FIND": { icon: Search, color: "#4c1d95" },
  }

  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);

  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    { title: "Centralized Dashboards", desc: "Real-time visibility into every project. See margins, deadlines, and resource allocation in one unified view." },
    { title: "Automated Reporting", desc: "Generate client-ready performance reports with a single click. AI summarizes wins and identifies bottlenecks." },
    { title: "Real-time Collaboration", desc: "Integrated chat and whiteboarding means your team stays in sync without ever leaving the project context." }
  ];

  return (
    <div className="bg-white font-sans min-h-screen pt-28 overflow-x-hidden">
      <Helmet>
        <title>Agency | Karyaup</title>
        <meta name="description" content="Plan and manage schedules with Karyaup calendar. Track tasks, deadlines, meetings, and events in one unified calendar for better team coordination." />
        <meta name="keywords" content="agency, team calendar, scheduling software, task calendar, project deadlines, meeting planner, Karyaup" />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="Agency | Karyaup" />
        <meta property="og:description" content="Organize tasks, events, and deadlines with a powerful team calendar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/agency" />
        <meta property="og:site_name" content="Karyaup" />
        <link rel="canonical" href="https://karyaup.com/features/agency" />
      </Helmet>

      {/* ================= HERO SECTION ================= */}

      <section className="relative pt-10 sm:pt-20 lg:pt-20 pb-10 sm:pb-16 lg:pb-16 px-4 sm:px-6 overflow-hidden bg-white">
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
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm mb-2 sm:mb-4"
              >
                Agency - Agency Lifecycle
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                // className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
                className="text-3xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1"
              >
                Unlock Agency
                <span className="block">

                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] whitespace-nowrap inline-block"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Productivity & <br />Deliver Faster
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
                  { text: " Manage IT projects, service requests, and governance in one place all connected by AI.", icon: Check },
                  { text: "Resources in one place with KaryaUp time saving work tools. ", icon: Check }

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
                  { label: "SMART TASKING", icon: BrainCircuit },
                  { label: "RAPID DELIVER", icon: Zap },
                  { label: "AGENCY FIND", icon: Search }
                ]}
              />
            </div>

            <div className="pt-3 relative w-full max-w-[540px] mx-auto lg:max-w-none overflow-hidden rounded-[10px]">
              <img
                src={dashboardImage}
                alt="Dashboard"
                className="w-full h-auto rounded-[10px] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= AGENCY CAPABILITIES (With Hover Effects) ================= */}
      {/* Heading Section */}
      <div className="text-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          // className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
          className="text-3xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1"
        >
          Built for the
          <span className="block">

            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] whitespace-nowrap inline-block"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Modern Agency.
            </motion.span>
          </span>
        </motion.h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Replace 5+ disconnected tools <br />with one unified ecosystem.
        </p>
      </div>

      {/* --- CARD GRID WITH INCREASED TOP MARGIN (mt-20) --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 px-8"
      >
        {[
          { title: "Video Editing", icon: Video, color: "purple" },
          { title: "Digital Marketing", icon: Megaphone, color: "fuchsia" },
          { title: "Motion Graphic", icon: Layers, color: "purple" },
        ].map((feature, idx) => (
          <TiltCard key={idx} className="bg-white border border-slate-200 hover:border-purple-300 active:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl active:shadow-2xl hover:shadow-purple-900/15 active:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-pointer h-fulltransition-colors transition-shadow duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getColorClasses(feature.color)}`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-black text-slate-900">{feature.title}</h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Streamline your creative pipeline by bringing your core work directly into your project management flow.
            </p>
          </TiltCard>
        ))}
      </motion.div>

      < section className="py-9 px-6 sm:px-10 lg:py-15 bg-white" >
        < div className="max-w-4xl mx-auto flex flex-col items-center text-center" >

          <motion.h1
            initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            // className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
            className="text-3xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-3"
          >
            Supercharge your
            <span className="block">

              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] whitespace-nowrap inline-block"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Daily Workflows.
              </motion.span>
            </span>
          </motion.h1>
          <p className="mb-2 text-base sm:text-lg lg:text-xl text-slate-500 font-medium leading-relaxed max-w-[320px] sm:max-w-xl lg:max-w-2xl mx-auto">
            Centralize communication, assign dynamic tasks, and execute flawlessly with enterprise grade AI execution.
          </p>
        </div >

        <div className="mb-10 grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

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
      </section >
      <FeatureCTA
        title={<>Tasks That Connect To <br /> Everything You Do</>}
        description="Work Smarter with tasks that can live in your whiteboards, chat, calendar."
        image={dashboardImage}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-20 mb-10"
      />
    </div >
  );
}