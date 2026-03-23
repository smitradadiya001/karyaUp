import React, { useMemo, useState } from "react";
import SubPageLayout, { CTABanner } from "../../components/SubPageLayout";

export default function ProjectManagement() {
  const capabilitySections = useMemo(
    () => [
      {
        title: "Tasks, subtasks, and dependencies",
        text: "Break large projects into clear, manageable work. KaryaUp links every subtask and dependency so teams know what must happen first and what can move in parallel.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Priorities, deadlines, and statuses",
        text: "Set priority levels, assign owners, and track due dates from one place. Everyone sees what is urgent, what is pending, and what is already completed.",
        image:
          "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Boards, lists, and timeline views",
        text: "Switch between board, list, and timeline views instantly. Teams work in their preferred format while leadership still gets one aligned source of truth.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Real-time progress tracking",
        text: "Track execution in real time with live task updates and completion trends. Managers can instantly identify blockers and keep delivery on schedule.",
        image:
          "https://images.unsplash.com/photo-1551281044-8b62f4463c1c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Workflow standardization",
        text: "Create repeatable workflows for every team so project execution stays consistent. Standard steps reduce errors and improve delivery speed across departments.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    []
  );
  const [activeCapability, setActiveCapability] = useState(capabilitySections[0].title);
  const selectedSection = capabilitySections.find((item) => item.title === activeCapability) || capabilitySections[0];
  const workflowShowcase = [
    {
      title: "Forms to streamline project requests",
      text: "Capture incoming work, change requests, and feedback, then automatically route them to the right team and workflow.",
      image:
        "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Templates speed setup and standardization",
      text: "Deploy standardized workflows for any project type, from agile sprints to waterfall plans, without starting from scratch.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Whiteboards bring project plans to life",
      text: "Map project flows, capture requirements, and instantly convert ideas into assignable tasks for faster execution.",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80",
    },
  ];
  const manageProjectSection = [
    {
      title: "Plan milestones with confidence",
      text: "Create structured milestones with owners, deadlines, and clear dependencies so teams know what needs to happen next.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Track delivery in real time",
      text: "Monitor progress continuously and spot blockers early with status, priority, and workload visibility in one place.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
  ];
  const executionSections = [
    {
      title: "Execution cockpit",
      text: "A single control center for priorities, blockers, dependencies, and delivery pace across all teams.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Deadline confidence layer",
      text: "Use real-time progress and timeline signals to prevent deadline surprises and improve on-time delivery.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Standard workflow engine",
      text: "Roll out consistent workflows for every project type while preserving team flexibility for execution.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <SubPageLayout
     
    >
     
      <section className="relative left-1/2 right-1/2 mb-14 w-screen -translate-x-1/2 overflow-hidden bg-white py-10 sm:py-20">
        <div className="absolute -top-20 left-8 h-64 w-64 animate-pulse rounded-full bg-pink-100 blur-3xl" />
        
          
        <div className="absolute -bottom-20 right-6 h-72 w-72 animate-pulse rounded-full bg-purple-100 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-6 px-3 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-pink-700">
              Execute Every Project With Structure and Speed
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              KaryaUp transforms how teams plan and execute work by bringing structure into every project.
            </h2>

            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              From high-level planning to daily execution, everything stays aligned ensuring nothing slips through the cracks.
              Projects move faster because everyone knows what matters.
            </p>

            <p className="text-sm font-semibold text-slate-800">Key capabilities</p>
            <div className="grid gap-3 sm:grid-cols-2">
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

            <div key={selectedSection.title} className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-2" style={{ animation: "fadeInUp 350ms ease both" }}>
              <div className="space-y-3">
                <p className="text-sm font-bold text-slate-900">{selectedSection.title}</p>
                <p className="text-sm leading-relaxed text-slate-600">{selectedSection.text}</p>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <img src={selectedSection.image} alt={`KaryaUp ${selectedSection.title}`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="rounded-xl bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                Teams complete projects up to 35% faster
              </span>
            </div>

            <button className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105">
              Start managing projects with clarity
            </button>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-pink-200 via-purple-200 to-fuchsia-200 blur-lg" />
            <div className="relative rounded-[28px] border border-slate-200 bg-white p-6 shadow-2xl" style={{ animation: "floatCard 4s ease-in-out infinite" }}>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-800">KaryaUp Project Timeline</p>
                <span className="rounded-lg bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">On Track</span>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="mb-2 flex justify-between text-xs text-slate-600">
                    <span>Planning Sprint</span>
                    <span>90%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[90%] rounded-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-500" />
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="mb-2 flex justify-between text-xs text-slate-600">
                    <span>Dependency Setup</span>
                    <span>72%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-500" />
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="mb-2 flex justify-between text-xs text-slate-600">
                    <span>Delivery Readiness</span>
                    <span>64%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[64%] rounded-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 mb-12 w-screen -translate-x-1/2 bg-white py-2">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="mb-5 rounded-3xl border border-slate-200 bg-white p-5 text-white sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black">Manage The Project</p>
            <h3 className="mt-2 text-3xl font-semi-bold leading-tight sm:text-4xl text-black">Keep planning and execution fully connected</h3>
            <p className="mt-2 max-w-3xl text-sm text-black sm:text-base">
              Use structured task planning, deadlines, and live tracking to move projects from kickoff to completion without losing context.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {manageProjectSection.map((item, index) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ animation: `fadeInUp 650ms ease ${index * 100}ms both` }}
              >
                <div className="p-5">
                  <h4 className="mb-2 text-xl font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
                <div className="h-48 overflow-hidden border-t border-slate-200 bg-slate-50">
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

      <section className="relative left-1/2 right-1/2 mb-14 w-screen -translate-x-1/2 bg-white py-2">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-600">Project Management Plus</p>
            <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">More control for high-velocity teams</h3>
            <p className="mt-2 max-w-3xl text-sm text-slate-600 sm:text-base">
              Additional execution-focused sections for planning quality, timeline confidence, and standardized delivery.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {executionSections.map((item, index) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ animation: `fadeInUp 650ms ease ${index * 100}ms both` }}
              >
                <div className="p-4">
                  <h4 className="mb-2 text-lg font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
                <div className="h-44 overflow-hidden border-t border-slate-200 bg-slate-50">
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

      <section className="relative left-1/2 right-1/2 mb-14 w-screen -translate-x-1/2 bg-white py-2">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 lg:grid-cols-3 lg:px-12">
          {workflowShowcase.map((item, index) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{ animation: `fadeInUp 650ms ease ${index * 100}ms both` }}
            >
              <div className="p-6">
                <h3 className="mb-3 text-[31px] font-semi-bold leading-tight tracking-tight text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
              <div className="h-64 w-full overflow-hidden border-t border-slate-200 bg-slate-50">
                <img src={item.image} alt={`KaryaUp ${item.title}`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner
        bg="bg-white border border-slate-200 shadow-sm"
        titleColor="text-slate-700"
        btnColor="bg-gradient-to-r from-pink-500 to-purple-600"
        title="Ready to manage projects better?"
        desc="Bring your team, deadlines, and execution into one clear workspace with KaryaUp."
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
        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </SubPageLayout>
  );
}
