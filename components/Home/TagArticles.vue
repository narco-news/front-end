<template>
	<div>
		<h2
			class="text-3xl lg:text-4xl font-bold mb-4 px-4 border-b-2 border-green-300"
		>
			{{ title }}
		</h2>
		<div class="articles border-b-2 mb-6">
			<article v-for="post in posts.slice(0, 4)" :key="post.id" class="article">
				<div v-if="post.feature_image">
					<nuxt-link :to="localePath({path: '/' + post.slug})">
						<div class="overflow-hidden img-wrap">
							<img
								:src="post.feature_image"
								:alt="post.title"
								class="hvr-grow"
							/>
						</div>
					</nuxt-link>
					<div class="title-box">
						<div
							v-if="post.tags.length > 0"
							class="flex flex-row flex-wrap justify-between"
						>
							<div class="flex flex-row">
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
									<div v-if="tag.slug != 'hash-es'">
										<nuxt-link
											:to="{path: '/tag/' + tag.slug}"
											:title="tag.name"
											class="text-xs uppercase whitespace-no-wrap"
											>&nbsp;•&nbsp;&nbsp;{{ tag.name }}</nuxt-link
										>
									</div>
								</div>
							</div>
							<div class="flex flex-row flex-wrap items-center">
								<div class="date whitespace-no-wrap text-sm sub-gray mr-1">
									{{ post.published_at | dayjs }}
								</div>
								<div class="author text-sm md:text-md sub-gray">
									by
									<nuxt-link
										:to="{path: '/author/' + post.primary_author.slug}"
										:title="post.primary_author.name"
										class="font-bold uppercase underline"
										>{{ post.primary_author.name }}</nuxt-link
									>
								</div>
							</div>
						</div>
						<h2 v-if="post.title" class="title capitalize text-xl">
							<nuxt-link
								:to="localePath({path: '/' + post.slug})"
								:title="post.title"
								>{{ post.title }}
							</nuxt-link>
						</h2>
						<div class="excerpt ex-gray mb-2">
							<p v-if="post.custom_excerpt">{{ post.custom_excerpt }}</p>
							<p v-else-if="post.excerpt && !post.custom_excerpt">
								{{ post.excerpt }}
							</p>
						</div>
					</div>
				</div>
			</article>
		</div>
		<div class="flex justify-end items-center">
			<p class="text-md mr-4 uppercase">{{ $t('message.readMore') }}</p>
			<n-link
				to="tag/tamaulipas"
				alt="Tamaulipas section"
				title="Tamaulipas section"
				class="bg-green-400 text-gray-100 rounded-sm shadow-lg p-2 font-bold hover:bg-green-500"
			>
				Tamaulipas
			</n-link>
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
	name: 'TagArticles',

	components: {},

	filters: {
		dayjs(date) {
			return dayjs(date).format('MMMM D, YYYY');
		}
	},

	props: {
		posts: {
			type: Array,
			required: true
		},
		title: {
			type: String,
			default: 'Title'
		}
	},

	data() {
		return {
			blogUrl: process.env.blogUrl
		};
	},
	i18n: {
		messages: {
			en: {
				message: {
					readMore: 'Read More About'
				}
			},
			es: {
				message: {
					readMore: 'Lea más sobre'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.articles {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	grid-auto-flow: dense;
	grid-gap: 0 10px;
	.img-wrap {
		margin-bottom: 5px;
	}

	article {
		margin-bottom: 20px;
		.title {
			@apply text-2xl;
			font-family: 'Source Serif Pro', serif;
			font-weight: 700;
			letter-spacing: 0.6px;
			line-height: 1.1;
			padding: 5px 0;
			color: #262626;
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
			font-weight: 600;
		}
		.tags {
			color: #049372;
		}

		@media (min-width: 769px) {
			.title {
				font-size: 20px;
			}
		}
	}

	.article:nth-child(1) {
		grid-column: 1 / -1;
		@media (min-width: 769px) {
			grid-column: 1 / -1;
		}
	}

	.article:nth-child(4) {
		@media (min-width: 769px) {
			grid-column: -3 / -1;
		}
	}

	.article:nth-child(2),
	.article:nth-child(3),
	.article:nth-child(4),
	.article:nth-child(5),
	.article:nth-child(6),
	.article:nth-child(7),
	.article:nth-child(8),
	.article:nth-child(9),
	.article:nth-child(10),
	.article:nth-child(11),
	.article:nth-child(12),
	.article:nth-child(13) {
		grid-column: span 1;
		.excerpt {
			display: none;
		}
		img {
			max-height: 115px;
			width: 100%;
			object-fit: cover;
			@media (max-width: 375px) {
				max-height: 160px;
			}
		}
		@media (min-width: 415px) {
			.excerpt {
				display: none;
			}
		}
	}

	.img-wrap {
		border-radius: 5px;
		-webkit-border-radius: 5px;
	}

	@media (max-width: 680px) {
		.articles {
			display: flex;
			flex-direction: column;
		}
	}
}
</style>
