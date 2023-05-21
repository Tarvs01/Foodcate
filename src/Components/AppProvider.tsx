import React from "react";
import { createContext } from "react";
import { useState } from "react";

interface contextItems {
  isSignIn: boolean;
  setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<contextItems | null>(null);

function AppProvider({ children }: any) {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <AppContext.Provider value={{ isSignIn, setIsSignIn }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
