import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Kanban, Briefcase, Zap, BarChart3, TrendingUp, ArrowRight
} from 'lucide-react';

/* ── Card data ── */
const features = [
  {
    icon: LayoutDashboard,
    tag: 'Dashboard',
    title: 'A live view of your entire company.',
    label: 'Track',
    desc: 'Tasks, deadlines, team workload, performance — in real time.',
    stat: '94%', statLabel: 'on-time delivery',
    accent: '#7e22ce',
    shine: 'from-purple-500/10 via-purple-200/5 to-transparent',
    tagBg: 'bg-purple-100 text-purple-700',
  },
  {
    icon: Kanban,
    tag: 'Boards & Timelines',
    title: 'Flexible views for every workflow.',
    label: 'Switch',
    desc: 'Switch between planning and execution instantly.',
    stat: '5+', statLabel: 'view modes',
    accent: '#9333ea',
    shine: 'from-violet-500/10 via-violet-200/5 to-transparent',
    tagBg: 'bg-violet-100 text-violet-700',
  },
  {
    icon: Briefcase,
    tag: 'CRM Pipeline',
    title: 'From lead to delivery — fully connected.',
    label: 'Track',
    desc: 'Track revenue alongside execution.',
    stat: '+23%', statLabel: 'win rate',
    accent: '#a855f7',
    shine: 'from-fuchsia-500/10 via-fuchsia-200/5 to-transparent',
    tagBg: 'bg-fuchsia-100 text-fuchsia-700',
  },
  {
    icon: Zap,
    tag: 'Automation Flows',
    title: 'Set rules once. Let work move automatically.',
    label: 'Save',
    desc: 'Reduce manual effort across operations.',
    stat: '10+', statLabel: 'hrs saved/week',
    accent: '#7c3aed',
    shine: 'from-purple-600/10 via-purple-300/5 to-transparent',
    tagBg: 'bg-purple-100 text-purple-700',
  },
  {
    icon: BarChart3,
    tag: 'Analytics',
    title: 'Clear, actionable insights.',
    label: 'Insight',
    desc: "Know what's working. Fix what's not.",
    stat: '<1s', statLabel: 'data lag',
    accent: '#6d28d9',
    shine: 'from-violet-600/10 via-violet-300/5 to-transparent',
    tagBg: 'bg-violet-100 text-violet-700',
  },
];

const rowVariants = {
  hiddenLeft: { opacity: 0, x: -140 },
  hiddenRight: { opacity: 0, x: 140 },
  show: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Full-width rectangle row (smooth slide-in) ── */
const FeatureRow = ({ feature, index }) => {
  const Icon = feature.icon;
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      variants={rowVariants}
      initial={fromLeft ? 'hiddenLeft' : 'hiddenRight'}
      whileInView="show"
      viewport={{ once: false, amount: 0.35 }}
      className="w-full"
    >
      <div
        className="relative overflow-hidden bg-white border border-slate-100 rounded-2xl px-5 sm:px-8 py-2.5 sm:py-5"
        style={{ boxShadow: '0 4px 20px -8px rgba(2,6,23,0.12)' }}
      >
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-6 text-center sm:text-left items-center sm:items-start">

          {/* Icon */}
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border"
            style={{
              borderColor: `${feature.accent}33`,
              background: `linear-gradient(135deg, ${feature.accent}18, rgba(255,255,255,0.95))`,
              boxShadow: `0 14px 34px -18px ${feature.accent}88, 0 8px 18px -12px rgba(2,6,23,0.16)`,
            }}
          >
            <Icon size={17} style={{ color: feature.accent }} />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-0.5">
              <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: feature.accent }}>
                {feature.tag}
              </span>
            </div>
            <h3 className="text-[15px] font-black text-slate-900 leading-snug">
              {feature.title}
            </h3>
            <p className="text-slate-500 text-xs font-medium mt-0.5">
              <strong className="text-slate-700">{feature.label}:</strong> {feature.desc}
            </p>
          </div>

          {/* Stat (avoid "button" look) */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <div
              className="text-center sm:text-right"
              style={{
                borderColor: `${feature.accent}30`,
              }}
            >
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Metric
              </div>
              <div className="flex items-baseline justify-center sm:justify-end gap-2">
                <span className="text-xl sm:text-2xl font-black leading-[1.05]" style={{ color: feature.accent }}>
                  {feature.stat}
                </span>
                <span className="text-slate-500 text-[11px] sm:text-xs font-semibold">
                  {feature.statLabel}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

const FeatureOverview = () => (
  <section className="py-6 sm:py-14 sm:pb-20 bg-white relative px-2 sm:px-0">
    <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-5 sm:mb-8"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] sm:text-xs font-bold mb-3 uppercase tracking-widest">
          <TrendingUp size={12} /> Product Features
        </span>

        <h2 className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.05] tracking-normal mb-3">
          See Everything.{' '}
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
            animate={{ backgroundPosition: ["0% center", "-200% center"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            Instantly.
          </motion.span>
        </h2>
        <p className="text-slate-500 text-base sm:text-lg font-medium">
          One platform. Every view — always current.
        </p>
      </motion.div>

      {/* Full-width rows */}
      <div className="space-y-3 sm:space-y-8 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <FeatureRow key={f.tag} feature={f} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default FeatureOverview;
