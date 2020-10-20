<template>
	<div class="md:mx-4">
		<div class="articles">
			<article v-for="post in posts.slice(0, 3)" :key="post.id" class="article">
				<div v-if="post.feature_image" class="">
					<nuxt-link :to="{path: '/' + post.slug}">
						<div class="image">
							<div class="overflow-hidden">
								<img
									:src="post.feature_image"
									:alt="post.title"
									class="hvr-grow"
								/>
							</div>
						</div>
					</nuxt-link>
					<div class="title-box">
						<div class="flex flex-col flex-wrap md:flex-row md:justify-between">
							<div class="author uppercase text-sm md:text-md">
								<span>BY</span>
								<nuxt-link
									:to="{path: '/author/' + post.primary_author.slug}"
									:title="post.primary_author.name"
									class="font-bold whitespace-no-wrap text-gray-600"
									>{{ post.primary_author.name }}</nuxt-link
								>
							</div>
							<div class="date text-sm text-gray-600">
								{{ post.published_at | dayjs }}
							</div>
						</div>
						<div v-if="post.featured" class="star float-right">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="#FFD54F"
								width="32"
								height="32"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
						</div>
						<h2 v-if="post.title" class="title">
							<nuxt-link :to="{path: '/' + post.slug}" :title="post.title"
								>{{ post.title }}
							</nuxt-link>
						</h2>

						<div class="excerpt p-1 text-gray-700">
							<p v-if="post.custom_excerpt">
								{{ post.custom_excerpt }}
							</p>
							<p v-else-if="post.excerpt && !post.custom_excerpt">
								{{ post.excerpt }}
							</p>
						</div>
					</div>
				</div>
			</article>
		</div>
	</div>
</template>

<script>
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);

export default {
	name: 'CompactPostList',

	components: {},

	filters: {
		dayjs(date) {
			return dayjs(date).format('MMMM Do, YYYY');
		}
	},

	props: {
		posts: {
			type: Array,
			required: true
		}
	},

	data() {
		return {
			blogUrl: process.env.blogUrl
		};
	}
};
</script>

<style lang="scss" scoped>
.bt {
	margin: 1em 0;
	color: #616161;
	background-color: lighten(#ffd54f, 5%);
	&:hover {
		color: lighten(#0d0d0d, 10%);
		background-color: darken(#ffd54f, 5%);
	}
}

.articles {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	grid-auto-flow: dense;
	.title {
		font-family: 'Source Serif Pro', serif;
		font-weight: 700;
		letter-spacing: 0.6px;
		line-height: 1.1;
		padding: 5px 0;
		&:hover {
			text-decoration: underline;
			text-decoration-thickness: 2px;
		}
		&:active {
			text-decoration: underline;
			text-decoration-thickness: 2px;
		}
		&:focus {
			text-decoration: underline;
			text-decoration-thickness: 2px;
		}
	}
	.date {
		text-transform: uppercase;
	}
	.author {
		color: #6e7381;
	}
	.article:nth-child(1) {
		grid-column: 1 / -1;
		.title {
			text-transform: capitalize;
			font-size: 28px;
		}
		.image {
			box-shadow: 10px 10px #ffd54f;
			margin-bottom: 1.5em;
			div {
				border: 1px solid #0d0d0d;
			}
		}
		img {
			height: 200px;
			width: 100%;
			object-fit: cover;
		}
	}
	.article:nth-child(2),
	.article:nth-child(3) {
		grid-column: span 3;
		padding: 0.5em;
		.image {
			margin-bottom: 1em;
			div {
				border: 3px solid #ffd54f;
			}
		}
		.title {
			text-transform: capitalize;
			font-size: 20px;
		}
		img {
			height: 120px;
			width: 100%;
			object-fit: cover;
		}
		.excerpt {
			@media (max-width: 415px) {
				font-size: 14px;
			}
		}
	}
}
</style>
