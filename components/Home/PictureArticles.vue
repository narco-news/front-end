<template>
	<div>
		<div class="articles">
			<article v-for="post in posts.slice(3, 8)" :key="post.id" class="article">
				<div v-if="post.feature_image">
					<nuxt-link :to="{path: '/' + post.slug}">
						<div class="overflow-hidden img-wrap">
							<img
								:src="post.feature_image"
								:alt="post.title"
								class="hvr-grow"
							/>
						</div>
					</nuxt-link>
					<div class="title-box">
						<div v-if="post.tags.length > 0" class="flex flex-row">
							<div
								v-for="tag in post.tags.slice(0, 1)"
								:key="tag.id"
								class="tags"
							>
								<nuxt-link
									:to="{path: '/tag/' + tag.slug}"
									:title="tag.name"
									class="text-xs uppercase mr-1 font-semibold whitespace-no-wrap"
									>{{ tag.name }}</nuxt-link
								>
							</div>
							<div
								v-for="tag in post.tags.slice(1, 2)"
								:key="tag.id"
								class="tags"
							>
								<nuxt-link
									:to="{path: '/tag/' + tag.slug}"
									:title="tag.name"
									class="text-xs uppercase whitespace-no-wrap"
									>&nbsp;•&nbsp;&nbsp;{{ tag.name }}</nuxt-link
								>
							</div>
						</div>
						<h2 v-if="post.title" class="title capitalize text-xl">
							<nuxt-link :to="{path: '/' + post.slug}" :title="post.title"
								>{{ post.title }}
							</nuxt-link>
						</h2>
						<div class="excerpt">
							<p v-if="post.custom_excerpt">{{ post.custom_excerpt }}</p>
							<p v-else-if="post.excerpt && !post.custom_excerpt">
								{{ post.excerpt }}
							</p>
						</div>
						<div class="flex flex-row flex-wrap items-center">
							<div class="date whitespace-no-wrap text-sm text-gray-600 mr-1">
								{{ post.published_at | dayjs }}
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
.img-wrap {
	border: 1px solid black;
	border-radius: 0.3em;
	-webkit-border-radius: 0.3em;
}
.tags {
	color: #03a688;
}
.articles {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
	grid-auto-flow: dense;
	grid-gap: 1em;
	article {
		.date {
			font-weight: 600;
		}
		.title-box {
			margin: 0.5em 0;
		}
		.title {
			font-weight: 700;
			font-family: 'Lora', sans-serif;
			line-height: 1.2;
		}
	}
	.article:nth-child(1) {
		grid-column: span 2;
	}

	.article:nth-child(2),
	.article:nth-child(3),
	.article:nth-child(4),
	.article:nth-child(5) {
		grid-column: span 1;
		img {
			max-height: 130px;
			object-fit: cover;
			width: 100%;
			@media (max-width: 414px) {
				max-height: 110px;
				object-fit: cover;
				width: 100%;
			}
		}
		.excerpt {
			display: none;
		}
	}
}
// .articles {
// 	display: grid;
// 	grid-template-columns: (auto-fit, minmax(180px, 1fr));
// 	grid-auto-flow: dense;
// 	.date {
// 		color: #03a688;
// 	}
// 	.author {
// 		color: #6e7381;
// 	}
// 	.title {
// 		color: #262626;
// 		font-weight: 700;
// 		font-family: 'Lora', sans-serif;
// 	}
// 	.article:nth-child(1) {
// 		grid-column: span 2;
// 		img {
// 			object-fit: cover;
// 			height: 100%;
// 			width: 100%;
// 			max-height: 300px;
// 			border-radius: 0.3em;
// 			-webkit-border-radius: 0.3em;
// 		}
// 	}
// 	.article:nth-child(2),
// 	.article:nth-child(3),
// 	.article:nth-child(4),
// 	.article:nth-child(5) {
// 		grid-column: -3 / -1;
// 		margin: 1em 0.5em;
// 		.excerpt {
// 			display: none;
// 		}
// 		img {
// 			object-fit: cover;
// 			height: 10em;
// 			width: 100%;
// 			border-radius: 0.3em;
// 			-webkit-border-radius: 0.3em;
// 		}
// 	}
// }
</style>
