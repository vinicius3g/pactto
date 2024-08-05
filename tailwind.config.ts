import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    colors: {
      black: {
        800: '#2f2f2f'
      },
      gray : {
        400: '#B8B8B8',
        500:'#626262',
      },
      teal: '#1dbba5',
      white: '#ffffff',
    }
  },
};

export default config;
