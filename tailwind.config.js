/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainTextCol: "var(--main_color)",
        mainBgCol: "var(--bg_color)",
        secBgCol: "var(  --second_bg_color)",
      },
    },
  },
  plugins: [],
};
