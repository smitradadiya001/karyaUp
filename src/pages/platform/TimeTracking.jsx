import React, { useMemo, useState } from "react";
import SubPageLayout, { CTABanner } from "../../components/SubPageLayout";

export default function TimeTracking() {
  const timeImages = {
    hero: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1400&q=80",
    taskLevel: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    autoLogs: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    productivity: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    workload: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    forecast: "https://images.unsplash.com/photo-1551281044-8b62f4463c1c?auto=format&fit=crop&w=1200&q=80",
    section1: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1200&q=80",
    section2: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
    section3: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
  };

  const capabilitySections = useMemo(
    () => [
      {
        title: "Task-level time tracking",
        text: "Track hours directly on every task and subtask. KaryaUp captures execution time where the work actually happens, so teams get clean and reliable data.",
        image: timeImages.taskLevel,
      },
      {
        title: "Automatic time logs",
        text: "No manual entry required. Start/stop tracking from workflows, and KaryaUp automatically logs time entries by project, task owner, and timeline.",
        image: timeImages.autoLogs,
      },
      {
        title: "Productivity reports",
        text: "Get clear reports on where effort is spent, what teams complete fastest, and where bottlenecks reduce delivery speed.",
        image: timeImages.productivity,
      },
      {
        title: "Workload analysis",
        text: "See workload distribution across people and teams. Detect over-utilization early and rebalance work before burnout or delays happen.",
        image: timeImages.workload,
      },
      {
        title: "Timeline forecasting",
        text: "Use historical time trends to predict delivery timelines more accurately. Plan deadlines with confidence and reduce last-minute surprises.",
        image: timeImages.forecast,
      },
    ],
    []
  );
  const [activeCapability, setActiveCapability] = useState(capabilitySections[0].title);
  const selectedSection = capabilitySections.find((item) => item.title === activeCapability) || capabilitySections[0];
  const extraTrackingSections = [
    {
      title: "Daily execution clarity",
      text: "Get a single view of planned vs tracked hours and fix daily execution drift early.",
      image: timeImages.section1,
    },
    {
      title: "Team capacity balancing",
      text: "Understand available capacity and reassign work before timelines are impacted.",
      image: timeImages.section2,
    },
    {
      title: "Faster planning cycles",
      text: "Use tracked-hour trends to estimate future sprints with better accuracy.",
      image: timeImages.section3,
    },
  ];

  return (
    <SubPageLayout
      
      
    >
      <section className="relative left-1/2 right-1/2 mb-12 w-screen -translate-x-1/2 overflow-hidden bg-white py-10 font-sans sm:py-16">
        <div className="absolute -top-24 left-8 h-64 w-64 rounded-full bg-pink-200/40 blur-3xl" />
       
          
        <div className="absolute -bottom-24 right-8 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />

        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="mb-9 grid gap-5 rounded-2xl border border-white/30 bg-white p-4 shadow-xl backdrop-blur-md sm:grid-cols-2 sm:p-6">
            <div className="space-y-2 text-left">
              <p className="inline-flex rounded-full border border-pink/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                Time Tracking
              </p>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Turn time into measurable performance
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-black-50 sm:text-base">
                No manual tracking. No guesswork. KaryaUp shows exactly where time is spent, so teams can optimize
                workflows and plan with confidence.
              </p>
              <span className="inline-flex rounded-xl bg-black/20 px-4 py-2 text-sm font-semibold text-white">
                Improve planning accuracy by up to 40%
              </span>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/25 bg-white/10">
              <img
                src={timeImages.hero}
                alt="KaryaUp time tracking overview"
                className="h-full min-h-[220px] w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          <p className="mb-3 text-sm font-semibold text-slate-800">Key capabilities</p>
          <div className="mb-5 grid gap-3 sm:grid-cols-2">
            {capabilitySections.map((item, index) => (
              <button
                type="button"
                key={item.title}
                onClick={() => setActiveCapability(item.title)}
                className={`rounded-xl border px-3 py-3 text-left text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  activeCapability === item.title
                    ? "border-transparent bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-pink-300"
                }`}
                style={{ animation: `fadeInUp 600ms ease ${index * 90}ms both` }}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={`${item.title} preview`}
                    className="h-10 w-14 rounded-md border border-white/40 object-cover"
                    loading="lazy"
                  />
                  <span>{item.title}</span>
                </div>
              </button>
            ))}
          </div>

          <div
            key={selectedSection.title}
            className="grid gap-5 rounded-2xl border border-white/40 bg-white/60 p-4 shadow-lg backdrop-blur-md sm:grid-cols-2 sm:p-5"
            style={{ animation: "fadeInUp 350ms ease both" }}
          >
            <div className="space-y-3">
              <p className="text-sm font-bold text-slate-900 sm:text-base">{selectedSection.title}</p>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{selectedSection.text}</p>
              <button
                type="button"
                className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105"
              >
                Track time with precision
              </button>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <img
                src={selectedSection.image}
                alt={`KaryaUp ${selectedSection.title}`}
                className="h-full min-h-[220px] w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 mb-12 w-screen -translate-x-1/2 bg-white py-2 font-sans">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:px-8 md:grid-cols-3 lg:px-12">
          {extraTrackingSections.map((item, index) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-white/40 bg-white/60 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ animation: `fadeInUp 650ms ease ${index * 90}ms both` }}
            >
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
              <div className="h-40 overflow-hidden border-t border-slate-200 bg-slate-50">
                <img
                  src={item.image}
                  alt={`KaryaUp ${item.title}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner
        bg="bg-white border border-slate-200 shadow-sm"
        titleColor="text-slate-900"
        btnColor="bg-gradient-to-r from-pink-500 to-purple-600"
        title="Never lose track of productive hours."
        desc="Bring accountability, forecasting, and performance visibility into one time tracking workflow."
      />
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </SubPageLayout>
  );
}
