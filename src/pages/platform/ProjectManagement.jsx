                                                                                                          import { useRef, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.png";
import planImage from "../../assets/Gantt.png";
import karyaUpLogo from "../../assets/Logo(2).png";
import FeatureCTA from "../../components/FeatureCTA";

/* ═══════════════════════════════════════════════
   ICONS
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
   LIGHT 3D GLASS SHIELD (With Scanning Effect)
═══════════════════════════════════════════════ */
const LightShield3D = () => (
  <svg viewBox="0 0 200 220" fill="none" className="w-full h-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)]">
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
      {/* Laser Scan Gradient */}
      <linearGradient id="scanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="transparent" />
        <stop offset="50%" stopColor="#A855F7" stopOpacity="0.6" />
        <stop offset="100%" stopColor="transparent" />
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
    {/* Animated Scan Line */}
   
  </svg>
);

/* ═══════════════════════════════════════════════
   COMPONENTS
═══════════════════════════════════════════════ */
function Card({ data, type, index }) {
  const isRed = type === "red";
  return (
    <motion.div 
      initial={{ y: 0 }}
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: index * 0.4,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="relative group rounded-xl"
    >
      <div className={`backdrop-blur-md bg-white/40 border border-white/30 rounded-xl p-3 flex items-start gap-3 shrink-0 w-full shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:border-purple-400/50 group-hover:shadow-purple-200/50`}>
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
    </motion.div>
  );
}

function ScrollTrack({ cards, direction }) {
  const trackRef = useRef(null);
  const posRef = useRef(direction === "up" ? -50 : 0);
  const doubled = useMemo(() => [...cards, ...cards], [cards]);

  useEffect(() => {
    const speed = 0.045;
    const animate = () => {
      if (direction === "down") {
        posRef.current -= speed;
        if (posRef.current <= -50) posRef.current = 0;
      } else {
        posRef.current += speed;
        if (posRef.current >= 0) posRef.current = -50;
      }
      if (trackRef.current) trackRef.current.style.transform = `translateY(${posRef.current}%)`;
      requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [direction]);

  return (
    <div className="h-[300px] overflow-hidden relative">
      <div className="relative h-full" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}>
        <div ref={trackRef} className="flex flex-col gap-4 py-4 will-change-transform">
          {doubled.map((card, i) => (
            <Card key={i} data={card} type={direction === "down" ? "red" : "green"} index={i % cards.length} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ScrollingDataBg({ isHovered }) {
  const text = "1=2-LwuS0AkLC6Vvj|hq5tCReRo6%bcvnvjddjru4ndjenck4ndkvk4kdkvs57g57rh]fu8474ghfh44yfdjee3wwkxncfuregdy74hdncnrs3loxmen4jdjcfvmnvsdjfsw8sdjidw8didwd8cd0edjcdc9dv{fgH$#6(XiK^!8W3jLlZ2th%q2IYMb<5*P4AhV8oIMq7@Pw47Wf#40-zX@qj(2b5KgK840SXQfFTq6ce3R#k$8wujFFHU8t9%FUDBg>ej|ABYK6)3i^fzSh(0*X4BYRNOea)nsVUCYnV}MHe|+uCHdW&P$zL|+ssBNgZGMY<}]eYYV]T7j]B*4%&=GLmabFcv|]F9Z$/pRvN}O!3MY8k@FT";
  const repeated = Array(15).fill(text).join(' ');

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none px-4 transition-all duration-700 ${isHovered ? 'opacity-80' : 'opacity-[0.07]'}`}>
      <div className={`text-[10px] leading-relaxed text-slate-900 break-all ${isHovered ? 'animate-[vScroll_8s_linear_infinite]' : 'animate-[vScroll_45s_linear_infinite]'}`}>
        <p>{repeated}</p>
        <p>{repeated}</p>
      </div>
    </div>
  );
}

export default function ProjectManagement() {
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
      `}} />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              The world's most powerful & flexible
              <motion.span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]" animate={{ backgroundPosition: ["0% center", "-200% center"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                Project Management Software
              </motion.span>
            </motion.h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Manage your projects, docs, and chat in one place all powered by AI. KaryaUp adapts to any project, eliminates busywork, and keeps everything organized.
            </p>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <img src={dashboardImage} alt="Dashboard" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* Security Grid Section */}
      <section className="py-10 bg-white px-2">
        <div className="max-w-7xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
            Project Management <br />
            <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]" animate={{ backgroundPosition: ["0% center", "-200% center"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
              is broken, we fixed it
            </motion.span>
          </motion.h1>

          <div className="p-[2px] rounded-[2.5rem] bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 shadow-2xl mt-12 overflow-hidden">
            <div className="bg-slate-50 rounded-[2.4rem] overflow-hidden grid grid-cols-1 md:grid-cols-3 min-h-[500px]">
              
              {/* LEFT: OLD WAY */}
              <div className="p-6 border-r border-slate-200 flex flex-col justify-center bg-white/50">
                <h3 className="text-center text-2xl font-black mb-2 text-slate-900">Old Way</h3>
                <p className="text-sm text-center text-slate-500 mb-8">Manual updates and scattered tools cause friction.</p>
                <ScrollTrack cards={redCards} direction="down" />
              </div>

              {/* MIDDLE: INTERACTIVE 3D LOGO & SHIELD */}
              <div 
                className="relative flex flex-col items-center justify-center py-16 px-8 group overflow-hidden bg-white/40"
                onMouseEnter={() => setIsShieldHovered(true)}
                onMouseLeave={() => setIsShieldHovered(false)}
              >
                <div className="relative z-40 text-center mb-10">
                  <h3 className="text-2xl font-black text-slate-900">Security you can Trust</h3>
                  <p className="text-sm text-slate-500 mt-2">More secure than using AI directly.</p>
                </div>

                <ScrollingDataBg isHovered={isShieldHovered} />

                <div className="relative flex items-center justify-center w-64 h-72 md:w-80 md:h-80">
                  <div className="absolute inset-0 z-10">
                    <LightShield3D />
                  </div>
                  
                  <div className="relative z-30" style={{ perspective: "1000px" }}>
                    <motion.div
                      animate={{ 
                        rotateY: 360,
                        y: [0, -10, 0]
                      }}
                      transition={{
                        rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="w-40 h-40 md:w-48 md:h-48"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <img src={karyaUpLogo} alt="Logo" className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(168,85,247,0.5)]" />
                    </motion.div>
                  </div>
                </div>

                <motion.div 
                  animate={{ scale: isShieldHovered ? 1.2 : 1, opacity: isShieldHovered ? 0.6 : 0.3 }}
                  className="absolute -bottom-10 w-64 h-64 bg-purple-300 rounded-full blur-[80px] pointer-events-none" 
                />
              </div>

              {/* RIGHT: KARYAUP WAY */}
              <div className="p-6 border-l border-slate-200 flex flex-col justify-center bg-white/50">
                <h3 className="text-center text-2xl font-black mb-2 text-slate-900">The KaryaUp Way</h3>
                <p className="text-sm text-center text-slate-500 mb-8">Advanced execution loops for smarter growth.</p>
                <ScrollTrack cards={greenCards} direction="up" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <img src={planImage} alt="Planning" className="w-full h-auto" />
          </motion.div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">
              Why Choose <span className="text-purple-600">KaryaUp?</span>
            </h2>
            <ul className="space-y-4 text-slate-700 font-medium">
              {[
                "AI-powered automation for repetitive tasks",
                "Seamless integration with favorite apps",
                "Real-time collaboration across teams",
                "Secure, scalable, and built for growth"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-green-500"><CheckIcon /></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work smarter with tasks that can live in your whiteboards, chat, calendar — anywhere you work"
        image={dashboardImage}
        containerClassName="my-20"
      />
    </div>   
  );
}