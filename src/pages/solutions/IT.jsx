import { Helmet } from "react-helmet-async";
import { useRef, useState, useEffect, useMemo } from "react";
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
    purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    fuchsia: "bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white",
    emerald: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
    orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
    blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white"
  };
  return colors[colorName] || "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white";
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

export default function IT() {

  const DEFAULT_ICON_MAP = {
    "SMART GOVERN": { icon: BrainCircuit, color: "#4c1d95" },
    "CLOUD UPTIME": { icon: Zap, color: "#4c1d95" },
    "SYSTEM AUDIT": { icon: Search, color: "#4c1d95" },
  }

  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);

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

      <section className="py-22 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-2 py-1.5 rounded-full bg-purple-50 text-[11px] font-black uppercase tracking-widest text-purple-600 mb-3 border border-purple-100">
              Cloud Operations
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1"
            >
              The Everything App<br />
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                for IT PMO Teams
              </motion.span>
            </motion.h1>
            <div className="mt-5 space-y-3 max-w-lg w-full">
              <div className="flex items-start gap-2">
                <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium"> Manage IT projects, service requests in one place <br />all connected by AI.</p>
              </div>
            </div>

            <div className="mt-5 space-y-3 max-w-lg w-full">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium"> Streamline IT support, systems, and workflows <br />in one unified platform.</p>
              </div>
            </div>
         
            <FeatureStack
              items={[
                { label: "SMART GOVERN", icon: BrainCircuit },
                { label: "CLOUD UPTIME", icon: Zap },
                { label: "SYSTEM AUDIT", icon: Search }
              ]}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24"
          >
            <div className="relative overflow-hidden  shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white mt-[-30px] lg:mt-[-5px]">
              <img
                src={dashboardImage}
                alt="KaryaUp task management"
                className="w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[380px] xl:h-[350px] object-cover object-left-top bg-white transition-all duration-300"
              />
            </div>
          </motion.div>
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
                  className="bg-white border border-slate-200 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 p-8 rounded-[2rem] group h-full cursor-default"
                >
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
      <section className="py-8 px-6 pb-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-2 leading-[1.1]">
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
            <p className="text-[1rem] text-slate-600 mb-5 font-medium">
              KaryaUp’s AI-powered Gantt charts act 
              <br />
              as a living roadmap for your projects.
            </p>
            <div className="space-y-4">
              {[
                "Reorganize phases instantly with a responsive interface.",
                "View multiple department timelines in one consolidated view.",
                "Link tasks to safely update the entire project flow."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-purple-100 border border-purple-200 text-purple-700">
                    <Check className="w-5 h-5 stroke-[4]" />
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
            <div className="rounded-[2.5rem] overflow-hidden shadow-1xl border border-white bg-purple-100 p-1">
              <img src={planImage} alt="IT Plan" className="w-full h-auto rounded-[2.1rem] opacity-90" />
            </div>
          </motion.div>
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