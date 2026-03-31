import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Globe, ArrowRight, CheckCircle2, Video, CheckSquare, Sparkles } from "lucide-react";
import { CTABanner } from "../../components/SubPageLayout";
import FeatureCTA from "../../components/FeatureCTA";
import calenderImg from "../../assets/Calender.webp";
import scheduleMeetingImg from "../../assets/Schedule_meeting (1).png";
import createTaskImg from "../../assets/New_Task.png";
import schedulePostImg from "../../assets/Schedule_Story.png";
import { Helmet } from "react-helmet-async";

const calendarFeaturesTabs = [
  {
    id: "schedule-meeting",
    tab: "Schedule Meeting",
    title: "Schedule",
    titleHighlight: "Meetings",
    description: "Create a calendar event with a Google Meet link. Attendees will receive an invite and a reminder on the selected date.",
    bullets: ["Auto-generate meeting links instantly.", "Attendees get automated calendar invites."],
    imagePlaceholder: scheduleMeetingImg
  },
  {
    id: "create-task",
    tab: "Create Task",
    title: "Create",
    titleHighlight: "Tasks",
    description: "Create a new task and assign it to team members. Break work into clear actionable items directly from your calendar.",
    bullets: ["Assign priority, ownership, and details in one place.", "Tasks land directly on the assignee's schedule."],
    imagePlaceholder: createTaskImg
  },
  {
    id: "schedule-post",
    tab: "Schedule Post",
    title: "Schedule",
    titleHighlight: "Stories & Posts",
    description: "Plan stories and social posts for the future. You'll get notified exactly when it's time to publish.",
    bullets: ["Set exact dates and times for content drops.", "Never miss an upload with smart push notifications."],
    imagePlaceholder: schedulePostImg
  }
];

export default function CalendarPage() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeTab = calendarFeaturesTabs[activeTabIdx];
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
    <div className="min-h-screen bg-white pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-3.5 py-1.2 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-[11px] font-black uppercase tracking-widest shadow-sm"
              >
                Features <span className="opacity-60 text-purple-400">/</span> Calendar
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.1 }}
                className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06] mb-3"
              >
                Master Your  <br/>Time With A
                <span className="block mt-1">
                  {" "}
                  <span className="text-gradient inline-block">
                    Unified Calendar
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

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                className="mt-6 sm:mt-8 grid grid-cols-2 gap-x-4 gap-y-2.5 max-w-md w-full mx-auto lg:mx-0"
              >
                {[
                  { label: "Google Sync", icon: Calendar },
                  { label: "Smart Scheduling", icon: Clock },
                  { label: "Multi-Timezone", icon: Globe }
                ].map((tag) => (
                  <div key={tag.label} className="group flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-purple-300 hover:bg-purple-50 transition-all duration-300">
                    <div className="w-4.5 h-4.5 rounded-md bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <tag.icon className="w-2.8 h-2.8 text-purple-400 stroke-[3]" />
                    </div>
                    <span className="text-[9.5px] font-black uppercase tracking-[0.1em] text-slate-500 truncate group-hover:text-purple-700">{tag.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Hero Image - Without SVGs */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24 mt-10 lg:mt-0"
            >
              <div className="relative">
                <div className="overflow-hidden border border-slate-200/80 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white group transition-all duration-500 hover:border-purple-300/30">
                  <img
                    src={calenderImg}
                    alt="KaryaUp Calendar Interface"
                    className="w-full h-auto object-contain shadow-sm transition-transform duration-700 group-hover:scale-[1.01]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section (TeamSolutions Style) */}
      <section className="pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.06] tracking-tight mb-4">
              Everything Happens in<br />
              <span className="text-gradient inline-block">
                One Calendar
              </span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg font-medium max-w-2xl mx-auto">
              Select a feature below to see how KaryaUp streamlines your daily workflows.
            </p>
          </motion.div>

          {/* Tab Bar */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 sm:mb-14">
            {calendarFeaturesTabs.map((tab, idx) => {
              const isActive = activeTabIdx === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabIdx(idx)}
                  className={`relative px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${isActive
                      ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/20"
                      : "bg-transparent text-slate-500 border-slate-200 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 border"
                    }`}
                >
                  {tab.tab}
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 lg:p-8 shadow-lg shadow-purple-900/5 border border-slate-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">

                {/* Left Side Content */}
                <div className="relative z-10 lg:pr-6 flex flex-col items-center text-center lg:items-start lg:text-left">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-6">
                    {activeTab.title}
                    <br />
                    <span className="text-gradient italic">
                      {activeTab.titleHighlight}
                    </span>
                  </h3>

                  <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-md font-medium">
                    {activeTab.description}
                  </p>

                  <ul className="space-y-4 mb-4 w-full max-w-md">
                    {activeTab.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-4 text-left text-slate-600 text-base font-bold bg-purple-50/50 p-5 rounded-2xl border border-purple-100/30">
                        <CheckCircle2 size={24} className="text-purple-600 mt-0 flex-shrink-0" />
                        <span className="mt-0.5">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side Image */}
                <div className="relative flex justify-center lg:justify-end w-full">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-purple-200/40 to-fuchsia-200/40 blur-[60px] rounded-full -z-10" />

                  <img
                    src={activeTab.imagePlaceholder}
                    alt={activeTab.tab}
                    className={`h-auto max-h-[450px] lg:max-h-[550px] object-contain rounded-2xl mx-auto lg:ml-auto mix-blend-multiply origin-center lg:origin-right transition-all duration-500 ${
                      activeTab.id === "create-task" 
                        ? "w-[90%] lg:w-[95%] max-w-[320px] lg:max-w-[380px] lg:mr-4" 
                        : "w-[120%] max-w-none sm:w-[130%] lg:w-[145%] lg:-mr-[15%]"
                    }`}
                  />
                  {/* Note: Update the activeTab.imagePlaceholder array fields to point to the actual screenshots you uploaded once they are saved in src/assets/ */}
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* Calendar Feature CTA */}
      <FeatureCTA 
        title={<>Stay Synced With Your <br/> Schedule.</>}
        description="Connect your favorite tools and never miss a deadline. Automatically sync your scheduled tasks, meetings, and content publishing."
        buttonText="Start Scheduling"
        image={calenderImg}
        imageAlt="Calendar Workspace"
        containerClassName="mt-10 sm:mt-16 mb-10 sm:mb-16"
        paddingClassName="p-3 pt-5 sm:p-4 lg:p-8"
        imageClassName="w-full max-w-[760px] mx-auto"
        imageOuterClassName="relative flex w-full max-w-[300px] items-center justify-center mx-auto -translate-x-2 sm:w-[102%] sm:max-w-none sm:translate-x-0 lg:w-[88%] lg:translate-x-3"
      />

     
      </div>
      </>
  );
}
