Non-Profit                                                                                                                      import React from "react";
import FeatureCTA from "../../components/FeatureCTA";
import dashboardImage from "../../assets/dashboard1.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NonProfit() {
  const cards = [
    {
      title: "Forms & Surveys",
      desc: "Create customizable forms for admissions requests, coursework submissions, supplies, and more. Organize forms as tasks and link them to your administrative systems.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&w=800&q=80",
    },
    {
      title: "Spreadsheets",
      desc: "Track large datasets, from course lists to student enrollment, by creating a database directly in KaryaUp. Add Custom Fields to track details and connect related work.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&w=800&q=80",
    },
    {
      title: "Reporting",
      desc: "Create high-level overviews to visualize classroom capacity, student performance, inventories, and more. Add charts, docs, and timesheets into one place.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&w=800&q=80",
    },
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
              Grow your <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Non-Profit with KaryaUp.
              </motion.span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Change the world, one task at a time. Bring your team, tools, and work into one place with KaryaUp to drive your mission forward more effectively.
            </p>
            <Link
              to="/start"
              className="group relative z-10 flex h-[3.5em] w-[14em] items-center justify-center overflow-hidden rounded-[30em] font-bold text-[15px] transition-all duration-300 mx-auto lg:mx-0"
              style={{ boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff" }}
            >
              <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
              <div className="absolute left-0 top-0 -z-10 h-full w-0 rounded-[30em] bg-white transition-all duration-500 ease-in-out group-hover:w-full" />
              <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-slate-800">
                Get Started
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img src={dashboardImage} alt="Dashboard" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MANAGEMENT SECTION ================= */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto text-center">
        <div className="mb-20 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6"
          >
            The all-in-one course <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] to-fuchsia-500">
              management solution
            </span>
          </motion.h2>
          <p className="text-xl text-gray-500 leading-relaxed">
            Replace your student information system with KaryaUp's simple yet effective solutions.
          </p>
        </div>

        {/* CENTER POP & SPREAD CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0, 
                y: 60,
                // Cards 0 (Left) and 2 (Right) start at center (0)
                x: i === 0 ? "105%" : i === 2 ? "-105%" : "0%",
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
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1], // Smooth elastic feel
                delay: i === 1 ? 0.1 : 0.4, // Middle pops, then sides spread
              }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="bg-[#F8F9FA] rounded-[32px] p-8 group border border-transparent hover:border-slate-200 hover:shadow-2xl transition-all duration-500"
            >
              <div className="mb-8 w-full h-[220px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4 group-hover:text-[#7e22ce] transition-colors">
                {card.title}
              </h3>
              <p className="text-[#656F7D] leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work Smarter with tasks that can live in your whiteboards, chat, calendar - anywhere you work"
        image={dashboardImage}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-10 mb-20"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px] rounded-xl shadow-2xl"
        imageOuterClassName="relative w-full flex justify-center translate-y-8"
      />
    </div>
  );
}