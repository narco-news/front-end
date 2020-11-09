<template>
	<div class="large-barrier p-2 py-4 grid grid-cols-3 md:grid-cols-4">
		<div class="col-span-3 barrier">
			<PictureArticleList />
			<hr class="py-2 mt-2" />
			<FeaturedArticles />
		</div>
		<div class="list col-span-3 md:col-span-1 md:px-2">
			<Headlines />
			<!-- <TagsBox :filter="3" /> -->
		</div>
	</div>
</template>

<script>
import PictureArticleList from '~/components/Home/PictureArticleList';
import FeaturedArticles from '~/components/Home/FeaturedArticles';
import Headlines from '~/components/Home/Headlines';
// import TagsBox from '~/components/TagsBox';
// import Popup from '~/components/Home/Popup';

export default {
	layout: 'default',
	components: {
		PictureArticleList,
		FeaturedArticles,
		Headlines
		// TagsBox
		// Popup
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
	data() {
		return {
			twitter_description:
				'Open source research and tooling focused on the global war on the drugs',
			twitter_title: 'narco.news',
			feature_image: 'https://narco.news/images/twt-banner.png',
			title: 'narco.news'
		};
	},
	head() {
		return {
			title: 'narco.news - Home',
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
.list {
	border-left: 0px solid #e5e5e5;
	@media (min-width: 768px) {
		border-left: 1px solid #e5e5e5;
	}
}
hr {
	width: 96%;
	color: #e5e5e5;
}
</style>
