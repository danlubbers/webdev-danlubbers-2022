/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				fontGrey: '#969696',
				linkGrey: '#808080',
				bgGrey: '#0e0e0e',
				siteRed: '#fb3831;'
			}
		}
	},
	plugins: []
};
