import React from "react";
import Image from "next/image";

const currentDate = new Date();

const options = { month: "long", day: "numeric", year: "numeric" };

const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
  currentDate
);

const TopNavigation = () => {
  return (
    <header className="flex items-center h-16 border-b-2 border-gray-300">
      <nav className="w-[95%] mx-auto flex items-center justify-between gap-x-5">
        <h1 className="text-lg xl:text-xl font-bold flex-0 w-[20%]">
          Dashboard
        </h1>

        <aside className="flex items-center justify-end flex-1 gap-x-3 lg:gap-x-8">
          <div className="flex items-center justify-end flex-1 gap-x-3 lg:gap-x-7">
            <div className="relative flex-1">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search..."
                className="w-full pl-9 text-sm text-gray-400 bg-white rounded-full h-10 placeholder:text-sm outline-none border-2 border-[#DADDDD]"
              />

              <Image
                src="/icons/search.svg"
                alt="Search"
                width={18}
                height={18}
                className="absolute w-4 h-4 top-[0.75rem] left-3"
              />
            </div>

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

          <div className="flex items-center justify-end gap-x-5">
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
