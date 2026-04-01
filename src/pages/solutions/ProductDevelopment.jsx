import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";
import FeatureCTA from "../../components/FeatureCTA";
import PageHero from "../../components/PageHero";
import karyaupLogo from "../../assets/logo-svg.svg";
import { Helmet } from "react-helmet-async";
import { Rocket, Layers, Code2, Zap, Terminal, Cpu } from "lucide-react";

const LightShield3D = () => (
  <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-56 h-64 md:w-64 md:h-72 drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)]">
    <defs>
      <linearGradient id="shieldGrad" x1="100" y1="10" x2="100" y2="208" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F472B6" stopOpacity="0.4" />
        <stop offset="1" stopColor="#A855F7" stopOpacity="0.4" />
      </linearGradient>
    </defs>
    <path d="M100 10 L182 42 L182 108 C182 154 146 190 100 208 C54 190 18 154 18 108 L18 42 Z" fill="white" fillOpacity="0.05" stroke="url(#shieldGrad)" strokeOpacity="0.8" strokeWidth="2" />
  </svg>
);

export default function ProductDevelopment() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const infiniteText = "KaryaUp ".repeat(15);
  const rows = Array(12).fill(infiniteText);

  const oldWayItems = [
    "Critical info hidden in silos",
    "Manual updates strain capacity",
    "Missed deadlines cause bottlenecks",
    "Disconnected engineering workflows",
    "Projects scattered across tools",
    "Data sync failures & bugs",
  ];

  const newWayItems = [
    "Unified roadmap for dev teams",
    "All projects, docs, and chat in one",
    "AI-powered sprint management",
    "Automated reporting & resources",
    "Real-time bug tracking & sync",
    "Advanced high-density execution",
  ];

  return (
    <>
      <Helmet>
        <title>Product Development Solution | Karyaup</title>
        <meta name="description" content="Accelerate your product development lifecycle with Karyaup. Centralize roadmaps, bug tracking, and sprint management for high-performance engineering teams." />
        <meta name="keywords" content="product development software, agile roadmap, bug tracking, sprint planning, devOps hub" />
        <link rel="canonical" href="https://karyaup.com/solutions/productdevelopment" />
      </Helmet>
      <div className="bg-white font-sans overflow-x-hidden pt-20">

        {/* ================= HERO SECTION ================= */}
        <PageHero
          pillText="Solutions / Product Development"
          titleBlack="The Everything App for"
          titleGradient="Software Teams"
          descriptionList={[
            "Get real-time visibility into your product roadmaps, sprint velocity, and resource capacity.",
            "KaryaUp unifies engineering, design, and product in one high-performance workspace."
          ]}
          featureStackItems={["Feature Roadmaps", "Bug Tracking", "Release Control", "Design Handoff"]}
          imageSrc={dashboardImage}
          imageAlt="Product Development Dashboard"
        />

        {/* ================= COMPARISON SECTION ================= */}
        <section className="py-24 px-4 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: isMobile ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-12"
            >
              Product Management<br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                is broken, we fixed it
              </motion.span>
            </motion.h2>

            <div className="p-[2px] rounded-[3rem] bg-gradient-to-br from-purple-400 via-fuchsia-400 to-indigo-500 shadow-2xl">
              <div className="bg-slate-50 rounded-[2.9rem] overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[450px] relative">

                {/* 1. LEFT SIDE: Old Way */}
                <div className="w-full md:w-[30%] p-10 z-10 bg-white/40 border-r border-slate-200">
                  <h3 className="text-2xl font-black text-slate-900 mb-2 text-center">Old Way</h3>
                  <p className="text-[10px] text-slate-500 mb-8 text-center uppercase tracking-widest font-black">Manual updates cause friction.</p>
                  <div className="h-64 overflow-hidden relative font-sans">
                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-slate-50 via-transparent to-slate-50 opacity-80" />
                    <motion.div animate={{ y: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="flex flex-col gap-4">
                      {[...oldWayItems, ...oldWayItems].map((item, i) => (
                        <div key={i} className="p-3 bg-white/60 backdrop-blur-md rounded-xl border border-red-100 flex items-center gap-3 shadow-sm">
                          <XCircle className="text-red-500 shrink-0" size={16} />
                          <span className="text-slate-700 font-bold text-[12px]">{item}</span>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* 2. MIDDLE SIDE: Shield */}
                <div
                  className="w-full md:w-[40%] flex flex-col items-center justify-center relative py-12 px-8 overflow-hidden self-stretch"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-700 flex flex-col justify-center ${isHovered ? "opacity-20" : "opacity-0"}`}>
                    {rows.map((row, i) => (
                      <motion.div
                        key={i}
                        animate={{ x: i % 2 === 0 ? [-100, 0] : [0, -100] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="whitespace-nowrap text-purple-400 font-semibold text-lg py-1 select-none"
                      >
                        {row}
                      </motion.div>
                    ))}
                  </div>

                  <div className="relative z-10 flex flex-col items-center w-full text-center">
                    <h3 className={`text-2xl font-black mb-1 transition-colors duration-500 ${isHovered ? "text-fuchsia-500" : "text-slate-900"}`}>
                      Security you can Trust
                    </h3>
                    <p className={`text-[12px] mb-8 font-medium transition-colors duration-500 ${isHovered ? "text-purple-500" : "text-slate-500"}`}>
                      More secure than using AI directly.
                    </p>

                    <div className="relative flex items-center justify-center w-full h-64" style={{ perspective: "1000px" }}>
                      <div className="absolute inset-0 flex items-center justify-center opacity-80">
                        <LightShield3D />
                      </div>
                      <motion.img
                        src={karyaupLogo}
                        alt="KaryaUp Logo"
                        animate={{ rotateY: 360, scale: isHovered ? 1.1 : 0.95 }}
                        transition={{ rotateY: { duration: 8, ease: "linear", repeat: Infinity }, scale: { duration: 0.4 } }}
                        className="w-36 h-36 md:w-40 md:h-40 object-contain z-30 drop-shadow-[0_15px_35px_rgba(168,85,247,0.5)]"
                        style={{ transformStyle: "preserve-3d" }}
                      />
                      <div className={`absolute w-36 h-36 bg-fuchsia-500/20 rounded-full blur-3xl transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />
                    </div>
                  </div>
                </div>

                {/* 3. RIGHT SIDE: KaryaUp Way */}
                <div className="w-full md:w-[30%] p-10 z-10 bg-white/40 border-l border-slate-200">
                  <h3 className="text-2xl font-black text-slate-900 mb-2 text-center">The KaryaUp Way</h3>
                  <p className="text-[10px] text-slate-500 mb-8 text-center uppercase tracking-widest font-black">Advanced execution loops for growth.</p>
                  <div className="h-64 overflow-hidden relative font-sans">
                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-slate-50 via-transparent to-slate-50 opacity-80" />
                    <motion.div animate={{ y: ["-50%", "0%"] }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="flex flex-col gap-4">
                      {[...newWayItems, ...newWayItems].map((item, i) => (
                        <div key={i} className="p-3 bg-white/80 backdrop-blur-md rounded-xl border border-purple-200 flex items-center gap-3 shadow-sm">
                          <CheckCircle2 className="text-green-500 shrink-0" size={16} />
                          <span className="text-purple-900 font-bold text-[12px]">{item}</span>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        Product Development                                                                                                                 <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

              {/* LEFT SIDE: THE INTERACTIVE BUILD TERMINAL */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 relative"
              >
                {/* Terminal Window */}
                <div className="bg-[#0f172a] rounded-3xl p-1 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden border border-slate-800">
                  {/* Header */}
                  <div className="bg-slate-800/40 px-5 py-3 flex justify-between items-center border-b border-slate-800">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="flex items-center gap-2 opacity-40">
                      <Terminal size={14} className="text-slate-400" />
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">karyaup-cli — bash</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 font-mono text-sm sm:text-base leading-relaxed">
                    <div className="flex gap-4 mb-2">
                      <span className="text-slate-600 select-none">01</span>
                      <span className="text-emerald-400">$ karyaup deploy --env production</span>
                    </div>
                    <div className="flex gap-4 mb-2">
                      <span className="text-slate-600 select-none">02</span>
                      <span className="text-slate-400">Optimizing 1,240 static assets...</span>
                    </div>
                    <div className="flex gap-4 mb-2">
                      <span className="text-slate-600 select-none">03</span>
                      <span className="text-fuchsia-400">Syncing sprint backlog to live roadmap...</span>
                    </div>
                    <div className="flex gap-4 mb-6">
                      <span className="text-slate-600 select-none">04</span>
                      <span className="text-blue-400">Verifying security protocols... [OK]</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-slate-600 select-none">05</span>
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-white"
                      >
                        Deployment successful. v2.4.0 is live! █
                      </motion.span>
                    </div>
                  </div>
                </div>

                {/* Floating "System Health" Card */}

              </motion.div>

              {/* RIGHT SIDE: THE ROADMAP STORY */}
              <div className="w-full lg:w-1/2 space-y-12">
                <div className="space-y-4">

                  <motion.h1
                    initial={{ opacity: 0, y: 40, x: -10 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                      type: "spring",
                      damping: 25,
                      stiffness: 100,
                      delay: 0.1
                    }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
                  >
                    Built for the<br />
                    <motion.span
                      className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                      animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      Modern Product Cycle.
                    </motion.span>
                  </motion.h1>

                  <p className="text-slate-600 font-medium text-lg leading-relaxed max-w-lg">
                    Automate the friction between "Idea" and "Live." KaryaUp manages the technical debt while you focus on building features.
                  </p>
                </div>

                <div className="grid gap-10">
                  {[
                    {
                      icon: <Layers size={22} />,
                      title: "Strategic Backlogs",
                      desc: "Don't just list tasks. Score them based on ROI, technical effort, and client impact automatically.",
                      color: "bg-blue-600"
                    },
                    {
                      icon: <Code2 size={22} />,
                      title: "Developer Autonomy",
                      desc: "Direct Git integration updates task status based on code commits. No manual reporting needed.",
                      color: "bg-purple-600"
                    },
                    {
                      icon: <Rocket size={22} />,
                      title: "Instant Shipping",
                      desc: "One-click releases with automated changelogs synced to your marketing site.",
                      color: "bg-fuchsia-600"
                    }
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 }}
                      viewport={{ once: true }}
                      className="flex gap-6 group"
                    >
                      <div className={`shrink-0 w-14 h-14 ${step.color} text-white rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        {step.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-slate-900 mb-2">{step.title}</h4>
                        <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <FeatureCTA
          title="Tasks that connect to everything you do"
          description="Work Smarter with tasks that can live in your whiteboards, chat, calendar—anywhere you work."
          image={dashboardImage}
          imageAlt="KaryaUp Product Dashboard"
          containerClassName="mt-12 mb-24"
          paddingClassName="p-3 lg:p-4 lg:py-6"
          imageClassName="w-full max-w-[940px] translate-y-8"
          imageOuterClassName="relative w-full flex justify-center"
        />
      </div>
    </>
  );
}