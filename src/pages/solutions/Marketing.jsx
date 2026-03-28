import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import dashboardImage from "../../assets/dashboard2.png";
import planImage from "../../assets/Gantt.png";
import FeatureCTA from "../../components/FeatureCTA";

export default function Marketing() {
  return (
    <div className="bg-white font-sans">
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 40, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 100,
                  delay: 0.1,
                }}
                className="mb-4 text-4xl font-black leading-[1.1] tracking-tight text-slate-900 drop-shadow-sm sm:text-5xl lg:text-6xl"
              >
                The everything app <br />
                <motion.span
                  className="bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  for Marketing Teams
                </motion.span>
              </motion.h1>
            </div>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
              Brainstorm, plan, and execute your team&apos;s marketing programs, from
              multi-channel campaigns to global events and more with KaryaUp, the
              all-in-one productivity platform.
            </p>

            <Link
              to="/start"
              className="group relative z-10 flex h-[3.5em] w-[14em] shrink-0 items-center justify-center overflow-hidden rounded-[30em] text-[15px] font-bold transition-all duration-300"
              style={{
                boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff",
              }}
            >
              <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
              <div className="absolute -inset-[3px] -z-10 origin-left scale-x-0 rounded-[30em] bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100" />
              <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-slate-800">
                Get Started
              </span>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-2xl">
              <img src={dashboardImage} alt="Dashboard" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="flex w-full items-center justify-center bg-white px-6 py-10 text-center">
        <div className="group relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-9 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 40, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 100,
                delay: 0.1,
              }}
              className="mb-4 text-center text-4xl font-black leading-[1.1] tracking-tight text-slate-900 drop-shadow-sm sm:text-4xl lg:text-6xl"
            >
              The world&apos;s most complete <br />
              <motion.span
                className="bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] bg-clip-text text-transparent sm:text-6xl"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                AI for project management
              </motion.span>
            </motion.h1>
          </div>

          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
            Meet the first AI that works across your entire project lifecycle.
            From drafting project plans, capturing meetings, and setting
            priorities,{" "}
            <span className="font-semibold text-gray-800">
              KaryaUp AI frees your team to focus on impact.
            </span>
          </p>

          <section className="w-full bg-white px-6 py-20 lg:px-20">
            <div className="grid w-full gap-6 object-cover md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative max-w-[1500px] overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 blur-xl transition group-hover:opacity-10" />

                <div className="mb-5 overflow-hidden rounded-xl">
                  <img
                    src={dashboardImage}
                    alt="Automation"
                    className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-black">
                  Automates routine project tasks
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  KaryaUp generates project plans, assign tasks, and handle
                  status updates, replacing busywork with execution and delivery.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 blur-xl transition group-hover:opacity-10" />

                <div className="mb-5 overflow-hidden rounded-xl">
                  <img
                    src={planImage}
                    alt="Planning"
                    className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-black">
                  Moves decision to action
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  Automatically capture tasks from project discussions and next
                  steps, replacing information overload with clarity and action.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 blur-xl transition group-hover:opacity-10" />

                <div className="mb-5 overflow-hidden rounded-xl">
                  <img
                    src={dashboardImage}
                    alt="Search"
                    className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-black">
                  Finds project info, instantly
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  Find projects and files in seconds across ClickUp and
                  connected apps, replacing information gathering with instant
                  context and insights.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-white py-10 md:py-2">
        <div className="mx-auto max-w-7xl px-3">
          <div className="mb-16 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 100,
                delay: 0.1,
              }}
              className="mb-4 text-center text-4xl font-black leading-[1.1] tracking-tight text-slate-900 drop-shadow-sm sm:text-5xl lg:text-6xl"
            >
              Project management <br />
              <motion.span
                className="bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                is broken, we fixed it
              </motion.span>
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl bg-white p-10 shadow-lg transition-all duration-500 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-50 opacity-0 transition duration-500 group-hover:opacity-100" />
              <h3 className="relative z-10 mb-6 text-2xl font-bold text-red-600">
                Old Way
              </h3>
              <ul className="relative z-10 space-y-4 text-sm text-gray-700">
                <li className="transition group-hover:translate-x-2">
                  Projects scattered across multiple tools
                </li>
                <li className="transition group-hover:translate-x-2">
                  Critical info hidden in siloed systems and meetings
                </li>
                <li className="transition group-hover:translate-x-2">
                  Manual updates and repetitive work strain capacity
                </li>
                <li className="transition group-hover:translate-x-2">
                  Missed deadlines and tasks cause bottlenecks
                </li>
              </ul>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white p-10 shadow-lg transition-all duration-500 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-50 opacity-0 transition duration-500 group-hover:opacity-100" />
              <h3 className="relative z-10 mb-6 text-2xl font-bold text-green-600">
                KaryaUp Way
              </h3>
              <ul className="relative z-10 space-y-4 text-sm text-gray-700">
                <li className="transition group-hover:translate-x-2">
                  All projects, docs, and chat in one platform
                </li>
                <li className="transition group-hover:translate-x-2">
                  Instantly find anything across all tools
                </li>
                <li className="transition group-hover:translate-x-2">
                  Automated reporting, updates, and resource management
                </li>
                <li className="transition group-hover:translate-x-2">
                  AI-powered workflows manage tasks, dependencies, and timelines
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FeatureCTA
        title={<>Tasks that connect to everything you do</>}
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
