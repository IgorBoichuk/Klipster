import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/shared/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				cblack: '#000000',
				cwhite: '#FAFAFF',
				cdark: '#1D2020',
				cyellow: '#FFC722',
				cgray: '#D5D8DE',
				cdarkgray: '#BFBBBB',
			},
			backgroundImage: {
				'about-us': "url('/images/car.jpg')",
			},
		},
		fontFamily: {
			sans: ['Lora', 'sans-serif'],
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1366px',
			'2xl': '1920px',
		},
	},
	plugins: [],
};
export default config;
