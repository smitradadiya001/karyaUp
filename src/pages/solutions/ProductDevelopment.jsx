import { Helmet } from "react-helmet-async";
import { useRef, useEffect, useMemo, useState, isStackOpen } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";

import { Rocket, Layers, Code2, Zap, Terminal, Cpu, BrainCircuit, Search, ShieldCheck, Check } from "lucide-react";
import { lazy, Suspense } from "react";
import FeatureCTA from "../../components/FeatureCTA";
import karyaupLogo from "../../assets/logo-svg.svg";
import FeatureStack from "../../components/FeatureStack";
import MetricStorySlider from "../../components/MetricStorySlider";
import karyaupInfographicProduct from "../../assets/karyaup-soft-product.png";


const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-12, 12]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
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
      <div style={{ transform: 'translateZ(30px)' }} className="h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <polyline points="3,9 7,13 13,5" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="13" height="13">
    <line x1="4" y1="4" x2="12" y2="12" /><line x1="12" y1="4" x2="4" y2="12" />
  </svg>
);
const ListIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" width="11" height="11">
    <line x1="5" y1="4" x2="13" y2="4" /><line x1="5" y1="8" x2="13" y2="8" /><line x1="5" y1="12" x2="13" y2="12" />
    <circle cx="2.5" cy="4" r="1" fill="currentColor" stroke="none" />
    <circle cx="2.5" cy="8" r="1" fill="currentColor" stroke="none" />
    <circle cx="2.5" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

function ScrollTrack({ cards, direction }) {
  const trackRef = useRef(null);
  const posRef = useRef(direction === "up" ? -25 : 0);
  const doubled = useMemo(() => [...cards, ...cards], [cards]);

  useEffect(() => {
    const speed = 0.045;
    const animate = () => {
      if (direction === "down") {
        posRef.current -= speed;
        if (posRef.current <= -25) posRef.current = 0;
      } else {
        posRef.current += speed;
        if (posRef.current >= 0) posRef.current = -25;
      }
      if (trackRef.current) trackRef.current.style.transform = `translateY(${posRef.current}%)`;
      requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [direction]);

  return (
    <div className="h-[220px] overflow-hidden relative">
      <Helmet>
        <title>Product Development | Karyaup</title>
        <meta name="description" content="Plan and manage schedules with Karyaup calendar. Track tasks, deadlines, meetings, and events in one unified calendar for better team coordination." />
        <meta name="keywords" content="product-development, team calendar, scheduling software, task calendar, project deadlines, meeting planner, Karyaup" />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="Product Development | Karyaup" />
        <meta property="og:description" content="Organize tasks, events, and deadlines with a powerful team calendar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/product-development" />
        <meta property="og:site_name" content="Karyaup" />
        <link rel="canonical" href="https://karyaup.com/features/product-development" />
      </Helmet>

      <div className="relative h-full" style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
      }}>
        <div ref={trackRef} className="flex flex-col gap-4 py-4 will-change-transform">
          {doubled.map((card, i) => (
            <Card key={i} data={card} type={direction === "down" ? "red" : "green"} index={i % cards.length} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductDevelopment() {
  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);
  const [isShieldHovered, setIsShieldHovered] = useState(false);

  const DEFAULT_ICON_MAP = {
    "CODE EXPLORE": { icon: Search, color: "#4c1d95" },
    "SECURE DEPLOY": { icon: ShieldCheck, color: "#4c1d95" },
    "DEV ROUTING": { icon: BrainCircuit, color: "#4c1d95" },
  }

  return (
    <div className="bg-white font-sans overflow-x-hidden">
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
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[8px] font-black uppercase tracking-[0.2em] shadow-sm mb-2 sm:mb-4"
              >
                Product Development - Product Intelligence
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
                    for Software Teams
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
                  { text: "Get real-time visibility into your revenue and margins with KaryaUp.", icon: Check },
                  { text: "Turn ideas into impactful products with intelligent development. ", icon: Check }

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
                  { label: "CODE EXPLORE", icon: BrainCircuit },
                  { label: "SECURE DEPLOY", icon: Zap },
                  { label: "DEV ROUTING", icon: Search }

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

      {/* ================= KARYAUP WORKSPACE FEATURES ================= */}

      <section className="py-3 bg-white relative overflow-hidden"> {/* Increased py-10 to py-20 for better breathing room */}
        {/* Glows */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-[120px] opacity-60 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-[120px] opacity-60 pointer-events-none" />

        {/* Changed max-w-7xl to max-w-6xl to keep content more focused/reduced width */}
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10 max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }} // Changed animate to whileInView so it triggers when user scrolls
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-3"
            >
              The Ultimate Workspace for <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Agile Product Teams
              </motion.span>
            </motion.h1>

            <p className="mb-3 text-[1rem] text-slate-600 font-medium leading-relaxed">
              Eliminate context switching.
              <br />
              Plan sprints, and visualize roadmaps
              <br />
              all in one intelligent platform.
            </p>
          </div>

          {/* Using gap-6 for a cleaner separation between TiltCards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9">
            {[
              {
                icon: <Code2 size={24} />,
                title: "Connected Tasks",
                desc: "Link GitHub PRs, commits, and branches directly to tasks.",
                bgColor: "bg-purple-100 text-purple-600",
                hoverBg: "group-hover:bg-purple-600"

              },
              {
                icon: <Rocket size={24} />,
                title: "Automated Sprints",
                desc: "Unfinished work automatically and capacity is calculated in real-time.",
                bgColor: "bg-fuchsia-100 text-fuchsia-600",
                hoverBg: "group-hover:bg-fuchsia-600",
                borderColor: "group-hover:bg-purple-200"
              },
              {
                icon: <Layers size={24} />,
                title: "Infinite Custom Views",
                desc: "Visualize your product roadmap via Gantt, execute daily tasks in Kanban.",
                bgColor: "bg-purple-100 text-purple-600",
                hoverBg: "group-hover:bg-purple-600 group-active:bg-purple-600",
                borderColor: "group-hover:border-fuchsia-200"
              },
              {
                icon: <Terminal size={24} />,
                title: "Flawless Issue Tracking",
                desc: "Prioritize, assign to engineers, and track resolution velocity.",
                bgColor: "bg-fuchsia-100 text-fuchsia-600",
                hoverBg: "group-hover:bg-fuchsia-600",
                borderColor: "group-hover:border-emerald-200"
              },
              {
                icon: <Cpu size={24} />,
                title: "Integrated Docs & Wikis",
                desc: "Create beautiful technical documentation and natively.",
                bgColor: "bg-purple-100 text-purple-600",
                hoverBg: "group-hover:bg-purple-600 group-active:bg-purple-600",
                borderColor: "group-hover:border-orange-200"
              },
              {
                icon: <Zap size={24} />,
                title: "AI Project Manager",
                desc: "Let's KaryaUp AI generate subtasks summarize long threads.",
                bgColor: "bg-fuchsia-100 text-fuchsia-600",
                hoverBg: "group-hover:bg-fuchsia-600 group-active:bg-fuchsia-600",
                borderColor: "group-hover:border-pink-200"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="h-full"
              >

                <TiltCard className="bg-white border border-slate-200 hover:border-purple-300 active:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl active:shadow-2xl hover:shadow-purple-900/15 active:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-pointer h-fulltransition-colors transition-shadow duration-300 group">

                  <div className="flex items-center gap-4 mb-5 sm:mb-6">
                    <div className={`
            w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center 
            transition-all duration-300 shrink-0
            group-hover:shadow-md group-hover:scale-110 group-hover:text-white group-active:shadow-md group-active:scale-110 group-active:text-white
            ${feature.bgColor} ${feature.hoverBg}
          `}>
                      {feature.icon}
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                      {feature.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MetricStorySlider
        logoSrc={karyaupLogo}
        title="Boost productivity with KaryaUp AI Workspace"
        description="One place for product, design, and smart collaboration, automated tasks, and AI that keeps roadmaps."
        intervalMs={5400}
        fastIntervalMs={2600}
        slides={[
          {
            metric: "Specs to shipped",
            description: "Reduction in time spent turning PRDs into actionable engineering work.",
            image: karyaupInfographicProduct,
            imageFocus: "45% 35%",
            storyTitle: "KaryaUp AI Workspace for product discovery",
            storySubtitle: "One surface where research, epics, and backlog tasks stay aligned as the product evolves.",
          },
          {
            metric: "Hours to one view",
            description: "Faster standups with live sprint health, risks, and docs summarized.",
            image: karyaupInfographicProduct,
            imageFocus: "50% 55%",
            storyTitle: "From standups to release without drift",
            storySubtitle: "AI drafts recap, surfaces blockers, and routes follow-ups so PM and eng stay in sync.",
          },
          {
            metric: "Silos to one runway",
            description: "Lost between design, QA, and engineering every link lives in the workspace.",
            image: karyaupInfographicProduct,
            imageFocus: "55% 70%",
            storyTitle: "Design, build, and ship in one AI runway",
            storySubtitle: "KaryaUp keeps specs, branches, and approvals visible so nothing ships without context.",
          },
        ]}

      />

      <FeatureCTA title={<>Tasks That Connect To <br /> Everything You Do</>} description="Work smarter with unified tasks." image={dashboardImage} imageAlt="KaryaUp dashboard" containerClassName="my-10" />
    </div>
  );
}