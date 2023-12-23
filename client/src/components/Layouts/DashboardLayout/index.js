import React, { useState, useEffect } from "react";
import Leftbar from "../components/LeftBar";

function DashboardLayout({ children }) {
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
    <div className="wrapper">
      <Leftbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className="md:absolute md:left-64 overflow-x-auto container mx-auto h-full  bg-[#eee] dark:bg-gray-800">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
