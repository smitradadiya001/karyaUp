import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Briefcase,
  CalendarDays,
  Check,
  ChevronRight,
  CreditCard,
  Gauge,
  LayoutDashboard,
  MessageSquare,
  Search,
  Users,
} from "lucide-react";
import FeatureCTA from "../../components/FeatureCTA";
import dashboardMockup from "../../assets/newsletter_illustration_v2.png";

const guideSections = [
  {
    id: "getting-started",
    nav: "Getting Started",
    eyebrow: "Getting Started with KaryaUp",
    title: "Start fast and structure your workspace the right way",
    intro:
      "Launch KaryaUp with the right setup from day one so your team can work in a structured, professional workspace.",
    icon: Briefcase,
    blocks: [
      {
        title: "Rapid Workspace Setup",
        desc: "Set up your personalized workspace in just a few clicks and begin managing projects professionally from day one.",
      },
      {
        title: "Invite Team Members & Assign Roles",
        desc: "Invite your team with a secure link and assign roles like Boss, Manager, or Employee for clear collaboration.",
      },
      {
        title: "Centralized Brand Management",
        desc: "Manage multiple brands from one platform without switching tools or duplicating setup.",
      },
    ],
  },
  {
    id: "task-management",
    nav: "Task Management",
    eyebrow: "Task & Project Management",
    title: "Turn projects into trackable work that never gets lost",
    intro:
      "Break work into projects, tasks, schedules, and repeatable systems so execution stays visible across the team.",
    icon: Check,
    blocks: [
      {
        title: "Create and Manage Projects",
        desc: "Organize work with structured projects and break execution into manageable tasks.",
      },
      {
        title: "Task Assignment & Tracking",
        desc: "Assign tasks, set priorities, and monitor progress in real time.",
      },
      {
        title: "Task Completion Alerts",
        desc: "Receive instant notifications when tasks are completed.",
      },
      {
        title: "Overdue Task Reminders",
        desc: "Prevent missed deadlines with automatic reminders for pending work.",
      },
      {
        title: "Task Automation & Repetition",
        desc: "Automate recurring tasks, copy repeated workflows, and schedule work by day or month.",
      },
    ],
  },
  {
    id: "dashboard-customization",
    nav: "Dashboard & Customization",
    eyebrow: "Dashboard & Customization",
    title: "Shape the workspace around the way your team actually works",
    intro:
      "Customize dashboards, navigation, quick actions, and categories so KaryaUp feels tailored to your workflow.",
    icon: LayoutDashboard,
    blocks: [
      {
        title: "Customizable Dashboard",
        desc: "Add widgets, resize components, and rearrange layout to fit your role and working style.",
      },
      {
        title: "Quick Actions",
        desc: "Create tasks, notes, projects, or messages instantly from one click.",
      },
      {
        title: "Custom Categories",
        desc: "Organize your workspace with personalized categories for better focus and faster navigation.",
      },
      {
        title: "Light & Dark Themes",
        desc: "Switch themes for a personalized visual experience across the workspace.",
      },
      {
        title: "Custom Bottom Navigation",
        desc: "Drag and drop tools into your bottom bar for faster daily access.",
      },
    ],
  },
  {
    id: "collaboration",
    nav: "Collaboration",
    eyebrow: "Team Collaboration",
    title: "Keep conversations, notes, and decisions connected to execution",
    intro:
      "Collaborate inside the same workspace where work happens, so nothing disappears into disconnected chats or tools.",
    icon: MessageSquare,
    blocks: [
      {
        title: "Real-Time Chat",
        desc: "Communicate instantly with your team without leaving the workspace.",
      },
      {
        title: "Project-Based Groups",
        desc: "Create focused groups for each project to keep collaboration clean and contextual.",
      },
      {
        title: "Notes Management",
        desc: "Store important notes and access them anytime without hunting through scattered messages.",
      },
    ],
  },
  {
    id: "integrations",
    nav: "Integrations",
    eyebrow: "Scheduling & Integrations",
    title: "Connect calendars, meetings, and your daily scheduling flow",
    intro:
      "Plan visually, sync with Google tools, and keep meetings aligned with project execution.",
    icon: CalendarDays,
    blocks: [
      {
        title: "Drag-and-Drop Calendar",
        desc: "Plan your schedule visually by dragging tasks directly into the calendar.",
      },
      {
        title: "Google Calendar & Meet Integration",
        desc: "Sync tasks and meetings seamlessly with Google Calendar and Google Meet.",
      },
    ],
  },
  {
    id: "team-management",
    nav: "Team Management",
    eyebrow: "Team & Employee Management",
    title: "Run your workforce with clarity across roles, time, pay, and leave",
    intro:
      "Manage people operations from one place with admin controls, attendance, payroll, and leave workflows.",
    icon: Users,
    blocks: [
      {
        title: "Advanced Admin Controls",
        desc: "Manage team members, assign roles, and control workspace operations from the Boss role.",
      },
      {
        title: "Attendance Tracking",
        desc: "Monitor employee attendance in real time.",
      },
      {
        title: "Punch In / Punch Out System",
        desc: "Track working hours accurately with easy check-in and check-out flows.",
      },
      {
        title: "Salary Management",
        desc: "Assign hourly salaries and manage payments efficiently.",
      },
      {
        title: "Leave Management",
        desc: "Handle leave requests and approvals without manual back-and-forth.",
      },
    ],
  },
  {
    id: "analytics",
    nav: "Analytics",
    eyebrow: "Analytics & Reporting",
    title: "Measure productivity, attendance, profitability, and work patterns",
    intro:
      "Use dashboards and reports to understand performance trends and make better operational decisions.",
    icon: Gauge,
    blocks: [
      {
        title: "Performance Dashboard",
        desc: "Visualize performance with pie charts, bar graphs, and custom reports.",
      },
      {
        title: "Attendance Analytics",
        desc: "Analyze attendance trends and patterns with clear reporting.",
      },
      {
        title: "Work Time Reports",
        desc: "Generate downloadable reports for employee work hours.",
      },
      {
        title: "Profit Tracking",
        desc: "Track business profit and employee productivity in one place.",
      },
      {
        title: "Workload Heatmap",
        desc: "Distribute tasks more efficiently with visual workload analysis.",
      },
    ],
  },
  {
    id: "crm",
    nav: "CRM",
    eyebrow: "CRM & Client Management",
    title: "Manage leads, clients, quotations, and portals from one system",
    intro:
      "Bring client operations into the same workflow so sales, service, and delivery stay aligned.",
    icon: CreditCard,
    blocks: [
      {
        title: "CRM & Client Handling",
        desc: "Manage leads, clients, and communication from one organized system.",
      },
      {
        title: "Send Quotations",
        desc: "Send professional quotations directly from the CRM workflow.",
      },
      {
        title: "Fully Customizable CRM",
        desc: "Adapt CRM workflows to fit your business model.",
      },
      {
        title: "Custom Client Portals",
        desc: "Create personalized client interfaces for smoother collaboration.",
      },
    ],
  },
  {
    id: "automation-ai",
    nav: "Automation & AI",
    eyebrow: "Automation & AI",
    title: "Reduce repetitive work and make faster, smarter decisions",
    intro:
      "Use automation, reminders, and AI-powered capabilities to cut manual effort and improve consistency.",
    icon: Bot,
    blocks: [
      {
        title: "Advanced Automation",
        desc: "Auto-assign tasks, set reminders, and reassign workflows without manual intervention.",
      },
      {
        title: "Intelligent Reminder System",
        desc: "Stay on track with smart, configurable reminders.",
      },
      {
        title: "AI-Powered Features",
        desc: "Automate workflows, improve productivity, and make better decisions with AI.",
      },
      {
        title: "Whiteboard & Security",
        desc: "Collaborate visually with a built-in whiteboard and protect your data with enterprise-grade security.",
      },
    ],
  },
];

const bestPractices = [
  "Organize tasks using categories and priorities",
  "Use automation to reduce repetitive work",
  "Track performance regularly using analytics",
  "Use groups and chat for better team communication",
  "Customize your dashboard for faster workflow",
];

export default function Guides() {
  const [activeSection, setActiveSection] = useState(guideSections[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = useMemo(
    () => guideSections.map(({ id, nav, icon }) => ({ id, nav, icon })),
    []
  );

  useEffect(() => {
    const sections = guideSections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.15, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    const match = guideSections.find(
      (section) =>
        section.nav.toLowerCase().includes(query) ||
        section.title.toLowerCase().includes(query) ||
        section.blocks.some(
          (block) =>
            block.title.toLowerCase().includes(query) ||
            block.desc.toLowerCase().includes(query)
        )
    );

    if (match) {
      document.getElementById(match.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 h-[520px] w-[520px] translate-x-1/4 -translate-y-1/4 rounded-full bg-purple-100/70 blur-[120px]" />
        <div className="absolute left-0 bottom-0 -z-10 h-[420px] w-[420px] -translate-x-1/4 translate-y-1/4 rounded-full bg-cyan-100/60 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-black uppercase tracking-widest text-emerald-700"
              >
                Resources <span className="opacity-60">/</span> Guides
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.03]"
              >
                KaryaUp Guides
                <span className="block">
                  and{" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Resources
                  </motion.span>
                </span>
              </motion.h1>

              <p className="mt-6 text-lg font-medium leading-relaxed text-slate-600 max-w-2xl mx-auto lg:mx-0">
                Master your workflow. Manage smarter. Scale faster. Learn how to use KaryaUp to streamline tasks,
                manage teams, and grow your business with powerful tools and automation.
              </p>

              <p className="mt-4 text-sm sm:text-base font-bold text-slate-500">
                Search guides, explore features, and become a productivity pro.
              </p>

              <form onSubmit={handleSearch} className="mt-8 max-w-xl mx-auto lg:mx-0">
                <div className="flex flex-col sm:flex-row gap-3 rounded-[1.6rem] border border-slate-200 bg-white p-3 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.18)]">
                  <div className="flex flex-1 items-center gap-3 rounded-[1.1rem] px-4 py-3 bg-slate-50">
                    <Search className="h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Search guides, features, or workflows"
                      className="w-full bg-transparent outline-none text-sm font-medium text-slate-700 placeholder:text-slate-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-[1.1rem] bg-slate-900 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-slate-800"
                  >
                    Search guides
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2.8rem] border border-slate-200 bg-[#090b16] p-6 shadow-[0_40px_90px_-38px_rgba(15,23,42,0.55)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.22),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_22%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.18),transparent_24%)]" />
                <div className="absolute inset-0 opacity-[0.12]">
                  <svg className="h-full w-full">
                    <filter id="guidesNoise">
                      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#guidesNoise)" />
                  </svg>
                </div>

                <div className="relative z-10 grid gap-4">
                  <motion.div
                    animate={{ y: [0, -8, 0], rotate: [-1.5, 1.5, -1.5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="ml-auto w-[72%] rounded-[1.8rem] border border-white/10 bg-white/8 p-[1.5px]"
                  >
                    <div className="rounded-[calc(1.8rem-1.5px)] bg-[#121425]/92 p-5">
                      <div className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-300">Rapid setup</div>
                      <div className="mt-2 text-lg font-black text-white">Launch your workspace in minutes</div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0], rotate: [1.5, -1.5, 1.5] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[84%] rounded-[2rem] border border-[#8b5cf6]/35 bg-gradient-to-r from-[#8b5cf6] via-fuchsia-500 to-[#60a5fa] bg-[length:220%_220%] p-[1.5px] shadow-[0_0_70px_rgba(168,85,247,0.3)]"
                  >
                    <div className="rounded-[calc(2rem-1.5px)] bg-[#16182d]/95 p-7">
                      <div className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-300">
                        Productivity Guide
                      </div>
                      <div className="mt-3 text-3xl sm:text-4xl font-black leading-[1] tracking-tight text-white">
                        Learn the full
                        <span className="block">KaryaUp workflow</span>
                      </div>
                      <p className="mt-4 max-w-md text-sm font-medium leading-relaxed text-slate-300">
                        From setup and task execution to automation, CRM, analytics, and team operations.
                      </p>
                    </div>
                  </motion.div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Tasks & projects",
                      "Dashboards & themes",
                      "Attendance & salary",
                      "Automation & AI",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        animate={{ y: index % 2 === 0 ? [0, -6, 0] : [0, 6, 0] }}
                        transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                        className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                      >
                        <div className="text-sm font-black text-white">{item}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-16">
              {guideSections.map((section, sectionIndex) => {
                const SectionIcon = section.icon;
                return (
                  <section key={section.id} id={section.id} className="scroll-mt-32">
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: sectionIndex * 0.03 }}
                      className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_26px_60px_-44px_rgba(15,23,42,0.25)]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50 text-[#7e22ce]">
                          <SectionIcon className="h-5 w-5" />
                        </div>
                        <div className="text-[11px] font-black uppercase tracking-[0.22em] text-purple-700">
                          {section.eyebrow}
                        </div>
                      </div>

                      <h2 className="mt-5 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                        {section.title}
                      </h2>
                      <p className="mt-4 max-w-3xl text-base sm:text-lg font-medium leading-relaxed text-slate-600">
                        {section.intro}
                      </p>

                      <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {section.blocks.map((block) => (
                          <div
                            key={block.title}
                            className="rounded-[1.5rem] border border-slate-200 bg-slate-50/70 p-5"
                          >
                            <div className="text-lg font-black text-slate-900">{block.title}</div>
                            <p className="mt-3 text-sm font-medium leading-relaxed text-slate-500">
                              {block.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </section>
                );
              })}

              <section id="best-practices" className="scroll-mt-32">
                <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-6 sm:p-8 text-white shadow-[0_28px_70px_-40px_rgba(15,23,42,0.65)]">
                  <div className="text-[11px] font-black uppercase tracking-[0.22em] text-purple-300">
                    Best Practices for Using KaryaUp
                  </div>
                  <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight">
                    Build habits that make the platform work harder for your team
                  </h2>
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {bestPractices.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-[1.35rem] border border-white/10 bg-white/5 p-4">
                        <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-purple-400/20 text-purple-200">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <div className="font-medium leading-relaxed text-slate-200">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="rounded-[2rem] border border-slate-200 bg-white/90 backdrop-blur-xl p-4 shadow-[0_24px_60px_-44px_rgba(15,23,42,0.25)]">
                  <div className="rounded-[1.4rem] border border-slate-200 bg-white p-4 mb-2">
                    <div className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
                      Guides map
                    </div>
                    <div className="mt-2 text-2xl font-black leading-[1.05] text-slate-900">
                      KaryaUp workflow mastery
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    {navItems.map((item) => {
                      const NavIcon = item.icon;
                      const active = activeSection === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() =>
                            document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" })
                          }
                          className={`w-full flex items-start gap-3 rounded-[1.2rem] px-3.5 py-3 text-left transition-all ${
                            active
                              ? "bg-slate-900 text-white shadow-[0_16px_30px_-22px_rgba(15,23,42,0.7)]"
                              : "text-slate-500 hover:bg-slate-50"
                          }`}
                        >
                          <NavIcon className={`mt-0.5 h-4 w-4 ${active ? "text-purple-300" : "text-slate-400"}`} />
                          <span className="font-bold leading-snug">{item.nav}</span>
                          <ChevronRight className={`ml-auto h-4 w-4 ${active ? "text-purple-300" : "text-slate-300"}`} />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FeatureCTA
        title={<>Ready to get started <br /> with KaryaUp?</>}
        description="Take control of your workflow, boost team productivity, and manage everything in one place."
        buttonText="Start your workspace today"
        image={dashboardMockup}
        imageAlt="KaryaUp guides overview"
        containerClassName="mt-24 mb-0"
        imageClassName="w-full max-w-[760px]"
        imageOuterClassName="relative w-[102%] lg:w-[90%] translate-x-0 lg:translate-x-4"
      />
    </div>
  );
}
