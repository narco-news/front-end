<template>
	<div>
		<div class="box">
			<posts class="clear-left" :posts="postsIndex" />
		</div>
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
