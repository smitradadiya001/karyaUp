import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
     CheckSquare,  BarChart3,  Zap, 
    LayoutDashboard, Clock, 
    Calendar,  Pencil, GanttChart, 
    FolderKanban, FileText, CalendarDays, MessageSquare, Users,
    Bell, Mail, IndianRupee, LayoutGrid, UserPlus, Briefcase, Activity, Tag
} from 'lucide-react';

// Import available assets from ../assets/
import featureProjects from '../assets/projects.jpeg';
import featureTasks from '../assets/Task.jpeg';
import featureCalendar from '../assets/calender.jpeg';
import featureTeam from '../assets/Team.jpeg';

const MarqueeTile = ({ icon: Icon, label, isPaused }) => (
    <div 
        className={`flex-shrink-0 w-24 h-24 border border-gray-100 flex flex-col items-center justify-center gap-2 bg-white transition-all duration-500 group/tile relative
            ${isPaused 
                ? 'bg-[#7e22ce]/10 backdrop-blur-md border-[#7e22ce]/20 shadow-xl z-10 scale-105' 
                : 'hover:bg-[#7e22ce]/10 hover:backdrop-blur-xl hover:border-[#7e22ce]/30 hover:shadow-2xl hover:scale-110 hover:z-30 cursor-pointer'
            }`}
    >
        <div className={`transition-all duration-500 ${isPaused ? 'scale-110 text-[#7e22ce]' : 'text-gray-500 group-hover/tile:text-[#7e22ce] group-hover/tile:scale-110'}`}>
            <Icon className="w-6 h-6" strokeWidth={1.5} />
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${isPaused ? 'text-[#7e22ce]' : 'text-gray-500 group-hover/tile:text-[#7e22ce]'}`}>
            {label}
        </span>
    </div>
);

const FeatureCard = ({ title, icon: Icon, image, color }) => (
    <div className="w-full sm:w-80 max-w-[150px] sm:max-w-none h-[120px] sm:h-[192px] bg-white border border-gray-100 flex flex-col relative overflow-hidden group/card shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="absolute top-2 left-2 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-2 py-1 border border-gray-100 rounded-sm">
            <div className="p-1 bg-gray-50 rounded-sm">
                <Icon className="w-3 h-3" style={{ color }} strokeWidth={2} />
            </div>
            <h3 className="font-bold text-[9px] text-gray-900 tracking-tight uppercase">{title}</h3>
        </div>
        <div className="w-full h-full overflow-hidden">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover grayscale-[20%] group-hover/card:grayscale-0 group-hover/card:scale-105 transition-all duration-700 ease-out" 
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
    const duplicatedIcons = [...icons, ...icons, ...icons, ...icons, ...icons, ...icons];
    const totalWidth = icons.length * 96; // Tile width is 96px
    
    return (
        <div 
            className="flex overflow-hidden cursor-pointer border-y border-gray-100 w-full relative group/row"
            onClick={onRowClick}
            style={maskHole ? {
                maskImage: `linear-gradient(to right, black 0%, black calc(50% - ${maskWidth}px), transparent calc(50% - ${maskWidth}px), transparent calc(50% + ${maskWidth}px), black calc(50% + ${maskWidth}px), black 100%)`,
                WebkitMaskImage: `linear-gradient(to right, black 0%, black calc(50% - ${maskWidth}px), transparent calc(50% - ${maskWidth}px), transparent calc(50% + ${maskWidth}px), black calc(50% + ${maskWidth}px), black 100%)`
            } : {}}
        >
            <motion.div 
                className="flex"
                animate={{ x: direction === "left" ? [0, -totalWidth] : [-totalWidth, 0] }}
                transition={{ 
                    duration: totalWidth / speed, 
                    ease: "linear", 
                    repeat: Infinity,
                    paused: isPaused 
                }}
            >
                {duplicatedIcons.map((item, idx) => (
                    <MarqueeTile key={idx} {...item} isPaused={isPaused} />
                ))}
            </motion.div>
            
            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/0 group-hover/row:bg-black/[0.02] transition-colors duration-300 pointer-events-none" />
        </div>
    );
};

const AllInOne = () => {
    const [pausedRowIndex, setPausedRowIndex] = useState(null);
    const [maskWidth, setMaskWidth] = useState(320);

    useEffect(() => {
        const updateMaskWidth = () => {
            if (window.innerWidth < 640) {
                setMaskWidth(0);
                return;
            }

            if (window.innerWidth < 1024) {
                setMaskWidth(180);
                return;
            }

            setMaskWidth(320);
        };

        updateMaskWidth();
        window.addEventListener("resize", updateMaskWidth);

        return () => window.removeEventListener("resize", updateMaskWidth);
    }, []);

    const handleRowClick = (idx) => {
        setPausedRowIndex(pausedRowIndex === idx ? null : idx);
    };

    const resumeAll = () => setPausedRowIndex(null);

    const rows = [
        [
            { icon: LayoutDashboard, label: "Dashboard" },
            { icon: FolderKanban, label: "Projects" },
            { icon: CheckSquare, label: "Tasks" },
            { icon: FileText, label: "Notes" },
            { icon: MessageSquare, label: "Chat" },
            { icon: Bell, label: "Notifications" },
            { icon: CalendarDays, label: "Calendar" },
            { icon: Mail, label: "Gmail" },
        ],
        [
            { icon: Clock, label: "Reminders" },
            { icon: IndianRupee, label: "Profit" },
            { icon: Zap, label: "Automation" },
            { icon: BarChart3, label: "Analytics" },
            { icon: LayoutGrid, label: "Applications" },
            { icon: UserPlus, label: "Leads" },
            { icon: Briefcase, label: "Deals" },
            { icon: Clock, label: "Onboarding" },
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
            { icon: LayoutDashboard, label: "Dashboard" },
            { icon: FolderKanban, label: "Projects" },
            { icon: CheckSquare, label: "Tasks" },
            { icon: FileText, label: "My Notes" },
            { icon: MessageSquare, label: "Chat" },
        ],
        [
            { icon: Bell, label: "Notifications" },
            { icon: CalendarDays, label: "Calendar" },
            { icon: Mail, label: "Gmail" },
            { icon: Clock, label: "Reminders" },
            { icon: IndianRupee, label: "Salary" },
            { icon: Zap, label: "Automation" },
            { icon: BarChart3, label: "Analytics" },
            { icon: LayoutGrid, label: "Applications" },
        ]
    ];

    return (
        <section 
            className="w-full max-w-full bg-white relative flex flex-col items-center justify-start min-h-[520px] sm:min-h-[560px] lg:min-h-[620px] xl:min-h-[660px] pt-8 sm:pt-10 lg:pt-12 select-none overflow-x-hidden overflow-y-hidden"
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
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[0.95]">
                        Replace all your tools <br /> with one<br/>
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-[#ec4899] to-[#7e22ce] bg-[length:200%_auto]"
                            animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                             beautiful platform.
                        </motion.span>
                    </h2>
                </motion.div>
            </div>

            {/* Portal Layout Container */}
            <div className="w-full relative flex flex-col items-center">
                
                {/* 5 Marquee Rows */}
                <div className="flex flex-col items-center w-full">
                    <MarqueeRow 
                        icons={rows[0]} direction="left" speed={22} 
                        isPaused={pausedRowIndex === 0} onRowClick={() => handleRowClick(0)} 
                    />
                    <MarqueeRow 
                        icons={rows[1]} direction="right" speed={22} 
                        isPaused={pausedRowIndex === 1} onRowClick={() => handleRowClick(1)} maskHole={maskWidth > 0} maskWidth={maskWidth}
                    />
                    <MarqueeRow 
                        icons={rows[2]} direction="left" speed={22} 
                        isPaused={pausedRowIndex === 2} onRowClick={() => handleRowClick(2)} maskHole={maskWidth > 0} maskWidth={maskWidth}
                    />
                    <MarqueeRow 
                        icons={rows[3]} direction="right" speed={22} 
                        isPaused={pausedRowIndex === 3} onRowClick={() => handleRowClick(3)} maskHole={maskWidth > 0} maskWidth={maskWidth}
                    />
                    <MarqueeRow 
                        icons={rows[4]} direction="left" speed={22} 
                        isPaused={pausedRowIndex === 4} onRowClick={() => handleRowClick(4)} 
                    />
                </div>

                {/* The Middle Image Cluster */}
                <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-0 pointer-events-none">
                    <div className="grid w-full sm:w-auto max-w-[280px] sm:max-w-[360px] lg:max-w-none grid-cols-2 gap-0 border border-gray-100 bg-white pointer-events-auto mt-0 shadow-2xl">
                        <FeatureCard 
                            title="Projects" 
                            icon={FolderKanban} 
                            image={featureProjects} 
                            color="#7e22ce" 
                        />
                        <FeatureCard 
                            title="Tasks" 
                            icon={CheckSquare} 
                            image={featureTasks} 
                            color="#10b981" 
                        />
                        <FeatureCard 
                            title="Calendar" 
                            icon={CalendarDays} 
                            image={featureCalendar} 
                            color="#f59e0b" 
                        />
                        <FeatureCard 
                            title="Team" 
                            icon={Users} 
                            image={featureTeam} 
                            color="#6366f1" 
                        />
                    </div>
                </div>

            </div>

        </section>
    );
};

export default AllInOne;
