import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { Check, PlayCircle, Sparkles, MonitorPlay, Clock, Monitor, Smartphone, Layout } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import FeatureCTA from "../../components/FeatureCTA";
import FeatureStack from "../../components/FeatureStack";
import demoPreview from "../../assets/dashboard2.webp";

export default function WatchDemo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const demoFlowItems = [
    {
      title: "Unified Workspace",
      desc: "See how teams create, assign, and track work from a single source of truth.",
      icon: Layout,
      color: "purple"
    },
    {
      title: "Connected Flows",
      desc: "Observe how communications and notifications stay tied to actual execution.",
      icon: Monitor,
      color: "fuchsia"
    },
    {
      title: "Advanced Control",
      desc: "Watch how leaders utilize automated dashboards and attendance tracking.",
      icon: Smartphone,
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case "purple":
        return "bg-purple-100 text-[#7e22ce] group-hover:bg-[#7e22ce] group-hover:text-white group-active:bg-[#7e22ce] group-active:text-white shadow-purple-200/50";
      case "fuchsia":
        return "bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-500 group-hover:text-white group-active:bg-fuchsia-500 group-active:text-white shadow-fuchsia-200/50";
      default:
        return "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-active:bg-purple-600 group-active:text-white shadow-purple-200/50";
    }
  };

  return (
    <>
      <Helmet>
        <title>Watch Demo | Karyaup Product Walkthrough</title>
        <meta name="description" content="Watch the Karyaup demo to explore features like task management, dashboards, and chat." />
        <link rel="canonical" href="https://karyaup.com/watch-demo" />
      </Helmet>

      <div className="min-h-screen bg-white pt-24 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
        {/* ── Hero ── */}
        <section className="relative pt-4 sm:pt-6 lg:pt-4 pb-8 sm:pb-4 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center lg:items-start">
              
              {/* Left Content */}
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start lg:self-start px-1 sm:px-0">
                <Motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm mb-2 sm:mb-4"
                >
                  WATCH DEMO — SEE KARYAUP IN ACTION
                </Motion.div>

                <Motion.h1
                  initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                  className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.02] sm:leading-[1.05]"
                >
                  Experience the
                  <span className="block -mt-1 sm:mt-0">
                    <Motion.span
                      className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] whitespace-nowrap"
                      animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      Future of Work
                    </Motion.span>
                  </span>
                </Motion.h1>

                <Motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                  className="mt-5 sm:mt-6 w-full max-w-lg flex flex-col items-center lg:items-start"
                >
                  <div className="space-y-3 sm:space-y-4 w-fit">
                    {[
                      { text: "Full product walkthrough in under 5 minutes.", icon: Check },
                      { text: "Understand the flow before your personalized call.", icon: Check }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-left">
                        <div className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#7e22ce] stroke-[4]" />
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </Motion.div>

                <FeatureStack items={["5 min walkthrough", "Live flow", "Real use cases", "Watch instantly"]} />
              </div>

              {/* Right – Video Preview Area */}
              <Motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:self-start lg:-mr-12 xl:-mr-24"
              >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-[#0f0714] p-3 sm:p-4 shadow-2xl shadow-slate-900/10">
                   <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-fuchsia-500/10 opacity-50" />
                   <div className="relative overflow-hidden rounded-[1.2rem] sm:rounded-[1.6rem] border border-white/5 bg-black/40 group">
                      <img
                        src={demoPreview}
                        alt="Watch KaryaUp demo preview"
                        className="w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px] object-cover object-top opacity-80 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Link
                          to="/book-demo"
                          className="group/play flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/95 text-[#7e22ce] shadow-2xl transition-all hover:scale-110 active:scale-95"
                        >
                          <PlayCircle className="h-8 w-8 sm:h-10 sm:w-10 fill-current" />
                        </Link>
                      </div>
                   </div>
                </div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* ── Demo Highlights Section ── */}
        <section className="pt-8 sm:pt-4 lg:pt-6 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto border border-slate-200 rounded-[2.5rem] bg-slate-50/50 p-6 sm:p-12 lg:p-16">
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-purple-700 shadow-sm mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Product Walkthrough
                </div>
                <h2 className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.05] tracking-normal">
                  What you’ll <br className="hidden sm:block" />
                  <Motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  >
                    See in Action.
                  </Motion.span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {demoFlowItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -4, scale: 1.01 }}
                      whileTap={{ y: 2, scale: 0.99 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="group relative overflow-hidden bg-white/70 backdrop-blur-xl border border-slate-200/70 p-8 rounded-[2rem] hover:border-[#7e22ce] active:border-[#7e22ce] shadow-[0_18px_50px_rgba(15,23,42,0.06)] hover:shadow-[0_24px_70px_rgba(126,34,206,0.12)] transition-all duration-300 flex flex-col items-center text-center sm:items-start sm:text-left"
                    >
                      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.9),transparent_45%)] opacity-60 transition-opacity duration-300 group-hover:opacity-80 group-active:opacity-80" />
                      <div className="pointer-events-none absolute inset-[1px] rounded-[1.9rem] border border-white/40 opacity-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-14px_26px_rgba(126,34,206,0.08)] transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100" />
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-active:scale-110 ${getColorClasses(item.color)}`}>
                        <Icon size={22} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-xl font-black text-slate-900 mb-3 transition-colors duration-300 group-hover:text-[#7e22ce]">{item.title}</h3>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed transition-colors duration-300 group-hover:text-slate-600">{item.desc}</p>
                    </Motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Feature CTA ── */}
        <FeatureCTA
          title={<>Ready to see KaryaUp <br /> with your workflow?</>}
          description="Watch the product in action, then book a personalized walkthrough whenever you want to go deeper."
          buttonText="Book full demo"
          image={demoPreview}
          imageAlt="KaryaUp demo walkthrough"
          containerClassName="mt-0"
        />
      </div>
    </>
  );
}
