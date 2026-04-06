import React, { lazy, Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import FeatureStack from "../../components/FeatureStack";
import FeatureCTA from "../../components/FeatureCTA";
import calenderImg from "../../assets/Calender.webp";
import { Helmet } from "react-helmet-async";
const CalendarStickySection = lazy(
  () => import("../../components/CalendarStickySection")
);

export default function CalendarPage() {
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
        <title>Team Calendar & Scheduling | Karyaup</title>

        <meta
          name="description"
          content="Plan and manage schedules with Karyaup calendar. Track tasks, deadlines, meetings, and events in one unified calendar for better team coordination."
        />

        <meta
          name="keywords"
          content="team calendar, scheduling software, task calendar, project deadlines, meeting planner, Karyaup"
        />

        <meta name="author" content="Karyaup" />

        <meta
          property="og:title"
          content="Team Calendar & Scheduling | Karyaup"
        />
        <meta
          property="og:description"
          content="Organize tasks, events, and deadlines with a powerful team calendar."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://karyaup.com/features/calendar"
        />
        <meta property="og:site_name" content="Karyaup" />

        <link
          rel="canonical"
          href="https://karyaup.com/features/calendar"
        />
      </Helmet>
      <div className="min-h-screen bg-white pt-14 sm:pt-16 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12">
          {/* Ambient Background Glows */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-slate-200/20 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-100/30 rounded-full blur-[100px] -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest shadow-sm"
                >
                  CALENDAR — ORGANIZE YOUR SCHEDULE
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: isMobile ? 0 : 40, x: isMobile ? 0 : -10 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.1 }}
                  className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06] mb-3"
                >
                  Master Your  <br />Time With A
                  <span className="block mt-1">
                    {" "}
                    <span className="text-gradient inline-block">
                      Unified Calendar
                    </span>
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                  className="mt-5 sm:mt-6 space-y-4 max-w-2xl w-full mx-auto lg:mx-0"
                >
                  {[
                    "A single calendar that brings together tasks, events, meetings, and deadlines in one beautiful view.",
                    "Plan seamlessly across teams, projects, and multiple timezones."
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 text-left group">
                      <div className="mt-0.5 w-5.5 h-5.5 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-500/20">
                        <CheckCircle2 className="w-3.2 h-3.2 text-purple-400 stroke-[3.5]" />
                      </div>
                      <p className="text-base text-slate-600 font-medium leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                        {text}
                      </p>
                    </div>
                  ))}
                </motion.div>

                <FeatureStack items={["Task scheduling", "Meeting invites", "Global tracking", "Timeline view"]} />
              </div>

              {/* Right Hero Image - Without SVGs */}
              <motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24 mt-4 sm:mt-8 lg:mt-0"
              >
                <div className="relative">
                  <div className="overflow-hidden border border-slate-200/80 rounded-2xl sm:rounded-3xl bg-white group transition-all duration-500">
                    <img
                      src={calenderImg}
                      alt="KaryaUp Calendar Interface"
                      className="w-full h-auto object-contain transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="h-[60vh] bg-white" />}>
          <CalendarStickySection />
        </Suspense>

        {/* Calendar Feature CTA */}
        <FeatureCTA
          title={<>Stay Synced With Your <br /> Schedule.</>}
          description="Connect your favorite tools and never miss a deadline. Automatically sync your scheduled tasks, meetings, and content publishing."
          buttonText="Start Scheduling"
          image={calenderImg}
          imageAlt="Calendar Workspace"
          containerClassName="mt-0"
          paddingClassName="p-3 pt-5 sm:p-4 lg:p-8"
          imageClassName="w-full max-w-[760px] mx-auto"
          imageOuterClassName="relative flex w-full max-w-[300px] items-center justify-center mx-auto -translate-x-2 sm:w-[102%] sm:max-w-none sm:translate-x-0 lg:w-[88%] lg:translate-x-3"
        />

      </div>
    </>
  );
}
