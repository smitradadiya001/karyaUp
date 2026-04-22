import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import watermark from "../assets/Karyaup-wm.svg";

const footerColumns = [
  {
    title: "Features",
    links: [
      { label: "Tasks", to: "/features/tasks" },
      { label: "Chat", to: "/features/chat" },
      { label: "Team", to: "/features/team" },
      { label: "Integrations", to: "/features/integrations" },
      { label: "Calendar", to: "/features/calendar" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Product Development", to: "/solutions/product-development" },
      { label: "Enterprise", to: "/solutions/enterprise" },
      { label: "Project Management", to: "/solutions/project-management" },
      { label: "Sales/CRM", to: "/solutions/crm" },
      { label: "Marketing", to: "/solutions/marketing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", to: "/resources/blog" },
      { label: "Documentation", to: "/resources/docs" },
      { label: "Video", to: "/resources/tutorials" },
      { label: "Book Demo", to: "/book-demo" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/karyaup/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61567610617048",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/karyaup_?igsh=cHczemR2dmRxdWhx",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (title) => {
    setOpenSection((current) => (current === title ? null : title));
  };

  return (
    <footer className="relative flex flex-col overflow-hidden border-t border-gray-100 bg-white pt-10 pb-8 text-gray-900">
      {/* Watermark — Match Agent page style with perspective and translation */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] flex min-h-[13rem] items-end justify-center overflow-hidden select-none sm:min-h-[18rem] md:min-h-[26rem] lg:min-h-[30rem]"
        aria-hidden="true"
      >
        <div className="flex w-full max-w-[100vw] justify-center px-0 [perspective:min(100vw,600px)] sm:[perspective:min(120vw,1400px)] lg:[perspective:min(140vw,2400px)]">
          <div className="origin-bottom max-sm:origin-[50%_100%] translate-x-0 sm:translate-x-16 sm:scale-100 md:translate-x-[4.5rem] lg:translate-x-24">
            <div className="flex max-w-full origin-bottom max-sm:origin-[50%_100%] items-end justify-center gap-0 [transform:translate(0,80%)_scale(2.2)_rotateY(4deg)_skewY(-0.5deg)] [transform-style:preserve-3d] sm:origin-bottom sm:gap-px sm:[transform:translate(0,90%)_scale(2.2)_rotateY(12deg)_skewY(-2deg)] md:[transform:translate(0,100%)_scale(2.5)_rotateY(12deg)_skewY(-2deg)] lg:[transform:translate(0,110%)_scale(2.8)_rotateY(12deg)_skewY(-2deg)]">
              <img
                src={watermark}
                alt="KaryaUp Watermark"
                loading="lazy"
                className="inline-block h-auto w-full max-w-full antialiased brightness-0 opacity-[0.08]"
                style={{
                  transform: "translateZ(100px)",
                }}
              />
            </div>
          </div>
        </div>
      </div>







      {/* --------------------------------------------------------------------------- */}
      <div className="relative z-[2] mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          {/* LEFT: Branding & Socials */}
          <div className="flex flex-col items-center sm:items-start lg:w-1/3">
            <div className="mb-6 space-y-4 text-center sm:text-left">
              <a href="/#hero-section" className="inline-flex items-center">
                <img
                  src={logo}
                  alt="KaryaUp Logo"
                  width="160"
                  height="56"
                  loading="lazy"
                  className="h-12 w-auto sm:h-14"
                />
              </a>
              <p className="max-w-xs text-[13px] font-medium leading-relaxed text-slate-500">
                From Sanskrit <span className="italic opacity-90">“Karya”</span>{" "}
                meaning action or work. Empowering teams to ship faster.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-200 hover:bg-purple-100 hover:text-purple-600"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Combined Nav Columns */}
          <div className="flex-1">
            <div className="hidden sm:grid sm:grid-cols-3 sm:gap-x-8 lg:gap-x-12">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h5 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">
                    {column.title}
                  </h5>
                  <ul className="space-y-2.5">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          className="text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-purple-600"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="w-full divide-y divide-slate-100 border-y border-slate-100 sm:hidden">
              {footerColumns.map((column) => {
                const isOpen = openSection === column.title;
                return (
                  <div key={column.title}>
                    <button
                      type="button"
                      onClick={() => toggleSection(column.title)}
                      className="flex w-full items-center justify-between py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-bold uppercase tracking-widest text-slate-900">
                        {column.title}
                      </span>
                      <span
                        className="text-lg text-slate-400 transition-transform duration-300"
                        style={{
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        +
                      </span>
                    </button>
                    <div
                      style={{
                        maxHeight: isOpen ? "400px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease",
                      }}
                    >
                      <ul className="space-y-3 pb-4">
                        {column.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              to={link.to}
                              className="text-sm font-medium text-slate-500 hover:text-purple-600"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative mt-auto flex flex-col items-center gap-4 border-t border-slate-100 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="relatve z-10 text-xs font-medium text-slate-600 max-sm:[text-shadow:0_1px_0_rgba(255,255,255,0.92),0_0_12px_rgba(255,255,255,0.75)]">
            &copy; 2026 KaryaUp. All rights reserved.
          </p>
          <div className="relative z-10 flex flex-wrap justify-center gap-5 text-xs font-semibold text-slate-600 max-sm:[text-shadow:0_1px_0_rgba(255,255,255,0.92),0_0_12px_rgba(255,255,255,0.75)]">
            <Link
              to="/disclaimer"
              className="transition-colors hover:text-purple-600"
            >
              Disclaimer
            </Link>
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-purple-600"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="transition-colors hover:text-purple-600"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
