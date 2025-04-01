import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");
// const { blackA, mauve, violet, indigo, purple } = require("@radix-ui/colors");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./App.jsx",
  ],
  theme: {
    extend: {
      colors: {
        // Merge existing colors with Radix UI colors
        disabled: "#F1F3F6",
        primary: {
          "50": "#F4F5FF",
          "100": "#EAEBFF",
          "200": "#C6CAFF",
          "300": "#A1A7FF",
          "400": "#7C84FF",
          "500": "#5761FF",
          "600": "#394CFF",
          "700": "#2F3FCC",
          "800": "#262F99",
          "900": "#1D2266",
        },
        black: "#0B1029",
        error: {
          "100": "#FFEEEB",
          "200": "#FFDCD7",
          "300": "#FFB9AE",
          "400": "#FF9786",
          "500": "#FF745D",
          "600": "#FF5135",
          "700": "#CC412A",
          "800": "#993120",
          "900": "#662015",
          "1000": "#33100B",
        },
        // Add Radix UI colors
        // ...blackA,
        // ...mauve,
        // ...violet,
        // ...purple,
        // ...indigo,
      },
      keyframes: {
        // Include Radix UI animations
        enterFromRight: {
          from: { opacity: "0", transform: "translateX(200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        enterFromLeft: {
          "0%": { opacity: "0", transform: "translateX(-200px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        scaleIn: "scaleIn 200ms ease",
        scaleOut: "scaleOut 200ms ease",
        fadeIn: "fadeIn 200ms ease",
        fadeOut: "fadeOut 200ms ease",
        enterFromLeft: "enterFromLeft 250ms ease",
        enterFromRight: "enterFromRight 250ms ease",
        exitToLeft: "exitToLeft 250ms ease",
        exitToRight: "exitToRight 250ms ease",
      },
    },
  },
  plugins: [
    // Add Radix UI plugin
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      });
    }),
  ],
} satisfies Config;
