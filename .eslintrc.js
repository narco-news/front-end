module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint',
		ecmaFeatures: {
			legacyDecorators: true
		}
	},
	extends: [
		'@nuxtjs',
		'prettier',
		'prettier/vue',
		'plugin:nuxt/recommended',
		'plugin:vue/essential'
	],
	plugins: ['vue'],
	rules: {
		'vue/attribute-hyphenation': 'off'
	}
};
