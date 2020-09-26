module.exports = {
	purge: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js'
	],
	styleExtensions: ['.css', '.scss'],
  whitelist: ['body', 'html', 'nuxt-progress'],
	theme: {
		container: {
			center: true
		},
		extend: {
			colors: {
				red: '#F26457',
				blue: {
					300: '#7a7fe1',
					400: '#6a6fdd',
					500: '#595fd9',
					600: '#5056c3',
					700: '#474cae'
				},
				green: {
					300: '#35b8a0',
					400: '#1caf94',
					500: '#03a688',
					600: '#03957a',
					700: '#02856d'
				}
			}
		}
	},
	variants: {},
	plugins: []
};
