import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Main pages
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Features from "./pages/Features";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Login from "./pages/Login";
import StartWorkspace from "./pages/StartWorkspace";
import NotFound from "./pages/NotFound";

// Platform sub-pages
import ProjectManagement from "./pages/platform/ProjectManagement";
import TimeTracking from "./pages/platform/TimeTracking";
import TeamCollaboration from "./pages/platform/TeamCollaboration";
import BossDashboard from "./pages/platform/BossDashboard";
import ProfitTracking from "./pages/platform/ProfitTracking";

// Features sub-pages
import Tasks from "./pages/features/Tasks";
import Dashboards from "./pages/features/Dashboards";
import Gantt from "./pages/features/Gantt";
import Chat from "./pages/features/Chat";
import Notifications from "./pages/features/Notifications";
import Team from "./pages/features/Team";
import Attendance from "./pages/features/Attendance";
import Leave from "./pages/features/Leave";
import Salary from "./pages/features/Salary";
import CalendarPage from "./pages/features/Calendar";
import Scheduling from "./pages/features/Scheduling";
import Automations from "./pages/features/Automations";
import FeaturesTimeTracking from "./pages/features/FeaturesTimeTracking";
import Integrations from "./pages/features/Integrations";

// Solutions sub-pages
import SolProjectManagement from "./pages/solutions/SolProjectManagement";
import ProductDevelopment from "./pages/solutions/ProductDevelopment";
import Operations from "./pages/solutions/Operations";
import IT from "./pages/solutions/IT";
import Marketing from "./pages/solutions/Marketing";
import HR from "./pages/solutions/HR";
import Enterprise from "./pages/solutions/Enterprise";
import Startup from "./pages/solutions/Startup";
import NonProfit from "./pages/solutions/NonProfit";
import Education from "./pages/solutions/Education";
import Agency from "./pages/solutions/Agency";
import TemplateProjectManagement from "./pages/solutions/TemplateProjectManagement";
import TemplateCRM from "./pages/solutions/TemplateCRM";
import TemplateMarketing from "./pages/solutions/TemplateMarketing";

// Resources sub-pages
import Blog from "./pages/resources/Blog";
import Documentation from "./pages/resources/Documentation";
import Demo from "./pages/resources/Demo";
import VideoTutorials from "./pages/resources/VideoTutorials";

function App() {
  return (
    <div className="min-h-screen font-sans">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/features" element={<Features />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/start" element={<StartWorkspace />} />

          {/* Platform sub-pages */}
          <Route path="/platform/project-management" element={<ProjectManagement />} />
          <Route path="/platform/time-tracking" element={<TimeTracking />} />
          <Route path="/platform/team-collaboration" element={<TeamCollaboration />} />
          <Route path="/platform/boss-dashboard" element={<BossDashboard />} />
          <Route path="/platform/profit-tracking" element={<ProfitTracking />} />

          {/* Features sub-pages */}
          <Route path="/features/tasks" element={<Tasks />} />
          <Route path="/features/dashboards" element={<Dashboards />} />
          <Route path="/features/gantt" element={<Gantt />} />
          <Route path="/features/chat" element={<Chat />} />
          <Route path="/features/notifications" element={<Notifications />} />
          <Route path="/features/team" element={<Team />} />
          <Route path="/features/attendance" element={<Attendance />} />
          <Route path="/features/leave" element={<Leave />} />
          <Route path="/features/salary" element={<Salary />} />
          <Route path="/features/calendar" element={<CalendarPage />} />
          <Route path="/features/scheduling" element={<Scheduling />} />
          <Route path="/features/automations" element={<Automations />} />
          <Route path="/features/time-tracking" element={<FeaturesTimeTracking />} />
          <Route path="/features/integrations" element={<Integrations />} />

          {/* Solutions sub-pages — Teams */}
          <Route path="/solutions/project-management" element={<SolProjectManagement />} />
          <Route path="/solutions/product-development" element={<ProductDevelopment />} />
          <Route path="/solutions/operations" element={<Operations />} />
          <Route path="/solutions/it" element={<IT />} />
          <Route path="/solutions/marketing" element={<Marketing />} />
          <Route path="/solutions/hr" element={<HR />} />

          {/* Solutions sub-pages — Companies */}
          <Route path="/solutions/enterprise" element={<Enterprise />} />
          <Route path="/solutions/startup" element={<Startup />} />
          <Route path="/solutions/non-profit" element={<NonProfit />} />
          <Route path="/solutions/education" element={<Education />} />
          <Route path="/solutions/agency" element={<Agency />} />

          {/* Solutions sub-pages — Templates */}
          <Route path="/solutions/templates/project-management" element={<TemplateProjectManagement />} />
          <Route path="/solutions/templates/crm" element={<TemplateCRM />} />
          <Route path="/solutions/templates/marketing" element={<TemplateMarketing />} />

          {/* Resources sub-pages */}
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/docs" element={<Documentation />} />
          <Route path="/resources/demo" element={<Demo />} />
          <Route path="/resources/tutorials" element={<VideoTutorials />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
