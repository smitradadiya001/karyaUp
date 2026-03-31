                       import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.png";
import planImage from "../../assets/Gantt.png";
import { Link } from "react-router-dom";
import FeatureCTA from "../../components/FeatureCTA";

export default function ProductDevelopment() {
  return (
    <div className="bg-white font-sans overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              The everything app <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                for Marketing Teams
              </motion.span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Brainstorm, plan, and execute your team's marketing programs—from multi-channel campaigns to global events and more with KaryaUp.
            </p>
            <Link
              to="/start"
              className="group relative z-10 flex h-[3.5em] w-[14em] items-center justify-center overflow-hidden rounded-[30em] font-bold text-[15px] transition-all duration-300 mx-auto lg:mx-0"
              style={{ boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff" }}
            >
              <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
              <div className="absolute left-0 top-0 -z-10 h-full w-0 rounded-[30em] bg-white transition-all duration-500 ease-in-out group-hover:w-full" />
              <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-slate-800">
                Get Started
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img src={dashboardImage} alt="Dashboard" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= NEW SECTION 1: VISUAL CAMPAIGN PLANNING ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
                <img src={planImage} alt="Gantt Planning" className="w-full h-auto" />
              </div>
            </motion.div>
            

            <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 80, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
            Visualize your<br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Marketing ROI
              </motion.span>
            </h1>
          
              <p className="text-xl text-slate-600 mb-8">
                Stop guessing which campaigns work. Align your budget with performance data using our built-in marketing analytics.
              </p>
              <ul className="space-y-4">
                {['Multi-channel Attribution', 'Real-time Budget Tracking', 'Customizable KPI Dashboards'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-800">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
           </motion.div>
          </div>
        </div>
      </section>

      {/* ================= PROJECT MANAGEMENT COMPARISON ================= */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl lg:text-6xl font-black mb-16">
            Marketing management <br/>
            <span className="text-[#7e22ce]">is broken, we fixed it</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="bg-red-50 rounded-3xl p-10 border border-red-100">
              <h3 className="text-2xl font-bold text-red-600 mb-6">❌ The Old Way</h3>
              <ul className="space-y-4 text-slate-700">
                {['Campaigns scattered across tools', 'Siloed asset approvals', 'Manual performance reporting', 'Missed launch dates'].map((li, i) => (
                  <li key={i} className="flex items-center gap-2"><span>•</span> {li}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="bg-purple-50 rounded-3xl p-10 border border-purple-100">
              <h3 className="text-2xl font-bold text-[#7e22ce] mb-6">✅ The KaryaUp Way</h3>
              <ul className="space-y-4 text-slate-700">
                {['One platform for assets & execution', 'Automated approval workflows', 'AI-powered ROI insights', 'Accelerated speed-to-market'].map((li, i) => (
                  <li key={i} className="flex items-center gap-2"><span>•</span> {li}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work Smarter with tasks that can live in your whiteboards, chat, calendar - anywhere you work"
        image={dashboardImage}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-10 mb-20"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px]"
        imageOuterClassName="relative w-full flex justify-center translate-y-8"
      />
    </div>
  );
}