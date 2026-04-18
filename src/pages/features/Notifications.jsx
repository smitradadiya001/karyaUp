import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Bell, Shield, BellOff, Zap, CheckCircle2, ArrowRight, Archive, Clock, Filter, MousePointerClick, Check } from "lucide-react";

const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    rawX.set(x);
    rawY.set(y);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 1000 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      tabIndex={0}
      className={`${className} active:border-purple-300 active:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/30`}
    >
      <div style={{ transform: 'translateZ(20px)' }} className="h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};
import { FeatureCard, CTABanner } from "../../components/SubPageLayout";
import FeatureCTA from "../../components/FeatureCTA";
import notificationImg from "../../assets/Notification.png";
import { Helmet } from "react-helmet-async";
import FeatureStack from "../../components/FeatureStack";

export default function Notifications() {
  const [isMobile, setIsMobile] = useState(false);

  const notificationFeatures = [
    {
      title: "Centralized Inbox",
      desc: "Keep all notifications organized in one place with complete history.",
      icon: Archive,
      color: "purple"
    },
    {
      title: "Smart Filters",
      desc: "Instantly adjust filters to see only what requires your direct attention.",
      icon: Filter,
      color: "fuchsia"
    },
    {
      title: "Overdue Alerts",
      desc: "Never miss a deadline with automated red-flag popup tracking.",
      icon: Clock,
      color: "purple"
    },
    {
      title: "Instant Actions",
      desc: "Mark read or clear history instantly without leaving the page.",
      icon: MousePointerClick,
      color: "fuchsia"
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'purple': return 'bg-purple-100 text-[#7e22ce] group-hover:bg-[#7e22ce] group-hover:text-white group-active:bg-[#7e22ce] group-active:text-white shadow-purple-200/50';
      case 'emerald': return 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white group-active:bg-emerald-500 group-active:text-white shadow-emerald-200/50';
      case 'blue': return 'bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white group-active:bg-blue-500 group-active:text-white shadow-blue-200/50';
      case 'fuchsia': return 'bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-500 group-hover:text-white group-active:bg-fuchsia-500 group-active:text-white shadow-fuchsia-200/50';
      default: return 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-active:bg-purple-600 group-active:text-white shadow-purple-200/50';
    }
  };

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

      <div className="min-h-screen bg-white pt-24 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
        {/* Hero Section */}
        <section className="relative pt-4 sm:pt-6 lg:pt-4 pb-0 sm:pb-4 lg:pb-24 overflow-visible">
          {/* Ambient Background Glows */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-fuchsia-100/30 rounded-full blur-[100px] -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1.3fr_2fr] gap-12 items-center">
              {/* Left Content - Compact High Density */}
              <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start lg:self-start lg:pt-2">
                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest shadow-sm"
                >
                  NOTIFICATIONS — NEVER MISS A BEAT
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
                className="mt-3 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.12] sm:leading-[1.05]"
              >
                  Connected With Smart
                  <span className="block">
                    {" "}
                    <span
                      className="text-gradient inline-block tracking-[0.015em]"
                      style={{ fontVariantLigatures: "none" }}
                    >
                      Notifications
                    </span>
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                  className="mt-5 sm:mt-6 space-y-4 max-w-2xl w-full mx-auto lg:mx-0"
                >
                  {[
                    "Conversations and alerts that stay close to work",
                    "Chat directly inside projects, tasks, and teams",
                   
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3.5 text-left">
                      <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#7e22ce] stroke-[4]" />
                      </div>
                      <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                        {item}
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
        {/* ── Notification Grid Section ── */}
        <section className="pt-2 lg:pt-4 pb-12 sm:pb-16 lg:pb-20 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold mb-4 uppercase tracking-widest"
              >
                <Bell className="w-3.5 h-3.5" />
                History Archive
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.05] mb-6 tracking-normal"
              >
                Never Lose Track Of<br className="hidden sm:block" />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  {" "}Past Updates.
                </motion.span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-base sm:text-lg lg:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
              >
                Get popup alerts from another tab, retrieve any alert from the past, and manage thousands of loaded messages effortlessly.
              </motion.p>
            </div>

            {/* 4 tilt cards - Light Theme */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto"
              style={{ perspective: '1200px' }}
            >
              {notificationFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.1 }}
                    className="h-full"
                  >
                    <TiltCard className="bg-white border border-slate-200 hover:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-default h-full transition-colors transition-shadow duration-300 group">
                      <div className="flex items-center gap-4 mb-5 sm:mb-6">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:scale-110 ${getColorClasses(feature.color)}`}>
                          <Icon size={20} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">{feature.title}</h3>
                      </div>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed">{feature.desc}</p>
                    </TiltCard>
                  </motion.div>
                )
              })}
            </div>

          </div>
        </section>
        {/* Smart Filtering Feature CTA */}
        <FeatureCTA
          title={<>Silence The Noise. <br /> Focus On What Matters.</>}
          description="With our smart filter your feed to show only what requires your direct attention. "
          image={notificationImg}
          imageAlt="Smart Notification Filtering"
          containerClassName="mt-0"
        />





      </div>
    </>
  );
}
