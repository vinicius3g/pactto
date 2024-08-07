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
        700: '#232225',
        800: '#212121'
      },
      gray : {
        300: '#cbcbcb',
        400: '#B8B8B8',
        500:'#626262',
        700: '#545454',
        600: '#2f2f2f',
        800: '#3a363f'
      },
      teal: '#1dbba5',
      white: '#ffffff',
    }
  },
};

export default config;
