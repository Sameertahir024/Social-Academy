/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        primary: "#20B486",
        gray: "#6D737A",
      },
    },
  },
  plugins: [],
};
