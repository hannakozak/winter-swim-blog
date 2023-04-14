/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '500px',
      },
      fontFamily: {
        body: ['Inconsolata, monospace'],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
