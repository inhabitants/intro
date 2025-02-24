/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B4A7D6',    // Purple
        secondary: '#F9B256',  // Orange
        accent: '#C9DBC5',     // Mint
        sage: '#9DB4A1'        // Sage
      },
    },
  },
  plugins: [],
};