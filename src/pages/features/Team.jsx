import React from 'react';
import FeatureCTA from "../../components/FeatureCTA";
import TeamHero from "../../components/TeamHero";
import TeamInfoSection from "../../components/TeamInfoSection";
import TeamImg from "../../assets/Team.webp";
import { Helmet } from "react-helmet-async";

export default function Team() {
  return (
    <>
       <Helmet>
        {/* Title (Chrome Tab) */}
        <title>Team Management & Collaboration | Karyaup Features</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Manage your team efficiently with Karyaup. Assign roles, collaborate seamlessly, track performance, and improve productivity across your organization."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="team management software, team collaboration tools, role management, employee productivity, team tracking, Karyaup"
        />

        {/* Author */}
        <meta name="author" content="Karyaup" />

        {/* Open Graph (Essential Only) */}
        <meta
          property="og:title"
          content="Team Management & Collaboration | Karyaup"
        />
        <meta
          property="og:description"
          content="Organize teams, assign roles, and collaborate efficiently in one platform."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://karyaup.com/features/team"
        />
        <meta property="og:site_name" content="Karyaup" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://karyaup.com/features/team"
        />
      </Helmet>
    <div className="min-h-screen bg-white pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
      
      {/* Hero Section */}
      <TeamHero />

      {/* Team Info Section */}
      <TeamInfoSection />

      {/* Feature CTA Section */}
      <FeatureCTA
        title={<>Build A Team That <br /> Works In Harmony</>}
        description="Empower your people with the right tools, clear roles, and perfect workload balance."
        image={TeamImg}
        imageAlt="KaryaUp Team Management"
        containerClassName="mt-10 mb-20"
        imageOuterClassName="relative w-full translate-x-0 ml-auto"
        imageClassName="w-[90%] lg:w-[100%] -translate-x-4 lg:translate-x-0 ml-auto"
      />
      </div>
      </>
  );
}
