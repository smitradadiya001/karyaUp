import React, { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader";

import ScatteredWork from "../components/ScatteredWork";
import AllInOne from "../components/AllInOne";

// Lazy-loaded components for below-the-fold optimization
const TeamSolutions = lazy(() => import("../components/TeamSolutions"));
const WorkIntelligence = lazy(() => import("../components/WorkIntelligence"));
const FeatureOverview = lazy(() => import("../components/FeatureOverview"));
const TeamsSection = lazy(() => import("../components/TeamsSection"));
const DataImport = lazy(() => import("../components/DataImport"));
const Management = lazy(() => import("../components/Management"));
const FinalCTA = lazy(() => import("../components/FinalCTA"));

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Karyaup – AI Workspace and Task Management Plateform</title>
        <meta
          name="description"
          content="Karyaup helps teams manage projects, tasks, and workflows efficiently."
        />
        <meta
          name="keywords"
          content="project management, SaaS, team collaboration"
        />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="Karyaup – Smart Work Management" />
        <meta property="og:description" content="Manage your team efficiently" />
      </Helmet>

      <div className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <TrustedBy />

        <div className="home-mobile-optimize [&>section]:!pt-4 [&>section]:!pb-4 sm:[&>section]:!pt-10 sm:[&>section]:!pb-10 lg:[&>section]:!pt-10 lg:[&>section]:!pb-10 text-center sm:text-left">

          <AllInOne />

          <Suspense fallback={<div className="h-40 flex items-center justify-center"><Loader /></div>}>
            <TeamSolutions />
            <WorkIntelligence />
            <FeatureOverview />
            <TeamsSection />
            <ScatteredWork />
            </Suspense>
           
            <DataImport />
        <Management />
           </div>
            <FinalCTA  />
          
       
      </div>
    </>
  );
}
