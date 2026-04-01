import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bell, Shield, BellOff, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { FeatureCard, CTABanner } from "../../components/SubPageLayout";
import FeatureCTA from "../../components/FeatureCTA";
import notificationImg from "../../assets/Notification.png";
import { Helmet } from "react-helmet-async";
import FeatureStack from "../../components/FeatureStack";

export default function Notifications() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
       <Helmet>
        {/* Title (Chrome Tab) */}
        <title>Real-Time Notifications & Alerts | Karyaup</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Stay updated with real-time notifications in Karyaup. Get instant alerts for tasks, messages, mentions, and project updates to never miss important activity."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="real-time notifications, task alerts, team updates, activity tracking, project notifications, Karyaup"
        />

        {/* Author */}
        <meta name="author" content="Karyaup" />

        {/* Open Graph (Essential Only) */}
        <meta
          property="og:title"
          content="Real-Time Notifications & Alerts | Karyaup"
        />
        <meta
          property="og:description"
          content="Receive instant alerts for tasks, messages, and team activity in one place."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://karyaup.com/features/notifications"
        />
        <meta property="og:site_name" content="Karyaup" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://karyaup.com/features/notifications"
        />
      </Helmet>

    <div className="min-h-screen bg-white pt-14 sm:pt-16 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
      {/* Hero Section */}
      <section className="relative mb-12 overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-fuchsia-100/30 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.3fr_2fr] gap-12 items-center">
            {/* Left Content - Compact High Density */}
            <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
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
                className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06] mb-3"
              >
            Connected With Smart
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

                <FeatureStack items={[
                  { label: "Real-time Alerts", icon: Bell },
                  { label: "Spam filtering", icon: Shield },
                  { label: "Active mentions", icon: BellOff },
                  { label: "Context-aware", icon: Zap }
                ]} />
            </div>

            {/* Right Hero Image - Dashboard Style Showcasing */}
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24"
            >
              <div className="relative overflow-hidden border border-slate-200/80 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white group transition-all duration-500 hover:border-purple-300/30">
                 <img 
                   src={notificationImg} 
                   alt="KaryaUp Notifications Interface" 
                   className="w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[460px] xl:h-[500px] object-cover object-left shadow-sm transition-transform duration-700 group-hover:scale-[1.01]"
                 />
              </div>
            </motion.div>
          </div>
        </div>
        </section>
        
        

      {/* Smart Filtering Feature CTA */}
      <FeatureCTA
        title={<>Silence The Noise. <br /> Focus On What Matters.</>}
        description="With our smart inbox, filter your feed to show only what requires your direct attention. "
        image={notificationImg}
        imageAlt="Smart Notification Filtering"
        containerClassName="mt-20 mb-12"
      />

      
   

     
      </div>
      </>
  );
}
