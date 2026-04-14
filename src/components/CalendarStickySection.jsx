import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Check, Video, CheckSquare, Send } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "../lib/utils";
import scheduleMeetingImg from "../assets/Schedule_meeting (1).png";
import createTaskImg from "../assets/New_Task.png";
import schedulePostImg from "../assets/Schedule_Story.png";

gsap.registerPlugin(ScrollTrigger);

const calendarSections = [
  {
    id: "schedule-meeting",
    header: "Schedule Meeting",
    title: "Schedule",
    titleHighlight: "Meetings",
    description:
      "Create a calendar event with a Google Meet link. Attendees will receive an invite and a reminder on the selected date.",
    bullets: [
      "Auto-generate meeting links instantly.",
      "Attendees get automated invites.",
    ],
    image: scheduleMeetingImg,
    tag: "Meetings",
  },
  {
    id: "create-task",
    header: "Create Task",
    title: "Create",
    titleHighlight: "Tasks",
    description:
      "Create a new task and assign it to team members. Break work into clear actionable items directly from your calendar.",
    bullets: [
      "Assign priority and ownership.",
      "Tasks land on the assignee's schedule.",
    ],
    image: createTaskImg,
    tag: "Project Management",
  },
  {
    id: "schedule-post",
    header: "Schedule Post",
    title: "Schedule",
    titleHighlight: "Stories & Posts",
    description:
      "Plan stories and social posts for the future. You'll get notified exactly when it's time to publish.",
    bullets: [
      "Set exact dates for content drops.",
      "Never miss an upload with reminders.",
    ],
    image: schedulePostImg,
    tag: "Content Planning",
  },
];

export default function CalendarStickySection() {
  const container = useRef(null);
  const sectionRefs = useRef([]);

  useGSAP(
    () => {
      const sections = sectionRefs.current;
      const totalSections = sections.length;

      if (!sections[0]) return;

      gsap.set(sections[0], { y: "0%", scale: 1, opacity: 1 });
      for (let i = 1; i < totalSections; i++) {
        if (!sections[i]) continue;
        gsap.set(sections[i], { y: "100%", scale: 1, opacity: 0 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-sections-container",
          start: "center center",
          end: `+=${window.innerHeight * (totalSections - 1) * 1.5}`,
          pin: true,
          scrub: 1,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < totalSections - 1; i++) {
        const currentSection = sections[i];
        const nextSection = sections[i + 1];

        if (!currentSection || !nextSection) continue;

        const position = i * 1.5;

        scrollTimeline.to(
          currentSection,
          {
            scale: 0.95,
            opacity: 0,
            y: "-20%",
            duration: 1.5,
            ease: "power2.inOut",
          },
          position
        );

        scrollTimeline.to(
          nextSection,
          {
            y: "0%",
            opacity: 1,
            duration: 1.5,
            ease: "power2.inOut",
          },
          position
        );
      }

      return () => {
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative overflow-hidden bg-white pt-4 sm:pt-6 lg:pt-6 pb-4 sm:pb-6 lg:pb-6"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-8 text-center"
        >
          <h2 className="mb-4 text-3xl font-black leading-[1.06] tracking-normal text-slate-900 sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem]">
            Everything Happens in
            <br />
            <span className="text-gradient inline-block">One Calendar</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base font-medium text-slate-500 sm:text-lg">
            Scroll through to see how KaryaUp streamlines your daily workflows.
          </p>
        </motion.div>

        <div className="sticky-sections-container relative h-[65vh] sm:h-[80vh] lg:h-[75vh] max-w-6xl mx-auto mb-6 sm:mb-12 rounded-xl sm:rounded-[2.5rem] overflow-hidden border border-slate-200/80 shadow-2xl bg-white">
          {calendarSections.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => (sectionRefs.current[i] = el)}
              className="absolute inset-0 flex h-full w-full flex-col lg:flex-row items-center bg-white"
            >
              <div className="flex-none lg:flex-1 flex flex-col items-center justify-center px-4 pt-5 pb-2 text-center sm:h-full sm:p-8 lg:items-start lg:p-12 lg:text-left z-20 relative">
                <h3 className="mb-2.5 sm:mb-6 text-[26px] sm:text-3xl font-black leading-[1.1] text-slate-900 md:text-[2.75rem]">
                  {item.title}
                  <br />
                  <span className="text-gradient">
                    {item.titleHighlight}
                  </span>
                </h3>

                <p className="mb-3 sm:mb-6 max-w-md line-clamp-3 text-xs sm:text-sm font-medium leading-relaxed text-slate-500 sm:text-lg lg:line-clamp-none">
                  {item.description}
                </p>

                <ul className="mb-4 hidden w-full max-w-md space-y-2.5 sm:block">
                  {item.bullets.map((bullet, idx) => {
                    const BulletIcon = item.id === "schedule-meeting" ? Video : item.id === "create-task" ? CheckSquare : Send;
                    return (
                      <li
                        key={idx}
                        className="flex items-start gap-3.5 text-left"
                      >
                        <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                          <BulletIcon size={10} className="text-[#7e22ce] stroke-[4]" />
                        </div>
                        <span className="text-sm sm:text-base font-bold text-slate-600 leading-relaxed">{bullet}</span>
                      </li>
                    );
                  })}
                </ul>

                <div className="inline-flex rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1.5 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-purple-700 sm:hidden">
                  {item.tag}
                </div>
              </div>

              <div className="flex-1 lg:flex-1 flex w-full items-center justify-center p-4 sm:p-0 min-h-0 relative z-10">
                <div className="relative flex h-full w-full items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.header}
                    loading="lazy"
                    className="relative z-10 h-full max-h-[66%] w-auto max-w-[80%] object-contain transition-all duration-500 lg:h-auto lg:w-[68%]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
