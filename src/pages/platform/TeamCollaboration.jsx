import { Helmet } from "react-helmet-async";
import { useRef, useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useAnimationFrame } from "framer-motion";
import {
  Check,
  Zap,
  Search,
  ShieldCheck,
  X,
  Users,
  MessagesSquare,
  BellRing,
  Share2,
  ListChecks,
} from "lucide-react";
import FeatureCTA from "../../components/FeatureCTA";
import { lazy, Suspense } from "react";
import dashboardImage from "../../assets/Team.webp";

import FeatureStack from "../../components/FeatureStack";
import CollabTiltCard from "../../components/CollabTiltCard";

const SpinningLogo3D = lazy(() => import("../../components/SpinningLogo3D"));

const LightShield3D = () => (
  <svg viewBox="0 0 200 220" fill="none" className="w-full h-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)]">
    <defs>
      <linearGradient id="glassBorderGradient" x1="100" y1="10" x2="100" y2="208" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F472B6" stopOpacity="0.4" />
        <stop offset="0.5" stopColor="white" stopOpacity="0.6" />
        <stop offset="1" stopColor="#A855F7" stopOpacity="0.4" />
      </linearGradient>
    </defs>
    <path d="M100 10 L182 42 L182 108 C182 154 146 190 100 208 C54 190 18 154 18 108 L18 42 Z"
      fill="white" fillOpacity="0.03" stroke="url(#glassBorderGradient)" strokeOpacity="0.6" strokeWidth="2" />
  </svg>
);

const collabPillars = [
  {
    icon: Users,
    title: "Roles & ownership",
    desc: "Every project and task has clear owners so accountability never gets lost in the group chat.",
    color: "purple",
  },
  {
    icon: MessagesSquare,
    title: "Context where you work",
    desc: "Discuss work next to tasks and projects — no more screenshots and “did you see my message?” loops.",
    color: "fuchsia",
  },
  {
    icon: ListChecks,
    title: "Aligned priorities",
    desc: "See what matters this week across the team, with priorities and deadlines everyone can trust.",
    color: "purple",
  },
  {
    icon: BellRing,
    title: "Stay in the loop",
    desc: "Mentions, updates, and notifications keep people informed without drowning them in noise.",
    color: "fuchsia",
  },
  {
    icon: Share2,
    title: "Share progress, not files",
    desc: "Status and outcomes live in one workspace so stakeholders get the picture without extra meetings.",
    color: "purple",
  },
  {
    icon: ShieldCheck,
    title: "Safe collaboration",
    desc: "Work together with confidence — permissions and visibility match how your org actually operates.",
    color: "fuchsia",
  },
];

const MarqueeRow = ({ text, direction, isShieldHovered }) => {
  const isLeft = direction === "left";
  return (
    <motion.div
      initial={{ x: isLeft ? 0 : -1000 }}
      animate={{ x: isLeft ? -1000 : 0 }}
      transition={{ duration: isShieldHovered ? 15 : 40, repeat: Infinity, ease: "linear" }}
      className="whitespace-nowrap text-purple-700 font-black text-2xl select-none tracking-tighter flex gap-10 leading-none"
    >
      {Array(9).fill(null).map((_, i) => (
        <span key={i}>{text}  </span>
      ))}
    </motion.div>
  );
};

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
            Owner: <span className="text-slate-700">{data.owner || "Rahul"}</span>
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

function ScrollingDataBg({ isShieldHovered }) {
  return (
    <div className={`absolute inset-0 pointer-events-none transition-all duration-1000 flex flex-col justify-center gap-20 overflow-hidden ${isShieldHovered ? "opacity-30" : "opacity-[0.05]"}`}>
      <MarqueeRow text="Plan the Karya" direction="right" isShieldHovered={isShieldHovered} />
      <MarqueeRow text="Move the Karya" direction="left" isShieldHovered={isShieldHovered} />
      <MarqueeRow text="Complete the Karya" direction="right" isShieldHovered={isShieldHovered} />
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════ */
export default function TeamCollaboration() {
  const [isMobile, setIsMobile] = useState(false);
  const [isShieldHovered, setIsShieldHovered] = useState(false);

  const redCards = [
    { title: "Projects scattered across tools", owner: "Rahul", due: "Wed", pr: "High" },
    { title: "Critical info hidden in silos", owner: "Sneha", due: "Fri", pr: "High" },
    { title: "Manual updates strain capacity", owner: "Aisha", due: "Mon", pr: "Normal" },
    { title: "Missed deadlines & bottlenecks", owner: "Rahul", due: "Thu", pr: "High" },
  ];
  const greenCards = [
    { title: "Unified platform hub", owner: "Agent", due: "Now", pr: "Normal" },
    { title: "Instant global search", owner: "Agent", due: "Now", pr: "Normal" },
    { title: "Automated report generation", owner: "Agent", due: "Now", pr: "Normal" },
    { title: "AI-powered timeline tracking", owner: "Agent", due: "Now", pr: "Normal" },
  ];

  const DEFAULT_ICON_MAP = {
    "INSTANT CHAT": { icon: Zap, color: "#4c1d95" },
    "UNIVERSAL FIND": { icon: Search, color: "#4c1d95" },
    "SMART ASSIGN": { icon: ShieldCheck, color: "#4c1d95" },
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
        <title>Team Collaboration | Karyaup</title>
        <meta name="description" content="Collaborate in one workspace with KaryaUp — chat, tasks, and visibility built for teams." />
        <meta name="keywords" content="team collaboration, workspace, KaryaUp, task coordination, team visibility" />
        <meta property="og:title" content="Team Collaboration | KaryaUp" />
        <meta property="og:url" content="https://karyaup.com/platform/team-collaboration" />
        <link rel="canonical" href="https://karyaup.com/platform/team-collaboration" />
      </Helmet>

      {/* HERO */}
      <section className="relative pt-30 pb-20 px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm mb-4"
              >
                TEAM COLLABORATION — ONE TEAM, ONE GOAL
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="mt-2 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05] text-balance max-w-xl sm:max-w-2xl mx-auto lg:mx-0"
              >
                <span className="text-slate-900">{"Smarter\u00A0Collaboration "}</span>
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Powered By AI
                </motion.span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="mt-5 sm:mt-3 space-y-3 sm:space-y-4 max-w-lg w-full"
              >
                <div className="flex items-start gap-3 text-left">
                  <div className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#7e22ce] stroke-[4]" />
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                    Stop context-switching.
                  </p>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <div className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#7e22ce] stroke-[4]" />
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                    From real‑time chat to intelligent task coordination.
                  </p>
                </div>
              </motion.div>
              <FeatureStack
                items={[

                  { label: "INSTANT CHAT", icon: Zap, color: "fuchsia" },
                  { label: "UNIVERSAL FIND", icon: Search, color: "purple" },
                  { label: "SMART ASSIGN", icon: ShieldCheck, color: "fuchsia" }
                ]}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24"
            >
              <div className="relative overflow-hidden rounded-[12px] border border-slate-200/80 shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white mt-[-30px] lg:mt-[-10px]">
                <img
                  src={dashboardImage}
                  alt="KaryaUp team collaboration"
                  className="w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[380px] xl:h-[350px] object-cover object-left-top bg-white rounded-[10px] transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-8 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-2xl min-[420px]:text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.06] sm:leading-[1.1] tracking-normal mb-8 lg:mb-12 text-balance max-w-[min(100%,40rem)] mx-auto px-2"
          >
            <span className="text-slate-900">{"Team\u00A0Collaboration "}</span>
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
              <div className="pt-5 pb-3 lg:pt-8 lg:pb-4 border-r border-slate-200 bg-white/50">
                <h3 className="text-center text-[1.5rem] font-black mb-1">Old Way</h3>
                <p className="text-xs text-center text-slate-500 mb-3 lg:mb-6 font-medium">Manual updates and scattered tools.</p>
                <ScrollTrack cards={redCards} direction="down" />
              </div>
              <div
                className="relative flex flex-col items-center justify-start pt-5 pb-3 lg:pt-8 lg:pb-4 px-4 group overflow-hidden bg-white/40 min-h-[300px] lg:min-h-[380px]"
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
                  <div className="relative z-30 flex items-center justify-center w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                    <motion.div
                      animate={{ y: [0, -10, 0], scale: isShieldHovered ? 1.1 : 1 }}
                      transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 0.4 } }}
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
                          <SpinningLogo3D isHovered={isShieldHovered} className="w-full h-full object-contain" />
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
              <div className="pt-5 pb-3 lg:pt-8 lg:pb-4 border-l border-slate-200 bg-white/50">
                <h3 className="text-center text-2xl font-black mb-1">The KaryaUp Way</h3>
                <p className="text-xs text-center text-slate-500 mb-3 lg:mb-6 font-medium">Advanced execution loops for growth.</p>
                <ScrollTrack cards={greenCards} direction="up" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team collaboration — how you work together */}
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
              Built for teams
            </span>
            <h2 className="mt-4 text-center text-2xl min-[420px]:text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.06] sm:leading-[1.1] tracking-normal text-balance max-w-[min(100%,40rem)] mx-auto px-2">
              <span className="text-slate-900">{"Collaboration that stays "}</span>
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                on the work
              </motion.span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              KaryaUp keeps people aligned around tasks, projects, and decisions — so your team spends less time chasing updates and more time shipping.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {collabPillars.map((item, i) => (
              <CollabTiltCard key={item.title} item={item} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <FeatureCTA
        title="Collaboration that scales"
        description="Empower your team with a platform designed for the speed of modern business."
        image={dashboardImage}
      />
    </div>
  );
}