<template>
	<div class="list mt-4 mx-8 md:mx-12">
		<article v-for="post in posts.slice(8, 14)" :key="post.id" class="article">
			<ul>
				<li class="mb-2">
					<div class="grid grid-cols-1 lg:flex flex-row flex-no-wrap">
						<div v-if="post.tags.length > 0">
							<div v-for="tag in post.tags.slice(0, 1)" :key="tag.id">
								<nuxt-link
									:to="{path: '/tag/' + tag.slug}"
									:title="tag.name"
									class="tags text-gray-600 uppercase text-xs md:text-md"
									>{{ tag.name.replace(/^(#)/, '') }}</nuxt-link
								>
							</div>
						</div>
						<span
							class="published_at text-xs md:text-sm whitespace-no-wrap lg:ml-3"
							>{{ post.published_at | dayjs }}</span
						>
					</div>
					<h1 v-if="post.title" class="title capitalize md:text-xl lg:text-3xl">
						<nuxt-link
							:to="{path: '/' + post.slug}"
							:title="post.title"
							class="hvr-forward"
							>{{ post.title }}
						</nuxt-link>
						<!-- <hr style="border-color: #e5e5e5;" class="my-2" width="85%" /> -->
					</h1>
				</li>
			</ul>
		</article>
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
.published_at {
	color: #03a688;
	font-weight: 600;
}
.tags {
	font-weight: 500;
}
.latest {
	font-family: 'Lora', sans-serif;
	font-weight: 700;
}
.list {
	li {
		color: #0d0d0d;
	}
}
.article {
	.title {
		line-height: 1.1;
		font-family: 'Lora', sans-serif;
		font-weight: 600;
	}
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
</style>
