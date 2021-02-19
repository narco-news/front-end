<template>
	<a v-show="visible" class="bottom-right" @click="scrollTop">
		<p
			class="bg-red-500 rounded-md p-1 animate__animated animate__slideInRight"
		>
			<img
				src="~/assets/icons/arrow-up.svg"
				alt="Scroll to top"
				title="Scroll to top"
			/>
		</p>
	</a>
</template>

<script>
export default {
	data() {
		return {
			visible: false
		};
	},
	mounted() {
		window.addEventListener('scroll', this.scrollListener);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.scrollListener);
	},
	methods: {
		scrollTop() {
			this.intervalId = setInterval(() => {
				if (window.pageYOffset === 0) {
					clearInterval(this.intervalId);
				}
				window.scroll(0, window.pageYOffset - 50);
			}, 20);
		},
		scrollListener(e) {
			this.visible = window.scrollY > 400;
		}
	}
};
</script>

<style scoped>
.bottom-right {
	position: fixed;
	bottom: 20px;
	right: 20px;
	cursor: pointer;
}
</style>
