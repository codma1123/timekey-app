import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: "#8D7B68",
        "primary-dark": "#39332C",
        secondary: "#C5B7A9",
        tertiary: "#C8B6A6",
        light: "#F1DEC9",
        text: "#4D4D4D",
        input: "#FBFBFB",
        main: "#F4D878",
        kakao: "#F7D900",
        naver: "#00C300",
        overtime: "#212121",
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
        ibm_kr: ["var(--font-ibm_kr)"],
      },
    },
  },
  variants: {},
  plugins: [],
};
export default config;
