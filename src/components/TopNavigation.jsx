import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownIcon, CalenderIcon, NotificationIcon } from "./icons";

const currentDate = new Date();

const options = { month: "long", day: "numeric", year: "numeric" };

const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
  currentDate
);

const UserProfileDropdown = ({ onClose, userName, userEmail }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute right-0 mt-52 w-48 bg-white dark:bg-slate-950 border border-gray-300 dark:border-slate-850 rounded-lg shadow-lg z-10"
    >
      <div className="p-5 flex flex-col items-center space-y-5">
        <div className="flex justify-center items-center relative  w-8 h-8">
          <Image
            src="/developer.jpg"
            alt="Developer - Ayoola Adewale"
            fill={true}
            className="absolute object-cover rounded-full"
          />
        </div>
        <div className="flex justify-center">
          <div className="text-sm">
            <p>{userName}</p>
            <p>{userEmail}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 dark:border-slate-850">
        <button
          onClick={onClose}
          className="w-full text-left p-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-900 flex justify-center"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};

const TopNavigation = () => {
  const [width, setWidth] = useState(0);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [userDropdownVisible, setUserDropdownVisible] = useState(false);

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      setToggleSearch(false);
    }
  };

  const handleUserDropdown = () => {
    setUserDropdownVisible(!userDropdownVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Call it initially to set the initial width
    handleResize();

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <header className="flex items-center h-16 border-b-2 border-gray-300 dark:border-slate-950">
      <nav className="w-[95%] mx-auto flex items-center justify-between gap-x-5">
        <h1 className="text-lg xl:text-xl font-bold flex-0 w-[20%]">
          Dashboard
        </h1>

        <aside className="flex items-center justify-end flex-1 gap-x-3 lg:gap-x-8">
          <div className="flex items-center justify-end flex-1 gap-x-3 lg:gap-x-7">
            <div className={`relative ${toggleSearch && "z-10"}`}>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search..."
                className={`${
                  toggleSearch ? "w-full" : "w-5"
                } md:w-full pl-9 text-sm text-gray-400 rounded-full h-10 placeholder:text-sm outline-none border-2 border-[#DADDDD] cursor-pointer`}
              />
              <Image
                src="/icons/search.svg"
                alt="Search"
                width={18}
                height={18}
                className="absolute w-4 h-4 top-[0.75rem] left-3 cursor-pointer"
                onClick={() => {
                  if (width <= 768) {
                    setToggleSearch(true);
                  } else {
                    setToggleSearch(!toggleSearch);
                  }
                }}
              />
            </div>

            <button className="hidden md:flex items-center gap-1">
              <CalenderIcon />
              <p className="hidden text-sm md:text-xs lg:text-sm font-medium xl:text-base md:block">
                {formattedDate}
              </p>
            </button>
          </div>

          <div className="flex items-center justify-end xxs:gap-x-2 sm:gap-x-5 relative">
            <button className="">
              <NotificationIcon />
            </button>

            <button
              type="button"
              className="flex items-center py-1 border-gray-500 rounded-full md:border sm:gap-2 sm:px-3 xxs:px-1 xxs:gap-1"
              onClick={handleUserDropdown}
            >
              <div className="relative w-8 h-8">
                <Image
                  src="/developer.jpg"
                  alt="Developer - Ayoola Adewale"
                  fill={true}
                  className="absolute object-cover rounded-full"
                />
              </div>
              <div className="hidden sm:text-sm xxs:text-xs md:block">
                <p>Justin Bergson</p>
                <p>Justin@gmail.com</p>
              </div>
              <ArrowDownIcon />
            </button>

            {userDropdownVisible && (
              <UserProfileDropdown
                onClose={() => setUserDropdownVisible(false)}
                userName="Justin Bergson"
                userEmail="justin@gmail.com"
              />
            )}
          </div>
        </aside>
      </nav>
    </header>
  );
};

export default TopNavigation;
