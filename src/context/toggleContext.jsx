"use client";

import React from "react";

export const ToggleContext = React.createContext();

export const ToggleProvider = ({ children }) => {
  // const

  const value = {};

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};
