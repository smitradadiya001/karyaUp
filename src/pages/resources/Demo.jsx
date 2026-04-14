import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { Link } from "react-router-dom";

export default function Demo() {
  return (
    <SubPageLayout badge="DEMO -SEE IT IN ACTION" badgeColor="bg-rose-100 text-rose-700" title="Live Demo" subtitle="See KaryaUp in action with an interactive demo tailored to your team's needs.">
      <div className="text-center py-16 bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl border border-violet-100">
        <div className="text-6xl mb-6">🖥️</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Book a Live Demo</h3>
        <p className="text-gray-500 mb-2 max-w-md mx-auto">
          Get a personalized walkthrough of KaryaUp with one of our product specialists.
          We'll tailor it to your team's specific workflow and answer all your questions.
        </p>
        <p className="text-sm text-violet-600 font-medium mb-8">30-minute sessions available Monday–Friday, 9am–6pm IST</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/book-demo" className="inline-block bg-violet-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-violet-700 transition-colors">
            Book a Demo
          </Link>
          <Link to="/resources/tutorials" className="inline-block border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
            Watch Video Tutorials
          </Link>
        </div>
      </div>
    </SubPageLayout>
  );
}
