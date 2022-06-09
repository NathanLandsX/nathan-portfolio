module.exports = {
	content: ['./src/**/*.{astro, html, js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: [
				'"Inter", -apple-system,BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
			],
			serif: ['freight-text-pro, serif'],
			heading: [
				'"Montserrat", -apple-system,BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
			],
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
