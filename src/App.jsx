import React, { lazy, Suspense, useEffect, useRef } from "react";
import { LoadingProvider } from "./context/LoadingContext";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import AIAgents from "./pages/features/AIAgents";

// Lazy imports (same as your file)

// Main pages
const Home = lazy(() => import("./pages/Home"));
const Platform = lazy(() => import("./pages/Platform"));
const Features = lazy(() => import("./pages/Features"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Resources = lazy(() => import("./pages/Resources"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Privacy = lazy(() => import("./pages/Privacy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const Login = lazy(() => import("./pages/Login"));
const StartWorkspace = lazy(() => import("./pages/StartWorkspace"));
const BookDemo = lazy(() => import("./pages/BookDemo"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ComingSoonPage = lazy(() => import("./pages/ComingSoonPage"));

// Platform
const ProjectManagement = lazy(() => import("./pages/platform/ProjectManagement"));
const TimeTracking = lazy(() => import("./pages/platform/TimeTracking"));
const TeamCollaboration = lazy(() => import("./pages/platform/TeamCollaboration"));
const BossDashboard = lazy(() => import("./pages/platform/BossDashboard"));
const ProfitTracking = lazy(() => import("./pages/platform/ProfitTracking"));

// Features
const Tasks = lazy(() => import("./pages/features/Tasks"));
const Dashboards = lazy(() => import("./pages/features/Dashboards"));
const Gantt = lazy(() => import("./pages/features/Gantt"));
const Chat = lazy(() => import("./pages/features/Chat"));
const Notifications = lazy(() => import("./pages/features/Notifications"));
const Team = lazy(() => import("./pages/features/Team"));
const Attendance = lazy(() => import("./pages/features/Attendance"));
const Leave = lazy(() => import("./pages/features/Leave"));
const Salary = lazy(() => import("./pages/features/Salary"));
const CalendarPage = lazy(() => import("./pages/features/Calendar"));
const Scheduling = lazy(() => import("./pages/features/Scheduling"));
const Automations = lazy(() => import("./pages/features/Automations"));
const FeaturesTimeTracking = lazy(() => import("./pages/features/FeaturesTimeTracking"));
const Integrations = lazy(() => import("./pages/features/Integrations"));
const WatchDemo = lazy(() => import("./pages/features/Watch_Demo"));

// Solutions
const ProductDevelopment = lazy(() => import("./pages/solutions/ProductDevelopment"));
const Operations = lazy(() => import("./pages/solutions/Operations"));
const IT = lazy(() => import("./pages/solutions/IT"));
const Marketing = lazy(() => import("./pages/solutions/Marketing"));
const HR = lazy(() => import("./pages/solutions/HR"));
const Enterprise = lazy(() => import("./pages/solutions/Enterprise"));
const Startup = lazy(() => import("./pages/solutions/Startup"));
const NonProfit = lazy(() => import("./pages/solutions/NonProfit"));
const Education = lazy(() => import("./pages/solutions/Education"));
const Agency = lazy(() => import("./pages/solutions/Agency"));
const TemplateProjectManagement = lazy(() => import("./pages/solutions/TemplateProjectManagement"));
const TemplateCRM = lazy(() => import("./pages/solutions/TemplateCRM"));
const TemplateMarketing = lazy(() => import("./pages/solutions/TemplateMarketing"));

// Resources
const Blog = lazy(() => import("./pages/resources/Blog"));
const Documentation = lazy(() => import("./pages/resources/Documentation"));
const Demo = lazy(() => import("./pages/resources/Demo"));
const VideoTutorials = lazy(() => import("./pages/resources/VideoTutorials"));

function App() {
  const currentVersion = useRef(null);
  const location = useLocation();
  const isFeatureRoute = location.pathname.startsWith("/features");

  useEffect(() => {
    // Initial fetch to get the current version
    fetch("/version.json")
      .then((res) => res.json())
      .then((data) => {
        currentVersion.current = data.version;
      })
      .catch((err) => console.log("Failed to fetch initial version", err));

    // Poll every 5 minutes
    const interval = setInterval(() => {
      fetch(`/version.json?t=${Date.now()}`)
        .then((res) => res.json())
        .then((data) => {
          if (currentVersion.current && data.version !== currentVersion.current) {
            console.log("New version detected, auto-reloading...");
            window.location.reload();
          }
        })
        .catch((err) => console.log("Failed to poll version", err));
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LoadingProvider>
      <div className={`min-h-screen font-sans w-full max-w-full overflow-x-hidden ${isFeatureRoute ? "feature-route-mobile-gap" : ""}`}>
        <ScrollToTop />
        <Navbar />

        <main className="w-full max-w-full overflow-x-hidden">
          <Suspense
            fallback={<Loader />}
          >
            <Routes>
              {/* Main pages */}
              <Route path="/" element={<Home />} />

              <Route path="/pricing" element={<Pricing />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/start" element={<StartWorkspace />} />
              <Route path="/book-demo" element={<BookDemo />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/coming-soon" element={<ComingSoonPage />} />

              {/* Platform */}
              <Route path="/platform/project-management" element={<ProjectManagement />} />
              <Route path="/platform/time-tracking" element={<TimeTracking />} />
              <Route path="/platform/team-collaboration" element={<TeamCollaboration />} />
              <Route path="/platform/boss-dashboard" element={<BossDashboard />} />
              <Route path="/platform/profit-tracking" element={<ProfitTracking />} />

              {/* Features */}
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
              <Route path="/features/demo" element={<WatchDemo />} />
              <Route path="/features/ai-agents" element={<AIAgents />} />

              {/* Solutions */}
              <Route path="/solutions/product-development" element={<ProductDevelopment />} />
              <Route path="/solutions/operations" element={<Operations />} />
              <Route path="/solutions/it" element={<IT />} />
              <Route path="/solutions/marketing" element={<Marketing />} />
              <Route path="/solutions/hr" element={<HR />} />

              <Route path="/solutions/enterprise" element={<Enterprise />} />
              <Route path="/solutions/startup" element={<Startup />} />
              <Route path="/solutions/non-profit" element={<NonProfit />} />
              <Route path="/solutions/education" element={<Education />} />
              <Route path="/solutions/agency" element={<Agency />} />

              <Route path="/solutions/project-management" element={<TemplateProjectManagement />} />
              <Route path="/solutions/crm" element={<TemplateCRM />} />
              <Route path="/solutions/marketing" element={<TemplateMarketing />} />

              {/* Resources */}
              <Route path="/resources/blog" element={<Blog />} />
              <Route path="/resources/docs" element={<Documentation />} />
              <Route path="/resources/demo" element={<Demo />} />
              <Route path="/resources/tutorials" element={<VideoTutorials />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </LoadingProvider>
  );
}

export default App;
