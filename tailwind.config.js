// Default config:
// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

module.exports = {
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1300px',
		},
		fontFamily: {
			sans: [
				'CircularStd',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			willChange: {
				// defaults to these values
				auto: 'auto',
				scroll: 'scroll-position',
				contents: 'contents',
				opacity: 'opacity',
				transform: 'transform',
			},
		},

		extend: {
			colors: {
				black: '#1B1B1B',
				gray: {
					200: '#F5F5F9',
					300: '#E1E1EB',
					400: '#CDCDD4',
					500: '#9C9CA5',
					600: '#5C666D',
					700: '#33343A',
				},
				blue: {
					200: '#EEF4F8',
					600: '#11313A',
					700: '#05242D',
				},
				coral: {
					300: '#FF9B8F',
					400: '#EA786B',
					500: '#DC6557',
					600: '#D24635',
					700: '#B53E30',
				},
				sand: {
					300: '#F8F5EE',
				},
			},
			height: {
				'10vh': '10vh',
				'20vh': '20vh',
				'30vh': '30vh',
				'40vh': '40vh',
				'50vh': '50vh',
				'60vh': '60vh',
				'70vh': '70vh',
				'80vh': '80vh',
				'90vh': '90vh',
				'100vh': '100vh',
			},
			width: {
				'10vw': '10vw',
				'20vw': '20vw',
				'30vw': '30vw',
				'40vw': '40vw',
				'50vw': '50vw',
				'60vw': '60vw',
				'70vw': '70vw',
				'80vw': '80vw',
				'90vw': '90vw',
				'100vw': '100vw',
			},
		},
	},
	variants: {
		// all the following default to ['responsive']
	},
	plugins: [
		require('tailwindcss-transitions')(),
		require('@digitaliseringsbyran/tailwindcss-screens-in-dom')(),
	],
}
