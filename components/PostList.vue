<template>
	<div class="grid grid-cols-1">
		<div class="archive mx-2 lg:mx-8">
			<article
				v-for="post in posts.slice(3, 15)"
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
					<div class="p-1">
						<div class="flex flex-row justify-between">
							<div v-if="post.tags.length > 0">
								<div v-for="tag in post.tags.slice(0, 1)" :key="tag.id">
									<nuxt-link
										:to="{path: '/tag/' + tag.slug}"
										:title="tag.name"
										class="tags text-gray-700 font-bold"
										>{{ tag.name.replace(/^(#)/, '') }}</nuxt-link
									>
								</div>
							</div>
							<div>
								<reading-time
									:content="post.html"
									style="font-size: 11px; font-family: 'Courier Prime';"
									class="reading text-gray-600 whitespace-no-wrap"
								/>
							</div>
						</div>
						<div
							v-if="post.featured"
							class="featured-badge post-featured uppercase text-xs block"
						>
							Featured
						</div>
						<div class="published_at text-sm block">
							{{ post.published_at | dayjs }}
						</div>
						<div class="title text-xl">
							<h1 v-if="post.title">
								<nuxt-link :to="{path: '/' + post.slug}" :title="post.title">{{
									post.title
								}}</nuxt-link>
							</h1>
						</div>
						<!-- <div class="">
							<p v-if="post.custom_excerpt">{{ post.custom_excerpt }}</p>
							<p v-else-if="post.excerpt && !post.custom_excerpt">
								{{ post.excerpt }}
							</p>
						</div> -->
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
							>Newer posts</nuxt-link
						>
					</div>
					<div class="next" :class="{disabled: !pagination.next}">
						<nuxt-link
							:to="nextLink"
							class="pagination-link"
							title="Older posts"
							>Older posts</nuxt-link
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
			return dayjs().to(date);
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
	}
};
</script>

<style lang="scss" scoped>
// Article
.article:nth-child(31n + 1) {
	grid-column: 1 / -1;
	img {
		height: 250px;
		width: 100%;
		object-fit: cover;
	}
}
.article:nth-child(4) {
	grid-column: span 2;
	img {
		height: 200px;
		width: 100%;
		object-fit: cover;
	}
}
.article {
	.img-box {
		border: 2px solid #0d0d0d;
	}
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

// Grid

.archive {
	/* Define the element as a grid container */
	display: grid;
	/* Auto-fit as many items on a row as possible without going under 180px */
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	/* A little spacing between articles */
	grid-gap: 1em;
	grid-auto-flow: dense;
}

// Customization

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
	color: #03a688;
	font-weight: 500;
}

.tags {
	text-transform: uppercase;
	font-size: 12px;
	font-weight: 600;
}
</style>
