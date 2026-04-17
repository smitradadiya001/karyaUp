import { Helmet } from "react-helmet-async";
import { useRef, useEffect, useState, useMemo, isStackOpen } from "react";
import { motion, AnimatePresence, useMotionValue, useAnimationFrame } from "framer-motion";
import {
  Check, BrainCircuit, Zap, Search, ShieldCheck, X, MessagesSquare, Eye
} from "lucide-react";
import FeatureCTA from "../../components/FeatureCTA";
import FeatureStack from "../../components/FeatureStack";
import { lazy, Suspense } from "react";
import dashboardImage from "../../assets/dashboard2.webp";

import slackLogo from "../../assets/slack.svg";
import gmailLogo from "../../assets/gmail.svg";
import googleDriveLogo from "../../assets/google-drive.svg";
import googleCalendarLogo from "../../assets/google-calendar.svg";
// microsoftteamLogo PNG removed — replaced with inline SVG (no white background)
import karyaupLogo from "../../assets/logo-svg.svg";

const SpinningLogo3D = lazy(() => import("../../components/SpinningLogo3D"));

const MsTeamsLogoSVG = ({ size = 40 }) => (
  <svg
    xmlns="https://th.bing.com/th/id/OIP.v6GYa9pPZGSaDDimKXqkCwHaHa?w=178&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
    viewBox="0 0 48 48" // Keep viewBoxconsistent
    width={size}
    height={size}
    className="translate-y-[1px]" // Micro-nudge down for perfect visual center
  >
    {/* Back person — Moved Up */}
    <circle cx="32" cy="11" r="5" fill="#5059C9" />
    <path
      d="M40 21H24.5A2.5 2.5 0 0 0 22 23.5V35a9 9 0 0 0 18 0V23.5A2.5 2.5 0 0 0 40 21z"
      fill="#5059C9"
    />
    {/* Front person — Moved Up */}
    <circle cx="21" cy="9.5" r="5.5" fill="#7B83EB" />
    <path
      d="M27.5 19h-17A2.5 2.5 0 0 0 8 21.5V33a8 8 0 0 0 16 0V21.5A2.5 2.5 0 0 0 27.5 19z"
      fill="#7B83EB"
    />
    {/* White lines inside chat icon */}
    <rect x="14" y="29" width="10" height="1.4" rx="0.7" fill="white" opacity="0.9" />
    <rect x="14" y="32.5" width="9" height="1.4" rx="0.7" fill="white" opacity="0.9" />
    <rect x="14" y="36" width="10" height="1.4" rx="0.7" fill="white" opacity="0.9" />
  </svg>
);

/* ═══════════════════════════════════════════════
   OTHER SVG LOGOS (unchanged)
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
   TILT CARD
   logoSrc  — for img-based logos (Slack, Gmail, Drive, Calendar)
   logoNode — for inline SVG/JSX (MS Teams)
═══════════════════════════════════════════════ */
function TiltCard({ logoSrc, logoNode, name, glowColor, delay = 0 }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    setTilt({ x: dy * -14, y: dx * 14 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: "900px" }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
        animate={{ rotateX: tilt.x, rotateY: tilt.y, scale: hovered ? 1.07 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        style={{ transformStyle: "preserve-3d", cursor: "pointer" }}
      >
        <div style={{
          width: 160, height: 180, borderRadius: 24,
          background: "#fff",
          border: "1.5px solid rgba(0,0,0,0.07)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 16,
          position: "relative", overflow: "hidden",
          boxShadow: hovered
            ? `0 24px 48px ${glowColor || "rgba(0,0,0,0.15)"}, 0 0 0 1.5px rgba(255,255,255,0.6) inset`
            : "0 4px 20px rgba(0,0,0,0.06)",
          transition: "box-shadow 0.3s ease",
        }}>
          {/* Shine */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "50%",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)",
            borderRadius: "24px 24px 0 0", pointerEvents: "none",
          }} />
          {/* Glow */}
          {hovered && (
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              width: 120, height: 120,
              background: glowColor || "rgba(124,58,237,0.1)",
              borderRadius: "50%", filter: "blur(30px)", pointerEvents: "none",
            }} />
          )}
          {/* Logo */}
          <div style={{ position: "relative", zIndex: 1, transform: "translateZ(20px)" }}>
            {logoNode ? logoNode : (
              <img
                src={logoSrc}
                alt={`${name} logo`}
                style={{ width: 48, height: 48, objectFit: "contain" }}
                loading="lazy"
              />
            )}
          </div>
          <span style={{
            fontSize: 12, fontWeight: 800, letterSpacing: "0.10em",
            textTransform: "uppercase", color: "#374151",
            position: "relative", zIndex: 1, transform: "translateZ(12px)",
          }}>
            {name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   INTEGRATIONS LIST
   MS Teams uses logoNode instead of logoSrc
═══════════════════════════════════════════════ */
const integrations = [
  { logoSrc: slackLogo, name: "Slack", glowColor: "rgba(234, 118, 236, 0.15)" },
  { logoSrc: gmailLogo, name: "Gmail", glowColor: "rgba(234, 118, 236, 0.15)" },
  { logoSrc: googleDriveLogo, name: "Drive", glowColor: "rgba(234, 118, 236, 0.15)" },
  { logoSrc: googleCalendarLogo, name: "Calendar", glowColor: "rgba(234, 118, 236, 0.15)" },
  {
    logoNode: <MsTeamsLogoSVG size={59} />,  // ← inline SVG, no white bg, size=72
    name: "MS Team",
    glowColor: "rgba(225, 105, 213, 0.2)",
  },
];

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
   MAIN PAGE
═══════════════════════════════════════════════ */
export default function TeamCollaboration() {

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


  const DEFAULT_ICON_MAP = {
    "INSTANT CHAT": { icon: Zap, color: "#4c1d95" },
    "UNIVERSAL FIND": { icon: Search, color: "#4c1d95" },
    "SMART ASSIGN": { icon: ShieldCheck, color: "#4c1d95" },
  }

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Team Collaboration | Karyaup</title>
        <meta name="description" content="Transform your workflow with Karyaup's AI-driven project management." />
        <meta name="keywords" content="AI project management, profit intelligence, autonomous workflows, sprint planning, Karyaup AI" />
        <meta property="og:title" content="AI Project Management & Profit Intelligence | Karyaup" />
        <meta property="og:url" content="https://karyaup.com/platform/project-management" />
        <link rel="canonical" href="https://karyaup.com/platform/project-management" />
      </Helmet>

      {/* HERO */}

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
                className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[9px] font-black uppercase tracking-[0.2em] shadow-sm mb-2 sm:mb-4"
              >
                Team Collaboration - One Team, One Goal
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                // className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
                className="text-3xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1"
              >
                Smarter Collaboration
                <span className="block">

                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Powered by AI
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
                  { text: " Stop context-switching.", icon: Check },
                  { text: "From real‑time chat to intelligent task coordination.", icon: Check }

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
                  {
                    label: "INSTANT CHAT",
                    icon: Zap,
                    iconColor: "#7e22ce",
                  },
                  { label: "UNIVERSAL FIND", icon: Zap, iconColor: "#d946ef" },
                  { label: "SMART ASSIGN", icon: ShieldCheck, iconColor: "#7e22ce" },
                ]}
              />
              {/* <FeatureStack
              items={[
              
                { label: "INSTANT CHAT", icon: Zap, color: "fuchsia" },
                { label: "UNIVERSAL FIND", icon: Search, color: "purple" },
                { label: "SMART ASSIGN", icon: ShieldCheck, color: "fuchsia" }
              ]}
            /> */}
            </div>
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24"
            >
              <div className="pt-6   relative w-full max-w-[540px] mx-auto lg:max-w-none overflow-hidden rounded-[10px]">
                <img
                  src={dashboardImage}
                  alt="Dashboard"
                  className="w-full h-auto rounded-[10px] shadow-2xl"
                />
              </div>
            </motion.div>
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

      {/* INTEGRATION GRID */}
      <section style={{ padding: "100px 60px 20px", background: "white", textAlign: "center", overflow: "hidden" }}>
      <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-2xl min-[420px]:text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.06] sm:leading-[1.1] tracking-normal mb-8 lg:mb-12 text-balance max-w-[min(100%,40rem)] mx-auto px-2"
          >
            <span className="text-slate-900">{"Connect\u00A0with  your"}</span>
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              {" "}Entire Stack
            </motion.span>
          </motion.h2>
          {/* <p style={{ marginTop: 1, fontSize: 13, color: "#64748b", fontWeight: 500, maxWidth: 480, margin: "20px auto 0", lineHeight: 1.2 }}>
            Plug KaryaUp into the tools your team
            <br />
            already loves no migration needed.
          </p> */}

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20, maxWidth: 920, margin: "0 auto 40px" }}>
          {integrations.map((tool, i) => (
            <TiltCard
              key={tool.name}
              logoSrc={tool.logoSrc}
              logoNode={tool.logoNode}
              name={tool.name}
              glowColor={tool.glowColor}
              delay={i * 0.06}
            />
          ))}
        </div>
      </section>

      <FeatureCTA
        title={<>Collaboration that scales</>}
        description="Empower your team with a platform designed for the speed of modern business."
        image={dashboardImage}
      />
    </div>
  );
}