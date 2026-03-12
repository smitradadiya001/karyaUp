import React from "react";
import { Link } from "react-router-dom";
import Page from "../components/Page";

export default function NotFound() {
  return (
    <Page
      title="Page not found"
      subtitle="The page you are looking for doesn't exist."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-slate-600 mb-4">
          Try returning to the homepage or navigating using the menu.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-white font-semibold shadow-lg hover:bg-primary/90"
        >
          Back to Home
        </Link>
      </div>
    </Page>
  );
}
