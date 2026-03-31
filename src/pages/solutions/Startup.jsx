                                                                                                import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard1.jpeg";
import planImage from "../../assets/Gantt.png";
import FeatureCTA from "../../components/FeatureCTA";
import { Link } from "react-router-dom";

export default function Startup() {
  return (
    <div className="bg-white font-sans">

      {/* ================= HERO SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 40, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 100,
                  delay: 0.1
                }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
              >
                The Everything App <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  for Startup Work
                </motion.span>
              </motion.h1>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Brainstorm, plan, and execute your team's marketing programs—from multi-channel campaigns to global events and more with KaryaUp, the all-in-one productivity platform.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <Link
                to="/start"
                className="group relative z-10 flex h-[3.5em] w-[14em] shrink-0 items-center justify-center overflow-hidden rounded-[30em] font-bold text-[15px] transition-all duration-300"
                style={{
                  boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff"
                }}
              >
                <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
                <div className="absolute left-0 top-0 -z-10 h-full w-0 rounded-[30em] bg-white transition-all duration-500 ease-in-out group-hover:w-full" />
                <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-slate-800">
                  Get Started
                </span>
              </Link>

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
            <div>


              <motion.h1
                initial={{ opacity: 0, y: 40, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 100,
                  delay: 0.1
                }}
                className="text-4xl sm:text-4xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
              >
                Connect Your  <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Roadmap for daily work
                </motion.span>
              </motion.h1>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Manage everything from product roadmaps to sales pipelines in a single place with 10+ customizable views. Schedule releases on a Calendar, create bug tracking systems on a List, or adjust timelines on a Gantt chart.
            </p>
            <div>

            </div>

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

            <div>


              <motion.h1
                initial={{ opacity: 0, y: 40, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 100,
                  delay: 0.1
                }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
              >
                Scale from Startup<br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  to Unicorn
                </motion.span>
              </motion.h1>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Build the perfect organization that grows with your startup. KaryaUp's Hierarchy makes it easy to expand your team and manage more complex projects as you bring on more resources.
            </p>
            <div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= STARTUP GROWTH JOURNEY SECTION ================= */}
      <section className="w-full py-10 lg:px-5 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">

          <motion.h1
            initial={{ opacity: 0, y: 40, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 100,
              delay: 0.1
            }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
          >
            Your Startup Journey <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Powered by KaryaUp
            </motion.span>
          </motion.h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From idea to unicorn, KaryaUp gives startups the tools to brainstorm, plan, execute, and scale — all in one platform.
          </p>
        </div>

        {/* Journey Steps */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-4 gap-8"
        >
          {[
            { step: "1", title: "Ideation", desc: "Capture ideas, collaborate with co-founders, and align vision.", icon: "💡", color: "from-pink-500 to-purple-600" },
            { step: "2", title: "Launch", desc: "Plan sprints, track tasks, and deliver your MVP faster.", icon: "🚀", color: "from-indigo-500 to-blue-600" },
            { step: "3", title: "Growth", desc: "Automate workflows, manage sales pipelines, and expand your reach.", icon: "📈", color: "from-green-400 to-emerald-600" },
            { step: "4", title: "Scale", desc: "Build hierarchies, manage complex projects, and grow into a unicorn.", icon: "🦄", color: "from-orange-400 to-red-500" },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.16 }}
              className="relative rounded-2xl p-6 shadow-lg border border-gray-200 
                   hover:border-transparent hover:bg-gradient-to-r hover:opacity-90 transition duration-500 group"
            >
              <div className={`text-3xl mb-4 bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-black">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-black">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <FeatureCTA
        title={
          <>
            Tasks that connect to everything you do

          </>
        }
        description="Work Smater with tasks that can live in your whiteboaards,chat,calendar - anywhere you work"
        image={dashboardImage}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-10 mb-5"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px]"
        imageOuterClassName="relative w-[108%] lg:w-full translate-x-2 lg:translate-x-8"
      />
    </div>
  );
}