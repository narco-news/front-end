<template>
	<div>
		<LogoBanner />
		<div class="nav flex justify-between px-2 py-4">
			<Navbar />
			<nuxt-link
				v-for="locale in availableLocales"
				:key="locale.code"
				:to="switchLocalePath(locale.code)"
				class="float-right lang-button text-sm font-bold underline"
				@click.prevent.stop="setLocale(locale.code)"
				>{{ locale.name }}</nuxt-link
			>
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
.nav {
	background-color: white;
	max-width: 600px;
}
</style>
