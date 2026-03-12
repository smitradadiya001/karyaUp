import React from "react";
import Page from "../components/Page";

export default function StartWorkspace() {
  return (
    <Page
      title="Start your workspace"
      subtitle="Create a workspace and begin collaborating with your team."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm max-w-md">
        <p className="text-slate-600">
          This is a placeholder for the workspace creation flow. Implement
          onboarding steps here.
        </p>
      </div>
    </Page>
  );
}
