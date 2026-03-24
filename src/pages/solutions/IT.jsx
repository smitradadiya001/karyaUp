import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.png";
import karyaupImg from "../../assets/logo.png";

export default function ProductDevelopment() {
  return (
    <div className="bg-white font-sans">

      {/* ================= HERO SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <p className="text-sm tracking-[0.25em] text-purple-600 font-semibold mb-2">
              AI-POWERED OPERATIONS IT MANAGEMENT
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-6">
              The everything app <br />
              for IT PMO teams
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Manage IT projects, service requests, and governance in one place—all connected by AI. KaryaUp makes it easy to streamline workflows and compliance so your IT operations run with speed and precision.
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

      {/* ================= BANNER SECTION (ANIMATED) ================= */}
      <section className="py-10 px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, staggerChildren: 0.15 }
            }
          }}
          className="max-w-6xl mx-auto rounded-[2rem] bg-[#0a0f1c] text-white overflow-hidden relative shadow-2xl flex flex-col md:flex-row"
        >

          {/* Background Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-[80%] md:w-[60%] h-full bg-gradient-to-l from-[#a832a8]/35 via-[#6a25a3]/20 to-transparent pointer-events-none"
          />

          {/* Left Content */}
          <div className="relative z-10 w-full md:w-[55%] p-10 md:p-14 lg:p-20 flex flex-col justify-center">

            {/* Logo */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              className="flex items-center gap-2.5 mb-2"
            >
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 85L15 50L50 15V35L30 50L50 65V85Z" fill="#7B61FF" />
                <path d="M50 85L85 50L50 15V35L70 50L50 65V85Z" fill="#FF007F" />
                <path d="M25 50L50 25L75 50L50 75L25 50Z" fill="url(#karyaUp_gradient)" />
                <defs>
                  <linearGradient id="karyaUp_gradient" x1="25" y1="50" x2="75" y2="50" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF007F" />
                    <stop offset="1" stopColor="#7B61FF" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-[1.5rem] font-bold tracking-tight">KaryaUp</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-[2.2rem] md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.05] mb-6 tracking-tight"
            >
              Join 3 million teams building the future with KaryaUp
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-[1.05rem] text-slate-300 leading-relaxed mb-9 max-w-md"
            >
              Unify IT operations, automate processes, and keep projects on track—all in one platform.
            </motion.p>

            {/* Button */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <button className="bg-white text-black px-6 py-3.5 rounded-xl font-bold hover:bg-slate-200 transition-colors inline-flex items-center gap-2 group text-[1rem]">
                Get started. It's FREE
                <span className="group-hover:translate-x-1 transition-transform ml-0.5">→</span>
              </button>
            </motion.div>

          </div>

          {/* Right Image Container */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } } }}
            className="relative w-full md:w-[45%] min-h-[350px] md:min-h-[500px] top:40 mt:90"
            
          >
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src={karyaupImg}
              alt="Workspace Interface"
              className="absolute inset-0 md:inset-auto md:right-[-5%] md:top-[12%] w-[120%] md:w-[130%] h-auto max-w-none object-cover md:object-contain rounded-tl-xl md:rounded-l-2xl shadow-[-10px_-10px_30px_rgba(0,0,0,0.5)] z-10 translate-y-10 md:translate-y-0 translate-x-6 md:translate-x-0 border-t border-l border-white/10"
            />
          </motion.div>

        </motion.div>
      </section>

      {/* ================= Comparison Section ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 bg-white py-10 md:py-5">
        <div className="max-w-7xl mx-auto px-2">
          <div className="text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-purple-600 font-semibold mb-4">
              The KaryaUp way
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              IT programs and service requests are scattered,
              <br />
              let's fix it
            </h2>
            <p className="mt-5 mx-auto max-w-2xl text-slate-600 leading-relaxed">
              Legacy tools create bottlenecks, delays, and compliance risks. ClickUp centralizes your IT workflows, governance, and reporting so teams move from reactive to proactive.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 rounded-3xl border border-slate-200 overflow-hidden">
            {/* Left */}
            <div className="p-8 md:p-10 bg-white transition-colors duration-300 hover:bg-rose-50/60">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">The old way</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  "Scattered project data across multiple tools",
                  "Slow and manual approvals delay decisions",
                  "Limited visibility into risks and compliance",
                  "Siloed docs lead to outdated policies",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1 group">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-50 text-rose-600 font-bold text-sm">
                      x
                    </span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="p-8 md:p-10 bg-white border-t md:border-t-0 md:border-l border-slate-200 transition-colors duration-300 hover:bg-emerald-50/60">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">The KaryaUp way</h3>
              <ul className="space-y-3 text-slate-700">
                {[
                  "IT projects, docs, and tasks in one place",
                  "Automated approvals instantly route tasks to teams",
                  "Live risk tracking detects bottlenecks and compliance gaps",
                  "AI-powered Docs keep policies updated and easy to find",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1 group">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 font-bold text-sm">
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HERO SECTION (UPDATED) ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-28 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <p className="text-sm tracking-[0.3em] text-indigo-500 font-semibold mb-4">
            RESOURCE PLANNING AND EXECUTION
          </p>

          <h1 className="text-1xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-6">
            Keep operations on track <br />
            and optimize team resources
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
            Balance workloads, prevent bottlenecks, and align with processes
            that scale to your exact needs.
          </p>

          <button className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-800 transition shadow-lg">
            Get started. It's FREE →
          </button>

          {/* ================= FEATURES SECTION ================= */}
          <section className="bg-white py-10">
            <div className="max-w-7xl mx-auto px-6">

              <div className="grid md:grid-cols-3 gap-8">

                {/* CARD 1 */}
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 group">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Board view to manage workflows
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Track progress at every stage with a flexible Kanban board that adapts to any workflow, with custom filtering and sorting.
                  </p>

                  <div className="relative rounded-2xl overflow-hidden border border-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1551281044-8d8f5f4c7a9b"
                      alt="Board"
                      className="w-full h-56 object-cover group-hover:scale-105 transition"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 group">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Interactive spreadsheets for budget tracking
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Organize budgets, track vendor details, and analyze financials with AI-powered Custom Fields.
                  </p>

                  <div className="relative rounded-2xl overflow-hidden border border-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                      alt="Table"
                      className="w-full h-56 object-cover group-hover:scale-105 transition"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 group">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Guest access for external collaboration
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Share approvals, project updates, and status reports securely with set permissions for external stakeholders.
                  </p>

                  <div className="relative rounded-2xl overflow-hidden border border-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                      alt="Chat"
                      className="w-full h-56 object-cover group-hover:scale-105 transition"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                </div>

              </div>

            </div>
          </section>

        </div>
      </section>

      {/* ================= TEMPLATES SECTION ================= */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.2em] font-bold text-indigo-500 uppercase mb-4">
              Templates
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              There's a template for that
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Set up IT workflows in minutes with templates for project tracking, service requests, and compliance.
            </p>
            <a href="#" className="inline-block text-lg font-bold text-slate-800 underline decoration-2 decoration-slate-300 hover:decoration-slate-800 underline-offset-8 transition-colors">
              Browse Templates
            </a>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#f8f9fc] rounded-[2rem] p-8 md:p-10 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl group border border-slate-100/50"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-10 h-48 relative border border-slate-100 group-hover:scale-[1.02] group-hover:shadow-md transition-all duration-300">
                <img src="https://images.unsplash.com/photo-1551281044-8d8f5f4c7a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="IT Requests" className="w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 mix-blend-overlay"></div>
              </div>
              <h3 className="text-[1.6rem] font-extrabold text-slate-900 mb-4 tracking-tight">IT Requests</h3>
              <p className="text-slate-600 leading-relaxed text-[1.1rem]">
                Collect, prioritize, and track employee IT requests in one place.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-[#f8f9fc] rounded-[2rem] p-8 md:p-10 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl group border border-slate-100/50"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-10 h-48 relative border border-slate-100 group-hover:scale-[1.02] group-hover:shadow-md transition-all duration-300">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Project Management" className="w-full h-full object-cover object-top opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 mix-blend-overlay"></div>
              </div>
              <h3 className="text-[1.6rem] font-extrabold text-slate-900 mb-4 tracking-tight">Project Management</h3>
              <p className="text-slate-600 leading-relaxed text-[1.1rem]">
                Plan, manage, and execute IT projects with clarity and precision.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#f8f9fc] rounded-[2rem] p-8 md:p-10 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl group border border-slate-100/50"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-10 h-48 relative border border-slate-100 group-hover:scale-[1.02] group-hover:shadow-md transition-all duration-300">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="OKRs Template" className="w-full h-full object-cover object-top opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 mix-blend-overlay"></div>
              </div>
              <h3 className="text-[1.6rem] font-extrabold text-slate-900 mb-4 tracking-tight">OKRs Template</h3>
              <p className="text-slate-600 leading-relaxed text-[1.1rem]">
                Set and measure IT goals aligned with overall company objectives.
              </p>
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