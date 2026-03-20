import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Activity, BarChart3, Clock, Target, Calendar, Share2, LayoutDashboard, TrendingUp, Zap, Filter } from "lucide-react";
import ganttImg from "../../assets/Gantt.png";
import taskImg from "../../assets/Task2.png";
import gantt1Img from "../../assets/Gantt1.png";
import gantt2Img from "../../assets/Gantt2.png";
import gantt3Img from "../../assets/Gantt3.png";
import gantt4Img from "../../assets/Gantt4.png";
import FeatureCTA from "../../components/FeatureCTA";

export default function Gantt() {
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
                Features / Gantt
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]"
              >
                The ultimate{" "}
                <span className="block">
                  visibility with{" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Gantt
                  </motion.span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="mt-6 space-y-4 max-w-2xl mx-auto lg:mx-0"
              >
                <div className="flex items-start gap-3.5 text-left">
                  <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#7e22ce] stroke-[4]" />
                  </div>
                  <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                    Timelines that tell the truth. Map dependencies, adjust milestones in real time, and finally answer the question everyone's afraid to ask: are we on track?
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 max-w-md mx-auto lg:mx-0"
              >
                {[
                  { label: "Dependencies", icon: Activity },
                  { label: "Milestones", icon: Target },
                  { label: "Critical path", icon: TrendingUp },
                  { label: "Gantt", icon: Calendar }
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
                  src={ganttImg}
                  alt="KaryaUp Gantt Chart"
                  className="w-full h-[360px] sm:h-[420px] lg:h-[500px] object-cover object-left"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-44 lg:w-56 bg-gradient-to-r from-transparent via-white/70 to-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* "How They Work" Section */}
      <section className="bg-white mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#7e22ce]" />
              <span className="opacity-60">/</span>
              <span>Universal Planning Control</span>
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
              Powerful timeline for <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                how they work
              </motion.span>
            </h2>
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto">
          {[
            {
              header: "Add Tasks",
              title: "Set up your Task Automatically on Gantt",
              desc: "In one click, turn entire projects into timelines. It's a great way to grasp your project workflow and dependencies.",
              image: gantt1Img,
              tag: "Instant Board",
              align: "right"
            },
            {
              header: "Smart Filters",
              title: "Filter by Priority",
              desc: "Instantly organize your Gantt chart to highlight critical work. Quickly restructure your timeline visually using filters like Priority to keep focus exactly where it's needed.",
              image: gantt2Img,
              tag: "Filter & Sort",
              align: "left"
            },
            {
              header: "Export & Share",
              title: "Download Gantt Details to File",
              desc: "Quickly export your entire Gantt chart and task details to a file format of your choice. A fast, easy way to share progress updates with external stakeholders.",
              image: gantt3Img,
              tag: "Export to File",
              align: "right"
            },
            {
              header: "Live Adjustments",
              title: "Change Dates & Priorities Instantly",
              desc: "Drag and drop tasks to change start/due dates in real time. Quickly adjust priority levels, assignees, and dependencies without navigating away from the timeline.",
              image: gantt4Img,
              tag: "Dynamic Editing",
              align: "left"
            }
          ].map((item, i) => {
            const isReverse = item.align === "left";
            return (
              <div key={i} className={`grid lg:grid-cols-2 divide-x-0 lg:divide-x lg:divide-black/10 border-t border-black/10 first:border-t-0`}>
                {/* Visual Order Helper - Use DOM Order for Dividers */}
                {isReverse ? (
                  <>
                    {/* Image Side (Left) */}
                    <div className="p-4 sm:p-6 lg:p-8 bg-slate-50/40 flex items-center justify-center overflow-hidden h-[250px] sm:h-[350px] lg:h-[450px]">
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
                          className="w-full h-full object-contain rounded-xl shadow-2xl shadow-slate-900/10 grayscale-[15%] hover:grayscale-0 transition-all duration-700 ease-out"
                        />
                      </motion.div>
                    </div>

                    {/* Content Side (Right) */}
                    <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14 bg-white">
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
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
                        <div className="inline-flex px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[10px] font-black text-purple-700 uppercase tracking-widest">
                          {item.tag}
                        </div>
                      </motion.div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Content Side (Left) */}
                    <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14 bg-white">
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
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
                        <div className="inline-flex px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[10px] font-black text-purple-700 uppercase tracking-widest">
                          {item.tag}
                        </div>
                      </motion.div>
                    </div>

                    {/* Image Side (Right) */}
                    <div className="p-4 sm:p-6 lg:p-8 bg-slate-50/40 flex items-center justify-center overflow-hidden h-[250px] sm:h-[350px] lg:h-[450px]">
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
                          className="w-full h-full object-contain rounded-xl shadow-2xl shadow-slate-900/10 grayscale-[15%] hover:grayscale-0 transition-all duration-700 ease-out"
                        />
                      </motion.div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <FeatureCTA 
        title={<>Timelines that connect to <br /> everything you do</>}
        description="Work smarter with visual timelines that can live in your whiteboards, chat, calendar—anywhere you work."
        image={ganttImg}
        imageAlt="KaryaUp Gantt Timeline"
      />
    </div>
  );
}
