import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext({ isPageLoading: false, setIsPageLoading: () => {} });

export const LoadingProvider = ({ children }) => {
  const [isPageLoading, setIsPageLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ isPageLoading, setIsPageLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
