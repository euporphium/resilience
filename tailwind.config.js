const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Tailwind does not automatically escape font names with spaces
        sans: ['"Patrick Hand"', ...defaultTheme.fontFamily.sans],
        serif: ['"Josefin Slab"', ...defaultTheme.fontFamily.serif],
      },
    },
    plugins: [],
  },
};
