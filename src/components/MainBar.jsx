"use client";

import React, { useState } from "react";
import { Barchart } from "./BarChart";
import {
  ArrowDownIcon,
  GreenChartIcon,
  RedChartIcon,
  TotalOrderIcon,
} from "./icons";

const MainBar = () => {
  return (
    <>
      <section className="w-[95%] mx-auto mt-5">
        <div className="grid gap-5 xl:grid-cols-3">
          <div className="bg-white col-span-2 h-[350px] rounded-lg">
            <div className="flex items-center justify-between p-6">
              <div className="text-xl font-semibold">Sales Trends</div>
              <div className="flex items-center justify-between">
                <div className="font-semibold text-gray-500">Sort by:</div>
                <div className="border-gray-400 border-1">
                  <button className="w-full px-8 py-2 ronded-full ">
                    <ArrowDownIcon />
                  </button>
                </div>
              </div>
            </div>
            <Barchart />
          </div>
          <div className="cols-span-1">
            <div className="grid grid-cols-2 gap-5 ">
              <div className="space-y-5 ">
                <div className=" bg-white h-[166px] rounded-lg p-4">
                  <div className="flex justify-between">
                    <div>
                      <TotalOrderIcon />
                    </div>
                    <div className="">
                      <GreenChartIcon />
                    </div>
                  </div>
                  <h3 className="text-xl text-gray-400">Total Order</h3>
                  <p className="text-2xl font-semibold">350</p>
                </div>
                <div className="bg-white  h-[166px] rounded-lg">
                  <div className=" bg-white h-[166px] rounded-lg p-4">
                    <div className="flex justify-between">
                      <div>
                        <TotalOrderIcon />
                      </div>
                      <div>
                        <RedChartIcon />
                      </div>
                    </div>
                    <h3 className="text-xl text-gray-400">Average Sales</h3>
                    <p className="text-2xl font-semibold">1567</p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="bg-white h-[166px] rounded-lg">
                  {" "}
                  <div className=" bg-white h-[166px] rounded-lg p-4">
                    <div className="flex justify-between">
                      <div>
                        <TotalOrderIcon />
                      </div>
                      <div>
                        <RedChartIcon />
                      </div>
                    </div>
                    <h3 className="text-xl text-gray-400">Total Refund</h3>
                    <p className="text-2xl font-semibold">270</p>
                  </div>
                </div>
                <div className=" bg-white h-[166px] rounded-lg p-4">
                  <div className="flex justify-between">
                    <div>
                      <TotalOrderIcon />
                    </div>
                    <div>
                      <GreenChartIcon />
                    </div>
                  </div>
                  <h3 className="text-xl text-gray-400">Total Income</h3>
                  <p className="text-2xl font-semibold">$350.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainBar;
