                                                                                                      import { useRef, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.png";
import planImage from "../../assets/Gantt.png";
import karyaupLogo from "../../assets/Logo(2).png"; 
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
function Card({ data, type }) {
  const isRed = type === "red";
  return (
    <div className="relative group overflow-hidden rounded-xl w-full">
      <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-xl p-3 flex items-start gap-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
          isRed ? "bg-red-500/20 border-red-500/50 text-red-600" : "bg-green-500/20 border-green-500/50 text-green-600"
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
  const posRef = useRef(direction === "up" ? -50 : 0);
  const doubled = useMemo(() => [...cards, ...cards], [cards]);

  useEffect(() => {
    const speed = 0.035;
    const animate = () => {
      if (direction === "down") {
        posRef.current -= speed;
        if (posRef.current <= -25) posRef.current = 0;
      } else {
        posRef.current += speed;
        if (posRef.current >= 0) posRef.current = -50;
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

function ScrollingDataBg({ isHovered }) {
  const text = "1=2-LwuS0AkLC6Vvj|hq5tCReRo6%bcvnvjddjru4ndjenck4ndkvk4kdkvs57g57rh]fu8474ghfh44yfdjee3wwkxncfuregdy74hdncnrs3loxmen4jdjcfvmnvsdjfsw8sdjidw8didwd8cd0edjcdc9dv{fgH$#6(XiK^!8W3jLlZ2th%q2IYMb<5*P4AhV8oIMq7@Pw47Wf#40-zX@qj(2b5KgK840SXQfFTq6ce3R#k$8wujFFHU8t9%FUDBg>ej|ABYK6)3i^fzSh(0*X4BYRNOea)nsVUCYnV}MHe|+uCHdW&P$zL|+ssBNgZGMY<}]eYYV]T7j]B*4%&=GLmabFcv|]F9Z$/pRvN}O!3MY8k@FT";
  const repeated = Array(15).fill(text).join(' ');

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none px-4">
      <div 
        className={`text-[10px] leading-relaxed break-all transition-all duration-700 
        ${isHovered 
            ? 'text-slate-900 font-semibold opacity-40 animate-[vScroll_10s_linear_infinite]' 
            : 'text-slate-400 font-normal opacity-[0.07] animate-[vScroll_45s_linear_infinite]'}`}
      >
        <p>{repeated}</p>
        <p>{repeated}</p>
      </div>
    </div>
  );
}

const LightShield3D = () => (
  <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-56 h-64 md:w-64 md:h-72">
    <defs>
      <linearGradient id="glassBorderGradient" x1="100" y1="10" x2="100" y2="208" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F472B6" stopOpacity="0.4" />
        <stop offset="0.5" stopColor="white" stopOpacity="0.6" />
        <stop offset="1" stopColor="#A855F7" stopOpacity="0.4" />
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
export default function BossDashboard() {
  const [isShieldHovered, setIsShieldHovered] = useState(false);

  const redCards = [
    { title: "Projects scattered across multiple tools", time: "8:06:41 PM", tag: "Bug Fixes" },
    { title: "Critical info hidden in siloed systems", time: "8:12:45 PM", tag: "New task" },
    { title: "Manual updates strain capacity", time: "7:55:10 PM", tag: "Data Sync" },
    { title: "Missed deadlines cause bottlenecks", time: "7:40:03 PM", tag: "Security" },
    { title: "Rate limit exceeded", time: "7:20:50 PM", tag: "API" },
  ];

  const greenCards = [
    { title: "All projects, docs, and chat in one platform", time: "8:05:28 PM", tag: "Data Sync" },
    { title: "Instantly find anything across all tools", time: "8:04:15 PM", tag: "Weekly Stats" },
    { title: "Automated reporting & resource management", time: "7:58:00 PM", tag: "Production" },
    { title: "Backup finished", time: "7:45:22 PM", tag: "Storage" },
    { title: "AI-powered workflows for tasks & timelines", time: "7:30:11 PM", tag: "Users" },
    { title: "Cache cleared successfully", time: "7:18:40 PM", tag: "Performance" },
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes vScroll { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        @keyframes shine { from { left: -100%; } to { left: 100%; } }
      `}} />

      {/* Hero Section */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 40, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
              >
                Total Control. Complete visibility.
                <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Smarter Decisions.
                </motion.span>
              </motion.h1>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              KaryaUp's Boss Dashboard gives you a real-time overview of your entire business—from team performance and project progress to time tracking and productivity insights.
            </p>
          </div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img src={dashboardImage} alt="Boss Dashboard" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="py-10 bg-white px-2 md:px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h1
                initial={{ opacity: 0, y: 40, x: -10 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 25, stiffness: 100 }}
                className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-12 drop-shadow-sm"
              >
                 Project Management<br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                    is broken, we fixed it
                </motion.span>
              </motion.h1>

          <div className="p-[2px] rounded-[2.5rem] bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 shadow-2xl">
            <div className="bg-slate-50 rounded-[2.4rem] overflow-hidden grid grid-cols-1 md:grid-cols-3 min-h-[450px]">
              
              {/* Left Column (Red) */}
              <div className="p-8 border-r border-slate-200 flex flex-col justify-center bg-white/50 relative z-10">
                <h3 className="text-center text-2xl font-black mb-2 text-slate-900">Old Way</h3>
                <p className="text-sm text-center text-slate-500 mb-8">Manual updates and scattered tools cause friction.</p>
                <ScrollTrack cards={redCards} direction="down" />
              </div>

              {/* MIDDLE SECTION (Security/Shield) - UPDATED WITHOUT BLUR BOX */}
              <div 
                className="relative flex flex-col items-center justify-start py-16 px-8 group overflow-hidden bg-white/50"
                onMouseEnter={() => setIsShieldHovered(true)}
                onMouseLeave={() => setIsShieldHovered(false)}
              >
                <div className="relative z-40 text-center mb-6">
                  <h3 className="text-2xl font-black text-slate-900">Security you can Trust</h3>
                  <p className="text-sm text-slate-500 mt-2">More secure than using AI directly.</p>
                </div>

                {/* Animated Background Text */}
                <ScrollingDataBg isHovered={isShieldHovered} />

                {/* Shield & Logo Layered Directly on Background */}
                <motion.div 
                  className="relative z-20 flex items-center justify-center mt-2"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Shield (No backdrop blur container) */}
                  <div className="relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                    <LightShield3D />
                  </div>
                  
                  {/* Rotating Logo */}
                  <div className="absolute inset-0 flex items-center justify-center pb-6 z-30 pointer-events-none" style={{ perspective: "1000px" }}>
                    <motion.img 
                      src={karyaupLogo} 
                      alt="Logo" 
                      animate={{ rotateY: 360, scale: isShieldHovered ? 1.1 : 1 }} 
                      transition={{ 
                        rotateY: { duration: 8, ease: "linear", repeat: Infinity },
                        scale: { duration: 0.4 }
                      }} 
                      className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_15px_35px_rgba(168,85,247,0.6)]" 
                      style={{ transformStyle: "preserve-3d" }} 
                    />
                  </div>
                </motion.div>

                {/* Visual Glow Anchor */}
                <div className="absolute -bottom-10 w-48 h-48 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
              </div>

              {/* Right Column (Green) */}
              <div className="p-8 border-l border-slate-200 flex flex-col justify-center bg-white/50 relative z-10">
                <h3 className="text-center text-2xl font-black mb-2 text-slate-900">The KaryaUp Way</h3>
                <p className="text-sm text-center text-slate-500 mb-8">Advanced execution loops for smarter growth.</p>
                <ScrollTrack cards={greenCards} direction="up" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* NEW: FAQ SECTION */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem question="How secure is my data?" answer="We use enterprise-grade AES-256 encryption. Your data is isolated and never used to train public AI models." />
            <FAQItem question="Can I integrate my existing tools?" answer="Yes! KaryaUp integrates with 50+ tools like Slack, Google Drive, and Jira out of the box." />
            <FAQItem question="Is there a mobile app?" answer="Absolutely. Our dashboard is fully responsive and available as a native app for iOS and Android." />
          </div>
        </div>
      </section>

      {/* Feature CTA */}
      <FeatureCTA 
        title="Tasks that connect to everything you do" 
        description="Work smarter with tasks that can live in your whiteboards, chat, calendar — anywhere you work" 
        image={dashboardImage} 
        containerClassName="mt-10 mb-20" 
      />
    </div>
  );
}