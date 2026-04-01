import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.webp";
import FeatureCTA from "../../components/FeatureCTA";
import PageHero from "../../components/PageHero";
import { Helmet } from "react-helmet-async";
import { 
  Heart, 
  Search, 
  Zap, 
  Users, 
  ArrowRight, 
  Star, 
  UserPlus, 
  ClipboardCheck, 
  TrendingUp, 
  BarChart3, 
  Calendar,
  UserCheck
} from "lucide-react";    



export default function HR() {

  const workflowCards = [
    { title: "Dashboard", desc: "Centralize job postings, candidate tracking, and interview scheduling.", icon: <UserPlus className="text-purple-600" />, glow: "hover:shadow-purple-100" },
    { title: "Projects", desc: "KaryaUp automates status updates and resource allocation across every phase.", icon: <ClipboardCheck className="text-fuchsia-600" />, glow: "hover:shadow-fuchsia-100" },
    { title: "Tasks", desc: "Track goals, exchange feedback, and monitor individual contributions with clarity.", icon: <TrendingUp className="text-emerald-600" />, glow: "hover:shadow-emerald-100" },
    { title: "Gantt Chart", desc: "Visualize the future. Interactive timelines that recalibrate as your team pushes code.", icon: <BarChart3 className="text-orange-600" />, glow: "hover:shadow-orange-100" },
  ];

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
        <title>HR | KaryaUp</title>
        <meta name="description" content="Streamline HR operations with KaryaUp. Automate onboarding, payroll, performance reviews, and compliance tracking in one platform." />
        <meta name="keywords" content="HR software, employee onboarding, payroll automation, performance management" />
        <link rel="canonical" href="https://karyaup.com/solutions/hr" />
      </Helmet>
      <div className="bg-white font-sans overflow-x-hidden pt-20">

        {/* ================= HERO SECTION ================= */}
        <PageHero
          pillText="Solutions / HR"
          titleBlack="Smarter HR for"
          titleGradient="Modern Teams"
          descriptionList={[
            "Unify hiring, onboarding, performance, and analytics in one secure platform.",
            "KaryaUp eliminates the chaos of spreadsheets and fragmented emails for people operations."
          ]}
          featureStackItems={["Onboarding Flows", "Payroll Automation", "Performance Reviews", "Compliance Tracking"]}
          imageSrc={dashboardImage}
          imageAlt="HR Dashboard"
        />

        {/* ================= HR WORKFLOWS SECTION ================= */}
        <section className="w-full py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-4">
                HR Workflows<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] to-fuchsia-500">
                  Simplified with KaryaUp
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {workflowCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`group relative bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 pb-14 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-2xl overflow-hidden ${card.glow}`}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl mb-6 bg-slate-50 flex items-center justify-center p-2 group-hover:scale-110 group-hover:bg-white transition-all">
                    {card.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-[#7e22ce] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                  {/* DECORATIVE LINE */}
                  <div className="absolute bottom-6 left-0 right-0 h-1 w-[70%] mx-auto rounded-full bg-gradient-to-r from-[#7e22ce] to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= RECRUITMENT SUITE ================= */}
        <section className="py-16 px-6 bg-slate-50/50">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-purple-100 text-[#7e22ce] rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
              Recruitment Suite
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-12">
              Find. Hire. <span className="text-[#7e22ce]">Onboard.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
              {[
                { title: "AI Talent Match", icon: <Zap className="text-amber-500" />, desc: "Our AI automatically ranks candidates based on skill-match and culture-fit scores." },
                { title: "One-Click Scheduling", icon: <Calendar className="text-blue-500" />, desc: "End the email back-and-forth. Candidates pick time slots that work with your team." },
                { title: "Collaborative Hiring", icon: <UserCheck className="text-emerald-500" />, desc: "Centralize interview notes and feedback so every hire is a team-approved win." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white border border-slate-100 hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-50 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-lg md:text-xl font-black text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= RECRUITMENT SUITE ================= */}
        <section className="py-10 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-block px-4 py-1.5 bg-purple-100 text-[#7e22ce] rounded-full text-xs font-black uppercase tracking-widest mb-6">
              Recruitment Suite
            </div>

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
              Find. Hire.
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Onboard.
              </motion.span>
            </motion.h1>
         

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: "AI Talent Match",
                  icon: <Zap className="text-amber-500" />,
                  desc: "Our AI automatically ranks candidates based on skill-match and culture-fit scores."
                },
                {
                  title: "One-Click Scheduling",
                  icon: <Calendar className="text-blue-500" />,
                  desc: "End the email back-and-forth. Candidates pick time slots that work with your team."
                },
                {
                  title: "Collaborative Hiring",
                  icon: <UserCheck className="text-emerald-500" />,
                  desc: "Centralize interview notes and feedback so every hire is a team-approved win."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-50 transition-colors">
                    {item.icon}
                  </div>
                
                  <h4 className="text-xl font-black text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed mb-6">{item.desc}</p>
                  <div className="flex items-center gap-2 text-[#7e22ce] font-bold text-sm cursor-pointer hover:gap-3 transition-all">
                    Learn more <ArrowRight size={16} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <FeatureCTA
          title="Transform HR operations today"
          description="Join leading teams using KaryaUp to scale people operations without the chaos."
          image={dashboardImage}
          imageAlt="KaryaUp HR Dashboard"
          containerClassName="mt-12 mb-24"
          paddingClassName="p-3 lg:p-4 lg:py-6"
          imageClassName="w-full max-w-[940px] translate-y-8"
          imageOuterClassName="relative w-full flex justify-center"
        />
      </div>
    </>
  );
}
