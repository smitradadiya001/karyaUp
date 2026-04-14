import { Helmet } from "react-helmet-async";
import React, { useRef, useState, useEffect, useMemo } from "react";
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
    purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    fuchsia: "bg-fuchsia-50 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white",
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    pink: "bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
    emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
    orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
  };
  return colorMap[color] || "bg-slate-50 text-slate-600 group-hover:bg-slate-600 group-hover:text-white";
};
export default function Agency() {

  const DEFAULT_ICON_MAP = {
    "SMART TASKING" : { icon: BrainCircuit, color: "#4c1d95" },
    "RAPID DELIVER" : { icon: Zap, color: "#4c1d95" },
    "AGENCY FIND"   : { icon: Search, color: "#4c1d95" },
}
 
  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);

  const [activeFeature, setActiveFeature] = useState(0);

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

      <section className="py-2 px-6 pb-19">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-2 py-1.5 rounded-full bg-purple-50 text-[11px] font-black uppercase tracking-widest text-purple-600 mb-3 border border-purple-100">
              Agency Lifecycle
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-3"
            >
              Unlock Agency <br />
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Productivity & <br />Deliver Faster
              </motion.span>
            </motion.h1>

            <div className="mt-5 space-y-3 max-w-lg w-full">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium"> Manage IT projects, service requests, and<br />governance in one place all connected by AI. </p>
              </div>
            </div>
          
            <FeatureStack
              items={[
                { label: "SMART TASKING", icon: BrainCircuit },
                { label: "RAPID DELIVER", icon: Zap },
                { label: "AGENCY FIND", icon: Search }
              ]}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24"
          >
            <div className="relative overflow-hidden  shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white mt-[-30px] lg:mt-[-60px]">
              <img
                src={dashboardImage}
                alt="KaryaUp task management"
                className="w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[380px] xl:h-[350px] object-cover object-left-top bg-white transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= AGENCY CAPABILITIES (With Hover Effects) ================= */}
      <section className="py-5 bg-[#FDFCFE]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Centered Heading and Description Stacked */}
          <div className="text-center max-w-3xl mx-auto mb-8">

            <motion.h1
              initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="mt-4 sm:mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.06]"
            >
              Built for the
              <span className="block">
                {" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Modern Agency.
                </motion.span>
              </span>
            </motion.h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Replace 5+ disconnected tools with one unified ecosystem.
              <br />
              KaryaUp handles the complexity so you can focus on the craft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Video Editing", desc: "Streamline your creative pipeline by bringing video editing directly into your project management flow.", icon: Video, color: "purple" },
              { title: "Digital Marketing", desc: "KaryaUp’s marketing workspace centralizes your entire campaign lifecycle—from initial brief and asset creation to real-time performance tracking.", icon: Megaphone, color: "fuchsia" },
              { title: "Motion Graphic", desc: "KaryaUp’s motion graphics workspace is built for high-fidelity animation pipelines, allowing teams to manage complex keyframe projects.", icon: Layers, color: "purple" }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <TiltCard key={idx} className="bg-white border border-slate-200 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-default h-full transition-colors transition-shadow duration-300 group">

                  {/* --- HEADER SECTION: Icon and Title Side-by-Side --- */}
                  <div className="flex items-center gap-4 mb-5 sm:mb-6">
                    <div className={`w-8 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-md group-hover:scale-110 ${getColorClasses(feature.color)}`}>
                      <Icon size={20} strokeWidth={2.5} />
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                      {feature.title}
                    </h3>
                  </div>

                  {/* --- DESCRIPTION SECTION: Stays below the header --- */}
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= ELEVATE WORKFLOWS ================= */}
      <section className="py-4 px-6 bg-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-24 -right-24 w-90 h-90 bg-purple-50 rounded-full blur-[120px] pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto">
          {/* CENTERED HEADING & DESCRIPTION */}
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-10">
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


      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work Smarter with tasks that can live in your whiteboards, chat, calendar."
        image={dashboardImage}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-20 mb-10"
      />
    </div>
  );
}