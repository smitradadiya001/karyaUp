import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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

const FeatureCard = ({ title, image }) => (
    <div className="w-full h-[185px] sm:h-[150px] lg:h-[240px] bg-white border border-gray-50 flex flex-col relative overflow-hidden group/card shadow-none transition-shadow duration-300">
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
                    <h2 className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]">
                        Unify Your Tools Into 1<br />
                        <motion.span
                                           className="inline text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] whitespace-nowrap"
                                           animate={{
                                             backgroundPosition: ["0% center", "-200% center"],
                                           }}
                                           transition={{
                                             duration: 4,
                                             repeat: Infinity,
                                             ease: "linear",
                                           }}
                                         >
                                           That Saves Time
                                         </motion.span>
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
