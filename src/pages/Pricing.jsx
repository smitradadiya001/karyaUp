import React from "react";
import Page from "../components/Page";

export default function Pricing() {
  return (
    <Page
      title="Pricing"
      subtitle="Simple, transparent pricing that scales with your team."
    >
      <div className="space-y-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Pricing plans</h2>
          <p className="text-slate-600">
            Choose a plan that fits your team. Start free, upgrade when you’re
            ready.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Feature comparison</h2>
          <p className="text-slate-600">
            Compare the core features across plans and see what’s included.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">FAQ</h2>
          <p className="text-slate-600">
            Get answers to common questions about billing, limits, and
            onboarding.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Ready to get started?</h2>
          <p className="text-slate-600 mb-6">
            Pick a plan and start organizing work with KaryaUp today.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-white font-semibold shadow-lg hover:bg-primary/90"
          >
            Start Workspace
            <span aria-hidden="true">→</span>
          </a>
        </section>
      </div>
    </Page>
  );
}
