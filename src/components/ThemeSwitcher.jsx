"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DarkModeIcon, LightModeIcon } from "./icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-white dark:bg-black space-y-5 rounded-full px-2 py-3 lg:px-2 md:px-1">
      <div
        className={`bg-${
          theme === "light" && !isActive ? "primary" : "secondary"
        } p-2 lg:p-3  rounded-full flex justify-center`}
        onClick={() => {
          setTheme("light");
          setIsActive(false);
        }}
      >
        {" "}
        <button className="cursor-pointer" onClick={() => setTheme("light")}>
          <LightModeIcon />
        </button>
      </div>
      <div
        className={`lg:p-1 rounded-full flex justify-center `}
        onClick={() => {
          setTheme("dark");
          setIsActive(true);
        }}
      >
        {" "}
        <button className="cursor-pointer" onClick={() => setTheme("dark")}>
          <DarkModeIcon />
        </button>
      </div>
    </div>
  );
}
