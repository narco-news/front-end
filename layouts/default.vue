<template>
	<div>
		<StickyHeader />
		<LogoBanner />
		<client-only>
			<SlideMenu :closeOnNavigation="true" noOverlay>
				<Burger />
			</SlideMenu>
			<div id="page-wrap">
				<div>
					<nuxt class="mt-6" />
				</div>
			</div>
		</client-only>
		<Footer />
	</div>
</template>

<script>
import StickyHeader from '~/components/Navigation/StickyHeader.vue';
import LogoBanner from '~/components/Navigation/LogoBanner.vue';
import Burger from '~/components/Navigation/Burger.vue';

import Footer from '~/components/Footer.vue';

export default {
	components: {
		StickyHeader,
		LogoBanner,
		Burger,
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
	background-color: #f2f2f2;
}
.bm-burger-bars {
	background-color: #f2f2f2 !important;
	&:nth-child(2n) {
		background-color: #03a688 !important;
	}
	&:nth-child(3n) {
		background-color: #03a688 !important;
	}
}
.bm-menu {
	background-color: #0d0d0d !important;
}
.bm-burger-button {
	left: 18px !important;
	top: 40px !important;
	height: 20px !important;
	width: 26px !important;
}
.line-style {
	height: 15% !important;
	left: 0;
	right: 0;
}
.bm-cross {
	background: #f2f2f2 !important;
}
</style>
