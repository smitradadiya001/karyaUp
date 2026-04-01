import React, { useState, useEffect } from "react";
import FeatureCTA from "../../components/FeatureCTA";
import dashboardImg from "../../assets/dashboard2.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../../components/PageHero";
import { Helmet } from "react-helmet-async";

export default function Agency() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const benefits = [
    {
      title: "Faster Delivery",
      desc: "Streamline workflows with boards, timelines, and automation so your team delivers projects ahead of schedule."
    },
    {
      title: "Client Transparency",
      desc: "Share progress with clients in real-time using dashboards and docs, building trust and stronger relationships."
    },
    {
      title: "Smarter Operations",
      desc: "Connect tasks, goals, and compliance in one place, reducing admin overhead and freeing your team."
    }
  ];

  const CapabilityCard = ({ title, desc, tag, iconColor }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -12,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(126,34,206,0.15)]"
    >
      <div className={`absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br ${iconColor} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`} />

      <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${iconColor} text-white shadow-lg transition-transform duration-500 group-hover:rotate-12`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>

      <div className="relative z-10">
        <span className="mb-4 inline-block rounded-full bg-slate-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 transition-colors duration-300 group-hover:bg-purple-100 group-hover:text-purple-700">
          {tag}
        </span>
        <h3 className="mb-4 text-2xl font-black text-slate-900 transition-colors duration-300 group-hover:text-[#7e22ce]">
          {title}
        </h3>
        <p className="font-medium leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
          {desc}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500 transition-all duration-700 ease-in-out group-hover:w-full" />
    </motion.div>
  );

  return (
    <>
      <Helmet>
        <title>Agency | KaryaUp</title>
        <meta name="description" content="KaryaUp agency solution simplifies client management, workflow automation, and resource tracking for modern agencies." />
        <meta name="keywords" content="agency management, client transparency, project delivery, KaryaUp" />
        <link rel="canonical" href="https://karyaup.com/solutions/agency" />
      </Helmet>
      <div className="bg-white font-sans min-h-screen pt-28 overflow-x-hidden">

        {/* ================= HERO SECTION ================= */}
        <PageHero
          pillText="Solutions / Agency"
          titleBlack="Unlock Agency"
          titleGradient="Productivity & Deliver Faster"
          descriptionList={[
            "Manage projects, client collaboration, and resource tracking in one place.",
            "KaryaUp makes it easy to streamline workflows and deliver faster."
          ]}
          featureStackItems={["Faster Delivery", "Client Transparency", "Smarter Operations", "Resource Tracking"]}
          imageSrc={dashboardImg}
          imageAlt="Agency Dashboard"
        />

        {/* ================= WHY AGENCIES CHOOSE ================= */}
        <section className="py-24 px-6 max-w-7xl mx-auto text-center">
          <div className="mb-20">
            <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
              Why Agencies<br />
              <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]" animate={{ backgroundPosition: ["0% center", "-200% center"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                Choose KaryaUp
              </motion.span>
            </motion.h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">From project delivery to client collaboration, KaryaUp empowers agencies to work smarter.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: isMobile ? 0 : (i === 0 ? "105%" : i === 2 ? "-105%" : "0%"),
                  y: 40
                }}
                whileInView={{ opacity: 1, x: "0%", y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: i === 1 ? 0 : 0.2, // Smoothed delay sequence
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="bg-[#F8F9FA] rounded-[32px] p-8 border border-transparent hover:border-purple-200 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-[#7e22ce] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-10 px-6 bg-[#FDFCFE] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
            <div className="lg:col-span-7">

            <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
             Built for the <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Modern Agency.
            </motion.span>
          </motion.h1>
              
            </div>
            <div className="lg:col-span-4 text-slate-500 text-xl font-medium leading-relaxed">
              Replace 5+ disconnected tools with one unified ecosystem. 
              KaryaUp handles the complexity so you can focus on the craft.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CapabilityCard 
              tag="Visibility"
              title="White-Label Client Portals"
              desc="Give clients a branded, professional space to track progress, approve designs, and share feedback."
              iconColor="from-purple-600 to-indigo-600"
            />
            <CapabilityCard 
              tag="Efficiency"
              title="Automated Profit Tracking"
              desc="Know exactly which projects are making money. Real-time margin tracking across every task and billable hour."
              iconColor="from-fuchsia-600 to-pink-600"
            />
            <CapabilityCard 
              tag="Control"
              title="Intelligent Resource Load"
              desc="Instantly see who's overbooked. Balance workloads across your creative team with a drag-and-drop global timeline."
              iconColor="from-blue-600 to-cyan-600"
            />
          </div>
        </div>
      </section>

      {/* ================= ELEVATE WORKFLOWS ================= */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
            Elevate Your<br />
            <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]" animate={{ backgroundPosition: ["0% center", "-200% center"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
              Agency Workflows
            </motion.span>
          </motion.h1>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <ul className="space-y-4">
              {["Centralized dashboards", "Automated reporting", "Real-time collaboration"].map((text, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg text-slate-700 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:border-purple-200 transition-all">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold font-sans">✓</span>
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img src={dashboardImg} alt="Workflow Dashboard" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

        {/* ================= ELEVATE WORKFLOWS ================= */}
        <section className="py-24 px-6 bg-slate-50/50">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
              Elevate Your<br />
              <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]" animate={{ backgroundPosition: ["0% center", "-200% center"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                Agency Workflows
              </motion.span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg text-gray-500 max-w-2xl mx-auto">
              Scale your operations and manage multiple clients effortlessly with our unified platform.
            </motion.p>
          </div>
        </section>

        <FeatureCTA
          title="Ready to Scale Your Agency?"
          description="Join leading agencies that use KaryaUp to deliver excellence to their clients every single day."
          buttonText="Get Started"
          image={dashboardImg}
          imageAlt="KaryaUp Agency"
        />
      </div>
    </>
  );
}
