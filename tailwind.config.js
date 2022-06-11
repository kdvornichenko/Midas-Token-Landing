/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		backgroundColor: {
			main: '#1D2022',
			mobMenu: '#323639',
			white: '#ffffff',
		},
		colors: {
			white: '#fff',
			whiteHeader: 'rgba(255, 255, 255, 0.56);',
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
			animation: {
				gradient: 'gradient 5s ease infinite',
			},
			keyframes: {
				gradient: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '50% 100%' },
					'100%': { backgroundPosition: '100% 0%' },
				},
			},
		},
	},
	plugins: [],
}
