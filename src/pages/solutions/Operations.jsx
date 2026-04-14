import { Helmet } from "react-helmet-async";
import React, { useRef, useState, useEffect, useMemo } from "react";
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
    purple: "bg-purple-50 text-purple-600 border-2 border-purple-200 group-hover:bg-purple-600 group-hover:text-white",
    fuchsia: "bg-fuchsia-50 text-fuchsia-600 border-2 border-fuchsia-200 group-hover:bg-fuchsia-600 group-hover:text-white",
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

export default function Operations() {
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
      <section className="pb-10 py-25 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-2 py-1.5 rounded-full bg-purple-50 text-[11px] font-black uppercase tracking-widest text-purple-600 mb-3 border border-purple-100">
              Operational Excellence
            </span>
            <h1 className="text-4xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1">
              The Everything<br />
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                App for Operations
              </motion.span>
            </h1>
            <div className="mt-3 space-y-1 max-w-lg w-full">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium">Analyze profitability across teams, and clients <br />with KaryaUp.</p>
              </div>
            </div>

            <div className="mt-3 space-y-3 max-w-lg w-full">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium">Run smarter operations with complete visibility <br />and control</p>
              </div>
            </div>
            {/* <FeatureStack items={[{ label: "SMART ALLOCATE", icon: BrainCircuit, color: "purple" }, { label: "VELOCITY TRACK", icon: Zap, color: "fuchsia" }, { label: "WORKLOAD FIND", icon: Search, color: "purple" }]} /> */}
            <FeatureStack
              items={[
                { label: "SMART ALLOCATE", icon: BrainCircuit },
                { label: "VELOCITY TRACK", icon: Zap },
                { label: "WORKLOAD FIND", icon: Search }

              ]}
            />
          </div>
          <div className="relative w-full max-w-[540px] mx-auto">
            <img src={dashboardImage} className="w-full rounded-2xl shadow-2xl shadow-purple-900/10" alt="Dashboard" />
          </div>
        </div>
      </section>

      {/* SELF-DRIVING WORKFLOWS - NO BORDERS */}
      <section className="py-5 px-6 bg-slate-50/30 border-t border-slate-100">
        <div className="max-w-8xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1">
            Self-Driving 
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Workflows
            </motion.span>
          </h2>
          <p className="text-[1rem] text-slate-600 font-bold">Define the logic once, let KaryaUp handle the execution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {workflowSteps.map((step, i) => (
            /* Removed 'border border-slate-200' and added 'shadow-sm' */
            <TiltCard key={i} className="bg-white p-8 rounded-[2.5rem] h-full group shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${getColorClasses(step.color)}`}>
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
        <FeatureCTA title="Tasks that connect to everything you do" image={dashboardImage} containerClassName="max-w-7xl mx-auto px-6" />
      </div>
    </div>
  );
}