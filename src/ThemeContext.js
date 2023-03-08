import { createContext, useState } from "react";

const themeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark-theme");

  const handleChangeTheme = () => {
    setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
  };

  const varContext = {
    theme,
    handleChangeTheme,
  };

  return (
    <themeContext.Provider value={varContext}>{children}</themeContext.Provider>
  );
};

export { ThemeProvider, themeContext };
