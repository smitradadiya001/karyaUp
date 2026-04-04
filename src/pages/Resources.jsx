import React, { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, PlayCircle, BookOpen, MessageSquare } from "lucide-react";

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
  <div className="min-h-screen bg-white pt-28 md:pt-32 pb-20 relative overflow-hidden text-slate-900">
    {/* Ambient Background Glows */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-100/40 rounded-full blur-[120px] -z-10 animate-pulse" />
    <div className="absolute bottom-1/2 right-1/4 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px] -z-10" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 text-[11px] font-black tracking-widest uppercase rounded-full bg-violet-100 border border-violet-200 text-violet-700 shadow-sm"
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
                  className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-500 to-violet-600 bg-[length:200%_auto]"
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

const ArticleCard = ({ icon, title, desc, to, tag }) => (
  <Link key={title} to={to} className="group relative block h-full">
    <TiltCard className="group relative pt-10 pb-10 px-8 sm:px-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:border-violet-200/50 hover:shadow-xl h-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm ring-1 ring-violet-100/50">
          <span className="text-2xl filter group-hover:brightness-105 transition-all">{icon}</span>
        </div>
        {tag && (
          <span className="text-[10px] font-black uppercase tracking-widest bg-violet-50 text-violet-600 px-3 py-1.5 rounded-full border border-violet-100 group-hover:bg-violet-100 transition-colors">
            {tag}
          </span>
        )}
      </div>
      <h3 className="text-xl font-black text-slate-900 group-hover:text-violet-700 mb-3 transition-colors leading-snug">
        {title}
      </h3>
      <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed mb-8 flex-grow">
        {desc}
      </p>
      <div className="mt-auto flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
        Read Article <ArrowRight size={12} />
      </div>
    </TiltCard>
  </Link>
);

const sections = {
  blog: {
    badge: "Resources",
    title: "KaryaUp Blog",
    subtitle: "Practical articles on productivity, team management, and getting the most out of KaryaUp.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ArticleCard to="#" icon="✅" tag="Productivity" title="10 Ways to Cut Meeting Time in Half" desc="Discover how the most efficient teams run fewer, shorter, more effective meetings." />
        <ArticleCard to="#" icon="📊" tag="Management" title="How to Build a Team Dashboard That Actually Gets Used" desc="Most dashboards go unread. Here's how to build one your team checks every day." />
        <ArticleCard to="#" icon="⏱️" tag="Time Tracking" title="Why Your Team Underestimates Every Project" desc="The psychology behind planning fallacy and how to fix it with better data." />
        <ArticleCard to="#" icon="🤝" tag="Collaboration" title="Remote Team Communication: The Complete Playbook" desc="Tactics from remote-first companies on keeping distributed teams aligned and motivated." />
        <ArticleCard to="#" icon="🚀" tag="Growth" title="How Startups Use KaryaUp to Grow from 5 to 50 People" desc="Real workflows from fast-growing startups who scaled without adding management overhead." />
        <ArticleCard to="#" icon="⚡" tag="Automations" title="5 Automations Every Manager Should Set Up Today" desc="Cut repetitive admin work and let your team focus on what actually matters." />
      </div>
    ),
  },

  docs: {
    badge: "Resources",
    title: "Documentation",
    subtitle: "Detailed documentation on every feature, API, and configuration option in KaryaUp.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ArticleCard to="#" icon="🚀" tag="Getting Started" title="Quick Start Guide" desc="Set up your workspace, invite your team, and create your first project in under 10 minutes." />
        <ArticleCard to="#" icon="📋" tag="Tasks" title="Tasks & Subtasks" desc="Full documentation on creating, assigning, organizing, and automating tasks." />
        <ArticleCard to="#" icon="⏱️" tag="Time Tracking" title="Time Tracking Docs" desc="How to enable time tracking, use the timer, log time manually, and export timesheets." />
        <ArticleCard to="#" icon="🔗" tag="API" title="REST API Reference" desc="Complete API docs with endpoints, authentication, rate limits, and code examples in multiple languages." />
        <ArticleCard to="#" icon="⚡" tag="Automations" title="Automation Documentation" desc="Build, manage, and troubleshoot automation rules with our step-by-step documentation." />
        <ArticleCard to="#" icon="🔒" tag="Security" title="Security & Permissions" desc="Understand user roles, permission levels, SSO setup, and data security practices in KaryaUp." />
      </div>
    ),
  },
  demo: {
    badge: "Resources",
    title: "Live Demo",
    subtitle: "See KaryaUp in action with an interactive demo tailored to your team's needs.",
    content: (
      <div className="relative mt-8 sm:mt-12">
        <motion.div className="max-w-6xl mx-auto rounded-[2.5rem] sm:rounded-[4rem] p-10 sm:p-20 relative overflow-hidden text-center shadow-[0_40px_100px_-24px_rgba(124,58,237,0.3)] border border-violet-100/20">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-violet-700" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            <motion.div
              animate={{ x: [0, 100, -50], y: [0, -50, 100], scale: [1, 1.3, 0.9] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-fuchsia-500 rounded-full blur-[120px]"
            />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-[2rem] border border-white/20 backdrop-blur-xl mb-8 shadow-2xl">
              <PlayCircle size={40} className="text-white" />
            </div>
            <h3 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">Book a Live Demo</h3>
            <p className="text-white/80 font-medium text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Get a personalized walkthrough of KaryaUp with one of our product specialists. We'll tailor it to your team's specific workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/book-demo" className="group flex h-[3.4em] min-w-[14em] items-center justify-center rounded-[30em] bg-white font-black text-[15px] sm:text-[16px] text-violet-700 shadow-xl transition-all duration-300 active:scale-95">
                <span className="flex items-center gap-2">Schedule Session <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
              <Link to="/resources/tutorials" className="group flex h-[3.4em] min-w-[14em] items-center justify-center rounded-[30em] bg-violet-600/50 border border-white/30 font-black text-[15px] sm:text-[16px] text-white backdrop-blur-md shadow-xl transition-all duration-300 hover:bg-violet-600 active:scale-95">
                <span className="flex items-center gap-2">Watch Tutorials <PlayCircle size={18} /></span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },
  tutorials: {
    badge: "Resources",
    title: "Video Tutorials",
    subtitle: "Step-by-step video tutorials to help every team member get up to speed with KaryaUp fast.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { emoji: "▶️", title: "KaryaUp in 5 Minutes", duration: "5:12", level: "Beginner", desc: "The fastest way to understand what KaryaUp is and why your team will love it." },
          { emoji: "▶️", title: "Creating Your First Project", duration: "8:34", level: "Beginner", desc: "Watch us set up a real project from scratch — tasks, assignees, deadlines, and views." },
          { emoji: "▶️", title: "Mastering the Board View", duration: "11:20", level: "Intermediate", desc: "Learn to build powerful Kanban boards with automation, WIP limits, and custom columns." },
          { emoji: "▶️", title: "Time Tracking Deep Dive", duration: "9:45", level: "Intermediate", desc: "Everything you need to know about logging time, reviewing timesheets, and billing clients." },
          { emoji: "▶️", title: "Building Automations", duration: "14:02", level: "Advanced", desc: "Build no-code automations that run your team's repetitive workflows automatically." },
          { emoji: "▶️", title: "Admin & Permissions Guide", duration: "7:18", level: "Admin", desc: "How to configure workspace permissions, roles, SSO, and security settings." },
        ].map((v) => (
          <TiltCard key={v.title} className="group relative rounded-[2.5rem] bg-white border border-slate-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-violet-200">
            <div className="bg-violet-100/50 flex items-center justify-center h-48 text-6xl group-hover:bg-violet-100 transition-colors relative h-[240px]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5" />
              <PlayCircle size={64} className="text-violet-600 group-hover:scale-110 transition-transform drop-shadow-xl" strokeWidth={1} />
            </div>
            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.15em] bg-violet-100 text-violet-700 px-3 py-1.5 rounded-full border border-violet-200">{v.level}</span>
                <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                  <Sparkles size={12} /> {v.duration}
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 group-hover:text-violet-700 transition-colors mb-3">{v.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{v.desc}</p>
            </div>
          </TiltCard>
        ))}
      </div>
    ),
  },
};

const allResources = [
  { label: "Blog", to: "/resources/blog", icon: "📝" },
  { label: "Documentation", to: "/resources/docs", icon: "📄" },
  { label: "Book Demo", to: "/book-demo", icon: "📅" },
  { label: "Video Tutorials", to: "/resources/tutorials", icon: "▶️" },
];

export default function Resources() {
  const { page } = useParams();
  const section = page ? sections[page] : null;

  if (section) {
    return (
      <SubPageLayout badge={section.badge} title={section.title} subtitle={section.subtitle}>
        {section.content}
        <div className="mt-20 pt-10 border-t border-slate-100">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">More Resources</h3>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {allResources.filter(r => !r.to.endsWith(`/${page}`)).map((r) => (
              <Link key={r.to} to={r.to} className="group flex items-center gap-3 text-sm text-slate-600 hover:text-violet-700 font-black bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100 hover:border-violet-200 hover:bg-violet-50/50 hover:shadow-sm transition-all">
                <span className="text-xl group-hover:scale-110 transition-transform">{r.icon}</span> 
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </SubPageLayout>
    );
  }

  return (
    <SubPageLayout badge="Resources" title="Resources" subtitle="Everything you need to learn, grow, and get the most out of KaryaUp.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {allResources.map((r) => (
          <Link key={r.to} to={r.to} className="group relative">
            <TiltCard className="rounded-[2.5rem] bg-white border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:border-violet-200/50 hover:shadow-xl h-full">
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-violet-50 text-3xl group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 shadow-sm ring-1 ring-violet-100/50 mb-8">
                  {r.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-violet-700 transition-colors mb-2">{r.label}</h3>
                <span className="flex items-center gap-1.5 text-slate-400 text-[10px] font-black uppercase tracking-wider mt-auto opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                  Dive In <ArrowRight size={12} />
                </span>
              </div>
            </TiltCard>
          </Link>
        ))}
      </div>
    </SubPageLayout>
  );
}
