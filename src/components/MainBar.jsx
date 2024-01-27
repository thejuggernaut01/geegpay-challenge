"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Barchart } from "./BarChart";
import {
  GreenChartIcon,
  RedChartIcon,
  ShoppingCartIcon,
  TotalIncomeIcon,
  TotalOrderIcon,
  TotalRefundIcon,
  TrendindDownIcon,
  TrendindUpIcon,
} from "./icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Dropdown from "./Dropdown";
import Table from "./Table";

const TOP_PLATFORM = [
  {
    label: "Book Bazaar",
    color: "#6160DC",
    width: "50%",
    value: "$2,500,000",
    percentage: "+15%",
  },
  {
    label: "Artisan Aisle",
    color: "#54C5EB",
    width: "40%",
    value: "$1,800,000",
    percentage: "+10%",
  },
  {
    label: "Toy Troop",
    color: "#FFB74A",
    width: "25%",
    value: "$1,200,000",
    percentage: "+8%",
  },
  {
    label: "XStore",
    color: "#FF4A55",
    width: "25%",
    value: "$1,200,000",
    percentage: "+8%",
  },
];

const MainBar = () => {
  //aos useEffect hook
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 0,
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const transition = {
    duration: 0.6,
    type: "spring",
    damping: 14,
  };

  const [selectedOption, setSelectedOption] = useState("");
  const [openOrders, setOpenOrders] = useState(false);
  const [openTopPlatform, setOpenTopPlatform] = useState(false);

  const handleSortBy = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <>
      <main className=" my-5">
        <section className="bg-background dark:bg-black w-[95%] mx-auto relative overflow-y-hidden min- h-full">
          <div className="xl:grid gap-5 xl:grid-cols-3">
            <div
              className="bg-white dark:bg-slate-950 col-span-2 h-[350px] rounded-lg pb-5"
              data-aos="fade-right"
            >
              <div className="flex items-center justify-between p-6">
                <div className="text-sm md:text-xl font-semibold">
                  Sales Trends
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm md:text-lg text-gray-500 dark:text-gray-200 mr-1 lg:mr-3">
                    Sort by:
                  </div>
                  <div className="z-20">
                    <Dropdown onSelect={handleSortBy} />
                  </div>
                </div>
              </div>
              <Barchart />
            </div>
            <div
              className="cols-span-1 mt-5 xl:mt-0 space-y-5"
              data-aos="fade-left"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
                <div className=" bg-white dark:bg-slate-950 rounded-lg p-2 flex flex-col">
                  <div>
                    <div className="flex  justify-between items-center">
                      <div>
                        <TotalOrderIcon />
                      </div>
                      <div className="">
                        <GreenChartIcon width="80" height="50" />
                      </div>
                    </div>
                    <h3 className="text-xl text-gray-400">Total Order</h3>
                    <p className="text-2xl font-semibold">350</p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="flex text-xs items-center bg-success-100 rounded-full px-1 py-[0.20rem] text-success-600 gap-1 cursor-pointer hover:bg-success-400 hover:text-white">
                      <div>
                        <TrendindUpIcon />
                      </div>
                      <div>23.5%</div>
                    </div>
                    <div className="flex text-xs text-gray-500">
                      <p className="mr-1">vs. </p>
                      <p>previous month</p>
                    </div>
                  </div>
                </div>
                <div className=" bg-white dark:bg-slate-950 h-[166px] rounded-lg p-2">
                  <div>
                    <div className="flex justify-between items-center">
                      <div>
                        <TotalRefundIcon />
                      </div>
                      <div>
                        <RedChartIcon width="80" height="50" />
                      </div>
                    </div>
                    <h3 className="text-xl text-gray-400">Total refund</h3>
                    <p className="text-2xl font-semibold">270</p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="flex text-xs items-center bg-red-200 rounded-full px-1 py-[0.20rem] text-red-600 gap-1 cursor-pointer hover:bg-red-500 hover:text-white">
                      <div>
                        <TrendindDownIcon />
                      </div>
                      <div>23.5%</div>
                    </div>
                    <div className="flex text-xs text-gray-500">
                      <p className="mr-1">vs. </p>
                      <p>previous month</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
                <div className=" bg-white dark:bg-slate-950  rounded-lg p-2 flex flex-col">
                  <div>
                    <div className="flex  justify-between items-center">
                      <div>
                        <ShoppingCartIcon />
                      </div>
                      <div className="">
                        <RedChartIcon width="80" height="50" />
                      </div>
                    </div>
                    <h3 className="text-xl text-gray-400">Average Sales</h3>
                    <p className="text-2xl font-semibold">1567</p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="flex text-xs items-center bg-red-200 rounded-full px-1 py-[0.20rem] text-red-600 gap-1 cursor-pointer hover:bg-red-500 hover:text-white">
                      <div>
                        <TrendindDownIcon />
                      </div>
                      <div>23.5%</div>
                    </div>
                    <div className="flex text-xs text-gray-500">
                      <p className="mr-1">vs. </p>
                      <p>previous month</p>
                    </div>
                  </div>
                </div>
                <div className=" bg-white dark:bg-slate-950 h-[166px] rounded-lg p-2">
                  <div>
                    <div className="flex justify-between items-center">
                      <div>
                        <TotalIncomeIcon />
                      </div>
                      <div>
                        <GreenChartIcon width="80" height="50" />
                      </div>
                    </div>
                    <h3 className="text-xl text-gray-400">Total Income</h3>
                    <p className="text-2xl font-semibold">$350.000</p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="flex text-xs items-center bg-success-100 rounded-full px-1 py-[0.20rem] text-success-600 gap-1 cursor-pointer hover:bg-success-400 hover:text-white">
                      <div>
                        <TrendindUpIcon />
                      </div>
                      <div>23.5%</div>
                    </div>
                    <div className="flex text-xs text-gray-500">
                      <p className="mr-1">vs. </p>
                      <p>previous month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Last Orders */}
        <section className="lg:flex lg:w-[95%] mx-auto gap-5 space-y-5">
          <article className={`w-[95%] mx-auto lg:flex-1`}>
            <motion.div
              className={`border dark:border-slate-950 rounded-lg bg-white dark:bg-slate-950 mt-5 w-full`}
            >
              <div className="w-[95%] mx-auto space-y-3 mt-5 ">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">Last Orders</h2>
                  {openOrders ? (
                    <button
                      onClick={() => setOpenOrders(false)}
                      className="text-danger"
                    >
                      Close
                    </button>
                  ) : (
                    <button
                      onClick={() => setOpenOrders(true)}
                      className="text-primary"
                    >
                      See All
                    </button>
                  )}
                </div>

                <Table />
              </div>
            </motion.div>
          </article>

          <article className="w-[95%] lg:w-[32%] mx-auto border dark:border-slate-950 rounded-lg bg-white dark:bg-slate-950 my-5">
            <div className="w-[95%] mx-auto space-y-3 mt-5 ">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">Top Platform</h2>
                {openTopPlatform ? (
                  <button
                    onClick={() => setOpenTopPlatform(false)}
                    className="text-danger"
                  >
                    Close
                  </button>
                ) : (
                  <button
                    onClick={() => setOpenTopPlatform(true)}
                    className="text-primary"
                  >
                    See All
                  </button>
                )}
              </div>

              <div className="overflow-y-auto h-[270px]">
                <div className="space-y-5">
                  {TOP_PLATFORM.map((platform) => (
                    <div className="space-y-4" key={platform.label}>
                      <label className="font-semibold" htmlFor={platform.label}>
                        {platform.label}
                      </label>
                      <div className="w-full h-5 border rounded-2xl bg-white relative">
                        <div
                          className={`h-5 w-[${platform.width}] bg-[${platform.color}] rounded-2xl absolute -top-[1px] -left-[1px] border border-[${platform.color}]`}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-gray-500">
                        <p>{platform.value}</p>
                        <p>{platform.percentage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default MainBar;
