/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.{html,js}'],
	theme: {
		backgroundColor: {
			main: '#161616',
			mainSecondary: '#1D2022',
			mobMenu: '#323639',
			cards: '#262626',
			white: '#ffffff',
			accordionBtn: '#181B20',
			accordionBtnAfter: '#22252A',
			accordionBtnAfterHover: '#408ED6',
			socialBlue: '#43A1F7',
			sidemenuBg: '#2CC4CB',
		},
		colors: {
			white: '#fff',
			black: '#000',
			transparent: 'transparent',
			lightBlue: '#577CFF',
			blue: '#4CBFFF',
			socialBlue: '#43A1F7',
		},
		extend: {
			boxShadow: {
				cards: '0px 24px 48px -24px rgba(10, 12, 15, 0.16)',
				text: '0px 32px 64px rgba(255, 255, 255, 0.08)',
				textSpan: '0px 16px 64px rgba(78, 185, 255, 0.16)',
				metricsCard: '0px 40px 64px -30px rgba(0, 0, 0, 0.4)',
			},
			backgroundImage: {
				arrow: 'url("../src/img/accordion-arrow.svg")',
			},
			transitionTimingFunction: {
				sideMenu: 'cubic-bezier(0.04,0.79,0.34,1.3)',
			},
		},
	},
	plugins: [],
}
