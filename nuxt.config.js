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

		modules: ['@nuxtjs/pwa', 'nuxt-webfontloader'],

		buildModules: ['@nuxtjs/feed'],

		dev: ['@nuxtjs/eslint-module'],

		env: {
			ghostUri: process.env.GHOST_URI,
			ghostKey: process.env.GHOST_KEY,
			blogUrl: process.env.BLOG_URL,
			accessToken: process.env.accessToken
		},

		webfontloader: {
			custom: {
				families: [
					'IBM Plex Sans:n3,n4,n5,n7',
					'Patua One:n4',
					'Montserrat:n5,n6,n7,n8',
					'Baloo Thambi 2',
					'Sura',
					'Open Sans:n3,n4,n5'
				],
				urls: [
					'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;500;700&display=swap',
					'https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400;500;700;800&family=Montserrat&family=Patua+One&display=swap',
					'https://fonts.googleapis.com/css2?family=Sura:wght@400;700&display=swap',
					'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'
				]
			}
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
					component: resolve(__dirname, 'pages/index.vue')
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
			//
			{src: '~/plugins/postcss.js'},
			{src: '~/plugins/animate.js', ssr: false},
			{src: '~/plugins/navbar.js', ssr: false},
			{src: '~/plugins/timeline.js', ssr: false},
			{src: '~/plugins/notifications.js', ssr: false},
			{src: '~/plugins/scrollbar.js', ssr: false},
			{src: '~/plugins/vshowslide.js', ssr: false},
			{src: '~/plugins/odometer.js', ssr: false},
			{src: '~/plugins/marquee.js', ssr: false},
			{src: '~/plugins/modals.js', ssr: false},
			{src: '~/plugins/mapbox.js', ssr: false}
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
