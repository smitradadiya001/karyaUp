import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Mail, Globe } from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: [
      "Account information such as your name, email address, and password when you register.",
      "Usage data including pages visited, features used, and interaction patterns.",
      "Device information such as browser type, operating system, and IP address.",
      "Cookies and similar tracking technologies for analytics and personalization.",
    ],
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      "To provide, maintain, and improve KaryaUp's project management services.",
      "To personalize your experience and deliver relevant content and features.",
      "To communicate with you about updates, security alerts, and support.",
      "To analyze usage trends and optimize platform performance.",
      "To detect, prevent, and address technical issues and security threats.",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      "We implement industry-standard encryption (AES-256) for data at rest and TLS 1.3 for data in transit.",
      "Regular security audits and penetration testing are conducted by third-party firms.",
      "Access to personal data is restricted to authorized personnel on a need-to-know basis.",
      "We maintain comprehensive incident response procedures for potential data breaches.",
    ],
  },
  {
    icon: Globe,
    title: "Data Sharing & Third Parties",
    content: [
      "We do not sell your personal information to third parties.",
      "We may share data with trusted service providers who assist in operating our platform.",
      "We may disclose information when required by law or to protect our legal rights.",
      "Third-party integrations you enable may access data as described in their own privacy policies.",
    ],
  },
  {
    icon: Shield,
    title: "Your Rights & Choices",
    content: [
      "Access, correct, or delete your personal data at any time from your account settings.",
      "Opt out of marketing communications via the unsubscribe link in any email.",
      "Request a portable copy of your data in a machine-readable format.",
      "Withdraw consent for data processing where applicable under GDPR or similar regulations.",
      "Lodge a complaint with your local data protection authority if you believe your rights have been violated.",
    ],
  },
  {
    icon: Mail,
    title: "Contact Us",
    content: [
      "If you have questions about this Privacy Policy, please contact us at privacy@karyaup.com.",
      "For data protection inquiries, reach our Data Protection Officer at dpo@karyaup.com.",
      "Mailing address: KaryaUp Inc., 123 Innovation Drive, San Francisco, CA 94105.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50 py-20 md:py-28 pt-32">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(126, 34, 206, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(217, 70, 239, 0.1) 0%, transparent 50%)",
        }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 border border-purple-100">
              <Shield className="h-8 w-8 text-[#7e22ce]" />
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl leading-[0.9]">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500 font-bold">
              Your privacy matters to us. This policy explains how KaryaUp collects, uses, and protects your information.
            </p>
            <p className="mt-4 text-xs font-black uppercase tracking-widest text-slate-400">
              Last updated: March 25, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  className="rounded-[2.5rem] border border-slate-100 bg-white p-8 md:p-10 shadow-sm transition-shadow hover:shadow-xl hover:shadow-purple-900/5"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-50 border border-purple-100">
                      <Icon className="h-6 w-6 text-[#7e22ce]" />
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 md:text-3xl tracking-tight">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-4">
                    {section.content.map((item, j) => (
                      <li key={j} className="flex items-start gap-4 text-slate-600 font-medium text-base leading-relaxed">
                        <div className="mt-2.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#7e22ce]/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
;