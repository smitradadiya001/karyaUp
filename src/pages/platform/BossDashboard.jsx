import { useRef, useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  ArrowUpRight,
  Activity,
  Layers,
  Sparkles,
  Check,
  BrainCircuit,
  Search,
  ShieldCheck
} from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";
import planImage from "../../assets/Gantt.webp";
import karyaUpLogo from "../../assets/karyaup-logo.mp4";
import FeatureCTA from "../../components/FeatureCTA";
import { Helmet } from "react-helmet-async";

/* ═══════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════ */
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
      <div style={{ transform: 'translateZ(30px)' }} className="h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
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
  const infinitePatternRow = "KaryaUp ".repeat(25);
  const patternRows = Array(14).fill(infinitePatternRow);

  return (
    <div className={`absolute inset-0 pointer-events-none transition-all duration-1000 flex flex-col justify-center gap-3 overflow-hidden ${isShieldHovered ? "opacity-40" : "opacity-[0.08]"
      }`}>
      {patternRows.map((pattern, i) => (
        <motion.div
          key={i}
          initial={{ x: i % 2 === 0 ? 0 : -100 }}
          animate={{ x: i % 2 === 0 ? -100 : 0 }}
          transition={{ duration: isShieldHovered ? 8 : 25, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-purple-700 font-normal text-sm md:text-base select-none"
        >
          {pattern} {pattern}
        </motion.div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   GLASS AI TASK STACK
═══════════════════════════════════════════════ */
const GlassStack = () => {
  const items = [
    { id: 1, text: "Translating updates for the team in Madrid...", icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinejoin="round" />, color: "#d946ef", lines: true },
    { id: 2, text: "Generating action items from your team meeting...", icon: <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" strokeLinejoin="round" />, color: "#0ea5e9", lines: true, clip: true },
    { id: 3, text: "Drafting social posts from the latest blog article...", icon: <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" strokeLinejoin="round" />, color: "#14b8a6" },
    { id: 4, text: "Supercharge Your Daily Workflows.", icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinejoin="round" />, color: "#8b5cf6" },
    { id: 5, text: "Automated status updates from code or docs", icon: <circle cx="12" cy="12" r="10" />, bot: true, color: "#d946ef" }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Loop forwards so front goes away and back comes up
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const visibleItems = [];
  for (let i = 0; i < 4; i++) {
    visibleItems.push({
      ...items[(currentIndex + i) % items.length],
      positionIndex: i,
    });
  }

  return (
    <div className="relative w-full max-w-[420px] mx-auto lg:mx-0 mt-8 h-[160px] flex flex-col items-center group">
      {/* Ambient glow behind */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[60%] h-[50px] bg-purple-500/10 blur-[30px] rounded-full pointer-events-none" />

      <AnimatePresence>
        {visibleItems.map((item) => {
          const pos = item.positionIndex;

          let y = 0; let width = "100%";
          let zIndex = 40 - pos * 10;
          let bgClass = ""; let borderClass = ""; let shadowClass = "";

          if (pos === 0) {
            y = 0; width = "100%";
            bgClass = "bg-[#18181b]/95 backdrop-blur-2xl";
            borderClass = "border-white/10";
            shadowClass = "shadow-[0_15px_40px_rgba(0,0,0,0.4)]";
          } else if (pos === 1) {
            y = 18; width = "93%";
            bgClass = "bg-[#18181b]/70 backdrop-blur-xl";
            borderClass = "border-white/[0.08]";
            shadowClass = "shadow-lg";
          } else if (pos === 2) {
            y = 36; width = "86%";
            bgClass = "bg-[#18181b]/50 backdrop-blur-md";
            borderClass = "border-white/[0.05]";
            shadowClass = "shadow-md";
          } else if (pos === 3) {
            y = 54; width = "78%";
            bgClass = "bg-[#18181b]/30 backdrop-blur-sm";
            borderClass = "border-white/[0.02]";
            shadowClass = "shadow-sm";
          }

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 70, scale: 0.8 }}
              animate={{
                opacity: 1,
                y,
                width,
                zIndex,
                scale: 1,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
              }}
              exit={{
                opacity: 0,
                y: -30,
                scale: 1.05,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className={`absolute top-0 h-[64px] rounded-full border overflow-hidden px-5 pr-8 flex items-center gap-4 cursor-pointer transition-colors duration-300 ${bgClass} ${borderClass} ${shadowClass}`}
            >
              <div
                className="flex items-center gap-4 w-full h-full"
                style={{
                  opacity: pos === 0 ? 1 : 0.2,
                  transition: "opacity 0.6s ease-in-out",
                  pointerEvents: pos === 0 ? "auto" : "none"
                }}
              >
                {/* Dynamic Icon */}
                <div className="relative shrink-0 flex items-center justify-center mt-0.5 z-10">
                  <svg viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 drop-shadow-md z-10">
                    {item.icon}
                    {item.clip && (
                      <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                    )}
                    {item.lines && (
                      <>
                        <path d="M9 10h6" />
                        <path d="M9 14h6" />
                      </>
                    )}
                    {item.bot && (
                      <>
                        <path d="M8 9.05v-.1" />
                        <path d="M16 9.05v-.1" />
                        <path d="M16 14c-1.5 1.5-6.5 1.5-8 0" />
                      </>
                    )}
                  </svg>
                  {/* Fixed Sparkle explicitly on top with high z-index */}
                  <svg viewBox="0 0 24 24" fill={item.color} stroke="none" className="w-3.5 h-3.5 absolute -bottom-1 -right-1.5 z-20">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                  </svg>
                </div>

                {/* Text */}
                <div className="flex-1 truncate text-[14.5px] font-medium text-slate-100 tracking-wide">
                  {item.text}
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};


const FeatureStack = ({ items = [] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 1500); // Snappy 1.5s interval
    return () => clearInterval(timer);
  }, [items.length]);

  if (items.length === 0) return null;

  return (
    <div className="relative h-[80px] sm:h-[100px] w-full max-w-[280px] sm:max-w-[320px] mt-6 lg:mt-8 group overflow-visible">
      <AnimatePresence mode="popLayout">
        {[2, 1, 0].map((offset) => {
          const itemIndex = (index + offset) % items.length;
          const item = items[itemIndex];
          const label = typeof item === "string" ? item : item.label;
          const Icon = (typeof item === "object" && item.icon) ? item.icon : Check;

          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{
                opacity: offset === 0 ? 1 : offset === 1 ? 0.4 : 0.15,
                scale: 1 - offset * 0.04,
                y: offset * 12, // Compact vertical stacking for better hero-screen visibility
                zIndex: 10 - offset,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 1.05,
                transition: { duration: 0.4, ease: "easeIn" }
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: offset * 0.02
              }}
              className="absolute top-0 left-0 w-full px-5 py-3 rounded-xl bg-slate-400/10 backdrop-blur-xl border border-black/30 shadow-sm flex items-center gap-3 transition-colors duration-300 hover:bg-slate-400/20"
            >
              <div className="w-5 h-5 rounded bg-black/5 border border-black/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-3 h-3 text-black stroke-[3]" />
              </div>
              <span className="text-[11px] sm:text-[13px] font-black uppercase tracking-widest text-black">
                {label}
              </span>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   MAIN PAGE COMPONENT
═══════════════════════════════════════════════ */
export default function BossDashboard() {
  const [isShieldHovered, setIsShieldHovered] = useState(false);

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

  const executiveStats = [
    { label: "Tasks", value: "+54%", icon: <TrendingUp size={20} />, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Whiteboards", value: "20", icon: <Users size={20} />, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Projects", value: "80%", icon: <Zap size={20} />, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Project Priority", value: "High", icon: <Activity size={20} />, color: "text-pink-600", bg: "bg-pink-50" },
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>KaryaUp | Boss Dashboard</title>
      </Helmet>
      {/* Hero Section */}
      <section className="py-26 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50/80 backdrop-blur-sm border border-purple-100 text-purple-600 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] shadow-sm mb-10"
            >
              DASHBOARD — CONTROL YOUR BUSINESS
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06] mb-6"
            >
              Control your Business in
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                One Powerful View.
              </motion.span>
            </motion.h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              KaryaUp adapts to any workflow, eliminates busywork, and keeps everything organized with enterprise-grade AI execution.
            </p>
            <FeatureStack
              items={[
                { label: "Intelligent Routing", icon: BrainCircuit },
                { label: "Real-time Sync", icon: Zap },
                { label: "Global Search", icon: Search },
                { label: "Enterprise Security", icon: ShieldCheck }
              ]}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            <img src={dashboardImage} alt="Dashboard" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-8 bg-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-12"
          >
            Project Management <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              is broken, we fixed it
            </motion.span>
          </motion.h2>

          <div className="p-[2px] rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 shadow-2xl overflow-hidden">
            <div className="bg-slate-50 rounded-[1.4rem] md:rounded-[2.4rem] overflow-hidden grid grid-cols-1 md:grid-cols-3">

              {/* LEFT: OLD WAY */}
              <div className="p-4 md:p-3 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-start pt-10 md:pt-12 bg-white/50 order-1">
                <h3 className="text-center text-2xl font-black mb-1 text-slate-900">Old Way</h3>
                <p className="text-sm text-center text-slate-500 mb-6 font-medium">Manual updates and scattered tools.</p>
                <ScrollTrack cards={redCards} direction="down" />
              </div>

              {/* MIDDLE: 3D SHIELD & TEXT (MOVED UP) */}
              <div
                className="relative flex flex-col items-center justify-start py-10 md:py-12 px-4 group overflow-hidden bg-white/40 min-h-[450px] order-2"
                onMouseEnter={() => setIsShieldHovered(true)}
                onMouseLeave={() => setIsShieldHovered(false)}
              >
                <ScrollingDataBg isShieldHovered={isShieldHovered} />

                {/* TEXT CONTAINER - Now at the top of the middle col */}
                <div className="relative z-40 text-center mb-10 pointer-events-none">
                  <h3 className={`text-xl md:text-2xl font-black transition-colors duration-500 ${isShieldHovered ? "text-purple-600" : "text-slate-900"}`}>
                    Security You Can Trust
                  </h3>
                  <p className={`text-[10px] mt-2 font-bold uppercase tracking-widest transition-colors duration-500 ${isShieldHovered ? "text-fuchsia-500" : "text-slate-500"}`}>
                    More secure than using AI directly.
                  </p>
                </div>

                {/* LOGO CONTAINER */}
                <div className="relative flex items-center justify-center w-full max-w-[200px] md:max-w-[240px] aspect-square" style={{ perspective: "1200px" }}>
                  <div className="absolute inset-0 z-10 opacity-80 scale-110">
                    <LightShield3D />
                  </div>

                  <div className="relative z-30" style={{ transformStyle: "preserve-3d" }}>
                    <motion.div
                      animate={{
                        rotateY: [0, 360],
                        y: [0, -10, 0],
                        scale: isShieldHovered ? 1.1 : 1
                      }}
                      transition={{
                        rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                        scale: { duration: 0.4 }
                      }}
                      className="w-32 h-32 md:w-44 md:h-44 relative"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                        <img src={karyaUpLogo} alt="Logo Front" className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(168,85,247,0.5)]" />
                      </div>

                      <div className="absolute inset-0" style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg) translateZ(1px)'
                      }}>
                        <img src={karyaUpLogo} alt="Logo Back" className="w-full h-full object-contain opacity-80" />
                      </div>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  animate={{ scale: isShieldHovered ? 1.4 : 1, opacity: isShieldHovered ? 0.4 : 0.15 }}
                  className="absolute -bottom-40 w-64 h-64 bg-purple-400 rounded-full blur-[100px] pointer-events-none"
                />
              </div>

              {/* RIGHT: KARYAUP WAY */}
              <div className="p-4 md:p-6 border-t md:border-t-0 md:border-l border-slate-200 flex flex-col justify-start pt-10 md:pt-12 bg-white/50 order-3">
                <h3 className="text-center text-2xl font-black mb-1 text-slate-900">The KaryaUp Way</h3>
                <p className="text-sm text-center text-slate-500 mb-6 font-medium">Advanced execution loops for growth.</p>
                <ScrollTrack cards={greenCards} direction="up" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: KARYAUP AI WORKSPACE TASK MANAGEMENT */}
      <section className="py-10 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white rounded-[100%]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT: TEXT CONTENT */}
          <div className="order-1 lg:order-1 text-center lg:text-left">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6"
            >
              KaryaUp AI Workspace
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Task Management
              </motion.span>
            </motion.h1>

            <p className="text-lg text-slate-600 mb-6 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Transform the way your team handles daily execution. Let AI prioritize your backlog, predict bottlenecks before they happen, and automate repetitive assignments.
            </p>
            <FeatureStack
              items={[
                { label: "Contextual Task Extraction", icon: BrainCircuit },
                { label: "Dynamic Priority Scoring", icon: Zap },
                { label: "Global Search", icon: Search },
                { label: "Dependency Mapping", icon: ShieldCheck }
              ]}
            />
            
          </div>

          {/* RIGHT: IMAGE CONTENT WITH 3D TILT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2 relative perspective-1000"
          >
            {/* Background glowing blob */}
            <div className="absolute inset-0 bg-gray-50 rounded-[3rem] blur-2xl opacity-30 scale-90" />

            <TiltCard className="relative z-10 w-full h-full cursor-default">
              <div className="rounded-[2rem] p-2 bg-gray-100 backdrop-blur-md border border-white/50 shadow-2xl">
                <div className="rounded-3xl overflow-hidden relative border border-slate-100 bg-white shadow-inner">
                  <img
                    src={planImage}
                    alt="AI Task Management View"
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />

                </div>
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </section>

      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work smarter with tasks that can live in your whiteboards, chat, and calendar — anywhere you work."
        image={dashboardImage}
        containerClassName="mb-10"
      />
    </div>
  );
}