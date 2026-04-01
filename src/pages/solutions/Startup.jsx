import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.webp";
import planImage from "../../assets/Gantt.webp";
import FeatureCTA from "../../components/FeatureCTA";
import PageHero from "../../components/PageHero";
import { Helmet } from "react-helmet-async";

export default function Startup() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <Helmet>
        <title>Startup | KaryaUp</title>
        <meta name="description" content="Scale your startup from ideation to unicorn with KaryaUp. Lean agility, rapid iteration, and seed funding tracking in one platform." />
        <meta name="keywords" content="startup software, seed tracking, rapid iteration, MVP development, lean agility" />
        <link rel="canonical" href="https://karyaup.com/solutions/startup" />
      </Helmet>
    <div className="bg-white font-sans overflow-x-hidden pt-20">

      {/* ================= HERO SECTION ================= */}
      <PageHero
        pillText="Solutions / Startup"
        titleBlack="The Everything App for"
        titleGradient="Startup Growth"
        descriptionList={[
          "Brainstorm, plan, and execute your team's vision—from multi-channel campaigns to product launches.",
          "KaryaUp gives startups the power to scale rapidly without losing focus or agility."
        ]}
        featureStackItems={["Lean Agility", "Seed Funding Tracker", "Founder Dashboard", "Rapid Iteration"]}
        imageSrc={dashboardImage}
        imageAlt="Startup Dashboard"
      />

      {/* ================= ROADMAP SECTION ================= */}
      <section className="w-full py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
              Connect Your <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Roadmap to Work
              </motion.span>
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-xl">
              Manage everything from product roadmaps to sales pipelines in a single place. KaryaUp's Hierarchy makes it easy to expand your team as you scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-4 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-xl"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-white group hover:scale-[1.02] transition-transform duration-500">
              <img src={planImage} alt="KaryaUp Project Roadmap" className="w-full h-auto object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STARTUP GROWTH JOURNEY SECTION ================= */}
      <section className="w-full py-24 px-6 lg:px-20 bg-slate-50/30">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: isMobile ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Your Startup Journey <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Powered by KaryaUp
            </motion.span>
          </motion.h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            From idea to unicorn, KaryaUp gives startups the tools to brainstorm, plan, execute, and scale—all in one high-density platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { title: "Ideation", desc: "Capture ideas, collaborate with co-founders, and align vision.", icon: "💡" },
            { title: "Launch", desc: "Plan sprints, track tasks, and deliver your MVP faster.", icon: "🚀" },
            { title: "Growth", desc: "Automate workflows, manage sales pipelines, and expand reach.", icon: "📈" },
            { title: "Scale", desc: "Build hierarchies, manage complex projects, and grow.", icon: "🦄" },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ y: isMobile ? 0 : 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative rounded-[2.5rem] p-8 bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-purple-200 transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-purple-700 transition-colors">
                {card.title}
              </h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                {card.desc}
              </p>
              <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500 w-0 group-hover:w-full transition-all duration-500 rounded-b-[2.5rem]" />
            </motion.div>
          ))}
        </div>
      </section>

        
        <section className="w-full py-10 lg:px-5 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">

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
            Your Startup Journey <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Powered by KaryaUp
            </motion.span>
          </motion.h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From idea to unicorn, KaryaUp gives startups the tools to brainstorm, plan, execute, and scale — all in one platform.
          </p>
        </div>

        {/* Journey Steps */}
       {/* Journey Steps */}
       <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-4 gap-8 px-4"
        >
          {[
            { step: "01", title: "Ideation", desc: "Capture ideas, collaborate with co-founders, and align vision.", icon: "💡", color: "from-pink-500 to-purple-600", border: "hover:border-pink-500/50" },
            { step: "02", title: "Launch", desc: "Plan sprints, track tasks, and deliver your MVP faster.", icon: "🚀", color: "from-indigo-500 to-blue-600", border: "hover:border-indigo-500/50" },
            { step: "03", title: "Growth", desc: "Automate workflows, manage sales pipelines, and expand your reach.", icon: "📈", color: "from-green-400 to-emerald-600", border: "hover:border-green-500/50" },
            { step: "04", title: "Scale", desc: "Build hierarchies, manage complex projects, and grow into a unicorn.", icon: "🦄", color: "from-orange-400 to-red-500", border: "hover:border-orange-500/50" },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer"
            >
              {/* Animated Background Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${card.color} rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl p-8 h-full flex flex-col items-start border border-slate-100 transition duration-300 group-hover:bg-white/95">
                
                {/* Step Number Badge */}
                <span className={`text-[10px] font-black tracking-widest uppercase mb-4 px-2 py-1 rounded bg-slate-50 text-slate-400 group-hover:bg-gradient-to-r ${card.color} group-hover:text-white transition-all duration-300`}>
                  Phase {card.step}
                </span>

                <div className="text-4xl mb-4 transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600">
                  {card.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-700">
                  {card.desc}
                </p>

                {/* Bottom Decorative Line */}
                <div className="mt-auto pt-6 w-full">
                   <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${card.color} transition-all duration-500 rounded-full`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work Smarter with tasks that can live in your whiteboards, chat, calendar—anywhere you work."
        image={dashboardImage}
        imageAlt="KaryaUp Startup Dashboard"
        containerClassName="mt-12 mb-24"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px] translate-y-8"
        imageOuterClassName="relative w-full flex justify-center"
      />
    </div>
    </>
  );
}
