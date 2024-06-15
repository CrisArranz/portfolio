import { createContext, useState, ReactNode } from "react";
import { DarkType } from "./types/dark";

export const DarkContext = createContext<DarkType>({} as DarkType);

export const DarkProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  function handleDark () {
    setIsDark(prev => !prev);
  }

  const value = {
    isDark,
    handleDark
  };

  return <DarkContext.Provider value={value}>{children}</DarkContext.Provider> 
}

export default DarkContext;