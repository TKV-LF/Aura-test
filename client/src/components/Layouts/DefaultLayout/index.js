import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function DefaultLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="wrapper bg-[#eee] dark:bg-slate-800">
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className="container mx-auto py-1">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
