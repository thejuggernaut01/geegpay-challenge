"use client";
import Link from "next/link";
import React from "react";
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

const SideBar = () => {
  return (
    <>
      <aside className="w-[90%] mx-auto flex justify-center py-3 h-full">
        <div className="space-y-7 justify-center">
          <div>
            <div className="space-y-5 mb-20">
              <div className=" flex justify-center">
                <Link href="/">
                  <LogoIcon />
                </Link>
              </div>
              <div className=" flex justify-center">
                <Link href="/category">
                  <DashboardCategoryIcon />
                </Link>
              </div>
              <div className=" flex justify-center">
                <Link href="/trends">
                  <DashboardTrendUpIcon />
                </Link>
              </div>
              <div className=" flex justify-center">
                <Link href="/profile">
                  <DashboardUserIcon />
                </Link>
              </div>
              <div className=" flex justify-center">
                <Link href="/feed">
                  <DashboardBoxIcon />
                </Link>
              </div>
              <div className=" flex justify-center">
                <Link href="/discounts">
                  <DashboardDiscountShapeIcon />
                </Link>
              </div>
              <div className=" flex justify-center">
                <Link href="/info">
                  <DashboardInfoCircleIcon />
                </Link>
              </div>
              <ThemeSwitcher />
            </div>

            <div className="space-y-5">
              <div className=" flex justify-center">
                <Link href="/login">
                  <LogInIcon />
                </Link>
              </div>
              <div className=" flex justify-center">
                <Link href="/settings">
                  <SettingsIcon />
                </Link>
              </div>
              <div className=" flex justify-center">
                <Link href="/logout">
                  <LogOutIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
