import React, { useMemo, useState } from "react";
import SubPageLayout, { CTABanner } from "../../components/SubPageLayout";

export default function TeamCollaboration() {
  const collaborationImages = {
    hero: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    taskDiscussion: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    realtimeChat: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    fileSharing: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    screenRecording: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    centralized: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    channels: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    feedback: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80",
    leadership: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  };

  const capabilitySections = useMemo(
    () => [
      {
        title: "Task-based discussions",
        text: "Start discussions directly inside tasks so every message stays connected to real work, owners, and deadlines. Context never gets lost in separate chat threads.",
        image: collaborationImages.taskDiscussion,
      },
      {
        title: "Real-time chat and alerts",
        text: "Keep teams aligned with instant chat updates and smart alerts. Everyone gets notified when priorities shift, blockers appear, or decisions are needed.",
        image: collaborationImages.realtimeChat,
      },
      {
        title: "File and media sharing",
        text: "Share documents, screenshots, and media in the same place where work is executed. Teams review content faster and avoid duplicate uploads.",
        image: collaborationImages.fileSharing,
      },
      {
        title: "Screen recording and sharing",
        text: "Record quick walkthroughs, bug explanations, and process demos to reduce back-and-forth. Visual communication speeds up clarity and execution.",
        image: collaborationImages.screenRecording,
      },
      {
        title: "Centralized communication",
        text: "Unify project messages, task conversations, alerts, and files in one platform. Less noise, less tool switching, and stronger team alignment.",
        image: collaborationImages.centralized,
      },
    ],
    []
  );
  const [activeCapability, setActiveCapability] = useState(capabilitySections[0].title);
  const selectedSection = capabilitySections.find((item) => item.title === activeCapability) || capabilitySections[0];

  const collaborationHighlights = [
    {
      title: "Project channels with context",
      text: "Create focused channels for squads and initiatives while keeping every update tied to projects and outcomes.",
      image: collaborationImages.channels,
    },
    {
      title: "Feedback that moves work",
      text: "Convert feedback into tasks instantly so discussions do not stay pending and execution starts immediately.",
      image: collaborationImages.feedback,
    },
    {
      title: "Shared visibility for leadership",
      text: "Managers and stakeholders can follow progress, decisions, and blockers without disrupting team flow.",
      image: collaborationImages.leadership,
    },
  ];

  return (
    <SubPageLayout
           
    >
      
      <section className="relative left-1/2 right-1/2 mb-12 w-screen -translate-x-1/2 overflow-hidden rounded-3xl border border-slate-200 bg-white p-0 sm:p-8">
        <div className="mb-6 grid gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2 sm:p-5 m-0 p-0">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
      <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
      Bring your team together, <br />
      effortlessly
      </span>
    </h1>

    {/* Subheading */}
      <p className="mt-16 text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Break down silos, streamline communication, and ensure everyone stays on the same page from planning to execution.
      </p>
          <div className="space-y-4">
            <p className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-pink-700">
              Where communication meets execution
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Less noise. More clarity.
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              KaryaUp eliminates disconnected conversations by bringing communication directly into the workflow. Every
              discussion stays tied to tasks, projects, and outcomes so teams move faster with full context.
            </p>
            <span className="inline-flex rounded-xl bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Reduce internal communication gaps by 50%+
            </span>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <img
              src={collaborationImages.hero}
              alt="KaryaUp team collaboration overview"
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
              Collaborate without switching tools
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
          {collaborationHighlights.map((item, index) => (
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

      <CTABanner
        bg="bg-white border border-slate-200 shadow-sm"
        titleColor="text-slate-900"
        btnColor="bg-gradient-to-r from-pink-500 to-purple-600"
        title="Your whole team, one connected workspace."
        desc="Chat, files, updates, and task decisions stay together so execution becomes faster and clearer."
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
