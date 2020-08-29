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
import HeadlineList from '~/components/Home/HeadlineList';

export default {
	components: {
		posts: HeadlineList
	},

	computed: {
		postsIndex() {
			return this.$store.state.postsIndex;
		}
	}
};
</script>
