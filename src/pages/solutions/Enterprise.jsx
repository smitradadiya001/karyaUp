import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FeatureCTA from '../../components/FeatureCTA';
import PageHero from "../../components/PageHero";
import dashboardImage from "../../assets/dashboard2.webp";
import { Helmet } from "react-helmet-async";

export default function Enterprise() {
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
        <title>Enterprise | KaryaUp</title>
        <meta name="description" content="Scale your business with KaryaUp's enterprise-grade project management, security, and global visibility tools." />
        <meta name="keywords" content="enterprise software, global scale, project management governance, corporate tools" />
        <link rel="canonical" href="https://karyaup.com/solutions/enterprise" />
      </Helmet>
      <div className="bg-white font-sans overflow-x-hidden min-h-screen pt-20">

        {/* ================= HERO SECTION ================= */}
        <PageHero
          pillText="Solutions / Enterprise"
          titleBlack="The Power of"
          titleGradient="Enterprise Execution"
          descriptionList={[
            "Manage global programs, service requests, and governance in one place all connected by AI.",
            "KaryaUp makes it easy to streamline complex workflows across massive organizations."
          ]}
          featureStackItems={["Global Scale", "Governance & Security", "Cross-functional Visibility", "AI Portfolio"]}
          imageSrc={dashboardImage}
          imageAlt="Enterprise Dashboard"
        />

        {/* ================= ENTERPRISE ADVANTAGES SECTION ================= */}
        <section className="w-full py-24 px-6 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: isMobile ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]"
            >
              Enterprise-Ready <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Reliability & Scale
              </motion.span>
            </motion.h2>
            <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              KaryaUp is trusted by global enterprises to deliver secure, scalable, and integrated solutions that empower teams worldwide.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { title: "99.99% Uptime", desc: "Enterprise-grade reliability with continuous monitoring.", icon: "⚡", color: "from-pink-500 to-purple-600" },
              { title: "Compliance Ready", desc: "GDPR, SOC2, HIPAA — built to meet global standards.", icon: "🔒", color: "from-indigo-500 to-blue-600" },
              { title: "500+ Integrations", desc: "Connect seamlessly with your ERP, CRM, and collaboration tools.", icon: "🔗", color: "from-green-400 to-emerald-600" },
              { title: "Global Support", desc: "24/7 multilingual support for teams across time zones.", icon: "🌍", color: "from-orange-400 to-red-500" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ y: isMobile ? 0 : 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-[2.5rem] p-8 bg-slate-50 border border-transparent hover:border-purple-200 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-6">{card.icon}</div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-purple-700 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <FeatureCTA
          title="Tasks that connect to everything you do"
          description="Work Smarter with tasks that can live in your whiteboards, chat, calendar—anywhere you work."
          image={dashboardImage}
          imageAlt="KaryaUp Enterprise Dashboard"
          containerClassName="mt-12 mb-24"
          paddingClassName="p-3 lg:p-4 lg:py-6"
          imageClassName="w-full max-w-[940px] translate-y-8"
          imageOuterClassName="relative w-full flex justify-center"
        />
      </div>
    </>
  );
}