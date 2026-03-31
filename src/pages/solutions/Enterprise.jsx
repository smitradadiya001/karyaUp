                                                                                                                       import React from "react";
import { motion } from "framer-motion";
import FeatureCTA from '../../components/FeatureCTA';
import dashboardImage from "../../assets/dashboard2.png";
import { Link } from "react-router-dom";

export default function Enterprise() {
  return (
    <div className="bg-white font-sans overflow-hidden min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 pt-20 pb-20 px-7 text-center z-10 border-b border-slate-100">
        {/* Pink/Purple Background Gradient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-[100%] pointer-events-none -z-10 blur-3xl"></div>

        <div>
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 40, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 100,
                delay: 0.1
              }}
              className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
            >
              The World's most Powerful <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Enterprise Software.
              </motion.span>
            </motion.h1>
          </div>
          <p className="mx-auto text-center text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
            Brainstorm, plan, and execute your team's marketing programs—from multi-channel campaigns to global events and more with KaryaUp, the all-in-one productivity platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              to="/start"
              className="group relative z-10 flex h-[3.5em] w-[14em] shrink-0 items-center justify-center overflow-hidden rounded-[30em] font-bold text-[15px] transition-all duration-300"
              style={{
                boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff"
              }}
            >
              <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
              <div className="absolute left-0 top-0 -z-10 h-full w-0 rounded-[30em] bg-white transition-all duration-500 ease-in-out group-hover:w-full" />
              <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-slate-800">
                Get Started
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* ================= ENTERPRISE ADVANTAGES SECTION ================= */}
      <section className="w-full py-8 px-2 lg:px-5 bg-white">
        <div className="max-w-9xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4"
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            KaryaUp is trusted by global enterprises to deliver secure, scalable, and integrated solutions that empower teams worldwide.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-4 gap-8"
        >
          {[
            { title: "99.99% Uptime", desc: "Enterprise-grade reliability with continuous monitoring.", icon: "⚡", color: "from-pink-500 to-purple-600" },
            { title: "Compliance Ready", desc: "GDPR, SOC2, HIPAA — built to meet global standards.", icon: "🔒", color: "from-indigo-500 to-blue-600" },
            { title: "500+ Integrations", desc: "Connect seamlessly with your ERP, CRM, and collaboration tools.", icon: "🔗", color: "from-green-400 to-emerald-600" },
            { title: "Global Support", desc: "24/7 multilingual support for teams across time zones.", icon: "🌍", color: "from-orange-400 to-red-500" },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl p-6 shadow-lg border border-gray-200 
                   hover:border-transparent hover:bg-gradient-to-r hover:opacity-90 transition duration-500 group"
            >
              <div className={`text-4xl mb-4 bg-gradient-to-r ${card.color} bg-clip-text text-black`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-black">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-black">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <FeatureCTA
        title={
          <>
            Tasks that connect to everything you do
          </>
        }
        description="Work Smater with tasks that can live in your whiteboaards,chat,calendar - anywhere you work"
        image={dashboardImage}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-10 mb-5"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px]"
        imageOuterClassName="relative w-[108%] lg:w-full translate-x-2 lg:translate-x-8"
      />
    </div>
  );
}