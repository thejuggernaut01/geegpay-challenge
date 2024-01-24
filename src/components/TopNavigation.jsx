import Image from "next/image";
import React from "react";
import { NotificationIcon, SearchIcon } from "./icons";

const TopNavigation = () => {
  return (
    <header className="flex items-center h-16 bg-white">
      <nav className="w-full lg:w-[75%] px-5 sm:px-10 flex items-center justify-between gap-5 ">
        <h1 className="text-lg font-bold">Dashboard</h1>

        <aside className="flex">
          <div className="relative flex-1">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search here..."
              className="w-full pl-8 text-sm text-gray-400 bg-[#F9FAFB] rounded-md h-9 placeholder:text-sm outline-white"
            />
            <SearchIcon extraClasses="absolute top-3 left-2 w-4 h-4 stroke-gray-400" />
          </div>

          <div className="flex items-center gap-2">
            <div className="border border-[#F9FAFB] rounded-full bg-[#F9FAFB] p-1">
              <NotificationIcon extraClasses="cursor-pointer" />
            </div>

            <button
              type="button"
              className="flex items-center gap-2 px-3 py-1 border rounded-full"
            >
              <div className="relative w-8 h-8 cursor-pointer">
                <Image
                  src="/developer.jpg"
                  alt="Developer - Ayoola Adewale"
                  fill={true}
                  className="absolute object-cover rounded-full"
                />
              </div>
              <div className="text-sm">
                <p>Justin Bergson</p>
                <p>Justin@gmail.com</p>
              </div>
            </button>
          </div>
        </aside>
      </nav>
    </header>
  );
};

export default TopNavigation;
