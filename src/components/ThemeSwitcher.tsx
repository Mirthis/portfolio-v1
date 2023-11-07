"use client";

import { useThemeSwitcher } from "@/hooks/useThemeSwitcher";

import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "./Icons";

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();
  console.log({ theme });

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="ml-3 flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark"
    >
      <SunIcon className="fill-dark block dark:hidden" />
      <MoonIcon className="fill-dark hidden dark:block" />
    </button>
  );
};

export default ThemeSwitcher;
