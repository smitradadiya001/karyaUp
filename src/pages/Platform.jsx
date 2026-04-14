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
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[120px] -z-10 animate-pulse" />
    <div className="absolute bottom-1/2 right-1/4 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[100px] -z-10" />

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
                  className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 bg-[length:200%_auto]"
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

const FeatureCard = ({ icon, title, desc, color = "indigo" }) => {
  const getColorClasses = (c) => {
    switch (c) {
      case 'amber': return 'bg-amber-50 text-amber-600 ring-amber-100';
      case 'purple': return 'bg-purple-50 text-purple-600 ring-purple-100';
      case 'emerald': return 'bg-emerald-50 text-emerald-600 ring-emerald-100';
      default: return 'bg-indigo-50 text-indigo-600 ring-indigo-100';
    }
  };

  const getHoverClasses = (c) => {
    switch (c) {
      case 'amber': return 'group-hover:bg-amber-500 group-hover:shadow-[0_10px_30px_-10px_rgba(245,158,11,0.5)]';
      case 'purple': return 'group-hover:bg-purple-500 group-hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.5)]';
      case 'emerald': return 'group-hover:bg-emerald-500 group-hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)]';
      default: return 'group-hover:bg-indigo-500 group-hover:shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)]';
    }
  };

  return (
    <TiltCard className="group relative pt-10 pb-10 px-8 sm:px-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className={`flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 mb-8 group-hover:text-white shadow-sm ring-1 ${getColorClasses(color)} ${getHoverClasses(color)}`}>
          <span className="text-3xl filter group-hover:brightness-105 transition-all">{icon}</span>
        </div>
        <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
          {desc}
        </p>
      </div>
    </TiltCard>
  );
};

const sections = {
  "project-management": {
    badge: "Platform",
    title: "Project Management",
    subtitle: "Plan, track, and deliver projects on time -from simple tasks to complex cross-team initiatives.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          <FeatureCard icon="📋" title="Task Boards" desc="Visualize work with kanban boards. Drag and drop tasks across stages to track progress effortlessly." />
          <FeatureCard icon="🗺️" title="Gantt Timelines" desc="Map out project dependencies and milestones on interactive Gantt charts with automatic scheduling." />
          <FeatureCard icon="🎯" title="Goal Tracking" desc="Set measurable goals, align them to projects, and track progress with real-time status updates." />
          <FeatureCard icon="👥" title="Team Assignment" desc="Assign tasks to individuals or teams with clear deadlines, priorities, and workload visibility." />
          <FeatureCard icon="📊" title="Project Dashboards" desc="Get a real-time overview of all project metrics, upcoming deadlines, and team progress at a glance." />
          <FeatureCard icon="🔔" title="Smart Alerts" desc="Get notified when deadlines approach, blockers arise, or tasks are completed without checking manually." />
        </div>
        <section className="mt-12 sm:mt-16 relative">
          <motion.div className="max-w-6xl mx-auto rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-12 relative overflow-hidden shadow-[0_40px_100px_-24px_rgba(79,70,229,0.25)] border border-white/10">
            <div className="absolute inset-0 bg-indigo-600" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
              <motion.div
                animate={{ x: [0, 80, -40], y: [0, -40, 60], scale: [1, 1.2, 0.9] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-30%] left-[-20%] w-[100%] h-[100%] bg-blue-600 rounded-full blur-[100px]"
              />
            </div>
            <div className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] border border-white/20 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 py-4">
              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">Ready to manage projects better?</h3>
                <p className="text-white/80 font-medium text-sm sm:text-base">Start your free workspace and bring your team together in one place.</p>
              </div>
              <Link to="/start" className="group shrink-0 flex h-[3.4em] min-w-[14em] items-center justify-center rounded-[30em] bg-white font-black text-[15px] sm:text-[16px] text-indigo-900 shadow-xl transition-all duration-300 active:scale-95">
                <span className="flex items-center gap-2">Start Free <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </div>
          </motion.div>
        </section>
      </>
    ),
  },
  "time-tracking": {
    badge: "Platform",
    title: "Time Tracking",
    subtitle: "Log hours accurately, understand where time goes, and keep every project on budget.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          <FeatureCard icon="⏱️" title="One-Click Timer" desc="Start and stop timers directly on any task. Time is automatically linked to the right project." />
          <FeatureCard icon="📅" title="Timesheets" desc="Review daily or weekly timesheets for yourself and your team with automatic totals and exports." />
          <FeatureCard icon="💰" title="Budget Tracking" desc="Compare estimated vs actual hours to catch budget overruns before they become a problem." />
          <FeatureCard icon="📈" title="Productivity Reports" desc="Identify your most productive hours, your most time-consuming tasks, and where to optimize." />
          <FeatureCard icon="🔄" title="Billable Hours" desc="Mark time as billable and generate professional invoices for clients with one click." />
          <FeatureCard icon="📱" title="Mobile Tracking" desc="Track time on the go from iOS or Android. Even works offline and syncs when you're back online." />
        </div>
        <section className="mt-12 sm:mt-16 relative">
          <motion.div className="max-w-6xl mx-auto rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-12 relative overflow-hidden shadow-[0_40px_100px_-24px_rgba(245,158,11,0.25)] border border-white/10">
            <div className="absolute inset-0 bg-amber-500" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
              <motion.div
                animate={{ x: [0, 80, -40], y: [0, -40, 60], scale: [1, 1.2, 0.9] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-30%] left-[-20%] w-[100%] h-[100%] bg-orange-600 rounded-full blur-[100px]"
              />
            </div>
            <div className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] border border-white/20 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 py-4">
              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">Never lose a billable hour again.</h3>
                <p className="text-white/80 font-medium text-sm sm:text-base">Accurate time tracking means accurate invoicing and happier clients.</p>
              </div>
              <Link to="/start" className="group shrink-0 flex h-[3.4em] min-w-[14em] items-center justify-center rounded-[30em] bg-white font-black text-[15px] sm:text-[16px] text-amber-900 shadow-xl transition-all duration-300 active:scale-95">
                <span className="flex items-center gap-2">Start Free <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </div>
          </motion.div>
        </section>
      </>
    ),
  },
  "team-collaboration": {
    badge: "Platform",
    title: "Team Collaboration",
    subtitle: "Work together seamlessly -share updates, files, and feedback without leaving your workspace.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          <FeatureCard icon="💬" title="Task Comments" desc="Discuss work in context -leave comments on any task, tag teammates, and attach files directly." />
          <FeatureCard icon="📁" title="File Sharing" desc="Attach documents, images, and links to tasks. Everything your team needs is always in one place." />
          <FeatureCard icon="🤝" title="Shared Workspaces" desc="Organize all your projects, teams, and work into a single collaborative workspace." />
          <FeatureCard icon="✅" title="Task Dependencies" desc="Link tasks so blocked work is surfaced automatically when a prerequisite isn't complete yet." />
          <FeatureCard icon="📣" title="Announcements" desc="Broadcast important updates to your team, department, or entire company in a single message." />
          <FeatureCard icon="🔒" title="Permission Controls" desc="Control exactly who can view, edit, or manage specific spaces, projects, and tasks." />
        </div>
        <section className="mt-12 sm:mt-16 relative">
          <motion.div className="max-w-6xl mx-auto rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-12 relative overflow-hidden shadow-[0_40px_100px_-24px_rgba(147,51,234,0.25)] border border-white/10">
            <div className="absolute inset-0 bg-purple-600" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
              <motion.div
                animate={{ x: [0, 80, -40], y: [0, -40, 60], scale: [1, 1.2, 0.9] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-30%] left-[-20%] w-[100%] h-[100%] bg-fuchsia-600 rounded-full blur-[100px]"
              />
            </div>
            <div className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] border border-white/20 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 py-4">
              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">Your whole team, in one place.</h3>
                <p className="text-white/80 font-medium text-sm sm:text-base">No more scattered emails and Slack threads -collaborate where the work happens.</p>
              </div>
              <Link to="/start" className="group shrink-0 flex h-[3.4em] min-w-[14em] items-center justify-center rounded-[30em] bg-white font-black text-[15px] sm:text-[16px] text-purple-900 shadow-xl transition-all duration-300 active:scale-95">
                <span className="flex items-center gap-2">Start Free <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </div>
          </motion.div>
        </section>
      </>
    ),
  },
  "boss-dashboard": {
    badge: "Platform",
    title: "Boss Dashboard",
    subtitle: "A high-level command center for leaders who need clarity on team performance, priorities, and progress -all at once.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          <FeatureCard icon="🏆" title="Team Overview" desc="See every team member's active tasks, workload, and completion rates at a glance from one screen." />
          <FeatureCard icon="🚨" title="Risk Alerts" desc="Instantly see overdue tasks, blocked projects, and at-risk deadlines without digging through details." />
          <FeatureCard icon="📊" title="Custom Widgets" desc="Build your perfect dashboard by adding charts, task lists, and metrics that matter most to you." />
          <FeatureCard icon="📆" title="Deadline Tracker" desc="A consolidated view of all upcoming deadlines across projects so nothing surprises you." />
          <FeatureCard icon="⚡" title="Quick Actions" desc="Approve requests, reassign tasks, and update priorities directly from your dashboard." />
          <FeatureCard icon="📤" title="Executive Reports" desc="Share polished weekly reports with leadership or clients with one-click PDF export." />
        </div>
        <section className="mt-12 sm:mt-16 relative">
          <motion.div className="max-w-6xl mx-auto rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-12 relative overflow-hidden shadow-[0_40px_100px_-24px_rgba(79,70,229,0.25)] border border-white/10">
            <div className="absolute inset-0 bg-indigo-700" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
              <motion.div
                animate={{ x: [0, 80, -40], y: [0, -40, 60], scale: [1, 1.2, 0.9] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-30%] left-[-20%] w-[100%] h-[100%] bg-blue-700 rounded-full blur-[100px]"
              />
            </div>
            <div className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] border border-white/20 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 py-4">
              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">Lead with full visibility.</h3>
                <p className="text-white/80 font-medium text-sm sm:text-base">Built for managers and executives who need the big picture fast.</p>
              </div>
              <Link to="/start" className="group shrink-0 flex h-[3.4em] min-w-[14em] items-center justify-center rounded-[30em] bg-white font-black text-[15px] sm:text-[16px] text-indigo-900 shadow-xl transition-all duration-300 active:scale-95">
                <span className="flex items-center gap-2">Start Free <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </div>
          </motion.div>
        </section>
      </>
    ),
  },
  "profit-tracking": {
    badge: "Platform",
    title: "Profit Tracking",
    subtitle: "Connect work to revenue. Monitor project budgets, track expenses, and ensure every project is profitable.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          <FeatureCard icon="💵" title="Budget vs Actuals" desc="Set budgets per project and monitor spending in real time to avoid overruns before they happen." />
          <FeatureCard icon="📉" title="Cost Analysis" desc="Break down costs by team member, task type, or time period to find your most expensive bottlenecks." />
          <FeatureCard icon="🧾" title="Expense Logging" desc="Log project expenses, attach receipts, and keep a complete audit trail for every spend." />
          <FeatureCard icon="📈" title="Profit Margin View" desc="See the gross profit margin per project by comparing billed revenue against internal costs." />
          <FeatureCard icon="🔁" title="Recurring Revenue" desc="Track recurring contracts and retainers alongside project-based revenue in a unified view." />
          <FeatureCard icon="📊" title="Financial Reports" desc="Generate profit & loss summaries, budget reports, and cost breakdowns for any date range." />
        </div>
        <section className="mt-12 sm:mt-16 relative">
          <motion.div className="max-w-6xl mx-auto rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-12 relative overflow-hidden shadow-[0_40px_100px_-24px_rgba(16,185,129,0.25)] border border-white/10">
            <div className="absolute inset-0 bg-emerald-600" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
              <motion.div
                animate={{ x: [0, 80, -40], y: [0, -40, 60], scale: [1, 1.2, 0.9] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-30%] left-[-20%] w-[100%] h-[100%] bg-teal-600 rounded-full blur-[100px]"
              />
            </div>
            <div className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] border border-white/20 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 py-4">
              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">Know your numbers, grow your business.</h3>
                <p className="text-white/80 font-medium text-sm sm:text-base">Profit tracking that ties directly to how your team works.</p>
              </div>
              <Link to="/start" className="group shrink-0 flex h-[3.4em] min-w-[14em] items-center justify-center rounded-[30em] bg-white font-black text-[15px] sm:text-[16px] text-emerald-900 shadow-xl transition-all duration-300 active:scale-95">
                <span className="flex items-center gap-2">Start Free <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </div>
          </motion.div>
        </section>
      </>
    ),
  },
};

const overviewSection = {
  badge: "Platform",
  title: "The KaryaUp Platform",
  subtitle: "One workspace for your entire company. Manage projects, track time, collaborate, and measure outcomes -without switching tools.",
  content: (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {[
          { label: "Project Management", to: "/platform/project-management", icon: "📋", desc: "Plan, track, and deliver any project on time.", color: "indigo" },
          { label: "Time Tracking", to: "/platform/time-tracking", icon: "⏱️", desc: "Log hours and keep every project on budget.", color: "amber" },
          { label: "Team Collaboration", to: "/platform/team-collaboration", icon: "🤝", desc: "Comment, share files, and collaborate in context.", color: "purple" },
          { label: "Boss Dashboard", to: "/platform/boss-dashboard", icon: "🏆", desc: "Get a high-level view of all team activity.", color: "indigo" },
          { label: "Profit Tracking", to: "/platform/profit-tracking", icon: "💵", desc: "Connect hours and expenses to real revenue.", color: "emerald" },
        ].map((item) => (
          <Link key={item.to} to={item.to} className="group relative">
            <TiltCard className="group relative pt-10 pb-10 px-8 sm:px-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:border-indigo-200/50 hover:shadow-xl">
              <div className="flex flex-col h-full">
                <div className={`flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 mb-8 shadow-sm ring-1 ring-slate-100 group-hover:ring-indigo-100`}>
                  <span className="text-3xl filter group-hover:brightness-105 transition-all">{item.icon}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-indigo-700 mb-3 transition-colors">{item.label}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">{item.desc}</p>
                <div className="mt-auto flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                  Explore <ArrowRight size={12} />
                </div>
              </div>
            </TiltCard>
          </Link>
        ))}
      </div>
      <section className="relative">
        <motion.div className="max-w-6xl mx-auto rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-12 relative overflow-hidden text-center shadow-[0_40px_100px_-24px_rgba(79,70,229,0.25)] border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600" />
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">Start your free workspace today.</h3>
            <p className="text-white/80 font-medium mb-10 text-sm sm:text-lg">No credit card required. Free forever for small teams.</p>
            <div className="flex justify-center">
              <Link to="/start" className="group flex h-[3.4em] min-w-[16em] items-center justify-center rounded-[30em] bg-white font-black text-[15px] sm:text-[16px] text-indigo-700 shadow-xl transition-all duration-300 active:scale-95">
                <span className="flex items-center gap-2">Get Started Free <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  ),
};

export default function Platform() {
  const { page } = useParams();
  const section = page ? sections[page] : null;
  const s = section || overviewSection;

  return (
    <SubPageLayout badge={s.badge} title={s.title} subtitle={s.subtitle}>
      {s.content}
    </SubPageLayout>
  );
}
