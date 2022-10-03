/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				fontGrey: '#969696',
				linkGrey: '#808080',
				bgGrey: '#0e0e0e',
				siteRed: '#a52a25;'
			}
		}
	},
	plugins: []
};
