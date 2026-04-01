import { useRef, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";
import karyaupLogo from "../../assets/3D-Logo.webp";
import FeatureCTA from "../../components/FeatureCTA";
import FeatureStack from "../../components/FeatureStack";

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
function Card({ data, type }) {
  const isRed = type === "red";
  return (
    <div className="relative group overflow-hidden rounded-xl w-full">
      <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-xl p-3 flex items-start gap-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${isRed ? "bg-red-500/20 border-red-500/50 text-red-600" : "bg-green-500/20 border-green-500/50 text-green-600"
          }`}>
          {isRed ? <XIcon /> : <CheckIcon />}
        </div>
        <div className="flex-1 min-w-0 text-left">
          <div className="text-[13px] font-bold text-slate-900 truncate">{data.title}</div>
          <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1.5 font-medium">
            <span>{data.time}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="flex items-center gap-1"><ListIcon /> {data.tag}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScrollTrack({ cards, direction }) {
  const trackRef = useRef(null);
  const posRef = useRef(direction === "up" ? -20 : 0);
  const doubled = useMemo(() => [...cards, ...cards], [cards]);

  useEffect(() => {
    const speed = 0.035;
    const animate = () => {
      if (direction === "down") {
        posRef.current -= speed;
        if (posRef.current <= -20) posRef.current = 0;
      } else {
        posRef.current += speed;
        if (posRef.current >= 0) posRef.current = -20;
      }
      if (trackRef.current) trackRef.current.style.transform = `translateY(${posRef.current}%)`;
      requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [direction, cards]);

  return (
    <div className="h-[280px] overflow-hidden relative">
      <div className="relative h-full" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}>
        <div ref={trackRef} className="flex flex-col gap-3 py-2 will-change-transform">
          {doubled.map((card, i) => <Card key={i} data={card} type={direction === "down" ? "red" : "green"} />)}
        </div>
      </div>
    </div>
  );
}

function WatermarkBg({ isHovered }) {
  const brandRow = "karyaup ".repeat(25);
  const rows = Array(15).fill(brandRow);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex flex-col justify-center select-none z-10">
      <div className={`transition-all duration-700 ease-in-out ${isHovered ? 'opacity-20' : 'opacity-[0.05]'}`}>
        {rows.map((row, i) => (
          <motion.div
            key={i}
            className="text-[18px] font-black text-slate-400 whitespace-nowrap leading-tight tracking-widest lowercase py-1"
            animate={{ x: [0, -300] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.1
            }}
          >
            {row}
          </motion.div>
        ))}
      </div>
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

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-6 flex items-center justify-between text-left group">
        <span className="text-lg font-bold text-slate-800 group-hover:text-fuchsia-600 transition-colors">{question}</span>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-2xl text-slate-400">+</motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="pb-6 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ═══════════════════════════════════════════════
    MAIN PAGE EXPORT
═══════════════════════════════════════════════ */
export default function ProfitTracking() {
  const [isShieldHovered, setIsShieldHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden pt-14 sm:pt-16 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
      {/* Hero Section */}
      <section className="relative pt-2 lg:pt-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">

            {/* Left */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] sm:text-xs font-black uppercase tracking-widest"
              >
                Platform <span className="opacity-60">/</span> Profit Tracking
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]"
              >
                Control Your Margins.
                <span className="block">
                  {" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Master Your Growth
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
                  "Stop leaking revenue with automated, real-time profitability views.",
                  "See your team's project expenses and margins at a glance—no more spreadsheet chaos."
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 text-left">
                    <div className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#7e22ce] stroke-[4]" />
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </motion.div>

              <FeatureStack items={["P&L Dashboard", "Expense Tracking", "Margin Alerts", "Revenue Reports"]} />
            </div>

            {/* Right – Image */}
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24 lg:-translate-y-8 xl:-translate-y-12"
            >
              <div className="relative overflow-hidden shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white">
                <img
                  src={dashboardImage}
                  alt="KaryaUp profit tracking dashboard"
                  className="w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[380px] xl:h-[350px] object-cover object-left-top bg-white transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="py-8 bg-white px-4 md:px-3">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: isMobile ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4"
          >
            Profit Tracking
            <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Is Broken, We Fixed It
            </motion.span>
          </motion.h1>

          <div className="p-[1px] rounded-[2.5rem] bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-400 shadow-2xl">
            <div className="bg-white rounded-[2.4rem] overflow-hidden grid grid-cols-1 md:grid-cols-3 min-h-[420px]">

              {/* LEFT: OLD WAY */}
              <div className="p-8 border-r border-slate-100 flex flex-col justify-start bg-slate-50/30 relative z-20">
                <h3 className="text-center text-2xl font-black mb-1 text-slate-900">Old Way</h3>
                <p className="text-[12px] text-center text-slate-500 mb-6 font-medium">Manual updates cause friction.</p>
                <ScrollTrack cards={redCards} direction="down" />
              </div>

              {/* MIDDLE: INTERACTIVE CENTER */}
              <div
                className="relative flex flex-col items-center justify-start py-8 px-6 group overflow-hidden bg-slate-100/40"
                onMouseEnter={() => setIsShieldHovered(true)}
                onMouseLeave={() => setIsShieldHovered(false)}
              >
                {/* Moving Watermark Background */}
                <WatermarkBg isHovered={isShieldHovered} />

                {/* Header Text */}
                <div className="relative z-40 text-center mb-4">
                  <motion.h3
                    animate={{ color: isShieldHovered ? "#d946ef" : "#0f172a" }}
                    className="text-lg font-extrabold transition-colors duration-500"
                  >
                    Security you can Trust
                  </motion.h3>
                  <motion.p
                    animate={{ color: isShieldHovered ? "#8b5cf6" : "#64748b" }}
                    className="text-[10px] font-bold mt-0.5 uppercase tracking-wider transition-colors duration-500"
                  >
                    More secure than AI alone.
                  </motion.p>
                </div>

                {/* COMPACT SHARED CONTAINER */}
                <div className="relative z-20 flex items-center justify-center w-full h-64" style={{ perspective: "1000px" }}>

                  {/* Shield Layer */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-500 group-hover:scale-105">
                    <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-50 h-59 drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
                      <defs>
                        <linearGradient id="glassBorder" x1="100" y1="10" x2="100" y2="208" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#94a3b8" stopOpacity="0.4" />
                          <stop offset="0.5" stopColor="white" stopOpacity="0.6" />
                          <stop offset="1" stopColor="#64748b" stopOpacity="0.4" />
                        </linearGradient>
                      </defs>
                      <path d="M100 10 L182 42 L182 108 C182 154 146 190 100 208 C54 190 18 154 18 108 L18 42 Z" fill="white" fillOpacity="0.02" stroke="url(#glassBorder)" strokeOpacity="0.5" strokeWidth="1.5" />
                    </svg>
                  </div>

                  {/* Logo Layer */}
                  <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                    <motion.img
                      src={karyaupLogo}
                      alt="Logo"
                      animate={{
                        rotateY: 360,
                        scale: isShieldHovered ? 1.15 : 1.05,
                        filter: isShieldHovered ? "drop-shadow(0 0 25px rgba(217, 70, 239, 0.4))" : "none"
                      }}
                      transition={{
                        rotateY: { duration: 12, ease: "linear", repeat: Infinity },
                        scale: { duration: 0.4 }
                      }}
                      className="w-60 h-60 object-contain pb-8"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT: KARYAUP WAY */}
              <div className="p-8 border-l border-slate-100 flex flex-col justify-start bg-slate-50/30 relative z-20">
                <h3 className="text-center text-2xl font-black mb-1 text-slate-900">The KaryaUp Way</h3>
                <p className="text-[12px] text-center text-slate-500 mb-6 font-medium">Advanced execution loops for growth.</p>
                <ScrollTrack cards={greenCards} direction="up" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem question="How secure is my data?" answer="We use enterprise-grade AES-256 encryption. Your financial data is isolated and never used to train public AI models." />
            <FAQItem question="Can I track per-project profitability?" answer="Yes! KaryaUp breaks down margins for every task, project, and team member in real-time." />
            <FAQItem question="Does it integrate with my accounting software?" answer="Absolutely. KaryaUp syncs with 50+ tools including QuickBooks, Xero, and Slack." />
          </div>
        </div>
      </section>

      <FeatureCTA
        title="Revenue that connects to your workflow"
        description="Stop jumping between apps. See your profits right where you manage your tasks and teams."
        image={dashboardImage}
        containerClassName="mt-10 mb-20"
      />
    </div>
  );
}