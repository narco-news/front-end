<template>
	<div class="mx-2 md:mx-8">
		<div class="articles">
			<article v-for="post in posts.slice(3, 8)" :key="post.id" class="article">
				<div v-if="post.feature_image" class="overflow-hidden">
					<nuxt-link :to="{path: '/' + post.slug}">
						<div class="overflow-hidden">
							<img
								:src="post.feature_image"
								:alt="post.title"
								class="hvr-grow"
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
						<div class="date whitespace-no-wrap text-sm mt-2">
							{{ post.published_at | dayjs }}
						</div>
						<h1 v-if="post.title" class="title">
							<nuxt-link :to="{path: '/' + post.slug}" :title="post.title"
								>{{ post.title }}
							</nuxt-link>
						</h1>
						<div class="excerpt">
							<p v-if="post.custom_excerpt">{{ post.custom_excerpt }}</p>
							<p v-else-if="post.excerpt && !post.custom_excerpt">
								{{ post.excerpt }}
							</p>
							<!-- <nuxt-link
								class="post-read-more"
								:to="{path: '/' + post.slug}"
								title="Read more..."
								>Read more...</nuxt-link
							> -->
						</div>
						<div class="author uppercase text-sm md:text-md">
							<span>BY</span>
							<nuxt-link
								:to="{path: '/author/' + post.primary_author.slug}"
								:title="post.primary_author.name"
								class="font-bold"
								>{{ post.primary_author.name }}</nuxt-link
							>
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
			return dayjs().to(date);
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
.articles {
	display: grid;
	grid-template-columns: repeat (auto-fit, minmax(180px, 1fr));
	grid-auto-flow: dense;
	.date {
		color: #03a688;
		font-weight: 600;
	}
	.author {
		color: #6e7381;
	}
	.article:nth-child(1) {
		grid-column: span 2;
		img {
			object-fit: cover;
			height: 70%;
			max-height: 600px;
			width: 100%;
			border-radius: 0.5em;
			-webkit-border-radius: 0.5em;
		}
		.title {
			font-size: 24px;
			line-height: 1.2;
			font-family: 'Lora', sans-serif;
			font-weight: 700;
		}
	}
	.article:nth-child(2),
	.article:nth-child(3),
	.article:nth-child(4),
	.article:nth-child(5) {
		margin: 1em 0.5em;
		.excerpt {
			display: none;
		}
		.title {
			font-size: 20px;
			line-height: 1.2;
			font-family: 'Lora', sans-serif;
			font-weight: 700;
		}
		img {
			object-fit: cover;
			height: 10em;
			width: 100%;
			border-radius: 0.5em;
			-webkit-border-radius: 0.5em;
		}
	}
}
</style>
