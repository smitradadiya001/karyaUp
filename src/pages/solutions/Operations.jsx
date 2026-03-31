                                                                                                                                            import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard1.jpeg";
import { Link } from "react-router-dom";
import FeatureCTA from "../../components/FeatureCTA";
import planImage from "../../assets/Gantt.png";


export default function Operations() {
  return (
    <div className="bg-white font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-25">
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
                The Everything App<br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  for Operations Teams
                </motion.span>
              </motion.h1>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Get real-time visibility into your revenue, expenses, and margins with KaryaUp. Analyze profitability across projects, teams, and clients—so you can make smarter financial decisions and scale with confidence.
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
          </motion.div>
        </div>
      </section>

      {/* ================= COMPARISON SECTION ================= */}

      {/* ================= NEW: TRUSTED BY TEAMS ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 40, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.1 }}
                className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
              >
                Trusted by Operations<br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Teams everywhere
                </motion.span>
              </motion.h1>
            </div>
            <p className="mx-auto text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Join 500+ growing companies using KaryaUp to streamline operations and hit targets faster.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 grid md:grid-cols-4 gap-8 text-center"
          >
            {[
              { num: "500+", label: "Teams", color: "from-black to-black" },
              { num: "2.4M", label: "Tasks/month", color: "from-black to-black" },
              { num: "98%", label: "Uptime", color: "from-black to-black" },
              { num: "24/7", label: "Support", color: "from-black to-black" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="group bg-white rounded-xl shadow-lg p-6 border-white hover:shadow-xl transition"
              >
                {/* Number with gradient */}
                <h3 className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.num}
                </h3>
                {/* Label */}
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ================= FEATURE CARDS ================= */}
      <section className="w-full py-20 px-6 lg:px-20 bg-gradient-to-b from-white to-slate-50">
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
            Operations Made<br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Effortless
            </motion.span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            KaryaUp streamlines your operations by automating routine tasks, giving you real‑time visibility,
            and connecting every team to the same source of truth.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-10"
        >
          {[
            {
              title: "Automated Processes",
              desc: "Eliminate repetitive work with smart automation that handles updates, reporting, and task assignments.",
              icon: "⚙️",
            },
            {
              title: "Real-Time Insights",
              desc: "Track performance, budgets, and timelines instantly with dashboards designed for clarity.",
              icon: "📊",
            },
            {
              title: "Connected Teams",
              desc: "Break down silos and ensure every department works from the same data, keeping operations aligned.",
              icon: "🤝",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.0 }}
              className="relative rounded-2xl p-[2px] transition duration-500 group"
            >
              {/* Gradient border wrapper */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Card content */}
              <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-200 group-hover:border-transparent">
                <div className="text-4xl mb-4 text-slate-900 group-hover:text-purple-600">{card.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-purple-700">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </section>


      {/* ================= CTA ================= */}
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