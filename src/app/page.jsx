"use client";
import MainBar from "@/components/MainBar";
import SideBar from "@/components/SideBar";
import TopNavigation from "@/components/TopNavigation";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className="bg-background dark:bg-black">
      <section className="relative flex">
        <aside
          className={`w-[15%] md:w-[8%] lg:w-[9%] xl:w-[6%] h-screen border-r-2 border-gray-300 dark:border-slate-950 sticky top-0 z-10 ${
            isSidebarOpen ? " " : "hidden"
          } md:block`}
        >
          <SideBar />
        </aside>

        <article className="flex-1 overflow-y-auto">
          <TopNavigation />
          <button
            className={`block md:hidden fixed  xxs:top-[50%] left-1 p-2 bg-gray-800 rounded-lg text-white transition-transform transform z-20 ${
              isSidebarOpen ? "translate-x-[240%]" : "translate-x-0"
            }`}
            onClick={toggleSidebar}
          >
            {!isSidebarOpen ? ">" : "<"}
          </button>

          <MainBar />
        </article>
      </section>
    </main>
  );
}
