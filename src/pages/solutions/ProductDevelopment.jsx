import { useRef, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, BrainCircuit, Zap, Search, ShieldCheck, Check } from "lucide-react"; // Recommended to add these icons
import dashboardImage from "../../assets/dashboard2.webp";
import karyaupLogo from "../../assets/karyaup-logo.mp4";
import FeatureCTA from "../../components/FeatureCTA";

/* ═══════════════════════════════════════════════
    ICONS & HELPERS
═══════════════════════════════════════════════ */
const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="3,9 7,13 13,5" /></svg>
);
const XIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="13" height="13"><line x1="4" y1="4" x2="12" y2="12" /><line x1="12" y1="4" x2="4" y2="12" /></svg>
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
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;   // -1 … 1
    const y = ((e.clientY - rect.top)  / rect.height) * 2 - 1;
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
        <div ref={trackRef} className="flex flex-col gap-2 py-2 will-change-transform">
          {doubled.map((card, i) => (
            <Card key={i} data={card} type={direction === "down" ? "red" : "green"} index={i % cards.length} />
          ))}
        </div>
      </div>
    </div>
  );
}

function WatermarkBg({ isHovered }) {
  const infinitePatternRow = "KaryaUp ".repeat(25);
  const rows = Array(14).fill(infinitePatternRow);

  return (
    <div className={`absolute inset-0 pointer-events-none transition-all duration-1000 flex flex-col justify-center gap-3 overflow-hidden ${isHovered ? "opacity-40" : "opacity-[0.08]"
      }`}>
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
    MAIN PAGE EXPORT
═══════════════════════════════════════════════ */
export default function ProfitTracking() {
  const [isShieldHovered, setIsShieldHovered] = useState(false);

  const redCards = [
    { title: "Manual spreadsheet updates", tag: "Finance" },
    { title: "Delayed profit visibility", tag: "Risk" },
    { title: "Inaccurate expense tracking", tag: "Accounting" },
    { title: "Missed revenue bottlenecks", tag: "Security" },
    { title: "Siloed financial reports", tag: "Data" },
  ];

  const greenCards = [
    { title: "Real-time P&L dashboard", tag: "Profit" },
    { title: "Automated expense allocation", tag: "Sync" },
    { title: "Unified financial data hub", tag: "Growth" },
    { title: "Secure encryption for billing", tag: "Storage" },
    { title: "AI-powered margin alerts", tag: "Users" },
    { title: "Instant resource analytics", tag: "Performance" },
  ];

  const aiFeatures = [
    { icon: <Sparkles className="w-5 h-5 text-purple-500" />, title: "Predictive Margins", desc: "AI forecasts future profitability based on current sprint velocity." },
    { icon: <BrainCircuit className="w-5 h-5 text-fuchsia-500" />, title: "Smart Allocation", desc: "Automatically maps expenses to specific projects using NLP." },
    { icon: <Search className="w-5 h-5 text-indigo-500" />, title: "Contextual Query", desc: "Ask 'Which project is over budget?' and get instant visual data." },
    { icon: <Zap className="w-5 h-5 text-amber-500" />, title: "Automated Standups", desc: "AI summarizes daily progress vs budget utilization for the team." }
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 md:py-25">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50/80 backdrop-blur-sm border border-purple-100 text-purple-600 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] shadow-sm mb-10"
            >
              PRODUCT — BUILD BETTER TOGETHER
            </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4"
              >
                Control your Margins.
                <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Master your Growth.
                </motion.span>
              </motion.h1>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl text-center lg:text-left">
              Stop leaking revenue. KaryaUp gives you an automated, real-time view of your team's profitability and project expenses.
            </p>
            <FeatureStack 
              items={[
                { label: "Predictive Margins", icon: Sparkles },
                { label: "Smart Allocation", icon: BrainCircuit },
                { label: "Contextual Query", icon: Search },
                { label: "Automated Standups", icon: Zap }
              ]} 
            />
          </div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img src={dashboardImage} alt="Profit Dashboard" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="py-3 bg-white px-2 md:px-3">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-12"
          >
            Profit Tracking
            <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              is broken, we fixed it
            </motion.span>
          </motion.h1>

          <div className="p-[2px] rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 shadow-2xl overflow-hidden mb-20">
            <div className="bg-slate-50 rounded-[1.4rem] md:rounded-[2.4rem] overflow-hidden grid grid-cols-1 md:grid-cols-3">

              {/* LEFT: OLD WAY */}
              <div className="p-4 md:p-3 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-start pt-10 md:pt-12 bg-white/50 order-1 relative z-20">
                <h3 className="text-center text-2xl font-black mb-1 text-slate-900">Old Way</h3>
                <p className="text-sm text-center text-slate-500 mb-6 font-medium">Manual updates and scattered tools.</p>
                <ScrollTrack cards={redCards} direction="down" />
              </div>

              {/* MIDDLE: 3D SHIELD & TEXT */}
              <div
                className="relative flex flex-col items-center justify-start py-10 md:py-12 px-4 group overflow-hidden bg-white/40 min-h-[450px] order-2"
                onMouseEnter={() => setIsShieldHovered(true)}
                onMouseLeave={() => setIsShieldHovered(false)}
              >
                <WatermarkBg isHovered={isShieldHovered} />

                <div className="relative z-40 text-center mb-10 pointer-events-none">
                  <h3 className={`text-xl md:text-2xl font-black transition-colors duration-500 ${isShieldHovered ? "text-purple-600" : "text-slate-900"}`}>
                    Security You Can Trust
                  </h3>
                  <p className={`text-[10px] mt-2 font-bold uppercase tracking-widest transition-colors duration-500 ${isShieldHovered ? "text-fuchsia-500" : "text-slate-500"}`}>
                    More secure than using AI directly.
                  </p>
                </div>

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
                        <img src={karyaupLogo} alt="Logo Front" className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(168,85,247,0.5)]" />
                      </div>

                      <div className="absolute inset-0" style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg) translateZ(1px)'
                      }}>
                        <img src={karyaupLogo} alt="Logo Back" className="w-full h-full object-contain opacity-80" />
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
              <div className="p-4 md:p-6 border-t md:border-t-0 md:border-l border-slate-200 flex flex-col justify-start pt-10 md:pt-12 bg-white/50 order-3 relative z-20">
                <h3 className="text-center text-2xl font-black mb-1 text-slate-900">The KaryaUp Way</h3>
                <p className="text-sm text-center text-slate-500 mb-6 font-medium">Advanced execution loops for growth.</p>
                <ScrollTrack cards={greenCards} direction="up" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW AI WORKSPACE SECTION */}
<section className="py-10 px-6 bg-white-50 relative overflow-hidden border-t border-slate-200">
  <div className="absolute top-0 right-0 w-1/3 h-full bg-white" />
  <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white" />

  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-purple-700 font-bold text-sm mb-6 shadow-sm border border-purple-100"
      >
        <Sparkles className="w-4 h-4" /> KaryaUp AI Workspace
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40, x: -10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
      >
        Task Management that<br />
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
        className="text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed"
      >
        Our AI doesn't just track your projects—it actively manages tasks to ensure every sprint operates at maximum margin. Delegate the busywork to the machine.
      </motion.p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
      {aiFeatures.map((feature, i) => (
        <TiltCard
          key={i}
          className="bg-white border border-slate-200 hover:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-default h-full transition-colors transition-shadow duration-300 group flex flex-col"
        >
          {/* HEADER: Icon and Title aligned side-by-side */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 shrink-0 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-50 group-hover:border-purple-100 transition-all duration-500">
              {feature.icon}
            </div>
            <h3 className="text-xl font-black text-slate-900 leading-tight">
              {feature.title}
            </h3>
          </div>

          {/* DESCRIPTION: Remains below */}
          <p className="text-slate-500 font-medium leading-relaxed text-sm">
            {feature.desc}
          </p>
        </TiltCard>
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