import React from "react";
import { motion } from "framer-motion";
import FeatureCTA from "../../components/FeatureCTA";
import dashboardImage from "../../assets/dashboard2.png";
import { 
  Search, 
  LayoutGrid, 
  Folder, 
  CheckSquare, 
  FileText, 
  PenTool, 
  BarChart3, 
  Users,
  Phone,
  TrendingUp,
  Zap,
  Shield,
  Calendar,
  MessageCircle
} from "lucide-react";

export default function TemplateCRM() {
  return (
    <div className="w-full bg-gradient-to-b from-white via-slate-50/50 to-white py-10 px-6 lg:px-10 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mb-24"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40, x: -10 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 100,
            delay: 0.1,
          }}
          className="mx-auto text-center text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm"
        >
          <br />
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
            animate={{
              backgroundPosition: ["0% center", "-200% center"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Sales & CRM
          </motion.span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mx-auto text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl"
        >
          Boost your sales process with KaryaUp's Sales & CRM templates. Track
          leads, nurture relationships, and close deals with tools designed for
          sales success.
        </motion.p>
      </motion.section>

      {/* NEW SECTION 3: Sales Automation */}
     {/* ================= PIPELINE GROWTH SECTION ================= */}
<section className="mb-24">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
    
    {/* LEFT TEXT */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="order-2 lg:order-1"
    >
      <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">
      Boost Your Sales 
        <span className="bg-gradient-to-r from-[#7e22ce] to-fuchsia-500 bg-clip-text text-transparent">
          {" "}<br />with Smart CRM
        </span>
      </h2>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { num: "120%", label: "Faster Follow-ups", color: "from-pink-500 to-purple-600" },
          { num: "85%", label: "Deals Closed On Time", color: "from-indigo-500 to-blue-600" },
          { num: "24/7", label: "Smart Scheduling", color: "from-green-400 to-emerald-600" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.08 }}
            className="rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-transparent hover:bg-gradient-to-r hover:opacity-95 transition duration-500 group"
          >
            <h3 className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
              {stat.num}
            </h3>
            <p className="text-gray-700 font-medium group-hover:text-black">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="order-1 lg:order-2"
    >
      <div className="relative">
        <motion.img
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600"
          alt="Pipeline Growth"
          className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border-8 border-white/50"
          animate={{
            y: [0, -10, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  </div>
</section>

      {/* NEW SECTION 4: Team Collaboration */}
      <section className="py-24">
       
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
                Sales Team <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Collaboration
                </motion.span>
              </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Empower your entire sales team with shared visibility and seamless collaboration.
          </p>
      

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mt-10 mx-auto">
          {[
            {
              icon: Users,
              title: "Team Dashboards",
              desc: "Everyone sees the same pipeline with personal filters and views.",
              img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500"
            },
            {
              icon: MessageCircle,
              title: "Internal Chat",
              desc: "Discuss deals, share updates, and collaborate without leaving the platform.",
              img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500"
            },
            {
              icon: LayoutGrid,
              title: "Custom Views",
              desc: "Sales managers, reps, and executives get tailored dashboards for their roles.",
              img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500"
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-slate-50/30 backdrop-blur-xl rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl hover:-translate-y-6 transition-all duration-700 border border-slate-100/50 overflow-hidden">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-all duration-500 mx-auto">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <img 
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-2xl mb-6 shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-slate-600 text-center leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

         {/* Feature CTA */}
         <FeatureCTA
        title={
          <>
            Tasks that connect to everything you do
          </>
        }
        description="Work smarter with tasks that can live in your whiteboards, chat, calendar — anywhere you work"
        image={dashboardImage}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-10 mb-20"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px]"
        imageOuterClassName="relative w-[108%] lg:w-full translate-x-4 lg:translate-x-8"
      />

    </div>
  );
}