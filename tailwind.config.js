/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
// import module from "tailwindcss";

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    backgroundImage: {
      store: "url('/Image/u_store.jpg')",
      tictac: "url('/Image/tictac.jpg')",
      currency: "url('/Image/currency.jpg')",
      calculator: "url('/Image/Calculator.jpg')",
      study: "url('/Image/studybuddy.jpg')",
      weather: "url('/Image/weather.jpg')",
    },
  },

  plugins: [require("tailwindcss-animate")],
};
