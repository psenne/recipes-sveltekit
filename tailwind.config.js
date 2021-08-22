module.exports = {
	dark: 'class',
	theme: {
		textColor: (theme) => ({
			...theme('colors'),
			primary: '#3490dc',
			secondary: '#ffed4a',
			danger: '#e3342f'
		})
	},
	plugins: [
		require('windicss/plugin/forms'),
		require('windicss/plugin/aspect-ratio'),
		require('windicss/plugin/line-clamp'),
		require('windicss/plugin/filters'),
		require('windicss/plugin/scroll-snap')
		// add more as you like
	]
};
