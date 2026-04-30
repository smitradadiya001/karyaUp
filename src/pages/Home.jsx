import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader";

import ChaosVsKarya from "../components/ChaosVsKarya";
import ScatteredWork from "../components/ScatteredWork";
import AllInOne from "../components/AllInOne";
import ReviewStrip from "../components/ReviewStrip";

// Lazy-loaded components for below-the-fold optimization
const TeamSolutions = lazy(() => import("../components/TeamSolutions"));
const WorkIntelligence = lazy(() => import("../components/WorkIntelligence"));
const FeatureOverview = lazy(() => import("../components/FeatureOverview"));
const TeamsSection = lazy(() => import("../components/TeamsSection"));
const DataImport = lazy(() => import("../components/DataImport"));
const Management = lazy(() => import("../components/Management"));
const FinalCTA = lazy(() => import("../components/FinalCTA"));

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

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

        {/* CHAOS vs KARYAUP visual */}
        <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 text-center sm:text-left">
          <motion.div {...fadeUp} className="mx-auto mb-6 max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-[#7e22ce] backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7e22ce] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7e22ce]" />
              </span>
              The shift
            </motion.div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900">
              From  Chaos To One System.
            </h2>
          </motion.div>
          <ChaosVsKarya />
        </section>

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
            <ReviewStrip />
            <FinalCTA  />
          
       
      </div>
    </>
  );
}
