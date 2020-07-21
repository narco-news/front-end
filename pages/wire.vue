<template>
	<div>
		<TitleBox />
		<Marquee />
		<div id="info" class="animate__animated animate__fadeIn mb-2">
			<EssResources />
		</div>
		<div id="p">
			<div>
				<posts :posts="postsIndex" :pagination="paginationIndex" />
			</div>
		</div>
	</div>
</template>

<script>
import Marquee from '~/components/Wire/Marquee';
import TitleBox from '~/components/Wire/TitleBox';
import EssResources from '~/components/EssResources';
import Posts from '~/components/Wire/Featured';

export default {
	components: {
		posts: Posts,
		EssResources,
		TitleBox,
		Marquee
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
	computed: {
		postsIndex() {
			return this.$store.state.postsIndex;
		},

		paginationIndex() {
			return this.$store.state.paginationIndex;
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
			title:
				this.pageSettings.title +
				' - ' +
				this.pageSettings.description +
				' | ' +
				this.pageUrl,
			meta: [
				{
					hid: 'author',
					name: 'author',
					content: this.pageSettings.primary_author
						? this.pageSettings.primary_author
						: ''
				},
				{
					hid: 'description',
					name: 'description',
					content: this.pageSettings.description
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.pageSettings.description
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: this.pageSettings.cover_image
				},
				{
					hid: 'og:site_name',
					property: 'og:site_name',
					content: this.pageSettings.title
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: this.pageSettings.title
				},
				{hid: 'og:url', property: 'og:url', content: process.env.blogUrl},
				{
					hid: 'apple-mobile-web-app-title',
					name: 'apple-mobile-web-app-title',
					content: this.pageSettings.title
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
#title {
	margin-top: -30px;
	background-color: #f2f2f2;
	color: #0d0d0d;
	h1 {
		box-shadow: inset 0 -20px 0 0 #f2cb05;
	}
}
</style>
