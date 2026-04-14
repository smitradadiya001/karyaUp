import { Helmet } from "react-helmet-async";
import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion";
import FeatureCTA from "../../components/FeatureCTA";
import FeatureStack from "../../components/FeatureStack";
import dashboardImage from "../../assets/dashboard2.webp";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ClipboardList,
  Database,
  LineChart,
  HeartHandshake,
  Users,
  Rocket,
  ShieldCheck,
  BrainCircuit,
  Zap,
  Search,
  CalendarDays,
} from "lucide-react";

const CheckIcon = ({ className }) => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="3,9 7,13 13,5" />
  </svg>
);

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
    pink: "bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
    emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
    orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
  };
  return colorMap[color] || "bg-slate-50 text-slate-600 group-hover:bg-slate-600 group-hover:text-white";
};
const ImpactCard = ({ icon: Icon, title, description }) => (
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7e22ce]/10 text-[#7e22ce]">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
  </div>
);

export default function NonProfit() {

  const DEFAULT_ICON_MAP = {
    "MISSION MATCH": { icon: BrainCircuit, color: "#4c1d95" },
    "LIVE IMPACT": { icon: Zap, color: "#4c1d95" },
    "GRANT FIND": { icon: Search, color: "#4c1d95" },
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

  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const whyItWorksFeatures = [
    {
      title: "Simple for mission-driven teams",
      desc: "Simple interface for busy nonprofit teams.",
    },
    {
      title: "Collaboration across your ecosystem",
      desc: "Supports collaboration across departments and volunteers.",
    },
    {
      title: "One place for the full picture",
      desc: "Keeps planning, tasks, and communication in one place.",
    },
  ];

  const impactCards = [
    {
      icon: HeartHandshake,
      title: "Unified Intelligence",
      description:
        "Replaces 5+ disconnected tools with one ecosystem where your data and AI work together.",
    },
    {
      icon: Users,
      title: "Reduced Admin Friction",
      description:
        "Helps your team focus more on high-value creative or mission work and less on manual data entry.",
    },
    {
      icon: Rocket,
      title: "Real-time Visibility",
      description:
        "Provides a single source of truth across departments, volunteers, or clients..",
    },
    {
      icon: ShieldCheck,
      title: "Trusted and organized",
      description:
        "Keep important information, tasks, and updates structured in one place for smoother coordination.",
    },
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Non Profit | Karyaup</title>
        <meta
          name="description"
          content="Karyaup AI Workspace helps nonprofit teams organize work, manage forms, track reporting, and collaborate more effectively."
        />
        <meta
          name="keywords"
          content="non-profit, nonprofit workspace, NGO software, team collaboration, forms, surveys, reporting, Karyaup"
        />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="Non Profit | Karyaup" />
        <meta
          property="og:description"
          content="Organize nonprofit work with a powerful AI workspace for collaboration, forms, reporting, and team operations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/non-profit" />
        <meta property="og:site_name" content="Karyaup" />
        <link rel="canonical" href="https://karyaup.com/features/non-profit" />
      </Helmet>

      {/* HERO SECTION */}

      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-2 py-1.5 rounded-full bg-purple-50 text-[11px] font-black uppercase tracking-widest text-purple-600 mb-3 border border-purple-100">
              Unified Non-Profit
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-6"
            >
              Grow your Non-Profit <br />
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                with Karyaup.
              </motion.span>
            </motion.h1>

            <div className="mt-5 space-y-3 max-w-lg w-full">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium">  Change the world one task at a time.</p>
              </div>
            </div>

            <div className="mt-5 space-y-3 max-w-lg w-full">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium">Bring your team, tools, and work into one place with <br />Karyaup to move your mission forward more effectively. </p>
              </div>
            </div>

            <FeatureStack
              items={[
                { label: "MISSION MATCH", icon: BrainCircuit },
                { label: "LIVE IMPACT", icon: Zap },
                { label: "GRANT FIND", icon: Search }
              ]}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24"
          >
            <div className="relative overflow-hidden  shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white mt-[-30px] lg:mt-[-40px]">
              <img
                src={dashboardImage}
                alt="KaryaUp task management"
                className="w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[380px] xl:h-[350px] object-cover object-left-top bg-white transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTELLIGENCE + WORKSPACE (centered header | image left | Why it works right) */}

      <section className="py-4 px-6 bg-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-24 -right-24 w-90 h-90 bg-purple-50 rounded-full blur-[120px] pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto">
          {/* CENTERED HEADING & DESCRIPTION */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-[11px] font-black uppercase tracking-widest text-purple-600 mb-3 border border-purple-100">
                Unified Task Workspace
              </span>

              <h1 className="text-4xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-3">
                Supercharge your <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Daily Workflows.
                </motion.span>
              </h1>

              <p className="text-[1rem] text-slate-600 leading-relaxed font-medium max-w-xl mx-auto">
                Centralize communication, assign dynamic tasks,
                <br />
                and execute flawlessly with enterprise grade AI execution.
              </p>
            </motion.div>
          </div>

          {/* SIDE-BY-SIDE GRID (IMAGE LEFT | FEATURES RIGHT) */}
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Image Card Container */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative rounded-[2.5rem] p-2 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 border border-slate-100 shadow-2xl">
                <img
                  src={dashboardImage}
                  alt="Workspace Preview"
                  className="relative z-10 w-full h-auto rounded-[2rem] border border-white/50 shadow-sm transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </motion.div>

            {/* Feature List -numbered steps with connecting lines */}
            <div className="flex flex-col">
              {whyItWorksFeatures.map((item, i) => (
                <div key={i} className="flex items-stretch gap-5">

                  {/* Left column: number circle + connecting line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <motion.div
                      animate={
                        activeFeature === i
                          ? { backgroundColor: "#7c3aed", color: "#ffffff", scale: 1.1 }
                          : { backgroundColor: "#f3f4f6", color: "#9ca3af", scale: 1 }
                      }
                      transition={{ duration: 0.3 }}
                      className="w-11 h-11 rounded-full flex items-center justify-center text-base font-bold shrink-0 z-10"
                    >
                      {i + 1}
                    </motion.div>

                    {/* Connecting line -hidden after last item */}
                    {i < whyItWorksFeatures.length - 1 && (
                      <motion.div
                        animate={
                          activeFeature === i
                            ? { backgroundColor: "#7c3aed", opacity: 0.35 }
                            : { backgroundColor: "#e5e7eb", opacity: 1 }
                        }
                        transition={{ duration: 0.3 }}
                        className="w-0.5 flex-1 my-1 min-h-8"
                      />
                    )}
                  </div>

                  {/* Right column: feature card */}
                  <motion.div
                    onMouseEnter={() => setActiveFeature(i)}
                    className={`relative p-6 rounded-[2rem] cursor-pointer transition-all duration-500 border flex-1 mb-4 ${activeFeature === i
                        ? "bg-white border-slate-200 shadow-xl shadow-purple-500/5 translate-x-2"
                        : "bg-transparent border-transparent opacity-60 hover:opacity-100"
                      }`}
                  >
                    <h3 className="text-xl font-bold text-slate-900 leading-none">
                      {item.title}
                    </h3>
                    <AnimatePresence>
                      {activeFeature === i && (
                        <motion.p
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          className="text-slate-500 font-medium text-sm leading-relaxed overflow-hidden"
                        >
                          {item.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="w-full py-7 pb-15 relative overflow-hidden bg-white">
        {/* Animated Background Glows for Glass Effect */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-white rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-fuchsia-200 rounded-full blur-[120px] opacity-40 animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-3"
            >
              Streamline the <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Mission Lifecycle
              </motion.span>
            </motion.h1>
            <p className="text-[1rem] text-slate-600 font-medium leading-relaxed">
              From fundraising and programs to volunteers and impact
              <br />
              reporting run every stage of nonprofit work in one connected workspace.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Fundraising & stewardship", desc: "Track campaigns, donor touchpoints, and pledges so relationships stay personal at scale.", icon: HeartHandshake, color: "fuchsia" },
              { title: "Programs & outreach", desc: "Plan events, field programs, and community campaigns with clear ownership and timelines.", icon: CalendarDays, color: "purple" },
              { title: "Volunteers & operations", desc: "Coordinate schedules, roles, and internal tasks across staff and volunteers.", icon: Users, color: "fuchsia" },
              { title: "Impact & reporting", desc: "Measure outcomes, share progress with boards and funders, and tell your story with data.", icon: LineChart, color: "purple" },
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
          </div>
        </div>
      </section>
      {/* CTA */}
      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work smarter with tasks that can live in your whiteboards, chat, and calendar -anywhere you work."
        image={dashboardImage}
        containerClassName="mb-12 md:mb-10"
      />
    </div>
  );
}