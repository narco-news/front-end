<template>
	<div class="overflow-y-hidden large-barrier mx-4 lg:mx-20 bg-white">
		<div class="row">
			<div class="mx-auto p-4 md:p-8">
				<div class="flex flex-row justify-between items-center">
					<div class="post-tags md:mx-8">
						<div class="flex flex-col-reverse md:flex-col">
							<ul class="list inline">
								<li v-for="tag in post.tags.slice(0, 1)" :key="tag.id">
									<nuxt-link
										:to="{path: '/tag/' + tag.slug}"
										:title="tag.name"
										class="text-xl"
										>{{ tag.name.replace(/^(#)/, '') }}</nuxt-link
									>
								</li>
							</ul>
						</div>
					</div>
					<ul class="list inline md:mx-8">
						<li
							v-for="tag in post.tags.slice(1, 4)"
							:key="tag.id"
							class="text-gray-600 text-sm"
						>
							<div v-if="tag.slug != 'hash-es'">
								<div v-if="tag.slug != 'hash-res'">
									<div v-if="tag.slug != 'hash-ana'">
										<nuxt-link
											:to="{path: '/tag/' + tag.slug}"
											:title="tag.name"
											class="hvr-sink underline mr-2"
											>{{ tag.name.replace(/^(#)/, '') }}
										</nuxt-link>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<h1 class="post-title text-4xl md:text-5xl mt-4 md:mt-12 md:mx-8">
					{{ post.title }}
				</h1>

				<div>
					<div class="flex flex-auto my-2 mb-4 md:mx-8">
						<div class="post-excerpt">
							<p v-if="post.custom_excerpt">
								{{ post.custom_excerpt }}
							</p>
						</div>
					</div>
				</div>
				<div
					class="grid grid-cols-2 md:flex md:justify-between items-center my-2 md:my-4 mx-1 md:mx-8"
				>
					<div class="col-span-1">
						<div class="post-author flex flex-auto items-center">
							<div
								v-if="post.primary_author.profile_image"
								class="post-author-avatar mr-2"
							>
								<nuxt-link
									:to="{path: '/author/' + post.primary_author.slug}"
									:title="post.primary_author.name"
								>
									<img
										:src="post.primary_author.profile_image"
										:alt="post.primary_author.name"
										class="rounded-full h-8"
									/>
								</nuxt-link>
							</div>
							<div class="post-author-info">
								<div class="post-author-info-name text-lg">
									<nuxt-link
										:to="{path: '/author/' + post.primary_author.slug}"
										:title="post.primary_author.name"
										>{{ post.primary_author.name }}</nuxt-link
									>
								</div>
							</div>
						</div>
					</div>
				</div>
				<article class="single-post md:mt-8">
					<scroll-progress-bar />
					<div v-if="post.feature_image" class="picture">
						<img :src="post.feature_image" :alt="post.title" class="my-4" />
					</div>
					<div class="grid grid-cols-2 mx-2">
						<div class="col-span-1">
							<div class="text-sm lg:text-lg">
								<div class="post-meta-date">
									<div
										class="post-meta-date-info md:flex md:flex-row md:flex-no-wrap"
									>
										<span class="published_at font-bold">{{
											post.published_at | dayjs
										}}</span>
									</div>
								</div>
							</div>
						</div>
						<div class="flex justify-end">
							<social-icon
								:url="
									'https://www.linkedin.com/shareArticle/' +
									'?mini=true' +
									'&url=' +
									blogUrl +
									'/' +
									post.slug
								"
								class=""
								click="
							window.open(href, 'facebook-share', 'width=580,height=296');
							return false;
						"
							>
								<img
									src="~/assets/icons/linkedin-rounded.svg"
									alt="Share article on LinkedIn"
									title="Share article on LinkedIn"
									class="w-6"
								/>
							</social-icon>
							<social-icon
								:url="
									'https://www.facebook.com/sharer.php?u=' +
									blogUrl +
									'/' +
									post.slug
								"
								class=""
								click="
							window.open(href, 'facebook-share', 'width=580,height=296');
							return false;
						"
							>
								<img
									src="~/assets/icons/facebook-rounded.svg"
									alt="Share article on Facebook"
									title="Share article on Facebook"
									class="w-6"
								/>
							</social-icon>
							<social-icon
								:url="
									'https://twitter.com/share?text=' +
									post.title +
									'&url=' +
									blogUrl +
									'/' +
									post.slug
								"
								class=""
								click="
							window.open(href, 'twitter-share', 'width=550,height=235');
							return false;
						"
							>
								<img
									src="~/assets/icons/twitter-rounded.svg"
									alt="Share article on Twitter"
									title="Share article on Twitter"
									class="w-6"
								/>
							</social-icon>
						</div>
					</div>

					<div class="row clear-both">
						<div class="mx-auto">
							<div class="antialiased post-content">
								<!-- eslint-disable-next-line vue/no-v-html -->
								<div class="post-text text-xl lg:text-2xl" v-html="post.html" />
							</div>
							<div class="mt-12">
								<div class="flex flex-row">
									<social-icon
										:url="
											'https://twitter.com/share?text=' +
											post.title +
											'&url=' +
											blogUrl +
											'/' +
											post.slug
										"
										class="float-right"
										click="
							window.open(href, 'twitter-share', 'width=550,height=235');
							return false;
						"
									>
										<img
											src="~/assets/icons/twitter-rounded.svg"
											alt="Share article on Twitter"
											title="Share article on Twitter"
											class="w-6"
										/>
									</social-icon>
									<social-icon
										:url="
											'https://www.facebook.com/sharer.php?u=' +
											blogUrl +
											'/' +
											post.slug
										"
										class="float-right"
										click="
							window.open(href, 'facebook-share', 'width=580,height=296');
							return false;
						"
									>
										<img
											src="~/assets/icons/facebook-rounded.svg"
											alt="Share article on Facebook"
											title="Share article on Facebook"
											class="w-6"
										/>
									</social-icon>
									<social-icon
										:url="
											'https://www.linkedin.com/shareArticle/' +
											'?mini=true' +
											'&url=' +
											blogUrl +
											'/' +
											post.slug
										"
										class="float-right"
										click="
							window.open(href, 'facebook-share', 'width=580,height=296');
							return false;
						"
									>
										<img
											src="~/assets/icons/linkedin-rounded.svg"
											alt="Share article on LinkedIn"
											title="Share article on LinkedIn"
											class="w-6"
										/>
									</social-icon>
								</div>
								<div class="inline-block text-md">
									<div class="post-meta-date">
										<div class="post-meta-date-info">
											<div>
												<span
													v-if="post.updated_at !== post.published_at"
													class="updated_at text-xs text-gray-500"
												>
													last edited
													<span>{{ post.updated_at | daysec }}</span></span
												>
												<div class="post-tags-bottom uppercase">
													<ul class="list inline">
														<li
															v-for="tag in post.tags.slice(1, 4)"
															:key="tag.id"
														>
															<div v-if="tag.slug != 'hash-es'">
																<div v-if="tag.slug != 'hash-res'">
																	<div v-if="tag.slug != 'hash-ana'">
																		<nuxt-link
																			:to="{path: '/tag/' + tag.slug}"
																			:title="tag.name"
																			class="tags-bottom hvr-sink"
																			>{{ tag.name }}</nuxt-link
																		>
																	</div>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>
				<a href="#" class="link-button"></a>
			</div>
			<div class="notice flex justify-center mb-4 p-2">
				<p>
					All company, product and service names used in this website are for
					identification purposes only. All product names, logos, and brands are
					property of their respective owners. Use of these names, logos, and
					brands does not imply endorsement. We disclaims proprietary interest
					in the marks and names of others.
				</p>
			</div>
		</div>
		<ScrollToTop />
	</div>
</template>

<script>
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import {ghostAPI} from '~/config/ghost';
import ScrollProgressBar from '~/components/ScrollProgressBar.vue';
import ScrollToTop from '~/components/ScrollToTop';
import SocialIcons from '~/components/SocialIcons';

dayjs.extend(advancedFormat);

export default {
	name: 'PostsPage',
	layout: 'article',
	components: {
		'scroll-progress-bar': ScrollProgressBar,
		ScrollToTop,
		'social-icon': SocialIcons
	},

	filters: {
		dayjs(date) {
			return dayjs(date).format('MMMM Do, YYYY');
		},
		daysec(date) {
			return dayjs(date).format('hh:mm:ss A, MM/DD/YYYY');
		}
	},

	async fetch({error, params, payload, store}) {
		if (payload) {
			store.commit('setSinglePost', payload);
		} else {
			const postLinks = store.state.postNavigation.find(
				post => post.slug === params.slug
			);

			if (!postLinks) {
				try {
					const page = await ghostAPI().pages.read({
						slug: params.slug,
						include: 'authors,tags'
					});

					store.commit('setSinglePost', page);
				} catch (err) {
					error({
						statusCode: 404,
						message: err.message
					});
				}
			} else {
				try {
					const post = await ghostAPI().posts.read({
						slug: params.slug,
						include: 'authors,tags'
					});

					store.commit('setSinglePost', {
						...post,
						prevSlug: postLinks.prevSlug,
						nextSlug: postLinks.nextSlug
					});
				} catch (err) {
					error({
						statusCode: 404,
						message: err.message
					});
				}
			}
		}
	},

	data() {
		return {
			blogUrl: process.env.blogUrl
		};
	},

	computed: {
		postsIndex() {
			return this.$store.state.postsIndex;
		},

		post() {
			return this.$store.state.singlePost;
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

	beforemounted() {
		// window.addEventListener('load', () => {
		// 	document.querySelectorAll('pre > code').forEach(block => {
		// 		hljs.highlightBlock(block);
		// 	});
		// });

		const cards = document.getElementsByClassName('kg-embed-card');
		for (const card of cards) {
			const iframe = card.firstElementChild;
			const iframeHeight = iframe.getAttribute('height');
			if (iframeHeight) {
				iframe.style.height = iframeHeight + 'px';
			}
		}
	},
	head() {
		return {
			title: this.post.title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.post.meta_description || this.post.excerpt
				},
				{hid: 'author', name: 'author', content: this.post.primary_author.name},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.post.meta_description || this.post.excerpt
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: this.post.og_image || this.post.feature_image
				},
				{
					hid: 'og:site_name',
					property: 'og:site_name',
					content: this.post.title
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: this.post.og_title || this.post.title
				},
				{hid: 'og:type', property: 'og:type', content: 'article'},
				{
					hid: 'og:url',
					property: 'og:url',
					content: process.env.blogUrl + this.$route.path
				},
				{
					hid: 'twitter:creator',
					name: 'twitter:creator',
					content:
						this.post.primary_author.twitter || this.post.primary_author.name
				},
				{
					hid: 'twitter:data1',
					name: 'twitter:data1',
					content: this.post.primary_author.name
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content:
						this.post.twitter_description ||
						this.post.meta_description ||
						this.post.excerpt
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: this.post.feature_image
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: this.post.twitter_title || this.post.title
				},
				{
					hid: 'twitter:url',
					name: 'twitter:url',
					content: process.env.blogUrl + this.$route.path
				},
				{
					hid: 'twitter:card',
					name: 'twitter:card',
					content: 'summary_large_image'
				},
				{
					hid: 'apple-mobile-web-app-title',
					name: 'apple-mobile-web-app-title',
					content: this.post.title
				}
			]
		};
	}
};
</script>
<style lang="scss" scoped>
.notice {
	color: #262626;
	width: 100%;
	font-size: 11px;
	text-align: center;
	line-height: 1.3;
	p {
		max-width: 800px;
	}
}
.large-barrier {
	max-width: 1000px;
	margin: 0 auto;
}
.picture {
	img {
		object-fit: cover;
		height: 70%;
		max-height: 600px;
		width: 100%;
		border-radius: 5px;
	}
}
.post-content {
	padding-top: 2em;
	@media (min-width: 768px) {
		padding: 2em 1em;
	}
}
.top {
	padding: 0.5em;
	background-color: #f26457;
}
.post-tags {
	font-family: 'Source Sans Pro', sans;
	font-weight: 600;
	color: #03a688;
	text-transform: uppercase;
}
.post-tags-bottom {
	font-size: 12px;
	font-weight: 600;
	.tags-bottom {
		box-shadow: inset 0 -10px 0 0 #f2cb05;
		font-weight: 600;
	}
	a {
		color: #0d0d0d;
		text-decoration: none;
	}
	li {
		margin-right: 10px;
	}
}
.post-title {
	font-family: 'Source Serif Pro', serif;
	font-weight: 600;
	line-height: 1.2;
	text-transform: capitalize;
}
.post-excerpt {
	font-family: 'IBM Plex Sans', sans-serif;
	font-weight: 400;
	line-height: 1.2;
}
.post-author-avatar {
	filter: grayscale(100%);
	transition: filter 0.2s ease;
	&:hover {
		filter: none;
	}
}
.post-author-info-name {
	color: #0d0d0d;
	font-weight: 600;
	font-family: 'Source Sans Pro', sans;
}

.published_at {
	font-family: 'Source Sans Pro', sans-serif;

	color: #03a688;
}
.post-text {
	font-family: 'EB Garamond', serif;
	font-weight: 400;
	color: #252525;
}
.updated_at {
	font-family: 'IBM Plex Sans', sans-serif;
	font-weight: 400;
}
a.link-button {
	font-family: 'Source Sans Pro', sans-serif;
	background-color: #cdcff4;
	border: 2px solid #595fd9;
	color: #595fd9;
	margin: 3em 0;
	@apply inline-block;
	@apply shadow-lg;
	@apply rounded-md;
	@apply py-3;
	@apply px-4;
	@apply font-semibold;
	@media (min-width: 375px) {
		font-size: 16px;
		margin-left: 2em;
	}
	@media (min-width: 415px) {
		font-size: 14px;
		margin-left: 3em;
	}
	&::before {
		content: '🔗';
		margin-right: 10px;
	}
	&::after {
		content: 'Article Link';
	}
	&:hover {
		background-color: #dedff7;
	}
}
</style>
