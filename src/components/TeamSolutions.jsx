import React, { useRef } from "react";
import {
  ArrowRight,
  CheckCircle2,
  FolderKanban,
  Clock,
  MessageSquare,
  Briefcase,
  Users,
  Zap,
  Bot,
  Calendar,
  UserCheck,
  AlertCircle,
  FileText,
  Timer,
  Scale,
  Activity,
  DollarSign,
  MessageCircle,
  CalendarDays,
  PenTool,
  Bell,
  Target,
  Mail,
  TrendingUp,
  RefreshCw,
  UserPlus,
  CalendarOff,
  CreditCard,
  Link2,
  Eye,
  PlayCircle,
  ClipboardList,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

/* ── Team data ── */
const teams = [
  {
    id: "projects",
    tab: "Project & Task",
    icon: FolderKanban,
    title: "Project & Task",
    titleHighlight: "Management",
    description:
      "Break work into clear, structured tasks with ownership and priorities.",
    replaces: ["Jira", "Asana", "Trello"],
    bullets: ["Outcome: Teams know what to do next."],
    features: [
      {
        name: "Sprint planning & iterations",
        color: "#7e22ce",
        icon: Calendar,
      },
      { name: "Automated task assignments", color: "#a855f7", icon: UserCheck },
      {
        name: "Timeline & delay tracking",
        color: "#d946ef",
        icon: AlertCircle,
      },
      {
        name: "Automated progress summaries",
        color: "#ec4899",
        icon: FileText,
      },
    ],
  },
  {
    id: "time",
    tab: "Time Tracking",
    icon: Clock,
    title: "Time",
    titleHighlight: "Tracking",
    description: "Track time where work happens.",
    replaces: ["Harvest", "Toggl", "Clockify"],
    bullets: ["Improve planning accuracy by up to 40%."],
    features: [
      { name: "Automatic time tracking", color: "#7e22ce", icon: Timer },
      { name: "Workload & capacity balancing", color: "#a855f7", icon: Scale },
      { name: "Bottleneck & delay insights", color: "#d946ef", icon: Activity },
      {
        name: "Cost & billing calculations",
        color: "#ec4899",
        icon: DollarSign,
      },
    ],
  },
  {
    id: "collaboration",
    tab: "Collaboration",
    icon: MessageSquare,
    title: "Team",
    titleHighlight: "Collaboration",
    description: "Communication stays connected to work.",
    replaces: ["Slack", "Loom", "Notion"],
    bullets: ["Impact: Reduce internal follow-ups by 50%+"],
    features: [
      {
        name: "Instant message catch-ups",
        color: "#7e22ce",
        icon: MessageCircle,
      },
      {
        name: "Automated meeting coordination",
        color: "#a855f7",
        icon: CalendarDays,
      },
      { name: "Smart reply drafting", color: "#d946ef", icon: PenTool },
      { name: "Dependency alerts & pings", color: "#ec4899", icon: Bell },
    ],
  },
  {
    id: "crm",
    tab: "CRM & Sales",
    icon: Briefcase,
    title: "CRM &",
    titleHighlight: "Sales",
    description: "Manage leads, deals, and delivery in one flow.",
    replaces: ["Salesforce", "HubSpot", "Pipedrive"],
    bullets: ["Result: Link sales directly to execution."],
    features: [
      { name: "Automated lead scoring", color: "#7e22ce", icon: Target },
      { name: "Smart prospect follow-ups", color: "#a855f7", icon: Mail },
      {
        name: "Predictive revenue forecasting",
        color: "#d946ef",
        icon: TrendingUp,
      },
      { name: "Seamless team handoffs", color: "#ec4899", icon: RefreshCw },
    ],
  },
  {
    id: "hr",
    tab: "HR & Team",
    icon: Users,
    title: "HR & Team",
    titleHighlight: "Management",
    description: "Control roles, access, attendance, and team structure.",
    replaces: ["Gusto", "BambooHR", "HiBob"],
    bullets: ["Clarity: One system for all people"],
    features: [
      {
        name: "Applicant tracking & screening",
        color: "#7e22ce",
        icon: UserPlus,
      },
      { name: "Automated new hire onboarding", color: "#a855f7", icon: Users },
      {
        name: "Time-off & leave management",
        color: "#d946ef",
        icon: CalendarOff,
      },
      {
        name: "Integrated payroll processing",
        color: "#ec4899",
        icon: CreditCard,
      },
    ],
  },
  {
    id: "automation",
    tab: "Automation",
    icon: Zap,
    title: "Workflow",
    titleHighlight: "Automation",
    description: "Automate repetitive workflows.",
    replaces: ["Zapier", "Make", "Workato"],
    bullets: ["Efficiency: Save 10+ hours per team every week"],
    features: [
      { name: "Cross-tool workflow bridging", color: "#7e22ce", icon: Link2 },
      { name: "Event-based triggering", color: "#a855f7", icon: Eye },
      {
        name: "Automated routine execution",
        color: "#d946ef",
        icon: PlayCircle,
      },
      {
        name: "Activity logging & auditing",
        color: "#ec4899",
        icon: ClipboardList,
      },
    ],
  },
];

/* ── Feature Icon placeholder ── */
/* ── Feature Icon placeholder ── */
const FeatureIcon = ({ icon }) => {
  const Feature = icon;

  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-[#f5f3ff] border border-[#e9d5ff] group-hover:bg-purple-100 group-hover:border-purple-300 shadow-sm">
      <Feature
        size={18}
        className="text-[#a855f7] transition-colors duration-300 group-hover:text-purple-700"
      />
    </div>
  );
};

const TeamSolutions = () => {
  const container = useRef(null);
  const sectionRefs = useRef([]);

  useGSAP(
    () => {
      const sections = sectionRefs.current;
      const totalSections = sections.length;

      if (!sections[0]) return;

      // Set initial states
      gsap.set(sections[0], { y: "0%", scale: 1, opacity: 1 });
      for (let i = 1; i < totalSections; i++) {
        if (!sections[i]) continue;
        gsap.set(sections[i], { y: "150%", scale: 1, opacity: 1 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `+=${window.innerHeight * (totalSections - 1) * 1.2}`,
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
            scale: 0.9,
            opacity: 0,
            y: "-15%", // Smaller y offset for mobile-density friendliness
            duration: 1.5,
            ease: "power2.inOut",
          },
          position,
        );

        scrollTimeline.to(
          nextSection,
          {
            y: "0%",
            duration: 1.5,
            ease: "power2.inOut",
          },
          position,
        );
      }

      return () => {
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-1.5 sm:py-6 sm:pb-10 px-2 sm:px-0 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-4 sm:mb-8">
          <h2 className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-gray-900 leading-[1.05] tracking-normal mb-3">
            Built For Teams That <br />
             <motion.span
                                className="inline text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] whitespace-nowrap"
                                animate={{
                                  backgroundPosition: ["0% center", "-200% center"],
                                }}
                                transition={{
                                  duration: 4,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              >
                              Move Fast
                              </motion.span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-lg font-medium">
            Your key workflows, powered by KaryaUp Agents.
          </p>
        </div>

        {/* Sticky scrolling sections container */}
        {/* Sticky scrolling sections container */}
        <div className="teamsolutions-sticky-container relative h-[68vh] sm:h-[75vh] lg:h-[75vh] w-full mx-auto rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm bg-gradient-to-br from-[#ffffff] via-[#faf8ff] to-[#f3e8ff]">
          {teams.map((active, i) => (
            <div
              key={active.id}
              ref={(el) => (sectionRefs.current[i] = el)}
              className="absolute inset-0 w-full h-full bg-gradient-to-br from-white via-[#faf8ff] to-[#f3e8ff] flex flex-col items-center justify-start lg:justify-center pt-2 lg:pt-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-12 items-start lg:items-center p-3 sm:p-10 w-full h-full max-h-full">
                {/* Left side */}
                <div className="relative lg:pr-10 flex flex-col items-center lg:items-start text-center lg:text-left h-auto lg:h-full justify-start lg:justify-center mb-0">
                  <div className="relative z-10 w-full flex flex-col items-center lg:items-start pt-0 lg:pt-0">
                    <h3 className="flex flex-row items-center justify-center gap-x-2 px-1 sm:px-0 pb-2 sm:pb-3 text-xl sm:text-3xl md:text-[2.5rem] font-black text-gray-900 leading-[1.4] sm:leading-[1.2] mb-1.5 sm:mb-4 whitespace-nowrap max-w-full overflow-visible tracking-normal">
                      <span
                        className={
                          active.title === "Workflow" ? "tracking-wider" : ""
                        }
                      >
                        {active.title}
                      </span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] italic">
                        {active.titleHighlight}
                      </span>
                    </h3>

                    <p className="text-gray-500 text-xs sm:text-base leading-relaxed mb-2 sm:mb-6 max-w-md font-medium">
                      {active.description}
                    </p>

                    {/* Replaces Indicators */}
                    <div className="mb-2 sm:mb-8 w-full flex flex-col items-center lg:items-start">
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 px-1">
                        Replaces
                      </p>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2.5">
                        {active.replaces?.map((tool) => (
                          <div
                            key={tool}
                            className="px-2 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-gray-50 border border-[#7e22ce]/30 text-gray-500 text-[10px] sm:text-xs font-bold hover:text-[#7e22ce] hover:bg-white transition-all cursor-default"
                          >
                            {tool}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bullet list */}
                    <ul className="space-y-1.5 sm:space-y-3 w-full">
                      {active.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-center justify-center gap-3 text-gray-600 text-[11px] sm:text-base font-bold bg-purple-50/40 p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-purple-100/30 text-center w-fit mx-auto sm:w-full sm:mx-0 sm:justify-start sm:text-left"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-[#a855f7] flex-shrink-0"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right side -feature cards */}
                <div className="flex flex-col items-start justify-start gap-1.5 sm:gap-3 w-[260px] xs:w-[280px] sm:w-[400px] max-w-full mx-auto lg:mx-0">
                  {active.features.map((feature, idx) => (
                    <div
                      key={`${active.id}-${idx}`}
                      className="flex flex-row items-center justify-start text-left gap-3 sm:gap-4 bg-white/60 hover:bg-white rounded-xl sm:rounded-2xl px-4 py-2 sm:px-5 sm:py-0 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-[#7e22ce] focus:border-[#a855f7] active:border-[#a855f7] focus:outline-none hover:shadow-lg hover:shadow-purple-500/10 hover:ring-1 hover:ring-[#7e22ce]/10 group h-[4.5rem] sm:h-[5.25rem] !w-full min-w-[260px] shadow-sm !m-0"
                    >
                      <FeatureIcon color={feature.color} icon={feature.icon} />
                      <span className="text-[11px] sm:text-sm font-bold text-gray-700 transition-colors group-hover:text-purple-900 leading-tight w-full break-normal text-left block">
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSolutions;
