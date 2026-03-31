                                                                                          import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.png";
import planImage from "../../assets/Gantt.png";
import { Link } from "react-router-dom";
import FeatureCTA from "../../components/FeatureCTA";

export default function TeamCollaboration() {
  return (
    <div className="bg-white font-sans overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-20 md:py-32">
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
                  delay: 0.1,
                }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
              >
                Smarter Collaboration{" "}
                <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Powered by AI
                </motion.span>
              </motion.h1>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              From real‑time chat to intelligent task coordination, <br />KaryaUp AI helps your team collaborate efficiently and make faster, better decisions.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src={dashboardImage}
                alt="KaryaUp dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= TEAM COLLABORATION SECTION ================= */}
      <section className="px-10 w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-10 bg-gradient-to-b from-white to-slate-50">
  <div className="max-w-6xl mx-auto px-6 lg:px-8">
    <div className="text-center mb-12">
      <motion.h1
        initial={{ opacity: 0, y: 40, x: -10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-2 pt-5 drop-shadow-sm"
      >
        Where Communication
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
          animate={{ backgroundPosition: ["0% center", "-200% center"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <br />Meets Execution
        </motion.span>
      </motion.h1>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* LEFT IMAGE SLIDES IN FROM LEFT */}
      <motion.div
        initial={{ x: -190, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={planImage}
          alt="Project planning view in KaryaUp"
          className="rounded-xl shadow-xl border border-slate-200 w-full"
        />
      </motion.div>

      {/* RIGHT LIST SLIDES IN FROM RIGHT */}
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <ul className="space-y-4 text-slate-700">
          {[
            "Task‑based discussions tied directly to work items.",
            "Real‑time chat and alerts so no one is out of sync.",
            "Seamless file and media sharing inside each project.",
            "Screen recording and sharing for quick context.",
            "Centralized communication so context is never lost.",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1"
            >
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-600 font-bold text-sm">
                {i + 1}
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </div>
</section>


      {/* ================= ROADMAP / PLANNING SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">

            <motion.h1
              initial={{ opacity: 0, y: 40, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-2 pt-5 drop-shadow-sm"
            >
              Plan, Track, &
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <br />Ship better
              </motion.span>
          </motion.h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* LEFT IMAGE SLIDES IN FROM LEFT */}
      <motion.div
        initial={{ x: -190, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={planImage}
          alt="Project planning view in KaryaUp"
          className="rounded-xl shadow-xl border border-slate-200 w-full"
        />
      </motion.div>

      {/* RIGHT LIST SLIDES IN FROM RIGHT */}
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <ul className="space-y-4 text-slate-700">
          {[
            "Task‑based discussions tied directly to work items.",
            "Real‑time chat and alerts so no one is out of sync.",
            "Seamless file and media sharing inside each project.",
            "Screen recording and sharing for quick context.",
            "Centralized communication so context is never lost.",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1"
            >
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-600 font-bold text-sm">
                {i + 1}
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
    </div>
          
        </div>
      </section>
      {/* ================= FEATURE CTA SECTION ================= */}
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