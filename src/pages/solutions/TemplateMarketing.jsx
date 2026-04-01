import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.webp";
import FeatureCTA from "../../components/FeatureCTA";
import PageHero from "../../components/PageHero";
import { Helmet } from "react-helmet-async";

export default function TemplateMarketing() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <Helmet>
        <title>Marketing Template | KaryaUp</title>
        <meta name="description" content="Master your marketing campaigns with KaryaUp's premium marketing template. Features asset approvals, reusable campaigns, and client portals." />
        <meta name="keywords" content="marketing template, campaign coordination template, asset approval software, marketing portal" />
        <link rel="canonical" href="https://karyaup.com/solutions/templates/marketing" />
      </Helmet>
    <div className="bg-white font-sans overflow-x-hidden pt-20">

      {/* ================= HERO SECTION ================= */}
      <PageHero
        pillText="Templates / Marketing"
        titleBlack="The Scalable"
        titleGradient="Marketing Coordination Template"
        descriptionList={[
          "Centralize campaigns, assets, and wikis in one unified high-performance platform.",
          "KaryaUp's marketing template provides the standard for high-output creative teams."
        ]}
        featureStackItems={["Asset Approvals", "Reusable Campaigns", "Client Portal", "Style Guides"]}
        imageSrc={dashboardImage}
        imageAlt="Marketing Template Dashboard"
      />

      {/* ================= SECTION 1: VISUAL CAMPAIGNS ================= */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
              Why Creative Teams <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Choose This Template
              </motion.span>
            </h2>
            <ul className="space-y-6">
              {[
                "Unify creative briefs and asset proofing",
                "Automate multi-channel campaign rollouts",
                "Create reusable style guides and wikis",
                "Share progress via dedicated client portals"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-lg font-bold text-slate-700 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-sm font-black transition-transform group-hover:scale-110">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 p-3 bg-slate-50"
          >
            <img src={dashboardImage} alt="Marketing Campaign View" className="w-full h-auto rounded-[2rem]" />
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work Smarter with tasks that can live in your whiteboards, chat, calendar—anywhere you work."
        image={dashboardImage}
        imageAlt="KaryaUp Marketing Template Dashboard"
        containerClassName="mt-12 mb-24"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px] translate-y-8"
        imageOuterClassName="relative w-full flex justify-center"
      />
    </div>
    </>
  );
}