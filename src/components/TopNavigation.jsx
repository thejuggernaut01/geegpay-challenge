"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const currentDate = new Date();

const options = { month: "long", day: "numeric", year: "numeric" };

const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
  currentDate
);

const TopNavigation = () => {
  const [width, setWidth] = useState(0);
  const [toggleSearch, setToggleSearch] = useState(false);

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      setToggleSearch(false);
    }
  };

  const transition = {
    duration: 0.2,
    type: "spring",
    damping: 10,
  };

  const initial = toggleSearch ? { y: -100 } : null;
  const animate = toggleSearch ? { y: "0%" } : null;

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
    <header className="flex items-center h-16 border-b-2 border-gray-300">
      <nav className="w-[95%] mx-auto flex items-center justify-between gap-x-5">
        <h1 className="text-lg xl:text-xl font-bold flex-0 w-[20%]">
          Dashboard
        </h1>

        <aside className="flex items-center justify-end flex-1 gap-x-3 lg:gap-x-8">
          <div className="flex items-center justify-end flex-1 gap-x-3 lg:gap-x-7">
            <AnimatePresence>
              {toggleSearch && (
                <motion.button
                  className={`cursor-pointer ${
                    toggleSearch
                      ? "fixed inset-0 z-10 flex flex-1 bg-opacity-25 backdrop-brightness-50"
                      : "relative md:flex-1"
                  }`}
                  id="wrapper"
                  onClick={(e) => handleClose(e)}
                >
                  <motion.div
                    initial={initial}
                    animate={animate}
                    exit={{ y: -100 }}
                    transition={transition}
                    className={`${
                      toggleSearch ? "w-[80%] mx-auto relative mt-3" : ""
                    }`}
                    onClick={() => {
                      if (width <= 768) {
                        setToggleSearch(true);
                      } else {
                        setToggleSearch(false);
                      }
                    }}
                  >
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
                      className="absolute w-4 h-4 top-[0.75rem] left-3"
                    />
                  </motion.div>
                </motion.button>
              )}
            </AnimatePresence>
            {!toggleSearch && (
              <button
                className={`cursor-pointer ${
                  toggleSearch
                    ? "fixed inset-0 z-10 flex flex-1 bg-opacity-25 backdrop-brightness-50"
                    : "relative md:flex-1"
                }`}
                id="wrapper"
                onClick={(e) => handleClose(e)}
              >
                <motion.div
                  initial={initial}
                  animate={animate}
                  className={`${
                    toggleSearch ? "w-[80%] mx-auto relative mt-3" : ""
                  }`}
                  onClick={() => {
                    if (width <= 768) {
                      setToggleSearch(true);
                    } else {
                      setToggleSearch(false);
                    }
                  }}
                >
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
                    className="absolute w-4 h-4 top-[0.75rem] left-3"
                  />
                </motion.div>
              </button>
            )}

            <button className="flex items-center gap-1">
              <Image
                src="/icons/calendar.svg"
                alt="Calendar"
                width={22}
                height={22}
                className="w-7 h-7"
                title={formattedDate}
              />
              <p className="hidden text-sm font-medium xl:text-base lg:block">
                {formattedDate}
              </p>
            </button>
          </div>

          <div className="flex items-center justify-end xxs:gap-x-2 sm:gap-x-5">
            <button className="p-2 border border-gray-500 rounded-full">
              <Image
                src="/icons/notification.svg"
                alt="Notification bell"
                width={19}
                height={19}
              />
            </button>

            <button
              type="button"
              className="flex items-center py-1 border-gray-500 rounded-full md:border sm:gap-2 sm:px-3 xxs:px-1 xxs:gap-1"
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

              <Image
                src="/icons/arrow-down.svg"
                alt="Arrow Down"
                width={18}
                height={18}
                className="hidden md:block"
              />
            </button>
          </div>
        </aside>
      </nav>
    </header>
  );
};

export default TopNavigation;
