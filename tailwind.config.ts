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
				cgray: 'D5D8DE',
			},
			dropShadow: {
				card: '2.303666830062866px 4.607333660125732px 13.822000503540039px rgba(17, 79, 169, 0.50)',
			},
			boxShadow: {
				card: '5px 10px 30px 0px rgba(188, 215, 255, 0.50)',
			},
			backgroundImage: {
				'hero-mobile': "url('/bg/hero/heroMobile.png')",
				'hero-desktop': "url('/bg/hero/heroBg2xl.png')",
				'hero-laptop': "url('/bg/hero/heroBgxl.png')",
				'hero-tablet': "url('/bg/hero/heroBackground.png')",
				'services-bg': "url('/bg/bgServices.png')",
				'about-us-xs': "url('/bg/aboutUs/aboutUsXs.png')",
			},
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
