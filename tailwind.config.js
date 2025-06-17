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
        'gray-dark': '#606060',     
      },
    },
  },
  plugins: [],
};
