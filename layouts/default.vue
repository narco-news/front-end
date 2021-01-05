<template>
	<div>
		<LogoBanner />
		<div class="p-1 md:py-2 md:px-6">
			<div class="flex items-center justify-around">
				<div>
					<Navbar />
				</div>
				<div>
					<nuxt-link
						v-for="locale in availableLocales"
						:key="locale.code"
						:to="switchLocalePath(locale.code)"
						class="text-xs md:text-sm bg-blue-100 hover:bg-blue-200 text-blue-500 hover:text-blue-600 py-1 px-2 rounded-md"
						@click.prevent.stop="setLocale(locale.code)"
					>
						{{ locale.name }}
					</nuxt-link>
				</div>
				<div
					class="bg-gray-300 text-shamrock-500 rounded-md p-1 menu"
					@click="clicked"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						height="14"
						width="14"
					>
						<path
							fill-rule="evenodd"
							d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						/>
					</svg>
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
</style>
