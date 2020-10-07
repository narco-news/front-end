<template>
	<div
		class="large-barrier bg-white md:mx-12 lg:rounded-tl-md lg:rounded-tr-md shadow-inner m-4 p-4"
	>
		<h1 class="my-4 text-3xl text-center">{{ currentTag.name }}</h1>
		<div class="row">
			<div class="xs-12 lg-9 mx-auto">
				<posts
					:posts="postsIndex"
					:pagination="paginationIndex"
					:base-url="'/tag/' + currentTag.slug + '/'"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import Posts from '~/components/Posts.vue';

export default {
	name: 'Tag',

	components: {
		posts: Posts
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
					filter: 'tag:' + params.slug,
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
		},

		paginationIndex() {
			return this.$store.state.paginationIndex;
		},

		currentTag() {
			return this.$store.state.pageTags.find(
				tag => tag.slug === this.$route.params.slug
			);
		},

		pageSettings() {
			return this.$store.state.pageSettings;
		},

		pageUrl() {
			return this.pageSettings.url
				.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '')
				.split('/')[0];
		}
	},

	head() {
		return {
			title: this.currentTag.name
		};
	}
};
</script>
