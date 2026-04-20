import React, { useEffect } from "react";
import loaderLogo from "../assets/Logo(2).png";
import { useLoading } from "../context/LoadingContext";

const Loader = () => {
  const { setIsPageLoading } = useLoading();

  useEffect(() => {
    setIsPageLoading(true);
    return () => {
      setIsPageLoading(false);
    };
  }, [setIsPageLoading]);

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
