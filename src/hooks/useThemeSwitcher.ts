"use client";

import React, { useEffect, useState } from "react";

export const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");
    const handleChange = () => {
      if (userPref) {
        if (userPref === "dark") {
          setMode("dark");
          document.documentElement.classList.add("dark");
        } else {
          setMode("light");
          document.documentElement.classList.remove("dark");
        }
      } else {
        if (mediaQuery.matches) {
          setMode("dark");
          document.documentElement.classList.add("dark");
        } else {
          setMode("light");
          document.documentElement.classList.remove("dark");
        }
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};
