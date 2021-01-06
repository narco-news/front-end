<template>
	<div>
		<div class="flex flex-row flex-no-wrap items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="#07ac77"
				width="20"
				height="20"
			>
				<path
					fill-rule="evenodd"
					d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
					clip-rule="evenodd"
				/>
			</svg>
			<span class="uppercase ml-2 font-semibold text-teal-700">{{
				$t('message.atw')
			}}</span>
		</div>
		<div class="articles mt-3">
			<article v-for="post in posts.slice(0, 8)" :key="post.id" class="article">
				<div class="date whitespace-no-wrap text-sm text-gray-600 select-none">
					{{ post.published_at | dayjs }}
				</div>
				<div>
					<h2
						class="capitalize text-md text-gray-800 font-semibold font-serif hover:underline hvr-forward"
					>
						<nuxt-link
							:to="localePath({path: '/' + post.slug})"
							:title="post.title"
							>{{ post.title }}
						</nuxt-link>
					</h2>
				</div>
			</article>
		</div>
		<n-link
			to="tag/around-the-web"
			title="More articles"
			class="bg-gray-100 hover:bg-gray-200 p-1 px-2 text-xs rounded-md"
			>More</n-link
		>
	</div>
</template>

<script>
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);

export default {
	name: 'AroundTheWeb',

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
					atw: 'Around the web'
				}
			},
			es: {
				message: {
					atw: 'Alrededor de la red'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
article {
	margin-bottom: 0.5em;
}
</style>
