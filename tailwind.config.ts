import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forescribePurple: "#8B3DFF",
        overlay: "rgba(0,0,0,0.2)",
      },
      fontFamily: {
        plusjakarta: ["Plus Jakarta Sans", "Inter", "system-ui"],
        poppins: ["Poppins", "Inter", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;
