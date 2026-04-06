  import { useRef, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, XCircle, Check, Zap, Target, Search } from "lucide-react";
import dashboardImage from "../../assets/dashboard2.png";
import planImage from "../../assets/Gantt.webp";
import FeatureCTA from "../../components/FeatureCTA";
import karyaUpLogo from "../../assets/karyaup-logo.mp4";


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

export default function MarketingPage() {
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

  return (
    <div className="bg-white font-sans overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="pb-5 w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-17 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50/80 backdrop-blur-sm border border-purple-100 text-purple-600 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] shadow-sm mb-10"
            >
              MARKETING — STRATEGY TO EXECUTION
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              The everything app <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                for Marketing Teams
              </motion.span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Brainstorm, plan, and execute your team's marketing programs—from multi-channel campaigns to global events and more with KaryaUp.
            </p>
            <FeatureStack 
              items={[
                {label: "Campaign tracking", icon: Target},
                {label: "Global Search", icon: Search},
                {label: "Real Time Sync", icon: Zap}
              ]} 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img src={dashboardImage} alt="Dashboard" className="w-full h-full object-cover" />
            </div>
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
                  className="absolute -bottom-40 w-64 h-64 bg-white rounded-full blur-[100px] pointer-events-none"
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

      <section className="py-5 bg-white pt-5">
        <div className="max-w-7xl mx-auto px-3 lg:px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
                <img src={planImage} alt="Gantt Planning" className="w-full h-auto" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
                Visualize your<br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Marketing ROI
                </motion.span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Stop guessing which campaigns work. Align your budget with performance data using our built-in marketing analytics.
              </p>
              <ul className="space-y-4">
                {['Multi-channel Attribution', 'Real-time Budget Tracking', 'Customizable KPI Dashboards'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-800 justify-center lg:justify-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <FeatureCTA
        title={
          <>
            Tasks that connect to everything you do

          </>
        }
        description="Work Smater with tasks that can live in your whiteboaards,chat,calendar - anywhere you work"
        image={dashboardImage}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-10 mb-5"
        paddingClassName="p-3 lg:p-4 lg:py-8"
        imageClassName="w-full max-w-[940px]"
        imageOuterClassName="relative w-[108%] lg:w-full translate-x-2 lg:translate-x-8"
      />
    </div>
  );
}