import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Activity, Check } from "lucide-react";
import FeatureStack from "../../components/FeatureStack";
import ActivityHero from "../../assets/activity-hero.webp";
import ActivitySteps from "../../components/ActivitySteps";
import SecurityLockSection from "../../components/SecurityLockSection";
import FeatureCTA from "../../components/FeatureCTA";

export default function ActivityCapture() {
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
        <title>Activity Capture | KaryaUp</title>
        <meta
          name="description"
          content="Capture your activities effortlessly with KaryaUp's Activity Capture feature."
        />
      </Helmet>

      <div className="min-h-screen bg-white pt-28 sm:pt-28 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
        <section className="relative pt-4 sm:pt-6 lg:pt-4 pb-8 sm:pb-4 lg:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center lg:items-start">
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start lg:self-start px-1 sm:px-0">
                <Motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm mb-2 sm:mb-4"
                >
                  <Activity className="w-3.5 h-3.5" />
                  ACTIVITY CAPTURE
                </Motion.div>

                <Motion.h1
                  initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                  className="mt-2 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05] sm:ml-0 max-[390px]:text-[1.55rem] max-[390px]:leading-[0.95] max-[390px]:tracking-[-0.04em] whitespace-nowrap"
                >
                  <span className="whitespace-nowrap">Smarter Activity </span>
                </Motion.h1>
                <Motion.h2
                  initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05] sm:ml-0 max-[390px]:text-[1.55rem] max-[390px]:leading-[0.95] max-[390px]:tracking-[-0.04em] whitespace-nowrap"
                >
                  <Motion.span
                    className="inline whitespace-nowrap bg-[length:200%_auto] bg-clip-text text-transparent bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Tracking
                  </Motion.span>
                </Motion.h2>

                <Motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                  className="mt-5 sm:mt-6 w-full max-w-lg flex flex-col items-center lg:items-start"
                >
                  <div className="space-y-3 sm:space-y-4 w-fit mb-3 sm:mb-4">
                    {[
                      "Automatically captures work activity at regular intervals.",
                      "Gives managers real visibility without disrupting your team's flow.",
                    ].map((text, i) => (
                      <div key={i} className="flex items-start gap-3 text-left">
                        <div className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#7e22ce] stroke-[4]" />
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <FeatureStack
                    items={["Smart.", "Transparent.", "In your control."]}
                    className="!mt-1 sm:!mt-2"
                  />
                </Motion.div>
              </div>

              <Motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:self-start lg:translate-y-4 lg:-mr-12 xl:-mr-24"
              >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white">
                  <img
                    src={ActivityHero}
                    alt="KaryaUp Activity Capture"
                    className="w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[380px] xl:h-[350px] object-cover object-left-top bg-white transition-all duration-300"
                  />
                </div>
              </Motion.div>
            </div>
          </div>
        </section>

        <ActivitySteps />
        <SecurityLockSection />

        <FeatureCTA
          eyebrow="GET STARTED TODAY"
          title="Ready for Smarter Activity Tracking?"
        
          highlights={[
            "Setup takes less than 2 minutes.",
            "Flexible capture rules for different roles.",
            "Complete data privacy and compliance."
          ]}
          buttonText="Start Capturing"
          image={ActivityHero}
        />

      </div>
    </>
  );
}
