<template>
	<div class="grid grid-cols-1">
		<div class="archive mx-1">
			<article
				v-for="post in posts.slice(0, 18)"
				:key="post.id"
				class="article rounded-sm hvr-shrink"
			>
				<div class="grid grid-cols-1">
					<div>
						<div
							v-if="post.feature_image"
							class="image object-cover overflow-hidden h-32"
						>
							<nuxt-link :to="{path: '/' + post.slug}">
								<img
									class="rounded-sm"
									:src="post.feature_image"
									:alt="post.title"
								/>
							</nuxt-link>
						</div>
					</div>
					<div class="p-2">
						<div class="mb-1">
							<div v-if="post.featured" class="featured-badge float-right">
								<span class="post-featured uppercase text-sm">Featured</span>
							</div>
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
						</div>
						<div class="title">
							<h1 v-if="post.title">
								<nuxt-link :to="{path: '/' + post.slug}" :title="post.title">{{
									post.title
								}}</nuxt-link>
							</h1>
						</div>
						<div class="post-meta-date">
							<div class="post-meta-date-icon">
								<!-- Date Icon -->
							</div>
							<div class="post-meta-date-info grid grid-flow-row">
								<span class="published_at text-gray-800">{{
									post.published_at | dayjs
								}}</span>
								<span class=""
									><reading-time
										:content="post.html"
										style="
											color: #0d0d0d;
											font-size: 12px;
											font-family: 'Courier Prime';
										"
								/></span>
							</div>
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
	name: 'Posts',

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
.article:nth-child(8n + 3) {
	background-color: #9b9fe8;
	border: 2px solid #595fd9;
	.title {
		font-size: 22px;
		color: #dedff7;
	}
	.published_at {
		color: #353982;
	}
}
.article:nth-child(6n) {
	margin: 0 1em;
	grid-column: -3 / -1;
	background-color: #b3e4db;
	border: 2px solid #03a688;
	.title {
		color: #e6f6f3;
		font-size: 26px;
	}
	.published_at {
		color: #02856d;
	}
}

.article:nth-child(1) {
	height: 100%;
	margin: 0 0.5em;
	.title {
		font-size: 18px;
		color: #03a688;
		font-family: 'IBM Plex Sans';
		font-weight: 700;
	}
	.published_at {
		color: #02856d;
	}
	.image {
		height: 150px;
	}
}

@media (max-width: 680px) {
	.archive {
		display: flex;
		flex-direction: column;
	}

	.article {
		margin-bottom: 1em;
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
}

.title {
	color: #0d0d0d;
	font-family: 'Lora', sans-serif;
	font-weight: 600;
	line-height: 1.2;
}

.published_at {
	color: #f28177;
	font-family: 'IBM Plex Sans';
	font-weight: 600;
	letter-spacing: -1px;
	font-size: 13px;
}

.tags {
	background-color: #f2f2f2;
	padding: 4px 10px;
	border-radius: 3px;
	font-size: 11px;
}
</style>
