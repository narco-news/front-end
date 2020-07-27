<template>
	<div>
		<div>
			<posts
				class="clear-left"
				:posts="postsIndex"
				:pagination="paginationIndex"
			/>
		</div>
		<n-link to="/wire">
			<h1 class="text-xs md:text-sm p-2 mx-2 uppercase hvr-sink">View More</h1>
		</n-link>
	</div>
</template>

<script>
import CompactPostList from '~/components/CompactPostList.vue';

export default {
	components: {
		posts: CompactPostList
	},

	computed: {
		postsIndex() {
			return this.$store.state.postsIndex;
		},

		paginationIndex() {
			return this.$store.state.paginationIndex;
		},

		pageSettings() {
			return this.$store.state.pageSettings;
		},

		pageUrl() {
			return this.pageSettings.url
				.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '')
				.split('/')[0];
		}
	}
};
</script>

<style lang="scss" scoped>
h1 {
	color: #f28177;
	font-family: 'Courier Prime', monospace;
	font-weight: 600;
}
</style>
