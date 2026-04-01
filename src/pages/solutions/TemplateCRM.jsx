import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.webp";
import FeatureCTA from "../../components/FeatureCTA";
import PageHero from "../../components/PageHero";
import { Helmet } from "react-helmet-async";

export default function TemplateCRM() {
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
        <title>Sales & CRM Template | KaryaUp</title>
        <meta name="description" content="Manage your sales pipeline, track leads, and close deals faster with KaryaUp's premium CRM template. Features lead management and customer insights." />
        <meta name="keywords" content="CRM template, sales pipeline template, lead tracking software, customer insights" />
        <link rel="canonical" href="https://karyaup.com/solutions/templates/sales-crm" />
      </Helmet>
    <div className="bg-white font-sans overflow-x-hidden pt-20">

      {/* ================= HERO SECTION ================= */}
      <PageHero
        pillText="Templates / Sales & CRM"
        titleBlack="The Integrated"
        titleGradient="Sales & CRM Template"
        descriptionList={[
          "Manage leads, deals, and contacts in one unified high-performance platform.",
          "KaryaUp's CRM template provides the vertical visibility needed to hit sales targets with precision."
        ]}
        featureStackItems={["Lead Management", "Sales Pipeline", "Opportunity Tracking", "Customer Insights"]}
        imageSrc={dashboardImage}
        imageAlt="CRM Template Dashboard"
      />

      {/* ================= SECTION 1: VISUAL PIPELINE ================= */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
              Why Sales Teams <br />
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
                "Visualize your entire sales funnel in one view",
                "Automate follow-ups and lead assignments",
                "Generate custom sales reports with one click",
                "Track customer interactions across every channel"
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
            <img src={dashboardImage} alt="CRM Pipeline View" className="w-full h-auto rounded-[2rem]" />
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work Smarter with tasks that can live in your whiteboards, chat, calendar—anywhere you work."
        image={dashboardImage}
        imageAlt="KaryaUp CRM Template Dashboard"
        containerClassName="mt-12 mb-24"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px] translate-y-8"
        imageOuterClassName="relative w-full flex justify-center"
      />
    </div>
    </>
  );
}