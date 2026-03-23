import React from "react";
import { motion } from "framer-motion";
import { Bell, Shield, BellOff, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { FeatureCard, CTABanner } from "../../components/SubPageLayout";
import FeatureCTA from "../../components/FeatureCTA";
import notificationImg from "../../assets/Notification.png";

export default function Notifications() {
  return (
    <div className="min-h-screen bg-white pt-20 pb-0 text-slate-900">
      {/* Hero Section */}
      <section className="relative mb-12 overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-fuchsia-100/30 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.3fr_2fr] gap-12 items-center">
            {/* Left Content - Compact High Density */}
            <div className="text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-3.5 py-1.2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[11px] font-black uppercase tracking-widest shadow-sm"
              >
                Features <span className="opacity-60 text-purple-400">/</span> Notifications
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 100,
                  delay: 0.1
                }}
                className="mt-3.5 text-4xl sm:text-5xl lg:text-5.5xl font-black text-slate-900 tracking-tight leading-[1.05] mb-3"
              >
                Stay connected with Smart
                <span className="block mt-1">
                  {" "}
                  <span className="text-gradient inline-block">
                    Notifications
                  </span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="mt-4 space-y-3.5 max-w-lg mx-auto lg:mx-0"
              >
                {[
                  "Alerts that actually mean something. No spam, no noise — only the updates tied to work you own, follow, or need to act on.",
                  "Stay informed without being interrupted."
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 text-left lg:justify-start group">
                    <div className="mt-0.5 w-5.5 h-5.5 rounded-full bg-purple-100 border border-purple-200/60 flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-200/40">
                      <CheckCircle2 className="w-3.2 h-3.2 text-purple-600 stroke-[3.5]" />
                    </div>
                    <p className="text-base text-slate-600 font-medium leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                      {text}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 max-w-md mx-auto lg:mx-0"
              >
                {[
                  { label: "Real-time Alerts", icon: Bell },
                  { label: "Spam filtering", icon: Shield },
                  { label: "Active mentions", icon: BellOff },
                  { label: "Context-aware", icon: Zap }
                ].map((tag) => (
                  <div key={tag.label} className="group flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 shadow-sm hover:border-purple-200 hover:bg-purple-50 transition-all duration-300">
                    <div className="w-4.5 h-4.5 rounded-md bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <tag.icon className="w-2.8 h-2.8 text-purple-600 stroke-[3]" />
                    </div>
                    <span className="text-[9.5px] font-black uppercase tracking-[0.1em] text-slate-600 truncate group-hover:text-purple-700">{tag.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Hero Image - Dashboard Style Showcasing */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="relative lg:-mr-24 xl:-mr-40"
            >
              <div className="absolute -inset-12 bg-gradient-to-tr from-purple-600/15 via-fuchsia-500/8 to-transparent blur-3xl opacity-50" />
              
              <div className="relative overflow-hidden border border-slate-200/80 rounded-3xl shadow-2xl shadow-slate-900/10 bg-white group transition-all duration-500 hover:border-purple-300/30">
                 <img 
                   src={notificationImg} 
                   alt="KaryaUp Notifications Interface" 
                   className="w-full h-[320px] sm:h-[380px] lg:h-[450px] object-cover object-left shadow-sm transition-transform duration-700 group-hover:scale-[1.01]"
                 />
                 {/* Dashboard-style fade mask */}
                 <div className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-44 lg:w-64 bg-gradient-to-r from-transparent via-white/70 to-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smart Filtering Feature CTA */}
      <FeatureCTA
        title={<>Silence the noise. <br /> Focus on what matters.</>}
        description="With our smart inbox, filter your feed to show only what requires your direct attention. "
        buttonText="Explore Smart Filters"
        image={notificationImg}
        imageAlt="Smart Notification Filtering"
        containerClassName="mt-20 mb-12"
      />

      
   

     
    </div>
  );
}
