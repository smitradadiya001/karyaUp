import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, CheckCircle2,
    FolderKanban, Megaphone, Cpu, Monitor, Users, Crown,
    Bot,
} from 'lucide-react';

/* ── Team data ── */
const teams = [
    {
        id: 'projects',
        tab: 'Projects',
        icon: FolderKanban,
        title: 'Deliver projects on time,',
        titleHighlight: 'every time',
        description:
            'Plan, track, and manage any project with powerful task management, timelines, and real-time collaboration — all in one workspace.',

        bullets: [
            'Automate task assignments + deadlines',
            'Track progress with real-time dashboards',
            'Collaborate across departments seamlessly',
        ],
        agents: [
            { name: 'Sprint Agent plans iterations', color: '#7b68ee' },
            { name: 'Task Agent auto-assigns work', color: '#f59e0b' },
            { name: 'Timeline Agent flags delays', color: '#10b981' },
            { name: 'Reports Agent generates summaries', color: '#ef4444' },
        ],
    },
    {
        id: 'marketing',
        tab: 'Marketing',
        icon: Megaphone,
        title: "Maximize marketing's impact",
        titleHighlight: 'and results',
        description:
            'Run campaigns, track performance, and align your marketing team around measurable outcomes — from ideation to execution.',

        bullets: [
            'Plan campaigns with content calendars',
            'Track ROI with real-time analytics',
            'Streamline creative approvals + reviews',
        ],
        agents: [
            { name: 'Campaign Agent schedules launches', color: '#e879f9' },
            { name: 'Content Agent drafts copy', color: '#7b68ee' },
            { name: 'Analytics Agent tracks metrics', color: '#f59e0b' },
            { name: 'Social Agent manages channels', color: '#10b981' },
        ],
    },
    {
        id: 'product',
        tab: 'Product & Eng',
        icon: Cpu,
        title: 'Ship faster,',
        titleHighlight: 'more reliable software',
        description:
            'Align product roadmaps with engineering sprints — manage backlogs, track bugs, and deploy with confidence.',

        bullets: [
            'Manage backlogs + sprint planning',
            'Track bugs with automated triage',
            'Connect roadmaps to daily work',
        ],
        agents: [
            { name: 'Backlog Agent prioritizes features', color: '#6366f1' },
            { name: 'QA Agent triages bug reports', color: '#ef4444' },
            { name: 'Deploy Agent tracks releases', color: '#10b981' },
            { name: 'Docs Agent updates changelogs', color: '#f59e0b' },
        ],
    },
    {
        id: 'it',
        tab: 'IT',
        icon: Monitor,
        title: 'Create the systems,',
        titleHighlight: 'for scale',
        description:
            'Streamline internal support processes and external vendor relationship protocols in a single, unified workspace.',

        bullets: [
            'Manage vendors + budgeting',
            'Run tight asset management',
            'Streamline contracts + procurement',
        ],
        agents: [
            { name: 'Assets Agent tracks inventory', color: '#7b68ee' },
            { name: 'RFP Agent manages reqs docs', color: '#f59e0b' },
            { name: 'Contracts Agent standardizes terms', color: '#e879f9' },
            { name: 'Live Intel Agent identifies redundancies', color: '#ef4444' },
        ],
    },
    {
        id: 'hr',
        tab: 'HR',
        icon: Users,
        title: 'Build the processes',
        titleHighlight: 'that power your people',
        description:
            'Manage hiring pipelines, onboarding workflows, and employee engagement — all with AI-powered automation.',

        bullets: [
            'Automate onboarding checklists',
            'Track employee leave + attendance',
            'Manage salary reviews + appraisals',
        ],
        agents: [
            { name: 'Hiring Agent screens applicants', color: '#10b981' },
            { name: 'Onboard Agent sets up new hires', color: '#7b68ee' },
            { name: 'Leave Agent manages time-off', color: '#f59e0b' },
            { name: 'Payroll Agent processes salaries', color: '#ef4444' },
        ],
    },
    {
        id: 'leadership',
        tab: 'Leadership',
        icon: Crown,
        title: 'Close the strategy-',
        titleHighlight: 'execution gap',
        description:
            'Get real-time visibility across every team, project, and KPI — make data-driven decisions at the speed of business.',

        bullets: [
            'Track company-wide OKRs + KPIs',
            'Get executive dashboards at a glance',
            'Align team goals to business outcomes',
        ],
        agents: [
            { name: 'Strategy Agent aligns OKRs', color: '#6366f1' },
            { name: 'Insights Agent surfaces trends', color: '#f59e0b' },
            { name: 'Forecast Agent predicts outcomes', color: '#10b981' },
            { name: 'Board Agent prepares reports', color: '#e879f9' },
        ],
    },
];

/* ── Avatar placeholder ── */
const AgentAvatar = ({ color }) => (
    <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}20`, border: `2px solid ${color}40` }}
    >
        <Bot size={18} style={{ color }} />
    </div>
);

const TeamSolutions = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const active = teams[activeIdx];

    return (
        <section className="py-24 bg-[white]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-4">
                        KaryaUp Solution for <span className="italic font-black">every</span> team
                    </h2>
                    <p className="text-gray-500 text-lg font-medium">
                        Your key workflows, powered by KaryaUp Agents.
                    </p>
                </motion.div>

                {/* Tab bar */}
                <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-14">
                    {teams.map((team, idx) => (
                        <button
                            key={team.id}
                            onClick={() => setActiveIdx(idx)}
                            className="relative px-3 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300"
                            style={{
                                background: activeIdx === idx ? '#1a1a2e' : 'transparent',
                                color: activeIdx === idx ? '#fff' : '#555',
                                border: activeIdx === idx ? '1px solid #1a1a2e' : '1px solid #ddd',
                            }}
                        >
                            {team.tab}
                        </button>
                    ))}
                </div>

                {/* Content area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35 }}
                        className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-sm border border-gray-100"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Left side */}
                            <div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
                                    {active.title}
                                    <br />
                                    <span className="text-gray-400 italic">{active.titleHighlight}</span>
                                </h3>
                                <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
                                    {active.description}
                                </p>

                                {/* Replaces */}


                                {/* Bullet list */}
                                <ul className="space-y-3">
                                    {active.bullets.map((b) => (
                                        <li key={b} className="flex items-start gap-2.5 text-gray-600 text-sm font-medium">
                                            <CheckCircle2 size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right side — agent cards */}
                            <div className="flex flex-col gap-3">
                                {active.agents.map((agent, i) => (
                                    <motion.div
                                        key={agent.name}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1, duration: 0.35 }}
                                        className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100/80 rounded-2xl px-5 py-4 transition-colors cursor-default border border-gray-100"
                                    >
                                        <AgentAvatar color={agent.color} />
                                        <span className="text-sm font-bold text-gray-700">{agent.name}</span>
                                    </motion.div>
                                ))}

                                {/* CTA button */}
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="mt-2 self-start inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
                                >
                                    Explore solution <ArrowRight size={14} />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default TeamSolutions;
