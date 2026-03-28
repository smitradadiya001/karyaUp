import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.png";
import planImage from "../../assets/Gantt.png";
import { Link } from "react-router-dom";
import FeatureCTA from "../../components/FeatureCTA";

export default function ProductDevelopment() {
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
                The world's most powerful & <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  flexible project management software
                </motion.span>
              </motion.h1>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Manage your projects, docs, and chat in one place—all powered by AI. KaryaUp adapts to any project, eliminates busywork, and keeps everything organized so your team delivers projects on time, all the time.
            </p>


            <Link
              to="/start"
              className="group relative z-10 flex h-[3.5em] w-[14em] shrink-0 items-center justify-center overflow-hidden rounded-[30em] font-bold text-[15px] transition-all duration-300"
              style={{
                boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff"
              }}
            >
              <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
              <div className="absolute -inset-[3px] -z-10 origin-left scale-x-0 rounded-[30em] bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100" />
              <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-slate-800">
                Get Started
              </span>
            </Link>


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


      {/* ================= SCALE SECTION ================= */}

      <section className="w-full bg-[white] py-10 px-6 flex items-center justify-center text-center">
        <div className="relative w-full bg-white rounded-2xl p-9 border border-gray-200 hover:shadow-2xl transition-all duration-300 group overflow-hidden hover:-translate-y-2">

          {/* Top Tag */}

          {/* Heading */}
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
              className="text-center text-4xl sm:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
            >
              The world's most powerful & <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                flexible project <br />management software
              </motion.span>
            </motion.h1>
          </div>
          <p className="text-center mx-auto text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
            Meet the first AI that works across your entire project lifecycle. From drafting project plans, capturing meetings, and setting priorities, KaryaUp AI frees your team to focus on impact.
          </p>

          {/* ================= FEATURES CARDS SECTION ================= */}
          <section className="w-full bg-[white] py-20 px-6 lg:px-20">
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 object-cover">

              {/* CARD 1 */}
              <div className="max-w-[1500px] relative bg-white rounded-2xl p-4 border border-gray-200 hover:shadow-xl transition-all duration-300 group overflow-hidden">

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-10 blur-xl transition"></div>

                {/* Image */}
                <div className="rounded-xl overflow-hidden mb-5">
                  <img
                    src={dashboardImage}
                    alt="Automation"
                    className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold text-black mb-3">
                  Automates routine project tasks
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  KaryaUp generates project plans, assign tasks, and handle status updates—replacing busywork with execution and delivery.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="relative bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition-all duration-300 group overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-10 blur-xl transition"></div>

                <div className="rounded-xl overflow-hidden mb-5">
                  <img
                    src={planImage}
                    alt="Planning"
                    className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold text-black mb-3">
                  Moves decision to action
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Automatically capture tasks from project discussions and capture next steps—replacing information overload with clarity and action.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="relative bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition-all duration-300 group overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-10 blur-xl transition"></div>

                <div className="rounded-xl overflow-hidden mb-5">
                  <img
                    src={dashboardImage}
                    alt="Search"
                    className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold text-black mb-3">
                  Finds project info, instantly
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Find projects and files in seconds across ClickUp and connected apps—replacing information gathering with instant context and insights.
                </p>
              </div>

            </div>
          </section>

        </div>
      </section>

      <motion.h1
        initial={{ opacity: 0, y: 40, x: -10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 100,
          delay: 0.1
        }}
        className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
      >
        Project management <br />
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
          animate={{ backgroundPosition: ["0% center", "-200% center"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          is broken, we fixed it
        </motion.span>
      </motion.h1>


      {/* Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Old Way */}
        <div className="bg-[#F8F9FA] rounded-2xl p-10 shadow-md hover:-translate-y-1 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-red-500 mb-6">❌ The Old Way</h3>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="group">
              <span className="group-hover:text-red-600 transition">Projects scattered across multiple tools</span>
            </li>
            <li className="group">
              <span className="group-hover:text-red-600 transition">Critical info hidden in siloed systems and meetings</span>
            </li>
            <li className="group">
              <span className="group-hover:text-red-600 transition">Manual updates and repetitive work strain capacity</span>
            </li>
            <li className="group">
              <span className="group-hover:text-red-600 transition">Missed deadlines and tasks cause bottlenecks</span>
            </li>
          </ul>
        </div>

        {/* KaryaUp Way */}
        <div className="bg-[#F8F9FA] rounded-2xl p-10 shadow-md hover:-translate-y-1 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-green-600 mb-6">✅ The KaryaUp Way</h3>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="group">
              <span className="group-hover:text-green-600 transition">All projects, docs, and chat in one platform</span>
            </li>
            <li className="group">
              <span className="group-hover:text-green-600 transition">Instantly find anything across all tools</span>
            </li>
            <li className="group">
              <span className="group-hover:text-green-600 transition">Automated reporting, updates, and resource management</span>
            </li>
            <li className="group">
              <span className="group-hover:text-green-600 transition">AI-powered workflows that manage tasks, dependencies, and timelines</span>
            </li>
          </ul>
        </div>
      </div>

      <FeatureCTA
        title={
          <>
            Tasks that connect to everything you do
          </>
        }
        description="Work smarter with tasks that can live in your whiteboards, chat, calendar — anywhere you work"
        image={dashboardImage}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-10 mb-20"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px]"
        imageOuterClassName="relative w-[108%] lg:w-full translate-x-4 lg:translate-x-8"
      />
    </div>
  );
}                                                                                                                     
