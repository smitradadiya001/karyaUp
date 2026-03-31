import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
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

const authUrl = "https://www.karyaup.com/auth";

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
  ],
};

const platformMegaColumns = [
  platformMegaSections.core,
  platformMegaSections.manage,
];

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
    { label: "Project Management", to: "/solutions/project-management", icon: Kanban, iconColor: "text-blue-600", description: "Roadmaps, backlogs, agile dev." },
    { label: "Sales / CRM", to: "/solutions/crm", icon: Contact, iconColor: "text-orange-500", description: "Leads, deals, and contacts." },
    { label: "Marketing", to: "/solutions/marketing", icon: Megaphone, iconColor: "text-indigo-500", description: "Campaigns, assets, wikis." },
  ],
};

const resourcesMegaSections = [
  { label: "Blog", to: "/resources/blog", icon: FileText, iconColor: "text-indigo-600", description: "Read the latest news, articles, and tips." },
  { label: "Documentation", to: "/resources/docs", icon: FileCode, iconColor: "text-blue-600", description: "Detailed guides on how to use every feature." },
  { label: "Book Demo", to: "/book-demo", icon: Calendar, iconColor: "text-rose-600", description: "Book a live walkthrough tailored to your team." },
  { label: "Video Tutorials", to: "/resources/tutorials", icon: Video, iconColor: "text-purple-600", description: "Step-by-step video guides and walkthroughs." },
];

const mobileMenuSections = {
  Platform: [...platformMegaSections.core, ...platformMegaSections.manage],
  Features: featuresMegaSections.flatMap((section) => section.items),
  Solutions: [
    ...solutionsMegaSections.byTeam,
    ...solutionsMegaSections.bySize,
    ...solutionsMegaSections.templates,
  ],
  Resources: resourcesMegaSections,
};

import { motion, AnimatePresence } from "framer-motion";

const StartWorkspaceButton = ({ href, onClick, size = "sm" }) => {
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
    <a
      href={href}
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
    </a>
  );
};

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [mobileOpenSection, setMobileOpenSection] = useState(null);
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
    setMobileOpenSection(null);
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

  useEffect(() => {
    const shouldLockScroll =
      isOpen || isPlatformOpen || isFeaturesOpen || isSolutionsOpen || isResourcesOpen;

    if (!shouldLockScroll) {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen, isPlatformOpen, isFeaturesOpen, isSolutionsOpen, isResourcesOpen]);

  const megaMenuPanelClass =
    "absolute left-0 top-full w-full bg-white border-b border-slate-200 shadow-xl animate-slide-down origin-top max-h-[calc(100vh-88px)] overflow-y-auto overscroll-contain";

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

  const isHomePage = location.pathname === "/";
  const isOverlayNav = !isScrolled && !isPlatformOpen && !isFeaturesOpen && !isSolutionsOpen && !isResourcesOpen && !isOpen;
  const isHomeOverlayNav = isOverlayNav && isHomePage;
  const linkBase =
    `text-base font-semibold transition-all ${isHomeOverlayNav ? "text-slate-700 hover:text-primary md:text-white md:hover:text-white/80" : "text-slate-700 hover:text-primary"}`;
  const linkActive = "text-primary";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 py-3 ${isPlatformOpen || isFeaturesOpen || isSolutionsOpen || isResourcesOpen
        ? "bg-white md:shadow-md border-b border-gray-100"
        : isOpen
          ? "bg-white border-b border-slate-100"
        : isScrolled
          ? "bg-white md:bg-white/70 md:backdrop-blur-md md:shadow-sm md:border-b md:border-slate-200/70"
          : "bg-transparent border-b border-transparent shadow-none backdrop-blur-0"
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
                  className={`h-11 w-auto group-hover:scale-105 transition-transform duration-300 ${isHomeOverlayNav ? "md:brightness-0 md:invert" : ""}`}
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
                        From Sanskrit word<span className="italic opacity-90">“कार्य”</span> <br /> meaning action or work.
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
                  <div className={megaMenuPanelClass}>
                    <div className="w-full flex">
                      <div className="flex-1 bg-white px-8 py-3 flex flex-col border-r border-slate-100">
                        <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Core Workspace</p>
                        {platformMegaSections.core.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={closeAllMenus}
                            className="group flex items-center gap-3 py-1 px-3 rounded-xl hover:bg-white hover:shadow-md transition-all"
                          >
                            <item.icon size={18} strokeWidth={2} className={item.iconColor || "text-purple-600"} />
                            <div>
                              <p className="text-sm font-semibold text-slate-800 group-hover:text-purple-700 transition-colors">{item.label}</p>
                              <p className="text-xs text-slate-400">{item.description || item.sublabel}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="flex-1 bg-slate-50 px-8 py-3 flex flex-col border-r border-slate-200">
                        <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Leadership Views</p>
                        {platformMegaSections.manage.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={closeAllMenus}
                            className="group flex items-center gap-3 py-1 px-3 rounded-xl hover:bg-white hover:shadow-md transition-all"
                          >
                            <item.icon size={18} strokeWidth={2} className={item.iconColor || "text-purple-600"} />
                            <div>
                              <p className="text-sm font-semibold text-slate-800 group-hover:text-purple-700 transition-colors">{item.label}</p>
                              <p className="text-xs text-slate-400">{item.description || item.sublabel}</p>
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
                  <div className={megaMenuPanelClass}>
                    <div className="grid w-full grid-cols-5">
                      {featuresMegaSections.map((section, index) => (
                        <div
                          key={section.heading}
                          className={`px-7 py-3 flex flex-col min-h-[240px] ${
                            index % 2 === 0 ? "bg-white" : "bg-slate-50"
                          } ${index !== featuresMegaSections.length - 1 ? "border-r border-slate-200/80" : ""}`}
                        >
                          <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-3">
                            {section.heading}
                          </p>
                          <div className="flex flex-col gap-1">
                            {section.items.map((item) => (
                              <Link
                                key={item.to}
                                to={item.to}
                                onClick={closeAllMenus}
                                className={`group flex items-center gap-3 py-1.5 px-3 rounded-xl transition-all ${
                                  "hover:bg-white hover:shadow-md"
                                }`}
                              >
                                <item.icon size={18} strokeWidth={2} className={item.iconColor || "text-slate-600"} />
                                <div className="flex flex-col">
                                  <p className="text-sm font-semibold text-slate-800 group-hover:text-purple-700 transition-colors">
                                    {item.label}
                                  </p>
                                  <p className="text-xs text-slate-400 whitespace-nowrap">
                                    {item.label === "Tasks" && "Tasks and ownership"}
                                    {item.label === "Dashboards" && "Live performance view"}
                                    {item.label === "Gantt" && "Timeline planning"}
                                    {item.label === "Chat" && "Work chat in context"}
                                    {item.label === "Notifications" && "Instant updates"}
                                    {item.label === "Team" && "Members and roles"}
                                    {item.label === "Attendance" && "Daily time logs"}
                                    {item.label === "Leave" && "Time-off requests"}
                                    {item.label === "Salary" && "Payroll and payouts"}
                                    {item.label === "Calendar" && "Schedules and meetings"}
                                    {item.label === "Automations" && "Rule-based workflows"}
                                    {item.label === "Integrations" && "Connected tools"}
                                    {item.label === "Watch demo" && "Product walkthrough"}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
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
                  <div className={megaMenuPanelClass}>
                    <div className="w-full flex">
                      {/* Left Panel – By Team */}
                      <div className="flex-1 bg-white px-8 py-3 flex flex-col border-r border-slate-100">
                        <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">By Team</p>
                        {solutionsMegaSections.byTeam.map((item) => (
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
                              className="group flex items-center gap-4 p-4 rounded-2xl border border-transparent hover:border-purple-100 hover:bg-white hover:shadow-md transition-all"
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
                  <div className={megaMenuPanelClass}>
                    <div className="w-full flex">
                      <div className="flex-1 bg-white px-8 py-3 flex flex-col border-r border-slate-100">
                        <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Read & Learn</p>
                        {resourcesMegaSections.slice(0, 2).map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={closeAllMenus}
                            className="group flex items-center gap-3 py-1 px-3 rounded-xl hover:bg-white hover:shadow-md transition-all"
                          >
                            <item.icon size={18} strokeWidth={2} className={item.iconColor || "text-indigo-600"} />
                            <div>
                              <p className="text-sm font-semibold text-slate-800 group-hover:text-purple-700 transition-colors">{item.label}</p>
                              <p className="text-xs text-slate-400">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="flex-1 bg-slate-50 px-8 py-3 flex flex-col border-r border-slate-200">
                        <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Watch & Connect</p>
                        {resourcesMegaSections.slice(2).map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={closeAllMenus}
                            className="group flex items-center gap-3 py-1 px-3 rounded-xl hover:bg-white hover:shadow-md transition-all"
                          >
                            <item.icon size={18} strokeWidth={2} className={item.iconColor || "text-indigo-600"} />
                            <div>
                              <p className="text-sm font-semibold text-slate-800 group-hover:text-purple-700 transition-colors">{item.label}</p>
                              <p className="text-xs text-slate-400">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-1"></div>

          <div className="flex-none hidden md:flex items-center space-x-4">
            <a
              href={authUrl}
              onClick={closeAllMenus}
              className={`group flex items-center gap-2 font-semibold transition-all ${isHomeOverlayNav ? "text-white hover:text-white/80" : "text-slate-700 hover:text-primary"}`}
            >
              <LogIn size={16} className={`${isHomeOverlayNav ? "text-white" : "text-primary"} group-hover:-translate-x-0.5 transition-transform`} />
              <span className="text-[14px]">Log in</span>
            </a>
            <StartWorkspaceButton href={authUrl} onClick={closeAllMenus} />
          </div>

          <div className="ml-auto md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${isHomeOverlayNav ? "text-gray-600 hover:bg-gray-100 md:text-white md:hover:bg-white/10" : "text-gray-600 hover:bg-gray-100"}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bottom-0 z-40 bg-white shadow-2xl overflow-y-auto">
          <div className="px-4 py-5 space-y-2 bg-white">
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
                  className="overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white shadow-[0_8px_24px_-18px_rgba(15,23,42,0.18)]"
                >
                  <button
                    type="button"
                    onClick={() => setMobileOpenSection((prev) => prev === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-5 py-4 text-[1.05rem] font-semibold text-slate-700"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 ml-4 shrink-0 transition-transform duration-200 ${mobileOpenSection === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileOpenSection === item.label && (
                    <div className="px-3 pb-3">
                      <div
                        className={`rounded-xl bg-slate-50 border border-slate-100 overflow-hidden ${
                          item.label === "Features" || item.label === "Solutions"
                            ? "max-h-[320px] overflow-y-auto overscroll-contain"
                            : ""
                        }`}
                      >
                        {(mobileMenuSections[item.label] || []).map((subItem) => (
                          <Link
                            key={subItem.to}
                            to={subItem.to}
                            onClick={closeAllMenus}
                            className="flex items-start gap-3 px-3 py-3 text-sm text-slate-700 hover:bg-white transition-colors border-b border-slate-100 last:border-b-0"
                          >
                            {subItem.icon && (
                              <subItem.icon
                                size={18}
                                strokeWidth={2}
                                className={`${subItem.iconColor || "text-purple-600"} mt-0.5 shrink-0`}
                              />
                            )}
                            <div className="flex flex-col text-left">
                              <span className="font-semibold text-slate-800">{subItem.label}</span>
                              <span className="text-xs text-slate-400">
                                {subItem.sublabel || subItem.description}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            ))}

            <div className="pt-6 pb-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
              <a
                href={authUrl}
                onClick={() => setIsOpen(false)}
                className="w-full flex justify-center items-center gap-2 rounded-xl border border-gray-200 bg-white py-3 text-[15px] font-semibold text-slate-700 hover:bg-gray-50 transition"
              >
                <LogIn size={18} /> Log in
              </a>
              <div className="flex justify-center w-full mt-2 pb-1">
                <StartWorkspaceButton
                  href={authUrl}
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
