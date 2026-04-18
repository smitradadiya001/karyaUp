import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Sparkles,
  Activity,
  BarChart3,
  Clock,
  Target,
  Calendar,
  Share2,
  LayoutDashboard,
  TrendingUp,
  Zap,
  Filter,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactLenis } from "lenis/react";
import { cn } from "../../lib/utils";
import FeatureStack from "../../components/FeatureStack";

import ganttImg from "../../assets/Gantt.webp";
import taskImg from "../../assets/Task.webp";
import gantt1Img from "../../assets/Gantt1.webp";
import gantt2Img from "../../assets/Gantt2.webp";
import gantt3Img from "../../assets/Gantt3.webp";
import gantt4Img from "../../assets/Gantt4.webp";
import FeatureCTA from "../../components/FeatureCTA";
import { Helmet } from "react-helmet-async";

gsap.registerPlugin(ScrollTrigger);

export default function Gantt() {
  const container = useRef(null);
  const sectionRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const ganttSections = [
    {
      header: "Add Tasks",
      title: "Set Up Your Task On Gantt",
      desc: [
        "Turn entire projects into timelines in one click.",
        "Grasp your project workflow and dependencies.",
      ],
      image: gantt1Img,
      tag: "Instant Board",
    },
    {
      header: "Smart Filters",
      title: "Filter By Priority",
      desc: [
        "Instantly organize to highlight critical work.",
        "Quickly restructure views by priority or status.",
      ],
      image: gantt2Img,
      tag: "Filter & Sort",
    },
    {
      header: "Export & Share",
      title: "Download Gantt Details to File",
      desc: [
        "Download full gantt details to local file formats.",
        "Easily share progress with external stakeholders.",
      ],
      image: gantt3Img,
      tag: "Export to File",
    },
    {
      header: "Live Adjustments",
      title: "Change Dates & Priorities Instantly",
      desc: [
        "Drag and drop tasks to change dates in real time.",
        "Adjust assignees and priority without leaving.",
      ],
      image: gantt4Img,
      tag: "Dynamic Editing",
    },
  ];

  useGSAP(
    () => {
      const sections = sectionRefs.current;
      const totalSections = sections.length;

      if (!sections[0]) return;

      // Set initial states
      gsap.set(sections[0], { y: "0%", scale: 1, opacity: 1 });
      for (let i = 1; i < totalSections; i++) {
        if (!sections[i]) continue;
        gsap.set(sections[i], { y: "100%", scale: 1, opacity: 1 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-sections-container",
          start: "center center",
          end: `+=${window.innerHeight * (totalSections - 1) * 1.5}`,
          pin: true,
          scrub: 1,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < totalSections - 1; i++) {
        const currentSection = sections[i];
        const nextSection = sections[i + 1];

        if (!currentSection || !nextSection) continue;

        const position = i * 1.5;

        scrollTimeline.to(
          currentSection,
          {
            scale: 0.9,
            opacity: 0,
            y: "-20%",
            duration: 1.5,
            ease: "power2.inOut",
          },
          position,
        );

        scrollTimeline.to(
          nextSection,
          {
            y: "0%",
            duration: 1.5,
            ease: "power2.inOut",
          },
          position,
        );
      }

      return () => {
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: container },
  );

  return (
    <ReactLenis root>
      <Helmet>
        {/* Title (Chrome Tab) */}
        <title>Gantt Chart | KaryaUp</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Plan and manage projects visually with Karyaup Gantt charts. Track timelines, dependencies, milestones, and progress in real-time for better project execution."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="gantt chart software, project timeline tool, task dependencies, project planning tool, timeline management, Karyaup"
        />

        {/* Author */}
        <meta name="author" content="Karyaup" />

        {/* Open Graph (Essential Only) */}
        <meta
          property="og:title"
          content="Gantt Chart & Project Timeline | Karyaup"
        />
        <meta
          property="og:description"
          content="Visualize project timelines, track dependencies, and manage milestones with ease."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/gantt" />
        <meta property="og:site_name" content="Karyaup" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://karyaup.com/features/gantt" />
      </Helmet>

      <div className="min-h-screen bg-white pt-24 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
        {/* Hero Section */}
        <section className="relative pt-2 sm:pt-3 lg:pt-2 pb-0 sm:pb-2 lg:pb-8 overflow-visible">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start lg:self-start lg:pt-2">
                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm mb-2"
                >
                  GANTT — MAP YOUR MILESTONES
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.08,
                  }}
                  className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
                >
                  The Ultimate Visibility
                  <span className="block">
                    {" "}
                    <motion.span
                      className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                      animate={{
                        backgroundPosition: ["0% center", "-200% center"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      With Gantt
                    </motion.span>
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.18,
                  }}
                  className="mt-5 sm:mt-6 w-full max-w-lg mx-auto lg:mx-0 flex flex-col items-center lg:items-start"
                >
                  <div className="space-y-3 sm:space-y-4 w-fit">
                    <div className="flex items-start gap-3 text-left">
                      <div className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#7e22ce] stroke-[4]" />
                      </div>
                      <p className="text-sm sm:text-lg text-slate-600 font-medium leading-relaxed">
                        Timelines that tell the truth.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 text-left">
                      <div className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#7e22ce] stroke-[4]" />
                      </div>
                      <p className="text-sm sm:text-lg text-slate-600 font-medium leading-relaxed">
                        Map dependencies, adjust milestones in real time
                      </p>
                    </div>
                  </div>
                </motion.div>

                <FeatureStack
                  items={[
                    { label: "Dependencies", icon: Activity },
                    { label: "Milestones", icon: Target },
                    { label: "Critical path", icon: TrendingUp },
                    { label: "Gantt", icon: Calendar },
                  ]}
                />
              </div>

              {/* Right Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.18,
                }}
                className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24"
              >
                <div className="relative overflow-hidden w-full h-full">
                  <img
                    src={ganttImg}
                    alt="KaryaUp Gantt Chart"
                    className="w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[460px] xl:h-[500px] object-cover object-left"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sticky Sections Container */}
        <section
          ref={container}
          className="bg-white pt-3 lg:pt-4 pb-10 sm:pb-15 lg:pb-18 overflow-hidden"
        >
          <div className="sticky-sections-container relative h-auto max-w-6xl mx-auto rounded-xl sm:rounded-3xl overflow-hidden border border-slate-200/60 ">
            {ganttSections.map((item, i) => (
              <div
                key={i}
                ref={(el) => (sectionRefs.current[i] = el)}
                className={`${i === 0 ? "relative" : "absolute inset-0"} w-full bg-white flex flex-col items-center border-b border-black/5 min-h-[480px] sm:min-h-0`}
              >
                {/* Integrated Header at Top of Each Card */}
                <div className="w-full text-center pt-4 sm:pt-6 pb-2 sm:pb-4">
                  <h2 className="text-2xl sm:text-[2.25rem] lg:text-[2.75rem] font-black text-slate-900 tracking-normal leading-[1.1]">
                    <motion.span
                      className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                      animate={{
                        backgroundPosition: ["0% center", "-200% center"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      How Gantt Work
                    </motion.span>
                  </h2>
                </div>

                {/* Main Card Content */}
                <div className="w-full flex flex-col lg:flex-row items-center flex-1">
                  {/* Content Side */}
                  <div className="flex-[0.48] lg:flex-1 flex flex-col justify-end lg:justify-center items-center lg:items-start text-center lg:text-left p-4 pb-2 sm:p-8 lg:p-12 w-full">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-2 sm:mb-4">
                      <div className="w-1.5 h-4 sm:h-6 bg-[#7e22ce] rounded-full" />
                      <span className="text-[10px] sm:text-sm font-black uppercase tracking-[0.2em] text-[#7e22ce]">
                        {item.header}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-2 sm:mb-6">
                      {item.title}
                    </h3>
                    <div className="space-y-3 sm:space-y-4 max-w-lg mb-4 sm:mb-8">
                      {item.desc.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-left"
                        >
                          <div className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                            <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#7e22ce] stroke-[4]" />
                          </div>
                          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="inline-flex px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-[10px] sm:text-[11px] font-black text-purple-700 uppercase tracking-widest mb-2 lg:mb-0">
                      {item.tag}
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="flex-[0.52] lg:flex-1 p-4 pt-2 sm:p-6 lg:p-10 flex items-start lg:items-center justify-center w-full overflow-hidden">
                    <div className="w-full h-full flex items-start lg:items-center justify-center relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={cn(
                          "relative object-contain",
                          i === ganttSections.length - 1
                            ? "max-h-[60%] w-[60%]"
                            : "max-h-full w-full",
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <FeatureCTA
          title={
            <>
              Timelines That Connect To <br /> Everything You Do
            </>
          }
          description="Work smarter with visual timelines that can live in your whiteboards, chat, calendar—anywhere you work."
          image={ganttImg}
          imageAlt="KaryaUp Gantt Timeline"
          containerClassName="mt-0"
        />
      </div>
    </ReactLenis>
  );
}
