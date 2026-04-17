import { Helmet } from "react-helmet-async";
import { useRef, useState, useEffect, useMemo, isStackOpen } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { BrainCircuit, MessageSquare, Zap, Search, ShieldCheck, Brain, Network, Check } from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";
import planImage from "../../assets/Gantt.webp";
import karyaupLogo from "../../assets/logo-svg.svg";
// import karyaupInfographicIt from "../../assets/karyaup-soft-it.png";
import karyaupInfographicProduct from "../../assets/karyaup-soft-product.png";
import FeatureCTA from "../../components/FeatureCTA";
import FeatureStack from "../../components/FeatureStack";
import MetricStorySlider from "../../components/MetricStorySlider";

const getColorClasses = (colorName) => {
  const colors = {
    purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-active:bg-purple-600 group-active:text-white",
    fuchsia: "bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white group-active:bg-fuchsia-600 group-active:text-white",
    emerald: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-active:bg-emerald-600 group-active:text-white",
    orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white group-active:bg-orange-600 group-active:text-white",
    blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-active:bg-blue-600 group-active:text-white",
    pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white group-active:bg-pink-600 group-active:text-white"
  };
  return colors[colorName] || "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-active:bg-purple-600 group-active:text-white";
};

const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-12, 12]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    rawX.set(x);
    rawY.set(y);
  };

  const handleTouchMove = (e) => {
    if (!ref.current || e.touches.length === 0) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.touches[0].clientY - rect.top) / rect.height) * 2 - 1;
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
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
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

export default function IT() {

  const DEFAULT_ICON_MAP = {
    "SMART GOVERN": { icon: BrainCircuit, color: "#4c1d95" },
    "CLOUD UPTIME": { icon: Zap, color: "#4c1d95" },
    "SYSTEM AUDIT": { icon: Search, color: "#4c1d95" },
  }

  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);
  const [timelineActiveFeature, setTimelineActiveFeature] = useState(1);

  const timelineFeatures = [
    {
      title: "Reorganize phases instantly",
      desc: "Update dependencies and timelines on the fly with a responsive planning interface.",
    },
    {
      title: "Unified department timelines",
      desc: "View engineering, security, and operations milestones together in one roadmap.",
    },
    {
      title: "Connected project flow",
      desc: "Link tasks across projects so every status change updates downstream work automatically.",
    },
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden selection:bg-purple-100">
      <Helmet>
        <title>IT | Karyaup</title>
        <meta name="description" content="Plan and manage schedules with Karyaup calendar. Track tasks, deadlines, meetings, and events in one unified calendar for better team coordination." />
        <meta name="keywords" content="i-t, team calendar, scheduling software, task calendar, project deadlines, meeting planner, Karyaup" />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="I T | Karyaup" />
        <meta property="og:description" content="Organize tasks, events, and deadlines with a powerful team calendar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/i-t" />
        <meta property="og:site_name" content="Karyaup" />
        <link rel="canonical" href="https://karyaup.com/features/i-t" />
      </Helmet>

      {/* ================= HERO SECTION ================= */}

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
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm mb-2 sm:mb-4"
              >
                  IT - Cloud Operations
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                // className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
                className="text-3xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1"
              >
                The Everything App
                <span className="block">

                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    for IT PMO Teams
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
                  { text: " Manage IT projects, service requests in one place all connected by AI", icon: Check },
                  { text: " Streamline IT support, systems, and workflows in one unified platform.", icon: Check }

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
                { label: "SMART GOVERN", icon: BrainCircuit },
                { label: "CLOUD UPTIME", icon: Zap },
                { label: "SYSTEM AUDIT", icon: Search }
              ]}
            />
          </div>
          <div className="pt-6 relative w-full max-w-[540px] mx-auto lg:max-w-none overflow-hidden rounded-[10px]">
              <img
                src={dashboardImage}
                alt="Dashboard"
                className="w-full h-auto rounded-[10px] shadow-2xl"
              />
            </div>
            </div> 
        </div>
      </section>

      {/* ================= AI BANNER SECTION ================= */}
      <section className="py-2 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-7">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1"
            >
               The World's most complete
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                AI Task Workspace
              </motion.span>
            </motion.h1>
        
            <p className="text-[1rem] text-slate-600 max-w-2xl mb-3 mx-auto font-medium">
              Meet the first AI that works across your entire project lifecycle.
              
              <strong>KaryaUp AI</strong> frees your team to focus on impact.
            </p>
          </div>

          {/* --- AI Task Workspace Cards Grid --- */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Apps",
                desc: "KaryaUp AI continuously learns from your documents, chats, and code to provide answers with full project context.",
                icon: Brain,
                color: "fuchsia"
              },
              {
                title: "Tools",
                desc: "Automatically categorize, prioritize, and assign incoming service desk tickets to the optimal department.",
                icon: Network,
                color: "purple"
              },
              {
                title: "Management",
                desc: "Generate status reports, draft technical documentation, or summarize meeting notes with a simple prompt.",
                icon: MessageSquare,
                color: "fuchsia"
              }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <TiltCard
                  key={i}
                  className="bg-white border border-slate-200 hover:border-purple-300 active:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl active:shadow-2xl hover:shadow-purple-900/15 active:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-pointer h-fulltransition-colors transition-shadow duration-300 group">
                
                  {/* --- Header: Logo and Title side-by-side --- */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0 ${getColorClasses(feature.color)}`}>
                      <Icon size={22} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 leading-tight">
                      {feature.title}
                    </h3>
                  </div>

                  {/* --- Description below --- */}
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TIMELINE CONTROL SECTION ================= */}
      <section className="w-full py-8 pb-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-3"
            >
              Effortless <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Timeline Control
              </motion.span>
            </motion.h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              KaryaUp&apos;s AI-powered Gantt charts act as a living roadmap for your projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-purple-100 bg-purple-50 p-1.5">
                <img src={planImage} alt="IT Plan" className="w-full h-auto rounded-[2.1rem]" />
              </div>
            </motion.div>

            <div className="flex flex-col order-1 lg:order-2">
              {timelineFeatures.map((item, i) => {
                const isActive = timelineActiveFeature === i;
                const activeColor = i === 1 ? "#d946ef" : "#7c3aed";
                return (
                  <div key={i} className="flex items-stretch gap-5">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <motion.div
                        animate={
                          isActive
                            ? { backgroundColor: activeColor, color: "#ffffff", scale: 1.1 }
                            : { backgroundColor: "#f3f4f6", color: "#9ca3af", scale: 1 }
                        }
                        transition={{ duration: 0.3 }}
                        className="w-11 h-11 rounded-full flex items-center justify-center text-base font-bold shrink-0 z-10"
                      >
                        {i + 1}
                      </motion.div>

                      {i < timelineFeatures.length - 1 && (
                        <motion.div
                          animate={
                            isActive
                              ? { backgroundColor: activeColor, opacity: 0.35 }
                              : { backgroundColor: "#e5e7eb", opacity: 1 }
                          }
                          transition={{ duration: 0.3 }}
                          className="w-0.5 flex-1 my-1 min-h-8"
                        />
                      )}
                    </div>

                    <motion.div
                      onMouseEnter={() => setTimelineActiveFeature(i)}
                      onTouchStart={() => setTimelineActiveFeature(i)}
                      className={`relative p-6 rounded-[2rem] cursor-pointer transition-all duration-500 border flex-1 mb-4 ${isActive
                        ? "bg-white border-slate-200 shadow-xl shadow-purple-500/5 translate-x-2"
                        : "bg-transparent border-transparent opacity-60 hover:opacity-100"
                        }`}
                    >
                      <h3 className="text-xl font-bold text-slate-900 leading-none">
                        {item.title}
                      </h3>
                      <AnimatePresence>
                        {isActive && (
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
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <MetricStorySlider
        logoSrc={karyaupLogo}
        title="Secure delivery with KaryaUp AI Workspace"
        description="Service desk, change management, and security reviews stay connected automate tasks, collaborate with context."
        intervalMs={5300}
        fastIntervalMs={2600}
        slides={[
          {
            metric: "Incidents to minutes",
            description: "Mean time to acknowledge drops when AI triages alerts, groups duplicates.",
            image: karyaupInfographicProduct,
            imageFocus: "42% 38%",
            storyTitle: "KaryaUp AI Workspace for IT service",
            storySubtitle: "Tickets, chat, and infra context stay attached so L1–L3 resolve with less back-and-forth.",
          },
          {
            metric: "Policies to proof",
            description: "Security reviews and change windows stay traceable with auto linked evidence.",
            image: karyaupInfographicProduct,
            imageFocus: "50% 52%",
            storyTitle: "Compliance that does not slow shipping",
            storySubtitle: "AI summarizes diffs, control checks, and approvals so audits read like a story, not a scavenger hunt.",
          },
          {
            metric: "Silos to shared truth",
            description: "Fewer shadow spreadsheets one workspace for projects, assets.",
            image: karyaupInfographicProduct,
            imageFocus: "55% 65%",
            storyTitle: "One IT runway across departments",
            storySubtitle: "Roadmaps, incidents, and vendor tasks roll up to leadership without manual consolidation.",
          },
        ]}
        
      />

      {/* ================= CTA SECTION ================= */}
      <div className="py-10">
        <FeatureCTA
         title={<>Tasks That Connect To <br /> Everything You Do</>}
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