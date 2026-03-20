import React from "react";
import Hero from "../components/Hero";
import ScatteredWork from "../components/ScatteredWork";
import FeatureShowcase from "../components/Detail_SS.jsx";
import TrustedBy from "../components/TrustedBy";
import AllInOne from "../components/AllInOne";
import Roles from "../components/Roles";
import TeamSolutions from "../components/TeamSolutions";
import WorkIntelligence from "../components/WorkIntelligence";
import FeatureOverview from "../components/FeatureOverview";
import TeamsSection from "../components/TeamsSection";
import Integrations from "../components/Integrations";
import Management from "../components/Management";
import DataImport from "../components/DataImport";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
        <TrustedBy /> 
      <ScatteredWork />
      {/* <FeatureShowcase /> */}
      
     
       <AllInOne /> 
      
      {/* <Roles /> */}
      <TeamSolutions />
      <WorkIntelligence />
      <FeatureOverview />
      <TeamsSection />
      <Integrations />
      <DataImport />
      <Management /> 
      <FinalCTA />
    </>
  );
}
