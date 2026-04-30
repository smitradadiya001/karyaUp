import React, { useState, useEffect, useRef } from "react";
import { motion as Motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Megaphone, Check, Target, MousePointerClick, Sparkles, BarChart3, Users, TrendingUp, Search, Mail, Layers, Clock, CornerDownRight, Plus } from "lucide-react";
import FeatureStack from "../../components/FeatureStack";
import FeatureCTA from "../../components/FeatureCTA";
import LeadHero from "../../assets/lead-generation.webp";

const highlights = [
  "Capture interest from the first touchpoint.",
  "Qualify leads before they reach your team.",
  "Keep every lead visible in one workflow.",
];

export default function LeadGeneration() {
  const [isMobile, setIsMobile] = useState(false);
  const searchSectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: searchSectionRef,
    offset: ["start end", "end start"]
  });

  const yTranslate = useTransform(scrollYProgress, [0.5, 1], [0, -150]);
  const opacityFade = useTransform(scrollYProgress, [0.5, 0.9], [1, 0]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <Helmet>
        <title>Lead Generation - KaryaUp</title>
        <meta name="description" content="Capture, qualify, and manage leads with KaryaUp's automated generation tools." />
      </Helmet>

      <div className="min-h-screen bg-white pt-28 sm:pt-28 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
        <section className="relative pt-4 sm:pt-6 lg:pt-4 pb-8 sm:pb-4 lg:pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start lg:self-start px-1 sm:px-0">
                <Motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm mb-4 sm:mb-6"
                >
                  <Megaphone className="w-3.5 h-3.5" />
                  <span>Lead Generation</span>
                </Motion.div>
                
                <Motion.h1
                  initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                  className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05] whitespace-nowrap"
                >
                  Fill your pipeline
                </Motion.h1>
                <Motion.h2
                  initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05] whitespace-nowrap"
                >
                  <Motion.span
                    className="inline whitespace-nowrap bg-[length:200%_auto] bg-clip-text text-transparent bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Automatically.
                  </Motion.span>
                </Motion.h2>

                <Motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                  className="mt-6 w-full max-w-lg flex flex-col items-center lg:items-start"
                >
                  <div className="space-y-3 sm:space-y-4 w-fit mb-2">
                    {highlights.map((text, i) => (
                      <div key={i} className="flex items-start gap-3 text-left">
                        <div className="mt-1 w-4 h-4 sm:w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2 h-2 sm:w-2.5 h-2.5 text-[#7e22ce] stroke-[4]" />
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <FeatureStack
                    items={["Lead forms", "Auto routing", "Pipeline sync"]}
                    className="!mt-1 sm:!mt-2"
                  />
                </Motion.div>
              </div>

              <Motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:self-start lg:translate-y-4"
              >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white">
                  <img
                    src={LeadHero}
                    alt="KaryaUp Lead Generation"
                    className="w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[380px] xl:h-[350px] object-cover object-left transition-all duration-300"
                  />
                </div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* 2. LEAD DASHBOARD → Data Visualization */}
        <section className="pt-10 sm:pt-16 lg:pt-20 pb-20 lg:pb-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                }
              }}
              className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              
              {/* LEFT SIDE: Mini Dashboard (7/12) */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Leads & Outreach (Bar) */}
                  <DashboardCard title="Leads & outreach (/ 7 days)" delay={0}>
                    <div className="h-32 flex items-end gap-2 px-2">
                      {[40, 20, 60, 30, 50, 45, 90].map((h, i) => (
                        <Motion.div
                          key={i}
                          variants={{
                            hidden: { height: 0 },
                            visible: { height: `${h}%` }
                          }}
                          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                          className={`flex-1 rounded-t-sm ${i === 6 ? 'bg-[#7e22ce]' : 'bg-slate-200'}`}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 px-1 text-[10px] font-bold text-slate-400">
                      <span>4/23</span><span>4/25</span><span>4/27</span><span>4/29</span>
                    </div>
                  </DashboardCard>

                  {/* Replies Trend (Wave) */}
                  <DashboardCard title="Replies trend (wave)" delay={0.1}>
                    <div className="h-32 relative">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <Motion.path
                          d="M 0 80 Q 25 20 50 50 T 100 20"
                          fill="none"
                          stroke="#7e22ce"
                          strokeWidth="2"
                          variants={{
                            hidden: { pathLength: 0 },
                            visible: { pathLength: 1 }
                          }}
                          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </svg>
                    </div>
                    <div className="flex justify-between mt-2 px-1 text-[10px] font-bold text-slate-400">
                      <span>4/23</span><span>4/25</span><span>4/27</span><span>4/29</span>
                    </div>
                  </DashboardCard>

                  {/* Stage Distribution (Pie/Donut) */}
                  <DashboardCard title="Stage distribution (pie)" delay={0.2}>
                    <div className="h-32 flex items-center justify-center relative">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <Motion.circle
                          cx="48" cy="48" r="36"
                          fill="none"
                          stroke="#7e22ce"
                          strokeWidth="12"
                          variants={{
                            hidden: { strokeDasharray: "0, 226.19" },
                            visible: { strokeDasharray: "180, 226.19" }
                          }}
                          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <circle cx="48" cy="48" r="36" fill="none" stroke="#e2e8f0" strokeWidth="12" className="opacity-20" />
                      </svg>
                    </div>
                    <p className="text-[10px] font-bold text-purple-600 mt-2 text-center uppercase tracking-widest">Needs Review</p>
                  </DashboardCard>

                  {/* Top Sources (Bar) */}
                  <DashboardCard title="Top sources (bar)" delay={0.3}>
                    <div className="h-32 flex items-end justify-center">
                       <Motion.div
                          variants={{ hidden: { height: 0 }, visible: { height: "85%" } }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                          className="w-8 bg-[#3b82f6] rounded-t-sm"
                        />
                        <div className="w-8 h-[2%] bg-slate-200 mx-4 rounded-t-sm" />
                        <div className="w-8 h-[2%] bg-slate-200 rounded-t-sm" />
                    </div>
                    <div className="flex justify-between mt-2 px-1 text-[8px] font-bold text-slate-400 uppercase">
                      <span>automation</span><span>outreach</span><span>manual</span>
                    </div>
                  </DashboardCard>
                </div>
              </div>

              {/* RIGHT SIDE: Narrative Content (5/12) */}
              <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
                <div className="space-y-4 text-center lg:text-left">
                  <Motion.div
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="flex items-center justify-center lg:justify-start gap-4 mb-2"
                  >
                    <div className="px-4 py-2 bg-purple-50 rounded-2xl border border-purple-100">
                      <span className="text-4xl font-black text-slate-900"><Counter value={243} /></span>
                      <span className="ml-2 text-xs font-black text-slate-400 uppercase tracking-widest">Leads</span>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-lg">
                      <TrendingUp className="w-3 h-3" />
                      <span>+12.5%</span>
                    </div>
                  </Motion.div>

                  <div className="overflow-hidden">
                    <Motion.h2 
                      variants={{ hidden: { y: "100%" }, visible: { y: 0 } }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]"
                    >
                      Your <Motion.span
                        className="bg-[length:200%_auto] bg-clip-text text-transparent bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce]"
                        animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >Intelligence</Motion.span> Dashboard.
                    </Motion.h2>
                  </div>
                  
                  <Motion.p 
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-slate-600 font-medium text-lg"
                  >
                    Gain complete visibility into your lead generation performance. Track outreach, monitor replies, and identify your highest-performing sources in real-time.
                  </Motion.p>
                </div>

                <div className="flex flex-col items-center lg:items-start">
                  <Motion.div 
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
                    className="space-y-4 w-fit"
                  >
                    {[
                      "Unified view of leads & outreach trends.",
                      "Automated stage distribution tracking.",
                      "Source-level performance analysis.",
                      "Real-time reply wave monitoring."
                    ].map((item, i) => (
                      <Motion.div 
                        key={i} 
                        variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                        className="flex items-center gap-3 group"
                      >
                        <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-[#7e22ce] transition-transform group-hover:scale-110">
                          <Check className="w-3 h-3 stroke-[4]" />
                        </div>
                        <span className="text-slate-700 font-bold text-sm sm:text-base">{item}</span>
                      </Motion.div>
                    ))}
                  </Motion.div>
                </div>
              </div>

            </Motion.div>
          </div>
        </section>

        {/* 3. FEATURE HIGHLIGHTS → The Deep Data Extraction Simulation */}
        <section className="relative bg-slate-50/50 pt-6 sm:pt-10 pb-8 sm:pb-16 overflow-x-hidden border-t border-slate-100 w-full max-w-full">
          <Motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
          >
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full">
              
              {/* LEFT: Simulation (8/12) */}
              <div className="lg:col-span-8 order-2 lg:order-1 w-full overflow-hidden">
                <div className="bg-slate-50 rounded-[2rem] p-1 sm:p-6 border border-slate-200 shadow-2xl shadow-slate-900/5 overflow-hidden min-h-[400px] sm:min-h-[500px] relative w-full">
                  <SearchSimulation />
                </div>
              </div>

              {/* RIGHT: Narrative Content (4/12) */}
              <div className="lg:col-span-4 space-y-8 pt-4 lg:pt-8 order-1 lg:order-2 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="space-y-6 flex flex-col items-center lg:items-start">
                  <div className="flex items-center gap-4">
                    <Motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-[#7e22ce] flex-shrink-0"
                    >
                      <Search className="w-6 h-6" />
                    </Motion.div>
                    
                    <Motion.h2 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight"
                    >
                      Deep Data <br/>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7e22ce] to-fuchsia-500">Extraction.</span>
                    </Motion.h2>
                  </div>
 
                  <Motion.p 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-slate-600 font-medium max-w-sm"
                  >
                    Automatically uncover multiple lead details—including emails, phone numbers, website metrics, and quality scores—all in one seamless workflow.
                  </Motion.p>
                </div>
 
                <div className="space-y-4 w-full max-w-sm">
                  {[
                    { t: "Direct Emails", d: "Verified professional addresses." },
                    { t: "Contact Numbers", d: "Direct lines for faster outreach." },
                    { t: "AI Lead Scoring", d: "Prioritize by conversion probability." }
                  ].map((item, i) => (
                    <Motion.div
                      key={i}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm group hover:border-purple-200 transition-colors text-left"
                    >
                      <h4 className="font-bold text-slate-900 group-hover:text-[#7e22ce] transition-colors">{item.t}</h4>
                      <p className="text-xs text-slate-400 font-medium">{item.d}</p>
                    </Motion.div>
                  ))}
                </div>
              </div>

            </div>
          </Motion.div>
        </section>

        <FeatureCTA 
          containerClassName="mt-4 sm:mt-8 mb-12"
          title="Turn every search into a high-converting conversation."
          highlights={[
            "Automated AI Email Personalization",
            "Deep Data Points (LinkedIn, Web, Social)",
            "One-Click Global Campaigns"
          ]}
          image={LeadHero}
          imageAlt="Lead Generation Automation"
        />
      </div>
    </>
  );
}

{/* Helper: Search Simulation Video-like UI */}
function SearchSimulation() {
  const [query, setQuery] = useState("");
  const [phase, setPhase] = useState(1); // 1 or 2
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const queries = ["it company in UK", "SaaS startup in Delhi"];
  
  const leadsPhase1 = [
    { name: "Gleampay", web: "gleampay.com", email: "alex@gleampay.com", phone: "+44 20 7946 0958", score: 88 },
    { name: "TechNova", web: "technova.io", email: "sarah@technova.io", phone: "+44 7700 900551", score: 92 },
    { name: "ZestFlow", web: "zestflow.ai", email: "mike@zestflow.ai", phone: "+44 20 8832 1234", score: 76 },
    { name: "Vortex Media", web: "vortex.com", email: "jason@vortex.com", phone: "+44 7400 123456", score: 84 },
  ];

  const leadsPhase2 = [
    { name: "CloudScale", web: "cloudscale.in", email: "hr@cloudscale.in", phone: "+91 98765 43210", score: 95 },
    { name: "PixelPerfect", web: "pixel.ai", email: "ceo@pixel.ai", phone: "+91 88888 77777", score: 81 },
    { name: "DataMint", web: "datamint.com", email: "contact@datamint.com", phone: "+91 77777 66666", score: 89 },
    { name: "FinFlow", web: "finflow.io", email: "support@finflow.io", phone: "+91 66666 55555", score: 74 },
  ];

  useEffect(() => {
    if (isInView) {
      startSequence(1);
    }
  }, [isInView]);

  const startSequence = (p) => {
    setPhase(p);
    setShowResults(false);
    setQuery("");
    setIsTyping(true);
  };

  useEffect(() => {
    if (isTyping) {
      const fullText = queries[phase - 1];
      let i = 0;
      const interval = setInterval(() => {
        setQuery(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) {
          clearInterval(interval);
          setTimeout(() => setShowCursor(true), 500);
        }
      }, 80  );
      return () => clearInterval(interval);
    }
  }, [isTyping, phase]);

  return (
    <Motion.div 
      ref={containerRef} 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full h-full font-sans text-slate-900"
    >
      <div className="flex flex-col gap-3 mb-6 relative z-20">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <div className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm font-bold shadow-sm min-h-[46px] flex items-center">
            {query}
            {isTyping && (
              <Motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1 w-0.5 h-4 bg-purple-500"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
          <Motion.button
            animate={isClicked ? { scale: 0.95 } : {}}
            className="w-full sm:flex-1 whitespace-nowrap px-3 py-2.5 bg-[#7e22ce] text-white rounded-xl text-[9px] sm:text-xs font-black flex items-center justify-center gap-2 shadow-lg shadow-purple-200"
          >
            <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> <span className="hidden xs:inline">Run workflow search</span><span className="xs:hidden">Workflow Search</span>
          </Motion.button>
          <button className="w-full sm:w-auto px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-[9px] sm:text-xs font-bold text-slate-600 flex items-center justify-center gap-2">
            <Search className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> <span className="hidden xs:inline">Normal search</span><span className="xs:hidden">Quick Search</span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {["All", "imported", "verification pending", "qualified", "needs review"].map((tab, i) => (
          <span key={tab} className={`whitespace-nowrap px-3 py-1.5 rounded-full text-[10px] font-bold border ${i === 0 ? 'bg-white border-slate-200 shadow-sm' : 'border-transparent text-slate-400'}`}>
            {tab}
          </span>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden relative">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="min-w-[450px] sm:min-w-[650px]">
            <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <div className="col-span-4 sm:col-span-3">Contact / company</div>
              <div className="col-span-3 sm:col-span-2">Website</div>
              <div className="col-span-5 sm:col-span-2 text-center">Email</div>
              <div className="hidden sm:block sm:col-span-3 text-center">Contact Number</div>
              <div className="hidden sm:block sm:col-span-2 text-right">Score</div>
            </div>

            <div className="divide-y divide-slate-100 relative min-h-[300px]">
              {!showResults && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300">
                    <Search className="w-12 h-12 mb-2 opacity-20" />
                    <p className="text-xs font-bold uppercase tracking-widest">Awaiting Search...</p>
                </div>
              )}

              <AnimatePresence mode="wait">
                {showResults && (
                  <Motion.div key={phase} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {(phase === 1 ? leadsPhase1 : leadsPhase2).map((lead, i) => (
                      <Motion.div
                        key={lead.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="grid grid-cols-12 px-4 py-4 items-center hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0"
                      >
                        <div className="col-span-4 sm:col-span-3 flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-purple-100 flex items-center justify-center text-[#7e22ce] font-black text-[9px]">
                            {lead.name[0]}
                          </div>
                          <div className="text-[9px] font-black text-slate-900 truncate">{lead.name}</div>
                        </div>
                        <div className="col-span-3 sm:col-span-2 text-[8px] font-medium text-slate-400 truncate">{lead.web}</div>
                        <div className="col-span-5 sm:col-span-2 text-[9px] font-black text-slate-900 truncate text-center">{lead.email}</div>
                        <div className="hidden sm:block sm:col-span-3 text-[9px] font-black text-[#7e22ce] truncate text-center">{lead.phone}</div>
                        <div className="hidden sm:block sm:col-span-2 text-right">
                          <span className="text-[10px] font-black text-slate-900">{lead.score}</span>
                        </div>
                      </Motion.div>
                    ))}
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showCursor && (
          <Motion.div
            key={phase}
            initial={{ x: "95%", y: "80%", opacity: 0 }}
            animate={{ 
              x: window.innerWidth < 640 ? "50%" : "42%", 
              y: window.innerWidth < 640 ? "22%" : "18%", 
              opacity: 1 
            }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            onAnimationComplete={() => {
               setIsClicked(true);
               setTimeout(() => {
                 setIsClicked(false);
                 setShowCursor(false);
                 setIsTyping(false);
                 setShowResults(true);
                 
                 // Phase transition logic
                 if (phase === 1) {
                   setTimeout(() => startSequence(2), 4000);
                 } else {
                   setTimeout(() => startSequence(1), 4000);
                 }
               }, 200);
            }}
            className="absolute z-50 pointer-events-none left-0 top-0 w-full h-full"
          >
            <div className="relative -ml-3 -mt-3">
               <MousePointerClick className="w-6 h-6 text-slate-900 drop-shadow-xl" />
               {isClicked && (
                 <Motion.div 
                   initial={{ scale: 0, opacity: 1 }}
                   animate={{ scale: 3, opacity: 0 }}
                   className="absolute inset-0 bg-purple-500/30 rounded-full"
                 />
               )}
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.div>
  );
}


function EmailFlow() {
  const steps = [
    { title: "Send Email", icon: Mail, color: "bg-[#7e22ce]" },
    { title: "Wait 2 Days", icon: Clock, color: "bg-slate-800" },
    { title: "Follow-up", icon: CornerDownRight, color: "bg-fuchsia-500" },
    { title: "Reply Received", icon: Sparkles, color: "bg-emerald-500" },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-0 px-4">
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <Motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3 }}
            className="flex flex-col items-center gap-4 z-20"
          >
            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl ${step.color} flex items-center justify-center text-white shadow-xl shadow-black/5 border-4 border-white`}>
              <step.icon className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <span className="font-black text-slate-900 text-[10px] sm:text-xs uppercase tracking-[0.2em]">{step.title}</span>
          </Motion.div>
          {i < steps.length - 1 && (
            <div className="hidden lg:flex flex-1 items-center justify-center px-4">
              <Motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.3 + 0.2, duration: 0.8 }}
                className="h-1 bg-purple-200 relative"
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#7e22ce] rounded-full" />
              </Motion.div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function BroadcastAnimation({ isMobile }) {
  return (
    <div className="relative h-[300px] sm:h-[400px] flex items-center justify-center">
      {[1, 2, 3].map((i) => (
        <Motion.div
          key={i}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1, 2], opacity: [0.3, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
          className="absolute w-40 h-40 sm:w-60 sm:h-60 rounded-full border-2 border-purple-400/30"
        />
      ))}
      <Motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative z-20 w-24 h-24 sm:w-32 sm:h-32 bg-[#7e22ce] rounded-full flex items-center justify-center text-white shadow-2xl shadow-purple-500/50"
      >
        <Megaphone className="w-10 h-10 sm:w-14 sm:h-14" />
      </Motion.div>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <Motion.div
          key={i}
          initial={{ opacity: 0, x: 0, y: 0 }}
          whileInView={{ 
            opacity: [0, 1, 0],
            x: Math.cos((angle * Math.PI) / 180) * (isMobile ? 120 : 180),
            y: Math.sin((angle * Math.PI) / 180) * (isMobile ? 120 : 180),
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2, ease: "easeOut" }}
          className="absolute w-8 h-8 sm:w-10 sm:h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 border border-slate-200"
        >
          <Users className="w-4 h-4 sm:w-5 sm:h-5" />
        </Motion.div>
      ))}
    </div>
  );
}

function DashboardCard({ title, children, delay = 0 }) {
  return (
    <Motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 }
      }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between"
    >
      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{title}</h4>
      <div className="flex-1">
        {children}
      </div>
    </Motion.div>
  );
}

function Counter({ value }) {
  const [count, setCount] = useState(0);
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return <span ref={containerRef}>{count}</span>;
}

