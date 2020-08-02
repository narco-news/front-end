<template>
	<div>
		<div class="latest uppercase md:text-2xl">
			<div class="flex flex-row flex-no-wrap items-center ml-2">
				<div>Latest</div>
				<div class="blink bg-red-500 rounded-full h-2 w-2 mb-1 ml-2"></div>
			</div>
		</div>
		<article v-for="post in posts.slice(1, 16)" :key="post.id">
			<div>
				<ul class="square ml-4 p-1">
					<li>
						<h1
							v-if="post.title"
							class="text-xs underline md:text-lg capitalize"
						>
							<nuxt-link
								:to="{path: '/' + post.slug}"
								:title="post.title"
								class="hvr-forward"
								>{{ post.title }}
							</nuxt-link>
						</h1>
						<span class="published_at">[{{ post.published_at | dayjs }}]</span>
					</li>
				</ul>
			</div>
		</article>
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
			return dayjs(date).format('D.M.YYYY');
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
.square {
	list-style-type: square;
	font-family: 'Lora';
	line-height: 1.2;
	font-weight: 600;
}
.published_at {
	font-size: 11px;
}

.blink {
	animation: blinker 2s step-start infinite;
	background-color: #f28177;
}
@keyframes blinker {
	50% {
		opacity: 0;
	}
}
.latest {
	font-family: 'Courier Prime', monospace;
	font-weight: 700;
}
</style>
