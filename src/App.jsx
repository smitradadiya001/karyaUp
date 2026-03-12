import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import StartWorkspace from "./pages/StartWorkspace";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/platform/:page" element={<Platform />} />
          <Route path="/features" element={<Features />} />
          <Route path="/features/:page" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:page" element={<Resources />} />
          <Route path="/login" element={<Login />} />
          <Route path="/start" element={<StartWorkspace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
