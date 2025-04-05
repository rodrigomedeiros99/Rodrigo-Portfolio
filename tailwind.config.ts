import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00DC82",
        secondary: "#36E4DA",
        dark: {
          100: "#1a1a1a",
          200: "#0a0a0a",
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
        "scroll-reverse": "scroll-reverse 20s linear infinite",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "gradient-primary": "linear-gradient(to right, #00DC82, #36E4DA)",
      },
      backgroundSize: {
        grid: "30px 30px",
      },
    },
  },
  plugins: [],
};

export default config;
