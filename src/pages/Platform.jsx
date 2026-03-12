import React from "react";
import { Link, useParams } from "react-router-dom";
import Page from "../components/Page";

const platformSections = {
  overview: {
    title: "Platform overview",
    subtitle:
      "See how KaryaUp brings your team together with flexible workspaces, powerful tracking, and real-time insights.",
    content: (
      <div className="space-y-6">
        <p>
          KaryaUp is built to bring every aspect of work into a single place.
          Use the links below to explore core platform capabilities.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            to="/platform/task-management"
            className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold">Task management</h3>
            <p className="mt-2 text-sm text-slate-600">
              Organize, assign, and track tasks with ease.
            </p>
          </Link>
          <Link
            to="/platform/project-management"
            className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold">Project management</h3>
            <p className="mt-2 text-sm text-slate-600">
              Plan timelines, manage dependencies, and hit deadlines.
            </p>
          </Link>
          <Link
            to="/platform/time-tracking"
            className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold">Time tracking</h3>
            <p className="mt-2 text-sm text-slate-600">
              Track progress, hours, and project velocity in one place.
            </p>
          </Link>
          <Link
            to="/platform/team-collaboration"
            className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold">Team collaboration</h3>
            <p className="mt-2 text-sm text-slate-600">
              Work together with chat, comments, and shared workflows.
            </p>
          </Link>
        </div>
      </div>
    ),
  },
  "task-management": {
    title: "Task management",
    subtitle:
      "Turn work into actionable tasks, assign owners, and track progress at a glance.",
    content: (
      <p>
        Task management in KaryaUp helps teams break work into clear, manageable
        pieces and keep everything moving forward.
      </p>
    ),
  },
  "project-management": {
    title: "Project management",
    subtitle:
      "Manage timelines, milestones, and dependencies so nothing falls through the cracks.",
    content: (
      <p>
        Easily plan projects across teams, view timelines, and keep stakeholders
        aligned.
      </p>
    ),
  },
  "time-tracking": {
    title: "Time tracking",
    subtitle:
      "Log time effortlessly and get accurate reporting on hours and budgets.",
    content: (
      <p>
        Track time on tasks and projects, analyze where hours are going, and
        keep projects on budget.
      </p>
    ),
  },
  reports: {
    title: "Reports",
    subtitle: "Turn data into insights with easy-to-use reporting dashboards.",
    content: (
      <p>
        Build custom reports, monitor progress, and keep stakeholders in the
        loop with real-time metrics.
      </p>
    ),
  },
  "team-collaboration": {
    title: "Team collaboration",
    subtitle:
      "Keep conversations, files, and feedback in one place so work stays aligned.",
    content: (
      <p>
        Chat, comment, and collaborate across tasks so everyone stays in sync
        without switching tools.
      </p>
    ),
  },
  "boss-dashboard": {
    title: "Boss dashboard",
    subtitle:
      "Get a bird’s-eye view of what matters most—team performance, priorities, and progress.",
    content: (
      <p>
        The Boss Dashboard surfaces the metrics you care about and keeps
        leadership informed.
      </p>
    ),
  },
  "profit-tracking": {
    title: "Profit tracking",
    subtitle:
      "Connect work to revenue by tracking profit, expenses, and ROI across projects.",
    content: (
      <p>
        Stay on top of budgets with profit tracking that ties hours and expenses
        to real outcomes.
      </p>
    ),
  },
};

const linkGroups = [
  {
    heading: "Organize work",
    items: [
      { label: "Task Management", to: "/platform/task-management" },
      { label: "Project Timeline", to: "/platform/project-management" },
      { label: "Team Collaboration", to: "/platform/team-collaboration" },
    ],
  },
  {
    heading: "Track progress",
    items: [
      { label: "Time Tracking", to: "/platform/time-tracking" },
      { label: "Reports", to: "/platform/reports" },
    ],
  },
  {
    heading: "Business insights",
    items: [
      { label: "Boss Dashboard", to: "/platform/boss-dashboard" },
      { label: "Profit Tracking", to: "/platform/profit-tracking" },
    ],
  },
];

export default function Platform() {
  const { page } = useParams();
  const key = page || "overview";
  const section = platformSections[key] || platformSections.overview;

  return (
    <Page title={section.title} subtitle={section.subtitle}>
      {section.content}

      {key === "overview" ? (
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Explore platform topics</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {linkGroups.map((group) => (
              <div
                key={group.heading}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="font-semibold text-slate-900 mb-3">
                  {group.heading}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="text-sm font-semibold text-slate-700 hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </Page>
  );
}
