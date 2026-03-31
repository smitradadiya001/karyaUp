                                                                                                   import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import dashboardImage from "../../assets/dashboard.jpeg";
import FeatureCTA from "../../components/FeatureCTA";

// Shared animation variants to keep code clean
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { type: "spring", damping: 25, stiffness: 100 }
};

const textGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]";

export default function ProductDevelopment() {
  return (
    <div className="bg-white font-sans overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              The everything app<br />
              <motion.span
                className={textGradient}
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                for software teams
              </motion.span>
            </motion.h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Get real-time visibility into your revenue, expenses, and margins with KaryaUp. 
              Analyze profitability across projects, teams, and clients—so you can make smarter 
              financial decisions and scale with confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/start"
                className="group relative flex h-[3.5em] w-[14em] items-center justify-center overflow-hidden rounded-full font-bold text-[15px] transition-all duration-300"
                style={{ boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff" }}
              >
                <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
                <div className="absolute left-0 top-0 -z-10 h-full w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full" />
                <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-slate-800">
                  Start Free Workspace
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2">
              <img
                src={dashboardImage}
                alt="KaryaUp Dashboard"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= WORKFLOW SECTION ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div {...fadeInUp} className="rounded-2xl overflow-hidden shadow-xl border">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Team Workflow"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div>
            <motion.h2 {...fadeInUp} className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-6">
              Streamline your<br />
              <span className={textGradient}>entire workflow</span>
            </motion.h2>
            
            <p className="text-lg text-slate-600 mb-8">
              Break down silos between teams and bring everything into one
              connected workflow—from product planning to final delivery.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Plan product roadmap",
                "Track development progress",
                "Collaborate in real-time",
                "Deliver faster releases",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= COMPARISON SECTION ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-4">
              Project management <br />
              <span className={textGradient}>is broken, we fixed it</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Old Way */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-red-50/50 rounded-3xl p-10 border border-red-100 relative overflow-hidden"
            >
              <h3 className="text-2xl font-bold text-red-600 mb-6">❌ The Old Way</h3>
              <ul className="space-y-4 text-slate-700">
                {["Projects scattered across multiple tools", "Critical info hidden in siloed systems", "Manual updates strain capacity", "Missed deadlines cause bottlenecks"].map((text, i) => (
                  <li key={i} className="flex items-start gap-2">• {text}</li>
                ))}
              </ul>
            </motion.div>

            {/* The KaryaUp Way */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-purple-50/50 rounded-3xl p-10 border border-purple-100 relative overflow-hidden"
            >
              <h3 className="text-2xl font-bold text-purple-600 mb-6">✅ The KaryaUp Way</h3>
              <ul className="space-y-4 text-slate-700">
                {["All projects, docs, and chat in one platform", "Instantly find anything across all tools", "Automated reporting & resource management", "AI-powered workflows for tasks & timelines"].map((text, i) => (
                  <li key={i} className="flex items-start gap-2 font-semibold text-purple-900">✓ {text}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work smarter with tasks that can live in your whiteboards, chat, and calendar—anywhere you work."
        image={dashboardImage}
        imageAlt="KaryaUp dashboard"
        containerClassName="my-20"
        paddingClassName="p-6 lg:py-12"
        imageClassName="w-full max-w-[940px] shadow-2xl rounded-xl"
      />
    </div>
  );
}