import { useRef, useEffect, useMemo, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  color,
  useAnimationFrame,
} from "framer-motion";
import { ShieldCheck } from "lucide-react";
import dashboardImage from "../../assets/Project_ss.webp";
import projectImage from "../../assets/Project2.webp";
import { lazy, Suspense } from "react";
import FeatureCTA from "../../components/FeatureCTA";
import FeatureStack from "../../components/FeatureStack";
import { Helmet } from "react-helmet-async";
import karyaUpLogo from "../../assets/logo-svg.svg";

// Lazy load the 3D component to improve initial page load speed
const SpinningLogo3D = lazy(() => import("../../components/SpinningLogo3D"));
import {
  Sparkles,
  BrainCircuit,
  Zap,
  Search,
  Check,
  X,
  User,
  Users,
  LineChart,
  Smile,
} from "lucide-react";

/* ═══════════════════════════════════════════════
   COMPONENTS
═══════════════════════════════════════════════ */

// Individual Marquee Row with direction control
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
      className={`absolute inset-0 pointer-events-none transition-all duration-1000 flex flex-col justify-center gap-20 overflow-hidden ${isShieldHovered ? "opacity-30" : "opacity-[0.05]"
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

const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [12, -12]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-12, 12]), {
    stiffness: 300,
    damping: 30,
  });

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
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={className}
    >
      <div
        style={{ transform: "translateZ(30px)" }}
        className="h-full flex flex-col"
      >
        {children}
      </div>
    </motion.div>
  );
};

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

const LightShield3D = () => (
  <svg
    viewBox="0 0 200 220"
    fill="none"
    className="w-full h-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)]"
  >
    <defs>
      <linearGradient
        id="glassBorderGradient"
        x1="100"
        y1="10"
        x2="100"
        y2="208"
        gradientUnits="userSpaceOnUse"
      >
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

const getColorClasses = (color) => {
  const colorMap = {
    purple:
      "bg-purple-100 text-purple-600 lg:group-hover:bg-purple-600 lg:group-hover:text-white",
    fuchsia:
      "bg-fuchsia-100 text-fuchsia-600 lg:group-hover:bg-fuchsia-600 lg:group-hover:text-white",
    emerald:
      "bg-emerald-100 text-emerald-600 lg:group-hover:bg-emerald-600 lg:group-hover:text-white",
    orange:
      "bg-orange-100 text-orange-600 lg:group-hover:bg-orange-600 lg:group-hover:text-white",
    blue: "bg-blue-100 text-blue-600 lg:group-hover:bg-blue-600 lg:group-hover:text-white",
    pink: "bg-pink-100 text-pink-600 lg:group-hover:bg-pink-600 lg:group-hover:text-white",
  };
  return (
    colorMap[color] ||
    "bg-slate-100 text-slate-600 lg:group-hover:bg-slate-600 lg:group-hover:text-white"
  );
};

function Card({ data, type }) {
  const isRed = type === "red";
  return (
    <div className="border border-slate-200 rounded-xl px-2.5 py-2 sm:px-3 sm:py-2.5 lg:px-4 lg:py-3 flex flex-nowrap items-center gap-2 lg:gap-3 bg-white shadow-sm ring-1 ring-black/5">
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${isRed
            ? "bg-red-50 border-red-100 text-red-500"
            : "bg-purple-50 border-purple-100 text-purple-600"
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

/* ═══════════════════════════════════════════════
   MAIN PAGE COMPONENT
═══════════════════════════════════════════════ */
export default function ProjectManagement() {
  const sectionSpacing = "py-8 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);

  const [isShieldHovered, setIsShieldHovered] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

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

  const features = [
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

  const aiFeatures = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Predictive Margins",
      desc: "Leverage historical sprint data and current velocity to accurately predict project profitability",
      color: "purple",
    },
    {
      icon: <BrainCircuit className="w-5 h-5" />,
      title: "Smart Allocation",
      desc: "Automatically maps expenses to specific projects using NLP.",
      color: "fuchsia",
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: "Contextual Query",
      desc: "Ask natural language questions like 'Which project is over budget?' to get instant, deep-dive data visualizations",
      color: "blue",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Automated Standups",
      desc: "Plan smarter, track faster, deliver on time.",
    },
  ];


  return (
    <div className="bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Project Management | Karyaup</title>
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 lg:pt-30 pb-8 sm:pb-16 lg:pb-20 px-4 sm:px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm mb-4">
                PROJECT MANAGEMENT — PLAN, EXECUTE
              </div>

              <motion.h1
                initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.08,
                }}
                className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05] text-balance max-w-xl sm:max-w-2xl mx-auto lg:mx-0"
              >
                <span className="text-slate-900">{"Unified\u00A0Project "}</span>
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{
                    backgroundPosition: ["0% center", "-200% center"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Management Software
                </motion.span>
              </motion.h1>

              <div className="mt-5 space-y-3 max-w-lg w-full">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 font-medium">
                    Plan smarter, track faster, deliver on time.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 font-medium">
                    Keep projects organized and your team aligned.
                  </p>
                </div>
              </div>
              <FeatureStack
                items={[
                  {
                    label: "Intelligent Routing",
                    icon: BrainCircuit,
                    iconColor: "#7e22ce",
                  },
                  { label: "Real-time Sync", icon: Zap, iconColor: "#d946ef" },
                  { label: "Search", icon: Search, iconColor: "#7e22ce" },
                ]}
              />
            </div>
            <div className="relative w-full max-w-[540px] mx-auto lg:max-w-none overflow-hidden rounded-[12px]">
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
                  <div className="absolute inset-0 z-10 opacity-80 scale-110 pointer-events-none">
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
                            ? "drop-shadow(0 20px 50px rgba(168,85,247,0.9)) brightness(1.2)"
                            : "drop-shadow(0 20px 50px rgba(168,85,247,0.5))",
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
                  className="absolute -bottom-40 w-64 h-64 bg-purple-400 rounded-full blur-[100px] pointer-events-none"
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
                <ScrollTrack cards={greenCards} direction="up" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TASK WORKSPACE SECTION */}
      <section className="py-12 sm:py-16 lg:py-20 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* HEADING */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-50 text-[11px] font-black uppercase tracking-widest text-slate-600 mb-4 border border-slate-200">
                Unified Task Workspace
              </span>

              <h2 className="text-3xl min-[420px]:text-4xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.06] md:leading-[1.1] mb-3 text-balance max-w-[min(100%,36rem)] mx-auto px-1">
                <span className="text-slate-900">{"Supercharge\u00A0Your "}</span>
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                  animate={{
                    backgroundPosition: ["0% center", "-200% center"],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Daily Workflows.
                </motion.span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-xl mx-auto">
                Centralize communication, assign dynamic tasks, and execute
                flawlessly with enterprise grade AI execution.
              </p>
            </motion.div>
          </div>

          {/* GRID: IMAGE LEFT | NUMBERED FEATURES RIGHT — tighter gap, columns hug center */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-8 xl:gap-10 items-center">
            {/* Static Image (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1 flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-[min(100%,400px)] sm:max-w-[440px] lg:max-w-[460px] overflow-hidden rounded-2xl sm:rounded-[48px]">
                <img
                  src={projectImage}
                  alt="Project Management Dashboard"
                  className="w-full max-h-[420px] object-contain rounded-xl sm:rounded-[24px]"
                />
              </div>
            </motion.div>

            {/* Numbered Features with Wizard Line (Right) */}
            <div className="flex flex-col order-1 lg:order-2 w-full max-w-[min(100%,400px)] sm:max-w-[440px] lg:max-w-[460px] mx-auto lg:mx-0 lg:justify-self-start">
              {features.map((item, i) => {
                const isActive = activeFeature === i;
                const isPast = activeFeature > i;
                const isLineActive = activeFeature > i;

                // Gap from circle edge to row boundary:
                //   collapsed row ≈ 52px  → center=26, radius=22, gap=4
                //   expanded  row ≈ 104px → center=52, radius=22, gap=30
                const COLL = 4;
                const EXP = 30;
                const upperGap = activeFeature === i ? EXP : COLL;
                const lowerGap = activeFeature === i + 1 ? EXP : COLL;
                // connector height fills: mb-4 gap (16px) + both circle-edge gaps
                const connHeight = 16 + upperGap + lowerGap;

                return (
                  <div key={i}>
                    {/* Row: circle CENTERED with card */}
                    <div
                      className="flex items-center gap-5 mb-4 last:mb-0"
                      onMouseEnter={() => setActiveFeature(i)}
                    >
                      {/* Number Circle — no ring so line can touch */}
                      <motion.div
                        animate={{
                          scale: isActive ? 1.1 : 1,
                          backgroundColor:
                            isActive || isPast ? "#7E22CE" : "#f1f5f9",
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 shadow-md z-10"
                      >
                        <span
                          className={`font-black text-base leading-none ${isActive || isPast ? "text-white" : "text-slate-400"}`}
                        >
                          {i + 1}
                        </span>
                      </motion.div>

                      {/* Card */}
                      <motion.div
                        animate={{
                          borderColor: isActive
                            ? "rgba(126,34,206,0.25)"
                            : "rgba(226,232,240,1)",
                          boxShadow: isActive
                            ? "0 4px 20px rgba(0,0,0,0.08)"
                            : "0 1px 4px rgba(0,0,0,0.04)",
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex-1 bg-white border rounded-2xl px-5 py-4 cursor-pointer"
                      >
                        <motion.h3
                          animate={{ color: isActive ? "#0f172a" : "#64748b" }}
                          className="text-[1.05rem] font-black tracking-tight"
                        >
                          {item.title}
                        </motion.h3>

                        <AnimatePresence>
                          {isActive && (
                            <motion.p
                              key="desc"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="text-slate-500 font-medium text-sm leading-relaxed mt-2 overflow-hidden"
                            >
                              {item.desc}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    {/* Connector — neg margins pull it flush to both circle edges */}
                    {i < features.length - 1 && (
                      <div
                        className="flex gap-5"
                        style={{
                          marginTop: `-${upperGap}px`,
                          marginBottom: `-${lowerGap}px`,
                        }}
                      >
                        <div className="w-11 flex justify-center">
                          <motion.div
                            animate={{
                              backgroundColor: isLineActive
                                ? "#7E22CE"
                                : "#e2e8f0",
                            }}
                            transition={{ duration: 0.4 }}
                            style={{ height: `${connHeight}px` }}
                            className="w-0.5 rounded-full"
                          />
                        </div>
                        <div className="flex-1" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <FeatureCTA
        title="Tasks That Connect To Everything You Do"
        description="Work smarter with tasks that can live in your whiteboards, chat, and calendar."
        image={dashboardImage}
        imageOuterClassName="relative w-full max-w-[340px] sm:max-w-[480px] lg:max-w-[560px] mx-auto lg:mx-auto translate-x-0"
        imageSectionClassName="flex-[1.5] xl:flex-[1.4] relative mt-2 lg:mt-0 flex items-center justify-center p-2 lg:p-3 lg:pr-6"
      />
    </div>
  );
}
