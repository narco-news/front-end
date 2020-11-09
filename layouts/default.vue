<template>
	<div>
		<StickyHeader />
		<div class="nav">
			<LogoBanner />
			<Navbar />
		</div>
		<!-- <div class="bb"></div> -->
		<div id="page-wrap">
			<nuxt class="mt-6" />
		</div>
		<Footer />
	</div>
</template>

<script>
import StickyHeader from '~/components/Navigation/StickyHeader';
import LogoBanner from '~/components/Navigation/LogoBanner';
import Navbar from '~/components/Navigation/Navbar';
import Footer from '~/components/Footer';

export default {
	components: {
		StickyHeader,
		LogoBanner,
		Footer,
		Navbar
	},
	computed: {
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
	// background-color: #dadada;
	background-color: #f2f2f2;
}
.bb {
	height: 1px;
	background-color: #262626;
}
</style>
