import { Helmet } from "react-helmet-async";
import { useRef, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useAnimationFrame } from "framer-motion";
import { BrainCircuit, Zap, Search, ShieldCheck, Check, X, User, TrendingUp, BarChart3, PieChart, Wallet } from "lucide-react";
import dashboardImage from "../../assets/Salary.webp";
import { lazy, Suspense } from "react";
import FeatureCTA from "../../components/FeatureCTA";
import karyaupLogo from "../../assets/logo-svg.svg";
import FeatureStack from "../../components/FeatureStack";
import CollabTiltCard from "../../components/CollabTiltCard";

// Lazy load the 3D component to improve initial page load speed
const SpinningLogo3D = lazy(() => import("../../components/SpinningLogo3D"));


/* ═══════════════════════════════════════════════
    ICONS & HELPERS
═══════════════════════════════════════════════ */
const ListIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" width="11" height="11">
    <line x1="5" y1="4" x2="13" y2="4" /><line x1="5" y1="8" x2="13" y2="8" /><line x1="5" y1="12" x2="13" y2="12" />
    <circle cx="2.5" cy="4" r="1" fill="currentColor" stroke="none" />
    <circle cx="2.5" cy="8" r="1" fill="currentColor" stroke="none" />
    <circle cx="2.5" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

function Card({ data, type }) {
  const isRed = type === "red";
  return (
    <div className="border border-slate-200 rounded-xl px-2.5 py-2 sm:px-3 sm:py-2.5 lg:px-4 lg:py-3 flex flex-nowrap items-center gap-2 lg:gap-3 bg-white shadow-sm ring-1 ring-black/5">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${isRed
        ? "bg-red-50 border-red-100 text-red-500"
        : "bg-purple-50 border-purple-100 text-purple-600"
        }`}>
        {isRed ? <X className="w-4 h-4" /> : <Check className="w-4 h-4" />}
      </div>

      <div className="min-w-0 flex-1">
        <div className="font-black text-slate-900 text-[13px] sm:text-sm break-words leading-tight">
          {data.title}
        </div>
        <div className="mt-0.5 text-[10px] sm:text-xs font-semibold text-slate-500 flex flex-wrap gap-x-3 gap-y-0.5">
          <span className="flex items-center gap-1">
            Owner: <span className="text-slate-700">{data.owner || "Aisha"}</span>
          </span>
          <span className="flex items-center gap-1">
            Due: <span className="text-slate-700">{data.due || "Now"}</span>
          </span>
        </div>
      </div>

      <div
        className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border flex-shrink-0"
        style={{
          borderColor: isRed ? "rgba(239,68,68,0.25)" : "rgba(126,34,206,0.25)",
          background: isRed ? "rgba(239,68,68,0.05)" : "rgba(126,34,206,0.05)",
          color: isRed ? "rgb(185,28,28)" : "rgb(126,34,206)",
        }}
      >
        {data.pr || (isRed ? "HIGH" : "NORMAL")}
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
    const normalizedDistance = (itemCenter - containerCenter) / (container.height / 2);
    const clamped = Math.max(-1, Math.min(1, normalizedDistance));

    rotateX.set(clamped * -45);
    scale.set(1 - Math.abs(clamped) * 0.25);
    opacity.set(1 - Math.abs(clamped) * 0.6);
  });

  return (
    <div ref={itemRef} style={{ perspective: "1000px" }}>
      <motion.div style={{ rotateX, scale, opacity, transformStyle: "preserve-3d" }}>
        <Card data={data} type={type} />
      </motion.div>
    </div>
  );
};

/* ═══════════════════════════════════════════════
    COMPONENTS
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
      // Added leading-none and kept text-2xl for smaller size
      className="whitespace-nowrap text-purple-700 font-black text-2xl select-none tracking-tighter flex gap-10 leading-none"
    >
      {/* Repeating text to ensure a gapless loop */}
      {Array(9).fill(null).map((_, i) => (
        <span key={i}>{text}  </span>
      ))}
    </motion.div>
  );
}

function ScrollingDataBg({ isShieldHovered }) {
  return (
    <div className={`absolute inset-0 pointer-events-none transition-all duration-1000 flex flex-col justify-center gap-20 overflow-hidden ${isShieldHovered ? "opacity-30" : "opacity-[0.05]"
      }`}>
      {/* Row 1: Plan (Left) */}
      <MarqueeRow text="Plan the Karya" direction="right" isShieldHovered={isShieldHovered} />

      {/* Row 2: Move (Right) */}
      <MarqueeRow text="Move the Karya" direction="left" isShieldHovered={isShieldHovered} />

      {/* Row 3: Complete (Left) */}
      <MarqueeRow text="Complete the Karya" direction="right" isShieldHovered={isShieldHovered} />
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
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
          perspective: "1000px"
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
          className="flex flex-col gap-2 py-2 lg:gap-3 lg:py-4 will-change-transform"
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

function WatermarkBg({ isHovered }) {
  const infinitePatternRow = "KaryaUp ".repeat(25);
  const rows = Array(14).fill(infinitePatternRow);

  return (
    <div className={`absolute inset-0 pointer-events-none transition-all duration-1000 flex flex-col justify-center gap-3 overflow-hidden ${isHovered ? "opacity-40" : "opacity-[0.08]"}`}>
      {rows.map((pattern, i) => (
        <motion.div
          key={i}
          initial={{ x: i % 2 === 0 ? 0 : -100 }}
          animate={{ x: i % 2 === 0 ? -100 : 0 }}
          transition={{ duration: isHovered ? 8 : 25, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-purple-700 font-normal text-sm md:text-base select-none"
        >
          {pattern} {pattern}
        </motion.div>
      ))}
    </div>
  );
}

const LightShield3D = () => (
  <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-52 h-60 md:w-56 md:h-64 drop-shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
    <defs>
      <linearGradient id="glassBorderGradient" x1="100" y1="10" x2="100" y2="208" gradientUnits="userSpaceOnUse">
        <stop stopColor="#94a3b8" stopOpacity="0.4" />
        <stop offset="0.5" stopColor="white" stopOpacity="0.6" />
        <stop offset="1" stopColor="#64748b" stopOpacity="0.4" />
      </linearGradient>
      <radialGradient id="glassShine" cx="100" cy="100" r="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.5" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </radialGradient>
    </defs>
    <path d="M100 10 L182 42 L182 108 C182 154 146 190 100 208 C54 190 18 154 18 108 L18 42 Z" fill="white" fillOpacity="0.03" stroke="url(#glassBorderGradient)" strokeOpacity="0.6" strokeWidth="2" />
    <path d="M100 20 L174 48 L174 108 C174 150 140 183 100 200 C60 183 26 150 26 108 L26 48 Z" fill="url(#glassShine)" fillOpacity="0.1" stroke="white" strokeOpacity="0.15" />
  </svg>
);

const profitTiltPillars = [
  {
    icon: TrendingUp,
    title: "Live margin signals",
    desc: "Watch contribution and burn move with the week so you can correct course before the quarter is written in stone.",
    color: "purple",
  },
  {
    icon: PieChart,
    title: "Costs tied to outcomes",
    desc: "Map spend and hours to projects and clients — so every invoice, overrun, and discount has a clear story.",
    color: "fuchsia",
  },
  {
    icon: BarChart3,
    title: "Forecasts you can brief",
    desc: "Rolling views of revenue, capacity, and margin give finance and ops the same numbers without another deck.",
    color: "purple",
  },
  {
    icon: Wallet,
    title: "Cash reality, in context",
    desc: "See liquidity next to delivery dates and commitments — not buried three exports deep in a workbook.",
    color: "fuchsia",
  },
];

/* ═══════════════════════════════════════════════
    MAIN PAGE EXPORT
═══════════════════════════════════════════════ */
export default function ProfitTracking() {
  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);
  const [isShieldHovered, setIsShieldHovered] = useState(false);

  const redCards = [
    { title: "Manual spreadsheet updates", owner: "Rahul", due: "Wed", pr: "High" },
    { title: "Delayed profit visibility", owner: "Aisha", due: "Fri", pr: "High" },
    { title: "Inaccurate expense tracking", owner: "Rahul", due: "Mon", pr: "Normal" },
    { title: "Missed revenue bottlenecks", owner: "Sneha", due: "Thu", pr: "High" },
    { title: "Siloed financial reports", owner: "Aisha", due: "Tue", pr: "High" },
  ];

  const greenCards = [
    { title: "Real-time P&L dashboard", owner: "Agent", due: "Now", pr: "Normal" },
    { title: "Automated expense allocation", owner: "Agent", due: "Now", pr: "Normal" },
    { title: "Unified financial data hub", owner: "Agent", due: "Now", pr: "Normal" },
    { title: "Secure encryption for billing", owner: "Agent", due: "Now", pr: "Normal" },
    { title: "AI-powered margin alerts", owner: "Agent", due: "Now", pr: "Normal" },
    { title: "Instant resource analytics", owner: "Agent", due: "Now", pr: "Normal" },
  ];



  const getColorClasses = (color) => {
    const colorMap = {
      purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
      fuchsia: "bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white",
      emerald: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
      orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
      blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-100 group-hover:text-white",
      indigo: "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
      pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
    };
    return colorMap[color] || "bg-slate-100 text-slate-600 group-hover:bg-slate-600 group-hover:text-white";
  };

  const DEFAULT_ICON_MAP = {
    "AUTO EXPENSE": { icon: BrainCircuit, color: "#4c1d95" },
    "LIVE MARGINS": { icon: Zap, color: "#4c1d95" },
    "DEEP AUDIT": { icon: Search, color: "#4c1d95" },
  }
  const FeatureStack = ({ items = [], interval = 2500 }) => {
    const [index, setIndex] = useState(0);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
      if (items.length === 0 || hovered) return;
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }, [items.length, interval, hovered]);

    const visibleItems = useMemo(() => {
      if (items.length === 0) return [];
      return [0, 1, 2].map((offset) => {
        const itemIndex = (index + offset) % items.length;
        const rawItem = items[itemIndex];

        // Normalize item to object
        let itemObj = typeof rawItem === "string" ? { label: rawItem } : { ...rawItem };

        // Apply defaults for icons/colors if missing
        if (!itemObj.icon || !itemObj.iconColor) {
          const mapped = DEFAULT_ICON_MAP[itemObj.label] || { icon: Check, color: "#000000" };
          itemObj.icon = itemObj.icon || mapped.icon;
          itemObj.iconColor = itemObj.iconColor || mapped.color;
        }

        return { offset, item: itemObj };
      });
    }, [items, index]);

    if (items.length === 0) return null;

    return (
      <div
        className="relative w-full max-w-[240px] sm:max-w-[320px] mt-6 lg:mt-8 overflow-visible mx-auto lg:mx-0"
        style={{
          height: "80px",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <AnimatePresence mode="popLayout">
          {visibleItems.map(({ offset, item }) => {
            const Icon = item.icon;
            const color = item.iconColor;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={
                  hovered
                    ? {
                      opacity: 1,
                      scale: 1,
                      y: offset * 54, // Clear separation between cards
                      zIndex: 10 - offset,
                    }
                    : {
                      opacity: offset === 0 ? 1 : offset === 1 ? 0.45 : 0.2,
                      scale: 1 - offset * 0.035,
                      y: offset * 11,
                      zIndex: 10 - offset,
                    }
                }
                exit={{
                  opacity: 0,
                  y: -10,
                  scale: 0.95,
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: hovered ? offset * 0.05 : offset * 0.02,
                }}
                className="absolute top-0 left-0 w-full px-4 sm:px-4 py-1.5 sm:py-2 rounded-xl flex items-center justify-center gap-3"
                style={{
                  background:
                    offset === 0
                      ? "linear-gradient(135deg, rgba(226, 232, 240, 0.15) 0%, rgba(203, 213, 225, 0.08) 100%)"
                      : "linear-gradient(135deg, rgba(226, 232, 240, 0.06) 0%, rgba(203, 213, 225, 0.03) 100%)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1.2px solid rgba(0, 0, 0, 0.25)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                }}
              >
                {/* Icon box with colorful icon */}
                <div className="flex-shrink-0 w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-md border border-black/5 bg-white/25 flex items-center justify-center">
                  <Icon
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                    style={{ color: color }}
                    strokeWidth={2.5}
                  />
                </div>

                {/* Precise Small Uppercase Text */}
                <span className="text-[10px] sm:text-[11.5px] font-black tracking-widest text-black uppercase">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    );
  };
 

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Profit Tracking | Karyaup</title>
        <meta name="description" content="Plan and manage schedules with Karyaup calendar. Track tasks, deadlines, meetings, and events in one unified calendar for better team coordination." />
        <meta name="keywords" content="profit-tracking, team calendar, scheduling software, task calendar, project deadlines, meeting planner, Karyaup" />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="Profit Tracking | Karyaup" />
        <meta property="og:description" content="Organize tasks, events, and deadlines with a powerful team calendar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/profit-tracking" />
        <meta property="og:site_name" content="Karyaup" />
        <link rel="canonical" href="https://karyaup.com/features/profit-tracking" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm mb-3">
              PROFIT TRACKING — REVENUE GROWTH
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05] mb-1 text-balance max-w-xl sm:max-w-2xl mx-auto lg:mx-0"
            >
              <span className="text-slate-900">{"Control Your\u00A0Margins. "}</span>
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Master Your Growth.
              </motion.span>
            </motion.h1>
            <div className="mt-5 space-y-3 max-w-lg w-full">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium"> KaryaUp gives you an automated, real time view of your team's profitability and project expenses.</p>
              </div>
            </div>
            {/* <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
            Stop leaking revenue. KaryaUp gives you an automated, real time view of your team's profitability and project expenses.
            </p> */}
            <FeatureStack
              items={[
                { label: "AUTO EXPENSE", icon: BrainCircuit },
                { label: "LIVE MARGINS", icon: Zap },
                { label: "DEEP AUDIT", icon: Search },

              ]}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24"
          >
            <div className="relative overflow-hidden rounded-[12px] shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white mt-[-20px] lg:mt-[-5px]">
              <img
                src={dashboardImage}
                alt="KaryaUp task management"
                className="w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[380px] xl:h-[350px] object-cover object-left-top bg-white transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      {/* Comparison Section */}
      <section className="py-8 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-2xl min-[420px]:text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.06] sm:leading-[1.1] tracking-normal mb-8 lg:mb-12 text-balance max-w-[min(100%,40rem)] mx-auto px-2"
          >
            <span className="text-slate-900">{"Profit\u00A0Tracking "}</span>
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
                <h3 className="text-center text-[1.5rem] font-black mb-1">Old Way</h3>
                <p className="text-xs text-center text-slate-500 mb-3 lg:mb-6 font-medium">Manual updates and scattered tools.</p>
                <ScrollTrack cards={redCards} direction="down" />
              </div>

              {/* MIDDLE SHIELD & MARQUEE */}
              <div
                className="relative flex flex-col items-center justify-start py-5 px-4 lg:py-8 group overflow-hidden bg-white/40 min-h-[300px] lg:min-h-[450px]"
                onMouseEnter={() => setIsShieldHovered(true)}
                onMouseLeave={() => setIsShieldHovered(false)}
              >
                <ScrollingDataBg isShieldHovered={isShieldHovered} />

                <div className="relative z-40 text-center mb-5 lg:mb-10">
                  <h3 className={`text-[1.55rem] font-black transition-colors ${isShieldHovered ? "text-purple-600" : "text-slate-900"}`}>
                    Security You Can Trust
                  </h3>
                  <p className="text-[10px] mt-2 font-bold uppercase tracking-widest text-slate-500">
                    More secure than using AI directly.
                  </p>
                </div>

                <div className="relative flex items-center justify-center w-full max-w-[200px] h-[180px] lg:max-w-[220px] lg:h-[220px]" style={{ perspective: "1200px" }}>
                  <div className="absolute inset-0 z-10 opacity-80 scale-110 pointer-events-none">
                    <LightShield3D />
                  </div>
                  {/* Centered spinning logo */}
                  <div className="relative z-30 flex items-center justify-center w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        scale: isShieldHovered ? 1.1 : 1
                      }}
                      transition={{
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                        scale: { duration: 0.4 }
                      }}
                      className="w-28 h-28 md:w-35 md:h-35 relative"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          filter: isShieldHovered
                            ? "drop-shadow(0 20px 50px rgba(168,85,247,0.9)) brightness(1.2)"
                            : "drop-shadow(0 20px 50px rgba(168,85,247,0.5))",
                          transition: "filter 0.5s ease"
                        }}
                      >
                        <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><div className="w-15 h-15 rounded-full border-2 border-purple-500 border-t-transparent animate-spin" /></div>}>
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
                  animate={{ scale: isShieldHovered ? 1.4 : 1, opacity: isShieldHovered ? 0.4 : 0.15 }}
                  className="absolute -bottom-40 w-64 h-64 bg-purple-400 rounded-full blur-[100px] pointer-events-none"
                />
              </div>


              {/* KARYAUP WAY */}
              <div className="pt-5 pb-3 lg:pt-8 lg:pb-4 border-l border-slate-200 bg-white/50">
                <h3 className="text-center text-2xl font-black mb-1">The KaryaUp Way</h3>
                <p className="text-xs text-center text-slate-500 mb-3 lg:mb-6 font-medium">Advanced execution loops for growth.</p>
                <ScrollTrack cards={greenCards} direction="up" />
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-14"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-[0.2em]">
              Profit intelligence
            </span>
            <h2 className="mt-4 text-center text-2xl min-[420px]:text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.06] sm:leading-[1.1] tracking-normal text-balance max-w-[min(100%,40rem)] mx-auto px-2">
              <span className="text-slate-900">{"Numbers that stay "}</span>
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                close to the work
              </motion.span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              KaryaUp connects delivery, time, and billing so profitability is visible where your teams already operate.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {profitTiltPillars.map((item, i) => (
              <CollabTiltCard key={item.title} item={item} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <FeatureCTA
        title="Revenue that connects to your workflow"
        description="Stop jumping between apps. See your profits right where you manage your tasks and teams."
        image={dashboardImage}
        containerClassName="mt-10 mb-10"
      />
    </div>
  );
}