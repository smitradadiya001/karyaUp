import React, { useMemo, useState } from "react";
import SubPageLayout, { CTABanner } from "../../components/SubPageLayout";

export default function ProfitTracking() {
  const profitImages = {
    hero: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    projectCost: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    revenueDeal: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    profitability: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1200&q=80",
    timeRevenue: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
    visibility: "https://images.unsplash.com/photo-1551281044-8b62f4463c1c?auto=format&fit=crop&w=1200&q=80",
    marginControl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    portfolioHealth: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1200&q=80",
    growthPlanning: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
  };

  const capabilitySections = useMemo(
    () => [
      {
        title: "Project-level cost tracking",
        text: "Track labor, resources, and operational spend at project level in real time. Understand exactly where costs increase and where margins are protected.",
        image: profitImages.projectCost,
      },
      {
        title: "Revenue and deal mapping",
        text: "Map project execution to signed deals, client revenue, and billing milestones. Link delivery activity directly with commercial outcomes.",
        image: profitImages.revenueDeal,
      },
      {
        title: "Profitability insights",
        text: "Get instant profitability breakdowns by project, client, or team. Surface low-margin work early and adjust strategy before revenue leaks.",
        image: profitImages.profitability,
      },
      {
        title: "Time-to-revenue analysis",
        text: "Measure how quickly work turns into realized revenue. Reduce delays in delivery-to-invoice cycles and improve cash flow predictability.",
        image: profitImages.timeRevenue,
      },
      {
        title: "Financial performance visibility",
        text: "See financial performance across your full project portfolio from one dashboard. Leadership can make faster decisions using real execution data.",
        image: profitImages.visibility,
      },
    ],
    []
  );

  const [activeCapability, setActiveCapability] = useState(capabilitySections[0].title);
  const selectedSection = capabilitySections.find((item) => item.title === activeCapability) || capabilitySections[0];

  const profitHighlights = [
    {
      title: "Margin control dashboard",
      text: "Protect margins with live variance tracking between estimated and actual project costs.",
      image: profitImages.marginControl,
    },
    {
      title: "Portfolio profitability health",
      text: "See profitable vs at-risk projects in one view and prioritize action where impact is highest.",
      image: profitImages.portfolioHealth,
    },
    {
      title: "Growth-focused planning",
      text: "Use historical profit trends to plan stronger pricing, delivery models, and growth strategy.",
      image: profitImages.growthPlanning,
    },
  ];
  const financialCommandSection = [
    {
      title: "Client profitability view",
      text: "Compare profit contribution across clients and identify which accounts drive the healthiest margins.",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Invoice-to-delivery alignment",
      text: "Connect invoicing milestones with delivery progress to improve billing speed and reduce revenue delays.",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Forecast-driven decision desk",
      text: "Use forecasted margin and cost trends to make faster pricing, staffing, and growth decisions.",
      image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <SubPageLayout
      
    >
      <section className="relative left-1/2 right-1/2 mb-12 w-screen -translate-x-1/2 overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
        <div className="mb-6 grid gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2 sm:p-5">
          <div className="space-y-4">
            <p className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-pink-700">
              Understand what drives real growth
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Work becomes measurable in business terms.
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              KaryaUp connects execution with financial outcomes. Track costs, time, and revenue across projects in
              real time with no spreadsheets and no manual calculations.
            </p>
            <span className="inline-flex rounded-xl bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Increase profit visibility across 100% of projects
            </span>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <img
              src={profitImages.hero}
              alt="KaryaUp profit dashboard overview"
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
              Track profit with clarity
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
          {profitHighlights.map((item, index) => (
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
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-600">Financial Command Center</p>
          <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">Make growth decisions with real profit signals</h3>
          <p className="mt-2 max-w-3xl text-sm text-slate-600 sm:text-base">
            Go beyond tracking and turn financial visibility into daily action with client, invoice, and forecast-led intelligence.
          </p>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {financialCommandSection.map((item, index) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ animation: `fadeInUp 650ms ease ${index * 100}ms both` }}
              >
                <div className="p-4">
                  <h4 className="mb-2 text-lg font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
                <div className="h-40 overflow-hidden border-t border-slate-200 bg-white">
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
        title="Know your numbers. Grow with confidence."
        desc="Turn delivery data into financial intelligence with one connected profit tracking workflow."
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
