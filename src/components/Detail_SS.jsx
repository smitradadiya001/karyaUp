import { useState } from "react";
import {
  LayoutGrid,
  ClipboardList,
  CheckSquare,
  FolderOpen,
  Monitor,
  Triangle,
  CalendarDays,
  Clock,
  IndianRupee,
  CalendarRange,
  BarChart3,
  Crosshair,
  Settings2,
  Users,
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
    icon: LayoutGrid,
    image: featureProjects,
  },
  { id: "docs", label: "Docs", icon: ClipboardList, image: featureDocs },
  { id: "sprints", label: "Sprints", icon: CheckSquare, image: featureSprints },
  { id: "chat", label: "Chat", icon: FolderOpen, image: featureChat },
  {
    id: "whiteboards",
    label: "Whiteboards",
    icon: Monitor,
    image: featureWhiteboards,
  },
  { id: "brain", label: "Brain MAX", icon: Triangle, image: featureBrain },
  {
    id: "calendar",
    label: "Calendar",
    icon: CalendarDays,
    image: featureCalendar,
  },
  { id: "time", label: "Time Tracking", icon: Clock, image: featureTime },
  { id: "billing", label: "Billing", icon: IndianRupee, image: featureAgents },
  {
    id: "scheduling",
    label: "Scheduling",
    icon: CalendarRange,
    image: featureScheduling,
  },
  {
    id: "dashboards",
    label: "Dashboards",
    icon: BarChart3,
    image: featureDashboards,
  },
  {
    id: "automations",
    label: "Automations",
    icon: Crosshair,
    image: featureAutomations,
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings2,
    image: featureProjects,
  },
  { id: "agents", label: "AI Agents", icon: Users, image: featureAgents },
];

const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState("projects");

  const activeData = features.find((f) => f.id === activeFeature);

  return (
    <div className="w-full px-24 py-10">
      {" "}
      {/* outer spacing */}
      <div className="flex w-full h-[80vh] rounded-2xl overflow-hidden border border-border shadow-xl">
        {/* Sidebar */}
        <nav className="flex flex-col items-center py-4 gap-2 bg-[#3B2A5A] w-[60px] shrink-0">
          {features.map((feature) => {
            const isActive = activeFeature === feature.id;
            const Icon = feature.icon;

            return (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                title={feature.label}
                className={`group relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-feature-sidebar-active"
                    : "hover:bg-feature-sidebar-hover"
                }`}
              >
                <Icon className="h-[18px] w-[18px] text-white stroke-[1.5]" />

                <span className="pointer-events-none absolute left-full ml-2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {feature.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Image Section */}
        <div className="flex-1 overflow-hidden">
          <img
            src={activeData.image}
            alt={activeData.label}
            className="w-full h-full object-cover transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;
