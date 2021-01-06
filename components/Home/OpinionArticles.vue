<template>
	<div>
		<div class="border-b-2 flex flex-row justify-between items-center mb-4">
			<h2 class="text-2xl lg:text-3xl font-semibold px-4">
				{{ $t('message.opinion') }}
			</h2>
			<div
				class="bg-shamrock-400 hover:bg-shamrock-500 px-2 py-1 rounded-md text-white text-xs font-semibold h-full mr-2"
			>
				<n-link to="/tag/opinion">More</n-link>
			</div>
		</div>
		<div class="articles">
			<article v-for="post in posts.slice(0, 6)" :key="post.id" class="article">
				<div v-if="post.feature_image">
					<div>
						<div class="date whitespace-no-wrap text-sm text-shamrock-400 mr-1">
							{{ post.published_at | dayjs }}
						</div>
						<div class="grid grid-cols-4">
							<div class="col-span-3">
								<h2 v-if="post.title" class="title capitalize text-lg">
									<nuxt-link
										:to="localePath({path: '/' + post.slug})"
										:title="post.title"
										>{{ post.title }}
									</nuxt-link>
								</h2>
							</div>
							<div class="col-span-1">
								<div class="flex flex-col items-center">
									<div class="inline-block">
										<nuxt-link
											:to="{path: '/author/' + post.primary_author.slug}"
											:title="post.primary_author.name"
										>
											<img
												v-if="post.primary_author.profile_image"
												:src="post.primary_author.profile_image"
												:alt="post.primary_author.name"
												class="rounded-full w-10 h-10"
											/>
										</nuxt-link>
									</div>
									<div class="author text-sm md:text-md sub-gray">
										<nuxt-link
											:to="{path: '/author/' + post.primary_author.slug}"
											:title="post.primary_author.name"
											class="uppercase whitespace-no-wrap"
											>{{ post.primary_author.name }}</nuxt-link
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
</template>

<script>
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);

export default {
	name: 'LatestArticles',

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
	},
	i18n: {
		messages: {
			en: {
				message: {
					opinion: 'Opinion'
				}
			},
			es: {
				message: {
					opinion: 'Opinión'
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
		padding: 0 0.5em;
		margin-bottom: 10px;
		.title {
			@apply font-serif;
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

	.article:nth-child(1),
	.article:nth-child(2),
	.article:nth-child(3),
	.article:nth-child(4),
	.article:nth-child(5),
	.article:nth-child(6) {
		grid-column: span 3;
		@media (min-width: 415px) {
			grid-column: span 2;
		}
		@media (min-width: 768px) {
			grid-column: span 1;
		}
		@media (min-width: 900px) {
			grid-column: span 2;
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
