/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': { maxWidth: '600px' },
          '@screen md': { maxWidth: '728px' },
          '@screen lg': { maxWidth: '960px' },
          '@screen xl': { maxWidth: '1120px' },
        },
      });
    },
  ],
};