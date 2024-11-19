import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Background color from CSS variables
        foreground: "var(--foreground)", // Foreground text color
        accent: "#1a73e8", // Optional accent color
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Tailwind's typography plugin
  ],
};

export default config;
