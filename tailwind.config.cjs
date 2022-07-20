/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./images/bg-pattern-intro-mobile.svg')",
      },
    },
    colors: {
      transparent: "transparent",
      primary: {
        Lightred: "#FF525D",
        Verylightred: "#FF5260",
        Verydarkblue: "#1F3F5B",
        hoverred: "#FF7B86",
      },
      neutral: {
        White: "#ffffff",
        Grayishblue: "#C8C8CB",
        Graymenu: "#EFEFF1",
        Verydarkgrayishblue: "#4B5862",
        Verydarkblackblue: "#25252D",
      },
    },
    fontFamily: {
      sansoverpass: ["Overpass", "sans-serif"],
      sansubuntu: ["Ubuntu", "sans-serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: ["1rem", "20px"],
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": ["1.5rem", "28px"],
      "2xxl": ["1.75rem", "28px"],
      "3xl": ["1.875rem", "38px"],
      "4xl": "2.125rem",
      "4xxl": "2.375rem",
      "5xl": "3.625rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    letterSpacing: {
      tightest: "-.04em",
      tighter: "-.03em",
      tight: "-.02em",
      tigh: "-.01em",
      normal: "0",
      wide: ".03em",
    },
  },
  plugins: [],
};
