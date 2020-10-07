<template>
	<div class="grid grid-cols-1">
		<div class="articles mx-2 lg:mx-8">
			<article
				v-for="post in posts.slice(3, 19)"
				:key="post.id"
				class="article rounded-sm"
			>
				<div class="grid grid-cols-1">
					<div
						v-if="post.feature_image"
						class="img-box rounded-sm overflow-hidden"
					>
						<nuxt-link :to="{path: '/' + post.slug}">
							<img
								class="rounded-sm hvr-grow"
								:src="post.feature_image"
								:alt="post.title"
							/>
						</nuxt-link>
					</div>
					<div class="pt-2">
						<div class="flex flex-row flex-wrap justify-between">
							<div v-if="post.tags.length > 0" class="flex flex-row gap-2">
								<div v-for="tag in post.tags.slice(0, 2)" :key="tag.id">
									<nuxt-link
										:to="{path: '/tag/' + tag.slug}"
										:title="tag.name"
										class="tags text-xs uppercase"
										>{{ tag.name.replace(/^(#)/, '') }}</nuxt-link
									>
								</div>
							</div>
							<div
								class="published_at block text-xs md:text-sm whitespace-no-wrap text-gray-700"
							>
								{{ post.published_at | dayjs }}
							</div>
						</div>
						<reading-time
							:content="post.html"
							class="reading text-xs whitespace-no-wrap"
						/>
						<div class="title text-lg">
							<h1 v-if="post.title">
								<nuxt-link :to="{path: '/' + post.slug}" :title="post.title">{{
									post.title
								}}</nuxt-link>
							</h1>
						</div>
						<div class="excerpt text-sm mt-2 mb-1 text-gray-700">
							<p v-if="post.custom_excerpt">{{ post.custom_excerpt }}</p>
							<p v-else-if="post.excerpt && !post.custom_excerpt">
								{{ post.excerpt }}
							</p>
						</div>
						<div class="author text-sm md:text-md text-gray-600">
							by
							<nuxt-link
								:to="{path: '/author/' + post.primary_author.slug}"
								:title="post.primary_author.name"
								class="font-bold uppercase"
								>{{ post.primary_author.name }}</nuxt-link
							>
						</div>
					</div>
				</div>
			</article>
		</div>
		<div class="row my-4 mx-8">
			<div class="md-11 lg-10 mx-auto">
				<div class="pagination">
					<div class="prev" :class="{disabled: !pagination.prev}">
						<nuxt-link
							:to="prevLink"
							class="pagination-link"
							title="Newer posts"
							>{{ $t('message.newposts') }}</nuxt-link
						>
					</div>
					<div class="next" :class="{disabled: !pagination.next}">
						<nuxt-link
							:to="nextLink"
							class="pagination-link"
							title="Older posts"
							>{{ $t('message.oldposts') }}</nuxt-link
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

import ReadingTime from '~/components/ReadingTime.vue';

dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);

export default {
	name: 'PostList',

	components: {ReadingTime},

	filters: {
		dayjs(date) {
			return dayjs(date).format('DD/MM/YYYY · hh:mm A');
		}
	},

	props: {
		posts: {
			type: Array,
			required: true
		},

		pagination: {
			type: Object,
			required: true
		},

		baseUrl: {
			type: String,
			required: false,
			default: '/'
		}
	},

	data() {
		return {
			blogUrl: process.env.blogUrl
		};
	},

	computed: {
		prevLink() {
			if (this.pagination.prev === 1) {
				return this.baseUrl;
			} else {
				return this.baseUrl + 'page/' + this.pagination.prev;
			}
		},

		nextLink() {
			return this.baseUrl + 'page/' + this.pagination.next;
		}
	},
	i18n: {
		messages: {
			en: {
				message: {
					newposts: 'Newer Articles',
					oldposts: 'Older Articles'
				}
			},
			es: {
				message: {
					newposts: 'Artículos Siguientes',
					oldposts: 'Artículos Anteriores'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.articles {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	grid-gap: 1em;
	grid-auto-flow: dense;
}

article.article:nth-child(1) {
	grid-column: 1 / -2;
	.img-box {
		@apply shadow-md;
		border: 1px solid black;
	}
	img {
		width: 100%;
		object-fit: cover;
		height: 250px;
		@media (max-width: 414px) {
			height: 100px;
		}
	}
}
.article:nth-child(5n) {
	grid-column: span 2;
	img {
		width: 100%;
		object-fit: cover;
		height: 200px;
	}
}
.article {
	img {
		height: 100px;
		width: 100%;
		object-fit: cover;
	}
}

@media (max-width: 680px) {
	.archive {
		display: flex;
		flex-direction: column;
	}
}

.featured-badge {
	box-shadow: inset 0 -8px 0 0 #f2cb05;
	font-weight: 700;
	display: inline;
	color: #0d0d0d;
}

.title {
	color: #272727;
	font-family: 'Lora', sans-serif;
	font-weight: 700;
	line-height: 1.2;
}

.published_at {
	font-weight: 500;
}

.tags {
	color: #03a688;
	text-transform: uppercase;
	font-size: 12px;
	font-weight: 600;
}
.excerpt {
	line-height: 1;
}
</style>
