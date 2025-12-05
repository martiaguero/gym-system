/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#F8F5F1",
          100: "#EFE8DF",
          200: "#E1D5C1",
          300: "#D3C1A3",
          400: "#C6AE88",
          500: "#B99B6E",
          600: "#9A7E55",
          700: "#7A6242",
          800: "#5A4730",
          900: "#3A2C1D",
        },
        sage: {
          50: "#F3F6F4",
          100: "#E2E9E4",
          200: "#C5D4C9",
          300: "#A8BFAE",
          400: "#8BAA94",
          500: "#6E957A",
          600: "#567662",
          700: "#3E574A",
          800: "#273931",
          900: "#101C19",
        },
      },
    },
  },
  plugins: [],
};