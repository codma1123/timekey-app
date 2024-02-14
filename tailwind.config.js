/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: "#8D7B68",
        "primary-dark": "#39332C",
        content: "#2D2D2D",
        secondary: "#C5B7A9",
        tertiary: "#C8B6A6",
        light: "#F1DEC9",
        text: "#4D4D4D",
        input: "#FBFBFB",
        main: "#F4D878",
        kakao: "#F7D900",
        naver: "#00C300",
        overtime: "#212121",
        error: "#D43333",
      },
      borderRadius: {
        bottom: "1.875rem",
      },
      height: {
        bottom: "4.875rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        dosis: ["var(--font-dosis)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
