<template>
	<div class="h-full">
		<HomeArticles class="lg:mx-8" />
		<FeaturedArticles class="lg:mx-12" />
		<hr class="my-6 mx-auto" />
		<Headlines />
		<hr class="my-6 mx-auto" />
		<TagsList />
		<Focus />
		<FAQ />
		<SitAware />
		<Popup />
	</div>
</template>

<script>
import HomeArticles from '~/components/Home/HomeArticles';
import FeaturedArticles from '~/components/Home/FeaturedArticles';
import Headlines from '~/components/Home/Headlines';
import TagsList from '~/components/TagsList';
import SitAware from '~/components/Home/SitAware';
import Focus from '~/components/Home/Focus';
import FAQ from '~/components/Home/FAQ';
import Popup from '~/components/Home/Popup';

export default {
	layout: 'default',
	components: {
		HomeArticles,
		FeaturedArticles,
		Headlines,
		TagsList,
		SitAware,
		Focus,
		FAQ,
		Popup
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
			title:
				this.twitter_title +
				' - ' +
				this.twitter_description +
				' | ' +
				this.pageUrl,
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
hr {
	width: 80%;
	color: #e5e5e5;
}
</style>
