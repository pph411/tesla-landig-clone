/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Gotham SSm A, sand-serif']
		},
		screens: {
			'mobile': { 'min': '320px', 'max': '1200px' },
			// => @media (min-width: 1024px) { ... }

			'desktop': { 'min': '1200px' },
			// => @media (min-width: 1280px) { ... }
		},
		extend: {},
	},
	plugins: [],
}
