import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard1.jpeg";
import planImage from "../../assets/Gantt.png";
import FinalCTA from "../../components/FinalCTA";

export default function ProductDevelopment() {
  return (
    <div className="bg-white font-sans">

      {/* ================= HERO SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-6">
              The everything app <br />
              <span className="text-6xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">for Startup work</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Build your business for long-term success by organizing all of your ideas, workflows, and teamwork in a single, shared place.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <button className="relative px-8 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-pink-500/40
            bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 
            bg-[length:200%_200%] animate-gradient 
            shadow-lg hover:scale-105 transition">
                Get started. It's FREE →
              </button>
              <p className="text-sm text-slate-500">
                Free forever. <br /> No credit card.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-500">
              ⭐⭐⭐⭐⭐
              <span>25,000+ reviews</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src={dashboardImage}
                alt="Dashboard"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Glow */}

          </motion.div>

        </div>
      </section>

      {/* ================= ROADMAP SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 bg-white border-b border-slate-200">
        <div className="max-w-[90rem] mx-auto flex flex-col-reverse lg:flex-row items-stretch">

          {/* Left: Text Container */}
          <div className="w-full lg:w-[45%] p-10 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[0.85rem] tracking-[0.2em] font-bold text-[#7B61FF] uppercase mb-6">
                ROADMAP
              </p>
              <h2 className="text-[2.5rem] md:text-[3.25rem] lg:text-[3.5rem] font-extrabold text-[#1f2328] leading-[1.05] mb-6 tracking-tight">
                Connect your roadmaps to daily work.
              </h2>
              <p className="text-[1.15rem] text-slate-600 leading-[1.6] mb-10 max-w-lg">
                Manage everything from product roadmaps to sales pipelines in a single place with 10+ customizable views. Schedule releases on a Calendar, create bug tracking systems on a List, or adjust timelines on a Gantt chart.
              </p>
              <div>
                <button className="bg-[#f0f1f3] text-[#1f2328] px-7 py-3.5 rounded-xl font-bold hover:bg-[#e4e6e9] transition-colors inline-flex items-center gap-2 font-medium text-[1.05rem]">
                  Get Started
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right: Image Container */}
          <div className="w-full lg:w-[55%] p-8 md:p-14 border-b lg:border-b-0 border-slate-200 flex items-center justify-center bg-[#fafbfc]">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full shadow-[0_15px_40px_rgba(0,0,0,0.06)] rounded-2xl overflow-hidden border border-slate-100 bg-white group hover:scale-[1.02] transition-transform duration-500"
            >
              <img src={planImage} alt="KaryaUp Project Roadmap" className="w-full h-auto object-cover" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ================= SCALE SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 bg-white border-b border-slate-200">
        <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row items-stretch">

          {/* Left: Image Container */}
          <div className="w-full lg:w-[55%] p-8 md:p-14 lg:p-20 border-b lg:border-b-0 lg:border-r border-slate-200 flex items-center justify-center bg-slate-50/30">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full rounded-2xl"
            >
              <div className="w-full shadow-2xl rounded-2xl overflow-hidden border border-slate-200 bg-white group hover:scale-[1.02] transition-transform duration-500">
                <img src={dashboardImage} alt="KaryaUp Project Scale Layout" className="w-full h-auto object-cover opacity-90" />
              </div>

              {/* Floating Menu UI Overlay Mimicking Screenshot */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-1/4 left-[8%] md:left-[15%] w-48 md:w-56 bg-white rounded-xl shadow-[0_25px_50px_rgba(0,0,0,0.15)] border border-indigo-100 overflow-hidden z-10"
              >
                <div className="w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <div className="p-3 md:p-4 bg-white">
                  <p className="text-[0.65rem] md:text-[0.7rem] font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">Space Options</p>
                  <ul className="space-y-1 text-[0.8rem] md:text-[0.85rem] text-slate-700 font-medium">
                    <li className="flex items-center gap-3 px-2 py-2 md:py-1.5 hover:bg-slate-50 rounded cursor-default transition-colors"><span className="text-slate-400 text-base">📄</span> New list</li>
                    <li className="flex items-center gap-3 px-2 py-2 md:py-1.5 hover:bg-slate-50 rounded cursor-default transition-colors"><span className="text-slate-400 text-base">📁</span> New folder</li>
                    <li className="flex items-center gap-3 px-2 py-2 md:py-1.5 hover:bg-slate-50 rounded cursor-default transition-colors"><span className="text-slate-400 text-base">⚡</span> Automations</li>
                    <li className="flex items-center justify-between px-2 py-2 md:py-1.5 hover:bg-slate-50 rounded cursor-default transition-colors">
                      <div className="flex items-center gap-3"><span className="text-slate-400 text-base">↗️</span> Import</div>
                      <span className="text-slate-400 text-[10px]">▶</span>
                    </li>
                    <li className="flex items-center gap-3 px-2 py-2 md:py-1.5 hover:bg-slate-50 rounded cursor-default transition-colors"><span className="text-slate-400 text-base">🎨</span> Templates</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Text Container */}
          <div className="w-full lg:w-[67%] p-10 md:p-16 lg:p-24 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[0.85rem] tracking-[0.2em] font-bold text-[#7B61FF] uppercase mb-6">
                SCALE
              </p>
              <h2 className="text-[2.5rem] md:text-[3.25rem] lg:text-[3.5rem] font-extrabold text-[#1f2328] leading-[1.05] mb-6 tracking-tight">
                Scale from startup to unicorn.
              </h2>
              <p className="text-[1.15rem] text-slate-600 leading-[1.6] mb-10 max-w-lg">
                Build the perfect organization that grows with your startup. KaryaUp's Hierarchy makes it easy to expand your team and manage more complex projects as you bring on more resources.
              </p>
              <div>
                <button className="bg-[#f0f1f3] text-[#1f2328] px-7 py-3.5 rounded-xl font-bold hover:bg-[#e4e6e9] transition-colors inline-flex items-center gap-2 font-medium text-[1.05rem]">
                  Get Started
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      <FinalCTA />
    </div>
  );
}                                                                                                                                                             