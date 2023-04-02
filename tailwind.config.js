/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '500px',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
