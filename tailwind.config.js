/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "dark-purple": "#4c1d95",
      "slate-white": "#f8fafc",
      black: "#000000",
      "light-pink": "#fbcfe8",
    },
    extend: {},
  },
  plugins: [],
};
