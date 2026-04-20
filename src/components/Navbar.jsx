import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  Menu, X, ArrowRight, ChevronDown,
  CheckSquare, Kanban, Users, Clock, BarChart2, LayoutDashboard, CircleDollarSign,
  Megaphone, Contact,
  AlignLeft, MessageSquare, Video, UserCheck, CalendarOff, Banknote, Calendar, Zap, Blocks, PlayCircle, Bell,
  FileText, FileCode, LogIn, Briefcase, Network, PieChart, Wallet
} from "lucide-react";
import logo from "../assets/logo.webp";
import KaryaUpBtn from "../assets/KaryaupBtn.png";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "../context/LoadingContext";

const MotionDiv = motion.div;
const authUrl = "https://app.karyaup.com/auth";

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

const featuresMegaSections = [
  {
    heading: "PROJECTS",
    items: [
      { label: "Tasks", to: "/features/tasks", icon: CheckSquare, iconColor: "text-emerald-600", sublabel: "Tasks and ownership" },
      { label: "Dashboards", to: "/features/dashboards", icon: BarChart2, iconColor: "text-rose-600", sublabel: "Live performance view" },
      { label: "Gantt", to: "/features/gantt", icon: AlignLeft, iconColor: "text-red-600", sublabel: "Timeline planning" },
    ],
  },
  {
    heading: "COMMUNICATION",
    items: [
      { label: "Chat", to: "/features/chat", icon: MessageSquare, iconColor: "text-indigo-600", sublabel: "Work chat in context" },
      { label: "Notifications", to: "/features/notifications", icon: Bell, iconColor: "text-amber-600", sublabel: "Instant updates" }
    ],
  },
  {
    heading: "MANAGEMENT",
    items: [
      { label: "Team", to: "/features/team", icon: Users, iconColor: "text-blue-600", sublabel: "Members and roles" },
      { label: "Attendance", to: "/features/attendance", icon: UserCheck, iconColor: "text-teal-600", sublabel: "Daily time logs" },
      { label: "Leave", to: "/features/leave", icon: CalendarOff, iconColor: "text-fuchsia-600", sublabel: "Time-off requests" },
      { label: "Salary", to: "/features/salary", icon: Banknote, iconColor: "text-green-600", sublabel: "Payroll and payouts" },
    ],
  },
  {
    heading: "TIME",
    items: [
      { label: "Calendar", to: "/features/calendar", icon: Calendar, iconColor: "text-pink-600", sublabel: "Schedules and meetings" },
      { label: "Automations", to: "/features/automations", icon: Zap, iconColor: "text-violet-600", sublabel: "Rule-based workflows" },
    ],
  },
  {
    heading: "MORE",
    items: [
      { label: "Integrations", to: "/features/integrations", icon: Blocks, iconColor: "text-cyan-600", sublabel: "Connected tools" },
      { label: "Watch demo", to: "/features/demo", icon: PlayCircle, iconColor: "text-slate-600", sublabel: "Product walkthrough" },
    ],
  },
];

const solutionsMegaSections = {
  byTeam: [
    { label: "Product development", sublabel: "Roadmaps & backlogs", to: "/solutions/product-development", icon: Kanban, iconColor: "text-violet-600" },
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
    { label: "Project Management", to: "/solutions/project-management", icon: Kanban, iconColor: "text-blue-600", sublabel: "Roadmaps, backlogs, agile dev." },
    { label: "Sales / CRM", to: "/solutions/crm", icon: Contact, iconColor: "text-orange-500", sublabel: "Leads, deals, and contacts." },
    { label: "Marketing", to: "/solutions/marketing", icon: Megaphone, iconColor: "text-indigo-500", sublabel: "Campaigns, assets, wikis." },
  ],
};

const resourcesMegaSections = [
  { label: "Blog", to: "/resources/blog", icon: FileText, iconColor: "text-indigo-600", sublabel: "Read the latest news, articles, and tips." },
  { label: "Documentation", to: "/resources/docs", icon: FileCode, iconColor: "text-blue-600", sublabel: "Detailed guides on how to use every feature." },
  { label: "Book Demo", to: "/book-demo", icon: Calendar, iconColor: "text-rose-600", sublabel: "Book a live walkthrough tailored to your team." },
  { label: "Video Tutorials", to: "/resources/tutorials", icon: Video, iconColor: "text-purple-600", sublabel: "Step-by-step video guides and walkthroughs." },
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
        width="200"
        height="48"
        loading="eager"
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
  const { isPageLoading } = useLoading();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [mobileOpenSection, setMobileOpenSection] = useState(null);
  const [isIframeDark, setIsIframeDark] = useState(false);
  const platformTimerRef = useRef(null);
  const featuresTimerRef = useRef(null);
  const solutionsTimerRef = useRef(null);
  const resourcesTimerRef = useRef(null);

  const closeAllMenus = () => {
    setIsPlatformOpen(false);
    setIsFeaturesOpen(false);
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
    setIsOpen(false);
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
      if (platformTimerRef.current) clearTimeout(platformTimerRef.current);
      if (featuresTimerRef.current) clearTimeout(featuresTimerRef.current);
      if (solutionsTimerRef.current) clearTimeout(solutionsTimerRef.current);
      if (resourcesTimerRef.current) clearTimeout(resourcesTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const shouldLockScroll = isOpen;
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
  }, [isOpen]);

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data === 'IFRAME_DARK') setIsIframeDark(true);
      if (e.data === 'IFRAME_LIGHT') setIsIframeDark(false);
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const megaMenuPanelClass =
    "absolute left-0 top-full w-full bg-white border-b border-slate-200 shadow-xl animate-slide-down origin-top max-h-[calc(100vh-88px)] overflow-y-auto overscroll-contain";

  const handlePlatformMouseEnter = () => {
    if (platformTimerRef.current) clearTimeout(platformTimerRef.current);
    setIsPlatformOpen(true);
  };
  const handlePlatformMouseLeave = () => {
    platformTimerRef.current = setTimeout(() => setIsPlatformOpen(false), 500);
  };
  const handleFeaturesMouseEnter = () => {
    if (featuresTimerRef.current) clearTimeout(featuresTimerRef.current);
    setIsFeaturesOpen(true);
  };
  const handleFeaturesMouseLeave = () => {
    featuresTimerRef.current = setTimeout(() => setIsFeaturesOpen(false), 500);
  };
  const handleSolutionsMouseEnter = () => {
    if (solutionsTimerRef.current) clearTimeout(solutionsTimerRef.current);
    setIsSolutionsOpen(true);
  };
  const handleSolutionsMouseLeave = () => {
    solutionsTimerRef.current = setTimeout(() => setIsSolutionsOpen(false), 500);
  };
  const handleResourcesMouseEnter = () => {
    if (resourcesTimerRef.current) clearTimeout(resourcesTimerRef.current);
    setIsResourcesOpen(true);
  };
  const handleResourcesMouseLeave = () => {
    resourcesTimerRef.current = setTimeout(() => setIsResourcesOpen(false), 500);
  };

  const isHomePage = location.pathname === "/";
  const isDarkOverlayPage = location.pathname === "/features/ai-agents";
  const isOverlayNav = !isScrolled && !isPlatformOpen && !isFeaturesOpen && !isSolutionsOpen && !isResourcesOpen && !isOpen;
  const isOverlayLightNav = isOverlayNav && (isHomePage || (isDarkOverlayPage && isIframeDark));
  const linkBase = `text-base font-semibold tracking-wide transition-all ${isOverlayLightNav ? "text-white hover:text-white/80" : "text-slate-700 hover:text-[#7e22ce]"}`;
  const linkActive = "text-[#7e22ce]";
  const handleLogoClick = (e) => {
    closeAllMenus();
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full flex flex-col z-50 transition-all duration-300 ${isPlatformOpen || isFeaturesOpen || isSolutionsOpen || isResourcesOpen
          ? "bg-white md:shadow-md border-b border-gray-100"
          : isOpen
            ? "bg-white border-b border-slate-100"
            : isScrolled
              ? "bg-white md:bg-white/70 md:backdrop-blur-md md:shadow-sm md:border-b md:border-slate-200/70"
              : "bg-transparent border-none shadow-none backdrop-blur-0"
          }`}
      >
        <div className={`overflow-hidden bg-white border-none shadow-none transition-all duration-300 ease-in-out ${isScrolled || isIframeDark ? 'max-h-0 opacity-0' : 'max-h-[60px] opacity-100'}`}>
          <Link
            to="/features/ai-agents"
            className="group flex w-full items-center justify-center py-2 text-[13px] font-semibold tracking-wide transition-colors bg-white text-slate-900 hover:bg-slate-50 border-none shadow-none outline-none ring-0 px-4"
          >
            <span className="badge-glass-multicolor-text font-bold md:hidden">
              Meet KAI Agent
            </span>
            <span className="badge-glass-multicolor-text font-bold hidden md:inline">
              Meet KAI Agent - Boost human efficiency with tailored AI assistants
            </span>
          </Link>
        </div>

        <div className="max-w-full mx-auto px-4 lg:px-4 py-3 w-full">
          <div className="flex items-center">
            <div className="flex-none flex items-center">
              <div
                className="relative"
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
              >
                <Link
                  to="/"
                  onClick={handleLogoClick}
                  className="flex items-center group"
                >
                  <img
                    src={logo}
                    alt="KaryaUp Logo"
                    width="160"
                    height="44"
                    loading="eager"
                    className={`h-11 w-auto group-hover:scale-105 transition-transform duration-300 ${isOverlayLightNav ? "brightness-0 invert" : ""}`}
                  />
                </Link>

                <AnimatePresence>
                  {isLogoHovered && (
                    <MotionDiv
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 z-50 pointer-events-none"
                    >
                      <div className="bg-slate-900 border border-slate-800 shadow-2xl rounded-xl px-3 py-2 w-auto min-w-[180px] max-w-[280px] backdrop-blur-md">
                        <div className="absolute -top-1 w-2 h-2 bg-slate-900 border-t border-l border-slate-800 rotate-45 left-6" />
                        <p className="text-[13px] font-medium text-white leading-snug">
                          <span className="text-purple-400 font-bold tracking-normal block mb-0.5">KaryaUp</span>
                          From Sanskrit word<br /> <span className="italic opacity-90">“कार्य   ”</span> meaning action <br /> or work.
                        </p>
                      </div>
                    </MotionDiv>
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
                                <p className="text-xs text-slate-400">{item.sublabel}</p>
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
                                <p className="text-xs text-slate-400">{item.sublabel}</p>
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
                            className={`px-7 py-3 flex flex-col min-h-[240px] ${index % 2 === 0 ? "bg-white" : "bg-slate-50"
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
                                  className={`group flex items-center gap-3 py-1.5 px-3 rounded-xl transition-all hover:bg-white hover:shadow-md`}
                                >
                                  <item.icon size={18} strokeWidth={2} className={item.iconColor || "text-slate-600"} />
                                  <div className="flex flex-col">
                                    <p className="text-sm font-semibold text-slate-800 group-hover:text-purple-700 transition-colors">
                                      {item.label}
                                    </p>
                                    <p className="text-xs text-slate-400 whitespace-nowrap">
                                      {item.sublabel}
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
                                  <p className="text-[13px] text-slate-500">{item.sublabel}</p>
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
                                <p className="text-xs text-slate-400">{item.sublabel}</p>
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
                                <p className="text-xs text-slate-400">{item.sublabel}</p>
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
              {!isPageLoading && (
                <>
                  <a
                    href={authUrl}
                    onClick={closeAllMenus}
                    className={`group flex items-center gap-2 font-semibold tracking-wide transition-all ${isOverlayLightNav ? "text-white hover:text-white/80" : "text-slate-700 hover:text-[#7e22ce]"}`}
                  >
                    <LogIn size={16} className={`${isOverlayLightNav ? "text-white" : "text-slate-500"} group-hover:-translate-x-0.5 group-hover:text-[#7e22ce] transition-all`} />
                    <span className="text-[14px]">Log in</span>
                  </a>
                  <StartWorkspaceButton href={authUrl} onClick={closeAllMenus} />
                </>
              )}
            </div>

            <div className="ml-auto md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors ${isOpen || !isOverlayLightNav ? "text-slate-900 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 z-[100] bg-white flex flex-col"
            >
              <div className="flex items-center justify-between px-4 py-4 border-b border-slate-100 bg-white flex-shrink-0">
                <Link to="/" onClick={handleLogoClick} className="flex items-center group">
                  <img
                    src={logo}
                    alt="KaryaUp Logo"
                    width="130"
                    height="36"
                    className="h-9 w-auto"
                  />
                </Link>
                <button
                  onClick={closeAllMenus}
                  className="p-2 rounded-lg text-slate-900 hover:bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={26} strokeWidth={2.5} />
                </button>
              </div>

              <div
                data-lenis-prevent="true"
                className="flex-1 overflow-y-auto overscroll-contain px-4 py-6 bg-white"
              >
                <div className="space-y-4">
                  {navItems.map((item) => (
                    item.to ? (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        onClick={closeAllMenus}
                        className={({ isActive }) =>
                          `block rounded-[1.5rem] px-5 py-5 text-[17px] font-bold tracking-wide transition-all ${isActive
                            ? "bg-purple-50 text-purple-700 border border-purple-200 shadow-sm"
                            : "text-slate-800 bg-white border border-slate-200 shadow-[0_4px_20px_-12px_rgba(15,23,42,0.12)]"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ) : (
                      <div
                        key={item.label}
                        className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_4px_20px_-12px_rgba(15,23,42,0.12)]"
                      >
                        <button
                          type="button"
                          onClick={() => setMobileOpenSection((prev) => prev === item.label ? null : item.label)}
                          className="w-full flex items-center justify-between px-5 py-5 text-[17px] font-bold text-slate-800 tracking-wide"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`w-5 h-5 ml-4 shrink-0 transition-transform duration-300 ${mobileOpenSection === item.label ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileOpenSection === item.label && (
                            <MotionDiv
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="px-3 pb-4 overflow-hidden"
                            >
                              <div className="rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden">
                                {(mobileMenuSections[item.label] || []).map((subItem) => (
                                  <Link
                                    key={subItem.to}
                                    to={subItem.to}
                                    onClick={closeAllMenus}
                                    className="flex items-start gap-4 px-4 py-4 text-[15px] hover:bg-white transition-all border-b border-slate-100/50 last:border-b-0"
                                  >
                                    {subItem.icon && (
                                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                                        <subItem.icon
                                          size={20}
                                          strokeWidth={2}
                                          className={subItem.iconColor || "text-purple-600"}
                                        />
                                      </div>
                                    )}
                                    <div className="flex flex-col text-left justify-center">
                                      <span className="font-bold text-slate-900 leading-tight">{subItem.label}</span>
                                      {subItem.sublabel && (
                                        <span className="text-[12px] text-slate-500 mt-0.5 line-clamp-1">
                                          {subItem.sublabel}
                                        </span>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </MotionDiv>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col gap-4 pb-12">
                  <a
                    href={authUrl}
                    onClick={closeAllMenus}
                    className="w-full flex justify-center items-center gap-2 rounded-2xl border border-slate-200 bg-white py-4 text-[16px] font-bold text-slate-900 hover:bg-slate-50 transition-all shadow-sm"
                  >
                    <LogIn size={20} /> Log in
                  </a>
                  <div className="flex justify-center w-full group">
                    <StartWorkspaceButton
                      href={authUrl}
                      onClick={closeAllMenus}
                      size="lg"
                    />
                  </div>
                </div>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
