/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        p: ["karla", "sans-serif"],
        h: ["Markazi", "sans-serif"],
      },
      colors: {
        primaryColor: "#495E57",
      },
      screens: {
        med: "800px",
      },
    },
  },
  plugins: [],
};
