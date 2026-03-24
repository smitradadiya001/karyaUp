import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard1.jpeg";
import planImage from "../../assets/Gantt.png";

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
              for marketing teams
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                Brainstorm, plan, and execute your team's marketing programs—from multi-channel campaigns to global events and more with ClickUp, the all-in-one productivity platform.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition">
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

      {/* ================= PLAN SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 bg-white border-y border-slate-200">
        <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row items-stretch">
          
          {/* Left: Image Container */}
          <div className="w-full lg:w-[55%] p-8 md:p-14 lg:p-20 border-b lg:border-b-0 lg:border-r border-slate-200 flex items-center justify-center bg-slate-50/30">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full shadow-2xl rounded-2xl overflow-hidden border border-slate-200 bg-white"
            >
              <img src={planImage} alt="KaryaUp Project Plan" className="w-full h-auto object-cover" />
            </motion.div>
          </div>

          {/* Right: Text Container */}
          <div className="w-full lg:w-[45%] p-10 md:p-16 lg:p-24 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[0.85rem] tracking-[0.2em] font-bold text-[#7B61FF] uppercase mb-6">
                PLAN
              </p>
              <h2 className="text-lg text-[2.0rem] md:text-[3.10rem] lg:text-[3.5rem] font-extrabold text-[#1f2328] leading-[1.05] mb-6 tracking-tight">
                Turn quarterly plans into daily wins
              </h2>
              <p className="text-[1.15rem] text-slate-600 leading-[1.6] mb-10 max-w-lg">
                Connect your marketing roadmaps directly to the tasks that drive them forward. With KaryaUp, your strategy Docs, brainstorms, and campaign calendars live alongside your team's daily work—helping you bring your ideas to life faster.
              </p>
              <div>
                <button className="bg-[#f0f1f3] text-[#1f2328] px-7 py-3.5 rounded-xl font-bold hover:bg-[#e4e6e9] transition-colors inline-flex items-center gap-2 group text-[1.05rem]">
                  Get started 
                  <span className="group-hover:translate-x-1 transition-transform ml-1">→</span>
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ================= COLLABORATE SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 bg-white border-b border-slate-200">
        <div className="max-w-[90rem] mx-auto flex flex-col-reverse lg:flex-row items-stretch">
          
          {/* Left: Text Container */}
          <div className="w-full lg:w-[45%] p-10 md:p-16 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[0.85rem] tracking-[0.2em] font-bold text-[#7B61FF] uppercase mb-6">
                COLLABORATE
              </p>
              <h2 className="text-[2.5rem] md:text-[3.25rem] lg:text-[3.5rem] font-extrabold text-[#1f2328] leading-[1.05] mb-6 tracking-tight">
                Move as one marketing team
              </h2>
              <p className="text-[1.15rem] text-slate-600 leading-[1.6] mb-10 max-w-lg">
                Keep everyone on the same page from brainstorm to launch. Collaborate seamlessly across marketing workstreams with KaryaUp's Docs, Whiteboards, and Proofing tools that keep every member of your team in sync every step of the way.
              </p>
              <div>
                <button className="bg-[#f0f1f3] text-[#1f2328] px-7 py-3.5 rounded-xl font-bold hover:bg-[#e4e6e9] transition-colors inline-flex items-center gap-2 group text-[1.05rem]">
                  Get started 
                  <span className="group-hover:translate-x-1 transition-transform ml-1">→</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right: Image Container */}
          <div className="w-full lg:w-[55%] p-8 md:p-14 lg:p-20 flex items-center justify-center bg-slate-50/30">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full shadow-2xl rounded-2xl overflow-hidden border border-slate-200 bg-white"
            >
              {/* Note: using a placeholder image from the provided mockup context. Replace with actual asset if needed later */}
              <img src="https://images.unsplash.com/photo-1551281044-8d8f5f4c7a9b?auto=format&fit=crop&q=80&w=1200" alt="KaryaUp Doc Collaboration" className="w-full h-auto object-cover opacity-90" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ================= EXECUTE SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 bg-white border-b border-slate-200">
        <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row items-stretch">
          
          {/* Left: Image Container */}
          <div className="w-full lg:w-[55%] p-8 md:p-14 lg:p-20 border-b lg:border-b-0 lg:border-r border-slate-200 flex items-center justify-center bg-slate-50/30">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full shadow-2xl rounded-2xl overflow-hidden border border-slate-200 bg-white"
            >
              <img src={planImage} alt="KaryaUp Execute Flow" className="w-full h-auto object-cover" />
            </motion.div>
          </div>

          {/* Right: Text Container */}
          <div className="w-full lg:w-[45%] p-10 md:p-16 lg:p-24 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[0.85rem] tracking-[0.2em] font-bold text-[#7B61FF] uppercase mb-6">
                EXECUTE
              </p>
              <h2 className="text-[2.5rem] md:text-[3.25rem] lg:text-[3.0rem] font-extrabold text-[#1f2328] leading-[1.05] mb-6 tracking-tight">
                Create momentum, not bottlenecks
              </h2>
              <p className="text-[1.15rem] text-slate-600 leading-[1.6] mb-10 max-w-lg">
                Visualize progress toward goals with team-wide transparency and eliminate redundant workflows. KaryaUp helps everyone see timelines and execute with confidence to boost productivity.
              </p>
              <div>
                <button className="bg-[#f0f1f3] text-[#1f2328] px-7 py-3.5 rounded-xl font-bold hover:bg-[#e4e6e9] transition-colors inline-flex items-center gap-2 group text-[1.05rem]">
                  Get started 
                  <span className="group-hover:translate-x-1 transition-transform ml-1">→</span>
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          Build products faster with KaryaUp
        </h2>
        <p className="mb-8">
          Join thousands of teams managing product development smarter.
        </p>

        <button className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Start your workspace →
        </button>
      </section>

    </div>
  );
}                                                                                                                                             