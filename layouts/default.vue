<template>
	<div>
		<LogoBanner />
		<div class="p-2 md:py-2 md:px-6">
			<div class="flex items-center justify-around">
				<div>
					<Navbar />
				</div>
				<div class="lang-button">
					<nuxt-link
						v-for="locale in availableLocales"
						:key="locale.code"
						:to="switchLocalePath(locale.code)"
						class="text-xs md:text-sm py-2 px-3 rounded-full"
						@click.prevent.stop="setLocale(locale.code)"
					>
						{{ locale.name }}
					</nuxt-link>
				</div>
			</div>
		</div>
		<div id="page-wrap">
			<nuxt />
		</div>
		<Footer />
	</div>
</template>

<script>
import LogoBanner from '~/components/Navigation/LogoBanner';
import Navbar from '~/components/Navigation/Navbar';
import Footer from '~/components/Footer';

export default {
	components: {
		LogoBanner,
		Footer,
		Navbar
	},
	computed: {
		availableLocales() {
			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
		},
		pageSettings() {
			return this.$store.state.pageSettings;
		},

		codeHead() {
			return this.pageSettings.codeinjection_head
				? this.pageSettings.codeinjection_head
				: '';
		},

		codeFoot() {
			return this.pageSettings.codeinjection_foot
				? this.pageSettings.codeinjection_foot
				: '';
		}
	},

	beforeMount() {
		if (this.codeHead.length !== '') {
			const headInject = document
				.createRange()
				.createContextualFragment(this.codeHead);
			document.getElementsByTagName('head')[0].appendChild(headInject);
		}

		if (this.codeFoot.length !== '') {
			const footInject = document
				.createRange()
				.createContextualFragment(this.codeFoot);
			document.getElementsByTagName('body')[0].appendChild(footInject);
		}
	},
	methods: {
		clicked() {
			const element = document.getElementById('nav');
			element.classList.add('reveal');
		}
	},

	head() {
		const i18nSeo = this.$nuxtI18nSeo();
		return {
			htmlAttrs: {
				...i18nSeo.htmlAttrs
			},
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1'
				},
				...i18nSeo.meta
			],
			link: [...i18nSeo.link]
		};
	}
};
</script>

<style lang="scss">
.navb {
	background-color: white;
	margin: 0 auto;
}
.reveal {
	svg {
		display: none;
	}
}
.lang-button {
	a {
		-webkit-tap-highlight-color: transparent;
		@apply text-blue-500;
		@apply bg-blue-100;
		&:active {
			@apply bg-blue-400;
			@apply text-white;
			text-decoration: none;
		}
	}
	@media (hover: hover) and (pointer: fine) {
		a:hover {
			@apply bg-blue-400;
			@apply text-white;
			text-decoration: none;
		}
	}
}
</style>
