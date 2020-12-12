<template>
	<div class="large-barrier m-4">
		<h1
			class="border-b-2 border-green-300 text-3xl lg:text-4xl font-semibold m-6"
		>
			{{ currentTag.name }}
		</h1>
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
	layout: 'article',
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
					filter: 'tags:' + params.slug + '+tags:-hash-es',
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
