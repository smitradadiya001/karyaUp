import React from "react";
import Hero from "../components/Hero";
import FeatureShowcase from "../components/Detail_SS.jsx";
import TrustedBy from "../components/TrustedBy";
import AllInOne from "../components/AllInOne";
import Roles from "../components/Roles";
import TeamSolutions from "../components/TeamSolutions";
import Management from "../components/Management";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureShowcase />
      
      <TrustedBy />
      <AllInOne />
      <Roles />
      <TeamSolutions />
      <Management />
      <section className="py-16 sm:py-20 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8">
            Ready to transform your workflow?
          </h2>
          <p className="text-base sm:text-xl opacity-90 mb-8 sm:mb-12">
            Join thousands of teams who use KaryaUp to stay organized and
            efficient.
          </p>
          <button className="bg-white text-primary w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-bold text-base sm:text-xl shadow-2xl hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all">
            Get Started with KaryaUp
          </button>
        </div>
      </section>
    </>
  );
}
