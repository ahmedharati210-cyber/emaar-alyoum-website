import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'Inter', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: "#e6f0f5",
          100: "#b3d1e0",
          200: "#80b2cb",
          300: "#4d93b6",
          400: "#1a74a1",
          500: "#00558c", // Main dark blue from logo
          600: "#004470",
          700: "#003354",
          800: "#002238",
          900: "#00111c",
        },
        secondary: {
          50: "#f0f9f4",
          100: "#d4ede0",
          200: "#b8e1cc",
          300: "#9cd5b8",
          400: "#80c9a4",
          500: "#64bd90", // Main green from logo
          600: "#4a9d70",
          700: "#357d50",
          800: "#205d30",
          900: "#0b3d10",
        },
        accent: {
          light: "#7dd87f", // Lighter green from gradient
          DEFAULT: "#4a9d70", // Medium green
          dark: "#2d6b47", // Darker green from gradient
        },
      },
    },
  },
  plugins: [],
};
export default config;

