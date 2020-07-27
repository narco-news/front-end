import axios from 'axios';
import {generateRoutes} from './config/ghost';
import {build, feed, meta} from './config';
import {isDev} from './config/dev';

require('dotenv').config();

export default async () => {
	const {
		data: {settings}
	} = await axios.get(
		process.env.GHOST_URI +
			'/ghost/api/v3/content/settings/?key=' +
			process.env.GHOST_KEY +
			'&v=3'
	);
	return {
		mode: 'universal',
		modern: !isDev && 'client',

		watch: ['~/config/*'],

		meta,

		css: [
			// '~/node_modules/flexgrid.io/dist/flexgrid-utils.min.css',
			'~/assets/scss/main.scss',
			'~/assets/css/tailwind.css'
		],

		loading: {color: '#171717'},

		modules: [
			'@nuxtjs/pwa',
			'nuxt-webfontloader',
			'@nuxtjs/axios',
			[
				'nuxt-i18n',
				{
					locales: ['en', 'es'],
					defaultLocale: 'en',
					vueI18n: {
						fallbackLocale: 'en'
					}
				}
			]
		],

		buildModules: ['@nuxtjs/feed'],

		dev: ['@nuxtjs/eslint-module'],

		env: {
			ghostUri: process.env.GHOST_URI,
			ghostKey: process.env.GHOST_KEY,
			blogUrl: process.env.BLOG_URL,
			accessToken: process.env.accessToken,
			userID: process.env.USER_ID,
			listID: process.env.LIST_ID
		},

		webfontloader: {
			custom: {
				families: [
					'IBM Plex Sans:n3,n4,n5,n7',
					'Lora:n4,n5,n6,n7',
					'Courier Prime:n4,n7',
					'EB Garamond:n4,n5,n6'
				],
				urls: [
					'https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap',
					'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&display=swap',
					'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap" rel="stylesheet'
				]
			}
		},

		axios: {
			baseURL: process.env.API_URL
		},

		feed,

		generate: {
			subFolders: false,
			routes: generateRoutes
		},

		router: {
			extendRoutes(routes, resolve) {
				routes.push({
					name: 'PostIndex',
					path: '/page/:pageNumber',
					component: resolve(__dirname, 'pages/wire.vue')
				});

				routes.push({
					name: 'TagIndex',
					path: '/tag/:slug/page/:pageNumber',
					component: resolve(__dirname, 'pages/tag/_slug.vue')
				});

				routes.push({
					name: 'AuthorIndex',
					path: '/author/:slug/page/:pageNumber',
					component: resolve(__dirname, 'pages/author/_slug.vue')
				});
			}
		},

		plugins: [
			// Crucial
			{src: '~/plugins/i18n.js', ssr: false},
			{src: '~/plugins/burger-menu.js', ssr: false},
			{src: '~/plugins/postcss.js'},
			{src: '~/plugins/animate.js', ssr: false},
			{src: '~/plugins/hover.js', ssr: false},
			{src: '~/plugins/navbar.js', ssr: false},
			{src: '~/plugins/timeline.js', ssr: false},
			{src: '~/plugins/notifications.js', ssr: false},
			{src: '~/plugins/scrollbar.js', ssr: false},
			{src: '~/plugins/vshowslide.js', ssr: false},
			{src: '~/plugins/odometer.js', ssr: false},
			{src: '~/plugins/modals.js', ssr: false},
			{src: '~/plugins/mapbox.js', ssr: false},
			{src: '~/plugins/patterncss.js', ssr: false},
			{src: '~/plugins/vue-slim-tabs.js', ssr: false},
			{src: '~/plugins/vue-mailchimp-subscribe.js', ssr: false},
			{src: '~/plugins/rough-notation.js', ssr: false}
		],

		pwa: {
			manifest: {
				name: settings.title + ' - ' + settings.description,
				shortName: settings.title,
				description: settings.description,
				lang: settings.lang,
				startUrl: '/',
				display: 'standalone'
			}
		},

		build
	};
};
