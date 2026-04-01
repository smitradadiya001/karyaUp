import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";
import planImage from "../../assets/Gantt.webp";
import FeatureCTA from "../../components/FeatureCTA";
import PageHero from "../../components/PageHero";
import { Helmet } from "react-helmet-async";

export default function TeamCollaboration() {
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
        <title>Team Collaboration | Karyaup</title>
        <meta name="description" content="Move faster with real-time chat, AI-powered coordination, and seamless file sharing. KaryaUp is the platform for smarter team collaboration." />
        <meta name="keywords" content="team collaboration software, real-time chat, ai project coordination, file sharing" />
        <link rel="canonical" href="https://karyaup.com/platform/team-collaboration" />
      </Helmet>
      <div className="bg-white font-sans overflow-x-hidden pt-14 sm:pt-16">
        {/* ================= HERO SECTION ================= */}
        <PageHero
          pillText="Platform / Team Collaboration"
          titleBlack="Smarter Collaboration"
          titleGradient="Powered by AI"
          descriptionList={[
            "From real‑time chat to intelligent task coordination.",
            "KaryaUp AI helps your team collaborate efficiently and make faster, better decisions."
          ]}
          featureStackItems={["Real-time Chat", "File Sharing", "Screen Recording", "AI Agents"]}
          imageSrc={dashboardImage}
          imageAlt="KaryaUp team collaboration dashboard"
        />

        {/* ================= TEAM COLLABORATION SECTION ================= */}
        <section className="px-10 w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-2"
              >
                Where Communication
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <br />Meets Execution
                </motion.span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: isMobile ? 0 : -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 p-2 bg-white">
                  <img
                    src={planImage}
                    alt="Project planning view in KaryaUp"
                    className="rounded-[2rem] w-full"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ x: isMobile ? 0 : 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <ul className="space-y-6 text-slate-700">
                  {[
                    "Task‑based discussions tied directly to work items.",
                    "Real‑time chat and alerts so no one is out of sync.",
                    "Seamless file and media sharing inside each project.",
                    "Screen recording and sharing for quick context.",
                    "Centralized communication so context is never lost.",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 group transition-transform duration-300 hover:translate-x-2"
                    >
                      <span className="shrink-0 mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 font-black text-sm group-hover:scale-110 transition-transform">
                        {i + 1}
                      </span>
                      <span className="text-lg font-bold leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= ROADMAP / PLANNING SECTION ================= */}
        <section className="py-24 bg-white px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight"
              >
                Plan, Track, &
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <br />Ship better
                </motion.span>
              </motion.h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-1"
              >
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 p-2 bg-white">
                  <img
                    src={planImage}
                    alt="Project planning view in KaryaUp"
                    className="rounded-[2rem] w-full"
                  />
                </div>
              </motion.div>

              <div className="order-1 md:order-2">
                <ul className="space-y-6 text-slate-700">
                  {[
                    "Visualize timelines with Gantt and Board views.",
                    "Set task dependencies and milestones instantly.",
                    "Track progress across multiple high-priority goals.",
                    "Identify bottlenecks before they delay your launch.",
                    "Sync schedules across departments automatically.",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 group transition-transform duration-300 hover:translate-x-2"
                    >
                      <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-black transition-transform group-hover:scale-110">✓</div>
                      <span className="text-lg font-bold leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA SECTION ================= */}
        <FeatureCTA
          title="Tasks that connect to everything you do"
          description="Work smarter with tasks that can live in your whiteboards, chat, calendar — anywhere you work"
          image={dashboardImage}
          imageAlt="KaryaUp dashboard"
          containerClassName="mt-10 mb-24"
          paddingClassName="p-3 lg:p-4 lg:py-6"
          imageClassName="w-full max-w-[940px] translate-y-8"
          imageOuterClassName={`relative w-full flex justify-center`}
        />
      </div>
    </>
  );
}