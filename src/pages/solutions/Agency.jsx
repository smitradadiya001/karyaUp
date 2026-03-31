                                                  import React from "react";
import FeatureCTA from "../../components/FeatureCTA";
import dashboardImg from "../../assets/dashboard2.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Agency() {
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

  return (
    <div className="bg-white font-sans min-h-screen pt-28 overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="py-10 px-6 lg:px-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative">
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Unlock Agency <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Productivity & Deliver Faster
            </motion.span>
          </motion.h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Manage IT projects, service requests, and governance in one place all connected by AI. KaryaUp makes it easy to streamline workflows.
          </p>
          <Link
            to="/start"
            className="group relative inline-flex h-[3.5em] w-[14em] items-center justify-center overflow-hidden rounded-[30em] font-bold text-[15px] transition-all duration-300 shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
            <div className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full" />
            <span className="relative z-10 text-white group-hover:text-slate-800">Start Free Workspace</span>
          </Link>
        </div>
        <div className="flex-1 w-full">
           <img src={dashboardImg} alt="Hero" className="w-full h-auto rounded-2xl shadow-2xl border border-slate-100" />
        </div>
      </section>

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
              initial={{ opacity: 0, x: i === 0 ? "105%" : i === 2 ? "-105%" : "0%", y: 40 }}
              whileInView={{ opacity: 1, x: "0%", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i === 1 ? 0.1 : 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#F8F9FA] rounded-[32px] p-8 border border-transparent hover:border-purple-200 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-[#7e22ce] mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ELEVATE WORKFLOWS (Custom Centered Layout) ================= */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto text-center mb-16">

        <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
            Elevate Your<br />
            <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]" animate={{ backgroundPosition: ["0% center", "-200% center"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
            Agency Workflows
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Manage IT projects, service requests, and governance in one place—all connected by AI.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <ul className="space-y-4">
              {[
                "Centralized dashboards for all projects",
                "Automated reporting and compliance tracking",
                "Real-time collaboration with clients"
              ].map((text, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg text-slate-700 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold">✓</span>
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
          >
            <img src={dashboardImg} alt="Workflow Dashboard" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work Smarter with tasks that can live in your whiteboards, chat, calendar."
        image={dashboardImg}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-20 mb-10"
      />
    </div>
  );
}