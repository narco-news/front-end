<template>
	<div>
		<div class="box">
			<posts class="clear-left" :posts="postsIndex" />
		</div>
		<!-- <n-link to="/wire">
			<h1 class="text-xs md:text-sm p-2 mx-2 uppercase hvr-sink">View More</h1>
		</n-link> -->
	</div>
</template>

<script>
import FeaturedArticlesBox from '~/components/FeaturedArticlesBox.vue';

export default {
	components: {
		posts: FeaturedArticlesBox
	},

	computed: {
		postsIndex() {
			return this.$store.state.postsIndex;
		}
	}
};
</script>

<style lang="scss" scoped>
.box {
	// background-color: #d8eee1;
}
h1 {
	color: #595fd9;
	font-family: 'Courier Prime', monospace;
	font-weight: 600;
}
</style>
