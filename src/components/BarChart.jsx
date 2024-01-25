"use client";

import { useState } from "react";
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

const CustomBar = (props) => {
  const { x, y, width, height } = props;

  const radius = 10;
  const [isHovered, setHovered] = useState(false);
  const gradientId = `gradient-${Math.random().toString(36).substr(2, 5)}`;

  return (
    <g
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {/* Define linear gradient */}
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            offset="0%"
            style={{
              stopColor: isHovered ? "#66C87B" : "#66C87B",
              stopOpacity: 0.3,
            }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "#66C87B", stopOpacity: 0.3 }}
          />
        </linearGradient>
      </defs>

      {/* Draw the curved top */}
      <path
        d={`M${x},${y + radius}A${radius},${radius},0,0,1,${x + width},${
          y + radius
        }`}
        fill={`url(#${gradientId})`}
      />

      {/* Draw the straight bottom */}
      <rect
        x={x}
        y={y + radius}
        width={width}
        height={height - radius}
        fill={`url(#${gradientId})`}
      />

      {/* Transparent rectangle for hover effect */}
      <rect
        x={x}
        y={y}
        width={width}
        height={radius}
        fill="transparent"
        // onMouseOver={() => setHovered(true)}
        // onMouseOut={() => setHovered(false)}
      />
    </g>
  );
};
export const Barchart = () => {
  const data = [
    {
      name: "Jan",
      income: 2300,
    },
    {
      name: "Feb",
      income: 7383,
    },
    {
      name: "Mar",
      income: 6489,
    },
    {
      name: "Apr",
      income: 1639,
    },
    {
      name: "May",
      income: 3702,
    },
    {
      name: "Jun",
      income: 4738,
    },
    {
      name: "Jul",
      income: 4432,
    },
    {
      name: "Aug",
      income: 4443,
    },
    {
      name: "Sep",
      income: 9479,
    },
    {
      name: "Oct",
      income: 4883,
    },
    {
      name: "Nov",
      income: 2304,
    },
    {
      name: "Dec",
      income: 4060,
    },
  ];
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart
        width={500}
        height={400}
        data={data}
        margin={{ right: 30, top: 30, bottom: 80, left: 10 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray={"5 5"} vertical={false} />
        <Legend />
        <Tooltip />
        <Bar
          type="monotone"
          stroke="#8884d8"
          fill="#66C87B"
          dataKey={"income"}
          shape={<CustomBar />}
          barSize={30}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
