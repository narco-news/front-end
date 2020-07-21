<template>
	<div id="app">
		<StickyHeader class="sticky top-0 w-full z-50" />
		<PushMenu :closeOnNavigation="true" noOverlay>
			<Menu />
		</PushMenu>
		<Nav />
		<client-only>
			<div id="page-wrap">
				<div>
					<nuxt class="mt-6" />
				</div>
			</div>
		</client-only>
		<Footer class="bottom-0 w-full" />
	</div>
</template>

<script>
import StickyHeader from '~/components/Navigation/StickyHeader';
import Menu from '~/components/Navigation/Menu';
import Nav from '~/components/Navigation/Nav';
import Footer from '~/components/Navigation/Footer';

export default {
	components: {
		StickyHeader,
		Nav,
		Menu,
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
					content: 'narco.news | open source drug war investigations'
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
	background-color: #f2f2f2;
}
.bm-burger-bars {
	background-color: #038c4c !important;
}
.bm-burger-button {
	left: 10px !important;
	top: 40px !important;
	height: 20px !important;
	.line-style {
		position: absolute;
		height: 10%;
		left: 0;
		right: 0;
	}
}

.bm-menu {
	background-color: #0d0d0d !important;
}
</style>
