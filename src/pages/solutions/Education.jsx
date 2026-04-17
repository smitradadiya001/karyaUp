import { Helmet } from "react-helmet-async";
import { useRef, useEffect, useMemo, useState, isStackOpen } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, GraduationCap, BookOpen, School, Target, ArrowRight, ShieldCheck } from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";
import FeatureCTA from "../../components/FeatureCTA";
import FeatureStack from "../../components/FeatureStack";
import karyaUpLogo from "../../assets/logo-svg.svg";
import { lazy, Suspense } from "react";
// Lazy load the 3D component to improve initial page load speed
const SpinningLogo3D = lazy(() => import("../../components/SpinningLogo3D"));
import { Sparkles, BrainCircuit, Zap, Search, Check } from "lucide-react";


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

const MarqueeRow = ({ text, direction, isShieldHovered }) => {
  const isLeft = direction === "left";
  return (
    <motion.div
      initial={{ x: isLeft ? 0 : -1000 }}
      animate={{ x: isLeft ? -1000 : 0 }}
      transition={{
        duration: isShieldHovered ? 15 : 40,
        repeat: Infinity,
        ease: "linear",
      }}
      className="whitespace-nowrap text-purple-700 font-black text-2xl select-none tracking-tighter flex gap-10 leading-none"
    >
      {Array(9).fill(null).map((_, i) => (
        <span key={i}>{text}  </span>
      ))}
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

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <polyline points="3,9 7,13 13,5" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="13" height="13">
    <line x1="4" y1="4" x2="12" y2="12" /><line x1="12" y1="4" x2="4" y2="12" />
  </svg>
);
const ListIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" width="11" height="11">
    <line x1="5" y1="4" x2="13" y2="4" /><line x1="5" y1="8" x2="13" y2="8" /><line x1="5" y1="12" x2="13" y2="12" />
    <circle cx="2.5" cy="4" r="1" fill="currentColor" stroke="none" />
    <circle cx="2.5" cy="8" r="1" fill="currentColor" stroke="none" />
    <circle cx="2.5" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

/* ═══════════════════════════════════════════════
   LIGHT 3D GLASS SHIELD
═══════════════════════════════════════════════ */
const LightShield3D = () => (
  <svg viewBox="0 0 200 220" fill="none" className="w-full h-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)]">
    <defs>
      <linearGradient id="glassBorderGradient" x1="100" y1="10" x2="100" y2="208" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F472B6" stopOpacity="0.4" />
        <stop offset="0.5" stopColor="white" stopOpacity="0.6" />
        <stop offset="1" stopColor="#A855F7" stopOpacity="0.4" />
      </linearGradient>
    </defs>
    <path
      d="M100 10 L182 42 L182 108 C182 154 146 190 100 208 C54 190 18 154 18 108 L18 42 Z"
      fill="white"
      fillOpacity="0.03"
      stroke="url(#glassBorderGradient)"
      strokeOpacity="0.6"
      strokeWidth="2"
    />
  </svg>
);

/* ═══════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════ */
function Card({ data, type, index }) {
  const isRed = type === "red";
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay: index * 0.4, ease: "easeInOut" }}
      className="relative group rounded-xl w-full"
    >
      <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-xl p-3 flex items-start gap-3 w-full shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:border-purple-400/50">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${isRed ? "bg-red-500/20 border-red-500/50 text-red-600" : "bg-green-500/20 border-green-500/50 text-green-600"
          }`}>
          {isRed ? <XIcon /> : <CheckIcon />}
        </div>
        <div className="flex-1 min-w-0 text-left">
          <div className="text-[13px] font-bold text-slate-900 truncate">{data.title}</div>
          <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1.5 font-medium">
            <span>{data.tag}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="flex items-center gap-1"><ListIcon /> Active</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ScrollTrack({ cards, direction }) {
  const trackRef = useRef(null);
  const posRef = useRef(direction === "up" ? -25 : 0);
  const doubled = useMemo(() => [...cards, ...cards], [cards]);

  useEffect(() => {
    const speed = 0.045;
    const animate = () => {
      if (direction === "down") {
        posRef.current -= speed;
        if (posRef.current <= -25) posRef.current = 0;
      } else {
        posRef.current += speed;
        if (posRef.current >= 0) posRef.current = -25;
      }
      if (trackRef.current) trackRef.current.style.transform = `translateY(${posRef.current}%)`;
      requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [direction]);

  return (
    <div className="h-[220px] overflow-hidden relative">
      <Helmet>
        <title>Education | Karyaup</title>
        <meta name="description" content="Plan and manage schedules with Karyaup calendar. Track tasks, deadlines, meetings, and events in one unified calendar for better team coordination." />
        <meta name="keywords" content="education, team calendar, scheduling software, task calendar, project deadlines, meeting planner, Karyaup" />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="Education | Karyaup" />
        <meta property="og:description" content="Organize tasks, events, and deadlines with a powerful team calendar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/education" />
        <meta property="og:site_name" content="Karyaup" />
        <link rel="canonical" href="https://karyaup.com/features/education" />
      </Helmet>

      <div className="relative h-full" style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
      }}>
        <div ref={trackRef} className="flex flex-col gap-4 py-4 will-change-transform">
          {doubled.map((card, i) => (
            <Card key={i} data={card} type={direction === "down" ? "red" : "green"} index={i % cards.length} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ScrollingDataBg({ isShieldHovered }) {

  return (
    <div className={`absolute inset-0 pointer-events-none transition-all duration-1000 flex flex-col justify-center gap-20 overflow-hidden ${isShieldHovered ? "opacity-30" : "opacity-[0.05]"
      }`}>
      <MarqueeRow text="Plan the Karya" direction="right" isShieldHovered={isShieldHovered} />
      <MarqueeRow text="Move the Karya" direction="left" isShieldHovered={isShieldHovered} />
      <MarqueeRow text="Complete the Karya" direction="right" isShieldHovered={isShieldHovered} />
    </div>
  );
}


export default function Education() {

  const DEFAULT_ICON_MAP = {
    "SMART ASSIGN": { icon: BrainCircuit, color: "#4c1d95" },
    "CAMPUS LIVE": { icon: Zap, color: "#4c1d95" },
    "RESOURCE FIND": { icon: Search, color: "#4c1d95" },
  }

  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);


  const [isShieldHovered, setIsShieldHovered] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0); // For Task Workspace

  const redCards = [
    { title: "Projects scattered across tools", tag: "Inefficiency" },
    { title: "Critical info hidden in silos", tag: "Visibility" },
    { title: "Manual updates strain capacity", tag: "Labor" },
    { title: "Missed deadlines & bottlenecks", tag: "Risk" },
    { title: "Unclear resource allocation", tag: "Planning" },
  ];

  const greenCards = [
    { title: "Unified platform hub", tag: "Efficiency" },
    { title: "Instant global search", tag: "Visibility" },
    { title: "Automated report generation", tag: "Labor" },
    { title: "AI-powered timeline tracking", tag: "Growth" },
    { title: "Real-time resource analytics", tag: "Scale" },
  ];

  const workflowFeatures = [
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

  return (
    <div className="bg-white font-sans overflow-x-hidden">

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
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm mb-2 sm:mb-4"
              >
               Education - Academic Intelligence
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                // className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
                className="text-3xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1"
              >
                Simplify
                <span className="block">

                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] whitespace-nowrap inline-block"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Education Management.
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
                  { text: " Manage academic and administrative  resources", icon: Check },
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
                  { label: "SMART ASSIGN", icon: BrainCircuit },
                  { label: "CAMPUS LIVE", icon: Zap },
                  { label: "RESOURCE FIND", icon: Search }
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

      {/* ================= EDUCATION WORKFLOW SECTION ================= */}
      <section className="w-full py-7 pb-15 relative overflow-hidden bg-white">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-white rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 opacity-40 animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-3"
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
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed"
            >
              Centralize communication, assign dynamic tasks, and execute flawlessly with enterprise grade AI execution.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
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

            <div className="flex flex-col">
              {workflowFeatures.map((item, i) => {
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
                    {i < workflowFeatures.length - 1 && (
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

      <section className="w-full py-5 relative overflow-hidden bg-white">
        {/* Animated Background Glows for Glass Effect */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-white rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-fuchsia-200 rounded-full blur-[120px] opacity-40 animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">

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
                Education Lifecycle
              </motion.span>
            </motion.h1>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
            {[
              { title: "Admissions", desc: "Simplify applications and intake with automated workflows.", icon: BookOpen, color: "purple" },
              { title: "Learning", desc: "Centralize coursework, assignments, and collaboration.", icon: GraduationCap, color: "fuchsia" },
              { title: "Administration", desc: "Manage schedules, resources, and compliance with ease.", icon: School, color: "purple" },
              { title: "Outcomes", desc: "Track performance, visualize progress, and celebrate success.", icon: Target, color: "fuchsia" },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <TiltCard key={idx} className="bg-white border border-slate-200 hover:border-purple-300 active:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl active:shadow-2xl hover:shadow-purple-900/15 active:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-pointer h-fulltransition-colors transition-shadow duration-300 group">

                  {/* HEADER SECTION: Icon and Title aligned horizontally */}
                  <div className="flex items-center gap-4 mb-5 sm:mb-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${getColorClasses(feature.color)}`}>
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
          </div>
        </div>
      </section>
        
      {/* ================= FINAL CTA ================= */}
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
