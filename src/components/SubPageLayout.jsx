import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Reusable layout for all sub-pages.
 * Props: badge (string), title (string), subtitle (string), accentColor (tailwind color name, e.g. "indigo"), children
 */
export const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow h-full">
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

export const CTABanner = ({ title, desc, btnLabel = "Start Free →", btnTo = "/start", bg = "bg-indigo-50", titleColor = "text-indigo-900", btnColor = "bg-indigo-600" }) => (
  <div className={`mt-12 ${bg} rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6`}>
    <div className="flex-1">
      <h3 className={`text-2xl font-bold ${titleColor} mb-2`}>{title}</h3>
      <p className={`${titleColor} opacity-70 text-sm`}>{desc}</p>
    </div>
    <Link to={btnTo} className="btn-primary px-6 py-3">
      {btnLabel}
    </Link>
  </div>
);

export default function SubPageLayout({ badge, badgeColor = "bg-purple-100 text-purple-700", title, subtitle, children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest shadow-sm mb-6 ${badgeColor}`}
        >
          {badge}
        </motion.div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight mb-5">
          {title}
        </h1>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl font-medium leading-relaxed">{subtitle}</p>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
