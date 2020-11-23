<template>
	<div class="author mt-6">
		<header
			:style="{
				backgroundImage: `${pageAuthor.cover_image}`
			}"
		>
			<div class="mx-10 lg:mx-16">
				<div class="flex items-center">
					<img
						v-if="pageAuthor.profile_image"
						:src="pageAuthor.profile_image"
						:alt="pageAuthor.name"
						class="rounded-full w-16 h-16"
					/>
					<div class="flex flex-col mx-6">
						<div class="flex flex-row flex-wrap items-center">
							<h1 v-if="pageAuthor.name" class="text-xl font-bold mr-4">
								{{ pageAuthor.name }}
							</h1>
							<div class="text-green-500">
								{{ pageAuthor.count.posts }} posts
							</div>
						</div>
						<h2 v-if="pageAuthor.bio" class="bio text-xs md:text-sm">
							{{ pageAuthor.bio }}
						</h2>
						<div class="flex my-1">
							<a
								v-if="pageAuthor.website"
								class="social-link"
								:href="pageAuthor.website"
								title="Website"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									version="1.1"
								>
									<path
										d="M 9 2 L 9 3 L 12.292969 3 L 6.023438 9.273438 L 6.726563 9.976563 L 13 3.707031 L 13 7 L 14 7 L 14 2 Z M 4 4 C 2.894531 4 2 4.894531 2 6 L 2 12 C 2 13.105469 2.894531 14 4 14 L 10 14 C 11.105469 14 12 13.105469 12 12 L 12 7 L 11 8 L 11 12 C 11 12.550781 10.550781 13 10 13 L 4 13 C 3.449219 13 3 12.550781 3 12 L 3 6 C 3 5.449219 3.449219 5 4 5 L 8 5 L 9 4 Z "
									/>
								</svg>
							</a>
							<a
								v-if="pageAuthor.twitter"
								class="social-link"
								:href="'https://twitter.com/' + pageAuthor.twitter"
								title="Twitter"
							>
								<img src="~/assets/icons/twitter.svg" />
							</a>
							<a
								v-if="pageAuthor.facebook"
								class="social-link"
								:href="'https://facebook.com/' + pageAuthor.facebook"
								title="Facebook"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									version="1.1"
								>
									<path
										d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h7.621v-6.961h-2.343v-2.725h2.343V9.309 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365V21H19c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
		<hr />
		<div class="m-4 p-4">
			<div class="row">
				<div class="xs-12 lg-9 mx-auto">
					<posts
						:posts="postsIndex"
						:pagination="paginationIndex"
						:base-url="'/author/' + pageAuthor.slug + '/'"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PostList from '~/components/Posts.vue';

export default {
	name: 'AuthorIndex',
	layout: 'article',
	components: {
		posts: PostList
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
					filter: 'author:' + params.slug,
					include: 'count.posts',
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

		pageAuthor() {
			return this.$store.state.pageAuthors.find(
				author => author.slug === this.$route.params.slug
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
			title: this.pageAuthor.name
		};
	}
};
</script>
<style lang="scss" scoped>
.bio {
	line-height: 1.2;
	max-width: 400px;
}
svg {
	height: 20px;
	width: 20px;
	margin-right: 0.5em;
}
hr {
	width: 90%;
	margin: 0 auto;
	margin-top: 1em;
}
</style>
