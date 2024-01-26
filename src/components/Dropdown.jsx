import React, { useState, useEffect, useRef } from "react";
import { ArrowDownIcon } from "./icons";

const Dropdown = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("Weekly");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = ["Weekly", "Daily", "Monthly"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white dark:bg-slate-950 dark:text-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {selectedOption} <ArrowDownIcon />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-black ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className="block w-full px-4 py-2 text-sm text-gray-700 dark:text-white dark:hover:bg-slate-500 hover:bg-gray-100 hover:text-gray-900"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
