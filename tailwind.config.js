module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					cyan: 'hsl(180, 66%, 49%)',
					darkViolet: 'hsl(257, 27%, 26%)',
				},
				neutral: {
					gray: ' hsl(0, 0%, 75%)',
					grayishViolet: 'hsl(257, 7%, 63%)',
					veryDarkBlue: ' hsl(255, 11%, 22%)',
					veryDarkViolet: 'hsl(260, 8%, 14%)',
				},
				red: 'hsl(0, 87%, 67%)',
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '2rem',
					xl: '4rem',
					'2xl': '6rem',
				},
			},
		},
	},
	plugins: [],
};
