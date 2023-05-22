import React from "react";
import { createContext } from "react";
import { useState } from "react";

interface UserProfile {
  name: string;
}

interface contextItems {
  isSignIn: boolean;
  setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
}

const AppContext = createContext<contextItems | null>(null);

function AppProvider({ children }: any) {
  const [isSignIn, setIsSignIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userProfile, setUserProfile] = useState<UserProfile>({ name: "User" });

  return (
    <AppContext.Provider
      value={{
        isSignIn,
        setIsSignIn,
        currentPage,
        setCurrentPage,
        isLoggedIn,
        setIsLoggedIn,
        userProfile,
        setUserProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
