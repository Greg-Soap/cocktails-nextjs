"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext({
  toggle: () => {},
  theme: "dark",
});
export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("dark");
  const toggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ toggle, theme }}>
      <main className={`theme ${theme}`}>{children}</main>
    </ThemeContext.Provider>
  );
};
