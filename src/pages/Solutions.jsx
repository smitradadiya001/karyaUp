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
  <div className="min-h-screen bg-white pt-28 md:pt-32 pb-20 relative overflow-hidden">
    {/* Ambient Background Glows */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[120px] -z-10 animate-pulse" />
    <div className="absolute bottom-1/2 right-1/4 w-[400px] h-[400px] bg-cyan-100/30 rounded-full blur-[100px] -z-10" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 text-[11px] font-black tracking-widest uppercase rounded-full bg-purple-100 border border-purple-200 text-purple-700 shadow-sm"
          >
            {badge}
          </motion.div>
        )}
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
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
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
      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-purple-50 text-[#7e22ce] group-hover:bg-[#7e22ce] group-hover:text-white shadow-sm ring-1 ring-purple-100 group-hover:shadow-[0_10px_30px_-10px_rgba(126,34,206,0.5)] transition-all duration-300 group-hover:scale-110 mb-8">
        <span className="text-3xl filter group-hover:brightness-105 transition-all">{icon}</span>
      </div>
      <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
        {desc}
      </p>
    </div>
  </TiltCard>
);

const CTA = ({ title, desc, btnLabel }) => (
  <section className="py-12 sm:py-16 lg:py-20 relative">
    <motion.div className="max-w-6xl mx-auto rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-12 relative overflow-hidden text-center shadow-[0_40px_100px_-24px_rgba(126,34,206,0.25)] border border-white/10">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[#7e22ce]" />

      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
        <motion.div
          animate={{ x: [0, 80, -40], y: [0, -40, 60], scale: [1, 1.2, 0.9] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-30%] left-[-20%] w-[100%] h-[100%] bg-indigo-600 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -60, 100], y: [0, 80, -30], scale: [1, 1.3, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-40%] right-[-10%] w-[120%] h-[120%] bg-rose-500 rounded-full blur-[120px]"
        />
      </div>

      {/* Glass Inner Glow */}
      <div className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] border border-white/20 pointer-events-none shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)]" />

      <div className="relative z-10 py-6">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight leading-[1.1]">
          {title}
        </h2>
        <p className="text-white/80 text-sm sm:text-base md:text-lg font-medium mb-10 max-w-2xl mx-auto leading-relaxed px-2">
          {desc}
        </p>
        <div className="flex justify-center">
          <Link
            to="/start"
            className="group relative z-10 flex h-[3.4em] w-full sm:w-auto min-w-[16em] items-center justify-center rounded-[30em] bg-white font-black text-[15px] sm:text-[16px] text-slate-900 shadow-[0_20px_50px_-12px_rgba(126,34,206,0.25)] border border-slate-100 transition-all duration-300 active:scale-95"
          >
            <span className="flex items-center justify-center gap-2">
              {btnLabel}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  </section>
);

const sections = {
  // Teams
  "project-management": {
    badge: "Solutions / Teams",
    title: "KaryaUp for Project Management Teams",
    subtitle: "Deliver every project on time with full visibility, clear accountability, and powerful automation.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon="📋" title="Structured Workflows" desc="Create templates for common project types so teams spin up new projects in seconds." />
          <FeatureCard icon="📅" title="Gantt & Timeline" desc="Visualize the entire project lifecycle with dependencies and milestones in one view." />
          <FeatureCard icon="📊" title="Progress Dashboards" desc="Track project health with live status charts and team velocity metrics." />
          <FeatureCard icon="🔔" title="Deadline Alerts" desc="Automatic alerts for overdue tasks and approaching deadlines so nothing is missed." />
          <FeatureCard icon="👥" title="Stakeholder Reports" desc="Share concise, real-time status reports with clients and stakeholders without manual prep." />
          <FeatureCard icon="⚡" title="Automations" desc="Automate handoffs, status changes, and recurring tasks to cut out manual coordination." />
        </div>
        <CTA bg="bg-rose-50" textColor="text-rose-900" btnColor="bg-rose-600" title="Built for project managers." desc="Manage any type of project with one flexible platform." btnLabel="Start Free" />
      </>
    ),
  },
  "product-development": {
    badge: "Solutions / Teams",
    title: "KaryaUp for Product Development",
    subtitle: "Ship better products faster. From roadmap to release, keep your product team aligned and moving.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon="🗺️" title="Product Roadmap" desc="Plan and communicate your product roadmap with a visual, always up-to-date timeline." />
          <FeatureCard icon="🐛" title="Bug Tracking" desc="Log, prioritize, and resolve bugs with a dedicated workflow that connects to your sprint." />
          <FeatureCard icon="🔄" title="Sprint Planning" desc="Run agile sprints with backlog management, sprint boards, and velocity tracking." />
          <FeatureCard icon="🧪" title="Release Tracking" desc="Plan features by release version and track completion toward your shipping dates." />
          <FeatureCard icon="📝" title="PRD Management" desc="Write and link product requirements directly to tasks so engineering always has context." />
          <FeatureCard icon="📊" title="Dev Dashboards" desc="Monitor sprint health, story points, and burn-down in real time." />
        </div>
        <CTA bg="bg-blue-50" textColor="text-blue-900" btnColor="bg-blue-600" title="From idea to launch." desc="One workspace for your entire product lifecycle." btnLabel="Start Free" />
      </>
    ),
  },
  operations: {
    badge: "Solutions / Teams",
    title: "KaryaUp for Operations",
    subtitle: "Streamline operations, reduce overhead, and keep every process running like clockwork.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon="⚙️" title="Process Templates" desc="Standardize recurring processes with reusable, checklist-driven templates." />
          <FeatureCard icon="📋" title="SOPs" desc="Store standard operating procedures linked to tasks so teams always follow the right steps." />
          <FeatureCard icon="🔄" title="Workflow Automation" desc="Automate approval flows, notifications, and status transitions without code." />
          <FeatureCard icon="📊" title="KPI Dashboards" desc="Monitor operational KPIs across all departments from a single command center." />
          <FeatureCard icon="📦" title="Vendor Management" desc="Track vendor tasks, contracts, and deliverables alongside internal work." />
          <FeatureCard icon="🔔" title="SLA Tracking" desc="Set and monitor service-level agreements so commitments are always met." />
        </div>
        <CTA bg="bg-slate-50" textColor="text-slate-900" btnColor="bg-slate-600" title="Operations at scale." desc="One platform for every process in your business." btnLabel="Start Free" />
      </>
    ),
  },
  it: {
    badge: "Solutions / Teams",
    title: "KaryaUp for IT Teams",
    subtitle: "Manage IT projects, incidents, and service requests in a structured, efficient workspace.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon="🚨" title="Incident Management" desc="Log, triage, and resolve incidents with automated escalation and priority routing." />
          <FeatureCard icon="🖥️" title="Asset Tracking" desc="Maintain an inventory of hardware, software licences, and IT assets linked to tasks." />
          <FeatureCard icon="📋" title="IT Project Planning" desc="Manage infrastructure upgrades, migrations, and rollouts with Gantt and board views." />
          <FeatureCard icon="🔒" title="Access Management" desc="Track permission requests and access provisioning with an auditable approval workflow." />
          <FeatureCard icon="📊" title="Service Dashboards" desc="Monitor open tickets, resolution rates, and team workload in real time." />
          <FeatureCard icon="🔗" title="API & Integrations" desc="Connect KaryaUp to your monitoring tools, JIRA, and helpdesk systems." />
        </div>
        <CTA bg="bg-cyan-50" textColor="text-cyan-900" btnColor="bg-cyan-600" title="IT excellence, delivered." desc="Manage incidents, projects, and assets in one workspace." btnLabel="Start Free" />
      </>
    ),
  },
  marketing: {
    badge: "Solutions / Teams",
    title: "KaryaUp for Marketing",
    subtitle: "Plan campaigns, manage content, and measure results — all without juggling multiple tools.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon="📣" title="Campaign Planning" desc="Plan multi-channel campaigns with a structured timeline, task assignments, and deadlines." />
          <FeatureCard icon="🗓️" title="Content Calendar" desc="Manage your editorial and social content calendar with draft approval workflows." />
          <FeatureCard icon="📊" title="Marketing Analytics" desc="Track campaign performance, channel ROI, and goal metrics from a single dashboard." />
          <FeatureCard icon="✍️" title="Content Briefs" desc="Create linked briefs for every piece of content with guidelines, keywords, and assets." />
          <FeatureCard icon="🤝" title="Agency Collaboration" desc="Invite freelancers and agency partners with controlled access to relevant projects." />
          <FeatureCard icon="📤" title="Asset Library" desc="Store and organize brand assets, images, and approved files in a searchable library." />
        </div>
        <CTA bg="bg-red-50" textColor="text-red-900" btnColor="bg-red-600" title="Marketing made measurable." desc="From briefing to publishing, manage all your marketing in one place." btnLabel="Start Free" />
      </>
    ),
  },
  hr: {
    badge: "Solutions / Teams",
    title: "KaryaUp for Human Resources",
    subtitle: "Manage hiring, onboarding, performance, attendance, and payroll from one HR command center.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon="🤝" title="Recruitment Pipeline" desc="Track job applicants through each stage from application to offer with kanban boards." />
          <FeatureCard icon="📋" title="Onboarding Workflows" desc="Guide new hires through structured onboarding checklists that ensure nothing is missed." />
          <FeatureCard icon="📈" title="Performance Reviews" desc="Run structured annual and mid-year reviews with goal tracking and feedback forms." />
          <FeatureCard icon="🏖️" title="Leave Management" desc="Automate leave requests, approvals, and balance tracking across the entire company." />
          <FeatureCard icon="🕐" title="Attendance Tracking" desc="Monitor working hours, late arrivals, and absences with automated reports." />
          <FeatureCard icon="💵" title="Payroll Processing" desc="Process salaries, generate payslips, and manage deductions in a few clicks." />
        </div>
        <CTA bg="bg-teal-50" textColor="text-teal-900" btnColor="bg-teal-600" title="HR, simplified." desc="One platform for your entire employee lifecycle." btnLabel="Start Free" />
      </>
    ),
  },
  // Companies
  enterprise: {
    badge: "Solutions / Enterprise",
    title: "KaryaUp for Enterprise",
    subtitle: "Enterprise-grade security, compliance, and scalability for organizations with complex needs.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon="🏢" title="Multi-Workspace" desc="Manage multiple business units, subsidiaries, or departments with separate, connected workspaces." />
          <FeatureCard icon="🔒" title="SSO & SAML" desc="Integrate with your corporate identity provider for single sign-on and automated provisioning." />
          <FeatureCard icon="📋" title="Audit Logs" desc="Full audit trail of every action across the workspace for compliance and security reviews." />
          <FeatureCard icon="👥" title="Advanced Permissions" desc="Define custom roles and permissions at workspace, project, and task level for total control." />
          <FeatureCard icon="📊" title="Executive Dashboards" desc="Cross-workspace reporting for leadership teams to see the full company-wide picture." />
          <FeatureCard icon="🤝" title="Dedicated Support" desc="Priority onboarding, a dedicated customer success manager, and 24/7 SLA-backed support." />
        </div>
        <CTA bg="bg-blue-50" textColor="text-blue-900" btnColor="bg-blue-700" title="Built for enterprise scale." desc="Contact us for a custom enterprise plan and dedicated onboarding." btnLabel="Talk to Sales" />
      </>
    ),
  },
  startup: {
    badge: "Solutions / Companies",
    title: "KaryaUp for Startups",
    subtitle: "Move fast and stay organized. KaryaUp gives startups the structure they need without slowing them down.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon="🚀" title="Quick Setup" desc="Get your workspace up and running in minutes with pre-built startup templates." />
          <FeatureCard icon="💸" title="Startup Pricing" desc="Affordable plans designed for small teams and early-stage companies with big ambitions." />
          <FeatureCard icon="⚡" title="Move Fast" desc="Lightweight, flexible tools that don't slow you down with unnecessary complexity." />
          <FeatureCard icon="📈" title="Scale With You" desc="As your team grows, KaryaUp grows with you — add features and seats on demand." />
          <FeatureCard icon="🤝" title="Investor-Ready Reports" desc="Generate clean progress reports and OKR summaries for board updates and investor meetings." />
          <FeatureCard icon="🏆" title="All-in-One" desc="Replace 5 different tools with KaryaUp. One subscription, one login, one source of truth." />
        </div>
        <CTA bg="bg-orange-50" textColor="text-orange-900" btnColor="bg-orange-600" title="Built for builders." desc="Join thousands of startups who ship faster with KaryaUp." btnLabel="Start Free" />
      </>
    ),
  },
  "non-profit": {
    badge: "Solutions / Companies",
    title: "KaryaUp for Non-Profits",
    subtitle: "Maximize your impact with organized teams, transparent reporting, and efficient program management.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon="❤️" title="Program Management" desc="Manage programs and initiatives with clear tasks, timelines, and outcome tracking." />
          <FeatureCard icon="🤝" title="Volunteer Coordination" desc="Coordinate volunteer schedules, tasks, and communications in one organized workspace." />
          <FeatureCard icon="📊" title="Impact Dashboards" desc="Track program outcomes and beneficiary metrics to demonstrate impact to donors and boards." />
          <FeatureCard icon="💰" title="Grant Tracking" desc="Manage grant applications, deadlines, deliverables, and compliance reports." />
          <FeatureCard icon="📣" title="Campaign Management" desc="Organize fundraising campaigns with task checklists, timelines, and team assignments." />
          <FeatureCard icon="💸" title="Special Pricing" desc="Non-profit discounts available to help you do more with every dollar." />
        </div>
        <CTA bg="bg-rose-50" textColor="text-rose-900" btnColor="bg-rose-600" title="Do more good, more efficiently." desc="Apply for our non-profit program and get 50% off any plan." btnLabel="Apply Now" />
      </>
    ),
  },
  education: {
    badge: "Solutions / Companies",
    title: "KaryaUp for Education",
    subtitle: "Empower educators, administrators, and students with organized workflows and transparent communication.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon="🎓" title="Course Management" desc="Organize course materials, assignment deadlines, and grading tasks in one structured workspace." />
          <FeatureCard icon="📚" title="Curriculum Planning" desc="Plan and track curriculum development across departments with collaborative workflows." />
          <FeatureCard icon="👩‍🏫" title="Faculty Collaboration" desc="Enable faculty to share resources, coordinate events, and manage departmental tasks together." />
          <FeatureCard icon="📅" title="Academic Calendar" desc="Sync all academic events, exam schedules, and submission deadlines to a shared calendar." />
          <FeatureCard icon="📊" title="Enrollment Dashboards" desc="Track enrollment metrics, program completions, and student progress at a glance." />
          <FeatureCard icon="💸" title="Education Pricing" desc="Significant discounts for accredited educational institutions — contact us to apply." />
        </div>
        <CTA bg="bg-yellow-50" textColor="text-yellow-900" btnColor="bg-yellow-600" title="Organized education, better outcomes." desc="Get KaryaUp for your institution with an education discount." btnLabel="Learn More" />
      </>
    ),
  },
  agency: {
    badge: "Solutions / Companies",
    title: "KaryaUp for Agencies",
    subtitle: "Run multiple client projects simultaneously with complete visibility, client portals, and accurate billing.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon="🗂️" title="Multi-Client Workspace" desc="Keep client work neatly separated in dedicated spaces while managing everything in one login." />
          <FeatureCard icon="👁️" title="Client Portal" desc="Give clients a white-labelled view of their project progress without exposing internal details." />
          <FeatureCard icon="🧾" title="Billable Hours" desc="Track time per client, mark hours as billable, and generate invoices with one click." />
          <FeatureCard icon="📅" title="Delivery Timelines" desc="Manage campaign and project delivery deadlines across all clients on a unified timeline." />
          <FeatureCard icon="📊" title="Agency Dashboards" desc="Monitor project health, team utilization, and revenue across all accounts in real time." />
          <FeatureCard icon="🤝" title="Freelancer Management" desc="Invite contractors and freelancers into projects with limited access and time tracking." />
        </div>
        <CTA bg="bg-violet-50" textColor="text-violet-900" btnColor="bg-violet-600" title="Built for client-facing teams." desc="Manage every client, every deadline, every deliverable in one place." btnLabel="Start Free" />
      </>
    ),
  },
  // Templates
  "templates/project-management": {
    badge: "Templates",
    title: "Project Management Templates",
    subtitle: "Kick-start any project with ready-made templates designed for speed, clarity, and best practices.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon="📋" title="Agile Sprint Board" desc="Pre-built kanban board with sprints, backlog, and done columns ready for your team." />
          <FeatureCard icon="🗺️" title="Gantt Project Plan" desc="A structured Gantt template with milestones and dependencies for classic project management." />
          <FeatureCard icon="🔁" title="Waterfall Template" desc="Manage sequential phase-based projects with this classic waterfall planning template." />
          <FeatureCard icon="🎯" title="OKR Tracker" desc="Set quarterly objectives and key results and track progress toward every goal." />
          <FeatureCard icon="🐛" title="Bug Report Template" desc="Structured bug reporting with severity, steps to reproduce, and resolution tracking." />
          <FeatureCard icon="🏁" title="Project Kickoff" desc="Start every project right with this team-aligned kickoff checklist and brief template." />
        </div>
        <CTA bg="bg-blue-50" textColor="text-blue-900" btnColor="bg-blue-600" title="Skip setup, start working faster." desc="Import any template and customize it for your team in minutes." btnLabel="Browse All Templates" />
      </>
    ),
  },
  "templates/crm": {
    badge: "Templates",
    title: "Sales / CRM Templates",
    subtitle: "Manage your entire sales pipeline, from lead generation to deal close, with structured, customizable templates.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon="📩" title="Lead Tracking" desc="Track leads from source to qualified opportunity with a structured pipeline board." />
          <FeatureCard icon="🤝" title="Deal Pipeline" desc="Manage deals through negotiation, proposal, and close stages with clear status tracking." />
          <FeatureCard icon="📅" title="Follow-Up Scheduler" desc="Never miss a follow-up with automatic reminders tied to deal stages and contact dates." />
          <FeatureCard icon="📊" title="Sales Dashboard" desc="Monitor your pipeline value, win rate, and monthly revenue targets in one view." />
          <FeatureCard icon="🧾" title="Proposal Tracker" desc="Track every proposal from sent to signed and link them to contacts and opportunities." />
          <FeatureCard icon="📨" title="Contact Management" desc="Maintain a structured contact database with history, notes, and linked deals." />
        </div>
        <CTA bg="bg-orange-50" textColor="text-orange-900" btnColor="bg-orange-600" title="Close more deals, lose less context." desc="Use our CRM templates to build a sales workflow that works." btnLabel="Use This Template" />
      </>
    ),
  },
  "templates/marketing": {
    badge: "Templates",
    title: "Marketing Templates",
    subtitle: "Launch campaigns, manage content, and measure results with ready-to-use marketing templates.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon="📣" title="Campaign Planner" desc="Plan full marketing campaigns from brief to launch with milestones and task assignments." />
          <FeatureCard icon="🗓️" title="Content Calendar" desc="Keep your editorial and social content organized in a shared calendar all year long." />
          <FeatureCard icon="📧" title="Email Campaign" desc="Plan and manage every email campaign with segments, copy, design, and send-date tracking." />
          <FeatureCard icon="📱" title="Social Media Plan" desc="Schedule posts, assign copy and creative, and track engagement goals per channel." />
          <FeatureCard icon="📊" title="Campaign Report" desc="Auto-generate campaign performance summaries with metrics from your dashboard." />
          <FeatureCard icon="🚀" title="Product Launch" desc="The complete product launch template — from pre-launch tasks to post-launch review." />
        </div>
        <CTA bg="bg-indigo-50" textColor="text-indigo-900" btnColor="bg-indigo-600" title="Your marketing, organized and on time." desc="Use our marketing templates and ship campaigns that hit their deadlines." btnLabel="Use This Template" />
      </>
    ),
  },
};

const allSections = [
  { group: "For Teams", items: [
    { label: "Project Management", to: "/solutions/project-management", icon: "📋" },
    { label: "Product Development", to: "/solutions/product-development", icon: "🛠️" },
    { label: "Operations", to: "/solutions/operations", icon: "⚙️" },
    { label: "IT", to: "/solutions/it", icon: "🖥️" },
    { label: "Marketing", to: "/solutions/marketing", icon: "📣" },
    { label: "Human Resources", to: "/solutions/hr", icon: "🤝" },
  ]},
  { group: "For Companies", items: [
    { label: "Enterprise", to: "/solutions/enterprise", icon: "🏢" },
    { label: "Startup", to: "/solutions/startup", icon: "🚀" },
    { label: "Non-Profit", to: "/solutions/non-profit", icon: "❤️" },
    { label: "Education", to: "/solutions/education", icon: "🎓" },
    { label: "Agency", to: "/solutions/agency", icon: "🗂️" },
  ]},
  { group: "Templates", items: [
    { label: "Project Management", to: "/solutions/templates/project-management", icon: "📋" },
    { label: "Sales/CRM", to: "/solutions/templates/crm", icon: "🤝" },
    { label: "Marketing", to: "/solutions/templates/marketing", icon: "📣" },
  ]},
];

export default function Solutions() {
  const params = useParams();
  // If we came from /solutions/templates/:page, params.page is the template name
  // We detect this by checking if the parent route was /solutions/templates/...
  // Since App.jsx defines /solutions/templates/:page as a separate route, params.page = template slug
  // We distinguish by checking window.location.pathname
  const path = window.location.pathname; // e.g. /solutions/templates/crm
  let sectionKey = params.page || "";
  if (path.includes("/solutions/templates/")) {
    sectionKey = `templates/${params.page}`;
  }
  const section = sectionKey ? sections[sectionKey] : null;

  if (section) {
    return (
      <SubPageLayout badge={section.badge} title={section.title} subtitle={section.subtitle}>
        {section.content}
        <div className="mt-12 pt-10 border-t border-gray-100">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Explore other solutions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {allSections.flatMap(g => g.items).filter(i => !i.to.endsWith(`/${rawPage}`)).map((item) => (
              <Link key={item.to} to={item.to} className="flex items-center gap-2 text-sm text-slate-700 hover:text-primary font-medium bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100">
                <span>{item.icon}</span> {item.label}
              </Link>
            ))}
          </div>
        </div>
      </SubPageLayout>
    );
  }

  return (
    <SubPageLayout badge="Solutions" title="Solutions for Every Team" subtitle="KaryaUp adapts to how your team works. Find a workflow built for your use case.">
      {allSections.map((group) => (
        <div key={group.group} className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{group.group}</h2>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item) => (
              <Link key={item.to} to={item.to} className="group relative">
                <TiltCard className="rounded-[2rem] bg-white border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:border-purple-200/50 hover:shadow-xl">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-purple-50 text-2xl group-hover:scale-110 group-hover:bg-purple-100 transition-all duration-300 shadow-sm ring-1 ring-purple-100/50">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <span className="block font-black text-slate-900 text-lg group-hover:text-purple-700 transition-colors">{item.label}</span>
                      <span className="flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase tracking-wider mt-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                        Explore <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </SubPageLayout>
  );
}
