import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  UserCheck, 
  CreditCard, 
  ShieldAlert, 
  Ban, 
  XOctagon, 
  Settings2, 
  Scale, 
  ArrowRight,
  ShieldCheck,
  Lock,
  Globe
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const TERMS_SECTIONS = [
  {
    id: "use",
    title: "1. Use of Service",
    desc: "You agree to use the platform only for lawful purposes and in accordance with our community guidelines."
  },
  {
    id: "account",
    title: "2. Account Responsibility",
    desc: "Maintaining a secure account is a shared responsibility. You are responsible for:",
    content: [
      "Securing your login credentials and passwords",
      "All activities and interactions that occur under your account",
      "Notifying us immediately of any unauthorized access"
    ]
  },
  {
    id: "payments",
    title: "3. Subscription & Payments",
    content: [
      "All paid plans are billed in advance on a recurring basis",
      "Subscriptions are automatically renewed unless canceled",
      "No refunds are provided for partial months unless explicitly stated"
    ]
  },
  {
    id: "property",
    title: "4. Intellectual Property",
    desc: "All platform content, including trademarks, code, and design elements, belongs exclusively to KaryaUp. Unauthorized reproduction is strictly prohibited."
  },
  {
    id: "prohibited",
    title: "5. Prohibited Activities",
    desc: "To maintain a safe environment, you must NOT:",
    content: [
      "Upload or distribute harmful code, viruses, or malware",
      "Violate local, state, or international laws",
      "Misuse, scrape, or harvest platform data without permission"
    ]
  },
  {
    id: "termination",
    title: "6. Termination",
    desc: "We reserve the right to suspend or terminate accounts for violations of these terms, or for activities that pose a risk to other users."
  },
  {
    id: "liability",
    title: "7. Limitation of Liability",
    desc: "We strive for excellence, but we are not liable for:",
    content: [
      "Unforeseen data loss or data corruption",
      "Scheduled or unscheduled service downtime",
      "Issues arising from third-party integrations"
    ]
  },
  {
    id: "law",
    title: "8. Governing Law",
    desc: "This agreement is governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the state courts."
  }
];

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Use | KaryaUp</title>
        <meta
          name="description"
          content="By using KaryaUp, you agree to our Terms of Use and governing laws regarding platform activity and account responsibility."
        />
        <link rel="canonical" href="https://karyaup.com/terms-of-service" />
      </Helmet>

      <div className="min-h-screen bg-slate-50/50 pt-20 sm:pt-24 pb-16 lg:pb-24">
        {/* Hero Section - Centered */}
        <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6"
              >
                <FileText className="w-3.5 h-3.5" />
                Legal <span className="opacity-60">/</span> Terms & Conditions
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06] mb-6"
              >
                Our Terms of <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Service
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
              >
                By using KaryaUp, you agree to follow the rules and guidelines outlined in this document to ensure a secure environment for all.
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
              {TERMS_SECTIONS.map((section, idx) => (
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