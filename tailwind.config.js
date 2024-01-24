/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/helper/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main Colors
        primary: "#34CAA5",
        secondary: "#0D062D",
        // Alerts
        success: "#66C87B",
        error: "#ED544E",
        warning: "#F4C700",

        // Neutral
        background: "#F7F8FA",
      },
      screens: {
        xxs: "320px",
        xs: "360px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
