// Default config:
// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

module.exports = {
	theme: {
		fontFamily: {
			sans: [
				'Axiforma',
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
					700: '#1F2744',
				},
			},
		},
	},
	variants: {},
	plugins: [],
}
