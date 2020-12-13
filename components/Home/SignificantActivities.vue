<template>
	<div>
		<div class="flex flex-row flex-no-wrap items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="#1caf94"
				width="20"
				height="20"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
				/>
			</svg>
			<span class="uppercase ml-2 font-semibold text-green-400">{{
				$t('message.sigact')
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
			to="tag/significant-activity"
			title="More articles"
			class="bg-green-400 hover:bg-green-500 text-white p-1 px-2 text-xs font-semibold rounded-md"
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
					sigact: 'Significant Activities'
				}
			},
			es: {
				message: {
					analysis: 'Actividades significativas'
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
