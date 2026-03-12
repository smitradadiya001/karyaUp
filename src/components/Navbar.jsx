import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, LogIn, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Platform", to: "/platform" },
  { label: "Features", to: "/features" },
  { label: "Pricing", to: "/pricing" },
  { label: "Resources", to: "/resources" },
];

const platformMegaSections = [
  {
    heading: "Organize work",
    items: [
      { label: "Task Management", to: "/platform/task-management" },
      { label: "Project Timeline", to: "/platform/project-management" },
      { label: "Team Collaboration", to: "/platform/team-collaboration" },
    ],
  },
  {
    heading: "Track progress",
    items: [
      { label: "Time Tracking", to: "/platform/time-tracking" },
      { label: "Reports", to: "/platform/reports" },
    ],
  },
  {
    heading: "Business insights",
    items: [
      { label: "Boss Dashboard", to: "/platform/boss-dashboard" },
      { label: "Profit Tracking", to: "/platform/profit-tracking" },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBase =
    "text-sm font-semibold text-slate-700 hover:text-primary transition-all";
  const linkActive = "text-primary";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img
                src={logo}
                alt="KaryaUp Logo"
                className="h-9 sm:h-10 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          <div className="hidden md:flex md:flex-1 md:justify-center">
            <div className="flex items-center space-x-10">
              <div
                className="relative"
                onMouseEnter={() => setIsPlatformOpen(true)}
                onMouseLeave={() => setIsPlatformOpen(false)}
              >
                <NavLink
                  to="/platform"
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? linkActive : ""}`
                  }
                >
                  Platform
                </NavLink>

                {isPlatformOpen && (
                  <div className="absolute left-0 top-full mt-4 w-screen max-w-7xl px-4">
                    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl">
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-slate-900">
                          Platform
                        </h3>
                        <p className="mt-2 text-sm text-slate-600 max-w-md">
                          Explore how KaryaUp unifies work management, tracking,
                          and insights in one platform.
                        </p>
                      </div>
                      <div className="grid gap-6 md:grid-cols-3">
                        {platformMegaSections.map((section) => (
                          <div key={section.heading}>
                            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                              {section.heading}
                            </h3>
                            <ul className="mt-4 space-y-2">
                              {section.items.map((item) => (
                                <li key={item.to}>
                                  <Link
                                    to={item.to}
                                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition"
                                  >
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

              <NavLink
                to="/features"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ""}`
                }
              >
                Features
              </NavLink>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ""}`
                }
              >
                Pricing
              </NavLink>
              <NavLink
                to="/resources"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ""}`
                }
              >
                Resources
              </NavLink>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-sm font-semibold text-slate-700 hover:text-primary transition-all"
            >
              Log in
            </Link>
            <Link to="/start" className="btn-primary">
              Start Workspace
              <ArrowRight size={16} />
            </Link>
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
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-base font-semibold transition ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-slate-700 hover:bg-primary/5"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-6 pb-4 border-t border-gray-100 flex flex-col gap-3">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full flex justify-center items-center gap-2 rounded-xl border border-gray-200 bg-white py-3 text-sm font-semibold text-slate-700 hover:bg-gray-50 transition"
              >
                <LogIn size={18} /> Log in
              </Link>
              <Link
                to="/start"
                onClick={() => setIsOpen(false)}
                className="w-full btn-primary py-3 justify-center"
              >
                Start Workspace
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
