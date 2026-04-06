import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.webp";
import FeatureCTA from "../../components/FeatureCTA";
import {
  Zap,
  UserPlus,
  ClipboardCheck,
  TrendingUp,
  BarChart3,
  Calendar,
  UserCheck,
  Check
} from "lucide-react";

const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-12, 12]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;   // -1 … 1
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
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 1000 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={className}
    >
      <div style={{ transform: 'translateZ(30px)' }} className="h-full flex flex-col group">
        {children}
      </div>
    </motion.div>
  );
};

const getColorClasses = (color) => {
  const colorMap = {
    purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    fuchsia: "bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white",
    emerald: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
    orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
    blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white"
  };
  return colorMap[color] || "bg-slate-100 text-slate-600 group-hover:bg-slate-600 group-hover:text-white";
};

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

export default function HR() {
  
  useEffect(() => {
    
    const savedPos = localStorage.getItem("hrPageScroll");
    if (savedPos) {
      window.scrollTo(0, parseInt(savedPos));
    }

    
    const handleScroll = () => {
      localStorage.setItem("hrPageScroll", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const workflowCards = [
    { title: "Dashboard", desc: "Centralize job postings, candidate tracking, and interview scheduling.", icon: UserPlus, color: "purple" },
    { title: "Projects", desc: "KaryaUp automates status updates and resource allocation across every phase.", icon: ClipboardCheck, color: "fuchsia" },
    { title: "Tasks", desc: "Track goals, exchange feedback, and monitor individual contributions with clarity.", icon: TrendingUp, color: "emerald" },
    { title: "Gantt Chart", desc: "Visualize the future. Interactive timelines that recalibrate as your team pushes code.", icon: BarChart3, color: "orange" },
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full py-20 md:py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50/80 backdrop-blur-sm border border-purple-100 text-purple-600 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] shadow-sm mb-10"
            >
              HR — PEOPLE FIRST OPERATIONS
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Smarter HR for<br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Modern Teams
              </motion.span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              HR is chaotic—spreadsheets and endless meetings. KaryaUp unifies hiring, onboarding, and performance in one platform.
            </p>
            <FeatureStack 
              items={[
                {label: "Candidate Tracking", icon: UserPlus},
                {label: "Resource Allocation", icon: ClipboardCheck},
                {label: "Performance Goals", icon: TrendingUp}
              ]} 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <img src={dashboardImage} alt="HR Dashboard" className="w-full h-auto object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= HR WORKFLOWS ================= */}
      <section className="pb-16 w-full py-4 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4"
            >
              HR Workflows
              <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Simplified with KaryaUp
              </motion.span>
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {workflowCards.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <TiltCard key={idx} className="bg-white border border-slate-200 hover:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-default h-full transition-all duration-300">
                  <div className="flex items-center gap-4 mb-5 sm:mb-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:shadow-md group-hover:scale-110 ${getColorClasses(feature.color)}`}>
                      <Icon size={20} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      
      {/* ================= CTA ================= */}
      <div className="px-3 md:px-3">
        <FeatureCTA
          title="Tasks that connect to everything you do"
          description="Work smarter with tasks that can live in your whiteboards, chat, and calendar — anywhere you work."
          image={dashboardImage}
          containerClassName="mb-12 md:mb-10"
        />
      </div>
    </div>
  );
}