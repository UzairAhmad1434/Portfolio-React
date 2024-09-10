/** @type {import('tailwindcss').Config} */

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
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
      backgroundImage: {
        store: "url('/Image/u_store.jpg')",
        tictac: "url('/Image/tictac.jpg')",
        currency: "url('/Image/currency.jpg')",
        calculator: "url('/Image/Calculator.jpg')",
        study: "url('/Image/studybuddy.jpg')",
        weather: "url('/Image/weather.jpg')",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  animation: {
    "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
    slide: "slide var(--speed) ease-in-out infinite alternate",
  },
  keyframes: {
    "spin-around": {
      "0%": {
        transform: "translateZ(0) rotate(0)",
      },
      "15%, 35%": {
        transform: "translateZ(0) rotate(90deg)",
      },
      "65%, 85%": {
        transform: "translateZ(0) rotate(270deg)",
      },
      "100%": {
        transform: "translateZ(0) rotate(360deg)",
      },
    },
    slide: {
      to: {
        transform: "translate(calc(100cqw - 100%), 0)",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};
