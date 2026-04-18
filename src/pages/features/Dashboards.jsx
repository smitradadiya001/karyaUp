import React, { useRef, useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { Check, Sparkles, Activity, Zap, BarChart3, PieChart, TrendingUp, LayoutDashboard, Share2, MousePointer2, Crown, Rocket, Target, BarChart4 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactLenis } from "lenis/react";
import FeatureStack from "../../components/FeatureStack";

// Assets
import dashboardImg2 from "../../assets/dashboard2.webp";
import featureProjects from '../../assets/projects.webp';
import featureWork from '../../assets/work_analysis.webp';
import featureChart from '../../assets/chart.webp';
import FeatureCTA from "../../components/FeatureCTA";
import GrowthGraph from "../../components/GrowthGraph";

gsap.registerPlugin(ScrollTrigger);

export default function Dashboards() {
  const container = useRef(null);
  const sectionRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const dashboardSections = [
    {
      header: "Boss Dashboard",
      title: "Leadership Insights",
      desc: [
        "Gain high-level visibility into core metrics.",
        "Monitor profitability, team allocation, and health."
      ],
      image: dashboardImg2,
      tag: "Executive View",
    },
    {
      header: "PM Dashboard",
      title: "Project Orchestration",
      desc: [
        "Manage complexity with ease and clarity.",
        "Track sprint velocity and resource distribution."
      ],
      image: featureProjects,
      tag: "Portfolio Tracking",
    },
    {
      header: "Employee Dashboard",
      title: "Personal Performance",
      desc: [
        "Optimize your daily flow and focus.",
        "Visualize personal goals and task efficiency."
      ],
      image: featureWork,
      tag: "Productivity Engine",
    },
    {
      header: "Sales Dashboard",
      title: "Growth Momentum",
      desc: [
        "Accelerate your pipeline and revenue pulse.",
        "Monitor conversion rates and sales velocity."
      ],
      image: featureChart,
      tag: "Revenue Pulse",
    }
  ];

  useGSAP(() => {
    const sections = sectionRefs.current;
    const totalSections = sections.length;

    if (!sections[0]) return;

    // Set initial states
    gsap.set(sections[0], { y: "0%", scale: 1, rotation: 0, opacity: 1 });
    for (let i = 1; i < totalSections; i++) {
      if (!sections[i]) continue;
      gsap.set(sections[i], { y: "100%", scale: 1, rotation: 0, opacity: 1 });
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
          scale: 0.92,
          opacity: 0,
          y: "-20%",
          duration: 1.5,
          ease: "power2.inOut",
        },
        position
      );

      scrollTimeline.to(
        nextSection,
        {
          y: "0%",
          duration: 1.5,
          ease: "power2.inOut",
        },
        position
      );
    }

    return () => {
      scrollTimeline.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, { scope: container });

  return (
    <ReactLenis root>
      <Helmet>
        {/* Title (Chrome Tab) */}
        <title>Smart Business Dashboards | Karyaup </title>

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
      <div className="min-h-screen bg-white pt-24 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
        {/* Hero Section */}
        <section className="relative pt-4 sm:pt-6 lg:pt-4 pb-2 sm:pb-4 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start lg:self-start lg:pt-2">
                <Motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50/80 backdrop-blur-sm border border-purple-100 text-purple-600 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em]  mb-2"
                >
                  DASHBOARDS — VISUALIZE YOUR DATA
                </Motion.div>

                <Motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                  className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
                >
                  Custom Metrics
                  <span className="block">
                    For Every{" "}
                    <Motion.span
                      className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                      animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      Decision
                    </Motion.span>
                  </span>
                </Motion.h1>

                <Motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                  className="mt-5 sm:mt-6 w-full max-w-lg mx-auto lg:mx-0 flex flex-col items-center lg:items-start"
                >
                  <div className="space-y-3 sm:space-y-4 w-fit">
                    {[
                      "Real-time signals for every decision.",
                      "Create dashboards focused on real impact"
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
                  </div>
                </Motion.div>

                <FeatureStack items={[
                  { label: "Custom widgets", icon: LayoutDashboard },
                  { label: "Live data", icon: Activity },
                  { label: "Shareable", icon: Share2 }
                ]} />
              </div>

              {/* Right Hero Image */}
              <Motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24"
              >
                <div className="relative overflow-hidden border border-slate-200/80 rounded-2xl sm:rounded-3xl  bg-white">
                  <img
                    src={dashboardImg2}
                    alt="KaryaUp Dashboard"
                    className="w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[460px] xl:h-[500px] object-cover object-left"
                  />
                </div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* Role-Based Dashboards Section */}
        <section ref={container} className="bg-white pt-2 lg:pt-4 pb-8 sm:pb-12 lg:pb-5 overflow-hidden">
          <div className="sticky-sections-container relative h-auto max-w-6xl mx-auto rounded-xl sm:rounded-3xl overflow-hidden border border-slate-200/60 mb-8 sm:mb-24">
            {dashboardSections.map((item, i) => (
              <div
                key={i}
                ref={(el) => (sectionRefs.current[i] = el)}
                className={`${i === 0 ? "relative" : "absolute inset-0"} w-full bg-white flex flex-col lg:flex-row items-center border-b border-black/5 min-h-[740px] sm:min-h-0`}
              >
                {/* Content Side */}
                <div className="flex-[0.48] lg:flex-1 flex flex-col justify-end lg:justify-center items-center lg:items-start text-center lg:text-left p-4 pb-2 sm:p-8 lg:p-12 w-full">
                  <Motion.div
                    initial={{ opacity: 0, y: isMobile ? 0 : -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col items-center lg:items-start mb-5 sm:mb-7 lg:mb-8"
                  >
                    
                    <h2 className="mt-4 sm:mt-5 text-2xl sm:text-[2.5rem] lg:text-[3rem] font-black text-slate-900 tracking-normal leading-[1.05]">
                      Multiple Dashboard <br />
                      <Motion.span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                        animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >
                        Based On Roles
                      </Motion.span>
                    </h2>
                  </Motion.div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2 sm:mb-4">
                    <div className="w-1.5 h-4 sm:h-6 bg-[#7e22ce] rounded-full" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7e22ce]">
                      {item.header}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-2 sm:mb-6">
                    {item.title}
                  </h3>
                  <div className="space-y-3 sm:space-y-4 max-w-lg mb-4 sm:mb-8">
                    {item.desc.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-left">
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
                <div className="flex-[0.52] lg:flex-1 p-4 pt-2 sm:p-6 lg:p-10 bg-slate-50/40 flex items-start lg:items-center justify-center w-full overflow-hidden">
                  <div className="w-full h-full flex items-start lg:items-center justify-center relative">
                    {/* Decorative background element */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/50 to-transparent blur-3xl rounded-full" />

                    {item.header === "Sales Dashboard" ? (
                      <div className="relative w-full h-full bg-white rounded-2xl  flex items-center justify-center p-6 sm:p-10 lg:p-16">
                        <GrowthGraph className="w-full" />
                      </div>
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="relative max-h-full w-full object-contain rounded-2xl ring-1 ring-black/5"
                      />
                    )}
                  </div>
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
          containerClassName="mt-10 sm:mt-0"
          shellClassName="shadow-none"
          titleClassName="text-xl sm:text-2xl lg:text-[1.75rem] font-black text-white leading-[1.1] mb-2 tracking-tight"
        />
      </div>
    </ReactLenis>
  );
}
