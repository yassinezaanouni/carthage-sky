/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#378FFF",
          500: "#3069B2",
        },
        dark: {
          400: "#1E1E1E",
        },
      },
      screens: {
        gmd: "840px",
        smallest: "400px",
      },
    },
  },
  plugins: [],
};
