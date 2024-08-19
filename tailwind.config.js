/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        weather: "url('/Image/weather.jpg')",
        study: "url('/Image/studybuddy.jpg')",
        calculator: "url('/Image/Calculator.jpg')",
        currency: "url('/Image/currency.jpg')",
        tictac: "url('/Image/tictac.jpg')",
        store: "url('/Image/u_store.jpg')",
      },
    },
  },
  plugins: [],
};
