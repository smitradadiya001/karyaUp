import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.webp";
import FeatureCTA from "../../components/FeatureCTA";
import PageHero from "../../components/PageHero";
import { Helmet } from "react-helmet-async";

export default function SolProjectManagement() {
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
        <title>Project Management | KaryaUp</title>
        <meta name="description" content="Deliver projects with full visibility and clear accountability. KaryaUp for project management teams features automated sprints, resource planning, and Gantt charts." />
        <meta name="keywords" content="project management for teams, team velocity, resource planning, automated sprints" />
        <link rel="canonical" href="https://karyaup.com/solutions/project-management" />
      </Helmet>
    <div className="bg-white font-sans overflow-x-hidden pt-20">

      {/* ================= HERO SECTION ================= */}
      <PageHero
        pillText="Solutions / Project Management"
        titleBlack="Deliver with Full"
        titleGradient="Visibility & Accountability"
        descriptionList={[
          "Manage any type of project with one flexible platform—from simple tasks to complex multi-phase roadmaps.",
          "KaryaUp's project management solution ensures every team member knows what to do and when to do it."
        ]}
        featureStackItems={["Team Velocity", "Resource Planning", "Automated Sprints", "Gantt Agility"]}
        imageSrc={dashboardImage}
        imageAlt="Project Management Dashboard"
      />

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: isMobile ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Built for <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Project Leaders
            </motion.span>
          </motion.h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Unify your team, tools, and data in one secure high-performance workspace.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { title: "Structured Workflows", desc: "Create templates for common project types so teams spin up new projects in seconds.", icon: "📋" },
            { title: "Gantt & Timeline", desc: "Visualize the entire project lifecycle with dependencies and milestones in one view.", icon: "📅" },
            { title: "Progress Dashboards", desc: "Track project health with live status charts and team velocity metrics.", icon: "📊" },
            { title: "Deadline Alerts", desc: "Automatic alerts for overdue tasks and approaching deadlines so nothing is missed.", icon: "🔔" },
            { title: "Stakeholder Reports", desc: "Share real-time status reports with clients without manual prep.", icon: "👥" },
            { title: "Automations", desc: "Automate handoffs and recurring tasks to cut out manual coordination.", icon: "⚡" },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ y: isMobile ? 0 : 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-[2.5rem] p-8 bg-slate-50 border border-transparent hover:border-purple-200 hover:bg-white hover:shadow-xl transition-all duration-300"
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
        imageAlt="KaryaUp PM Solution Dashboard"
        containerClassName="mt-12 mb-24"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px] translate-y-8"
        imageOuterClassName="relative w-full flex justify-center"
      />
    </div>
    </>
  );
}
