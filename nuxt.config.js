import axios from 'axios';
import {generateRoutes} from './config/ghost';
import {build, feed, meta} from './config';
import {isDev} from './config/dev';
import en from './locales/en.json';
import es from './locales/es.json';

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

		css: ['~/assets/scss/main.scss', '~/assets/css/tailwind.css'],

		loading: {color: '#171717'},

		modules: [
			'@nuxtjs/pwa',
			'nuxt-webfontloader',
			'@nuxtjs/axios',
			'nuxt-i18n',
			'nuxt-compress'
		],

		'nuxt-compress': {
			gzip: {
				cache: true
			},
			brotli: {
				threshold: 10240
			}
		},
		i18n: {
			locales: [
				{code: 'en', iso: 'en', name: 'English'},
				{code: 'es', iso: 'es', name: 'Español'}
			],
			messages: {en, es},
			defaultLocale: 'en',
			seo: true,
			vueI18n: {
				fallbackLocale: 'en'
			}
		},
		buildModules: ['@nuxtjs/feed'],

		dev: ['@nuxtjs/eslint-module'],

		env: {
			ghostUri: process.env.GHOST_URI,
			ghostKey: process.env.GHOST_KEY,
			blogUrl: process.env.BLOG_URL,
			userID: process.env.USER_ID,
			listID: process.env.LIST_ID,
			accessToken: process.env.accessToken,
			proxy: process.env.RSS_PROXY,
			ebdn: process.env.EBDN,
			ebdn2: process.env.EBDN2,
			vpt: process.env.VPT,
			hdn: process.env.HDN,
			nem: process.env.NEM,
			ib: process.env.IB,
			bb: process.env.BB,
			bbtx: process.env.BBTX,
			br: process.env.BR,
			ic: process.env.IC,
			apmx: process.env.APMX,
			nyta: process.env.NYTA,
			vpto: process.env.VPTO,
			em: process.env.EM,
			emnl: process.env.EMNL,
			eddv: process.env.EDDV,
			esdt: process.env.ESDT,
			mnd: process.env.MND,
			swec: process.env.SWEC,
			mt: process.env.MT,
			esdb: process.env.ESDB,
			nel: process.env.NEL,
			ehdl: process.env.EHDL,
			gi: process.env.GI,
			pc: process.env.PC,
			zf: process.env.ZF,
			mcr: process.env.MCR,
			ec: process.env.EC,
			ia: process.env.IA,
			ht: process.env.HT,
			oi: process.env.OI
		},

		webfontloader: {
			custom: {
				families: [
					'IBM Plex Sans:n3,n4,n5,n7',
					'Lora:n4,n5,n6,n7',
					'Courier Prime:n4,n7',
					'EB Garamond:n4,n5,n6',
					'Source Sans Pro:n4,n5,n6'
				],
				urls: [
					'https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap',
					'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&display=swap',
					'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap" rel="stylesheet',
					'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap'
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
			{src: '~/plugins/burger-menu.js', ssr: false},
			{src: '~/plugins/postcss.js'},
			{src: '~/plugins/animate.js', ssr: false},
			{src: '~/plugins/hover.js', ssr: false},
			{src: '~/plugins/vshowslide.js', ssr: false},
			{src: '~/plugins/odometer.js', ssr: false},
			{src: '~/plugins/modals.js', ssr: false},
			{src: '~/plugins/patterncss.js', ssr: false},
			{src: '~/plugins/vue-slim-tabs.js', ssr: false},
			{src: '~/plugins/vue-mailchimp-subscribe.js', ssr: false},
			{src: '~/plugins/rough-notation.js', ssr: false},
			{src: '~/plugins/vue-dynamic-marquee.js', ssr: false},
			{src: '~/plugins/vue-formulate.js'}
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
