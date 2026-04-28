import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Check,
  X,
  HelpCircle,
  ArrowRight,
  Zap,
  Shield,
  Rocket,
  Globe,
  Minus,
  Plus,
  Sun,
  Moon,
  ChevronDown,
  Feather,
  Trophy,
  Briefcase,
} from "lucide-react";
import NumberFlow from "@number-flow/react";
import hubspotLogo from "../assets/hubspot.webp";
import hubstaffLogo from "../assets/hubstaff.webp";
import pagarbookLogo from "../assets/pagarbook.webp";
import pocketHrmsLogo from "../assets/pocket-hrms.webp";
import salesforceLogo from "../assets/salesforce.webp";
import asanaLogo from "../assets/asana.webp";
import zoominfoLogo from "../assets/zoominfo.webp";
import zapierLogo from "../assets/zapier.webp";
import { Helmet } from "react-helmet-async";

const authUrl = "https://app.karyaup.com/auth";

const plans = [
  {
    name: "Free",
    description: "Perfect for individuals and small side projects.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "5 Projects",
      "Unlimited Tasks",
      "Unlimited Notes",
      "Unlimited Reminders",
      "2 Task Automations",
      "Free Application Access",
      "5 Clients",
      "3 Whiteboards",
      "5 Brands",
      "Team Collaboration",
      "Access Panel",
    ],
    notIncluded: [
      "Advanced Security",
      "Custom Domain",
      "Priority Support",
      "Team Collaboration",
    ],
    buttonText: "Start for Free",
    color: "brand",
  },
  {
    name: "Basic",
    description: "Best for growing teams needing more control.",
    monthlyPrice: 900,
    yearlyPrice: 720,
    features: [
      "Unlimited Projects",
      "Unlimited Tasks",
      "Unlimited Notes",
      "Unlimited Reminders",
      "2 Task Automations",
      "Free Application Access",
      "Unlimited Clients",
      "Unlimited Whiteboards",
      "Unlimited Brands",
      "Team Collaboration",
      "Access Panel",
      "Activity Captures",
      "Attendance",
      "Leave and Salary",
      "Quotations",
    ],
    notIncluded: ["Advanced Security", "Custom Domain", "Priority Support"],
    buttonText: "Start Basic Trial",
    color: "brand",
    popular: true,
  },
  {
    name: "Pro",
    description: "Advanced features for professional organizations.",
    monthlyPrice: 1500,
    yearlyPrice: 5200,
    features: [
      "Everything in Basic",
     
      "Access Panel",
      "CRM Analytics",
      "Find Leads",
      "Leads Mail",
      "Mail Campaigns",
    ],
    notIncluded: ["Dedicated Manager"],
    buttonText: "Upgrade to Pro",
    color: "brand",
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large-scale enterprises.",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Everything in Pro",
     
      "Access Panel",
      "Custom Features Development",
      "Onboarding & Training Support",
      "Scalable Infrastructure",
      "Custom Branding",
    ],
    notIncluded: [],
    buttonText: "Book a Demo",
    color: "brand",
  },
];

const comparisons = [
  {
    category: "Usage & Limits",
    items: [
      {
        name: "Tasks",
        free: "Unlimited",
        basic: "Unlimited",
        pro: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Projects",
        free: "5 Projects",
        basic: "Unlimited",
        pro: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Clients",
        free: "5 Clients",
        basic: "Unlimited",
        pro: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Brands",
        free: "5 Brands",
        basic: "Unlimited",
        pro: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Notes",
        free: "Unlimited",
        basic: "Unlimited",
        pro: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Reminders",
        free: "Unlimited",
        basic: "Unlimited",
        pro: "Unlimited",
        enterprise: "Unlimited",
      },
    ],
  },
  {
    category: "Views & Collaboration",
    items: [
      {
        name: "Whiteboards",
        free: "3 Boards",
        basic: "Unlimited",
        pro: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "App Integrations",
        free: true,
        basic: true,
        pro: true,
        enterprise: true,
      },
      {
        name: "Team Collaboration",
        free: true,
        basic: true,
        pro: true,
        enterprise: true,
      },
      {
        name: "Access Panel",
        free: true,
        basic: true,
        pro: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Reporting & Automation",
    items: [
      {
        name: "Automations",
        free: "2",
        basic: "Unlimited",
        pro: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "CRM Analytics",
        free: false,
        basic: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Find Leads",
        free: false,
        basic: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Mail Campaigns",
        free: false,
        basic: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Custom Features Development",
        free: false,
        basic: false,
        pro: false,
        enterprise: true,
      },
      {
        name: "Onboarding & Training Support",
        free: false,
        basic: false,
        pro: false,
        enterprise: true,
      },
      {
        name: "Scalable Infrastructure",
        free: false,
        basic: false,
        pro: false,
        enterprise: true,
      },
      {
        name: "Custom Branding",
        free: false,
        basic: false,
        pro: false,
        enterprise: true,
      },
      {
        name: "Activity Capture",
        free: false,
        basic: true,
        pro: true,
        enterprise: true,
      },
      {
        name: "Attendance",
        free: false,
        basic: true,
        pro: true,
        enterprise: true,
      },
      {
        name: "Leave and Salary",
        free: false,
        basic: true,
        pro: true,
        enterprise: true,
      },
    ],
  },
];

const faqs = [
  {
    question: "Can I change plans at any time?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time from your settings. Changes are pro-rated.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Absolutely. All paid plans come with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What happens if I exceed my storage limit?",
    answer:
      "We'll notify you when you reach 80% and 100% of your limit. You can easily upgrade to the next tier.",
  },
  {
    question: "Do you offer discounts for non-profits?",
    answer:
      "Yes, we have special pricing for registered non-profit organizations and educational institutions.",
  },
];

const colorMap = {
  brand: {
    primary: "#7e22ce",
    surface: "#F9FAFC",
    light: "#f3f0ff",
    border: "#d1d5db",
    shadow: "rgba(126, 34, 206, 0.2)",
  },
};

const DrawingIcon = ({ icon: IconName, size = 20, className }) => {
  const variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const iconPaths = {
    Feather: (
      <>
        <motion.path
          d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
          variants={variants}
        />
        <motion.line x1="16" y1="8" x2="2" y2="22" variants={variants} />
        <motion.line x1="17.5" y1="15" x2="9" y2="15" variants={variants} />
      </>
    ),
    Zap: (
      <motion.polygon
        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
        variants={variants}
      />
    ),
    Trophy: (
      <>
        <motion.path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" variants={variants} />
        <motion.path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" variants={variants} />
        <motion.path d="M4 22h16" variants={variants} />
        <motion.path
          d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
          variants={variants}
        />
        <motion.path
          d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
          variants={variants}
        />
        <motion.path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" variants={variants} />
      </>
    ),
    Briefcase: (
      <>
        <motion.rect
          width="20"
          height="14"
          x="2"
          y="7"
          rx="2"
          ry="2"
          variants={variants}
        />
        <motion.path
          d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
          variants={variants}
        />
      </>
    ),
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {iconPaths[IconName]}
    </motion.svg>
  );
};

export default function Pricing() {
  const handleAuthRedirect = useCallback(() => {
    window.location.href = authUrl;
  }, []);

  const [billingCycle, setBillingCycle] = useState("monthly");
  const [activeFaq, setActiveFaq] = useState(null);
  const [showComparison, setShowComparison] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedApps, setSelectedApps] = useState([
    "slack",
    "hubspot",
    "hubstaff",
    "pagarbook",
    "zoominfo",
    "zapier",
  ]);
  const [userCount, setUserCount] = useState(250);
  const [stickyHeaderVisible, setStickyHeaderVisible] = useState(false);
  const realTheadRef = useRef(null);
  const comparisonSectionRef = useRef(null);

  // Snake trail cursor for CTA section
  const ctaMouseX = useMotionValue(0);
  const ctaMouseY = useMotionValue(0);
  const [isHoveredCta, setIsHoveredCta] = useState(false);
  const ctaTrailConfig = [
    { stiffness: 220, damping: 24 },
    { stiffness: 180, damping: 21 },
    { stiffness: 140, damping: 18 },
    { stiffness: 100, damping: 15 },
    { stiffness: 70, damping: 12 },
  ];
  const c1x = useSpring(ctaMouseX, ctaTrailConfig[0]);
  const c1y = useSpring(ctaMouseY, ctaTrailConfig[0]);
  const c2x = useSpring(c1x, ctaTrailConfig[1]);
  const c2y = useSpring(c1y, ctaTrailConfig[1]);
  const c3x = useSpring(c2x, ctaTrailConfig[2]);
  const c3y = useSpring(c2y, ctaTrailConfig[2]);
  const c4x = useSpring(c3x, ctaTrailConfig[3]);
  const c4y = useSpring(c3y, ctaTrailConfig[3]);
  const c5x = useSpring(c4x, ctaTrailConfig[4]);
  const c5y = useSpring(c4y, ctaTrailConfig[4]);
  const ctaSegments = [
    { x: c1x, y: c1y, size: 160, opacity: 0.45, blur: 18 },
    { x: c2x, y: c2y, size: 130, opacity: 0.35, blur: 22 },
    { x: c3x, y: c3y, size: 100, opacity: 0.28, blur: 28 },
    { x: c4x, y: c4y, size: 80, opacity: 0.2, blur: 34 },
    { x: c5x, y: c5y, size: 60, opacity: 0.12, blur: 40 },
  ];
  const handleCtaMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    ctaMouseX.set(e.clientX - rect.left);
    ctaMouseY.set(e.clientY - rect.top);
  };

  useEffect(() => {
    const updateIsDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);
    return () => window.removeEventListener("resize", updateIsDesktop);
  }, []);

  const mainTableScrollRef = useRef(null);
  const stickyTableScrollRef = useRef(null);

  // Sync horizontal scroll between real table and sticky header
  const handleMainScroll = (e) => {
    if (stickyTableScrollRef.current) {
      stickyTableScrollRef.current.scrollLeft = e.target.scrollLeft;
    }
  };

  // Track when the real thead scrolls above the navbar (top ~80px)
  useEffect(() => {
    if (!showComparison) {
      setStickyHeaderVisible(false);
      return;
    }
    const handleScroll = () => {
      if (!realTheadRef.current || !comparisonSectionRef.current) return;
      const theadRect = realTheadRef.current.getBoundingClientRect();
      const sectionRect = comparisonSectionRef.current.getBoundingClientRect();
      // Show sticky when real thead top goes above navbar (68px) AND comparison section bottom is still below the sticky header's estimated height
      const theadAboveNav = theadRect.top <= 68;
      const sectionVisible = sectionRect.bottom > 220; // 68px (navbar) + ~150px (sticky header height)
      setStickyHeaderVisible(theadAboveNav && sectionVisible);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showComparison, isDesktop]);

  const apps = [
    {
      id: "slack",
      name: "Slack",
      price: 9,
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    },
    {
      id: "hubspot",
      name: "HubSpot",
      price: 13,
      logo: hubspotLogo,
    },
    {
      id: "hubstaff",
      name: "Hubstaff",
      price: 6,
      logo: hubstaffLogo,
    },
    {
      id: "pagarbook",
      name: "PagarBook",
      price: 8,
      logo: pagarbookLogo,
    },
    {
      id: "pocket-hrms",
      name: "Pocket HRMS",
      price: 10,
      logo: pocketHrmsLogo,
    },
    {
      id: "salesforce",
      name: "Salesforce",
      price: 15,
      logo: salesforceLogo,
    },
    {
      id: "asana",
      name: "Asana",
      price: 7,
      logo: asanaLogo,
    },
    {
      id: "zoominfo",
      name: "ZoomInfo",
      price: 5,
      logo: zoominfoLogo,
    },
    { id: "zapier", name: "Zapier", price: 12, logo: zapierLogo },
  ];

  const toggleApp = (id) => {
    setSelectedApps((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id],
    );
  };

  const totalPerUser = apps
    .filter((a) => selectedApps.includes(a.id))
    .reduce((acc, a) => acc + a.price, 0);
  const currentTotal = totalPerUser * userCount * 12;
  const karyaUpPrice = 12 * userCount * 12;
  const savings = currentTotal - karyaUpPrice;

  return (
    <>
      <Helmet>
        <title>Pricing Plans & Cost | Karyaup</title>

        <meta
          name="description"
          content="Explore Karyaup pricing plans designed for teams of all sizes. Choose the right plan to manage tasks, projects, and workflows with powerful features."
        />

        <meta
          name="keywords"
          content="pricing plans, SaaS pricing, project management pricing, team software cost, Karyaup pricing, free plan"
        />

        <meta name="author" content="Karyaup" />

        <meta property="og:title" content="Pricing Plans & Cost | Karyaup" />
        <meta
          property="og:description"
          content="Flexible pricing plans for teams to manage projects, tasks, and workflows."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/pricing" />
        <meta property="og:site_name" content="Karyaup" />

        <link rel="canonical" href="https://karyaup.com/pricing" />
      </Helmet>
      <div className="min-h-screen bg-white font-sans selection:bg-purple-100 italic-none relative overflow-visible">
        <div className="relative z-10">
          {/* ── Hero / Pricing Cards Section ── */}
          <section className="pt-32 sm:pt-36 md:pt-40 pb-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 mb-4 tracking-normal leading-[1.05]"
              >
                Plans For <br />
                Every{" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-[#ec4899] to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{
                    backgroundPosition: ["0% center", "-200% center"],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Stage.
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-base sm:text-lg text-slate-500 mb-6 leading-relaxed max-w-2xl mx-auto font-medium px-2"
              >
                From individual projects to enterprise-scale operations.<br/> we have
                a plan tailored for your growth.
              </motion.p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-8 sm:mb-10">
                <div className="relative bg-slate-100 p-1.5 rounded-full flex items-center gap-1 shadow-[inset_0_2px_4px_rgba(59,42,90,0.1),0_15px_30px_-5px_rgba(59,42,90,0.15)] border border-slate-200/50">
                  <motion.div
                    layoutId="billing-bg"
                    animate={{
                      x: billingCycle === "monthly" ? 0 : 124,
                      backgroundPosition: ["0% center", "-200% center"],
                    }}
                    className="absolute h-[calc(100%-12px)] w-[120px] bg-gradient-to-r from-[#7e22ce] via-[#ec4899] to-[#7e22ce] bg-[length:200%_auto] rounded-full shadow-md border border-white/10"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      backgroundPosition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                  />
                  <button
                    onClick={() => setBillingCycle("monthly")}
                    className={`relative z-10 w-[120px] py-2.5 rounded-full text-xs font-black transition-colors ${billingCycle === "monthly"
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-600"
                      }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle("yearly")}
                    className={`relative z-10 w-[120px] py-2.5 rounded-full text-xs font-black transition-all flex items-center justify-center gap-2 ${billingCycle === "yearly"
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-600"
                      }`}
                  >
                    Yearly
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full shadow-sm transition-colors ${billingCycle === "yearly"
                        ? "bg-white text-[#7e22ce]"
                        : "bg-green-500 text-white"
                        }`}
                    >
                      -20% off
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 px-0 sm:px-2 lg:px-4">
              {plans.map((plan, idx) => {
                const theme = colorMap.brand;
                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      layout: { duration: 0.3 },
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      mass: 0.8,
                    }}
                    style={{
                      backgroundColor: plan.popular ? undefined : theme.surface,
                    }}
                    className={`relative rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 border transition-all duration-500 flex flex-col shadow-[0_25px_50px_-12px_rgba(59,42,90,0.2)] will-change-transform ${plan.popular
                      ? "bg-[radial-gradient(circle_at_70%_10%,#4c1d95_0%,#2a1244_35%,#14081f_100%)] border-white/20"
                      : "border-white"
                      }`}
                  >
                    <motion.div
                      className={`absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] pointer-events-none border-2 border-transparent transition-colors duration-500 ${plan.popular
                        ? "border-transparent"
                        : "border-transparent"
                        }`}
                    />
                    <div className="relative z-10 flex flex-col flex-grow">
                      <div className="mb-6 sm:mb-8 lg:mb-10">
                        <h3
                          className={`text-xl sm:text-2xl font-black mb-2 sm:mb-3 ${plan.popular ? "text-white" : "text-slate-900"}`}
                        >
                          {plan.name}
                        </h3>
                        <p
                          className={`text-sm font-medium leading-relaxed mb-5 sm:mb-6 lg:mb-8 ${plan.popular ? "text-white/80" : "text-slate-500"}`}
                        >
                          {plan.description}
                        </p>

                        {plan.name === "Enterprise" ? (
                          <div className="flex items-center gap-1">
                            <span
                              className={`whitespace-nowrap text-2xl sm:text-3xl font-black ${plan.popular ? "text-white" : "text-slate-900"}`}
                            >
                              Custom pricing
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-baseline gap-1">
                            <span
                              className={`text-4xl sm:text-5xl font-black ${plan.popular ? "text-white" : "text-slate-900"}`}
                            >
                              ₹
                              {billingCycle === "monthly"
                                ? plan.monthlyPrice
                                : plan.yearlyPrice}
                            </span>
                            <span
                              className={`text-base sm:text-lg font-bold ${plan.popular ? "text-white/60" : "text-slate-400"}`}
                            >
                              /mo
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-3 sm:space-y-4 lg:space-y-5 mb-8 sm:mb-10 lg:mb-12 flex-grow">
                        {plan.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 sm:gap-4"
                          >
                            <div
                              className={`w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center transition-colors ${plan.popular
                                ? "bg-white/20 text-white"
                                : "bg-slate-100 text-[#7e22ce]"
                                }`}
                            >
                              <Check size={12} strokeWidth={4} />
                            </div>
                            <span
                              className={`text-sm font-bold ${plan.popular ? "text-white/90" : "text-slate-600"}`}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <a
                        href={
                          plan.name === "Enterprise" ? "/book-demo" : authUrl
                        }
                        onClick={
                          plan.name === "Enterprise"
                            ? undefined
                            : handleAuthRedirect
                        }
                        className="group relative z-10 flex h-[3.4em] w-full items-center justify-center overflow-hidden rounded-[30em] font-bold text-[14px] sm:text-[15px] transition-all duration-300 active:scale-95"
                        style={{
                          boxShadow: "0 18px 40px rgba(126, 34, 206, 0.22)",
                        }}
                      >
                        <div className="absolute inset-0 -z-20 bg-gradient-animated" />
                        <div className="absolute -inset-[3px] -z-10 origin-left scale-x-0 rounded-[30em] bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-active:scale-x-100" />
                        <span className="relative z-10 flex items-center justify-center gap-2 text-white transition-colors duration-300 group-hover:text-slate-800 group-active:text-slate-800">
                          {plan.buttonText}
                          <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1 group-active:translate-x-1"
                          />
                        </span>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── Toggle Comparison Button ── */}
          <section className="pt-12 sm:pt-14 lg:pt-16 pb-4 sm:pb-6 lg:pb-8 flex justify-center px-4">
            <motion.button
              onClick={() => setShowComparison(!showComparison)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 sm:px-6 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm font-black text-slate-600 hover:text-[#7e22ce] hover:border-[#7e22ce]/30 transition-all shadow-sm hover:shadow-md"
            >
              {showComparison
                ? "Hide Detailed Comparison"
                : "Show Detailed Comparison"}
              <motion.div
                animate={{ rotate: showComparison ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={14} />
              </motion.div>
            </motion.button>
          </section>

          {/* ── Comparison Section (Collapsible) ── */}

          {/* Floating sticky header clone -shown when real thead scrolls above navbar */}
          <AnimatePresence>
            {showComparison && stickyHeaderVisible && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="fixed top-[68px] left-0 right-0 z-[100] bg-white/80 backdrop-blur-md shadow-md border-b border-slate-200"
                style={{ boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 4px 10px -5px rgba(0,0,0,0.04)" }}
              >
                <div
                  ref={stickyTableScrollRef}
                  className="w-full overflow-x-auto scrollbar-hide"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <table
                    className="w-full text-left border-collapse"
                    style={{ minWidth: "680px" }}
                  >
                    <thead>
                      <tr>
                        <th className="py-4 sm:py-5 px-4 sm:px-8 w-1/4 bg-white" />
                        {plans.map((plan) => (
                          <th
                            key={plan.name}
                            className="py-4 sm:py-5 px-3 sm:px-6 text-center bg-white"
                          >
                            <div className="flex flex-col items-center gap-1 sm:gap-2">
                              <div className="text-sm sm:text-base font-black text-slate-900">
                                {plan.name}
                              </div>
                              <div className="text-[10px] sm:text-[11px] font-bold text-slate-400">
                                {plan.name === "Enterprise"
                                  ? <span className="whitespace-nowrap">Custom pricing</span>
                                  : `₹${billingCycle === "monthly"
                                    ? plan.monthlyPrice
                                    : plan.yearlyPrice
                                  } / mo`}
                              </div>
                              <a
                                href={
                                  plan.name === "Enterprise"
                                    ? "/book-demo"
                                    : authUrl
                                }
                                onClick={
                                  plan.name === "Enterprise"
                                    ? undefined
                                    : handleAuthRedirect
                                }
                                className="group relative mt-1 flex h-[2.5em] sm:h-[2.8em] items-center justify-center overflow-hidden rounded-[30em] bg-gradient-animated px-3 sm:px-6 text-[10px] sm:text-xs font-black transition-all duration-300 active:scale-95"
                                style={{
                                  boxShadow:
                                    "0 10px 24px rgba(126, 34, 206, 0.18)",
                                }}
                              >
                                <div className="absolute -inset-[3px] z-0 origin-left scale-x-0 rounded-[30em] bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100" />
                                <span className="relative z-10 flex items-center justify-center gap-1.5 text-white transition-colors duration-300 group-hover:text-slate-800">
                                  {plan.name === "Enterprise"
                                    ? "Book a Demo"
                                    : "Get Started"}
                                  <ArrowRight
                                    size={12}
                                    className="transition-transform group-hover:translate-x-0.5"
                                  />
                                </span>
                              </a>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showComparison && (
              <motion.section
                ref={comparisonSectionRef}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="pb-12 sm:pb-16 lg:pb-24 px-0 relative overflow-visible w-full"
              >
                <div className="w-full">
                  <div className="bg-white border-y border-slate-100 relative">
                    <div
                      ref={mainTableScrollRef}
                      onScroll={handleMainScroll}
                      className="relative overflow-x-auto"
                    >
                      <table
                        className="w-full text-left border-collapse"
                        style={{ minWidth: "680px" }}
                      >
                        {/* Real thead -tracked via ref to detect when it scrolls off screen */}
                        <thead ref={realTheadRef} className="bg-white">
                          <tr>
                            <th className="py-4 sm:py-6 px-4 sm:px-8 w-1/4 bg-white border-b border-slate-200" />
                            {plans.map((plan) => (
                              <th
                                key={plan.name}
                                className="py-4 sm:py-6 px-3 sm:px-6 text-center bg-white border-b border-slate-200"
                              >
                                <div className="flex flex-col items-center gap-1 sm:gap-3">
                                  <div className="text-sm sm:text-base font-black text-slate-900">
                                    {plan.name}
                                  </div>
                                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-400">
                                    {plan.name === "Enterprise"
                                      ? <span className="whitespace-nowrap">Custom pricing</span>
                                      : `₹${billingCycle === "monthly"
                                        ? plan.monthlyPrice
                                        : plan.yearlyPrice
                                      } / mo`}
                                  </div>
                                  <a
                                    href={
                                      plan.name === "Enterprise"
                                        ? "/book-demo"
                                        : authUrl
                                    }
                                    onClick={
                                      plan.name === "Enterprise"
                                        ? undefined
                                        : handleAuthRedirect
                                    }
                                    className="group relative mt-1 sm:mt-2 flex h-[2.7em] sm:h-[3em] items-center justify-center overflow-hidden rounded-[30em] bg-gradient-animated px-3 sm:px-6 text-[10px] sm:text-xs font-black transition-all duration-300 active:scale-95"
                                    style={{
                                      boxShadow:
                                        "0 12px 28px rgba(126, 34, 206, 0.18)",
                                    }}
                                  >
                                    <div className="absolute -inset-[3px] z-0 origin-left scale-x-0 rounded-[30em] bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-active:scale-x-100" />
                                    <span className="relative z-10 flex items-center justify-center gap-1.5 text-white transition-colors duration-300 group-hover:text-slate-800 group-active:text-slate-800">
                                      {plan.name === "Enterprise"
                                        ? "Book a Demo"
                                        : "Get Started"}
                                      <ArrowRight
                                        size={12}
                                        className="transition-transform group-hover:translate-x-0.5 group-active:translate-x-0.5"
                                      />
                                    </span>
                                  </a>
                                </div>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {comparisons.flatMap((cat) => cat.items).map((item) => (
                            <tr
                              key={item.name}
                              className="border-b border-slate-200 group hover:bg-slate-50 transition-colors"
                            >
                              <td className="py-3 sm:py-4 px-4 sm:px-10">
                                <span className="text-xs sm:text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                                  {item.name}
                                </span>
                              </td>
                              {plans.map((plan) => (
                                <td
                                  key={`${plan.name}-${item.name}`}
                                  className="py-3 sm:py-4 px-3 sm:px-6 text-center"
                                >
                                  <div className="flex justify-center">
                                    {(() => {
                                      const val = item[plan.name.toLowerCase()];
                                      if (typeof val === "boolean") {
                                        return val ? (
                                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                            <Check size={12} strokeWidth={3} />
                                          </div>
                                        ) : (
                                          <Minus
                                            className="text-slate-100"
                                            size={16}
                                          />
                                        );
                                      }
                                      return (
                                        <span className="text-xs sm:text-sm font-black text-slate-900">
                                          {val}
                                        </span>
                                      );
                                    })()}
                                  </div>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* ── FAQ Section ── */}
          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10 sm:mb-12 lg:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6 font-display tracking-tight leading-[1.2]">
                  Got{" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-[#ec4899] to-[#7e22ce] bg-[length:200%_auto] italic pb-1"
                    animate={{
                      backgroundPosition: ["0% center", "-200% center"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    Questions?
                  </motion.span>
                </h2>
                <p className="text-slate-500 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed px-2">
                  Everything you need to know about our plans and features.<br/>
                  Can't find what you're looking for?
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 flex justify-center"
                >
                  <Link
                    to="/contact-us"
                    className="group relative flex h-[3.4em] items-center justify-center overflow-hidden rounded-[30em] px-10 text-[15px] font-black transition-all duration-300 active:scale-95 shadow-[0_18px_40px_rgba(126,34,206,0.22)]"
                  >
                    <div className="absolute inset-0 -z-20 bg-gradient-animated" />
                    <div className="absolute -inset-[3px] -z-10 origin-left scale-x-0 rounded-[30em] bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100" />
                    <span className="relative z-10 flex items-center justify-center gap-2 text-white transition-colors duration-300 group-hover:text-slate-800">
                      Contact Our Team
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </motion.div>
              </motion.div>

              <div className="space-y-3 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setActiveFaq(index)}
                    onMouseLeave={() => setActiveFaq(null)}
                    className={`group rounded-[1.5rem] sm:rounded-[2rem] border transition-all duration-300 overflow-hidden ${activeFaq === index
                      ? "bg-white border-primary/20 shadow-[0_20px_40px_-15px_rgba(59,42,90,0.15)]"
                      : "bg-white/50 border-slate-200 hover:border-slate-300 hover:bg-white"
                      }`}
                  >
                    <button
                      type="button"
                      className="w-full flex items-center justify-between p-4 sm:p-6 text-left cursor-default"
                    >
                      <motion.span
                        animate={{
                          backgroundPosition: ["0% center", "-200% center"],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className={`text-base sm:text-xl font-bold font-display transition-colors pr-3 ${activeFaq === index
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-[#ec4899] to-[#7e22ce] bg-[length:200%_auto]"
                          : "text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7e22ce] group-hover:via-[#ec4899] group-hover:to-[#7e22ce] group-hover:bg-[length:200%_auto]"
                          }`}
                      >
                        {faq.question}
                      </motion.span>
                      <motion.div
                        animate={{
                          backgroundPosition:
                            activeFaq === index
                              ? ["0% center", "-200% center"]
                              : "0% center",
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeFaq === index
                          ? "bg-gradient-to-r from-[#7e22ce] via-[#ec4899] to-[#7e22ce] bg-[length:200%_auto] text-white rotate-180"
                          : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                          }`}
                      >
                        <ChevronDown
                          size={18}
                          className={`transform transition-transform duration-300 ${activeFaq === index ? "scale-110" : ""}`}
                        />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {activeFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                            <div className="h-px w-full bg-slate-100 mb-3 sm:mb-4" />
                            <p className="text-slate-600 font-medium leading-relaxed text-base sm:text-lg">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Savings Calculator Section ── */}
          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8 sm:mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 tracking-tight leading-[1.06]">
                  The Consolidation <br />
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-[#ec4899] to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{
                      backgroundPosition: ["0% center", "-200% center"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    Savings Are Real.
                  </motion.span>
                </h2>
                <p className="text-slate-500 font-bold text-sm sm:text-base px-2">
                  Stop paying for multiple tools and save thousands every year.
                </p>
              </div>

              <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 shadow-[0_30px_60px_-15px_rgba(59,42,90,0.1)] p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 sm:mb-6">
                    Your apps today
                  </h3>
                  <p className="text-slate-400 font-bold text-[10px] mb-3 sm:mb-4 uppercase tracking-wider">
                    Which apps do you use?
                  </p>

                  <div className="grid grid-cols-3 justify-items-center gap-1 sm:gap-1.5 mb-6 sm:mb-8">
                    {apps.map((app) => (
                      <motion.button
                        key={app.id}
                        onClick={() => toggleApp(app.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`group relative aspect-square w-full max-w-[92px] sm:max-w-[112px] rounded-lg sm:rounded-xl flex items-center justify-center transition-all p-1 overflow-hidden ${selectedApps.includes(app.id)
                          ? "bg-[#7e22ce]/10"
                          : "bg-transparent hover:bg-slate-50"
                          }`}
                      >
                        {selectedApps.includes(app.id) && (
                          <div className="absolute top-1 right-1 z-10 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                            <Check size={10} strokeWidth={4} className="text-white" />
                          </div>
                        )}
                        <span
                          className="flex items-center justify-center w-full h-full"
                          style={{ mixBlendMode: "multiply" }}
                        >
                          <img
                            src={app.logo}
                            alt={app.name}
                            className={`object-contain ${["Pocket HRMS", "Salesforce", "Asana"].includes(app.name)
                              ? "w-9 h-9 sm:w-11 sm:h-11"
                              : "w-7 h-7 sm:w-9 sm:h-9"
                              }`}
                          />
                        </span>
                        <div className="absolute inset-x-0 bottom-0 bg-black/90 text-white text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.18em] py-1.5 text-center opacity-0 translate-y-full transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                          {app.name}
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  <div className="bg-slate-50/50 p-3 sm:p-4 rounded-2xl border border-slate-100">
                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                      <span className="text-slate-400 font-black text-[10px] uppercase tracking-wider">
                        People strength
                      </span>
                      <span className="text-[#7e22ce] font-black text-sm sm:text-base">
                        {userCount}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="1000"
                      step="5"
                      value={userCount}
                      onChange={(e) => setUserCount(parseInt(e.target.value))}
                      style={{
                        background: `linear-gradient(to right, #7e22ce 0%, #7e22ce ${((userCount - 5) / 995) * 100}%, #e2e8f0 ${((userCount - 5) / 995) * 100}%, #e2e8f0 100%)`,
                      }}
                      className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-[#7e22ce]"
                    />
                  </div>
                </div>

                <div className="flex-1 bg-slate-50/30 rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 md:p-8 border border-slate-100 flex flex-col justify-between">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 sm:mb-6">
                      Apps to replace
                    </h3>
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {apps
                        .filter((a) => selectedApps.includes(a.id))
                        .map((app) => (
                          <div
                            key={app.id}
                            className="flex justify-between items-center pb-2 sm:pb-2.5 border-b border-slate-100 last:border-0 last:pb-0"
                          >
                            <span className="text-slate-500 font-bold text-xs sm:text-sm tracking-tight">
                              {app.name}
                            </span>
                            <span className="text-slate-900 font-black text-xs sm:text-sm">
                              ₹{app.price} / user
                            </span>
                          </div>
                        ))}
                    </div>

                    <div className="pt-3 sm:pt-4 border-t border-slate-200 flex justify-between items-center mb-1">
                      <span className="text-slate-900 font-black text-sm sm:text-base italic">
                        Total
                      </span>
                      <div className="text-slate-900 font-black text-lg sm:text-xl flex items-center gap-1 uppercase tracking-tight">
                        <NumberFlow
                          value={currentTotal}
                          prefix="₹"
                          format={{ notation: "standard" }}
                        />{" "}
                        <span className="text-xs text-slate-400">/year</span>
                      </div>
                    </div>
                    <p className="text-slate-400 font-bold text-[9px] uppercase tracking-widest text-right mb-5 sm:mb-8">
                      KaryaUp for {userCount} users ={" "}
                      <NumberFlow
                        value={karyaUpPrice}
                        prefix="₹"
                        format={{ notation: "standard" }}
                      />{" "}
                      / YEAR
                    </p>
                  </div>

                  <div className="bg-white/80 rounded-[1.25rem] sm:rounded-[1.5rem] p-3 sm:p-4 border border-white shadow-sm flex items-center justify-between mb-4 sm:mb-6">
                    <div>
                      <p className="text-slate-400 font-black text-[9px] uppercase tracking-widest mb-0.5">
                        Savings
                      </p>
                      <div className="text-xl sm:text-2xl font-black text-[#7e22ce] tracking-tighter">
                        <NumberFlow
                          value={Math.max(0, savings)}
                          prefix="₹"
                          format={{ notation: "standard" }}
                        />
                      </div>
                    </div>
                    <div className="text-[9px] font-bold text-slate-400 leading-tight max-w-[100px] sm:max-w-[120px] text-right uppercase tracking-tighter">
                      Estimated annual ROI compared to individual tools.
                    </div>
                  </div>

                  <a
                    href={authUrl}
                    onClick={handleAuthRedirect}
                    className="group relative z-10 flex h-[3.4em] w-full items-center justify-center overflow-hidden rounded-[30em] font-bold text-[14px] sm:text-[15px] transition-all duration-300 active:scale-95"
                    style={{
                      boxShadow: "0 18px 40px rgba(126, 34, 206, 0.22)",
                    }}
                  >
                    <div className="absolute inset-0 -z-20 bg-gradient-animated" />
                    <div className="absolute -inset-[3px] -z-10 origin-left scale-x-0 rounded-[30em] bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-active:scale-x-100" />
                    <span className="relative z-10 flex items-center justify-center gap-2 text-white transition-colors duration-300 group-hover:text-slate-800 group-active:text-slate-800">
                      Start Saving Today
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1 group-active:translate-x-1"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ── Premium CTA ── */}
          <section className="py-8 sm:py-10 lg:py-10 px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              onMouseMove={handleCtaMouseMove}
              onMouseEnter={() => setIsHoveredCta(true)}
              onMouseLeave={() => setIsHoveredCta(false)}
              className={`max-w-6xl mx-auto rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[3.25rem] p-8 sm:p-10 md:p-12 lg:p-14 relative overflow-hidden text-center border border-white/10 ${isHoveredCta ? 'cursor-none' : ''}`}
            >
              {/* FeatureCTA-style Black Background */}
              <div className="absolute inset-0 bg-black rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[3.25rem]" />

              {/* Ambient Radial Gradients (matching FeatureCTA) */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(168,85,247,0.4),transparent_50%)] pointer-events-none rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[3.25rem]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(236,72,153,0.12),transparent_40%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,34,206,0.12),transparent_40%)] pointer-events-none" />

              {/* Snake Trail Cursor Effect */}
              {ctaSegments.map((seg, i) => (
                <motion.div
                  key={i}
                  className="absolute pointer-events-none z-[60] rounded-full mix-blend-screen"
                  style={{
                    width: seg.size,
                    height: seg.size,
                    left: seg.x,
                    top: seg.y,
                    x: "-50%",
                    y: "-50%",
                    opacity: isHoveredCta ? seg.opacity : 0,
                    background: `radial-gradient(circle, rgba(192, 38, 211, 0.9) 0%, rgba(168, 85, 247, 0) 70%)`,
                    filter: `blur(${seg.blur}px)`,
                    scale: isHoveredCta ? 1 : 0,
                  }}
                />
              ))}

              {/* Lead Cursor Glow */}
              <motion.div
                className="absolute w-80 h-80 pointer-events-none z-[50] rounded-full mix-blend-screen"
                style={{
                  left: c1x,
                  top: c1y,
                  x: "-50%",
                  y: "-50%",
                  opacity: isHoveredCta ? 0.4 : 0,
                  scale: isHoveredCta ? 1 : 0,
                  background: "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%)",
                  filter: "blur(50px)",
                }}
              />

              {/* Noise Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay">
                <svg className="h-full w-full">
                  <filter id="pricingNoiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#pricingNoiseFilter)" />
                </svg>
              </div>

              <div className="relative z-10">
                <h2 className="text-[clamp(1.9rem,5.5vw,3.25rem)] font-black text-white mb-4 sm:mb-5 tracking-normal leading-[1.08]">
                  <span className="block">Transform Your</span>
                  <span className="block">
                    <motion.span
                      className="inline-block mx-1 tracking-[0.03em] text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-[#ec4899] to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Workflow
                    </motion.span>{" "}
                    <span className="inline-block">Today.</span>
                  </span>
                </h2>
                <p className="text-slate-400 text-sm sm:text-base md:text-lg font-medium mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
                  Join thousands of high-performing teams who have already
                  leveled up their productivity with KaryaUp. From automated
                  payroll to AI-driven project insights, everything you need is
                  just one click away.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href={authUrl}
                    onClick={handleAuthRedirect}
                    className="group relative z-10 flex h-[3.5em] w-full sm:w-auto min-w-[16em] items-center justify-center overflow-hidden rounded-[30em] font-bold text-[15px] transition-all duration-300 active:scale-95"
                    style={{ boxShadow: "0 18px 40px rgba(126, 34, 206, 0.22)" }}
                  >
                    <div className="absolute inset-0 -z-20 bg-gradient-animated" />
                    <div className="absolute -inset-[3px] -z-10 origin-left scale-x-0 rounded-[30em] bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100" />
                    <span className="relative z-10 flex items-center justify-center gap-2 text-white transition-colors duration-300 group-hover:text-slate-800">
                      Get Started for Free
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                  <Link
                    to="/book-demo"
                    className="relative z-10 flex h-[3.5em] w-full sm:w-auto min-w-[14em] items-center justify-center rounded-[30em] bg-white/10 backdrop-blur-md border border-white/20 font-bold text-[15px] text-white transition-all duration-300 hover:bg-white/15 active:scale-95"
                  >
                    Book a Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
}


