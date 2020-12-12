<template>
	<div class="site-wrapper mx-auto">
		<div class="grid grid-flow-row md:grid-cols-6 border-bottom">
			<div class="col-span-4">
				<LatestArticles class="p-6" :posts="postsIndex" />
			</div>
			<!-- Hidden on iPad screens -->
			<div class="col-span-4 md:hidden">
				<AnalysisArticles class="p-6" :posts="postsIndexAnalysis" />
			</div>
			<div class="col-span-4 md:hidden">
				<FeaturedArticles class="p-6" :posts="postsIndexFeatured" />
			</div>
			<!-- End -->
			<div class="list col-span-4 md:col-span-2">
				<CurrentArticles class="p-6" :posts="postsIndex" />
			</div>
		</div>
		<!-- Hidden on Phone Screens -->
		<div class="hidden md:inline">
			<AnalysisArticles class="p-6" :posts="postsIndexAnalysis" />
		</div>
		<div class="hidden md:inline">
			<FeaturedArticles class="px-6 md:p-6" :posts="postsIndexFeatured" />
		</div>
		<!-- End -->
		<div
			class="grid grid-cols-3 border-gray-300 border-b-2 border-t-2 shadow-sm"
		>
			<div class="bg-gray-200 col-span-3">
				<TagArticles
					class="p-6"
					title="Tamaulipas"
					link="tag/tamaulipas"
					:posts="postsIndexTagOne"
				/>
			</div>
			<div class="bg-gray-200 col-span-3">
				<TagArticles
					class="p-6"
					title="Guanajuato"
					link="tag/guanajuato"
					:posts="postsIndexTagTwo"
				/>
			</div>
			<div class="bg-gray-200 col-span-3">
				<TagsBox />
			</div>
		</div>
		<div class="opinion p-6">
			<OpinionArticles class="my-6" :posts="postsIndexOpinions" />
		</div>
	</div>
</template>

<script>
import LatestArticles from '~/components/Home/LatestArticles';
import CurrentArticles from '~/components/Home/CurrentArticles';
import TagArticles from '~/components/Home/TagArticles';
import FeaturedArticles from '~/components/Home/FeaturedArticles';
import OpinionArticles from '~/components/Home/OpinionArticles';
import AnalysisArticles from '~/components/Home/AnalysisArticles';
// import AroundTheWeb from '~/components/Home/AroundTheWeb';
import TagsBox from '~/components/TagsBox';

export default {
	layout: 'default',
	components: {
		LatestArticles,
		CurrentArticles,
		TagArticles,
		FeaturedArticles,
		OpinionArticles,
		AnalysisArticles,
		TagsBox
		// AroundTheWeb
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
					filter: store.state.lang.tag + '+tag:-sigact' + '+tag:-links',
					pageNumber
				});
				await store.dispatch('getPostsIndexTagOne', {
					filter: store.state.lang.tag + '+tag:tamaulipas',
					pageNumber
				});
				await store.dispatch('getPostsIndexTagTwo', {
					filter: store.state.lang.tag + '+tag:guanajuato',
					pageNumber
				});
				await store.dispatch('getPostsIndexFeatured', {
					filter: 'tags:-hash-es+featured:true',
					pageNumber
				});
				await store.dispatch('getPostsIndexOpinions', {
					filter: store.state.lang.tag + '+tag:opinion',
					pageNumber
				});
				await store.dispatch('getPostsIndexAnalysis', {
					filter: store.state.lang.tag + '+tag:analysis',
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
		postsIndexTagOne() {
			return this.$store.state.postsIndexTagOne;
		},
		postsIndexTagTwo() {
			return this.$store.state.postsIndexTagTwo;
		},
		postsIndexFeatured() {
			return this.$store.state.postsIndexFeatured;
		},
		postsIndexOpinions() {
			return this.$store.state.postsIndexOpinions;
		},
		postsIndexAnalysis() {
			return this.$store.state.postsIndexAnalysis;
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
	},
	i18n: {
		messages: {
			en: {
				message: {
					atw: 'Around the web',
					sigActs: 'Significant Activities'
				}
			},
			es: {
				message: {
					atw: 'Alrededor de la red',
					sigActs: 'Actividades significativas'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.sig-act {
	border-left: 1px dotted black;
	@media (max-width: 414px) {
		border-left: 0px;
	}
}
.border-bottom {
	border-bottom: 1px;
	border-bottom-color: #e2e8f0;
	border-bottom-style: solid;
}
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
