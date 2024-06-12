/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Vazir: "Vazirmatn RD",
      },
      colors: {
        primary: "#24388d",
        darkBlue: " #0E1F68",
        white: "#fff",
        background: "#f5f5f5",
        backgroundSecondary: "#F4F6FF",
        orange: "#EC6839",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1750px",
      },
    },
  },
  plugins: [],
};
