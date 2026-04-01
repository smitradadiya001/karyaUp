import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.webp";
import planImage from "../../assets/Gantt.webp";
import FeatureCTA from "../../components/FeatureCTA";
import PageHero from "../../components/PageHero";
import { Helmet } from "react-helmet-async";

export default function IT() {
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
        <title>IT & PMO | KaryaUp</title>
        <meta name="description" content="Empower your IT PMO teams with KaryaUp. Centralize service management, asset tracking, and incident response with AI-driven workflows." />
        <meta name="keywords" content="IT management, PMO software, service desk automation, incident response, asset tracking" />
        <link rel="canonical" href="https://karyaup.com/solutions/it" />
      </Helmet>
      <div className="bg-white font-sans overflow-x-hidden pt-20">

        {/* ================= HERO SECTION ================= */}
        <PageHero
          pillText="Solutions / IT & PMO"
          titleBlack="The Everything App for"
          titleGradient="IT & PMO Teams"
          descriptionList={[
            "Manage IT projects, service requests, and governance in one place—all connected by AI.",
            "KaryaUp streamlines workflows and compliance so IT operations run with speed and precision."
          ]}
          featureStackItems={["Service Management", "Asset Tracking", "Incident Response", "Sprint Agility"]}
          imageSrc={dashboardImage}
          imageAlt="IT PMO Dashboard"
        />

        {/* ================= AI BANNER SECTION ================= */}
        <section className="w-full bg-white py-24 px-6">
          <div className="max-w-5xl mx-auto relative bg-slate-50 rounded-[3rem] p-10 lg:p-16 border border-slate-100 shadow-xl text-center overflow-hidden group hover:bg-white hover:border-purple-200 transition-all duration-500">
            <motion.h2
              initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6"
            >
              The World's most complete<br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                AI for Project Management
              </motion.span>
            </motion.h2>

            <p className="mx-auto text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
              Meet the first AI that works across your entire project lifecycle.
              From drafting plans to capturing meetings,{" "}
              <span className="font-bold text-slate-900">
                KaryaUp AI frees your team to focus on impact.
              </span>
            </p>
          </div>
        </section>

        {/* ================= SERVICE DESK AUTOMATION SECTION ================= */}
        <section className="w-full py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Service Desk<br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Automation
                </motion.span>
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-lg">
                AI-powered ticket routing, auto-resolutions, and SLA tracking.
                Reduce MTTR by <span className="text-purple-700 font-black">60%</span>.
              </p>

              <ul className="space-y-6">
                {[
                  "Auto-categorize & prioritize tickets",
                  "AI-suggested resolutions & knowledge base",
                  "Real-time SLA dashboards & alerts"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-bold text-slate-700 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-sm font-black group-hover:scale-110 transition-transform">
                      ✓
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 bg-white p-4">
                <img
                  src={planImage}
                  alt="Service Desk Interface"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-60" />
              <div className="absolute -z-10 -top-10 -left-10 w-48 h-48 bg-fuchsia-100 rounded-full blur-3xl opacity-40" />
            </motion.div>
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <FeatureCTA
          title="Tasks that connect to everything you do"
          description="Work Smarter with tasks that can live in your whiteboards, chat, calendar—anywhere you work."
          image={dashboardImage}
          imageAlt="KaryaUp IT Dashboard"
          containerClassName="mt-12 mb-24"
          paddingClassName="p-3 lg:p-4 lg:py-6"
          imageClassName="w-full max-w-[940px] translate-y-8"
          imageOuterClassName="relative w-full flex justify-center"
        />
      </div>
    </>
  );
}