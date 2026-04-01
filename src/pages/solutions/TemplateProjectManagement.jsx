import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.webp";
import planImage from "../../assets/Gantt.webp";
import FeatureCTA from "../../components/FeatureCTA";
import PageHero from "../../components/PageHero";
import { Helmet } from "react-helmet-async";

export default function TemplateProjectManagement() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const greenCards = [
    { title: "Unified platform hub", tag: "Efficiency" },
    { title: "Instant global search", tag: "Visibility" },
    { title: "Automated report generation", tag: "Labor" },
    { title: "AI-powered timeline tracking", tag: "Growth" },
    { title: "Real-time resource analytics", tag: "Scale" },
  ];

  return (
    <>
      <Helmet>
        <title>Project Management Template | KaryaUp</title>
        <meta name="description" content="Launch your projects instantly with KaryaUp's premium project management template. Features unified timelines, critical path monitoring, and budget control." />
        <meta name="keywords" content="project management template, gantt chart template, agile project planning, milestone tracking" />
        <link rel="canonical" href="https://karyaup.com/solutions/templates/project-management" />
      </Helmet>
    <div className="bg-white font-sans overflow-x-hidden pt-20">

      {/* ================= HERO SECTION ================= */}
      <PageHero
        pillText="Templates / Project Management"
        titleBlack="The Premium"
        titleGradient="Project Management Template"
        descriptionList={[
          "Launch projects instantly with built-in roadmaps, backlogs, and agile dev cycles.",
          "Molding to any workflow, KaryaUp keeps everything organized with enterprise-grade execution."
        ]}
        featureStackItems={["Unified Timelines", "Critical Path", "Milestone Tracking", "Budget Control"]}
        imageSrc={dashboardImage}
        imageAlt="Project Management Template Dashboard"
      />

      {/* ================= HIGHLIGHT SECTION ================= */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
              Why Project Leaders <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Choose This Template
              </motion.span>
            </h2>
            <ul className="space-y-6">
              {[
                "Consolidated data source for all departments",
                "Automated status reports with one click",
                "Dynamic Gantt charts that adjust in real-time",
                "Secure collaboration across client boundaries"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-lg font-bold text-slate-700 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-sm font-black transition-transform group-hover:scale-110">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 p-3 bg-slate-50"
          >
            <img src={planImage} alt="Gantt Chart Planning" className="w-full h-auto rounded-[2rem]" />
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work Smarter with tasks that can live in your whiteboards, chat, calendar—anywhere you work."
        image={dashboardImage}
        imageAlt="KaryaUp PM Template Dashboard"
        containerClassName="mt-12 mb-24"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px] translate-y-8"
        imageOuterClassName="relative w-full flex justify-center"
      />
    </div>
    </>
  );
}