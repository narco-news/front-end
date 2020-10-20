<template>
	<div>
		<StickyHeader />
		<LogoBanner />
		<client-only>
			<SlideMenu :closeOnNavigation="true" noOverlay>
				<Burger />
			</SlideMenu>
		</client-only>
		<div id="page-wrap">
			<nuxt class="mt-6" />
		</div>
		<Footer />
	</div>
</template>

<script>
import StickyHeader from '~/components/Navigation/StickyHeader';
import LogoBanner from '~/components/Navigation/LogoBanner';
import Burger from '~/components/Navigation/Burger';
import Footer from '~/components/Footer';

export default {
	components: {
		StickyHeader,
		LogoBanner,
		Burger,
		Footer
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
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1'
				}
			]
		};
	}
};
</script>

<style lang="scss">
body {
	background-color: #f9f9f9;
}
.bm-burger-bars {
	background-color: #262626 !important;
	&:nth-child(2n) {
		background-color: #262626 !important;
	}
	&:nth-child(3n) {
		background-color: #262626 !important;
	}
}
.bm-menu {
	background-color: #0d0d0d !important;
}
.bm-burger-button {
	left: 20px !important;
	top: 45px !important;
	height: 15px !important;
	width: 20px !important;
}
.line-style {
	height: 2px !important;
	left: 0;
	right: 0;
}
.bm-cross {
	background: #f2f2f2 !important;
}
</style>
