<template>
	<div class="progress-bar">
		<div class="percent" :style="{width: `${width}%`}" />
	</div>
</template>

<script>
// Inspired by vue-scroll-progressbar, just less reusable and more opinionated
// Credit: Guillaume Briday
// https://github.com/guillaumebriday/vue-scroll-progressbar
export default {
	data() {
		return {
			width: 0
		};
	},

	mounted() {
		window.addEventListener('scroll', this.scrollHandler);
		window.dispatchEvent(new Event('scroll'));
	},

	destroyed() {
		window.removeEventListener('scroll', this.scrollHandler);
	},

	methods: {
		scrollHandler() {
			const height =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			this.width = (window.scrollY / height) * 100;
			const scrollEvent = Math.ceil(this.width);
			if (scrollEvent === 0) {
				this.$emit('start');
			}
			if (scrollEvent === 100) {
				this.$emit('stop');
			}
		}
	}
};
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';

.progress-bar {
	position: fixed;
	top: 3rem;
	left: 0;
	width: 100%;
	background-color: transparent;
	z-index: 10;

	.percent {
		height: 0.5rem;
		background-color: #ff5e70;
	}
}
</style>
