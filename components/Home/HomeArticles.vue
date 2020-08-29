<template>
	<div>
		<div class="box">
			<posts class="clear-left" :posts="postsIndex" />
		</div>
	</div>
</template>

<script>
import PictureArticles from '~/components/Home/PictureArticles.vue';

export default {
	components: {
		posts: PictureArticles
	},

	computed: {
		postsIndex() {
			return this.$store.state.postsIndex;
		}
	}
};
</script>
