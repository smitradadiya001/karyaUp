import React from 'react';
import FeatureCTA from "../../components/FeatureCTA";
import TeamHero from "../../components/TeamHero";
import TeamInfoSection from "../../components/TeamInfoSection";
import TeamImg from "../../assets/Team.png";

export default function Team() {
  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20 pb-0 text-slate-900">
      
      {/* Hero Section */}
      <TeamHero />

      {/* Team Info Section */}
      <TeamInfoSection />

      {/* Feature CTA Section */}
      <FeatureCTA
        title={<>Build a team that <br /> works in harmony</>}
        description="Empower your people with the right tools, clear roles, and perfect workload balance."
        image={TeamImg}
        imageAlt="KaryaUp Team Management"
        containerClassName="mt-10 mb-20"
        titleClassName="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.2] mb-4 tracking-tight drop-shadow-lg"
        imageOuterClassName="relative w-full translate-x-0 ml-auto"
        imageClassName="w-[90%] lg:w-[100%] -translate-x-4 lg:translate-x-0 ml-auto"
      />
    </div>
  );
}
