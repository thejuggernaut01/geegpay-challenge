import Image from "next/image";
import React, { useState } from "react";
import { InvoiceIcon } from "./icons";
import Invoice from "./Invoice";

const ORDERS = [
  {
    image: "/icons/marcus.svg",
    name: "Marcus Bergson",
    date: "Nov 15, 2023",
    amount: "$80,000",
    status: "Paid",
  },
  {
    image: "/icons/jaydon.svg",
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    amount: "$150,000",
    status: "Refund",
  },
  {
    image: "/icons/corey.svg",
    name: "Corey Schleifer",
    date: "Nov 14, 2023",
    amount: "$87,000",
    status: "Paid",
  },
  {
    image: "/icons/cooper.svg",
    name: "Cooper Press",
    date: "Nov 14, 2023",
    amount: "$100,000",
    status: "Refund",
  },
  {
    image: "/icons/philip.svg",
    name: "Philip Lubin",
    date: "Nov 13, 2023",
    amount: "$78,000",
    status: "Paid",
  },
];

const Table = () => {
  const [openInvoice, setOpenInvoice] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewClick = (order) => {
    setSelectedOrder(order);
    setOpenInvoice(true);
  };
  return (
    <div className="overflow-x-auto">
      <table className="table-auto sm:min-w-full">
        <thead>
          <tr className="text-left border-b border-gray-300 text-gray-400">
            <th className="">Name</th>
            <th className="">Date</th>
            <th className="">Amount</th>
            <th className="">Status</th>
            <th className="">Invoice</th>
          </tr>
        </thead>
        <tbody>
          {ORDERS.map((order, index) => (
            <tr
              key={index}
              className="border-b border-gray-300 text-sm md:text-base "
            >
              <td className="py-3 pr-5 whitespace-nowrap flex items-center space-x-3">
                <Image
                  src={order.image}
                  alt={order.name}
                  width={20}
                  height={20}
                />
                <p>{order.name}</p>
              </td>
              <td className="py-3 pr-5 text-gray-400 whitespace-nowrap">
                {order.date}
              </td>
              <td className="py-3 pr-5">{order.amount}</td>
              <td
                className={`py-3 pr-5 ${
                  order.status === "Paid" ? "text-primary" : "text-danger"
                }`}
              >
                {order.status}
              </td>
              <td className="py-3 pr-5 whitespace-nowrap">
                <button
                  className="flex items-center space-x-1"
                  onClick={() => handleViewClick(order)}
                >
                  <InvoiceIcon />
                  <p>view</p>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openInvoice && (
        <Invoice
          order={selectedOrder}
          onClose={() => {
            setSelectedOrder(null);
            setOpenInvoice(false);
          }}
        />
      )}
    </div>
  );
};

export default Table;
