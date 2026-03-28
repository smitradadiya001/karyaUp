import React from "react";
import loaderLogo from "../assets/Logo(2).png";

const Loader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <img
        src={loaderLogo}
        alt="KaryaUp Logo"
        className="w-full max-w-[140px] sm:max-w-[180px] h-auto object-contain animate-pulse"
      />
    </div>
  );
};

export default Loader;
