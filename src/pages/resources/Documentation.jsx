import React from "react";
import SubPageLayout, { FeatureCard } from "../../components/SubPageLayout";
import { Helmet } from "react-helmet-async";

export default function Documentation() {
  return (
    <>
      <Helmet>
        <title>Documentation & User Guide | Karyaup</title>

        <meta
          name="description"
          content="Explore Karyaup documentation and guides. Learn how to use features, manage projects, collaborate with teams, and optimize your workflow step by step."
        />

        <meta
          name="keywords"
          content="documentation, user guide, help center, SaaS documentation, project management guide, Karyaup docs"
        />

        <meta name="author" content="Karyaup" />

        <meta
          property="og:title"
          content="Documentation & User Guide | Karyaup"
        />
        <meta
          property="og:description"
          content="Learn how to use Karyaup with step-by-step guides and tutorials."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://karyaup.com/resources/docs"
        />
        <meta property="og:site_name" content="Karyaup" />

        <link
          rel="canonical"
          href="https://karyaup.com/resources/docs"
        />
      </Helmet>
      <SubPageLayout badge="DOCS -LEARN THE WORKFLOW" badgeColor="bg-blue-100 text-blue-700" title="Documentation" subtitle="Detailed documentation on every feature, API, and configuration option in KaryaUp.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon="🚀" title="Quick Start Guide" desc="Set up your workspace, invite your team, and create your first project in under 10 minutes." />
          <FeatureCard icon="📋" title="Tasks & Subtasks" desc="Full documentation on creating, assigning, organizing, and automating tasks." />
          <FeatureCard icon="⏱️" title="Time Tracking Docs" desc="How to enable time tracking, use the timer, log time manually, and export timesheets." />
          <FeatureCard icon="🔗" title="REST API Reference" desc="Complete API docs with endpoints, authentication, rate limits, and code examples in multiple languages." />
          <FeatureCard icon="⚡" title="Automation Documentation" desc="Build, manage, and troubleshoot automation rules with our step-by-step documentation." />
          <FeatureCard icon="🔒" title="Security & Permissions" desc="Understand user roles, permission levels, SSO setup, and data security practices in KaryaUp." />
        </div>
      </SubPageLayout>
    </>
  );
}
