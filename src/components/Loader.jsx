import React from "react";
import loaderLogo from "../assets/Logo(2).png";

const Loader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <img
        src={loaderLogo}
        alt="KaryaUp Logo"
        className="h-auto w-full max-w-[54px] sm:max-w-[64px] object-contain animate-[loader-bounce_0.9s_ease-in-out_infinite]"
      />
    </div>
  );
};

export default Loader;
