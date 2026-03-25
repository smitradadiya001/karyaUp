import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Menu, X, ArrowRight, ChevronDown,
  CheckSquare, Kanban, Users, Clock, BarChart2, LayoutDashboard, CircleDollarSign,
  Megaphone, Contact,
  AlignLeft, MessageSquare, Video, UserCheck, CalendarOff, Banknote, Calendar, Zap, Timer, Blocks, PlayCircle, Bell,
  FileText, FileCode, MonitorPlay, LogIn, Briefcase, Network, PieChart, Wallet
} from "lucide-react";
import logo from "../assets/logo.png";
import KaryaUpBtn from "../assets/KaryaupBtn.png";
import BorderBeam from "./BorderBeam";

const navItems = [
  { label: "Platform" },
  { label: "Features" },
  { label: "Solutions" },
  { label: "Pricing", to: "/pricing" },
  { label: "Resources" },
];

const platformMegaSections = {
  core: [
    { label: "Project Management", sublabel: "Tasks & roadmaps", to: "/platform/project-management", icon: Briefcase, iconColor: "text-blue-600" },
    { label: "Team Collaboration", sublabel: "Work together, seamlessly", to: "/platform/team-collaboration", icon: Network, iconColor: "text-purple-600" },
  ],
  manage: [
    { label: "Boss Dashboard", sublabel: "High-level overview", to: "/platform/boss-dashboard", icon: PieChart, iconColor: "text-indigo-600" },
    { label: "Profit Tracking", sublabel: "Budgets & profitability", to: "/platform/profit-tracking", icon: Wallet, iconColor: "text-emerald-600" },
    { label: "Attendance & Leave", sublabel: "HR at a glance", to: "/features/attendance", icon: UserCheck, iconColor: "text-teal-600" },
  ],
  featured: [
    { label: "All-in-One Workspace", to: "/platform/project-management", icon: LayoutDashboard, iconColor: "text-violet-600", description: "Every tool your team needs under one roof." },
    { label: "Salary & Payroll", to: "/features/salary", icon: Banknote, iconColor: "text-green-600", description: "Automate payroll and keep finances on track." },
    { label: "Automations", to: "/features/automations", icon: Zap, iconColor: "text-orange-500", description: "Save time by automating repetitive workflows." },
  ],
};

const featuresMegaSections = [
  {
    heading: "PROJECTS",
    items: [
      { label: "Tasks", to: "/features/tasks", icon: CheckSquare, iconColor: "text-emerald-600" },
      { label: "Dashboards", to: "/features/dashboards", icon: BarChart2, iconColor: "text-rose-600" },
      { label: "Gantt", to: "/features/gantt", icon: AlignLeft, iconColor: "text-red-600" },
    ],
  },
  {
    heading: "COMMUNICATION",
    items: [
      { label: "Chat", to: "/features/chat", icon: MessageSquare, iconColor: "text-indigo-600" },
      { label: "Notifications", to: "/features/notifications", icon: Bell, iconColor: "text-amber-600" }
    ],
  },
  {
    heading: "MANAGEMENT",
    items: [
      { label: "Team", to: "/features/team", icon: Users, iconColor: "text-blue-600" },
      { label: "Attendance", to: "/features/attendance", icon: UserCheck, iconColor: "text-teal-600" },
      { label: "Leave", to: "/features/leave", icon: CalendarOff, iconColor: "text-fuchsia-600" },
      { label: "Salary", to: "/features/salary", icon: Banknote, iconColor: "text-green-600" },
    ],
  },
  {
    heading: "TIME",
    items: [
      { label: "Calendar", to: "/features/calendar", icon: Calendar, iconColor: "text-pink-600" },
      { label: "Scheduling", to: "/features/scheduling", icon: Clock, iconColor: "text-orange-600" },
      { label: "Automations", to: "/features/automations", icon: Zap, iconColor: "text-violet-600" },
    ],
  },
  {
    heading: "MORE",
    items: [
      { label: "Integrations", to: "/features/integrations", icon: Blocks, iconColor: "text-cyan-600" },
      { label: "Watch demo", to: "/features/demo", icon: PlayCircle, iconColor: "text-slate-600" },
    ],
  },
];

const solutionsMegaSections = {
  byTeam: [
    { label: "Product", sublabel: "Roadmaps & backlogs", to: "/solutions/product-development", icon: Kanban, iconColor: "text-violet-600" },
    { label: "Operations", sublabel: "Workflows & SOPs", to: "/solutions/operations", icon: Zap, iconColor: "text-orange-500" },
    { label: "IT", sublabel: "Requests & incidents", to: "/solutions/it", icon: Blocks, iconColor: "text-blue-600" },
    { label: "Marketing", sublabel: "Campaigns & content", to: "/solutions/marketing", icon: Megaphone, iconColor: "text-pink-600" },
    { label: "HR", sublabel: "Hiring & onboarding", to: "/solutions/hr", icon: Users, iconColor: "text-emerald-600" },
  ],
  bySize: [
    { label: "Enterprise", sublabel: "Scale across org", to: "/solutions/enterprise", icon: LayoutDashboard, iconColor: "text-slate-700" },
    { label: "Startup", sublabel: "Move fast, stay lean", to: "/solutions/startup", icon: Zap, iconColor: "text-yellow-500" },
    { label: "Non-profit", sublabel: "Do more with less", to: "/solutions/non-profit", icon: CircleDollarSign, iconColor: "text-green-600" },
    { label: "Education", sublabel: "Classes & projects", to: "/solutions/education", icon: FileText, iconColor: "text-indigo-600" },
    { label: "Agency", sublabel: "Clients & deliverables", to: "/solutions/agency", icon: Briefcase, iconColor: "text-rose-600" },
  ],
  templates: [
    { label: "Project Management", to: "/solutions/templates/project-management", icon: Kanban, iconColor: "text-blue-600", description: "Roadmaps, backlogs, agile dev." },
    { label: "Sales / CRM", to: "/solutions/templates/crm", icon: Contact, iconColor: "text-orange-500", description: "Leads, deals, and contacts." },
    { label: "Marketing", to: "/solutions/templates/marketing", icon: Megaphone, iconColor: "text-indigo-500", description: "Campaigns, assets, wikis." },
  ],
};

const resourcesMegaSections = [
  { label: "Blog", to: "/resources/blog", icon: FileText, iconColor: "text-indigo-600", description: "Read the latest news, articles, and tips." },
  { label: "Documentation", to: "/resources/docs", icon: FileCode, iconColor: "text-blue-600", description: "Detailed guides on how to use every feature." },
  { label: "Demo", to: "/resources/demo", icon: MonitorPlay, iconColor: "text-rose-600", description: "Watch a quick overview of the platform." },
  { label: "Video Tutorials", to: "/resources/tutorials", icon: Video, iconColor: "text-purple-600", description: "Step-by-step video guides and walkthroughs." },
];

import { motion, AnimatePresence } from "framer-motion";

const StartWorkspaceButton = ({ to, onClick, size = "sm" }) => {
  const [hovered, setHovered] = useState(false);
  const angleRef = useRef(0);
  const rafRef = useRef(null);
  const spanRef = useRef(null);

  const imgH = size === "sm" ? "h-[34px]" : "h-[42px]";
  const textSz = size === "sm" ? "text-[13px]" : "text-[14px]";
  const arrowSz = size === "sm" ? 13 : 16;

  useEffect(() => {
    if (hovered) {
      const animate = () => {
        angleRef.current = (angleRef.current + 2) % 360;
        if (spanRef.current) {
          spanRef.current.style.background = `conic-gradient(from ${angleRef.current}deg, transparent 82%, #111 90%, transparent 100%)`;
        }
        rafRef.current = requestAnimationFrame(animate);
      };
      rafRef.current = requestAnimationFrame(animate);
    } else {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hovered]);

  return (
    <Link
      to={to}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative inline-flex items-center justify-center group active:scale-[0.98] transition-all duration-300"
      style={{ borderRadius: 999 }}
    >
      {hovered && (
        <span
          ref={spanRef}
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "-2px",
            borderRadius: "999px",
            background: "conic-gradient(from 0deg, transparent 82%, #111 90%, transparent 100%)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1.5px",
            pointerEvents: "none",
            zIndex: 20,
          }}
        />
      )}
      <img
        src={KaryaUpBtn}
        alt="Start Workspace Button"
        className={`${imgH} w-auto rounded-[999px] pointer-events-none relative z-10`}
      />
      <span
        className={`absolute inset-0 flex items-center justify-center gap-1.5 text-white ${textSz} font-bold tracking-wide drop-shadow-md z-10 w-full pointer-events-none`}
      >
        Start Workspace{" "}
        <ArrowRight
          size={arrowSz}
          strokeWidth={2.5}
          className="transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const platformTimerRef = useRef(null);
  const featuresTimerRef = useRef(null);
  const solutionsTimerRef = useRef(null);
  const resourcesTimerRef = useRef(null);

  const closeAllMenus = () => {
    setIsPlatformOpen(false);
    setIsFeaturesOpen(false);
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
    setIsOpen(false); // Close mobile menu too
    [platformTimerRef, featuresTimerRef, solutionsTimerRef, resourcesTimerRef].forEach(ref => {
      if (ref.current) { clearTimeout(ref.current); ref.current = null; }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (platformTimerRef.current) {
        clearTimeout(platformTimerRef.current);
      }
      if (featuresTimerRef.current) {
        clearTimeout(featuresTimerRef.current);
      }
      if (solutionsTimerRef.current) {
        clearTimeout(solutionsTimerRef.current);
      }
      if (resourcesTimerRef.current) {
        clearTimeout(resourcesTimerRef.current);
      }
    };
  }, []);

  const handlePlatformMouseEnter = () => {
    if (platformTimerRef.current) {
      clearTimeout(platformTimerRef.current);
      platformTimerRef.current = null;
    }
    setIsPlatformOpen(true);
  };

  const handlePlatformMouseLeave = () => {
    platformTimerRef.current = setTimeout(() => {
      setIsPlatformOpen(false);
    }, 500); // 500ms delay
  };

  const handleFeaturesMouseEnter = () => {
    if (featuresTimerRef.current) {
      clearTimeout(featuresTimerRef.current);
      featuresTimerRef.current = null;
    }
    setIsFeaturesOpen(true);
  };

  const handleFeaturesMouseLeave = () => {
    featuresTimerRef.current = setTimeout(() => {
      setIsFeaturesOpen(false);
    }, 500);
  };

  const handleSolutionsMouseEnter = () => {
    if (solutionsTimerRef.current) {
      clearTimeout(solutionsTimerRef.current);
      solutionsTimerRef.current = null;
    }
    setIsSolutionsOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsTimerRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 500); // 500ms delay
  };

  const handleResourcesMouseEnter = () => {
    if (resourcesTimerRef.current) {
      clearTimeout(resourcesTimerRef.current);
      resourcesTimerRef.current = null;
    }
    setIsResourcesOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    resourcesTimerRef.current = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 500);
  };

  const linkBase =
    "text-base font-semibold text-slate-700 hover:text-primary transition-all";
  const linkActive = "text-primary";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 py-3 ${isPlatformOpen || isFeaturesOpen || isSolutionsOpen || isResourcesOpen
        ? "bg-white shadow-md  border-gray-100"
        : isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm "
          : "bg-transparent"
        }`}
    >
      <div className="max-w-full mx-auto px-4 lg:px-4">
        <div className="flex items-center">
          <div className="flex-none flex items-center">
            <div
              className="relative"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <Link to="/" onClick={closeAllMenus} className="flex items-center group">
                <img
                  src={logo}
                  alt="KaryaUp Logo"
                  className="h-11 w-auto group-hover:scale-105 transition-transform duration-300"
                />
              </Link>

              <AnimatePresence>
                {isLogoHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 z-50 pointer-events-none"
                  >
                    <div className="bg-slate-900 border border-slate-800 shadow-2xl rounded-xl px-3 py-2 w-auto min-w-[180px] max-w-[280px] backdrop-blur-md">
                      <div className="absolute -top-1 w-2 h-2 bg-slate-900 border-t border-l border-slate-800 rotate-45 left-6" />
                      <p className="text-[13px] font-medium text-white leading-snug">
                        <span className="text-purple-400 font-bold tracking-tight block mb-0.5">KaryaUp</span>
                        From Sanskrit <span className="italic opacity-90">“Karya”</span> <br /> meaning action or work.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden md:flex flex-1"></div>

          <div className="hidden md:flex md:justify-center flex-none">
            <div className="flex items-center space-x-10">
              <div
                className="flex items-center h-full py-2"
                onMouseEnter={handlePlatformMouseEnter}
                onMouseLeave={handlePlatformMouseLeave}
              >
                <div
                  className={`${linkBase} flex items-center gap-1 cursor-default`}
                >
                  Platform
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isPlatformOpen ? "rotate-180" : ""}`} />
                </div>

                {isPlatformOpen && (
                  <div className="absolute left-0 top-full w-full bg-white border-b border-slate-200 shadow-xl animate-slide-down origin-top">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 w-full max-w-4xl px-8 mx-auto">
                        {platformMegaSections.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={closeAllMenus}
                            className="flex items-start gap-4 p-4 rounded-[16px] bg-white border border-transparent hover:border-purple-100 hover:bg-purple-50/30 hover:shadow-[0_8px_30px_rgb(126,34,206,0.06)] transition-all duration-300 group"
                          >
                            {item.icon && (
                              <div className="flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3">
                                <item.icon size={24} strokeWidth={2} className={item.iconColor || 'text-purple-600'} />
                              </div>
                            )}
                            <div className="flex flex-col">
                              <span className="font-extrabold text-[16px] mb-1 text-slate-900 group-hover:text-[#7e22ce] transition-colors">{item.label}</span>
                              <span className="text-[13px] text-slate-500 font-medium leading-relaxed group-hover:text-slate-600 transition-colors">
                                {item.description}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="flex items-center h-full py-2"
                onMouseEnter={handleFeaturesMouseEnter}
                onMouseLeave={handleFeaturesMouseLeave}
              >
                <div
                  className={`${linkBase} flex items-center gap-1 cursor-default`}
                >
                  Features
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isFeaturesOpen ? "rotate-180" : ""}`} />
                </div>

                {isFeaturesOpen && (
                  <div className="absolute left-0 top-full w-full bg-white border-b border-slate-200 shadow-xl animate-slide-down origin-top">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                      <div className="grid gap-x-8 gap-y-12 grid-cols-2 md:grid-cols-5 lg:grid-cols-5">
                        {featuresMegaSections.map((section) => (
                          <div key={section.heading}>
                            <h3 className="text-sm font-bold text-slate-400 tracking-wider mb-5">
                              {section.heading}
                            </h3>
                            <ul className="space-y-4">
                              {section.items.map((item) => (
                                <li key={item.to}>
                                  <Link
                                    to={item.to}
                                    onClick={closeAllMenus}
                                    className="flex items-center gap-3 text-[15px] font-medium text-slate-800 hover:text-primary transition-colors group"
                                  >
                                    {item.icon && (
                                      <div className="flex items-center justify-center shrink-0 group-hover:scale-110 transition-all">
                                        <item.icon size={20} strokeWidth={2.5} className={item.iconColor || 'text-emerald-600'} />
                                      </div>
                                    )}
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="flex items-center h-full py-2"
                onMouseEnter={handleSolutionsMouseEnter}
                onMouseLeave={handleSolutionsMouseLeave}
              >
                <div
                  className={`${linkBase} flex items-center gap-1 cursor-default`}
                >
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSolutionsOpen ? "rotate-180" : ""}`} />
                </div>

                {isSolutionsOpen && (
                  <div className="absolute left-0 top-full w-full bg-white border-b border-slate-200 shadow-xl animate-slide-down origin-top">
                    <div className="w-full flex">
                      {/* Left Panel – By Team */}
                      <div className="flex-1 bg-white px-8 py-3 flex flex-col border-r border-slate-100">
                        <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">By Team</p>
                        {solutionsMegaSections.byTeam.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={closeAllMenus}
                            className="group flex items-center gap-3 py-1 px-3 rounded-xl hover:bg-purple-50 transition-all"
                          >
                            <item.icon size={18} strokeWidth={2} className={item.iconColor} />
                            <div>
                              <p className="text-sm font-semibold text-slate-800 group-hover:text-purple-700 transition-colors">{item.label}</p>
                              <p className="text-xs text-slate-400">{item.sublabel}</p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Middle Panel – By Company Size */}
                      <div className="flex-1 bg-slate-50 px-8 py-3 flex flex-col border-r border-slate-200">
                        <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">By Company Size</p>
                        {solutionsMegaSections.bySize.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={closeAllMenus}
                            className="group flex items-center gap-3 py-1 px-3 rounded-xl hover:bg-white hover:shadow-md transition-all"
                          >
                            <item.icon size={18} strokeWidth={2} className={item.iconColor} />
                            <div>
                              <p className="text-sm font-semibold text-slate-800 group-hover:text-purple-700 transition-colors">{item.label}</p>
                              <p className="text-xs text-slate-400">{item.sublabel}</p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Right Panel – Templates */}
                      <div className="flex-1 bg-white px-10 py-3">
                        <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Popular Templates</p>
                        <div className="flex flex-col gap-1">
                          {solutionsMegaSections.templates.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={closeAllMenus}
                              className="group flex items-center gap-4 p-4 rounded-2xl border border-transparent hover:border-purple-100 hover:bg-purple-50/40 hover:shadow-md transition-all"
                            >
                              <div className="w-10 h-10 rounded-xl bg-slate-50 shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <item.icon size={20} strokeWidth={2} className={item.iconColor} />
                              </div>
                              <div>
                                <p className="font-bold text-slate-900 text-[15px] group-hover:text-purple-700 transition-colors">{item.label}</p>
                                <p className="text-[13px] text-slate-500">{item.description}</p>
                              </div>
                              <ArrowRight size={16} className="ml-auto text-slate-300 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                to="/pricing"
                onClick={closeAllMenus}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ""}`
                }
              >
                Pricing
              </NavLink>
              <div
                className="flex items-center h-full py-2"
                onMouseEnter={handleResourcesMouseEnter}
                onMouseLeave={handleResourcesMouseLeave}
              >
                <div
                  className={`${linkBase} flex items-center gap-1 cursor-default`}
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`} />
                </div>

                {isResourcesOpen && (
                  <div className="absolute left-0 top-full w-full bg-white border-b border-slate-200 shadow-xl animate-slide-down origin-top">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                      <div className="flex gap-16 md:gap-32 w-full max-w-5xl px-8">
                        {/* Section 1 */}
                        <div className="flex flex-col gap-6 flex-1">
                          {resourcesMegaSections.slice(0, 2).map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={closeAllMenus}
                              className="flex items-start gap-4 text-sm font-medium text-slate-800 hover:text-primary transition-colors group"
                            >
                              {item.icon && (
                                <div className="flex items-center justify-center shrink-0 transition-all group-hover:scale-110 group-hover:-rotate-3">
                                  <item.icon size={24} strokeWidth={2} className={item.iconColor || 'text-indigo-600'} />
                                </div>
                              )}
                              <div className="flex flex-col">
                                <span className="font-bold text-[17px] mb-1 text-black">{item.label}</span>
                                <span className="text-[15px] text-gray-500 font-normal leading-snug">
                                  {item.description}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                        {/* Section 2 */}
                        <div className="flex flex-col gap-6 flex-1">
                          {resourcesMegaSections.slice(2).map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={closeAllMenus}
                              className="flex items-start gap-4 text-sm font-medium text-slate-800 hover:text-primary transition-colors group"
                            >
                              {item.icon && (
                                <div className="flex items-center justify-center shrink-0 transition-all group-hover:scale-110 group-hover:-rotate-3">
                                  <item.icon size={24} strokeWidth={2} className={item.iconColor || 'text-indigo-600'} />
                                </div>
                              )}
                              <div className="flex flex-col">
                                <span className="font-bold text-[17px] mb-1 text-black">{item.label}</span>
                                <span className="text-[15px] text-gray-500 font-normal leading-snug">
                                  {item.description}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-1"></div>

          <div className="flex-none hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              onClick={closeAllMenus}
              className="group flex items-center gap-2 font-semibold text-slate-700 hover:text-primary transition-all"
            >
              <LogIn size={16} className="text-primary group-hover:-translate-x-0.5 transition-transform" />
              <span className="text-[14px]">Log in</span>
            </Link>
            <StartWorkspaceButton to="/start" onClick={closeAllMenus} />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl">
          <div className="px-4 py-5 space-y-1">
            {navItems.map((item) => (
              item.to ? (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeAllMenus}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-base font-semibold transition ${isActive
                      ? "bg-primary/10 text-primary"
                      : "text-slate-700 hover:bg-primary/5"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <div
                  key={item.label}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 pointer-events-none opacity-60"
                >
                  {item.label}
                </div>
              )
            ))}

            <div className="pt-6 pb-4 border-t border-gray-100 flex flex-col gap-3">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full flex justify-center items-center gap-2 rounded-xl border border-gray-200 bg-white py-3 text-[15px] font-semibold text-slate-700 hover:bg-gray-50 transition"
              >
                <LogIn size={18} /> Log in
              </Link>
              <div className="flex justify-center w-full mt-2 pb-1">
                <StartWorkspaceButton
                  to="/start"
                  onClick={() => setIsOpen(false)}
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
