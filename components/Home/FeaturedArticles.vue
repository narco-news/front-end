<template>
	<div>
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

	computed: {
		postsIndex() {
			return this.$store.state.postsIndex;
		}
	}
};
</script>
