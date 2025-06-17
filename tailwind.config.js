/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  important: true,
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'title': '40px',
        'title-custom-form': '26px',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        'background': '#f4f4f4',
        primary: {
          50:  '#e8eeff',
          100: '#dce5ff',
          200: '#b6c9ff', 
          400: '#1550ff',
          500: '#1348e6', 
          600: '#1140cc', 
          700: '#103cbf', 
          800: '#0d3099',
          900: '#092473',
          950: '#071c59',
        },
      },
    },
  },
  plugins: [],
};
