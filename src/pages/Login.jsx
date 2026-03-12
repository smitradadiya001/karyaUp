import React from "react";
import Page from "../components/Page";

export default function Login() {
  return (
    <Page title="Log in" subtitle="Access your KaryaUp workspace.">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm max-w-md">
        <p className="text-slate-600">
          This is a placeholder login page. Connect your authentication system
          here.
        </p>
      </div>
    </Page>
  );
}
