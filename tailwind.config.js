module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        '"Inter", -apple-system,BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
      ],
      mono: ['"Fira Code", monospace'],
      cursive: ['"Press Start 2P", cursive'],
    },
    extend: {
      colors: {
        'punk-pink': '#CD0BC1',
        'punk-blue': '#0EEBE2',
        'punk-red': '#F24568',
        'punk-yellow': '#F2D750',
        'atari-blue': '#ADCCE3',
        'atari-black': '#0C0F1E',
        'atari-cream': '#F3F0E1',
        'atari-red': '#e41b23',
        'atari-dark-red': '#AC3049',
      },
    },
  },
};


