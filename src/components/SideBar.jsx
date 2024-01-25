"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  DashboardBoxIcon,
  DashboardCategoryIcon,
  DashboardDiscountShapeIcon,
  DashboardInfoCircleIcon,
  DashboardTrendUpIcon,
  DashboardUserIcon,
  LogInIcon,
  LogOutIcon,
  LogoIcon,
  SettingsIcon,
} from "./icons";
import { ThemeSwitcher } from "./ThemeSwitcher";

const SideBar = ({ toggleSidebar }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Use useEffect to update the isSmallScreen state based on the window width
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 320 || window.innerHeight < 568);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const icons = [
    { path: "/", icon: <LogoIcon /> },
    { path: "/", icon: <DashboardCategoryIcon /> },
    { path: "/", icon: <DashboardTrendUpIcon /> },
    { path: "/", icon: <DashboardUserIcon /> },
    { path: "/", icon: <DashboardBoxIcon /> },
    { path: "/", icon: <DashboardBoxIcon /> },
    { path: "/", icon: <DashboardDiscountShapeIcon /> },
    { path: "/", icon: <DashboardInfoCircleIcon /> },
  ];

  const lastIcons = [
    { path: "/", icon: <LogInIcon /> },
    { path: "/", icon: <SettingsIcon /> },
    { path: "/", icon: <LogOutIcon /> },
  ];

  return (
    <>
      <aside className="w-[90%] mx-auto flex justify-center py-3">
        <div>
          <div
            className={`justify-center ${
              isSmallScreen ? "space-y-2 mb-5" : "space-y-4 mb-20 lg:mb-10"
            }`}
          >
            {icons.map((item, index) => (
              <div className="flex justify-center" key={index}>
                <Link href={item.path}>{item.icon}</Link>
              </div>
            ))}
            <ThemeSwitcher />
          </div>
          <div className="space-y-4 justify-center">
            {lastIcons.map((item, index) => (
              <div className="flex justify-center" key={index}>
                <Link href={item.path} onClick={toggleSidebar}>
                  {item.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
