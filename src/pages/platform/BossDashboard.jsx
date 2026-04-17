import { useRef, useEffect, useMemo, useState, isStackOpen } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, useAnimationFrame } from "framer-motion";
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
  ShieldCheck,
  X,
  MessagesSquare,
  Eye
} from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";
import planImage from "../../assets/Gantt.webp";
import React, { lazy, Suspense } from 'react';
import FeatureCTA from "../../components/FeatureCTA";
import karyaupLogo from "../../assets/logo-svg.svg";
import FeatureStack from "../../components/FeatureStack";

const SpinningLogo3D = lazy(() => import("../../components/SpinningLogo3D"));
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
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 1000 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }} // Fixed for Mobile
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
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="13"
    height="13"
  >
    <polyline points="3,9 7,13 13,5" />
  </svg>
);
const XIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    width="13"
    height="13"
  >
    <line x1="4" y1="4" x2="12" y2="12" />
    <line x1="12" y1="4" x2="4" y2="12" />
  </svg>
);
const ListIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    width="11"
    height="11"
  >
    <line x1="5" y1="4" x2="13" y2="4" />
    <line x1="5" y1="8" x2="13" y2="8" />
    <line x1="5" y1="12" x2="13" y2="12" />
    <circle cx="2.5" cy="4" r="1" fill="currentColor" stroke="none" />
    <circle cx="2.5" cy="8" r="1" fill="currentColor" stroke="none" />
    <circle cx="2.5" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

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
      className="whitespace-nowrap text-gray font-black text-2xl select-none tracking-tighter flex gap-10 leading-none"
    >
      {Array(9)
        .fill(null)
        .map((_, i) => (
          <span key={i}>{text} </span>
        ))}
    </motion.div>
  );
};

function ScrollingDataBg({ isShieldHovered }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none transition-all duration-1000 flex flex-col justify-center gap-20 overflow-hidden ${isShieldHovered ? "opacity-10" : "opacity-[0.05]"
        }`}
    >
      <MarqueeRow
        text="Plan the Karya"
        direction="right"
        isShieldHovered={isShieldHovered}
      />
      <MarqueeRow
        text="Move the Karya"
        direction="left"
        isShieldHovered={isShieldHovered}
      />
      <MarqueeRow
        text="Complete the Karya"
        direction="right"
        isShieldHovered={isShieldHovered}
      />
    </div>
  );
}
/* ═══════════════════════════════════════════════
   LIGHT 3D GLASS SHIELD
═══════════════════════════════════════════════ */

const LightShield3D = () => (
  <svg
    viewBox="0 0 200 220"
    fill="none"
    className="w-full h-full drop-shadow-[0_65px_50px_rgba(0,0,0,0.30)]"
  >
    <defs>
      <linearGradient
        id="glassBorderGradient"
        x1="300"
        y1="20"
        x2="300"
        y2="208"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A855F7" stopOpacity="0.9" />
        <stop offset="0.5" stopColor="white" stopOpacity="0.9" />
        <stop offset="1" stopColor="#A855F7" stopOpacity="0.9" />
      </linearGradient>
    </defs>
    <path
      d="M100 10 L182 42 L182 108 C182 154 146 190 100 208 C54 190 18 154 18 108 L18 42 Z"
      fill="white"
      fillOpacity="0.05"
      stroke="url(#glassBorderGradient)"
      strokeOpacity="0.9"
      strokeLinecap="round"
      strokeWidth="3"

      className="group-hover:stroke-purple-700 transition-all duration-100 group-hover:stroke-purple group-hover:stroke-[3px] drop-shadow-sm"
    />
  </svg>
);


/* ═══════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════ */
function Card({ data, type }) {
  const isRed = type === "red";
  return (
    <div
      className="rounded-xl px-2.5 py-2 sm:px-3 sm:py-2.5 lg:px-4 lg:py-3 flex flex-nowrap items-center gap-2 lg:gap-3 shadow-sm ring-1"
      style={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: isRed ? "rgba(248,113,113,0.18)" : "rgba(34,197,94,0.32)",
        background: isRed ? "rgba(254,242,242,0.72)" : "rgba(232, 247, 234, 0.72)",
        boxShadow: isRed ? "0 8px 24px rgba(248,113,113,0.06)" : "0 8px 24px rgba(112, 244, 158, 0.08)",
      }}
    >
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${isRed
          ? "bg-red-50 border-red-100 text-red-500"
          : "bg-green-50 border-emerald-100 text-emerald-600"
          }`}
      >
        {isRed ? <X className="w-4 h-4" /> : <Check className="w-4 h-4" />}
      </div>

      <div className="min-w-0 flex-1">
        <div className="font-black text-slate-900 text-[13px] sm:text-sm break-words leading-tight">
          {data.title}
        </div>
        <div className="mt-0.5 text-[10px] sm:text-xs font-semibold text-slate-500 flex flex-wrap gap-x-3 gap-y-0.5">
          <span className="flex items-center gap-1">
            Owner:{" "}
            <span className="text-slate-700">{data.owner || "AI Agent"}</span>
          </span>
          <span className="flex items-center gap-1">
            Due: <span className="text-slate-700">{data.due || "Now"}</span>
          </span>
        </div>
      </div>

      <div
        className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border flex-shrink-0"
        style={{
          borderColor: isRed ? "rgba(239,68,68,0.25)" : "rgba(69, 182, 110, 0.28)",
          background: isRed ? "rgba(239,68,68,0.05)" : "rgba(239, 68,68,0.05))",
          color: isRed ? "rgb(185,28,28)" : "rgb(21,128,61)",
        }}
      >
        {data.pr || (isRed ? "HIGH" : "NORMAL")}
      </div>
    </div>
  );
}

function ScrollTrack({ cards, direction }) {
  const containerRef = useRef(null);
  const isUp = direction === "up";

  return (
    <div className="h-[190px] lg:h-[240px] overflow-hidden relative">
      <div
        ref={containerRef}
        className="relative h-full"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          perspective: "1000px",
        }}
      >
        <motion.div
          animate={{ y: isUp ? ["-50%", "0%"] : ["0%", "-50%"] }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex flex-col gap-2 py-2 will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          {[...cards, ...cards].map((card, i) => (
            <BarrelItem
              key={`${card.title}-${i}`}
              data={card}
              type={direction === "down" ? "red" : "green"}
              containerRef={containerRef}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const BarrelItem = ({ data, type, containerRef }) => {
  const itemRef = useRef(null);
  const rotateX = useMotionValue(0);
  const scale = useMotionValue(1);
  const opacity = useMotionValue(1);

  useAnimationFrame(() => {
    if (!itemRef.current || !containerRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    const item = itemRef.current.getBoundingClientRect();

    const containerCenter = container.top + container.height / 2;
    const itemCenter = item.top + item.height / 2;
    const normalizedDistance =
      (itemCenter - containerCenter) / (container.height / 2);
    const clamped = Math.max(-1, Math.min(1, normalizedDistance));

    rotateX.set(clamped * -45);
    scale.set(1 - Math.abs(clamped) * 0.25);
    opacity.set(1 - Math.abs(clamped) * 0.6);
  });

  return (
    <div ref={itemRef} style={{ perspective: "1000px" }}>
      <motion.div
        style={{ rotateX, scale, opacity, transformStyle: "preserve-3d" }}
      >
        <Card data={data} type={type} />
      </motion.div>
    </div>
  );
};

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


/* ═══════════════════════════════════════════════
   MAIN PAGE COMPONENT
═══════════════════════════════════════════════ */
export default function BossDashboard() {

  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);
  const aiAgentRef = useRef(null);
  const listContainerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [isShieldHovered, setIsShieldHovered] = useState(false);

  const redCards = [
    {
      title: "Manual task updates drain focus",
      owner: "Aisha",
      due: "Wed",
      pr: "High",
    },
    {
      title: "Project context lost in chat silos",
      owner: "Rahul",
      due: "Thu",
      pr: "High",
    },
    {
      title: "Constant context-switching fatigue",
      owner: "Sneha",
      due: "Mon",
      pr: "Normal",
    },
    {
      title: "Scattered tools lead to bottlenecks",
      owner: "Priya",
      due: "Fri",
      pr: "High",
    },
    {
      title: "Fragmented agency operations",
      owner: "Aisha",
      due: "Tue",
      pr: "High",
    },
  ];

  const greenCards = [
    {
      title: "AI-powered execution loops",
      owner: "Agent",
      due: "Now",
      pr: "Normal",
    },
    {
      title: "Unified AI task workspace",
      owner: "Agent",
      due: "Now",
      pr: "Normal",
    },
    {
      title: "Intelligent task coordination",
      owner: "Agent",
      due: "Now",
      pr: "Normal",
    },
    {
      title: "Automated report generation",
      owner: "Agent",
      due: "Now",
      pr: "Normal",
    },
    {
      title: "Instant global AI search",
      owner: "Agent",
      due: "Now",
      pr: "Normal",
    },
  ];

  const executiveStats = [
    { label: "Tasks", value: "+54%", icon: <TrendingUp size={20} />, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Whiteboards", value: "20", icon: <Users size={20} />, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Projects", value: "80%", icon: <Zap size={20} />, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Project Priority", value: "High", icon: <Activity size={20} />, color: "text-pink-600", bg: "bg-pink-50" },
  ];

  // const aiFeatures = [
  //   { icon: <Sparkles className="w-5 h-5 text-purple-500" />, title: "Predictive Margins", desc: "AI forecasts future profitability based on current sprint velocity." },
  //   { icon: <BrainCircuit className="w-5 h-5 text-fuchsia-500" />, title: "Smart Allocation", desc: "Automatically maps expenses to specific projects using NLP." },
  //   { icon: <Search className="w-5 h-5 text-indigo-500" />, title: "Contextual Query", desc: "Ask 'Which project is over budget?' and get instant visual data." },
  //   { icon: <Zap className="w-5 h-5 text-amber-500" />, title: "Automated Standups", desc: "AI summarizes daily progress vs budget utilization for the team." }
  // ];

  const getColorClasses = (color) => {
    const colorMap = {
      purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-active:bg-purple-600 group-active:text-white",
      fuchsia: "bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white group-active:bg-fuchsia-600 group-active:text-white",
      emerald: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-active:bg-emerald-600 group-active:text-white",
      orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white group-active:bg-orange-600 group-active:text-white",
      blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-100 group-hover:text-white group-active:bg-blue-600 group-active:text-white",
      indigo: "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-active:bg-indigo-600 group-active:text-white",
      pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white group-active:bg-pink-600 group-active:text-white"
    };
    return colorMap[color] || "bg-slate-100 text-slate-600 group-hover:bg-slate-600 group-hover:text-white group-active:bg-slate-600 group-active:text-white";
  };
  const aiFeatures = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Contextual Memory",
      desc: "Our AI learns your project history and team habits, providing suggestions that actually make sense for your specific workflow.",
      color: "purple"
    },
    {
      icon: <BrainCircuit className="w-5 h-5" />,
      title: "Autonomous Agents",
      desc: "Deploy specialized AI agents to draft reports, update statuses before they impact your delivery.",
      color: "fuchsia"
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: "Smart Workspace",
      desc: "A single environment where documentation, task management live together no more tab-hopping fatigue.",
      color: "purple"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Automated Standups",
      desc: "Eliminate time-consuming meetings. AI automatically aggregates daily progress, links efforts to budget utilization",
      color: "fuchsia"
    }
  ];

  const DEFAULT_ICON_MAP = {
    "Intelligent Routing": { icon: BrainCircuit, color: "#4c1d95" },
    "Enterprise Security": { icon: Zap, color: "#4c1d95" },
    "Global-Search": { icon: Search, color: "#4c1d95" },
  }

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      {/* Hero Section */}

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
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[08px] font-black uppercase tracking-[0.2em] shadow-sm mb-2 sm:mb-4"
              >
                Boss Dashboard - GLOBAL WORKSPACE STATUS
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                // className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
                className="text-3xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1"
              >
                Control your Business
                <span className="block">

                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    in One Powerful View.
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
                  { text: "KaryaUp adapts to any workflow, eliminates busywork keeps everything", icon: Check },
                  { text: "Organized with enterprise grade AI execution.", icon: Check }

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
                  { label: "Intelligent Routing", icon: BrainCircuit, color: "purple" },

                  { label: "Global-Search", icon: Search, color: "blue" },
                  { label: "Enterprise Security", icon: ShieldCheck, color: "emerald" }
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

      {/* COMPARISON SECTION (WITH MARQUEE) */}
      <section className="py-8 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-2xl min-[420px]:text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.06] sm:leading-[1.1] tracking-normal mb-4 lg:mb-12 text-balance max-w-[min(100%,40rem)] mx-auto px-2"
          >
            <span className="text-slate-900">{"Project\u00A0Management "}</span>
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Is Broken, We Fixed It
            </motion.span>
          </motion.h2>

          <div className="p-[2px] rounded-[2.5rem] bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 shadow-2xl overflow-hidden">
            <div className="bg-slate-50 rounded-[2.4rem] overflow-hidden grid grid-cols-1 md:grid-cols-3">
              {/* OLD WAY */}
              <div className="pt-5 pb-3 lg:pt-8 lg:pb-4 border-r border-slate-200 bg-white/50">
                <h3 className="text-center text-[1.5rem] font-black mb-1">
                  Old Way
                </h3>
                <p className="text-xs text-center text-slate-500 mb-3 lg:mb-6 font-medium">
                  Manual updates and scattered tools.
                </p>
                <ScrollTrack cards={redCards} direction="down" />
              </div>

              {/* MIDDLE SHIELD & MARQUEE */}
              <div
                className="relative flex flex-col items-center justify-start pt-5 pb-3 lg:pt-8 lg:pb-4 px-4 group overflow-hidden bg-white/40 min-h-[300px] lg:min-h-[380px]"
                onMouseEnter={() => setIsShieldHovered(true)}
                onMouseLeave={() => setIsShieldHovered(false)}
              >
                <ScrollingDataBg isShieldHovered={isShieldHovered} />

                <div className="relative z-40 text-center mb-5 lg:mb-10">
                  <h3
                    className={`text-[1.55rem] font-black transition-colors ${isShieldHovered ? "text-purple-600" : "text-slate-900"}`}
                  >
                    Security You Can Trust
                  </h3>
                  <p className="text-[10px] mt-2 font-bold uppercase tracking-widest text-slate-500">
                    More secure than using AI directly.
                  </p>
                </div>

                <div
                  className="relative flex items-center justify-center w-full max-w-[200px] h-[180px] lg:max-w-[220px] lg:h-[220px]"
                  style={{ perspective: "1200px" }}
                >
                  <div className="absolute inset-0 z-10 opacity-90 scale-110 pointer-events-none">
                    <LightShield3D />
                  </div>
                  <div
                    className="relative z-30 flex items-center justify-center w-full h-full"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        scale: isShieldHovered ? 1.1 : 1,
                      }}
                      transition={{
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                        scale: { duration: 0.4 },
                      }}
                      className="w-28 h-28 md:w-35 md:h-35 relative"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          filter: isShieldHovered
                            ? "drop-shadow(0 50px 100px rgba(87, 40, 132, 0.9)) brightness(1.2)"
                            : "drop-shadow(0 50px 100px rgba(152, 66, 232, 0.5))",
                          transition: "filter 0.5s ease",
                        }}
                      >
                        <Suspense
                          fallback={
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-15 h-15 rounded-full border-2 border-purple-500 border-t-transparent animate-spin" />
                            </div>
                          }
                        >
                          <SpinningLogo3D
                            isHovered={isShieldHovered}
                            className="w-full h-full object-contain"
                          />
                        </Suspense>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  animate={{
                    scale: isShieldHovered ? 1.4 : 1,
                    opacity: isShieldHovered ? 0.4 : 0.15,
                  }}
                  className="absolute -bottom-40 w-64 h-64 bg-purple-100 rounded-full blur-[100px] pointer-events-none"
                />
              </div>

              {/* KARYAUP WAY */}
              <div className="pt-5 pb-3 lg:pt-8 lg:pb-4 border-l border-slate-200 bg-white/50">
                <h3 className="text-center text-2xl font-black mb-1">
                  The KaryaUp Way
                </h3>
                <p className="text-xs text-center text-slate-500 mb-3 lg:mb-6 font-medium">
                  Advanced execution loops for growth.
                </p>
                {/* <ScrollTrack cards={greenCards} direction="up" /> */}
                <ScrollTrack cards={greenCards} direction="up" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* NEW AI WORKSPACE SECTION */}
      <section className="py-8 px-6 pb-15 bg-white relative overflow-hidden border-t border-slate-200">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 40, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-1 drop-shadow-sm"
            >
              The Unified<br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                AI Command Center
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[1rem] text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed"
            >
              Stop managing tools and start leading growth.

              KaryaUp merges your project context with autonomous
            </motion.p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {aiFeatures.map((feature, i) => (
              <TiltCard
                key={i}
                className="bg-white border border-slate-200 hover:border-purple-300 active:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl active:shadow-2xl hover:shadow-purple-900/15 active:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-pointer h-fulltransition-colors transition-shadow duration-300 group">
              
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center transition-all duration-500 border border-transparent group-hover:scale-110 ${getColorClasses(feature.color)}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-900">{feature.title}</h3>
                </div>
                <p className="text-slate-500 font-medium text-sm">{feature.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <FeatureCTA
          title={<>Tasks That Connect To <br /> Everything You Do</>}
        description="Work smarter with tasks that can live in your whiteboards, chat, and calendar — anywhere you work."
        image={dashboardImage}
        containerClassName="mb-10"
      />
    </div>
  );
}