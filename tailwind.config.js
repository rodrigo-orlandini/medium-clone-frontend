/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.tsx'
	],
	theme: {
		extend: {
			fontFamily: {
				'brand': ['Ibarra Real Nova', 'sans-serif'],
				'main': ['Inter', 'sans-serif']
			},

			colors: {
				yellow: {
					500: "#FFC017"
				},
				gray: {
					100: "#E6E6E6",
					200: "#D9D9D9",
					500: "#757575",
					600: "#292929",
					700: "#191919"
				}
			}
		},
	},
	plugins: [],
}
