import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { Helmet } from "react-helmet-async";

const videos = [
  { emoji: "▶️", title: "KaryaUp in 5 Minutes", duration: "5:12", level: "Beginner", levelColor: "bg-emerald-100 text-emerald-700", desc: "The fastest way to understand what KaryaUp is and why your team will love it." },
  { emoji: "▶️", title: "Creating Your First Project", duration: "8:34", level: "Beginner", levelColor: "bg-emerald-100 text-emerald-700", desc: "Watch us set up a real project from scratch -tasks, assignees, deadlines, and views." },
  { emoji: "▶️", title: "Mastering the Board View", duration: "11:20", level: "Intermediate", levelColor: "bg-amber-100 text-amber-700", desc: "Learn to build powerful Kanban boards with automation, WIP limits, and custom columns." },
  { emoji: "▶️", title: "Time Tracking Deep Dive", duration: "9:45", level: "Intermediate", levelColor: "bg-amber-100 text-amber-700", desc: "Everything you need to know about logging time, reviewing timesheets, and billing clients." },
  { emoji: "▶️", title: "Building Automations", duration: "14:02", level: "Advanced", levelColor: "bg-rose-100 text-rose-700", desc: "Build no-code automations that run your team's repetitive workflows automatically." },
  { emoji: "▶️", title: "Admin & Permissions Guide", duration: "7:18", level: "Admin", levelColor: "bg-purple-100 text-purple-700", desc: "How to configure workspace permissions, roles, SSO, and security settings." },
];

export default function VideoTutorials() {
  return (
    <>
      <Helmet>
        <title>Video Tutorials & Guides | Karyaup</title>

        <meta
          name="description"
          content="Watch Karyaup video tutorials to learn how to manage tasks, projects, dashboards, and workflows. Step-by-step guides to help your team work smarter."
        />

        <meta
          name="keywords"
          content="video tutorials, how-to guides, SaaS tutorials, project management tutorials, workflow training, Karyaup tutorials"
        />

        <meta name="author" content="Karyaup" />

        <meta
          property="og:title"
          content="Video Tutorials & Guides | Karyaup"
        />
        <meta
          property="og:description"
          content="Learn Karyaup with step-by-step video tutorials and guides."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://karyaup.com/video-tutorials"
        />
        <meta property="og:site_name" content="Karyaup" />

        <link
          rel="canonical"
          href="https://karyaup.com/video-tutorials"
        />
      </Helmet>
      <SubPageLayout badge="Resources" badgeColor="bg-purple-100 text-purple-700" title="Video Tutorials" subtitle="Step-by-step video tutorials to help every team member get up to speed with KaryaUp fast.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <div key={v.title} className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-violet-100 flex items-center justify-center h-32 text-5xl">{v.emoji}</div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${v.levelColor}`}>{v.level}</span>
                  <span className="text-xs text-gray-400">{v.duration}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SubPageLayout>
    </>
  );
}
