import React, { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    rawX.set(x);
    rawY.set(y);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 1200 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={className}
    >
      <div style={{ transform: 'translateZ(20px)' }} className="h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

const SubPageLayout = ({ title, subtitle, badge, children }) => (
  <div className="min-h-screen bg-white pt-32 md:pt-40 pb-20 relative overflow-hidden text-slate-900">
    {/* Ambient Background Glows */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[120px] -z-10 animate-pulse" />
    <div className="absolute bottom-1/2 right-1/4 w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-[100px] -z-10" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.06] mb-6"
        >
          {title.split(" ").map((word, i) => (
            <React.Fragment key={i}>
              {word === "KaryaUp" ? (
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  {word}
                </motion.span>
              ) : (
                word
              )}{" "}
            </React.Fragment>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-lg sm:text-xl text-slate-500 font-medium mb-16 max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
      {children}
    </div>
  </div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <TiltCard className="group relative pt-10 pb-10 px-8 sm:px-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm transition-all duration-300">
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white shadow-sm ring-1 ring-emerald-100 group-hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)] transition-all duration-300 group-hover:scale-110 mb-8">
        <span className="text-3xl filter group-hover:brightness-105 transition-all">{icon}</span>
      </div>
      <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
        {desc}
      </p>
    </div>
  </TiltCard>
);

const sections = {
  tasks: {
    badge: "Features",
    title: "Tasks",
    subtitle: "Break work into actionable tasks. Assign owners, set priorities, and track every step from start to done.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard icon="✅" title="Subtasks" desc="Break complex work into smaller steps. Nest subtasks under any task for fine-grained tracking." />
        <FeatureCard icon="🏷️" title="Tags & Labels" desc="Categorize tasks by tags for quick filtering and reporting across projects." />
        <FeatureCard icon="⚡" title="Priority Levels" desc="Mark tasks Urgent, High, Normal, or Low to help your team focus on what matters most." />
        <FeatureCard icon="📎" title="Attachments" desc="Add files, images, and links directly to tasks. Keep all context in one place." />
        <FeatureCard icon="🔁" title="Recurring Tasks" desc="Set daily, weekly, or monthly recurrences for tasks that repeat on a schedule." />
        <FeatureCard icon="👁️" title="Custom Views" desc="Switch between list, board, calendar, and timeline views to see tasks the way you prefer." />
      </div>
    ),
  },
  dashboards: {
    badge: "Features",
    title: "Dashboards",
    subtitle: "Custom dashboards that give you real-time visibility into your work, your team, and your metrics.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard icon="📊" title="Drag & Drop Widgets" desc="Build your ideal dashboard by dragging charts, task lists, and metrics exactly where you want them." />
        <FeatureCard icon="📈" title="Progress Charts" desc="Track team velocity, task completion rates, and sprint burndowns with live charts." />
        <FeatureCard icon="🔢" title="Metric Tiles" desc="Display key numbers — open tasks, overdue items, team headcount — as highlighted tiles." />
        <FeatureCard icon="🎯" title="Goal Progress" desc="Show goal completion percentage alongside project data to keep priorities aligned." />
        <FeatureCard icon="📤" title="Share & Export" desc="Share dashboards with stakeholders or export charts as images and PDFs for reports." />
        <FeatureCard icon="🔄" title="Auto-Refresh" desc="Dashboards update automatically so you always have the latest data without manual refreshing." />
      </div>
    ),
  },
  gantt: {
    badge: "Features",
    title: "Gantt Charts",
    subtitle: "Visualize project timelines, dependencies, and milestones on a powerful interactive Gantt chart.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard icon="📅" title="Drag to Reschedule" desc="Drag tasks to new dates on the timeline. Dependencies update automatically to reflect the change." />
        <FeatureCard icon="🔗" title="Task Dependencies" desc="Create start-to-finish, finish-to-start, or custom dependency links between tasks." />
        <FeatureCard icon="🏁" title="Milestones" desc="Mark key delivery dates as milestones and track them visually across the full project timeline." />
        <FeatureCard icon="📊" title="Baseline View" desc="Compare your original plan against actual progress to understand schedule slippage." />
        <FeatureCard icon="👥" title="Resource Allocation" desc="See how your team's time is distributed across the timeline to avoid overloading anyone." />
        <FeatureCard icon="📤" title="PDF Export" desc="Export your Gantt chart as a beautiful PDF for client meetings and status presentations." />
      </div>
    ),
  },
  chat: {
    badge: "Features",
    title: "Chat",
    subtitle: "Real-time messaging built into your workspace. Stay connected without leaving your work.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard icon="💬" title="Channels" desc="Create topic-based channels for teams, projects, or any discussion group." />
        <FeatureCard icon="📌" title="Pinned Messages" desc="Pin important announcements or links to channels so they're always easy to find." />
        <FeatureCard icon="🔍" title="Message Search" desc="Search across all channels and conversations to find any message instantly." />
        <FeatureCard icon="📎" title="File Sharing" desc="Drop files, images, and documents directly into conversations without leaving the chat." />
        <FeatureCard icon="🧵" title="Threaded Replies" desc="Reply in threads to keep discussions organized without cluttering the main channel." />
        <FeatureCard icon="👀" title="Read Receipts" desc="Know when your message has been seen by the recipient for important communications." />
      </div>
    ),
  },
  notifications: {
    badge: "Features",
    title: "Notifications",
    subtitle: "Smart, context-aware notifications that keep you informed without overwhelming you.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard icon="🔔" title="Real-time Alerts" desc="Get instant notifications when tasks are assigned, updated, or commented on." />
        <FeatureCard icon="🎛️" title="Custom Preferences" desc="Choose which events trigger notifications per workspace, project, and task type." />
        <FeatureCard icon="⏰" title="Deadline Reminders" desc="Receive reminders before tasks are due so nothing falls through the cracks." />
        <FeatureCard icon="📱" title="Push Notifications" desc="Get push alerts on mobile even when the app is closed, so you're always in the loop." />
        <FeatureCard icon="📧" title="Email Digests" desc="Receive a daily or weekly digest summarizing activity rather than individual emails." />
        <FeatureCard icon="🔕" title="Do Not Disturb" desc="Pause all notifications during focus time or outside work hours to protect your attention." />
      </div>
    ),
  },
  team: {
    badge: "Management",
    title: "Team Management",
    subtitle: "Manage your entire workforce in one place — from onboarding to performance tracking.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard icon="👤" title="Employee Profiles" desc="Maintain rich profiles for every team member including roles, skills, and contact information." />
        <FeatureCard icon="🏢" title="Department Structure" desc="Organize staff into departments and reporting hierarchies that mirror your org chart." />
        <FeatureCard icon="📋" title="Roles & Permissions" desc="Grant fine-grained access to tools and data based on an employee's role." />
        <FeatureCard icon="📈" title="Performance Tracking" desc="Track KPIs, set goals, and run performance reviews from a single dashboard." />
        <FeatureCard icon="🤝" title="Onboarding Checklists" desc="Guide new hires through a structured onboarding journey with task-based checklists." />
        <FeatureCard icon="📊" title="Headcount Reports" desc="Generate reports on team size, growth, turnover, and departmental distribution." />
      </div>
    ),
  },
  attendance: {
    badge: "Management",
    title: "Attendance",
    subtitle: "Automate attendance tracking, monitor work hours, and ensure accurate records for every employee.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard icon="🕐" title="Clock In / Clock Out" desc="Employees clock in and out digitally from web or mobile. Timestamps are recorded automatically." />
        <FeatureCard icon="📅" title="Attendance Calendar" desc="View attendance history on a monthly calendar with color-coded present, absent, and leave days." />
        <FeatureCard icon="🌐" title="Remote Check-in" desc="Support remote teams with IP-based or location-based attendance verification." />
        <FeatureCard icon="⚠️" title="Late & Absent Alerts" desc="Get automated alerts when employees arrive late or miss a day without prior approval." />
        <FeatureCard icon="📊" title="Attendance Reports" desc="Export monthly attendance reports by department, team, or individual employee." />
        <FeatureCard icon="🔗" title="Payroll Integration" desc="Attendance data flows directly into payroll so hours are never miscounted." />
      </div>
    ),
  },
  leave: {
    badge: "Management",
    title: "Leave Management",
    subtitle: "Streamline leave requests, approvals, and balances so HR spends less time on admin.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard icon="🏖️" title="Leave Requests" desc="Employees submit leave requests in seconds. Managers approve or decline from a single inbox." />
        <FeatureCard icon="📊" title="Leave Balances" desc="Every employee can see their remaining leave balance by type — annual, sick, maternity, etc." />
        <FeatureCard icon="🗓️" title="Team Calendar" desc="See all approved leaves on a shared calendar so teams plan coverage effectively." />
        <FeatureCard icon="⚙️" title="Policy Configuration" desc="Define custom leave policies by role, department, or seniority level including carry-forward rules." />
        <FeatureCard icon="🔔" title="Approval Workflows" desc="Route leave requests through single or multi-level approval chains based on your hierarchy." />
        <FeatureCard icon="📤" title="Leave Reports" desc="Generate reports on leave utilization, patterns, and department-level absence rates." />
      </div>
    ),
  },
  salary: {
    badge: "Management",
    title: "Salary Management",
    subtitle: "Manage payroll, salaries, and compensation with accuracy and full compliance.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard icon="💵" title="Salary Structures" desc="Define base pay, allowances, and deductions for every role and grade in your organization." />
        <FeatureCard icon="📊" title="Payroll Processing" desc="Generate monthly payroll in minutes with automatic deductions for taxes, PF, and insurance." />
        <FeatureCard icon="🧾" title="Payslip Generation" desc="Send professional, itemized payslips to each employee via email or in-app download." />
        <FeatureCard icon="📈" title="Compensation Reviews" desc="Track salary history, schedule annual reviews, and manage increments from a single dashboard." />
        <FeatureCard icon="⚖️" title="Compliance" desc="Built-in rules for statutory deductions and compliance requirements across jurisdictions." />
        <FeatureCard icon="🏦" title="Bank Transfers" desc="Initiate bulk salary disbursements to employee bank accounts directly from the platform." />
      </div>
    ),
  },
  calendar: {
    badge: "Features",
    title: "Calendar",
    subtitle: "A unified calendar that brings together tasks, events, meetings, and deadlines in one view.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard icon="📅" title="Task Calendar" desc="See all tasks with due dates displayed on a monthly or weekly calendar view." />
        <FeatureCard icon="🤝" title="Shared Calendars" desc="Share project or team calendars so everyone can plan with full visibility of events and deadlines." />
        <FeatureCard icon="🔄" title="Google Sync" desc="Two-way sync with Google Calendar so events in KaryaUp appear in your personal calendar." />
        <FeatureCard icon="📅" title="Event Scheduling" desc="Create meetings, calls, and events with invites, locations, and agenda notes." />
        <FeatureCard icon="🌍" title="Multi-timezone" desc="View calendars in your local time zone while scheduling across globally distributed teams." />
        <FeatureCard icon="🔔" title="Reminders" desc="Set smart reminders for tasks and events so you're always prepared for what's next." />
      </div>
    ),
  },
  scheduling: {
    badge: "Features",
    title: "Scheduling",
    subtitle: "Intelligent scheduling that respects availability, balances workloads, and avoids conflicts.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard icon="⚖️" title="Workload Balancing" desc="Distribute tasks evenly across your team. Instantly see who is overloaded and who has capacity." />
        <FeatureCard icon="🕐" title="Availability Settings" desc="Team members set their work hours so scheduling respects time zones and preferences." />
        <FeatureCard icon="📆" title="Sprint Planning" desc="Define sprint cycles and auto-schedule tasks from your backlog to fill available capacity." />
        <FeatureCard icon="🔁" title="Recurring Schedules" desc="Set up recurring meetings and work blocks that repeat automatically on defined intervals." />
        <FeatureCard icon="📊" title="Schedule Reports" desc="Analyze planned vs actual completion to improve estimation accuracy over time." />
        <FeatureCard icon="🔗" title="Calendar Integration" desc="Sync scheduled work directly to team and personal calendars for a unified view." />
      </div>
    ),
  },
  automations: {
    badge: "Features",
    title: "Automations",
    subtitle: "Eliminate repetitive work with no-code automation rules that keep your team moving forward.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard icon="⚡" title="Trigger-Based Rules" desc="Create rules that fire when a status changes, a date arrives, or a task is assigned." />
        <FeatureCard icon="🤖" title="No-Code Builder" desc="Build automation workflows with a visual drag-and-drop editor — no developer needed." />
        <FeatureCard icon="📨" title="Auto-Notifications" desc="Automatically notify the right people when key events happen in your workspace." />
        <FeatureCard icon="🔁" title="Recurring Automations" desc="Set schedules — daily, weekly, monthly — for automations that repeat on a cadence." />
        <FeatureCard icon="🔗" title="App Integrations" desc="Connect KaryaUp with Slack, Gmail, and other tools to automate cross-platform workflows." />
        <FeatureCard icon="📊" title="Automation Logs" desc="See a full execution history of every automation run to debug and optimize your rules." />
      </div>
    ),
  },
  "time-tracking": {
    badge: "Features",
    title: "Time Tracking",
    subtitle: "Log time directly in your tasks and get powerful insights on where hours are spent.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard icon="⏱️" title="Task Timers" desc="Start and stop a live timer on any task. Time is automatically recorded and linked to the project." />
        <FeatureCard icon="✏️" title="Manual Entry" desc="Add time manually for meetings, travel, or work done offline by typing hours directly." />
        <FeatureCard icon="📊" title="Time Reports" desc="View time spent by person, team, project, or date range in flexible report formats." />
        <FeatureCard icon="💰" title="Billable Hours" desc="Mark logged time as billable and use it to generate accurate client invoices." />
        <FeatureCard icon="🎯" title="Estimates vs Actuals" desc="Compare estimated task duration against actual time to improve your team's accuracy." />
        <FeatureCard icon="📤" title="Export Timesheets" desc="Download timesheets as CSV or PDF for payroll, invoicing, and client reporting." />
      </div>
    ),
  },
  integrations: {
    badge: "Features",
    title: "Integrations",
    subtitle: "Connect KaryaUp with the tools your team already uses to create a seamless workflow.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard icon="📧" title="Gmail & Outlook" desc="Create tasks from emails and link conversations to projects without leaving your inbox." />
        <FeatureCard icon="📅" title="Google Calendar" desc="Sync tasks and deadlines with Google Calendar for a unified view of your schedule." />
        <FeatureCard icon="💬" title="Slack" desc="Receive KaryaUp notifications in Slack and create tasks directly from Slack messages." />
        <FeatureCard icon="🔗" title="Zapier" desc="Connect KaryaUp to thousands of apps via Zapier automations without writing any code." />
        <FeatureCard icon="🛠️" title="API Access" desc="Build custom integrations using KaryaUp's REST API for complete flexibility." />
        <FeatureCard icon="📦" title="App Marketplace" desc="Browse and install verified integrations from the KaryaUp marketplace in one click." />
      </div>
    ),
  },
  demo: {
    badge: "Features",
    title: "Watch the Demo",
    subtitle: "See KaryaUp in action. A guided walkthrough of the platform's most powerful features.",
    content: (
      <div className="text-center py-16 bg-gray-50 rounded-2xl">
        <div className="text-6xl mb-6">▶️</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Product Demo</h3>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">Watch a comprehensive walkthrough of how KaryaUp helps teams work smarter, not harder.</p>
        <Link to="/start" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
          Start Free Trial Instead →
        </Link>
      </div>
    ),
  },
};

const allFeatures = [
  { label: "Tasks", to: "/features/tasks", icon: "✅" },
  { label: "Dashboards", to: "/features/dashboards", icon: "📊" },
  { label: "Gantt", to: "/features/gantt", icon: "📅" },
  { label: "Chat", to: "/features/chat", icon: "💬" },
  { label: "Notifications", to: "/features/notifications", icon: "🔔" },
  { label: "Team", to: "/features/team", icon: "👥" },
  { label: "Attendance", to: "/features/attendance", icon: "🕐" },
  { label: "Leave", to: "/features/leave", icon: "🏖️" },
  { label: "Salary", to: "/features/salary", icon: "💵" },
  { label: "Calendar", to: "/features/calendar", icon: "📆" },
  { label: "Scheduling", to: "/features/scheduling", icon: "⚖️" },
  { label: "Automations", to: "/features/automations", icon: "⚡" },
  { label: "Time Tracking", to: "/features/time-tracking", icon: "⏱️" },
  { label: "Integrations", to: "/features/integrations", icon: "🔗" },
];

export default function Features() {
  const { page } = useParams();
  const section = page ? sections[page] : null;

  if (section) {
    return (
      <SubPageLayout badge={section.badge} title={section.title} subtitle={section.subtitle}>
        {section.content}
        <div className="mt-20 pt-10 border-t border-slate-100">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Explore more features</h3>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {allFeatures.filter(f => !f.to.endsWith(`/${page}`)).map((f) => (
              <Link key={f.to} to={f.to} className="group flex items-center gap-3 text-sm text-slate-600 hover:text-emerald-700 font-black bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/50 hover:shadow-sm transition-all">
                <span className="text-xl group-hover:scale-110 transition-transform">{f.icon}</span> 
                {f.label}
              </Link>
            ))}
          </div>
        </div>
      </SubPageLayout>
    );
  }

  return (
    <SubPageLayout badge="Features" title="All Features" subtitle="Everything you need to plan, manage, and optimize work in one unified platform.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allFeatures.map((f) => (
          <Link key={f.to} to={f.to} className="group relative">
            <TiltCard className="rounded-[2.5rem] bg-white border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:border-emerald-200/50 hover:shadow-xl">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-emerald-50 text-2xl group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300 shadow-sm ring-1 ring-emerald-100/50">
                  {f.icon}
                </div>
                <div className="flex-1">
                  <span className="block font-black text-slate-900 text-lg group-hover:text-emerald-700 transition-colors">{f.label}</span>
                  <span className="flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase tracking-wider mt-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                    See details <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </TiltCard>
          </Link>
        ))}
      </div>
    </SubPageLayout>
  );
}
