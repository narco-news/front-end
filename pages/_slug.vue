<template>
	<div class="mx-4 lg:mx-20">
		<div class="row">
			<div class="xs-12 lg-10 mx-auto animate__animated animate__fadeIn">
				<!-- TAGS -->
				<div class="post-tags">
					<ul class="list inline">
						<li v-for="tag in post.tags.slice(0, 1)" :key="tag.id">
							<nuxt-link :to="{path: '/tag/' + tag.slug}" :title="tag.name">{{
								tag.name.replace(/^(#)/, '')
							}}</nuxt-link>
						</li>
					</ul>
				</div>
				<h1 class="post-title text-4xl">
					{{ post.title }}
				</h1>
				<div>
					<div class="flex flex-auto my-2">
						<div class="post-excerpt">
							<p v-if="post.custom_excerpt">
								{{ post.custom_excerpt }}
							</p>
						</div>
					</div>
				</div>
				<div
					class="grid grid-cols-2 md:flex md:justify-start items-center justify-center md:my-2"
				>
					<div class="col-span-1">
						<div class="post-author flex flex-auto items-center my-2">
							<div
								v-if="post.primary_author.profile_image"
								class="post-author-avatar mx-4"
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
							<div class="post-author-info mr-4">
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
					<div class="col-span-1 text-right">
						<!-- DATE -->
						<div class="text-sm lg:text-lg">
							<div class="post-meta-date">
								<div
									class="post-meta-date-info md:flex md:flex-row md:flex-no-wrap"
								>
									<span class="published_at font-bold uppercase">{{
										post.published_at | dayjs
									}}</span>
									<br /><span
										v-if="post.updated_at !== post.published_at"
										class="updated_at text-xs text-gray-500 md:ml-4"
									>
										last edited <span>{{ post.updated_at | dayjs }}</span></span
									>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- TAGS -->
				<div
					class="post-tags-bottom text-xs md:text-sm pattern-dots-md p-3 uppercase"
				>
					<ul class="list inline">
						<li v-for="tag in post.tags.slice(1, 4)" :key="tag.id" class="mx-1">
							<nuxt-link
								:to="{path: '/tag/' + tag.slug}"
								:title="tag.name"
								class="tags-bottom hvr-float"
								>#{{ tag.name.replace(/^(#)/, '') }}</nuxt-link
							>
						</li>
					</ul>
				</div>
				<article class="single-post">
					<scroll-progress-bar />
					<div v-if="post.feature_image">
						<img
							:src="post.feature_image"
							:alt="post.title"
							class="mx-auto object-cover w-full lg:w-2/3 my-4"
						/>
					</div>
					<div class="row">
						<div class="mx-auto">
							<div class="antialiased post-content">
								<!-- eslint-disable-next-line vue/no-v-html -->
								<div class="post-text text-md md:text-lg" v-html="post.html" />
							</div>
							<div
								class="post-tags-bottom text-xs md:text-sm uppercase pattern-dots-md py-4 mt-6"
							>
								<ul class="list inline">
									<li
										v-for="tag in post.tags.slice(1, 4)"
										:key="tag.id"
										class="mx-2"
									>
										<nuxt-link
											:to="{path: '/tag/' + tag.slug}"
											:title="tag.name"
											class="tags-bottom hvr-float"
											>#{{ tag.name.replace(/^(#)/, '') }}</nuxt-link
										>
									</li>
								</ul>
							</div>
							<div class="text-sm lg:text-lg inline-block w-full px-4 my-2">
								<div class="post-meta-date">
									<div class="post-meta-date-info">
										<span class="published_at font-bold uppercase">{{
											post.published_at | dayjs
										}}</span>

										<div class="float-right">
											<span
												v-if="post.updated_at !== post.published_at"
												class="updated_at text-xs text-gray-500"
											>
												last edited
												<span>{{ post.updated_at | daysec }}</span></span
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>
			</div>
		</div>
	</div>
</template>

<script>
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import hljs from 'highlight.js';

import {ghostAPI} from '~/config/ghost';

import ScrollProgressBar from '~/components/ScrollProgressBar.vue';

dayjs.extend(advancedFormat);
hljs.configure({tabReplace: ''});

export default {
	name: 'PostsPage',

	components: {
		'scroll-progress-bar': ScrollProgressBar
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
		window.addEventListener('load', () => {
			document.querySelectorAll('pre > code').forEach(block => {
				hljs.highlightBlock(block);
			});
		});

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
			title: this.post.title + ' | ' + this.pageUrl,
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
					content: this.post.twitter_image || this.post.feature_image
				},
				{hid: 'twitter:label1', name: 'twitter:label1', content: 'Written by'},
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
.post-tags {
	font-family: 'EB Garamond', serif;
	font-weight: 500;
	color: #03a688;
	text-transform: uppercase;
}
.post-tags-bottom {
	font-family: 'Courier Prime', monoespace;
	font-weight: 600;
	letter-spacing: 1px;
	a {
		color: #0d0d0d;
		text-decoration: none;
	}
	li {
		background-color: #f2f2f2;
		padding: 0.5em;
	}
	.tags-bottom {
		box-shadow: inset 0 -10px 0 0 #f2cb05;
	}
}
.post-title {
	font-family: 'Lora', serif;
	font-weight: 600;
	line-height: 1.4;
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
	color: #03a688;
	font-family: 'IBM Plex Sans', sans-serif;
	font-weight: 600;
	background-color: #f2f2f2;
}

.published_at {
	color: #0d0d0d;
}
.post-text {
	font-family: 'EB Garamond', serif;
	font-weight: 400;
	color: #272727;
}
.updated_at {
	font-family: 'IBM Plex Sans', sans-serif;
	font-weight: 400;
}
</style>
