/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		backgroundColor: {
			main: '#161616',
			mainSecondary: '#1D2022',
			mobMenu: '#323639',
			cards: '#262626',
			white: '#ffffff',
		},
		colors: {
			white: '#fff',
			transparent: 'transparent',
			lightBlue: '#577CFF',
			blue: '#4CBFFF',
		},
		width: {
			4: '1rem',
			6: '1.5rem',
			1180: '73.75rem',
			1440: '90rem',
			full: '100%',
			unset: 'unset',
		},
		extend: {
			boxShadow: {
				cards: '0px 24px 48px -24px rgba(10, 12, 15, 0.16)',
				text: '0px 32px 64px rgba(255, 255, 255, 0.08)',
				textSpan: '0px 16px 64px rgba(78, 185, 255, 0.16)',
			},
		},
	},
	plugins: [],
}
