import React, { lazy, Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, CalendarDays, Clock, Globe, Layout } from "lucide-react";
import FeatureStack from "../../components/FeatureStack";
import FeatureCTA from "../../components/FeatureCTA";
import calenderImg from "../../assets/calender.webp";
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
      <div className="min-h-screen bg-white pt-24 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
        {/* Hero Section */}
        <section className="relative pt-4 sm:pt-6 lg:pt-4 pb-2 sm:pb-4 lg:pb-4">
          {/* Ambient Background Glows */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-slate-200/20 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-100/30 rounded-full blur-[100px] -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start lg:self-start lg:pt-2">
                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest shadow-sm"
                >
                  CALENDAR — ORGANIZE YOUR SCHEDULE
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                  className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black tracking-normal leading-[1.05] text-slate-900"
                >
                  Master Your Time With
                  <span className="block">
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
                  className="mt-4 sm:mt-6 space-y-3 w-full max-w-[28rem] mx-auto lg:max-w-none lg:mx-0"
                >
                  {[
                    "Unified view for tasks, meetings & deadlines",
                    "Visual timelines & seamless team coordination"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-4 text-left justify-center lg:justify-start">
                      <div className="mt-1.5 w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#7e22ce] stroke-[4]" />
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                        {text}
                      </p>
                    </div>
                  ))}
                </motion.div>

                <FeatureStack items={[
                  { label: "Task scheduling", icon: CalendarDays },
                  { label: "Meeting invites", icon: Clock },
                  { label: "Global tracking", icon: Globe },
                  { label: "Timeline view", icon: Layout }
                ]} />
              </div>

              {/* Right Hero Image - Without SVGs */}
              <motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="relative w-full max-w-[420px] sm:max-w-[480px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-8 xl:-mr-16 mt-4 sm:mt-8 lg:mt-0"
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
