import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard1.jpeg";

export default function ProductDevelopment() {
  return (
    <div className="bg-white font-sans">

      {/* ================= HERO SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <p className="text-sm tracking-[0.25em] text-purple-600 font-semibold mb-2">
              AI-POWERED OPERATIONS MANAGEMENT
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-6">
              The everything app <br />
              for operations teams
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Bring your workflows, resources, and chat into one platform—all powered by AI. ClickUp automates processes, approvals, and removes bottlenecks to maximize team operational efficiency.
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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          

          {/* RIGHT TEXT */}
         
        </div>
      </section>

      {/* ================= Comparison Section ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 bg-white py-10 md:py-5">
        <div className="max-w-7xl mx-auto px-2">
          <div className="text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-purple-600 font-semibold mb-4">
              The KaryaUp way
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              Managing operations is chaotic,
              <br />
              let's fix it
            </h2>
            <p className="mt-5 mx-auto max-w-2xl text-slate-600 leading-relaxed">
              Disconnected tools and processes slow operations and increase risk. ClickUp unites every team workflows, projects, and collaboration—so everything runs smoothly 24/7.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 rounded-3xl border border-slate-200 overflow-hidden">
            {/* Left */}
            <div className="p-8 md:p-10 bg-white transition-colors duration-300 hover:bg-rose-50/60">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">The old way</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  "Workflows and approvals scattered across tools",
                  "Delayed requests and reporting",
                  "Unclear ownership, priorities, and risks",
                  "Manual processes slow teamwork and compliance",
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
                  "Processes, docs, and chat in one platform",
                  "Automated requests, reporting, and updates",
                  "Total visibility into resources, priorities, and risks",
                  "Real-time collaboration for faster alignment and execution",
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