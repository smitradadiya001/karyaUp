import { Helmet } from "react-helmet-async";
import { useRef, useEffect, useMemo, useState } from "react";
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

      <section className="py-22 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-2 py-1.5 rounded-full bg-purple-50 text-[11px] font-black uppercase tracking-widest text-purple-600 mb-4 border border-purple-100">
              Product Intelligence
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
                for Software Teams
              </motion.span>
            </motion.h1>

            <div className="mt-5 space-y-3 max-w-lg w-full">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium">Get real-time visibility into your revenue, expenses,
                  <br />
                  and margins with KaryaUp. </p>
              </div>
            </div>

            <div className="mt-5 space-y-3 max-w-lg w-full">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium">Turn ideas into impactful products with intelligent 
                  <br />
                  development workflows. </p>
              </div>
            </div>

            <FeatureStack
              items={[
                { label: "CODE EXPLORE", icon: BrainCircuit },
                { label: "SECURE DEPLOY", icon: Zap },
                { label: "DEV ROUTING", icon: Search }

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

      {/* ================= KARYAUP WORKSPACE FEATURES ================= */}

      <section className="py-3 bg-white relative overflow-hidden"> {/* Increased py-10 to py-20 for better breathing room */}
        {/* Glows */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-[120px] opacity-60 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-[120px] opacity-60 pointer-events-none" />

        {/* Changed max-w-7xl to max-w-6xl to keep content more focused/reduced width */}
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-5xl mx-auto">
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
              Plan sprints, track bugs, write technical docs,
              <br />
              and visualize roadmaps all in one intelligent platform.
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
                borderColor: "group-hover:border-purple-200"
              },
              {
                icon: <Layers size={24} />,
                title: "Infinite Custom Views",
                desc: "Visualize your product roadmap via Gantt, execute daily tasks in Kanban.",
                bgColor: "bg-purple-100 text-purple-600",
                hoverBg: "group-hover:bg-purple-600",
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
                hoverBg: "group-hover:bg-purple-600",
                borderColor: "group-hover:border-orange-200"
              },
              {
                icon: <Zap size={24} />,
                title: "AI Project Manager",
                desc: "Let's KaryaUp AI generate subtasks summarize long threads.",
                bgColor: "bg-fuchsia-100 text-fuchsia-600",
                hoverBg: "group-hover:bg-fuchsia-600",
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

                <TiltCard className="bg-white border border-slate-200 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-white p-7 sm:p-8 rounded-[2rem] cursor-default h-full transition-colors transition-shadow duration-300 group">

                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-5 sm:mb-6 transition-all duration-300 group-hover:shadow-md group-hover:scale-110 group-hover:text-white ${feature.bgColor} ${feature.hoverBg}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2.5 leading-tight">{feature.title}</h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">{feature.desc}</p>
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

      <FeatureCTA title="Tasks that connect to everything" description="Work smarter with unified tasks." image={dashboardImage} imageAlt="KaryaUp dashboard" containerClassName="my-10" />
    </div>
  );
}