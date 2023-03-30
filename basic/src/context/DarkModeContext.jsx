import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState();
  const toggleDarkmode = () => setDarkMode((mode) => !mode);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkmode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
