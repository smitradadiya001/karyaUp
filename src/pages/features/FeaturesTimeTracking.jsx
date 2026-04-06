import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function FeaturesTimeTracking() {
  return (
    <SubPageLayout badge="TIME TRACKING — OPTIMIZE YOUR HOURS" badgeColor="bg-teal-100 text-teal-700" title="Time Tracking" subtitle="Log time directly in your tasks and get powerful insights on where hours are spent.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="⏱️" title="Task Timers" desc="Start and stop a live timer on any task. Time is automatically recorded and linked to the project." />
        <FeatureCard icon="✏️" title="Manual Entry" desc="Add time manually for meetings, travel, or work done offline by typing hours directly." />
        <FeatureCard icon="📊" title="Time Reports" desc="View time spent by person, team, project, or date range in flexible report formats." />
        <FeatureCard icon="💰" title="Billable Hours" desc="Mark logged time as billable and use it to generate accurate client invoices." />
        <FeatureCard icon="🎯" title="Estimates vs Actuals" desc="Compare estimated task duration against actual time to improve your team's accuracy." />
        <FeatureCard icon="📤" title="Export Timesheets" desc="Download timesheets as CSV or PDF for payroll, invoicing, and client reporting." />
      </div>
      <CTABanner bg="bg-teal-50" titleColor="text-teal-900" btnColor="bg-teal-600" title="Time tracked is money earned." desc="Know exactly where every hour goes with built-in time tracking." />
    </SubPageLayout>
  );
}
