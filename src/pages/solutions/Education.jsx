import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, GraduationCap, BookOpen, School, Target,ArrowRight} from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";
import FeatureCTA from "../../components/FeatureCTA";
import PageHero from "../../components/PageHero";
import karyaupLogo from "../../assets/logo-svg.svg";
import { Helmet } from "react-helmet-async";

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

export default function Education() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Background pattern rows
  const infiniteText = "KaryaUp ".repeat(20);
  const rows = Array(12).fill(infiniteText);

  const oldWayItems = [
    'Scattered physical notebooks', 'Fragmented lesson planning', 'Manual grading & slow feedback',
    'Lost assignments in emails', 'Rigid, one-size-fits-all teaching', 'Difficulty tracking progress', 'Siloed administrative data'
  ];

  const newWayItems = [
    'One digital hub for all courses', 'AI-powered lesson templates', 'Instant feedback loops',
    'Interactive digital whiteboards', 'Personalized learning paths', 'Real-time student analytics', 'Automated admin workflows'
  ];

  return (
    <>
      <Helmet>
        <title>Education | KaryaUp</title>
        <meta name="description" content="Transform your educational institution with KaryaUp. Centralize curriculum planning, student tracking, and administrative workflows." />
        <meta name="keywords" content="education management, curriculum planning, student tracking, academic coordination" />
        <link rel="canonical" href="https://karyaup.com/solutions/education" />
      </Helmet>
      <div className="bg-white font-sans overflow-x-hidden pt-20">

        {/* ================= HERO SECTION ================= */}
        <PageHero
          pillText="Solutions / Education"
          titleBlack="Simplify"
          titleGradient="Education Management"
          descriptionList={[
            "Manage academic and administrative resources in one place with KaryaUp's time-saving work tools.",
            "From admissions to graduation, keep every step connected and efficient."
          ]}
          featureStackItems={["Curriculum Planning", "Student Tracking", "Resource Allocation", "Auto Grading"]}
          imageSrc={dashboardImage}
          imageAlt="Education Dashboard"
        />

        {/* ================= REIMAGINED COMPARISON SECTION ================= */}
        <section className="py-12 sm:py-24 px-4 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
                Education Management<br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  is broken, we fixed it
                </motion.span>
              </h2>
            </motion.div>

            <div className="p-[2px] rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-br from-purple-400 via-fuchsia-400 to-indigo-500 shadow-2xl">
              <div className="bg-slate-50 rounded-[1.9rem] sm:rounded-[2.9rem] overflow-hidden flex flex-col md:flex-row items-start justify-between min-h-[400px] relative">

                {/* 1. LEFT SIDE: Old Way */}
                <div className="w-full md:w-[35%] p-6 sm:p-10 z-10 bg-white/40 border-b md:border-b-0 md:border-r border-slate-200">
                  <h3 className="text-2xl font-black text-slate-900 mb-1 text-center">The Old Way</h3>
                  <p className="text-[10px] text-slate-500 mb-6 text-center uppercase tracking-widest font-bold">Manual updates cause friction.</p>
                  <div className="h-64 overflow-hidden relative font-sans">
                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-slate-50 via-transparent to-slate-50 opacity-80" />
                    <motion.div
                      animate={{ y: ["0%", "-50%"] }}
                      transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                      className="flex flex-col gap-3"
                    >
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
                  className="w-full md:w-[30%] flex flex-col items-center relative py-12 px-6 overflow-hidden self-stretch"
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
                    <h3 className={`text-xl md:text-2xl font-black mb-1 transition-colors duration-500 ${isHovered ? "text-fuchsia-500" : "text-slate-900"}`}>
                      Enterprise-Grade Security
                    </h3>
                    <p className={`text-[11px] mb-6 font-medium transition-colors duration-500 ${isHovered ? "text-purple-500" : "text-slate-500"}`}>
                      Your data is safe, private, and yours alone.
                    </p>

                    <div className="relative flex items-center justify-center w-full h-56" style={{ perspective: "1000px" }}>
                      <div className="absolute inset-0 flex items-center justify-center opacity-80 scale-90">
                        <LightShield3D />
                      </div>
                      <motion.img
                        src={karyaupLogo}
                        alt="KaryaUp Logo"
                        animate={{ rotateY: 360, scale: isHovered ? 1.05 : 0.9 }}
                        transition={{ rotateY: { duration: 8, ease: "linear", repeat: Infinity }, scale: { duration: 0.4 } }}
                        className="w-32 h-32 md:w-40 md:h-40 object-contain z-30 drop-shadow-[0_15px_35px_rgba(168,85,247,0.4)]"
                        style={{ transformStyle: "preserve-3d" }}
                      />
                      <div className={`absolute w-32 h-32 bg-fuchsia-500/20 rounded-full blur-3xl transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />
                    </div>
                  </div>
                </div>

                {/* 3. RIGHT SIDE: KaryaUp Way */}
                <div className="w-full md:w-[35%] p-6 sm:p-10 z-10 bg-white/40 border-t md:border-t-0 md:border-l border-slate-200">
                  <h3 className="text-2xl font-black text-slate-900 mb-1 text-center">The KaryaUp Way</h3>
                  <p className="text-[10px] text-slate-500 mb-6 text-center uppercase tracking-widest font-bold">Smart orchestration for learning.</p>
                  <div className="h-64 overflow-hidden relative font-sans">
                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-slate-50 via-transparent to-slate-50 opacity-80" />
                    <motion.div
                      animate={{ y: ["-50%", "0%"] }}
                      transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                      className="flex flex-col gap-3"
                    >
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

        {/* ================= EDUCATION LIFECYCLE ================= */}
        <section className="w-full py-24 px-6 lg:px-20 bg-slate-50/50">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: isMobile ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight"
            >
              Streamline the <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Education Lifecycle
              </motion.span>
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-7xl mx-auto">
            {[
              { title: "Admissions", desc: "Simplify applications and intake with automated workflows.", icon: <BookOpen className="mx-auto text-purple-600" size={28} /> },
              { title: "Learning", desc: "Centralize coursework, assignments, and collaboration.", icon: <GraduationCap className="mx-auto text-purple-600" size={28} /> },
              { title: "Administration", desc: "Manage schedules, resources, and compliance with ease.", icon: <School className="mx-auto text-purple-600" size={28} /> },
              { title: "Outcomes", desc: "Track performance, visualize progress, and celebrate success.", icon: <Target className="mx-auto text-purple-600" size={28} /> },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white rounded-3xl shadow-sm p-8 border border-slate-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group"
              >
                <div className="mb-5 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{step.title}</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="w-full py-24 relative overflow-hidden bg-slate-50">
        {/* Animated Background Glows for Glass Effect */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-200 rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-fuchsia-200 rounded-full blur-[120px] opacity-40 animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Streamline the <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
               Education Lifecycle
            </motion.span>
          </motion.h1>
            
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Admissions", desc: "Simplify applications and intake with automated workflows.", icon: <BookOpen className="text-purple-600" size={28} /> },
              { title: "Learning", desc: "Centralize coursework, assignments, and collaboration.", icon: <GraduationCap className="text-purple-600" size={28} /> },
              { title: "Administration", desc: "Manage schedules, resources, and compliance with ease.", icon: <School className="text-purple-600" size={28} /> },
              { title: "Outcomes", desc: "Track performance, visualize progress, and celebrate success.", icon: <Target className="text-purple-600" size={28} /> },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="group relative p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col items-center text-center transition-all duration-300"
              >
                {/* Logo & Icon Container */}
                <div className="mb-8 relative">
                 
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center shadow-md border border-purple-100">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6">
                  {step.desc}
                </p>
                
                <div className="flex items-center gap-2 text-[#7e22ce] font-bold text-xs cursor-pointer opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  EXPLORE FEATURE <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* ================= FINAL CTA ================= */}
        <FeatureCTA
          title="Tasks that connect to everything you do"
          description="Work Smarter with tasks that can live in your whiteboards, chat, calendar—anywhere you work."
          image={dashboardImage}
          imageAlt="KaryaUp Education Dashboard"
          containerClassName="mt-12 mb-24"
          paddingClassName="p-3 lg:p-4 lg:py-6"
          imageClassName="w-full max-w-[940px] translate-y-8"
          imageOuterClassName="relative w-full flex justify-center"
        />
      </div>
    </>
  );
}
