 import React, { useState, useEffect } from "react";
import FeatureCTA from "../../components/FeatureCTA";
import dashboardImage from "../../assets/dashboard2.webp";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ClipboardList, Database, LineChart } from "lucide-react";

const FeatureStack = ({ items = [] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 1500); // Snappy 1.5s interval
    return () => clearInterval(timer);
  }, [items.length]);

  if (items.length === 0) return null;

  return (
    <div className="relative h-[80px] sm:h-[100px] w-full max-w-[280px] sm:max-w-[320px] mt-6 lg:mt-8 group overflow-visible">
      <AnimatePresence mode="popLayout">
        {[2, 1, 0].map((offset) => {
          const itemIndex = (index + offset) % items.length;
          const item = items[itemIndex];
          const label = typeof item === "string" ? item : item.label;
          const Icon = (typeof item === "object" && item.icon) ? item.icon : Check;

          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{
                opacity: offset === 0 ? 1 : offset === 1 ? 0.4 : 0.15,
                scale: 1 - offset * 0.04,
                y: offset * 12, // Compact vertical stacking for better hero-screen visibility
                zIndex: 10 - offset,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 1.05,
                transition: { duration: 0.4, ease: "easeIn" }
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: offset * 0.02
              }}
              className="absolute top-0 left-0 w-full px-5 py-3 rounded-xl bg-slate-400/10 backdrop-blur-xl border border-black/30 shadow-sm flex items-center gap-3 transition-colors duration-300 hover:bg-slate-400/20"
            >
              <div className="w-5 h-5 rounded bg-black/5 border border-black/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-3 h-3 text-black stroke-[3]" />
              </div>
              <span className="text-[11px] sm:text-[13px] font-black uppercase tracking-widest text-black">
                {label}
              </span>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

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
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-20 lg:py-25">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50/80 backdrop-blur-sm border border-purple-100 text-purple-600 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] shadow-sm mb-10"
            >
              NONPROFIT — IMPACT DRIVEN WORK
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
              Grow your <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Non-Profit <br />with KaryaUp.
              </motion.span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Change the world, one task at a time. Bring your team, tools, and work into one place with KaryaUp to drive your mission forward more effectively.
            </p>
            <FeatureStack items={[{ label: "Forms & Surveys", icon: ClipboardList }, { label: "Spreadsheets", icon: Database }, { label: "Reporting", icon: LineChart }]} />
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
      <section className="py-3 px-4 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="mb-10 max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-center text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              The all-in-one course<br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                management solution
              </motion.span>
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed">
              Replace your student information system with KaryaUp's simple yet effective solutions.
            </p>
          </motion.div>
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
        description="Work smarter with tasks that can live in your whiteboards, chat, and calendar — anywhere you work."
        image={dashboardImage}
        containerClassName="mb-12 md:mb-10"
      />
    </div>
  );
}