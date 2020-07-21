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
						fallbackLocale: 'en',
						messages: {
							en: {
								greeting: 'Hello world!'
							},
							es: {
								greeting: '¡Hola mundo!'
							}
						}
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
					'IBM Plex Sans:n4,n5,n6,n7',
					'Abril Fatface:n4',
					'Martel:n4,n6,n7',
					'Raleway:n4,n5,n6',
					'Roboto Mono,n4'
				],
				urls: [
					'https://fonts.googleapis.com/css?family=Roboto+Mono:400&display=swap',
					'https://fonts.googleapis.com/css2?family=Abril+Fatface&family=IBM+Plex+Sans:wght@400;500;600;700&family=Martel:wght@400;600;700&family=Raleway:ital,wght@0,400;0,500;0,600;1,500;1,600&display=swap'
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
			// Critical
			{src: '~/plugins/vue-slim-tabs.js', ssr: false},
			{src: '~/plugins/vue-mailchimp-subscribe.js', ssr: false},
			{src: '~/plugins/vue-burger-menu.js', ssr: false},
			{src: '~/plugins/marquee.js', ssr: false},
			{src: '~/plugins/tippy.js', ssr: false},
			{src: '~/plugins/lottie.js', ssr: false},

			// CSS
			{src: '~/plugins/postcss.js'},
			{src: '~/plugins/animate.js', ssr: false},
			{src: '~/plugins/hover.js', ssr: false},
			{src: '~/plugins/patterncss.js', ssr: false},
			// UI Elements
			{src: '~/plugins/modals.js', ssr: false},
			{src: '~/plugins/odometer.js', ssr: false},
			{src: '~/plugins/notifications.js', ssr: false},
			{src: '~/plugins/scrollbar.js', ssr: false},
			{src: '~/plugins/vshowslide.js', ssr: false},
			{src: '~/plugins/timeline.js', ssr: false},

			// Maps
			{src: '~/plugins/mapbox.js', ssr: false}

			// Disabled
			// {src: '~/plugins/navbar.js', ssr: false},
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
