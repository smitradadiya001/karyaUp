import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Activity, Zap, BarChart3, PieChart, TrendingUp, LayoutDashboard, Share2, MousePointer2, Crown, Rocket, Target, BarChart4 } from "lucide-react";

// Assets
import logo from "../../assets/logo.png";
import dashboardImg1 from "../../assets/dashboard1.png";
import dashboardImg2 from "../../assets/dashboard2.png";
import featureProjects from '../../assets/projects.jpeg';
import featureWork from '../../assets/work_analysis.jpeg';
import featureChart from '../../assets/chart.png';

export default function Dashboards() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest"
              >
                Features <span className="opacity-60">/</span> Dashboards
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]"
              >
                Custom metrics for <br />
                <span className="block">
                  every{" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    decision
                  </motion.span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="mt-6 space-y-4 max-w-2xl mx-auto lg:mx-0"
              >
                {[
                  "Real-time signals for every decision.",
                  "Build custom dashboards that surface the metrics that matter — not just the ones that are easy to count."
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3.5 text-left">
                    <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#7e22ce] stroke-[4]" />
                    </div>
                    <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 max-w-md mx-auto lg:mx-0"
              >
                {[
                  { label: "Custom widgets", icon: LayoutDashboard },
                  { label: "Live data", icon: Activity },
                  { label: "Shareable", icon: Share2 }
                ].map((tag) => (
                  <div key={tag.label} className="group flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-slate-50/50 border border-slate-200/60 shadow-sm hover:border-purple-200 hover:bg-purple-50/50 transition-all duration-300">
                    <div className="w-5 h-5 rounded-md bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <tag.icon className="w-3 h-3 text-[#7e22ce] stroke-[4]" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-600 truncate">{tag.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="relative lg:-mr-24 xl:-mr-40"
            >
              <div className="absolute -inset-8 bg-gradient-to-tr from-[#7e22ce]/16 via-fuchsia-500/8 to-transparent blur-3xl opacity-55" />
              <div className="relative overflow-hidden border border-slate-200/80 rounded-3xl shadow-2xl shadow-slate-900/10 bg-white">
                <img
                  src={dashboardImg2}
                  alt="KaryaUp Dashboard"
                  className="w-full h-[320px] sm:h-[380px] lg:h-[450px] object-cover object-left"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-44 lg:w-56 bg-gradient-to-r from-transparent via-white/70 to-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Role-Based Dashboards Section */}
      <section className="bg-white mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }} // match home page entry
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#7e22ce]" />
              <span className="opacity-60">/</span>
              <span>Universal Dashboard Control</span>
            </div>
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
              Multiple dashboard for <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                based on roles
              </motion.span>
            </h2>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto">
          {[
            {
              header: "Boss Dashboard",
              title: "Leadership Insights",
              desc: "Gain high-level visibility into core metrics. Monitor profitability, team allocation, and company health to steer your business with confidence.",
              image: dashboardImg2,
              tag: "Executive View",
              align: "left"
            },
            {
              header: "PM Dashboard",
              title: "Project Orchestration",
              desc: "Manage complexity with ease. Track sprint velocity, bottleneck trends, and resource distribution to ensure seamless delivery on every project.",
              image: featureProjects,
              tag: "Portfolio Tracking",
              align: "right"
            },
            {
              header: "Employee Dashboard",
              title: "Personal Performance",
              desc: "Optimize your daily flow. Visualize personal goals, time logs, and task efficiency to drive individual growth and focus.",
              image: featureWork,
              tag: "Productivity Engine",
              align: "left"
            },
            {
              header: "Sales Dashboard",
              title: "Growth Momentum",
              desc: "Accelerate your pipeline. Monitor conversion rates, revenue forecasts, and sales velocity to keep your team consistently over-performing.",
              image: featureChart,
              tag: "Revenue Pulse",
              align: "right"
            }
          ].map((item, i) => (
            <div key={i} className={`grid lg:grid-cols-2 divide-x-0 lg:divide-x lg:divide-black/10 border-t border-black/10 first:border-t-0`}>
              {/* Content Side */}
              <div className={`flex flex-col justify-center p-10 sm:p-14 lg:p-20 bg-white ${item.align === "right" ? "lg:order-2" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, x: item.align === "left" ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-6 bg-[#7e22ce] rounded-full" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7e22ce]">
                      {item.header}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-lg mb-8">
                    {item.desc}
                  </p>
                  <div className="inline-flex px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    {item.tag}
                  </div>
                </motion.div>
              </div>

              {/* Image Side - Smaller and Centered */}
              <div className={`p-12 sm:p-16 lg:p-24 bg-slate-50/40 flex items-center justify-center overflow-hidden h-[350px] sm:h-[450px] lg:h-auto ${item.align === "right" ? "lg:order-1" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="max-h-[280px] sm:max-h-[350px] lg:max-h-[420px] w-auto h-auto object-contain rounded-xl shadow-2xl shadow-slate-900/10 grayscale-[15%] hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Dashboard CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-10 group">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-black flex flex-col lg:flex-row items-stretch p-3 py-0 lg:p-8 lg:py-0 border border-white/5">
          {/* Ambient Background Gradients for Depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(168,85,247,0.4),transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(236,72,153,0.1),transparent_40%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,34,206,0.1),transparent_40%)] pointer-events-none" />
          
          {/* Left Content Area */}
          <div className="flex-[0.7] z-20 text-left flex flex-col justify-center pt-6 lg:pt-16 pb-4 lg:pb-10 pl-2 lg:pl-10">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative h-11 mb-6 self-start flex items-center gap-3"
            >
              {/* Dual-layer Logo */}
              <div className="relative h-full flex items-center">
                <img 
                  src={logo} 
                  alt="KaryaUp" 
                  className="h-full w-auto filter brightness-0 invert opacity-100" 
                />
                <div className="absolute inset-0 pointer-events-none" style={{ clipPath: 'inset(0 75% 0 0)' }}>
                  <img src={logo} alt="" className="h-full w-auto" />
                </div>
              </div>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.1] mb-3 tracking-tight drop-shadow-lg"
            >
              Dashboards that power <br />
              every decision
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-sm font-medium mb-6 max-w-xs leading-relaxed"
            >
              Monitor your entire business from a single source of truth—whether you're tracking sales, projects, or team performance.
            </motion.p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black px-10 py-4 rounded-[1.25rem] font-black text-base hover:bg-slate-50 transition-all shadow-2xl relative overflow-hidden self-start"
            >
              <span className="relative z-10">Get started. It's FREE</span>
            </motion.button>
          </div>

          {/* Right Content Area: Interface Showcase */}
          <div className="flex-1 relative mt-16 lg:mt-0 flex items-center justify-center lg:justify-start lg:pl-0">
             <motion.div 
               initial={{ opacity: 0, x: 80, scale: 0.95 }}
               whileInView={{ opacity: 1, x: 0, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
               className="relative lg:w-[155%] lg:translate-x-[18%]"
             >
               <div className="absolute top-1/4 -left-10 w-64 h-64 bg-white/10 blur-[80px] rounded-full z-30 pointer-events-none" />
               <div className="absolute top-1/2 left-0 w-full h-full bg-purple-600/50 blur-[150px] rounded-full opacity-70 pointer-events-none" />
               <div className="absolute -top-20 -right-20 w-80 h-80 bg-fuchsia-500/30 blur-[100px] rounded-full opacity-60 pointer-events-none" />
               
               <div className="relative p-[1.5px] rounded-[3.1rem] bg-gradient-to-br from-purple-500 via-fuchsia-500 to-[#7e22ce]">
                 <img 
                   src={dashboardImg2} 
                   alt="KaryaUp Dashboard Interface" 
                   className="relative w-full rounded-[3rem] border border-white/10 hover:border-white/20 transition-all duration-500 z-10"
                 />
               </div>
             </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
