import React from "react";
import { createContext } from "react";
import { useState } from "react";

interface contextItems {
  isSignIn: boolean;
  setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<contextItems | null>(null);

function AppProvider({ children }: any) {
  const [isSignIn, setIsSignIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <AppContext.Provider
      value={{ isSignIn, setIsSignIn, currentPage, setCurrentPage }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
