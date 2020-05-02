<template>
	<div class="grey-body">
		<Header />
		<client-only>
			<Navigation />
		</client-only>
		<main>
			<div class="container mx-auto p-2 m-2">
				<!-- ... -->
				<nuxt />
			</div>
		</main>
	</div>
</template>

<script>
import Header from '~/components/Header.vue';
import Navigation from '~/components/Navigation.vue';

export default {
	components: {
		Header,
		Navigation
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
	}
};
</script>

<style lang="scss">
body {
	margin: 0px;
}
.grey-body {
	background-color: #f2f2f2;
	height: 100vh;
}
</style>
