import React from "react";
import { motion } from "framer-motion";
import {
  User,
  BarChart3,
  Lock,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Globe,
  ArrowRight,
  Database,
  Eye,
  Trash2,
  AlertCircle
} from "lucide-react";
import { Helmet } from "react-helmet-async";

// 4-Card Highlights from Screen Screenshot
const HIGHLIGHT_CARDS = [
  {
    icon: User,
    title: "Information We Collect",
    desc: "We may collect details like your name and email when you interact with our services or website to enhance your experience.",
    color: "purple"
  },
  {
    icon: BarChart3,
    title: "How We Use It",
    desc: "Your data is used to provide, maintain, and improve our services, as well as to communicate with you effectively.",
    color: "purple"
  },
  {
    icon: ShieldCheck,
    title: "Data Security",
    desc: "We use advanced security measures to protect your information from unauthorized access, alteration, or misuse.",
    color: "purple"
  },
  {
    icon: Mail,
    title: "Contact Us",
    desc: "For questions about this policy, please email us at infywebify@gmail.com.",
    color: "purple"
  }
];

// Detailed Content (9 Points provided by user)
const POLICY_SECTIONS = [
  {
    id: "collect",
    title: "1. Information We Collect",
    content: [
      "Personal identification (Name, email, phone number)",
      "Account credentials for authentication",
      "Usage data including IP, device, and browser information",
      "Payment details (Processed securely via third-party providers)"
    ]
  },
  {
    id: "use",
    title: "2. How We Use Your Data",
    content: [
      "Provide and improve our platform services",
      "Manage user accounts and task workflows",
      "Send essential updates and critical notifications",
      "Ensure platform security and prevent fraudulent activities"
    ]
  },
  {
    id: "basis",
    title: "3. Legal Basis",
    content: [
      "Processing based on your explicit consent",
      "Contractual necessity for providing services",
      "Compliance with applicable legal obligations"
    ]
  },
  {
    id: "sharing",
    title: "4. Data Sharing",
    desc: "We do NOT sell your data. We only share information with:",
    content: [
      "Authorized payment providers",
      "Cloud hosting and infrastructure partners",
      "Legal authorities if required for compliance"
    ]
  },
  {
    id: "rights",
    title: "5. User Rights",
    desc: "You have the total right to:",
    content: [
      "Access and request a copy of your personal data",
      "Correct or update your data anytime",
      "Request deletion of your account and data",
      "Withdraw your consent at any time"
    ]
  },
  {
    id: "security",
    title: "6. Data Security",
    desc: "We implement industry-standard technical and organizational security practices to protect your data from loss or unauthorized access."
  },
  {
    id: "retention",
    title: "7. Data Retention",
    desc: "We retain your data only for as long as necessary for service delivery or to comply with our legal and regulatory obligations."
  },
  {
    id: "transfers",
    title: "8. International Transfers",
    desc: "Your data may be processed globally by our trusted partners, always with appropriate safeguards and encryption in place."
  },
  {
    id: "contact",
    title: "9. Contact",
    desc: "If you have any questions or concerns regarding this policy, please reach out to us:",
    contact: "📧 privacy@karyaup.com"
  }
];

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | KaryaUp</title>
        <meta
          name="description"
          content="At KaryaUp, we are committed to protecting your personal data and ensuring transparency in how your information is handled."
        />
        <link rel="canonical" href="https://karyaup.com/privacy-policy" />
      </Helmet>

      <div className="min-h-screen bg-slate-50/50 pt-32 pb-16 lg:pb-24">
        {/* Hero Section - Centered without Image */}
        <section className="relative pt-0 pb-12 sm:pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              {/* Title - Matched to Task Page Font */}
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06] mb-6"
              >
                Data Privacy & <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Protection
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
              >
                At KaryaUp, we are committed to protecting your personal data and ensuring transparency in how your information is handled.
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
              {POLICY_SECTIONS.map((section, idx) => (
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
