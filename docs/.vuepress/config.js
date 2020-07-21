module.exports = {
	base: '/wiki/',
	dest: 'static/wiki',
	themeConfig: {
		logo: '/bw-nn-logo.png',
		title: 'Hello world',
		lastUpdated: 'Last Updated', // string | boolean
		smoothScroll: true,
		nav: [{text: 'narco.news', link: 'https://narco.news', target: '_self'}],
		displayAllHeaders: true, // Default: false
		sidebarDepth: 2,
		sidebar: ['/', '/updates', ['/faq/', 'Frequently Asked Questions']]
	}
};
