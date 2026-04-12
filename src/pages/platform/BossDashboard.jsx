import { useRef, useEffect, useMemo, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  useAnimationFrame,
} from "framer-motion";
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
  User,
} from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";
import planImage from "../../assets/Gantt.webp";
import React, { lazy, Suspense } from "react";
import FeatureCTA from "../../components/FeatureCTA";
import karyaupLogo from "../../assets/logo-svg.svg";
import FeatureStack from "../../components/FeatureStack";
import CollabTiltCard from "../../components/CollabTiltCard";

const SpinningLogo3D = lazy(() => import("../../components/SpinningLogo3D"));
import { Helmet } from "react-helmet-async";

/* ═══════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════ */
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
      whileTap={{ scale: 0.98 }} // Fixed for Mobile
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

function Card({ data, type }) {
  const isRed = type === "red";
  return (
    <div className="border border-slate-200 rounded-xl px-2.5 py-2 sm:px-3 sm:py-2.5 lg:px-4 lg:py-3 flex flex-nowrap items-center gap-2 lg:gap-3 bg-white shadow-sm ring-1 ring-black/5">
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
          isRed
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
            <span className="text-slate-700">{data.owner || "Aisha"}</span>
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
      className={`absolute inset-0 pointer-events-none transition-all duration-1000 flex flex-col justify-center gap-20 overflow-hidden ${
        isShieldHovered ? "opacity-30" : "opacity-[0.05]"
      }`}
    >
      {/* Row 1: Plan (Left) */}
      <MarqueeRow
        text="Plan the Karya"
        direction="right"
        isShieldHovered={isShieldHovered}
      />

      {/* Row 2: Move (Right) */}
      <MarqueeRow
        text="Move the Karya"
        direction="left"
        isShieldHovered={isShieldHovered}
      />

      {/* Row 3: Complete (Left) */}
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

/* ═══════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════
   GLASS AI TASK STACK
═══════════════════════════════════════════════ */
const GlassStack = () => {
  const items = [
    {
      id: 1,
      text: "Translating updates for the team in Madrid...",
      icon: (
        <path
          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
          strokeLinejoin="round"
        />
      ),
      color: "#d946ef",
      lines: true,
    },
    {
      id: 2,
      text: "Generating action items from your team meeting...",
      icon: (
        <path
          d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
          strokeLinejoin="round"
        />
      ),
      color: "#0ea5e9",
      lines: true,
      clip: true,
    },
    {
      id: 3,
      text: "Drafting social posts from the latest blog article...",
      icon: (
        <path
          d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
          strokeLinejoin="round"
        />
      ),
      color: "#14b8a6",
    },
    {
      id: 4,
      text: "Supercharge Your Daily Workflows.",
      icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinejoin="round" />,
      color: "#8b5cf6",
    },
    {
      id: 5,
      text: "Automated status updates from code or docs",
      icon: <circle cx="12" cy="12" r="10" />,
      bot: true,
      color: "#d946ef",
    },
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

          let y = 0;
          let width = "100%";
          let zIndex = 40 - pos * 10;
          let bgClass = "";
          let borderClass = "";
          let shadowClass = "";

          if (pos === 0) {
            y = 0;
            width = "100%";
            bgClass = "bg-[#18181b]/95 backdrop-blur-2xl";
            borderClass = "border-white/10";
            shadowClass = "shadow-[0_15px_40px_rgba(0,0,0,0.4)]";
          } else if (pos === 1) {
            y = 18;
            width = "93%";
            bgClass = "bg-[#18181b]/70 backdrop-blur-xl";
            borderClass = "border-white/[0.08]";
            shadowClass = "shadow-lg";
          } else if (pos === 2) {
            y = 36;
            width = "86%";
            bgClass = "bg-[#18181b]/50 backdrop-blur-md";
            borderClass = "border-white/[0.05]";
            shadowClass = "shadow-md";
          } else if (pos === 3) {
            y = 54;
            width = "78%";
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
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              }}
              exit={{
                opacity: 0,
                y: -30,
                scale: 1.05,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className={`absolute top-0 h-[64px] rounded-full border overflow-hidden px-5 pr-8 flex items-center gap-4 cursor-pointer transition-colors duration-300 ${bgClass} ${borderClass} ${shadowClass}`}
            >
              <div
                className="flex items-center gap-4 w-full h-full"
                style={{
                  opacity: pos === 0 ? 1 : 0.2,
                  transition: "opacity 0.6s ease-in-out",
                  pointerEvents: pos === 0 ? "auto" : "none",
                }}
              >
                {/* Dynamic Icon */}
                <div className="relative shrink-0 flex items-center justify-center mt-0.5 z-10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 drop-shadow-md z-10"
                  >
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
                  <svg
                    viewBox="0 0 24 24"
                    fill={item.color}
                    stroke="none"
                    className="w-3.5 h-3.5 absolute -bottom-1 -right-1.5 z-20"
                  >
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

const bossTiltPillars = [
  {
    icon: Layers,
    title: "One pane of truth",
    desc: "Projects, people, and priorities in a single leadership view instead of five tabs and a spreadsheet.",
    color: "purple",
  },
  {
    icon: Activity,
    title: "Live operating rhythm",
    desc: "See workload, blockers, and momentum update as work happens — not after the weekly status meeting.",
    color: "fuchsia",
  },
  {
    icon: Zap,
    title: "Decisions without delay",
    desc: "Spot risks early, align tradeoffs fast, and keep teams on course before small gaps become expensive misses.",
    color: "purple",
  },
  {
    icon: BarChart3,
    title: "Metrics that tell a story",
    desc: "Utilization, throughput, and outcomes read clearly for you and your leads — without building custom reports.",
    color: "fuchsia",
  },
];

/* ═══════════════════════════════════════════════
   MAIN PAGE COMPONENT
═══════════════════════════════════════════════ */
export default function BossDashboard() {
  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);
  const [isShieldHovered, setIsShieldHovered] = useState(false);

  const redCards = [
    {
      title: "Projects scattered across tools",
      owner: "Rahul",
      due: "Mon",
      pr: "High",
    },
    {
      title: "Critical info hidden in silos",
      owner: "Aisha",
      due: "Wed",
      pr: "High",
    },
    {
      title: "Manual updates strain capacity",
      owner: "Sneha",
      due: "Fri",
      pr: "Normal",
    },
    {
      title: "Missed deadlines & bottlenecks",
      owner: "Priya",
      due: "Tue",
      pr: "High",
    },
    {
      title: "Unclear resource allocation",
      owner: "Rahul",
      due: "Thu",
      pr: "High",
    },
  ];

  const greenCards = [
    { title: "Unified platform hub", owner: "Agent", due: "Now", pr: "Normal" },
    {
      title: "Instant global search",
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
      title: "AI-powered timeline tracking",
      owner: "Agent",
      due: "Now",
      pr: "Normal",
    },
    {
      title: "Real-time resource analytics",
      owner: "Agent",
      due: "Now",
      pr: "Normal",
    },
  ];

  const executiveStats = [
    {
      label: "Tasks",
      value: "+54%",
      icon: <TrendingUp size={20} />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      label: "Whiteboards",
      value: "20",
      icon: <Users size={20} />,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Projects",
      value: "80%",
      icon: <Zap size={20} />,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      label: "Project Priority",
      value: "High",
      icon: <Activity size={20} />,
      color: "text-pink-600",
      bg: "bg-pink-50",
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      purple:
        "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
      fuchsia:
        "bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white",
      emerald:
        "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
      orange:
        "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
      blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-100 group-hover:text-white",
      indigo:
        "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
      pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
    };
    return (
      colorMap[color] ||
      "bg-slate-100 text-slate-600 group-hover:bg-slate-600 group-hover:text-white"
    );
  };
  const aiFeatures = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Contextual Memory",
      desc: "Our AI learns your project history and team habits, providing suggestions that actually make sense for your specific workflow.",
      color: "purple",
    },
    {
      icon: <BrainCircuit className="w-5 h-5" />,
      title: "Autonomous Agents",
      desc: "Deploy specialized AI agents to draft reports, update statuses before they impact your delivery.",
      color: "fuchsia",
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: "Smart Workspace",
      desc: "A single environment where documentation, task management live together no more tab-hopping fatigue.",
      color: "purple",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Automated Standups",
      desc: "Eliminate time-consuming meetings. AI automatically aggregates daily progress, links efforts to budget utilization",
      color: "fuchsia",
    },
  ];

  const DEFAULT_ICON_MAP = {
    "Intelligent Routing": { icon: BrainCircuit, color: "#4c1d95" },
    "Enterprise Security": { icon: Zap, color: "#4c1d95" },
    "Global-Search": { icon: Search, color: "#4c1d95" },
  };
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
        let itemObj =
          typeof rawItem === "string" ? { label: rawItem } : { ...rawItem };

        // Apply defaults for icons/colors if missing
        if (!itemObj.icon || !itemObj.iconColor) {
          const mapped = DEFAULT_ICON_MAP[itemObj.label] || {
            icon: Check,
            color: "#000000",
          };
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
        <title>Boss Dashboard | Karyaup</title>
        <meta
          name="description"
          content="Plan and manage schedules with Karyaup calendar. Track tasks, deadlines, meetings, and events in one unified calendar for better team coordination."
        />
        <meta
          name="keywords"
          content="boss-dashboard, team calendar, scheduling software, task calendar, project deadlines, meeting planner, Karyaup"
        />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="Boss Dashboard | Karyaup" />
        <meta
          property="og:description"
          content="Organize tasks, events, and deadlines with a powerful team calendar."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://karyaup.com/features/boss-dashboard"
        />
        <meta property="og:site_name" content="Karyaup" />
        <link
          rel="canonical"
          href="https://karyaup.com/features/boss-dashboard"
        />
      </Helmet>
      {/* Hero Section */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm mb-4">
              BOSS DASHBOARD — GLOBAL WORKSPACE STATUS
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05] mb-1 text-balance max-w-xl sm:max-w-2xl mx-auto lg:mx-0"
            >
              <span className="text-slate-900">{"Control\u00A0Your Business "}</span>
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                in One Powerful View.
              </motion.span>
            </motion.h1>
            <div className="mt-5 space-y-3 max-w-lg w-full">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium">
                  KaryaUp adapts to any workflow, eliminates busywork keeps
                  everything.
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3 max-w-lg w-full">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium">
                  organized with enterprise grade AI execution.
                </p>
              </div>
            </div>
            {/* <p className="text-lg text-slate-600 mb-5 max-w-xl mx-auto lg:mx-0 font-medium">
              KaryaUp adapts to any workflow, eliminates busywork keeps everything organized with enterprise grade AI execution.
            </p> */}
            <FeatureStack
              items={[
                {
                  label: "Intelligent Routing",
                  icon: BrainCircuit,
                  color: "purple",
                },

                { label: "Global-Search", icon: Search, color: "blue" },
                {
                  label: "Enterprise Security",
                  icon: ShieldCheck,
                  color: "emerald",
                },
              ]}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.18,
            }}
            className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24"
          >
            <div className="relative overflow-hidden rounded-[12px] shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white mt-[-10px] lg:mt-[-5px]">
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
      <section className="py-8 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-2xl min-[420px]:text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.06] sm:leading-[1.1] tracking-normal mb-8 lg:mb-12 text-balance max-w-[min(100%,40rem)] mx-auto px-2"
          >
            <span className="text-slate-900">{"Boss\u00A0Dashboard "}</span>
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
                  {/* Centered spinning logo */}
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
              Built for leaders
            </span>
            <h2 className="mt-4 text-center text-2xl min-[420px]:text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.06] sm:leading-[1.1] tracking-normal text-balance max-w-[min(100%,40rem)] mx-auto px-2">
              <span className="text-slate-900">{"Command that stays "}</span>
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                ahead of the work
              </motion.span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              KaryaUp gives executives and managers a calm, live picture of the business — so you steer from signal, not noise.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {bossTiltPillars.map((item, i) => (
              <CollabTiltCard key={item.title} item={item} delay={i * 0.06} />
            ))}
          </div>
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
