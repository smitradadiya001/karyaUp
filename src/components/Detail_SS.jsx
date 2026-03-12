import { useState } from "react";
import {
  CheckCircle2,
  MessageSquare,
  Brain,
  Bot,
  Zap,
  Clock,
  CalendarDays,
  FileText,
  PenTool,
  Settings2,
  LayoutDashboard,
  CalendarCheck,
  PlusCircle,
  ChevronRight,
} from "lucide-react";

import featureProjects from "../assets/projects.jpeg";
import featureChat from "../assets/Team.jpeg";
import featureBrain from "../assets/work_analysis.jpeg";
import featureAgents from "../assets/dashboard1.jpeg";
import featureSprints from "../assets/Task.jpeg";
import featureTime from "../assets/attendance.jpeg";
import featureCalendar from "../assets/calender.jpeg";
import featureDocs from "../assets/dashboard1.jpeg";
import featureWhiteboards from "../assets/dashboard1.jpeg";
import featureAutomations from "../assets/salary.jpeg";
import featureDashboards from "../assets/dashboard1.jpeg";
import featureScheduling from "../assets/calender.jpeg";

const features = [
  {
    id: "projects",
    label: "Projects",
    icon: CheckCircle2,
    image: featureProjects,
  },
  { id: "chat", label: "Chat", icon: MessageSquare, image: featureChat },
  { id: "brain", label: "Brain MAX", icon: Brain, image: featureBrain },
  { id: "agents", label: "AI Agents", icon: Bot, image: featureAgents },
  { id: "sprints", label: "Sprints", icon: Zap, image: featureSprints },
  { id: "time", label: "Time Tracking", icon: Clock, image: featureTime },
  {
    id: "calendar",
    label: "Calendar",
    icon: CalendarDays,
    image: featureCalendar,
  },
  { id: "docs", label: "Docs", icon: FileText, image: featureDocs },
  {
    id: "whiteboards",
    label: "Whiteboards",
    icon: PenTool,
    image: featureWhiteboards,
  },
  {
    id: "automations",
    label: "Automations",
    icon: Settings2,
    image: featureAutomations,
  },
  {
    id: "dashboards",
    label: "Dashboards",
    icon: LayoutDashboard,
    image: featureDashboards,
  },
  {
    id: "scheduling",
    label: "Scheduling",
    icon: CalendarCheck,
    image: featureScheduling,
  },
];

const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState("projects");

  const activeData = features.find((f) => f.id === activeFeature);

  return (
    <div className="flex w-full max-w-[1200px] mx-auto gap-0 items-stretch">
      {/* Left sidebar menu */}
      <nav className="flex flex-col gap-1 min-w-[210px] pr-6 justify-center">
        {features.map((feature) => {
          const isActive = activeFeature === feature.id;
          return (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-left transition-all duration-200 cursor-pointer group ${
                isActive
                  ? "text-primary font-semibold"
                  : "text-slate-600 hover:bg-primary/10"
              }`}
            >
              {isActive ? (
                <ChevronRight className="h-4 w-4 shrink-0 text-primary" />
              ) : (
                <PlusCircle className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-slate-700" />
              )}
              <span className="text-[15px] whitespace-nowrap">
                {feature.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Right side - Feature screenshot, height matches sidebar */}
      <div className="flex-1 rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
        <img
          src={activeData.image}
          alt={activeData.label}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  );
};

export default FeatureShowcase;
