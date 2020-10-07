<template>
	<div
		class="large-barrier bg-white md:mx-12 p-6 lg:rounded-tl-md lg:rounded-tr-md shadow-inner"
	>
		<div class="flex flex-wrap md:flex-no-wrap md:flex-row-reverse">
			<div class="list md:w-1/4">
				<div class="bg-gray-200 m-4 p-4 rounded-lg shadow-md">
					<p>
						{{ $t('message.welcome') }}
					</p>
				</div>
				<QuickLinks />
				<div
					class="text-white bg-red font-bold py-2 px-4 rounded inline-flex items-center m-2 cursor-pointer text-center flex-row flex-no-wrap justify-center"
				>
					<n-link to="/october-update" class="uppercase text-sm ml-2"
						>October Update</n-link
					>
				</div>
				<div
					class="text-white hover:bg-blue-300 bg-blue-500 font-bold py-2 px-4 rounded inline-flex items-center m-2 cursor-pointer text-center flex-row flex-no-wrap justify-center"
				>
					<n-link to="/pa" class="uppercase text-sm ml-2"
						>Press Aggregate</n-link
					>
				</div>
				<div
					class="text-white hover:bg-green-300 bg-green-500 font-bold py-2 px-4 rounded inline-flex items-center m-2 cursor-pointer text-center flex-row flex-no-wrap justify-center"
				>
					<n-link to="/academia" class="uppercase text-sm ml-2"
						>Academic Resources</n-link
					>
				</div>
				<TagsBox :filter="2" class="my-4" />
			</div>
			<div class="md:w-3/4">
				<posts
					class="clear-left m-2"
					:posts="postsIndex"
					:pagination="paginationIndex"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import QuickLinks from '~/components/Wire/QuickLinks';
import TagsBox from '~/components/TagsBox';

import Posts from '~/components/PostList';

export default {
	components: {
		QuickLinks,
		TagsBox,
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
			title: this.pageSettings.title,
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
	},
	i18n: {
		messages: {
			en: {
				message: {
					welcome:
						'Everything published on this website can be found in these pages. Also, below you will find topic relevant off-site quick links, important areas of the website and the most popular tags.'
				}
			},
			es: {
				message: {
					welcome:
						'Todo lo que se publica en este sitio web se puede encontrar en estas páginas. Además, a continuación encontrará enlaces rápidos de temas relevantes fuera del sitio, áreas importantes del sitio web y las etiquetas más populares.'
				}
			}
		}
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
</style>
