/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#c8a84b",
        leaf: "#7caf7c",
        dark: "#080c08",
      },
      fontFamily: {
        display: ["Cinzel", "serif"],
        serif: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
