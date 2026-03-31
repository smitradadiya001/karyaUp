                                                                                                                         import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.png";
import planImage from "../../assets/Gantt.png";
import { Link } from "react-router-dom";
import FeatureCTA from "../../components/FeatureCTA";

export default function HR() {
  return (
    <div className="bg-white font-sans overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT: Slides in from Left */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 80, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
              Smarter HR for<br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Modern Teams
              </motion.span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              HR is chaotic—spreadsheets, emails, endless meetings. KaryaUp unifies hiring, onboarding, performance, and analytics in one platform.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link
                to="/start"
                className="group relative z-10 flex h-[3.5em] w-[14em] items-center justify-center overflow-hidden rounded-[30em] font-bold text-[15px] transition-all duration-300"
                style={{ boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff" }}
              >
                <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
                <div className="absolute left-0 top-0 -z-10 h-full w-0 rounded-[30em] bg-white transition-all duration-500 ease-in-out group-hover:w-full" />
                <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-slate-800">
                  Get Started
                </span>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE: Slides in from Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <img
                src={dashboardImage}
                alt="HR Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= HR WORKFLOWS SECTION ================= */}
      <section className="w-full py-24 px-6 lg:px-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4"
          >
            HR Workflows<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] to-fuchsia-500">
              Simplified with KaryaUp
            </span>
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From recruitment to retention, KaryaUp unifies every HR process into one seamless platform.
          </p>
        </div>

        {/* Workflow Cards with Professional Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { title: "Smart Hiring", desc: "Centralize job postings, candidate tracking, and interview scheduling.", icon: "bg-pink-500", glow: "group-hover:shadow-pink-100" },
            { title: "Seamless Onboarding", desc: "Automate paperwork, training, and role assignments for new hires.", icon: "bg-blue-600", glow: "group-hover:shadow-blue-100" },
            { title: "Performance Management", desc: "Track goals, feedback, and reviews with clarity and transparency.", icon: "bg-emerald-500", glow: "group-hover:shadow-emerald-100" },
            { title: "HR Analytics", desc: "Gain insights into attrition, engagement, and workforce trends.", icon: "bg-orange-500", glow: "group-hover:shadow-orange-100" },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              
              // HOVER INTERACTION
              whileHover={{ 
                y: -12, 
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
              className={`group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-slate-200 ${card.glow}`}
            >
              {/* Dynamic Icon Square */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 rounded-xl mb-6 ${card.icon} flex items-center justify-center shadow-lg shadow-inherit`}
              />

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#7e22ce] transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                {card.desc}
              </p>

              {/* Bottom Gradient Line selection indicator */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500 w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <FeatureCTA
        title="Transform HR operations today"
        description="Join 500+ teams using KaryaUp to scale people operations without the chaos"
        image={dashboardImage}
        imageAlt="KaryaUp HR dashboard"
        containerClassName="mt-10 mb-20"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px] shadow-2xl rounded-xl"
        imageOuterClassName="relative w-full flex justify-center translate-y-8"
      />
    </div>
  );
}