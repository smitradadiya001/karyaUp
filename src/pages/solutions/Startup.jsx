                                                                                                                                        import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.webp";
import planImage from "../../assets/Gantt.webp";
import FeatureCTA from "../../components/FeatureCTA";
import { Link } from "react-router-dom";
import { Lightbulb, Rocket, TrendingUp, Sparkles, Check } from "lucide-react";

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
      <div style={{ transform: 'translateZ(30px)' }} className="h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

const getColorClasses = (color) => {
  const colorMap = {
    purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    fuchsia: "bg-fuchsia-50 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white",
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
    pink: "bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
    orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
  };
  return colorMap[color] || "bg-slate-50 text-slate-600 group-hover:bg-slate-600 group-hover:text-white";
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

export default function Startup() {
  return (
    <div className="bg-white font-sans">

      {/* ================= HERO SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50/80 backdrop-blur-sm border border-purple-100 text-purple-600 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] shadow-sm mb-10"
              >
                STARTUP — MOVE FAST, GROW FASTER
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 100,
                  delay: 0.1
                }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
              >
                The Everything App <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  for Startup Work
                </motion.span>
              </motion.h1>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Brainstorm, plan, and execute your team's marketing programs—from multi-channel campaigns to global events and more with KaryaUp, the all-in-one productivity platform.
            </p>
            <FeatureStack items={[{ label: "Ideation", icon: Lightbulb }, { label: "Launch", icon: Rocket }, { label: "Growth", icon: TrendingUp }]} />

            <div className="flex items-center gap-4 mb-6">

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src={dashboardImage}
                alt="Dashboard"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Glow */}

          </motion.div>
        </div>
      </section>

      {/* ================= ROADMAP SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 bg-white border-b border-slate-200">
        <div className="max-w-[90rem] mx-auto flex flex-col-reverse lg:flex-row items-stretch">

          {/* Left: Text Container */}
          <div className="w-full lg:w-[45%] p-10 md:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200">
            <div>


              <motion.h1
                initial={{ opacity: 0, y: 40, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 100,
                  delay: 0.1
                }}
                className="text-4xl sm:text-4xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
              >
                Connect Your  <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Roadmap for daily work
                </motion.span>
              </motion.h1>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Manage everything from product roadmaps to sales pipelines in a single place with 10+ customizable views. Schedule releases on a Calendar, create bug tracking systems on a List, or adjust timelines on a Gantt chart.
            </p>
            <div>

            </div>

          </div>

          {/* Right: Image Container */}
          <div className="w-full lg:w-[55%] p-8 md:p-14 border-b lg:border-b-0 border-slate-200 flex items-center justify-center bg-[#fafbfc]">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full shadow-[0_15px_40px_rgba(0,0,0,0.06)] rounded-2xl overflow-hidden border border-slate-100 bg-white group hover:scale-[1.02] transition-transform duration-500"
            >
              <img src={planImage} alt="KaryaUp Project Roadmap" className="w-full h-auto object-cover" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ================= SCALE SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 bg-white border-b border-slate-200">
        <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row items-stretch">

          {/* Left: Image Container */}
          <div className="w-full lg:w-[55%] p-8 md:p-14 lg:p-20 border-b lg:border-b-0 lg:border-r border-slate-200 flex items-center justify-center bg-slate-50/30">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full rounded-2xl"
            >
              <div className="w-full shadow-2xl rounded-2xl overflow-hidden border border-slate-200 bg-white group hover:scale-[1.02] transition-transform duration-500">
                <img src={dashboardImage} alt="KaryaUp Project Scale Layout" className="w-full h-auto object-cover opacity-90" />
              </div>

              
            </motion.div>
          </div>

          {/* Right: Text Container */}
          <div className="w-full lg:w-[67%] p-10 md:p-16 lg:p-24 flex flex-col justify-center">

            <div>


              <motion.h1
                initial={{ opacity: 0, y: 40, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 100,
                  delay: 0.1
                }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
              >
                Scale from Startup<br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  to Unicorn
                </motion.span>
              </motion.h1>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Build the perfect organization that grows with your startup. KaryaUp's Hierarchy makes it easy to expand your team and manage more complex projects as you bring on more resources.
            </p>
            <div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= STARTUP GROWTH JOURNEY SECTION ================= */}
      <section className="w-full py-10 lg:px-5 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">

          <motion.h1
            initial={{ opacity: 0, y: 40, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 100,
              delay: 0.1
            }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
          >
            Your Startup Journey <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Powered by KaryaUp
            </motion.span>
          </motion.h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From idea to unicorn, KaryaUp gives startups the tools to brainstorm, plan, execute, and scale — all in one platform.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-4 gap-8 px-4"
        >
          {[
            { title: "Ideation", desc: "Capture ideas, collaborate with co-founders, and align vision.", icon: Lightbulb, color: "fuchsia" },
            { title: "Launch", desc: "Plan sprints, track tasks, and deliver your MVP faster.", icon: Rocket, color: "blue" },
            { title: "Growth", desc: "Automate workflows, manage sales pipelines, and expand your reach.", icon: TrendingUp, color: "emerald" },
            { title: "Scale", desc: "Build hierarchies, manage complex projects, and grow into a unicorn.", icon: Sparkles, color: "orange" },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <TiltCard key={idx} className="bg-white border border-slate-200 hover:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-default h-full transition-colors transition-shadow duration-300 group">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-5 sm:mb-6 transition-all duration-300 group-hover:shadow-md group-hover:scale-110 ${getColorClasses(feature.color)}`}>
                  <Icon size={20} strokeWidth={2.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2.5 leading-tight">{feature.title}</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{feature.desc}</p>
              </TiltCard>
            );
          })}
        </motion.div>
      </section>

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
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px]"
        imageOuterClassName="relative w-[108%] lg:w-full translate-x-2 lg:translate-x-8"
      />
    </div>
  );
}