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
			transitionProperty: {
				// defaults to these values
				none: 'none',
				all: 'all',
				color: 'color',
				bg: 'background-color',
				border: 'border-color',
				colors: ['color', 'background-color', 'border-color'],
				opacity: 'opacity',
				transform: 'transform',
			},
			transitionDuration: {
				// defaults to these values
				default: '250ms',
				'0': '0ms',
				'100': '100ms',
				'250': '250ms',
				'500': '500ms',
				'750': '750ms',
				'1000': '1000ms',
			},
			transitionTimingFunction: {
				// defaults to these values
				default: 'ease',
				linear: 'linear',
				ease: 'ease',
				'ease-in': 'ease-in',
				'ease-out': 'ease-out',
				'ease-in-out': 'ease-in-out',
			},
			transitionDelay: {
				// defaults to these values
				default: '0ms',
				'0': '0ms',
				'100': '100ms',
				'250': '250ms',
				'500': '500ms',
				'750': '750ms',
				'1000': '1000ms',
			},
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
					600: '#333E66',
					700: '#05242D',
				},
			},
		},
	},
	variants: {
		// all the following default to ['responsive']
		transitionProperty: ['responsive'],
		transitionDuration: ['responsive'],
		transitionTimingFunction: ['responsive'],
		transitionDelay: ['responsive'],
		willChange: ['responsive'],
	},
	plugins: [
		require('tailwindcss-transitions')(),
		require('@digitaliseringsbyran/tailwindcss-screens-in-dom')(),
	],
}
