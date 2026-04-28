import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckSquare, BarChart3, Zap,
    LayoutDashboard, Clock,
    Calendar, Pencil, GanttChart,
    FolderKanban, FileText, CalendarDays, MessageSquare, Users,
    Bell, Mail, IndianRupee, LayoutGrid, UserPlus, Briefcase, Activity, Tag, Sparkles, Brain
} from 'lucide-react';

// Import available assets from ../assets/
import featureProjects from '../assets/project.webp';
import automationImage from '../assets/automation1.webp';
import calendarImage from '../assets/calender1.webp';
import teamImage from '../assets/Team1.webp';

import logo from '../assets/logo.webp';

// Import apps for marquee
import zapierIcon from '../assets/zapier.webp';
import pagarbookIcon from '../assets/pagarbook.webp';
import zoominfoIcon from '../assets/zoominfo.webp';
import hubstaffIcon from '../assets/hubstaff.webp';
import hubspotIcon from '../assets/hubspot.webp';
import asanaIcon from '../assets/asana.webp'
import pocketIcon from '../assets/pocket-hrms.webp'
import salesforceIcon from '../assets/salesforce.webp'

const APPS_LIST = [
    { name: "Zapier", icon: zapierIcon },
    { name: "PagarBook", icon: pagarbookIcon },
    { name: "HubSpot", icon: hubspotIcon },
    { name: "ZoomInfo", icon: zoominfoIcon },
    { name: "Hubstaff", icon: hubstaffIcon },
    { name: "asana", icon: asanaIcon },
    { name: "salesforce", icon: salesforceIcon },
      { name: "pocket-hrms", icon: pocketIcon },

];

const LEAD_WORDS = ["Ask", "Search", "Find", "Query"];

const MarqueeTile = ({ icon: Icon, label, isPaused }) => (
    <div
        className={`flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 border border-gray-100 flex flex-col items-center justify-center gap-2 bg-white transition-all duration-500 group/tile relative
            ${isPaused
                ? 'bg-[#7e22ce]/10 backdrop-blur-md border-[#7e22ce]/20 shadow-xl z-10 scale-105'
                : 'hover:bg-[#7e22ce]/10 hover:backdrop-blur-xl hover:border-[#7e22ce]/30 hover:shadow-2xl hover:scale-110 hover:z-30 cursor-pointer'
            }`}
    >
        <div className={`transition-all duration-500 ${isPaused ? 'scale-110 text-[#7e22ce]' : 'text-slate-400 group-hover/tile:text-[#7e22ce] group-hover/tile:scale-110'}`}>
            <Icon className="w-7 h-7" strokeWidth={1.5} />
        </div>
        <span className={`text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] transition-colors duration-300 ${isPaused ? 'text-[#7e22ce]' : 'text-slate-500 group-hover/tile:text-[#7e22ce]'}`}>
            {label}
        </span>
    </div>
);

// ClickUp-style Apps Marquee with 3-Stage Revolve
const AppsMarquee = () => {
    const [index, setIndex] = useState(0);
    const [brandIndex, setBrandIndex] = useState(0);

    const SLIDE_MS = 600;
    const HOLD_MS = 1400;
    const TICK_MS = SLIDE_MS + HOLD_MS;
    const ICON_SIZE = 28;
    const GAP = 16;
    const STEP = ICON_SIZE + GAP;
    const VISIBLE = 5;

    useEffect(() => {
        const t = setInterval(() => setIndex((i) => i + 1), TICK_MS);
        return () => clearInterval(t);
    }, []);

    useEffect(() => {
        const t = setInterval(() => setBrandIndex((i) => (i + 1) % 3), 2500);
        return () => clearInterval(t);
    }, []);

    const brandingStates = [
        { type: 'text', word: 'place' },
        { type: 'text', word: 'platform' },
        { type: 'logo', word: null }
    ];

    const revolveVariants = {
        enter: { opacity: 0, rotateX: -90, y: 15 },
        center: { opacity: 1, rotateX: 0, y: 0 },
        exit: { opacity: 0, rotateX: 90, y: -15 }
    };

    return (
        <div className="flex w-full items-center justify-center bg-white px-2 py-1 mb-2 select-none">
            <style>
                {`
                    @keyframes stepLeft {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(var(--step)); }
                    }

                    .revolve-container {
                        perspective: 1000px;
                        height: 44px;
                        display: inline-flex;
                        align-items: center;
                        vertical-align: middle;
                    }
                `}
            </style>
            <div className="flex items-center gap-1 sm:gap-2 text-lg font-black sm:text-xl lg:text-[1.85rem] tracking-tight">
                {/* Static Prefix - Never Flips */}
                <span className="whitespace-nowrap text-slate-500">
                    All
                </span>

                {/* Marquee Window */}
                <div
                    className="relative h-7 sm:h-9 overflow-hidden"
                    style={{
                        width: `${STEP * (VISIBLE - 1)}px`,
                    }}
                >
                    <div
                        key={`row-${index}`}
                        className="absolute top-0 left-0 flex h-full items-center"
                        style={{
                            gap: `${GAP}px`,
                            animation: `stepLeft ${SLIDE_MS}ms cubic-bezier(0.65, 0, 0.35, 1) forwards`,
                            ["--step"]: `-${STEP}px`,
                        }}
                    >
                        {Array.from({ length: VISIBLE + 1 }).map((_, offset) => (
                            <div key={offset} className="shrink-0">
                                <img
                                    src={APPS_LIST[(index + offset) % APPS_LIST.length].icon}
                                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-md object-contain grayscale-[20%] opacity-90"
                                    alt="app"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fixed "in" - Always Static */}
                <span className="text-slate-500">in</span>

                {/* Multi-layered Revolving Branding Suffix */}
                <div className="revolve-container min-w-[100px] sm:min-w-[130px] overflow-visible">
                    <AnimatePresence mode="wait">
                        {brandingStates[brandIndex].type === 'text' ? (
                            <motion.div
                                key="text-layer"
                                initial="enter"
                                animate="center"
                                exit="exit"
                                variants={revolveVariants}
                                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                className="flex items-center gap-1 sm:gap-1.5"
                            >
                                <span className="text-slate-500">one</span>
                                <div className="relative h-[44px] flex items-center min-w-[60px] sm:min-w-[90px]">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={brandingStates[brandIndex].word}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            variants={revolveVariants}
                                            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                            className="text-slate-500 absolute left-0"
                                        >
                                            {brandingStates[brandIndex].word}
                                        </motion.span>
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="logo-layer"
                                initial="enter"
                                animate="center"
                                exit="exit"
                                variants={revolveVariants}
                                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                className="flex items-center"
                            >
                                <img
                                    src={logo}
                                    alt="KaryaUp"
                                    className="h-9 w-auto object-contain"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

const FeatureCard = ({ title, image }) => (
    <div className="pointer-events-auto w-full h-[185px] sm:h-[150px] lg:h-[240px] bg-white border border-gray-100 flex flex-col relative overflow-hidden group/card shadow-none transition-all duration-300 hover:border-[#7e22ce]/70 hover:shadow-[0_0_0_1px_rgba(126,34,206,0.35),0_12px_35px_rgba(126,34,206,0.12)] hover:z-10 cursor-pointer">
        <div className="w-full h-full overflow-hidden flex items-center justify-center">
            <img
                src={image}
                alt={title}
                className="block w-full h-full object-contain p-1.5 sm:p-4 grayscale-[30%] group-hover/card:grayscale-0 group-hover/card:scale-[1.05] transition-all duration-1000 ease-out object-center"
            />
        </div>
    </div>
);

const MarqueeRow = ({
    icons,
    direction = "left",
    speed = 22,
    isPaused,
    onRowClick,
    maskHole = false,
    maskWidth = 320
}) => {
    const duplicatedIcons = [...icons, ...icons, ...icons];
    const [tileWidth, setTileWidth] = useState(128);

    useEffect(() => {
        const updateWidth = () => {
            setTileWidth(window.innerWidth < 640 ? 112 : 128);
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const totalWidth = icons.length * tileWidth;

    return (
        <div
            className="flex overflow-hidden cursor-pointer w-full relative group/row h-[110px] sm:h-[120px] items-center"
            onClick={onRowClick}
            style={maskHole ? {
                maskImage: `linear-gradient(to right, black 0%, black calc(50% - ${maskWidth}px), transparent calc(50% - ${maskWidth}px), transparent calc(50% + ${maskWidth}px), black calc(50% + ${maskWidth}px), black 100%)`,
                WebkitMaskImage: `linear-gradient(to right, black 0%, black calc(50% - ${maskWidth}px), transparent calc(50% - ${maskWidth}px), transparent calc(50% + ${maskWidth}px), black calc(50% + ${maskWidth}px), black 100%)`
            } : {}}
        >
            <motion.div
                className="flex items-center"
                animate={{ x: direction === "left" ? [0, -totalWidth] : [-totalWidth, 0] }}
                transition={{
                    duration: totalWidth / speed,
                    ease: "linear",
                    repeat: Infinity,
                    paused: isPaused
                }}
                viewport={{ once: false }}
                whileInView="visible"
            >
                {duplicatedIcons.map((item, idx) => (
                    <MarqueeTile key={idx} {...item} isPaused={isPaused} />
                ))}
            </motion.div>
        </div>
    );
};

const AllInOne = () => {
    const [pausedRowIndex, setPausedRowIndex] = useState(null);
    const [maskWidth, setMaskWidth] = useState(320);
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const updateLayout = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setMaskWidth(0);
                setIsDesktop(false);
            } else if (width < 1024) {
                setMaskWidth(180);
                setIsDesktop(false);
            } else {
                setMaskWidth(320);
                setIsDesktop(true);
            }
        };

        updateLayout();
        window.addEventListener("resize", updateLayout);

        return () => window.removeEventListener("resize", updateLayout);
    }, []);

    const handleRowClick = (idx) => {
        setPausedRowIndex(pausedRowIndex === idx ? null : idx);
    };

    const resumeAll = () => setPausedRowIndex(null);

    const rows = [
        [
            { icon: LayoutDashboard, label: "Dashboard" },
            { icon: IndianRupee, label: "Profit" },
            { icon: Zap, label: "Automation" },
            { icon: BarChart3, label: "Analytics" },
            { icon: LayoutGrid, label: "Applications" },
            { icon: UserPlus, label: "Leads" },
            { icon: Briefcase, label: "Deals" },
            { icon: Clock, label: "Onboarding" },
        ],
        [
            { icon: FolderKanban, label: "Projects" },
            { icon: CheckSquare, label: "Tasks" },
            { icon: FileText, label: "Notes" },
            { icon: MessageSquare, label: "Chat" },
            { icon: Bell, label: "Notifications" },
            { icon: CalendarDays, label: "Calendar" },
            { icon: Mail, label: "Gmail" },
            { icon: Clock, label: "Reminders" },
        ],
        [
            { icon: Users, label: "Clients" },
            { icon: Activity, label: "Activities" },
            { icon: FileText, label: "Quotations" },
            { icon: BarChart3, label: "CRM Analytics" },
            { icon: Pencil, label: "Whiteboard" },
            { icon: GanttChart, label: "Gantt Chart" },
            { icon: Users, label: "Team" },
            { icon: Tag, label: "Brands" },
        ],
        [
            { icon: Calendar, label: "Attendance" },
            { icon: FileText, label: "Leave" },
            { icon: IndianRupee, label: "Salary" },
            { icon: Bell, label: "Notifications" },
            { icon: IndianRupee, label: "Salary" },
            { icon: Zap, label: "Automation" },
            { icon: BarChart3, label: "Analytics" },
            { icon: LayoutGrid, label: "Applications" },
        ]
    ];

    return (
        <section
            className="w-full max-w-full bg-white relative flex flex-col items-center justify-start py-8 sm:py-12 select-none overflow-x-hidden overflow-y-hidden"
            onClick={(e) => {
                // If clicking outside marquee rows, resume all
                if (!e.target.closest('.group\\/row')) resumeAll();
            }}
        >
            <div className="max-w-7xl mx-auto px-4 w-full text-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center mb-1 sm:mb-2 lg:mb-3"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-3 shadow-sm">
                        <Zap className="w-3.5 h-3.5 text-[#7e22ce]" />
                        <span className="text-[10px] font-bold text-[#7e22ce] uppercase tracking-wider">Zero Friction Sync</span>
                    </div>
                    <h2 className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.1] mb-8">
                        Stop Switching Between Tools <br />
                        <div className="mt-4">
                            <AppsMarquee />
                        </div>
                    </h2>
                </motion.div>
            </div>

            {isDesktop ? (
                <div className="w-full relative flex flex-col items-center">
                    <div className="flex flex-col items-center w-full border-y border-gray-100">
                        <MarqueeRow icons={rows[0]} direction="right" speed={22} isPaused={pausedRowIndex === 0} onRowClick={() => handleRowClick(0)} maskHole={maskWidth > 0} maskWidth={maskWidth} />
                        <MarqueeRow icons={rows[1]} direction="left" speed={22} isPaused={pausedRowIndex === 1} onRowClick={() => handleRowClick(1)} maskHole={maskWidth > 0} maskWidth={maskWidth} />
                        <MarqueeRow icons={rows[2]} direction="right" speed={22} isPaused={pausedRowIndex === 2} onRowClick={() => handleRowClick(2)} maskHole={maskWidth > 0} maskWidth={maskWidth} />
                        <MarqueeRow icons={rows[3]} direction="left" speed={22} isPaused={pausedRowIndex === 3} onRowClick={() => handleRowClick(3)} maskHole={maskWidth > 0} maskWidth={maskWidth} />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center px-0 pointer-events-none">
                        <div className="grid grid-cols-2">
                            <FeatureCard title="Projects" image={featureProjects} />
                            <FeatureCard title="Automation" image={automationImage} />
                            <FeatureCard title="Calendar" image={calendarImage} />
                            <FeatureCard title="Team" image={teamImage} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex w-full flex-col items-center bg-white border-y border-gray-100">
                    <div className="w-full overflow-hidden border-b border-gray-100">
                        <MarqueeRow icons={rows[0]} direction="right" speed={22} isPaused={false} maskHole={false} />
                    </div>
                    <div className="grid grid-cols-2 w-full gap-0">
                        <FeatureCard title="Projects" image={featureProjects} />
                        <FeatureCard title="Automation" image={automationImage} />
                        <FeatureCard title="Calendar" image={calendarImage} />
                        <FeatureCard title="Team" image={teamImage} />
                    </div>
                    <div className="w-full overflow-hidden border-t border-gray-100">
                        <MarqueeRow icons={rows[1]} direction="left" speed={22} isPaused={false} maskHole={false} />
                    </div>
                </div>
            )}

        </section>
    );
};

export default AllInOne;
