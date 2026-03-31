                                                                                                                     import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.png";
import planImage from "../../assets/Gantt.png";
import { Link } from "react-router-dom";
import FeatureCTA from "../../components/FeatureCTA";

export default function IT() {
  return (
    <div className="bg-white font-sans overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT: Slides in from Left */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 80, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
              The Everything App<br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                for IT PMO Teams
              </motion.span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Manage IT projects, service requests, and governance in one place—all connected by AI. 
              KaryaUp streamlines workflows and compliance so IT operations run with speed and precision.
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
                alt="IT PMO Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= AI BANNER SECTION ================= */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto relative bg-white rounded-3xl p-10 lg:p-16 border border-slate-100 shadow-xl text-center overflow-hidden group">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6"
          >
            The World's most complete<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] to-fuchsia-500">
              AI for Project Management
            </span>
          </motion.h2>
          
          <p className="mx-auto text-lg text-slate-600 leading-relaxed max-w-2xl">
            Meet the first AI that works across your entire project lifecycle. 
            From drafting plans to capturing meetings,{" "}
            <span className="font-semibold text-slate-800">
              KaryaUp AI frees your team to focus on impact.
            </span>
          </p>
        </div>
      </section>

      {/* ================= SERVICE DESK AUTOMATION SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-24 bg-slate-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* TEXT CONTENT: Slides in from Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Service Desk<br />
              <span className="text-[#7e22ce]">Automation</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
              AI-powered ticket routing, auto-resolutions, and SLA tracking. 
              Reduce MTTR by <span className="text-slate-900 font-bold">60%</span>.
            </p>
            
            <ul className="space-y-5">
              {[
                "Auto-categorize & prioritize tickets",
                "AI-suggested resolutions & knowledge base lookup",
                "Real-time SLA dashboards & alerts"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-medium text-slate-700">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-sm">
                    ✓
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* IMAGE CONTENT: Slides in from Right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200 bg-white p-4">
              <img 
                src={planImage} 
                alt="Service Desk Interface" 
                className="w-full h-auto rounded-2xl shadow-inner"
              />
            </div>
            {/* Background decorative blob */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-60" />
          </motion.div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work Smarter with tasks that can live in your whiteboards, chat, calendar - anywhere you work"
        image={dashboardImage}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-10 mb-10"
        paddingClassName="p-4 lg:p-8 lg:py-12"
        imageClassName="w-full max-w-[1000px] shadow-2xl rounded-xl"
        imageOuterClassName="relative w-full flex justify-center mt-10"
      />
    </div>
  );
}