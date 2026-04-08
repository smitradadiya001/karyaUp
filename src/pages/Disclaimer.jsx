import React from "react";
import { motion } from "framer-motion";
import { 
  AlertCircle,
  Cookie,
  CreditCard,
  ShieldCheck,
  Ban,
  ShieldAlert,
  ArrowRight,
  Lock,
  Globe,
  Database
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const DISCLAIMER_SECTIONS = [
  {
    id: "disclaimer",
    title: "1. Disclaimer",
    desc: "KaryaUp provides productivity and workflow management tools for businesses and individuals.",
    content: [
      "We do not guarantee specific business outcomes or revenue increases",
      "The service is provided \"as is\" without warranties of any kind",
      "We are not responsible for user decisions, data misuse, or external impacts"
    ]
  },
  {
    id: "cookies",
    title: "2. Cookie Policy",
    desc: "We use cookies and similar tracking technologies to improve your user experience and analyze platform performance.",
    content: [
      "Essential Cookies: Required for core functionality like login and security",
      "Analytics Cookies: Used to track performance and understand user behavior",
      "Marketing Cookies: Used for relevant ads and retargeting campaigns"
    ],
    secondaryDesc: "Consent: We only use non-essential cookies after your explicit approval. You can accept, reject, or change your preferences anytime via settings."
  },
  {
    id: "refunds",
    title: "3. Refund Policy",
    desc: "Our billing policies are designed for transparency and fairness.",
    content: [
      "All subscriptions and plans are non-refundable by default",
      "Exceptions may be granted on a case-by-case basis at our discretion",
      "Cancellation stops future billing cycles immediately"
    ]
  },
  {
    id: "usage",
    title: "4. Acceptable Use Policy",
    desc: "To ensure a safe environment, you agree NOT to:",
    content: [
      "Use KaryaUp for any illegal activities or unauthorized purposes",
      "Upload or distribute harmful, abusive, or malicious content",
      "Attempt to reverse engineer the software or platform logic",
      "Exploit system vulnerabilities or bypass security controls"
    ],
    secondaryDesc: "Violation of these policies may result in immediate account termination without prior notice."
  },
  {
    id: "security",
    title: "5. Security Policy",
    desc: "Data security is our top priority. We follow industry best practices, including:",
    content: [
      "End-to-end data encryption and secure transmission protocols",
      "Granular access control and permission management",
      "Continuous system monitoring and rigorous security logging",
      "Deployment on highly secure and resilient cloud infrastructure"
    ]
  },
  {
    id: "contact",
    title: "6. Contact",
    desc: "If you have any questions or concerns regarding these policies and disclaimers, please reach out to us:",
    contact: "📧 privacy@karyaup.com"
  }
];

export default function Disclaimer() {
  return (
    <>
      <Helmet>
        <title>Disclaimer & Policies | KaryaUp</title>
        <meta
          name="description"
          content="Understand our Disclaimer, Cookie Policy, Refund Policy, and Security practices at KaryaUp. Quality, transparency, and trust are our core values."
        />
        <link rel="canonical" href="https://karyaup.com/disclaimer" />
      </Helmet>

      <div className="min-h-screen bg-slate-50/50 pt-32 pb-16 lg:pb-24">
        {/* Hero Section - Centered */}
        <section className="relative pt-0 pb-12 sm:pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06] mb-6"
              >
                Disclaimer & <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Legal Notices
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
              >
                Transparency is key. Here you will find our general disclaimer, cookie usage details, refund terms, and security standards.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Detailed Policy Content - Right-Side Layout */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
          <div className="max-w-2xl lg:max-w-3xl ml-auto mr-0 lg:mr-10 xl:mr-20 relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-16 sm:space-y-20"
            >
              {DISCLAIMER_SECTIONS.map((section, idx) => (
                <div key={section.id} className="relative pl-7 sm:pl-10 lg:pl-14">
                  {/* Main Vertical Timeline line */}
                  <div className="absolute left-0 top-0 bottom-[-60px] sm:bottom-[-80px] w-[1.5px] sm:w-[2px] bg-slate-200/70" />

                  {/* Section Header Dot (Gradient) */}
                  <div className="absolute left-[-4px] sm:left-[-5px] top-2 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 shadow-lg shadow-purple-500/20 z-10" />

                  <h2 className="text-xl sm:text-3xl font-black text-slate-900 mb-6 sm:mb-8 tracking-tight">
                    {section.title}
                  </h2>

                  <div className="space-y-5 sm:space-y-6">
                    {section.desc && (
                      <div className="relative group">
                        {/* Horizontal Connector Line to Main Timeline for descriptions */}
                        <div className="absolute left-[-28px] sm:left-[-40px] lg:left-[-56px] top-[18px] sm:top-[22px] w-7 sm:w-10 lg:w-14 h-[1.5px] sm:h-[2px] bg-slate-200/70" />

                        {/* Bullet Dot (Gradient) for descriptions */}
                        <div className="absolute left-[-2px] top-[18px] sm:top-[22px] w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-400 group-hover:scale-150 transition-transform duration-300 z-10 -translate-y-1/2" />

                        <p className={`text-sm sm:text-lg text-slate-600 font-medium leading-relaxed pl-6 sm:pl-8 ${!section.content ? "max-w-md sm:max-w-lg lg:max-w-xl" : ""}`}>
                          {section.desc}
                        </p>
                      </div>
                    )}

                    {section.content && (
                      <ul className="space-y-4 sm:space-y-5">
                        {section.content.map((point, k) => (
                          <li key={k} className="relative group pl-6 sm:pl-8">
                            {/* Horizontal Connector Line to Main Timeline */}
                            <div className="absolute left-[-28px] sm:left-[-40px] lg:left-[-56px] top-1/2 -translate-y-1/2 w-7 sm:w-10 lg:w-14 h-[1.5px] sm:h-[2px] bg-slate-200/70" />

                            {/* Bullet Dot (Gradient) */}
                            <div className="absolute left-[-2px] top-1/2 -translate-y-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-400 group-hover:scale-150 transition-transform duration-300 z-10" />

                            <span className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed block">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.secondaryDesc && (
                       <p className="text-sm sm:text-lg text-slate-500 font-medium italic leading-relaxed pl-6 sm:pl-8 opacity-80">
                        {section.secondaryDesc}
                       </p>
                    )}

                    {section.contact && (
                      <div className="relative group">
                        {/* Horizontal Connector Line to Main Timeline for email */}
                        <div className="absolute left-[-28px] sm:left-[-40px] lg:left-[-56px] top-1/2 -translate-y-1/2 w-7 sm:w-10 lg:w-14 h-[1.5px] sm:h-[2px] bg-slate-200/70" />

                        {/* Bullet Dot (Gradient) for email */}
                        <div className="absolute left-[-2px] top-1/2 -translate-y-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-400 group-hover:scale-150 transition-transform duration-300 z-10" />

                        <div className="ml-6 sm:ml-8 p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-between group">
                          <a
                            href={`mailto:${section.contact.split(" ")[1]}`}
                            className="text-sm sm:text-lg font-black text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-2"
                          >
                            {section.contact}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Simple Footer Note */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
          <div className="h-px w-full bg-slate-200 mb-8" />
          <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-slate-400">
            Last Updated: March 31, 2026
          </p>
        </div>
      </div>
    </>
  );
}
