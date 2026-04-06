import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function Scheduling() {
  return (
    <SubPageLayout badge="SCHEDULING — MANAGE YOUR TIME" badgeColor="bg-orange-100 text-orange-700" title="Scheduling" subtitle="Intelligent scheduling that respects availability, balances workloads, and avoids conflicts.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="⚖️" title="Workload Balancing" desc="Distribute tasks evenly across your team. Instantly see who is overloaded and who has capacity." />
        <FeatureCard icon="🕐" title="Availability Settings" desc="Team members set their work hours so scheduling respects time zones and preferences." />
        <FeatureCard icon="📆" title="Sprint Planning" desc="Define sprint cycles and auto-schedule tasks from your backlog to fill available capacity." />
        <FeatureCard icon="🔁" title="Recurring Schedules" desc="Set up recurring meetings and work blocks that repeat automatically on defined intervals." />
        <FeatureCard icon="📊" title="Schedule Reports" desc="Analyze planned vs actual completion to improve estimation accuracy over time." />
        <FeatureCard icon="🔗" title="Calendar Integration" desc="Sync scheduled work directly to team and personal calendars for a unified view." />
      </div>
      <CTABanner bg="bg-orange-50" titleColor="text-orange-900" btnColor="bg-orange-500" title="Schedule smart, deliver on time." desc="Balance workloads and plan with confidence using intelligent scheduling." />
    </SubPageLayout>
  );
}
