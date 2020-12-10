<template>
	<div class="site-wrapper mx-auto">
		<div class="grid grid-flow-row md:grid-cols-6">
			<div class="col-span-4">
				<LatestArticles class="p-6" :posts="postsIndex" />
				<FeaturedArticles class="p-6" :posts="postsIndexFeatured" />
				<div class="bg-gray-200">
					<TagArticles class="p-6" title="Tamaulipas" :posts="postsIndexTwo" />
				</div>
			</div>
			<div class="list col-span-4 md:col-span-2">
				<CurrentArticles class="p-6" :posts="postsIndex" />
			</div>
		</div>
	</div>
</template>

<script>
import LatestArticles from '~/components/Home/LatestArticles';
import CurrentArticles from '~/components/Home/CurrentArticles';
import TagArticles from '~/components/Home/TagArticles';
import FeaturedArticles from '~/components/Home/FeaturedArticles';

export default {
	layout: 'default',
	components: {
		LatestArticles,
		CurrentArticles,
		TagArticles,
		FeaturedArticles
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
					filter: store.state.lang.tag,
					pageNumber
				});
				await store.dispatch('getPostsIndexTwo', {
					filter: store.state.lang.tag + '+tag:tamaulipas',
					pageNumber
				});
				await store.dispatch('getPostsIndexFeatured', {
					filter: 'tags:-hash-es+featured:true',
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

	data() {
		return {
			twitter_description:
				'Open source research and tooling focused on the global war on the drugs',
			twitter_title: 'narco.news',
			feature_image: 'https://narco.news/images/twt-banner.png',
			title: 'narco.news'
		};
	},
	computed: {
		postsIndex() {
			return this.$store.state.postsIndex;
		},
		postsIndexTwo() {
			return this.$store.state.postsIndexTwo;
		},
		postsIndexFeatured() {
			return this.$store.state.postsIndexFeatured;
		},
		availableLocales() {
			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
		}
	},
	head() {
		return {
			title: 'narco.news',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.twitter_description
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.twitter_description
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: this.feature_image
				},
				{
					hid: 'og:site_name',
					property: 'og:site_name',
					content: this.twitter_title
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: this.twitter_title
				},
				{hid: 'og:url', property: 'og:url', content: process.env.blogUrl},
				{
					hid: 'apple-mobile-web-app-title',
					name: 'apple-mobile-web-app-title',
					content: this.twitter_title
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: this.twitter_description
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: this.feature_image
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: this.twitter_title
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.site-wrapper {
	max-width: 1200px;
}
.list {
	border-left: 0px solid #e2e8f0;
	@media (min-width: 768px) {
		border-left: 1px solid #e2e8f0;
	}
}
</style>
