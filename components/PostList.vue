<template>
	<div class="grid grid-cols-1">
		<div class="archive mx-2 lg:mx-8">
			<article
				v-for="post in posts.slice(0, 18)"
				:key="post.id"
				class="article rounded-sm hvr-shrink"
			>
				<div class="grid grid-cols-1">
					<div
						v-if="post.feature_image"
						class="image object-cover overflow-hidden h-24 md:h-32"
					>
						<nuxt-link :to="{path: '/' + post.slug}">
							<img
								class="rounded-sm"
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
										class="tags font-bold"
										>{{ tag.name.replace(/^(#)/, '') }}</nuxt-link
									>
								</div>
							</div>
							<div>
								<reading-time
									:content="post.html"
									style="
										color: #565656;
										font-size: 11px;
										font-family: 'Courier Prime';
									"
									class="whitespace-no-wrap"
								/>
							</div>
						</div>
						<div
							v-if="post.featured"
							class="featured-badge post-featured uppercase text-xs block"
						>
							Featured
						</div>
						<div class="title text-lg mt-1">
							<h1 v-if="post.title">
								<nuxt-link :to="{path: '/' + post.slug}" :title="post.title">{{
									post.title
								}}</nuxt-link>
							</h1>
						</div>
						<div class="published_at block">
							{{ post.published_at | dayjs }}
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
import ReadingTime from '~/components/ReadingTime.vue';
dayjs.extend(advancedFormat);

export default {
	name: 'PostList',

	components: {ReadingTime},

	filters: {
		dayjs(date) {
			return dayjs(date).format('MMMM Do, YYYY');
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

<style lang="scss">
// Article
.article:nth-child(31n + 1) {
	grid-column: 1 / -1;
}

.article:nth-child(8) {
	grid-column: -3 / -1;
}

.article:nth-child(13) {
	grid-column: 1 / -2;
}

@media (max-width: 680px) {
	.archive {
		display: flex;
		flex-direction: column;
	}
}

@media (min-width: 768px) {
	.article:nth-child(1) {
		img {
			transform: translateY(-150px);
		}
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
	text-transform: capitalize;
	font-weight: 600;
	line-height: 1.2;
}

.published_at {
	color: #f26457;
	font-family: 'IBM Plex Sans';
	font-weight: 500;
	font-size: 13px;
}

.tags {
	font-family: 'EB Garamond', sans-serif;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	font-size: 12px;
	font-weight: 500;
	color: #565656;
}
</style>
