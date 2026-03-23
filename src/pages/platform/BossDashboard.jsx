import React, { useMemo, useState } from "react";
import SubPageLayout, { CTABanner } from "../../components/SubPageLayout";

export default function BossDashboard() {
  const dashboardImages = {
    hero: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1600&q=80",
    orgTracking: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    teamInsights: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80",
    workload: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    realtimeOps: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    analytics: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1200&q=80",
    riskControl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    executivePulse: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    governance: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
  };

  const capabilitySections = useMemo(
    () => [
      {
        title: "Organization-wide project tracking",
        text: "Track every active initiative across teams from one executive view. See project health, owners, and timelines without waiting for status meetings.",
        image: dashboardImages.orgTracking,
      },
      {
        title: "Team performance insights",
        text: "Monitor team output, completion rates, and delivery consistency in real time. Identify high-performing teams and support areas that need intervention.",
        image: dashboardImages.teamInsights,
      },
      {
        title: "Workload and efficiency metrics",
        text: "Visualize workload distribution and efficiency trends across departments. Prevent overload, rebalance resources, and improve execution quality.",
        image: dashboardImages.workload,
      },
      {
        title: "Real-time operational visibility",
        text: "See blockers, delays, and escalations the moment they happen. Reduce blind spots and act before operational issues impact outcomes.",
        image: dashboardImages.realtimeOps,
      },
      {
        title: "Decision-focused analytics",
        text: "Use leadership-ready analytics designed for action, not reporting noise. Focus on the signals that drive faster and better business decisions.",
        image: dashboardImages.analytics,
      },
    ],
    []
  );

  const [activeCapability, setActiveCapability] = useState(capabilitySections[0].title);
  const selectedSection = capabilitySections.find((item) => item.title === activeCapability) || capabilitySections[0];

  const leadershipSections = [
    {
      title: "Risk and delay control center",
      text: "Get early warnings for delayed projects, missed commitments, and team bottlenecks before they become critical.",
      image: dashboardImages.riskControl,
    },
    {
      title: "Executive performance pulse",
      text: "Track weekly business momentum with one clear pulse of delivery, efficiency, and team execution quality.",
      image: dashboardImages.executivePulse,
    },
    {
      title: "Strategic governance view",
      text: "Align strategic goals with operational execution to ensure leadership decisions are reflected in day-to-day work.",
      image: dashboardImages.governance,
    },
  ];
  const dashboardDeepDive = [
    {
      title: "Executive dashboard snapshots",
      text: "Get an instant summary of project health, delayed deliverables, and priority escalations from one leadership view.",
      image: dashboardImages.orgTracking,
    },
    {
      title: "Decision queue with context",
      text: "See pending decisions with performance impact, owning teams, and urgency level so approvals happen faster.",
      image: dashboardImages.analytics,
    },
  ];

  return (
    <SubPageLayout
     
      
    >
      <section className="relative left-1/2 right-1/2 mb-12 w-screen -translate-x-1/2  overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
        <div className="mb-6 grid gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2 sm:p-5">
          <div className="space-y-4">
            <p className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-pink-700">
              See your entire company in one view
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">All in one place.</h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              The Boss Dashboard is built for decision-makers. It provides real-time visibility into projects, teams,
              performance, and operations without relying on reports or manual updates.
            </p>
            <p className="text-sm font-medium text-slate-700">Know what&apos;s happening. Know what&apos;s delayed. Know what needs attention.</p>
            <span className="inline-flex rounded-xl bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Make decisions 2x faster with complete visibility
            </span>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <img
              src={dashboardImages.hero}
              alt="KaryaUp boss dashboard overview"
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
          className="grid gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2 sm:p-5"
          style={{ animation: "fadeInUp 350ms ease both" }}
        >
          <div className="space-y-3">
            <p className="text-sm font-bold text-slate-900 sm:text-base">{selectedSection.title}</p>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{selectedSection.text}</p>
            <button
              type="button"
              className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105"
            >
              Explore executive insights
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
      </section>

      <section className="mb-12">
        <div className="grid gap-5 md:grid-cols-3">
          {leadershipSections.map((item, index) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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

      <section className="mb-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-pink-600">Boss Dashboard Deep Dive</p>
            <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">Leadership decisions with complete context</h3>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              This section brings decision-focused analytics and operational updates together so leadership can act faster with confidence.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {dashboardDeepDive.map((item, index) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ animation: `fadeInUp 650ms ease ${index * 100}ms both` }}
              >
                <div className="p-4">
                  <h4 className="mb-2 text-lg font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
                <div className="h-44 overflow-hidden border-t border-slate-200 bg-white">
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
        </div>
      </section>

      <CTABanner
        bg="bg-white border border-slate-200 shadow-sm"
        titleColor="text-slate-900"
        btnColor="bg-gradient-to-r from-pink-500 to-purple-600"
        title="Lead with full company visibility."
        desc="Turn complex operations into clear decisions with one executive dashboard."
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
