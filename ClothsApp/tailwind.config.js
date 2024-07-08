/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mb: "420px",
      sm: "640px",
      md: "768px",
      lg: "1040px",
      xl: "1280px",
      xxl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
