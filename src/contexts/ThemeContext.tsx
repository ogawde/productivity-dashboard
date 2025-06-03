import {  createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: 'light', 
  toggleTheme: () => {} 
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const themevalue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={themevalue}>{children}</ThemeContext.Provider>
  );
};
