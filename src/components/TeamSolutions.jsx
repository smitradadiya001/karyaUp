import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight, CheckCircle2, FolderKanban, Clock, MessageSquare, Briefcase, Users, Zap, Bot
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/* ── Team data ── */
const teams = [
    {
        id: 'projects',
        tab: 'Project & Task',
        icon: FolderKanban,
        title: 'Project & Task',
        titleHighlight: 'Management',
        description:
            'Break work into clear, structured tasks with ownership and priorities.',
        replaces: ['Jira', 'Asana', 'Trello'],
        bullets: [
            'Outcome: Teams know exactly what to do next — every time.',
        ],
        agents: [
            { name: 'Sprint Agent plans iterations', color: '#7e22ce' },
            { name: 'Task Agent auto-assigns work', color: '#f59e0b' },
            { name: 'Timeline Agent flags delays', color: '#10b981' },
            { name: 'Reports Agent generates summaries', color: '#ef4444' },
        ],
    },
    {
        id: 'time',
        tab: 'Time Tracking',
        icon: Clock,
        title: 'Time',
        titleHighlight: 'Tracking',
        description:
            'Track time where work happens.',
        replaces: ['Harvest', 'Toggl', 'Clockify'],
        bullets: [
            'Insight: Understand where every hour goes — and improve planning accuracy by up to 40%.',
        ],
        agents: [
            { name: 'Time Agent logs hours automatically', color: '#e879f9' },
            { name: 'Capacity Agent balances workload', color: '#7e22ce' },
            { name: 'Report Agent highlights bottlenecks', color: '#f59e0b' },
            { name: 'Billing Agent calculates costs', color: '#10b981' },
        ],
    },
    {
        id: 'collaboration',
        tab: 'Collaboration',
        icon: MessageSquare,
        title: 'Team',
        titleHighlight: 'Collaboration',
        description:
            'Communication stays connected to work.',
        replaces: ['Slack', 'Loom', 'Notion'],
        bullets: [
            'Impact: Reduce internal follow-ups by 50%+',
        ],
        agents: [
            { name: 'Summary Agent catches you up', color: '#6366f1' },
            { name: 'Sync Agent coordinates meetings', color: '#ef4444' },
            { name: 'Draft Agent composes replies', color: '#10b981' },
            { name: 'Ping Agent alerts dependencies', color: '#f59e0b' },
        ],
    },
    {
        id: 'crm',
        tab: 'CRM & Sales',
        icon: Briefcase,
        title: 'CRM &',
        titleHighlight: 'Sales',
        description:
            'Manage leads, deals, and delivery in one flow.',
        replaces: ['Salesforce', 'HubSpot', 'Pipedrive'],
        bullets: [
            'Result: No disconnect between sales and execution.',
        ],
        agents: [
            { name: 'Lead Agent scores prospects', color: '#7e22ce' },
            { name: 'Nurture Agent sends follow-ups', color: '#f59e0b' },
            { name: 'Deal Agent forecasts revenue', color: '#e879f9' },
            { name: 'Handoff Agent briefs the team', color: '#ef4444' },
        ],
    },
    {
        id: 'hr',
        tab: 'HR & Team',
        icon: Users,
        title: 'HR & Team',
        titleHighlight: 'Management',
        description:
            'Control roles, access, attendance, and team structure.',
        replaces: ['Gusto', 'BambooHR', 'HiBob'],
        bullets: [
            'Clarity: One system to manage people and performance.',
        ],
        agents: [
            { name: 'Hiring Agent screens applicants', color: '#10b981' },
            { name: 'Onboard Agent sets up new hires', color: '#7e22ce' },
            { name: 'Leave Agent manages time-off', color: '#f59e0b' },
            { name: 'Payroll Agent processes salaries', color: '#ef4444' },
        ],
    },
    {
        id: 'automation',
        tab: 'Automation',
        icon: Zap,
        title: 'Workflow',
        titleHighlight: 'Automation',
        description:
            'Automate repetitive workflows.',
        replaces: ['Zapier', 'Make', 'Workato'],
        bullets: [
            'Efficiency: Save 10+ hours per team every week',
        ],
        agents: [
            { name: 'Workflow Agent connects tools', color: '#6366f1' },
            { name: 'Trigger Agent watches for events', color: '#f59e0b' },
            { name: 'Action Agent executes routines', color: '#10b981' },
            { name: 'Audit Agent logs activities', color: '#e879f9' },
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
    const container = useRef(null);
    const sectionRefs = useRef([]);

    useGSAP(() => {
        const sections = sectionRefs.current;
        const totalSections = sections.length;

        if (!sections[0]) return;

        // Set initial states
        gsap.set(sections[0], { y: "0%", scale: 1, opacity: 1 });
        for (let i = 1; i < totalSections; i++) {
            if (!sections[i]) continue;
            gsap.set(sections[i], { y: "100%", scale: 1, opacity: 1 });
        }

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".teamsolutions-sticky-container",
                start: "center center",
                end: `+=${window.innerHeight * (totalSections - 1) * 1.2}`,
                pin: true,
                scrub: 1,
                pinSpacing: true,
            },
        });

        for (let i = 0; i < totalSections - 1; i++) {
            const currentSection = sections[i];
            const nextSection = sections[i + 1];

            if (!currentSection || !nextSection) continue;

            const position = i * 1.5;

            scrollTimeline.to(
                currentSection,
                {
                    scale: 0.9,
                    opacity: 0,
                    y: "-15%", // Smaller y offset for mobile-density friendliness
                    duration: 1.5,
                    ease: "power2.inOut",
                },
                position
            );

            scrollTimeline.to(
                nextSection,
                {
                    y: "0%",
                    duration: 1.5,
                    ease: "power2.inOut",
                },
                position
            );
        }

        return () => {
            scrollTimeline.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, { scope: container });

    return (
        <section ref={container} className="pb-8 sm:pb-10 bg-[white] overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-4 sm:mb-8"
                >
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[0.95] tracking-tight mb-3">
                        Built For Teams That<br />
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                            animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        >
                            Move Fast
                        </motion.span>
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-lg font-medium">
                        Your key workflows, powered by KaryaUp Agents.
                    </p>
                </motion.div>

                {/* Sticky scrolling sections container */}
                <div className="teamsolutions-sticky-container relative h-[70vh] sm:h-[75vh] lg:h-[75vh] w-full mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                    {teams.map((active, i) => (
                        <div
                            key={active.id}
                            ref={(el) => (sectionRefs.current[i] = el)}
                            className="absolute inset-0 w-full h-full bg-white flex flex-col items-center justify-center"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-12 items-center p-4 sm:p-10 w-full h-full">
                                {/* Left side */}
                                <div className="relative overflow-hidden lg:pr-10 flex flex-col items-center lg:items-start text-center lg:text-left h-full justify-center">
                                    <div className="relative z-10 w-full flex flex-col items-center lg:items-start">
                                        <h3 className="text-xl sm:text-3xl md:text-5xl font-black text-gray-900 leading-[1.1] mb-2 sm:mb-5">
                                            {active.title}
                                            <br />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] to-fuchsia-500 italic">{active.titleHighlight}</span>
                                        </h3>

                                        <p className="text-gray-500 text-xs sm:text-base leading-relaxed mb-3 sm:mb-6 max-w-md font-medium">
                                            {active.description}
                                        </p>

                                        {/* Replaces Indicators */}
                                        <div className="mb-4 sm:mb-8 w-full flex flex-col items-center lg:items-start">
                                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 px-1">
                                                Replaces
                                            </p>
                                            <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2.5">
                                                {active.replaces?.map((tool) => (
                                                    <div
                                                        key={tool}
                                                        className="px-2 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100 text-gray-500 text-[10px] sm:text-xs font-bold hover:border-[#7e22ce]/30 hover:text-[#7e22ce] transition-all cursor-default"
                                                    >
                                                        {tool}
                                                    </div>
                                                ))}
                                                <div className="px-2 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl border border-dashed border-gray-200 text-gray-400 text-[10px] sm:text-xs font-bold hover:border-[#7e22ce]/30 transition-all cursor-default">
                                                    + more
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bullet list */}
                                        <ul className="space-y-2 sm:space-y-3 w-full">
                                            {active.bullets.map((b) => (
                                                <li key={b} className="flex items-start gap-3 text-gray-600 text-[11px] sm:text-base font-bold bg-purple-50/50 p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-purple-100/30 text-left">
                                                    <CheckCircle2 size={16} className="text-[#7e22ce] mt-0.5 flex-shrink-0" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Right side — agent cards */}
                                <div className="flex flex-col gap-2 sm:gap-3 w-full max-w-[400px] mx-auto lg:mx-0">
                                    {active.agents.map((agent, agentIdx) => (
                                        <div
                                            key={`${active.id}-${agent.name}`}
                                            className="flex items-center gap-3 sm:gap-4 bg-gray-50 hover:bg-gray-100/80 rounded-xl sm:rounded-2xl px-3 py-2 sm:px-5 sm:py-4 transition-colors cursor-default border border-gray-100"
                                        >
                                            <AgentAvatar color={agent.color} />
                                            <span className="text-[11px] sm:text-sm font-bold text-gray-700">{agent.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSolutions;
