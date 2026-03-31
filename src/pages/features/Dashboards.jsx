import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Activity, Zap, BarChart3, PieChart, TrendingUp, LayoutDashboard, Share2, MousePointer2, Crown, Rocket, Target, BarChart4 } from "lucide-react";
import { Helmet } from "react-helmet-async";

// Assets
import logo from "../../assets/logo.png";
import dashboardImg1 from "../../assets/dashboard2.webp";
import dashboardImg2 from "../../assets/dashboard.webp";
import featureProjects from '../../assets/projects.webp';
import featureWork from '../../assets/work_analysis.webp';
import featureChart from '../../assets/chart.webp';
import FeatureCTA from "../../components/FeatureCTA";

export default function Dashboards() {
  return (
    <>
        <Helmet>
        {/* Title (Chrome Tab) */}
        <title>Smart Business Dashboards | Karyaup Features</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Build custom dashboards with real-time metrics in Karyaup. Track business performance, project progress, sales growth, and team productivity from a single platform."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="business dashboard software, custom dashboards, real-time analytics, project tracking dashboard, team performance tools, Karyaup"
        />

        {/* Author */}
        <meta name="author" content="Karyaup" />

        {/* Open Graph (only essential) */}
        <meta property="og:title" content="Smart Business Dashboards | Karyaup" />
        <meta
          property="og:description"
          content="Monitor sales, projects, and team performance with powerful real-time dashboards."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/dashboards" />
        <meta property="og:site_name" content="Karyaup" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://karyaup.com/features/dashboards"
        />
      </Helmet>
    <div className="min-h-screen bg-white pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
      {/* Hero Section */}
      <section className="relative pt-4 sm:pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
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
                className="mt-4 sm:mt-5 text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]"
              >
                Custom Metrics For <br />
                <span className="block">
                  Every{" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Decision
                  </motion.span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 max-w-lg w-full mx-auto lg:mx-0"
              >
                {[
                  "Real-time signals for every decision.",
                  "Build custom dashboards that surface the metrics that matter — not just the ones that are easy to count."
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 text-left">
                    <div className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#7e22ce] stroke-[4]" />
                    </div>
                    <p className="text-sm sm:text-lg text-slate-600 font-medium leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-x-4 sm:gap-y-3 max-w-xs sm:max-w-md w-full mx-auto lg:mx-0"
              >
                {[
                  { label: "Custom widgets", icon: LayoutDashboard },
                  { label: "Live data", icon: Activity },
                  { label: "Shareable", icon: Share2 }
                ].map((tag) => (
                  <div key={tag.label} className="group flex items-center gap-2.5 sm:gap-3 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-slate-50/50 border border-slate-200/60 shadow-sm hover:border-purple-200 hover:bg-purple-50/50 transition-all duration-300">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <tag.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#7e22ce] stroke-[4]" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.1em] sm:tracking-[0.12em] text-slate-600 truncate">{tag.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24"
            >
              <div className="relative overflow-hidden border border-slate-200/80 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white">
                <img
                  src={dashboardImg2}
                  alt="KaryaUp Dashboard"
                  className="w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[460px] xl:h-[500px] object-cover object-left"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Role-Based Dashboards Section */}
      <section className="bg-white mt-12 sm:mt-16 lg:mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 text-center">
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
            <h2 className="mt-5 sm:mt-6 text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
              Multiple Dashboard For <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Based On Roles
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
              <div className={`flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-6 sm:p-10 lg:p-20 bg-white ${item.align === "right" ? "lg:order-2" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, x: item.align === "left" ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-3 sm:mb-4">
                    <div className="w-1.5 h-6 bg-[#7e22ce] rounded-full" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7e22ce]">
                      {item.header}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-4 sm:mb-8">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-lg text-slate-600 font-medium leading-relaxed max-w-lg mb-5 sm:mb-8">
                    {item.desc}
                  </p>
                  <div className="inline-flex px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[10px] font-black text-purple-700 uppercase tracking-widest">
                    {item.tag}
                  </div>
                </motion.div>
              </div>

              {/* Image Side - Larger and Centered */}
              <div className={`p-4 sm:p-8 lg:p-12 bg-slate-50/40 flex items-center justify-center overflow-hidden h-[280px] sm:h-[420px] lg:h-[500px] ${item.align === "right" ? "lg:order-1" : ""}`}>
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
                    className="max-h-full w-full object-contain rounded-xl shadow-2xl shadow-slate-900/20 hover:scale-[1.02] transition-all duration-700 ease-out"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Dashboard CTA Section */}
      <FeatureCTA 
        title={<>Dashboards That Power <br /> Every Decision</>}
        description="Monitor your entire business from a single source of truth—whether you're tracking sales, projects, or team performance."
        image={dashboardImg2}
        imageAlt="KaryaUp Dashboard Interface"
        containerClassName="mt-12 sm:mt-16 lg:mt-24"
      />
      </div>
      </>
  );
}
