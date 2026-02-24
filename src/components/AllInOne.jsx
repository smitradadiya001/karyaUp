import React from 'react';
import { motion } from 'framer-motion';
import {
    Search, CheckSquare, Map, BookOpen, Mic, CalendarDays, PenTool,
    FolderKanban, BarChart3, Target, FileText, FormInput,
    Star, Timer, MessageSquare, Video, Eye,
    LayoutDashboard, Clock, KanbanSquare, Plug, Headphones,
    ListChecks, Calendar, Table, Pencil, GanttChart,
    Inbox, Zap, MilestoneIcon
} from 'lucide-react';

/* ── Small square tile ── */
const Tile = ({ icon: Icon, label, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.3 }}
        className="flex flex-col items-center justify-center gap-2 p-3 rounded-2xl border border-transparent hover:border-gray-200 hover:bg-gray-50/80 transition-all cursor-default aspect-square"
    >
        <Icon size={24} className="text-gray-400" strokeWidth={1.5} />
        <span className="text-[10px] text-gray-500 font-semibold text-center leading-tight">{label}</span>
    </motion.div>
);

/* ── Large feature card (spans 2 cols + 2 rows in the grid) ── */
const FeatureCard = ({ title, icon: Icon, color, delay = 0, children }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        className="relative rounded-3xl overflow-hidden cursor-pointer group flex flex-col h-full"
        style={{
            background: `linear-gradient(145deg, ${color}06 0%, ${color}12 100%)`,
            border: `1px solid ${color}18`,
        }}
    >
        {/* Card mock content */}
        <div className="flex-1 p-4 pt-5">{children}</div>
        {/* Title */}
        <div className="flex items-center gap-2.5 px-5 pb-5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: color }}>
                <Icon size={16} className="text-white" />
            </div>
            <span className="text-xl font-black text-gray-900">{title}</span>
        </div>
        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: `radial-gradient(circle at 50% 80%, ${color}10, transparent 70%)` }}
        />
    </motion.div>
);

const AllInOne = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-4">
                        All apps, AI Agents, and humans<br />
                        <span style={{ background: 'linear-gradient(90deg, #7b68ee, #e879f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            in KaryaUp.
                        </span>
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-lg max-w-2xl mx-auto font-medium">
                        100+ features to replace fragmented software &amp; maximize human productivity.
                    </p>
                </motion.div>

                {/* ═══════ 8-COLUMN GRID ═══════ */}
                <div
                    className="hidden md:grid gap-1.5"
                    style={{
                        gridTemplateColumns: 'repeat(8, 1fr)',
                        gridTemplateRows: 'auto',
                    }}
                >
                    {/* ──── ROW 1: 8 small tiles ──── */}
                    <Tile icon={Search} label="Connected Search" delay={0.00} />
                    <Tile icon={CheckSquare} label="Tasks" delay={0.02} />
                    <Tile icon={Map} label="Mind Maps" delay={0.04} />
                    <Tile icon={BookOpen} label="Wikis" delay={0.06} />
                    <Tile icon={Mic} label="AI Notetaker" delay={0.08} />
                    <Tile icon={CalendarDays} label="Calendar" delay={0.10} />
                    <Tile icon={PenTool} label="Proofing" delay={0.12} />
                    <Tile icon={FolderKanban} label="Portfolios" delay={0.14} />

                    {/* ──── ROW 2-3: left tiles | Projects | Docs | right tiles ──── */}
                    {/* Left 2 tiles (row 2) */}
                    <Tile icon={BarChart3} label="Reporting" delay={0.16} />
                    <Tile icon={Target} label="Goals" delay={0.18} />

                    {/* Projects card — spans col 3-4, row 2-3 */}
                    <div style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
                        <FeatureCard title="Projects" icon={FolderKanban} color="#7b68ee" delay={0.2}>
                            <div className="bg-white rounded-xl shadow-sm p-3 border border-gray-100">
                                <div className="flex items-center gap-1.5 mb-2.5">
                                    <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                                        <span className="w-1 h-1 rounded-full bg-yellow-500"></span> Needs Updates
                                    </span>
                                    <span className="text-[9px] text-gray-400 font-semibold">5</span>
                                    <span className="flex items-center gap-1 bg-green-100 text-green-700 text-[9px] font-bold px-1.5 py-0.5 rounded-full ml-auto">
                                        <span className="w-1 h-1 rounded-full bg-green-500"></span> Closed
                                    </span>
                                </div>
                                <div className="space-y-1.5">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="flex items-center gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded border border-gray-300"></div>
                                            <div className="h-1.5 bg-gray-100 rounded flex-1" style={{ maxWidth: `${40 + i * 18}%` }}></div>
                                            <div className="flex -space-x-1">
                                                <div className="w-3.5 h-3.5 rounded-full bg-purple-200 border border-white"></div>
                                                <div className="w-3.5 h-3.5 rounded-full bg-blue-200 border border-white"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FeatureCard>
                    </div>

                    {/* Docs card — spans col 5-6, row 2-3 */}
                    <div style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
                        <FeatureCard title="Docs" icon={FileText} color="#10b981" delay={0.25}>
                            <div className="bg-white rounded-xl shadow-sm p-3 border border-gray-100">
                                <p className="text-[10px] font-bold text-gray-800 mb-1.5">Convergence Brief</p>
                                <div className="flex items-center gap-1.5 mb-1.5">
                                    <div className="h-0.5 bg-purple-300 rounded w-10"></div>
                                    <span className="text-[8px] text-gray-400">Market</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="h-1 bg-gray-100 rounded w-full"></div>
                                    <div className="h-1 bg-gray-100 rounded w-11/12"></div>
                                    <div className="h-1 bg-gray-100 rounded w-3/4"></div>
                                    <div className="h-1 bg-gray-100 rounded w-5/6"></div>
                                </div>
                            </div>
                        </FeatureCard>
                    </div>

                    {/* Right 2 tiles (row 2) */}
                    <Tile icon={Zap} label="Sprints" delay={0.20} />
                    <Tile icon={Star} label="Custom Status" delay={0.22} />

                    {/* Left 2 tiles (row 3) */}
                    <Tile icon={CalendarDays} label="Milestones" delay={0.24} />
                    <Tile icon={FormInput} label="Forms" delay={0.26} />
                    {/* Projects & Docs cards already span into this row */}
                    {/* Right 2 tiles (row 3) */}
                    <Tile icon={Zap} label="Automations" delay={0.28} />
                    <Tile icon={ListChecks} label="Custom Fields" delay={0.30} />

                    {/* ──── ROW 4-5: left tiles | Calendar | Chat | right tiles ──── */}
                    {/* Left 2 tiles (row 4) */}
                    <Tile icon={Star} label="Priorities" delay={0.32} />
                    <Tile icon={Timer} label="Time Estimates" delay={0.34} />

                    {/* Calendar card (replaces Brain) — spans col 3-4, row 4-5 */}
                    <div style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
                        <FeatureCard title="Calendar" icon={CalendarDays} color="#f59e0b" delay={0.35}>
                            <div className="bg-white rounded-xl shadow-sm p-3 border border-gray-100">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-bold text-gray-700">Feb 2026</span>
                                    <div className="flex gap-1">
                                        <span className="text-[8px] text-gray-400">&lt;</span>
                                        <span className="text-[8px] text-gray-400">&gt;</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-7 gap-px text-center">
                                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                                        <span key={i} className="text-[7px] text-gray-400 font-semibold py-0.5">{d}</span>
                                    ))}
                                    {Array.from({ length: 28 }).map((_, i) => {
                                        const isToday = i === 23;
                                        const hasEvent = [5, 8, 12, 17, 23].includes(i);
                                        return (
                                            <div
                                                key={i}
                                                className={`text-[8px] py-0.5 rounded-full font-medium ${isToday ? 'bg-amber-500 text-white' : hasEvent ? 'text-amber-600 font-bold' : 'text-gray-500'}`}
                                            >
                                                {i + 1}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="mt-2 flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                    <span className="text-[8px] font-bold text-gray-600">Google Calendar Connected</span>
                                </div>
                            </div>
                        </FeatureCard>
                    </div>

                    {/* Chat card — spans col 5-6, row 4-5 */}
                    <div style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
                        <FeatureCard title="Chat" icon={MessageSquare} color="#6366f1" delay={0.4}>
                            <div className="bg-white rounded-xl shadow-sm p-3 border border-gray-100">
                                <div className="flex items-center gap-1.5 mb-2.5">
                                    <div className="w-5 h-5 rounded-full bg-orange-200"></div>
                                    <div className="w-5 h-5 rounded-full bg-purple-200 -ml-1.5"></div>
                                    <div className="w-5 h-5 rounded-full bg-blue-200 -ml-1.5"></div>
                                </div>
                                <div className="space-y-1.5">
                                    <div className="flex gap-1.5 items-start">
                                        <div className="w-4 h-4 rounded-full bg-purple-200 flex-shrink-0 mt-0.5"></div>
                                        <div className="bg-gray-50 rounded-lg p-1.5 flex-1">
                                            <div className="h-1 bg-gray-200 rounded w-full mb-0.5"></div>
                                            <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 text-[8px] font-bold text-gray-400 pl-6">
                                        <span>🚀 18</span><span>💬 5</span><span>👀 2</span>
                                    </div>
                                </div>
                            </div>
                        </FeatureCard>
                    </div>

                    {/* Right 2 tiles (row 4) */}
                    <Tile icon={Video} label="Clips" delay={0.36} />
                    <Tile icon={Eye} label="Everything view" delay={0.38} />

                    {/* Left 2 tiles (row 5) */}
                    <Tile icon={LayoutDashboard} label="Dashboards" delay={0.40} />
                    <Tile icon={Clock} label="Time Tracking" delay={0.42} />
                    {/* Calendar & Chat cards already span into this row */}
                    {/* Right 2 tiles (row 5) */}
                    <Tile icon={KanbanSquare} label="Kanban Boards" delay={0.44} />
                    <Tile icon={Plug} label="Integrations" delay={0.46} />

                    {/* ──── ROW 6: 8 small tiles ──── */}
                    <Tile icon={Headphones} label="24/7 Support" delay={0.48} />
                    <Tile icon={ListChecks} label="Checklists" delay={0.50} />
                    <Tile icon={Calendar} label="Scheduling" delay={0.52} />
                    <Tile icon={Table} label="Spreadsheets" delay={0.54} />
                    <Tile icon={Pencil} label="Whiteboards" delay={0.56} />
                    <Tile icon={GanttChart} label="Gantt Charts" delay={0.58} />
                    <Tile icon={Map} label="Roadmaps" delay={0.60} />
                    <Tile icon={Inbox} label="Inbox" delay={0.62} />
                </div>

                {/* Mobile layout: simple 2x2 feature cards + scrollable tiles */}
                <div className="md:hidden">
                    <div className="grid grid-cols-4 gap-1 mb-3">
                        <Tile icon={Search} label="Search" />
                        <Tile icon={CheckSquare} label="Tasks" />
                        <Tile icon={Map} label="Mind Maps" />
                        <Tile icon={BookOpen} label="Wikis" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                        <FeatureCard title="Projects" icon={FolderKanban} color="#7b68ee" delay={0.1}>
                            <div className="bg-white rounded-lg p-2 border border-gray-100">
                                <div className="h-1.5 bg-gray-100 rounded w-full mb-1"></div>
                                <div className="h-1.5 bg-gray-100 rounded w-3/4"></div>
                            </div>
                        </FeatureCard>
                        <FeatureCard title="Docs" icon={FileText} color="#10b981" delay={0.15}>
                            <div className="bg-white rounded-lg p-2 border border-gray-100">
                                <div className="h-1.5 bg-gray-100 rounded w-full mb-1"></div>
                                <div className="h-1.5 bg-gray-100 rounded w-5/6"></div>
                            </div>
                        </FeatureCard>
                        <FeatureCard title="Calendar" icon={CalendarDays} color="#f59e0b" delay={0.2}>
                            <div className="bg-white rounded-lg p-2 border border-gray-100">
                                <div className="h-1.5 bg-gray-100 rounded w-full mb-1"></div>
                                <div className="h-1.5 bg-gray-100 rounded w-2/3"></div>
                            </div>
                        </FeatureCard>
                        <FeatureCard title="Chat" icon={MessageSquare} color="#6366f1" delay={0.25}>
                            <div className="bg-white rounded-lg p-2 border border-gray-100">
                                <div className="h-1.5 bg-gray-100 rounded w-full mb-1"></div>
                                <div className="h-1.5 bg-gray-100 rounded w-4/5"></div>
                            </div>
                        </FeatureCard>
                    </div>
                    <div className="grid grid-cols-4 gap-1">
                        <Tile icon={LayoutDashboard} label="Dashboards" />
                        <Tile icon={Clock} label="Time" />
                        <Tile icon={KanbanSquare} label="Kanban" />
                        <Tile icon={Plug} label="Integrations" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllInOne;
