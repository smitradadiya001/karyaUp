import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard.jpeg";

export default function ProductDevelopment() {
  return (
    <div className="bg-white font-sans">

      {/* ================= HERO SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <p className="text-sm tracking-[0.25em] text-purple-600 font-semibold mb-2">
              AI-POWERED PRODUCT DEVELOPMENT
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-6">
              The everything app <br />
              for product teams
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Plan, build, and ship all in one place. KaryaUp centralizes your 
              entire product lifecycle, from roadmap to release, so your teams 
              move faster without roadblocks.
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
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-300/30 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-300/30 blur-3xl rounded-full"></div>
          </motion.div>

        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-xl border">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Streamline your entire workflow
            </h2>

            <p className="text-slate-600 mb-6">
              Break down silos between teams and bring everything into one 
              connected workflow—from product planning to final delivery.
            </p>

            <ul className="space-y-3">
              {[
                "Plan product roadmap",
                "Track development progress",
                "Collaborate in real-time",
                "Deliver faster releases",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  ✔ <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ================= Comparison Section ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-purple-600 font-semibold mb-4">
              The KaryaUp way
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              Project management is broken,
              <br />
              we fixed it
            </h2>
            <p className="mt-5 mx-auto max-w-2xl text-slate-600 leading-relaxed">
              Disconnected tools sabotage product teams. KaryaUp brings your planning, tracking, and delivery together
              so teams focus on building their best work, not managing tools.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 rounded-3xl border border-slate-200 overflow-hidden">
            {/* Left */}
            <div className="p-8 md:p-10 bg-white transition-colors duration-300 hover:bg-rose-50/60">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">The old way</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  "Roadmaps, tasks, and updates scattered across multiple tools",
                  "Critical info hidden in siloed systems and meetings",
                  "Manual updates and repetitive work strain capacity",
                  "Missed milestones and bottlenecks cause delays",
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
                  "All projects, docs, and chat in one platform",
                  "Instant search across your full workspace",
                  "Automated reporting, updates, and resource management",
                  "AI-powered workflows that manage tasks, dependencies, and timelines",
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