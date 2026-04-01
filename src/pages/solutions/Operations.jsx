import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.webp";
import FeatureCTA from "../../components/FeatureCTA";
import PageHero from "../../components/PageHero";
import planImage from "../../assets/Gantt.webp";
import { Helmet } from "react-helmet-async";

export default function Operations() {
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
        <title>Operations | KaryaUp</title>
        <meta name="description" content="Optimize your business operations with KaryaUp. Real-time visibility, automated processes, and connected team workflows in one platform." />
        <meta name="keywords" content="operations management, supply chain tracking, process automation, logistics logs" />
        <link rel="canonical" href="https://karyaup.com/solutions/operations" />
      </Helmet>
    <div className="bg-white font-sans overflow-x-hidden pt-20">

      {/* ================= HERO SECTION ================= */}
      <PageHero
        pillText="Solutions / Operations"
        titleBlack="The Everything App for"
        titleGradient="Operations Teams"
        descriptionList={[
          "Get real-time visibility into your revenue, expenses, and margins. Analyze profitability across projects, teams, and clients.",
          "KaryaUp streamlines your entire operational lifecycle, connecting every department to one source of truth."
        ]}
        featureStackItems={["Inventory Control", "Supply Chain", "Process Automation", "Logistics Logs"]}
        imageSrc={dashboardImage}
        imageAlt="Operations Dashboard"
      />

      {/* ================= TRUSTED BY TEAMS ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Trusted by Operations<br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Teams everywhere
              </motion.span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 font-medium leading-relaxed">
              Join 500+ growing companies using KaryaUp to streamline complex operations and hit aggressive growth targets.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { num: "500+", label: "Teams", color: "text-slate-900" },
              { num: "2.4M", label: "Tasks/month", color: "text-slate-900" },
              { num: "98%", label: "Uptime", color: "text-slate-900" },
              { num: "24/7", label: "Support", color: "text-slate-900" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ y: isMobile ? 0 : 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <h3 className={`text-4xl md:text-5xl font-black ${stat.color} mb-3 group-hover:text-purple-700 transition-colors`}>
                  {stat.num}
                </h3>
                <p className="text-slate-500 font-black uppercase tracking-widest text-[10px]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURE CARDS ================= */}
      <section className="w-full py-24 px-6 lg:px-20 bg-slate-50/30">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: isMobile ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Operations Made<br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Effortless
            </motion.span>
          </motion.h2>

          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            KaryaUp automates routine tasks, giving you real‑time visibility and connecting every team to the same high-density source of truth.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Automated Processes",
              desc: "Eliminate repetitive work with smart automation that handles updates, reporting, and task assignments.",
              icon: "⚙️",
            },
            {
              title: "Real-Time Insights",
              desc: "Track performance, budgets, and timelines instantly with dashboards designed for maximum clarity.",
              icon: "📊",
            },
            {
              title: "Connected Teams",
              desc: "Break down silos and ensure every department works from the same data, keeping everyone aligned.",
              icon: "🤝",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ y: isMobile ? 0 : 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative rounded-[2.5rem] p-8 border border-slate-100 bg-white shadow-sm hover:shadow-2xl hover:border-purple-200 transition-all duration-300 group"
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

      {/* ================= FINAL CTA ================= */}
      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work Smarter with tasks that can live in your whiteboards, chat, calendar—anywhere you work."
        image={dashboardImage}
        imageAlt="KaryaUp Operations Dashboard"
        containerClassName="mt-12 mb-24"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px] translate-y-8"
        imageOuterClassName="relative w-full flex justify-center"
      />
    </div>
    </>
  );
}