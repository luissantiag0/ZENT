/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},

			colors: {
				customDark: 'rgb(15 23 42 / var(--tw-bg-opacity, 1))',
				customLine: 'rgb(79, 70, 229)',

			},
		},
	},
	plugins: [],
}
