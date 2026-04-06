import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { BrainCircuit, MessageSquare, Workflow, Check } from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";
import planImage from "../../assets/Gantt.webp";
import FeatureCTA from "../../components/FeatureCTA";

const getColorClasses = (colorName) => {
  const colors = {
    purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    fuchsia: "bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white",
    emerald: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
    orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
    blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white"
  };
  return colors[colors] || "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white";
};

// --- TILT CARD COMPONENT ---
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [10, -10]), { stiffness: 150, damping: 25 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-10, 10]), { stiffness: 150, damping: 25 });

  const handleMove = (clientX, clientY) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((clientY - rect.top) / rect.height) * 2 - 1;
    rawX.set(x);
    rawY.set(y);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
      onMouseLeave={() => { rawX.set(0); rawY.set(0); }}
      onTouchMove={(e) => handleMove(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchEnd={() => { rawX.set(0); rawY.set(0); }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      whileHover={{ scale: 1.02 }}
      className={className}
    >
      <div style={{ transform: 'translateZ(25px)' }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
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

export default function IT() {
  return (
    <div className="bg-white font-sans overflow-x-hidden selection:bg-purple-100">
      
      {/* ================= HERO SECTION ================= */}
      <section className="py-19 md:py-24 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
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
            IT — SEAMLESS TECH GOVERNANCE
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            The Everything App<br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              for IT PMO Teams
            </motion.span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Manage IT projects, service requests, and governance in one place—all connected by AI.
            KaryaUp streamlines workflows and compliance so IT operations run with speed and precision.
          </p>
          <FeatureStack 
            items={[
              {label: "Smart Routing", icon: BrainCircuit},
              {label: "Automated Workflows", icon: Workflow},
              {label: "Contextual Chat", icon: MessageSquare}
            ]} 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
        >
          <img src={dashboardImage} alt="IT PMO Dashboard" className="w-full h-auto" />
        </motion.div>
      </section>

      {/* ================= AI BANNER SECTION ================= */}
      <section className="py-8 md:py-10 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
               The World's most complete<br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
               AI Task Workspace
            </motion.span>
          </motion.h2>

          <p className="mx-auto text-lg text-slate-600 max-w-2xl mb-16">
            Meet the first AI that works across your entire project lifecycle.
            <span className="font-bold text-slate-800"> KaryaUp AI frees your team to focus on impact.</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Apps", desc: "KaryaUp AI continuously learns from your documents, chats, and code to provide answers with full project context.", icon: BrainCircuit, color: "purple" },
              { title: "Tools", desc: "Automatically categorize, prioritize, and assign incoming service desk tickets to the optimal department.", icon: Workflow, color: "fuchsia" },
              { title: "Management", desc: "Generate status reports, draft technical documentation, or summarize meeting notes with a simple prompt.", icon: MessageSquare, color: "emerald" }
            ].map((feature, i) => (
              <TiltCard 
                key={i} 
                className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/40 group transition-all duration-300 hover:border-purple-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  {/* લોગો ઝૂમ કરવા માટે group-hover:scale-125 ઉમેર્યું છે */}
                  <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-500 group-hover:scale-125 ${getColorClasses(feature.color)}`}>
                    <feature.icon size={24} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TIMELINE CONTROL SECTION ================= */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-[1.1]">
              Effortless <br />

              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Timeline Control
              </motion.span>
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Timeline Control</span> */}
            </h2>
            <p className="text-xl text-slate-600 mb-10 font-medium">
              KaryaUp’s AI-powered Gantt charts act as a living roadmap for your projects.
            </p>
            <div className="space-y-6">
              {[
                "Reorganize phases instantly with a responsive interface.",
                "View multiple department timelines in one consolidated view.",
                "Link tasks to safely update the entire project flow."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-1.5 rounded-full shadow-sm shrink-0">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                  </div>
                  <span className="font-bold text-slate-800 text-lg leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-1xl border border-white bg-slate-900 p-1">
              <img src={planImage} alt="IT Plan" className="w-full h-auto rounded-[2.1rem] opacity-90" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <div className="py-10">
        <FeatureCTA
          title="Tasks that connect to everything you do"
          description="Work Smarter with tasks that can live in your whiteboards, chat, calendar - anywhere you work"
          image={dashboardImage}
          imageAlt="KaryaUp dashboard"
          containerClassName="max-w-7xl mx-auto px-6"
          paddingClassName="p-8 md:p-12"
        />
      </div>
    </div>
  );
}