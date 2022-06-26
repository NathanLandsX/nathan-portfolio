module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        '"Inter", -apple-system,BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
      ],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
