 import { Helmet } from "react-helmet-async";
import React, { useRef, useState, useEffect, useMemo, isStackOpen } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  Zap,
  Users,
  BarChart3,
  Eye,
  BrainCircuit,
  Search,
  Check
} from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";
import karyaupLogo from "../../assets/logo-svg.svg";
// import karyaupInfographicOperations from "../../assets/karyaup-soft-operations.png";
import karyaupInfographicProduct from "../../assets/karyaup-soft-product.png";
import FeatureCTA from "../../components/FeatureCTA";
import FeatureStack from "../../components/FeatureStack";
import MetricStorySlider from "../../components/MetricStorySlider";

const getColorClasses = (colorName) => {
  const colors = {
    purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-active:bg-purple-600 group-active:text-white",
    fuchsia: "bg-fuchsia-50 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white group-active:bg-fuchsia-600 group-active:text-white",
  };
  return colors[colorName] || colors.purple;
};

// --- TILT CARD COMPONENT ---
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-12, 12]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
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

export default function Operations() {

  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);
  const [isShieldHovered, setIsShieldHovered] = useState(false);

  const workflowSteps = [
    { label: "Intake", desc: "AI categorizes incoming requests.", icon: Zap, color: "purple" },
    { label: "Assign", desc: "Logic-based task distribution.", icon: Users, color: "fuchsia" },
    { label: "Track", desc: "Automated status sync across apps.", icon: BarChart3, color: "purple" },
    { label: "Report", desc: "Weekly summaries sent to stakeholders.", icon: Eye, color: "fuchsia" }
  ];

  const DEFAULT_ICON_MAP = {
    "SMART ALLOCATE": { icon: BrainCircuit, color: "#4c1d95" },
    "VELOCITY TRACK": { icon: Zap, color: "#4c1d95" },
    "WORKLOAD FIND": { icon: Search, color: "#4c1d95" },
  }

  return (
    <div className="bg-white font-sans overflow-x-hidden selection:bg-purple-100">
      <Helmet><title>Operations | Karyaup</title></Helmet>

      {/* HERO SECTION */}

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
                 Operations - Operational Excellence
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                // className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
                className="text-3xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1"
              >
                The Everything 
                <span className="block">

                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    App for Operations
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
                  { text: "Analyze profitability across teams, and clients with KaryaUp.", icon: Check },
                  { text: "Run smarter operations with complete visibility and control ", icon: Check }

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
                { label: "SMART ALLOCATE", icon: BrainCircuit },
                { label: "VELOCITY TRACK", icon: Zap },
                { label: "WORKLOAD FIND", icon: Search }

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

      {/* SELF-DRIVING WORKFLOWS - NO BORDERS */}
      <section className="py-4 px-6 bg-slate-50/30">
        <div className="max-w-8xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1">
            Self-Driving 
            <motion.span
              className="mb-1 block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Workflows
            </motion.span>
          </h2>
          <p className="text-[1rem] text-slate-600 font-bold">Define the logic once, <br /> KaryaUp handle the execution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {workflowSteps.map((step, i) => (
           
            <TiltCard key={i} className="bg-white border border-slate-200 hover:border-purple-300 active:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl active:shadow-2xl hover:shadow-purple-900/15 active:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-pointer h-fulltransition-colors transition-shadow duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 lg:hover:border-purple-300 active:border-purple-300 rounded-2xl flex items-center justify-center transition-all ${getColorClasses(step.color)}`}>
                  <step.icon size={24} strokeWidth={2.5} />
                </div>
                <h4 className="font-black text-slate-900 text-2xl tracking-tight">{step.label}</h4>
              </div>
              <p className="text-base text-slate-500 font-medium leading-relaxed">{step.desc}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      <MetricStorySlider
        logoSrc={karyaupLogo}
        title="Run operations from one AI Workspace"
        description="Automate tasks, collaborate with full context, and read performance at a glance operations teams stay in flow inside KaryaUp."
        intervalMs={5200}
        fastIntervalMs={2600}
        slides={[
          {
            metric: "Spreadsheets to signals",
            description: "Less manual stitching across live capacity, spend, and risk in one AI workspace.",
            image: karyaupInfographicProduct,
            imageFocus: "40% 40%",
            storyTitle: "KaryaUp AI Workspace for operations command",
            storySubtitle: "Intake, route, and report on workstreams without rebuilding the same deck every week.",
          },
          {
            metric: "Queues to clear SLAs",
            description: "Faster cycle time from request to resolution with automated routing.",
            image: karyaupInfographicProduct,
            imageFocus: "50% 55%",
            storyTitle: "SLAs that stay honest as volume spikes",
            storySubtitle: "AI watches queues, escalates before breaches, and keeps stakeholders briefed in plain language.",
          },
          {
            metric: "Sites to single pane",
            description: "One pane for projects, vendors, and field teams.",
            image: karyaupInfographicProduct,
            imageFocus: "58% 68%",
            storyTitle: "One runway for ops, finance, and delivery",
            storySubtitle: "Connect playbooks, tasks, and approvals so every handoff leaves an audit-friendly trail.",
          },
        ]}
       
      />

      <div className="py-20">
        <FeatureCTA title={<>Tasks That Connect <br /> To Everything You Do</>} description="Work smarter with unified tasks." image={dashboardImage} containerClassName="max-w-7xl mx-auto px-6" />
      </div>
    </div>
  );
}