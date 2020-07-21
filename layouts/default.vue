<template>
	<div class="grey-body">
		<Header />
		<client-only>
			<Navigation />
		</client-only>
		<main>
			<div>
				<!-- ... -->
				<nuxt />
			</div>
		</main>
		<!-- Footer -->
		<Footer />
	</div>
</template>

<script>
import Header from '~/components/Header.vue';
import Navigation from '~/components/Navigation.vue';
import Footer from '~/components/Footer.vue';

export default {
	components: {
		Header,
		Navigation,
		Footer
	},
	data() {
		return {
			title: 'narco.news'
		};
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
		return {
			title: this.title,
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: 'description',
					name: 'description',
					content: 'narco.news | information aggregation'
				}
			],
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.ico?v=2'
				}
			]
		};
	}
};
</script>

<style lang="scss">
body {
	margin: 0px;
	// background-color: #bfb8aa;
	// background-color: #d0d3c5;
	// background-color: #d9d0c7;
	// background-color: #d7ded3;
	background-color: #b0c0bb;
}
</style>
