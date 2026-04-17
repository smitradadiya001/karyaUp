import { Helmet } from "react-helmet-async";
import { useRef, useEffect, useMemo, useState, isStackOpen } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useAnimationFrame } from "framer-motion";
import { Sparkles, BrainCircuit, Zap, Search, ShieldCheck, Check, X, MessagesSquare, Eye, TrendingUp, AlertCircle, BarChart3, ReceiptIndianRupee } from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";
import { lazy, Suspense } from "react";
import FeatureCTA from "../../components/FeatureCTA";
import karyaupLogo from "../../assets/logo-svg.svg";
import FeatureStack from "../../components/FeatureStack";

// Lazy load the 3D component to improve initial page load speed
const SpinningLogo3D = lazy(() => import("../../components/SpinningLogo3D"));


/* ═══════════════════════════════════════════════
    ICONS & HELPERS
═══════════════════════════════════════════════ */
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
    MAIN PAGE EXPORT
═══════════════════════════════════════════════ */
export default function ProfitTracking() {

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

  const getColorClasses = (color) => {
    const colorMap = {
      purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-active:bg-purple-600 group-active:text-white",
      fuchsia: "bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white group-active:bg-fuchsia-600 group-active:text-white",
      emerald: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-active:bg-emerald-600 group-active:text-white",
      orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white group-active:bg-orange-600 group-active:text-white",
      blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-100 group-hover:text-white group-active:bg-blue-600 group-active:text-white",
      indigo: "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-active:bg-indigo-600 group-active:text-white",
      pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white group-active:bg-pink-600 group-active:text-white",
    };
    return colorMap[color] || "bg-slate-100 text-slate-600 group-hover:bg-slate-600 group-hover:text-white group-active:bg-slate-600 group-active:text-white";
  };

  const DEFAULT_ICON_MAP = {
    "AUTO EXPENSE": { icon: ShieldCheck, color: "#4c1d95" },
    "LIVE MARGINS": { icon: Zap, color: "#4c1d95" },
    "DEEP AUDIT": { icon: Search, color: "#4c1d95" },
  }

  const aiFeatures = [
    {
      title: "Live Margin Tracking",
      desc: "Instantly visualize the profitability of every active sprint with real-time labor and resource cost offsets.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "purple"
    },
    {
      title: "Burn Rate Alerts",
      desc: "Get autonomous notifications before a project exceeds its budget based on current velocity and spend.",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "fuchsia"
    },
    {
      title: "Revenue Projection",
      desc: "Use AI to simulate future revenue based on your current pipeline and historical resource win rates.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "purple"
    },
    {
      title: "Automated Auditing",
      desc: "Automatically categorize project-related expenses and overheads using high-precision NLP scanning.",
      icon: <ReceiptIndianRupee className="w-6 h-6" />, // Or just 'Receipt'
      color: "fuchsia"
    }
  ];

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
                Profit Tracking - Revenue Growth
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                // className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
                className="text-3xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1"
              >
                Control your Margins.
                <span className="block">

                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Master your Growth.
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
                  { text: "KaryaUp gives you an automated, real time view of your team", icon: Check },
                  { text: "Track profits in real time with complete clarity across every project.", icon: Check }

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
                  { label: "AUTO EXPENSE", icon: BrainCircuit },
                  { label: "LIVE MARGINS", icon: Zap },
                  { label: "DEEP AUDIT", icon: Search },

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
      <section className="py-5 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-2xl min-[420px]:text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.06] sm:leading-[1.1] tracking-normal mb-8 lg:mb-12 text-balance max-w-[min(100%,40rem)] mx-auto px-2"
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
              <div className="pt-5 pb-3 lg:pt-8 lg:pb-4 border-slate-200 bg-white/50">
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

      {/* ── AI Workspace Section ── */}
      <section className="py-8 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 relative z-10">

            <motion.h1
              initial={{ opacity: 0, y: 40, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-2 drop-shadow-sm"
            >
              Task Management 
              <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Drives Profitability.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[1rem] text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed"
            >
              Our AI doesn't just track your projects it actively  manages

              tasks to ensure every sprint operates at maximum margin.

            </motion.p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {aiFeatures.map((feature, i) => (
              <TiltCard
                key={i}
                className="bg-white border border-slate-200 hover:border-purple-300 active:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl active:shadow-2xl hover:shadow-purple-900/15 active:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-pointer h-full transition-colors transition-shadow duration-300 group">
              
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
        title={<> Revenue that connects<br /> to your workflow</>}
        // title="Revenue that connects to your workflow"
        description="Stop jumping between apps. See your profits right where you manage your tasks and teams."
        image={dashboardImage}
        containerClassName="mt-10 mb-10"
      />
    </div>
  );
}