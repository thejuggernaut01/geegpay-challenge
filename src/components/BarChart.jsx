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
  Line,
} from "recharts";

const CustomBar = (props) => {
  const { x, y, width, height } = props;
  const topRadius = 10;

  const radius = 10;
  const [isHovered, setHovered] = useState(false);
  const gradientId = `gradient-${Math.random().toString(36).substr(2, 5)}`;

  return (
    <g
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
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

      <path
        d={`M${x},${y + topRadius}A${topRadius},${topRadius},0,0,1,${
          x + width
        },${y + topRadius}`}
        fill={`url(#${gradientId})`}
      />

      <rect
        x={x}
        y={y + radius}
        width={width}
        height={height - radius}
        fill={`url(#${gradientId})`}
      />
    </g>
  );
};
export const Barchart = () => {
  const data = [
    {
      name: "Jan",
      income: 4900,
    },
    {
      name: "Feb",
      income: 7383,
    },
    {
      name: "Mar",
      income: 3489,
    },
    {
      name: "Apr",
      income: 8639,
    },
    {
      name: "May",
      income: 5702,
    },
    {
      name: "Jun",
      income: 10000,
    },
    {
      name: "Jul",
      income: 5702,
    },
    {
      name: "Aug",
      income: 7383,
    },
    {
      name: "Sep",
      income: 8979,
    },
    {
      name: "Oct",
      income: 3489,
    },
    {
      name: "Nov",
      income: 9304,
    },
    {
      name: "Dec",
      income: 8060,
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
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
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
