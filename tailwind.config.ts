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
        colors: {
          teal: {
            50: '#E0FFFC',
            500: '#2ff3e0',
            600: '#27dbc4',
          },
          gold: {
            100: '#fdf4db',
            500: '#f8d210',
            600: '#e6c00c',
          },
          pink: {
            50: '#ffeaf5',
            500: '#fa26a0',
            600: '#e0218b',
          },
          chili: {
            600: '#C21807',  // Chili Pepper red
          },
        },
      },
    },
    keyframes: {
      gradient: {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
      },
    },
    // Define the animation using the keyframes
    animation: {
      'gradient-bg': 'gradient 6s ease infinite',
    },
  },
  plugins: [],
};
export default config;
