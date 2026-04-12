import { Helmet } from "react-helmet-async";
import { useRef, useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.webp";
import { Rocket, Layers, Code2, Zap, Terminal, Cpu, BrainCircuit, Search, ShieldCheck, Check } from "lucide-react";
import FeatureCTA from "../../components/FeatureCTA";


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

export default function ProductDevelopment() {
  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const DEFAULT_ICON_MAP = {
    "CODE EXPLORE"  : { icon: Search, color: "#4c1d95" },
    "SECURE DEPLOY" : { icon: ShieldCheck, color: "#4c1d95" },
    "DEV ROUTING"   : { icon: BrainCircuit, color: "#4c1d95" },
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
  return (
    <div className="min-h-screen bg-white pt-24 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 text-slate-900 font-sans overflow-x-hidden">
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

      {/* ================= HERO SECTION (matches Tasks.jsx type scale & spacing) ================= */}

      <section className="relative pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm mb-2 sm:mb-4"
              >
                Product Intelligence
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
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
                <div className="flex items-start gap-3 text-left">
                  <div className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#7e22ce] stroke-[4]" />
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                    Get real-time visibility into your revenue, expenses, and margins with KaryaUp.
                  </p>
                </div>
              </motion.div>

              <FeatureStack
                items={[
                  { label: "CODE EXPLORE", icon: BrainCircuit },
                  { label: "SECURE DEPLOY", icon: Zap },
                  { label: "DEV ROUTING", icon: Search },
                ]}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24"
            >
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white">
                <img
                  src={dashboardImage}
                  alt="KaryaUp product development"
                  className="w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[380px] xl:h-[350px] object-cover object-left-top bg-white transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white relative overflow-hidden"> {/* Increased py-10 to py-20 for better breathing room */}
        {/* Glows */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-[120px] opacity-60 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-[120px] opacity-60 pointer-events-none" />

        {/* Changed max-w-7xl to max-w-6xl to keep content more focused/reduced width */}
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-7xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }} // Changed animate to whileInView so it triggers when user scrolls
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
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

            <p className="text-[1rem] text-slate-600 font-medium leading-relaxed">
              Eliminate context switching. 
              <br />
              Plan sprints, track bugs, write technical docs
              <br />
             
            </p>
          </div>

          {/* Using gap-6 for a cleaner separation between TiltCards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9">
            {[
              {
                icon: <Code2 size={24} />,
                title: "Connected Code & Tasks",
                desc: "Link GitHub PRs, commits, and branches directly to tasks. Tasks auto-update status when code merges.",
              },
              {
                icon: <Rocket size={24} />,
                title: "Automated Sprints",
                desc: "Put sprints on autopilot. Unfinished work automatically rolls over, and capacity is calculated in real-time.",
              },
              {
                icon: <Layers size={24} />,
                title: "Infinite Custom Views",
                desc: "Visualize your product roadmap via Gantt, execute daily tasks in Kanban, and report using custom Dashboards.",
              },
              {
                icon: <Terminal size={24} />,
                title: "Flawless Issue Tracking",
                desc: "Capture bugs with custom forms. Prioritize, assign to engineers, and track resolution velocity seamlessly.",
              },
              {
                icon: <Cpu size={24} />,
                title: "Integrated Docs & Wikis",
                desc: "Create beautiful technical documentation and PRDs natively. Tag tasks, embed roadmaps, and co-edit in real-time.",
              },
              {
                icon: <Zap size={24} />,
                title: "AI Project Manager",
                desc: "Let KaryaUp AI generate subtasks from PRDs, summarize long threads, and automatically assign the best developer.",
              },
            ].map((feature, i) => {
              const iconPurplePink =
                i % 2 === 0
                  ? "bg-purple-50 text-[#7e22ce] border border-purple-100/80 group-hover:bg-[#7e22ce] group-hover:border-purple-500/30"
                  : "bg-pink-50 text-fuchsia-600 border border-pink-100/80 group-hover:bg-fuchsia-600 group-hover:border-fuchsia-500/30";
              return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="h-full"
              >

                <TiltCard className="bg-white border border-slate-200 hover:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-white p-7 sm:p-8 rounded-[2rem] cursor-default h-full transition-colors transition-shadow duration-300 group">

                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-5 sm:mb-6 transition-all duration-300 group-hover:shadow-md group-hover:scale-110 group-hover:text-white ${iconPurplePink}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2.5 leading-tight">{feature.title}</h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">{feature.desc}</p>
                </TiltCard>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>
      <FeatureCTA
        
        title="Tasks that connect to everything you ship"
        description="Plan sprints and specs where your team already works—then let commits and PRs keep tasks honest without extra status meetings."
        highlights={[
        
        ]}
        image={dashboardImage}
        imageAlt="KaryaUp product workspace"
        containerClassName="my-10"
      />
    </div>
  );
}