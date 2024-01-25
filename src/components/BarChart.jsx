"use client";

import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
export const Barchart = () => {
  const data = [
    {
      name: "Jan",
      revenue: 2300,
      profit: 3625,
    },
    {
      name: "Feb",
      revenue: 7383,
      profit: 2535,
    },
    {
      name: "Mar",
      revenue: 6489,
      profit: 5943,
    },
    {
      name: "Apr",
      revenue: 1639,
      profit: 4363,
    },
    {
      name: "May",
      revenue: 3702,
      profit: 1264,
    },
    {
      name: "Jun",
      revenue: 4738,
      profit: 3394,
    },
    {
      name: "Jul",
      revenue: 4432,
      profit: 4922,
    },
    {
      name: "Aug",
      revenue: 4443,
      profit: 9524,
    },
    {
      name: "Sep",
      revenue: 9479,
      profit: 6262,
    },
    {
      name: "Oct",
      revenue: 4883,
      profit: 7423,
    },
    {
      name: "Nov",
      revenue: 2304,
      profit: 1133,
    },
    {
      name: "Dec",
      revenue: 4060,
      profit: 4020,
    },
  ];
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart
        width={500}
        height={400}
        data={data}
        margin={{ right: 30, top: 30, bottom: 50, left: 10 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray={"3 3"} />
        <Legend />
        <Tooltip />
        <Bar
          type="monotone"
          stroke="#8884d8"
          fill="#8384d8"
          dataKey={"revenue"}
        />
        <Bar
          type="monotone"
          stroke="#7c3aed"
          fill="#8b5cf6"
          dataKey={"profit"}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
