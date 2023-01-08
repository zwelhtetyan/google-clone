/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },

      gridTemplateColumns: {
        'auto-fill-150': 'repeat(auto-fill, minmax(150px, 1fr))',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
