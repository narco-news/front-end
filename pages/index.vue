<template>
	<div class="h-full">
		<div
			class="large-barrier grid grid-cols-3 md:grid-cols-4 bg-white md:mx-12 p-6 lg:rounded-tl-md lg:rounded-tr-md shadow-inner"
		>
			<div class="col-span-3 barrier">
				<PictureArticleList class="md:p-2 md:mr-2" />
				<hr class="py-2 mt-2" />
				<FeaturedArticles />
			</div>
			<div class="list col-span-3 md:col-span-1">
				<Headlines class="mx-4" />
				<TagsBox :filter="3" class="my-4" />
			</div>
		</div>
		<Focus class="barrier" />
		<FAQ class="barrier" />
		<SitAware />
		<Popup />
	</div>
</template>

<script>
import PictureArticleList from '~/components/Home/PictureArticleList';
import FeaturedArticles from '~/components/Home/FeaturedArticles';
import Headlines from '~/components/Home/Headlines';
import TagsBox from '~/components/TagsBox';
import SitAware from '~/components/Home/SitAware';
import Focus from '~/components/Home/Focus';
import FAQ from '~/components/Home/FAQ';
import Popup from '~/components/Home/Popup';

export default {
	layout: 'default',
	components: {
		PictureArticleList,
		FeaturedArticles,
		Headlines,
		TagsBox,
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
.large-barrier {
	max-width: 1000px;
	margin: 0 auto;
}
.barrier {
	max-width: 800px;
	margin: 0 auto;
}
hr {
	width: 96%;
	color: #e5e5e5;
}
</style>
