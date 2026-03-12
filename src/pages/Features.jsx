import React from "react";
import { Link, useParams } from "react-router-dom";
import Page from "../components/Page";

const featurePages = {
  overview: {
    title: "Features",
    subtitle:
      "Explore the tools that make KaryaUp a complete platform for teams.",
    content: (
      <div className="space-y-6">
        <p>
          From task management to reporting, KaryaUp includes a full suite of
          features designed for modern teams.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            to="/features/task-management"
            className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold">Task management</h3>
            <p className="mt-2 text-sm text-slate-600">
              Assign tasks, set deadlines, and keep work moving forward.
            </p>
          </Link>
          <Link
            to="/features/workspace-management"
            className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold">Workspace management</h3>
            <p className="mt-2 text-sm text-slate-600">
              Structure your team’s work with custom workspaces and templates.
            </p>
          </Link>
          <Link
            to="/features/reports-analytics"
            className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold">Reports & analytics</h3>
            <p className="mt-2 text-sm text-slate-600">
              Turn project data into insights with built-in dashboards.
            </p>
          </Link>
          <Link
            to="/features/automation"
            className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold">Automation</h3>
            <p className="mt-2 text-sm text-slate-600">
              Save time with repeatable workflows and automations (coming soon).
            </p>
          </Link>
          <Link
            to="/features/integrations"
            className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold">Integrations</h3>
            <p className="mt-2 text-sm text-slate-600">
              Connect your tools and keep data flowing between apps.
            </p>
          </Link>
        </div>
      </div>
    ),
  },
  "task-management": {
    title: "Task management",
    subtitle:
      "Track work with rich tasks, custom views, and flexible workflows.",
    content: (
      <p>
        Create, assign, and track tasks across boards, lists, and timelines with
        power and flexibility.
      </p>
    ),
  },
  "workspace-management": {
    title: "Workspace management",
    subtitle:
      "Organize teams and projects with customizable workspaces and templates.",
    content: (
      <p>
        Create dedicated workspaces for teams, departments, or initiatives and
        keep things structured.
      </p>
    ),
  },
  "reports-analytics": {
    title: "Reports & analytics",
    subtitle:
      "Make better decisions with dashboards, charts, and activity insights.",
    content: (
      <p>
        Visualize progress, monitor trends, and share reports with stakeholders.
      </p>
    ),
  },
  automation: {
    title: "Automation",
    subtitle: "Automate repetitive work with rules, triggers, and actions.",
    content: (
      <p>
        Set up workflows that run automatically so teams can focus on what
        matters.
      </p>
    ),
  },
  integrations: {
    title: "Integrations",
    subtitle: "Connect your favorite tools to keep work in sync.",
    content: (
      <p>
        Sync data between KaryaUp and other services to reduce context
        switching.
      </p>
    ),
  },
};

export default function Features() {
  const { page } = useParams();
  const key = page || "overview";
  const section = featurePages[key] || featurePages.overview;

  return (
    <Page title={section.title} subtitle={section.subtitle}>
      {section.content}
    </Page>
  );
}
