import React from "react";
import { motion } from "framer-motion";
import { Check, PlayCircle, Sparkles, MonitorPlay, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import FeatureCTA from "../../components/FeatureCTA";
import demoPreview from "../../assets/dashboard2.webp";
import { Helmet } from "react-helmet-async";

export default function WatchDemo() {
  return (
    <>
      <Helmet>
        <title>Watch Demo | Karyaup Product Walkthrough</title>

        <meta
          name="description"
          content="Watch the Karyaup demo to explore features like task management, dashboards, chat, and automation. See how Karyaup helps teams work smarter."
        />

        <meta
          name="keywords"
          content="product demo, SaaS demo, project management demo, Karyaup demo, workflow software demo, team collaboration demo"
        />

        <meta name="author" content="Karyaup" />

        <meta
          property="og:title"
          content="Watch Demo | Karyaup Product Walkthrough"
        />
        <meta
          property="og:description"
          content="See how Karyaup works with a full product demo and feature walkthrough."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://karyaup.com/watch-demo"
        />
        <meta property="og:site_name" content="Karyaup" />

        <link
          rel="canonical"
          href="https://karyaup.com/watch-demo"
        />
      </Helmet>
      <div className="min-h-screen bg-white pt-24 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
        <section className="relative overflow-hidden pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12">
          <div className="absolute top-0 left-1/3 -z-10 h-[520px] w-[520px] rounded-full bg-purple-100/70 blur-[130px]" />
          <div className="absolute bottom-0 right-0 -z-10 h-[360px] w-[360px] rounded-full bg-fuchsia-100/60 blur-[110px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14 items-center">
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest shadow-sm"
                >
                  WATCH DEMO -SEE KARYAUP IN ACTION
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                  className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black tracking-normal text-slate-900 leading-[1.05]"
                >
                  See how KaryaUp
                  <span className="block">
                    <motion.span
                      className="bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] bg-clip-text text-transparent"
                      animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      runs real work
                    </motion.span>
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                  className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 max-w-lg w-full"
                >
                  {[
                    "Get a quick walkthrough of tasks, chat, dashboards, attendance, and automations in one connected workspace.",
                    "Perfect if you want to understand the product flow before booking a full demo."
                  ].map((text) => (
                    <div key={text} className="flex items-start gap-3 text-left">
                      <div className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#7e22ce] stroke-[4]" />
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                        {text}
                      </p>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                  className="mt-6 sm:mt-8 grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-xs sm:max-w-md"
                >
                  {[
                    { label: "5 min walkthrough", icon: Clock },
                    { label: "Live product flow", icon: MonitorPlay },
                    { label: "Real use cases", icon: Sparkles },
                    { label: "Watch instantly", icon: PlayCircle },
                  ].map((tag) => (
                    <div
                      key={tag.label}
                      className="group flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-slate-50/50 border border-slate-200/60 shadow-sm hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300"
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-emerald-100 border border-emerald-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <tag.icon className="w-2.5 h-2.5 text-emerald-600 stroke-[3]" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.1em] text-slate-600 truncate">
                        {tag.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0"
              >
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#120915] p-3 sm:p-4 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.55)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.35),transparent_35%),radial-gradient(circle_at_0%_100%,rgba(236,72,153,0.12),transparent_35%)]" />
                  <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/30">
                    <img
                      src={demoPreview}
                      alt="Watch KaryaUp demo preview"
                      className="w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px] object-cover object-top"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Link
                        to="/book-demo"
                        className="group flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-[#7e22ce] shadow-2xl transition-all hover:scale-105"
                      >
                        <PlayCircle className="h-10 w-10 fill-current" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="pt-4 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50/70 p-5 sm:p-8 lg:p-10">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-purple-700">
                  Demo Flow
                </div>
                <h2 className="mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.05] tracking-normal">
                  What you’ll
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce]">
                    see in action
                  </span>
                </h2>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  "How teams create, assign, and track work from a single workspace",
                  "How communication, approvals, and notifications stay connected to execution",
                  "How leaders use dashboards, attendance, salary, and automations together",
                ].map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-[#7e22ce]">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-700">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FeatureCTA
          title={<>Ready to see KaryaUp <br /> with your workflow?</>}
          description="Watch the product in action, then book a personalized walkthrough whenever you want to go deeper."
          buttonText="Book full demo"
          image={demoPreview}
          imageAlt="KaryaUp demo walkthrough"
          containerClassName="mt-0"
          imageClassName="w-full max-w-[760px]"
          imageOuterClassName="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-none lg:w-[86%] mx-auto lg:mx-0"
        />
      </div>
    </>
  );
}
