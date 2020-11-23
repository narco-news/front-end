<template>
	<div class="m-2">
		<div class="text-2xl flex justify-center font-bold mb-4">Featured</div>
		<div class="box">
			<posts class="clear-left" :posts="postsIndex" />
		</div>
	</div>
</template>

<script>
import FeaturedArticlesList from '~/components/Home/FeaturedArticlesList';

export default {
	components: {
		posts: FeaturedArticlesList
	},

	async fetch({error, params, payload, store}) {
		if (payload) {
			store.commit('setPostsIndex', payload);
		} else {
			let pageNumber = 1;
			if (params.pageNumber) {
				pageNumber = params.pageNumber;
			}

			try {
				await store.dispatch('getPostsIndex', {
					filter: '',
					pageNumber
				});
			} catch (err) {
				error({
					statusCode: 404,
					message: err.message
				});
			}
		}
	},
	computed: {
		postsIndex() {
			return this.$store.state.postsIndex;
		}
	}
};
</script>

<style lang="scss" scoped></style>
