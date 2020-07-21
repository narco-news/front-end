<template>
	<div>
		<!-- <div class="pattern-cross-dots-md text-black h-10">
			<div
				style="background-color: #f2f2f2;"
				class="text-lg font-bold uppercase inline-block m-2"
			>
				{{ $t('message.latest') }}
			</div>
		</div> -->
		<div class="mt-4 lg:mx-56 md:mx-24">
			<article v-for="post in posts" :key="post.id" class="post">
				<div class="row">
					<div class="md-11 lg-10 mx-auto">
						<div class="post-content mx-4 hvr-float">
							<div
								id="postBox"
								class="grid grid-cols-5 md:grid-cols-6 gap-2 rounded-lg h-56 md:h-40 shadow-sm hover:shadow-md"
							>
								<div class="col-span-2 md:col-span-4 mt-2">
									<div
										v-if="post.tags.length > 0"
										class="post-tags flex flex-col md:flex-row mx-2"
									>
										<ul class="list inline ml-2">
											<li v-for="tag in post.tags.slice(0, 1)" :key="tag.id">
												<nuxt-link
													:to="{path: '/tag/' + tag.slug}"
													:title="tag.name"
													class="button tag-button"
													>{{ tag.name.replace(/^(#)/, '') }}</nuxt-link
												>
											</li>
										</ul>
										<div
											style="color: #0d0d0d;"
											class="flex flex-row flex-no-wrap whitespace-no-wrap"
										>
											<div class="">
												<!-- <div class="post-author-info-description">Author</div> -->
												<div class="font-bold ml-2 mt-2 md:mt-0 md:mr-4">
													<nuxt-link
														:to="{
															path: '/author/' + post.primary_author.slug
														}"
														:title="post.primary_author.name"
														>{{ post.primary_author.name }}</nuxt-link
													>
												</div>
											</div>
										</div>
										<div
											style="font-family: 'IBM Plex Sans';"
											class="meta font-extrabold flex flex-col md:flex-row md:gap-4"
										>
											<span
												class="text-sm md:text-sm uppercase whitespace-no-wrap"
												>{{ post.published_at | published }}</span
											>
										</div>
									</div>
									<!-- TITLE -->
									<div class="md:m-4">
										<h1
											v-if="post.title"
											class="post-title text-lg md:text-2xl lg:text-2xl antialiased flex flex-row flex-wrap"
										>
											<nuxt-link
												:to="{path: '/' + post.slug}"
												:title="post.title"
												>{{ post.title }}</nuxt-link
											>
										</h1>
									</div>
								</div>
								<div
									class="col-span-3 md:col-span-2 overflow-hidden flex flex-row justify-end"
								>
									<div v-if="post.feature_image" class="">
										<nuxt-link :to="{path: '/' + post.slug}">
											<img
												class="object-cover rounded-tr-lg rounded-br-lg h-56 md:h-40"
												:src="post.feature_image"
												:alt="post.title"
											/>
										</nuxt-link>
									</div>
								</div>
							</div>

							<div
								style="color: #0d0d0d;"
								class="font-bold pattern-dots-md p-4"
							>
								<div class="font-bold ex p-4">
									<div class="text-sm md:text-lg">
										<p v-if="post.custom_excerpt">
											{{ post.custom_excerpt }}...
											<nuxt-link
												class="post-read-more"
												:to="{path: '/' + post.slug}"
												title="Read more"
												>read more</nuxt-link
											>
										</p>
										<p v-else-if="post.excerpt && !post.custom_excerpt">
											{{ post.excerpt }}...
											<nuxt-link
												class="post-read-more"
												:to="{path: '/' + post.slug}"
												title="Read more"
												>read more</nuxt-link
											>
										</p>
									</div>
								</div>
								<ul
									class="flex flex-row flex-no-wrap justify-center md:justify-end gap-10 mt-6"
								>
									<li
										style="background-color: #f2f2f2;"
										class="flex flex-row flex-no-wrap"
									>
										<span
											v-if="post.updated_at !== post.published_at"
											style="color: #0d0d0d;"
											class="text-xs updated_at p-2"
										>
											Updated
											<span class="">{{ post.updated_at | edited }}</span>
											ago</span
										>
									</li>
									<li
										style="background-color: #f2f2f2;"
										class="flex flex-row flex-no-wrap p-1"
									>
										<img
											style="width: 20px; height: 20px;"
											src="~/assets/icons/clock.svg"
										/>
										<span
											><reading-time
												:content="post.html"
												style="color: #0d0d0d;"
												class="text-sm ml-2"
										/></span>
									</li>
								</ul>
							</div>
							<div
								v-if="post.tags.length > 0"
								class="post-tags flex flex-row justify-end"
							>
								<ul class="list inline">
									<li v-for="tag in post.tags.slice(1)" :key="tag.id">
										<nuxt-link
											:to="{path: '/tag/' + tag.slug}"
											:title="tag.name"
											class="button tag-button tag-extras hvr-sink font-bold font-mono"
											>{{ tag.name.replace(/^(#)/, '') }}</nuxt-link
										>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</article>
		</div>
		<!--  -->
		<div class="row">
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
	name: 'Featured',

	components: {
		'reading-time': ReadingTime
	},

	filters: {
		published(date) {
			return dayjs(date).format('MMMM, Do, YYYY');
		},
		edited(date) {
			return dayjs(date).fromNow(date);
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
					latest: 'Latest Articles'
				}
			},
			es: {
				message: {
					latest: 'Los ultimos articulos'
				}
			}
		}
	}
};
</script>

<style lang="scss">
.ex {
	background-color: #f2f2f2;
	font-family: 'Martel', sans-serif;
	line-height: 1.2;
}
.meta {
	width: 120px;
	line-height: 1;
	margin: 5px;
	color: #0d0d0d;
	box-shadow: inset 0 -8px 0 0 #f2cb05;
}
.post-title {
	font-family: 'IBM Plex Sans', sans;
	font-weight: 700;
}
.featured-badge {
	background-color: #ecf543;
	padding-top: 10px;
	line-height: 1.4;
	color: #1494d8;
}
#postBox {
	background-color: #dadada;
	&:hover {
		background-color: #c2c2c2;
	}
}
</style>
