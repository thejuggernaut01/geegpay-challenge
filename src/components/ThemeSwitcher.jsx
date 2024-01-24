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
    <div className="bg-white space-y-5 rounded-full py-3 lg:px-2 md:px-1">
      <div
        className={`bg-${
          theme === "light" && !isActive ? "primary" : "secondary"
        } lg:p-2 md:py-2 rounded-full flex justify-center`}
        onClick={() => {
          setTheme("light");
          setIsActive(false);
        }}
      >
        {" "}
        <div className="cursor-pointer" onClick={() => setTheme("light")}>
          <LightModeIcon />
        </div>
      </div>
      <div
        className={`bg-${
          theme === "dark" && isActive ? "primary" : ""
        } lg:p-1 rounded-full flex justify-center `}
        onClick={() => {
          setTheme("dark");
          setIsActive(true);
        }}
      >
        {" "}
        <div className="cursor-pointer" onClick={() => setTheme("dark")}>
          <DarkModeIcon />
        </div>
      </div>
    </div>
  );
}
