"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <NextThemeProvider
        attribute="class"
        defaultTheme="light"
        themes={["light", "dark"]}
      >
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  );
}
