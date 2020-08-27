<template>
	<div>
		<div class="feat-box m-2">
			<article v-for="post in posts.slice(0, 4)" :key="post.id" class="article">
				<div v-if="post.feature_image" class="overflow-hidden">
					<nuxt-link :to="{path: '/' + post.slug}">
						<div class="pattern-dots-md ptn-dot hvr-grow z-0">
							<img
								style="transform: translate(20px, -20px);"
								:src="post.feature_image"
								:alt="post.title"
							/>
						</div>
					</nuxt-link>
					<div class="title-box">
						<div v-if="post.featured" class="star">
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
						<div class="author">
							<div class="text-lg">
								<nuxt-link
									:to="{path: '/author/' + post.primary_author.slug}"
									:title="post.primary_author.name"
									>{{ post.primary_author.name }}</nuxt-link
								>
							</div>
						</div>
						<h1 v-if="post.title" class="title">
							<nuxt-link :to="{path: '/' + post.slug}" :title="post.title"
								>{{ post.title }}
							</nuxt-link>
						</h1>
						<span class="date whitespace-no-wrap">{{
							post.published_at | dayjs
						}}</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</template>

<script>
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

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
.feat-box {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	grid-gap: 1em;
	grid-auto-flow: dense;
}
@media (max-width: 680px) {
	.archive {
		display: flex;
		flex-direction: column;
	}
}
.article:nth-child(1) {
	background-color: #f2f2f2;
	grid-column: 1 / -1;
	.ptn-dot {
		color: #f2f2f2;
	}
	img {
		z-index: 0;
		filter: grayscale(100%);
		transition: filter 0.2s ease;
		&:hover {
			filter: none;
		}
	}

	.title-box {
		line-height: 1.3;
		position: absolute;
		width: 400px;
		height: 150px;
		margin-top: -200px;
		margin-left: 3em;
		z-index: 10;
		text-align: center;
		border: 4px solid #ffd54f;
		background-color: #0d0d0d;
		// Mobile Styles
		@media (max-width: 680px) {
			position: static;
			z-index: 20;
			height: 100%;
			width: 100%;
			border: 0px;
			margin-top: 4em;
			margin-left: 0em;
			.star {
				position: absolute;
				z-index: 30;
				top: 10px;
				right: 10px;
			}
			.title {
				position: absolute;
				margin-top: -2.8em;
				margin-left: 1em;
				padding: 0.2em 0;
				text-align: left;
				color: #03a688;
				font-weight: 700;
				text-decoration: underline;
				text-transform: capitalize;
			}
			.author {
				position: absolute;
				top: 5em;
				right: 0em;
				padding: 10px;
				background-color: #f2f2f2;
				font-weight: 700;
			}
			.date {
				position: absolute;
				color: #0d0d0d;
				background-color: #f2f2f2;
				padding: 10px;
				font-size: 16px;
				font-weight: 700;
				top: 7.5em;
				right: 0em;
			}
		}
	}
	.title {
		font-family: 'Lora', sans-serif;
		font-weight: 700;
		@apply text-3xl;
		color: #f2f2f2;
		position: static;
	}
	.date {
		color: #f2f2f2;
		font-size: 1.5em;
		position: static;
	}
}

.article:nth-child(1n + 2) {
	@media (min-width: 680px) {
		grid-column: span 2;
	}
}

.article:nth-child(1n + 2) {
	font-family: 'Lora', sans-serif;
	background-color: #f2f2f2;
	text-align: center;
	@apply text-2xl;
	font-weight: 700;
	line-height: 1.2;
	.title-box {
		margin: 0.5em 0;
	}
	.date {
		@apply text-lg;
		color: #797979;
		font-family: 'IBM Plex Sans', sans;
		font-weight: 500;
	}
	.author {
		font-weight: 600;
		color: #03a688;
	}
	.title {
		text-decoration: underline;
	}
	img {
		filter: grayscale(100%);
		transition: filter 0.2s ease;
		&:hover {
			filter: none;
		}
		object-fit: cover;
		height: 175px;
		width: 100%;
	}
}
</style>
