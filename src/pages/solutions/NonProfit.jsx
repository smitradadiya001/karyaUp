import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FeatureCTA from "../../components/FeatureCTA";
import dashboardImage from "../../assets/dashboard2.webp";
import PageHero from "../../components/PageHero";
import { Helmet } from "react-helmet-async";

export default function NonProfit() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cards = [
    {
      title: "Forms & Surveys",
      desc: "Create customizable forms for donation requests, volunteer sign-ups, and impact assessments. Link them directly to your tracking systems.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&w=800&q=80",
    },
    {
      title: "Grant Database",
      desc: "Track large datasets of potential funders and active grants. Use Custom Fields to monitor deadlines, requirements, and payout statuses.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&w=800&q=80",
    },
    {
      title: "Impact Reporting",
      desc: "Visualize your results for stakeholders. Add charts, docs, and volunteer timesheets into one place to showcase your mission's success.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&w=800&q=80",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Non-Profit | KaryaUp</title>
        <meta name="description" content="Empower your non-profit mission with KaryaUp. Streamline grant tracking, donor management, and impact reporting in one unified platform." />
        <meta name="keywords" content="non-profit software, grant tracking, donor management, volunteer coordination" />
        <link rel="canonical" href="https://karyaup.com/solutions/nonprofit" />
      </Helmet>
    <div className="bg-white font-sans overflow-x-hidden pt-20">

      {/* ================= HERO SECTION ================= */}
      <PageHero
        pillText="Solutions / Non-Profit"
        titleBlack="Grow your Mission"
        titleGradient="Driven by KaryaUp"
        descriptionList={[
          "Change the world, one task at a time. Bring your mission, tools, and community into one unified place.",
          "KaryaUp makes it easy to track impact and manage resources, avoiding the chaos of fragmented systems."
        ]}
        featureStackItems={["Grant Tracking", "Donor Management", "Volunteer Coordination", "Impact Reporting"]}
        imageSrc={dashboardImage}
        imageAlt="Non-Profit Dashboard"
      />

      {/* ================= MANAGEMENT SECTION ================= */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto text-center">
        <div className="mb-20 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: isMobile ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]"
          >
            Streamline your <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Non-Profit Operations
            </motion.span>
          </motion.h2>
          <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Replace fragmented tools with KaryaUp's unified solutions built for mission-driven teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto overflow-visible">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 60,
                x: isMobile ? 0 : (i === 0 ? "105%" : i === 2 ? "-105%" : "0%"),
                scale: 0.8
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                x: "0%",
                scale: 1
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: i === 1 ? 0 : 0.2,
              }}
              whileHover={{ y: -12 }}
              className="bg-slate-50 rounded-[2.5rem] p-8 group border border-transparent hover:border-purple-200 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="mb-8 w-full h-[220px] bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-purple-700 transition-colors">
                {card.title}
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work Smarter with tasks that can live in your whiteboards, chat, calendar—anywhere you work."
        image={dashboardImage}
        imageAlt="KaryaUp Non-Profit Dashboard"
        containerClassName="mt-12 mb-24"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px] translate-y-8"
        imageOuterClassName="relative w-full flex justify-center"
      />
    </div>
    </>
  );
}