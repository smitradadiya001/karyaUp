import { Helmet } from "react-helmet-async";
import React, { useRef, useEffect, useState, useMemo, isStackOpen } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.webp";
import karyaupLogo from "../../assets/logo-svg.svg";
// import karyaupInfographicHr from "../../assets/karyaup-soft-hr.png";
import karyaupInfographicProduct from "../../assets/karyaup-soft-product.png";
import FeatureCTA from "../../components/FeatureCTA";
import FeatureStack from "../../components/FeatureStack";
import MetricStorySlider from "../../components/MetricStorySlider";
import {
  Zap,
  UserPlus,
  ClipboardCheck,
  TrendingUp,
  BarChart3,
  UserCheck,
  BrainCircuit,
  Search,
  ShieldCheck,
  Check,
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
      <div style={{ transform: 'translateZ(30px)' }} className="h-full flex flex-col group">
        {children}
      </div>
    </motion.div>
  );
};

const getColorClasses = (color) => {
  const colorMap = {
    purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-active:bg-purple-600 group-active:text-white",
    fuchsia: "bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white group-active:bg-fuchsia-600 group-active:text-white",
    emerald: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-active:bg-emerald-600 group-active:text-white",
    orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white group-active:bg-orange-600 group-active:text-white",
    blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-active:bg-blue-600 group-active:text-white",
    pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white group-active:bg-pink-600 group-active:text-white"
  };
  return colorMap[color] || "bg-slate-100 text-slate-600 group-hover:bg-slate-600 group-hover:text-white group-active:bg-slate-600 group-active:text-white";
};

export default function HR() {

  const DEFAULT_ICON_MAP = {
    "TALENT FIND"  : { icon: Search, color: "#4c1d95" },
    "DATA PRIVACY" : { icon: ShieldCheck, color: "#4c1d95" },
    "PEOPLE MATCH" : { icon: BrainCircuit, color: "#4c1d95" },
}

  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);


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
    { title: "Tasks", desc: "Track goals, exchange feedback, and monitor individual contributions with clarity.", icon: TrendingUp, color: "purple" },
    { title: "Gantt Chart", desc: "Visualize the future. Interactive timelines that recalibrate as your team pushes code.", icon: BarChart3, color: "fuchsia" },
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden w-full">
      <Helmet>
        <title>HR | Karyaup</title>
        <meta name="description" content="Plan and manage schedules with Karyaup calendar. Track tasks, deadlines, meetings, and events in one unified calendar for better team coordination." />
        <meta name="keywords" content="h-r, team calendar, scheduling software, task calendar, project deadlines, meeting planner, Karyaup" />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="H R | Karyaup" />
        <meta property="og:description" content="Organize tasks, events, and deadlines with a powerful team calendar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/h-r" />
        <meta property="og:site_name" content="Karyaup" />
        <link rel="canonical" href="https://karyaup.com/features/h-r" />
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
                HR - Employee Experience
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                // className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
                className="text-3xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1"
              >
                Smarter HR for
                <span className="block">

                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                     Modern Teams
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
                  { text: " HR is chaotic spreadsheets and endless meetings.", icon: Check },
                  { text: "KaryaUp unifies performance in one platform.", icon: Check }

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
                { label: "TALENT FIND", icon: BrainCircuit },
                { label: "DATA PRIVACY", icon: Zap },
                { label: "PEOPLE MATCH", icon: Search }
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

      {/* ================= HR WORKFLOWS ================= */}
      <section className="pb-10 w-full py-2 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-4"
            >
              HR Workflows
              <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Simplified with KARYAUP
              </motion.span>
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {workflowCards.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <TiltCard key={idx} className="bg-white border border-slate-200 hover:border-purple-300 active:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl active:shadow-2xl hover:shadow-purple-900/15 active:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-pointer h-fulltransition-colors transition-shadow duration-300 group">
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

      <MetricStorySlider
        logoSrc={karyaupLogo}
        title="People success in KaryaUp AI Workspace"
        description="Automate repetitive HR work, keep teams aligned, and turn people insights into tasks."
        intervalMs={5200}
        fastIntervalMs={2600}
        slides={[
          {
            metric: "Policy ping-pong to answers",
            description: "Employees get consistent HR guidance while your team spends less time.",
            image: karyaupInfographicProduct,
            imageFocus: "45% 36%",
            storyTitle: "KaryaUp AI Workspace for people programs",
            storySubtitle: "Handbooks, tickets, and approvals stay linked so every answer is grounded and traceable.",
          },
          {
            metric: "Hiring chaos to cadence",
            description: "Interview loops, scorecards, and stay orchestrated without another shared drive.",
            image: karyaupInfographicProduct,
            imageFocus: "50% 52%",
            storyTitle: "Recruiting that feels coordinated, not frantic",
            storySubtitle: "AI drafts briefs, nudges owners, and keeps hiring managers aligned on next steps.",
          },
          {
            metric: "Surveys to next actions",
            description: "Engagement signals turn into prioritized work managers.",
            image: karyaupInfographicProduct,
            imageFocus: "55% 66%",
            storyTitle: "People analytics that land as tasks",
            storySubtitle: "KaryaUp routes insights to the right HRBPs and leaders with context already attached.",
          },
        ]}
       
      />

      {/* ================= CTA ================= */}
      <div className="px-3 md:px-3">
        <FeatureCTA
          title={<>Tasks That Connect To <br /> Everything You Do</>}
          description="Work smarter with tasks that can live in your whiteboards, chat, and calendar — anywhere you work."
          image={dashboardImage}
          containerClassName="mb-12 md:mb-10"
        />
      </div>
    </div>
  );
}