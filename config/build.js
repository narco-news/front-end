// Extending `build`

export default {
	extend(config, {isDev, isClient}) {
		if (isDev && isClient) {
			config.module.rules.push({
				enforce: 'pre',
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				exclude: /(node_modules)/
			});
		}
	},

	babel: {
		plugins: [['@babel/plugin-proposal-export-namespace-from']]
	},
	postcss: {
		plugins: {
			// Disable a plugin by passing false as value
			tailwindcss: true,
			autoprefixer: true
		},
		preset: {
			autoprefixer: {
				grid: true
			}
		}
	}
};
