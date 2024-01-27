import React from "react";
import Image from "next/image";

const Invoice = ({ order, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white dark:bg-slate-950 border border-gray-300 dark:border-slate-850 rounded-lg overflow-hidden w-96">
        <div className="p-5 text-center">
          <div className="flex justify-center items-center relative w-12 h-12 mx-auto">
            <Image
              src={order.image}
              alt={order.name}
              width={100}
              height={100}
              className="absolute object-cover rounded-full"
            />
          </div>
          <div className="flex justify-center">
            <div className="text-sm">
              <p>{order.name}</p>
              <p>{order.date}</p>
              <p>{order.amount}</p>
              <p
                className={`${
                  order.status === "Paid" ? "text-primary" : "text-danger"
                }`}
              >
                {order.status}
              </p>
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
      </div>
    </div>
  );
};

export default Invoice;
