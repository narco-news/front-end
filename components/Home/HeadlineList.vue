<template>
	<div class="list my-4 md:my-0">
		<article v-for="post in posts.slice(8, 14)" :key="post.id" class="article">
			<ul>
				<li class="mb-1">
					<div
						class="flex flex-col flex-wrap lg:flex-row lg:justify-between lg:items-center"
					>
						<div v-if="post.tags.length > 0" class="flex flex-row">
							<div v-for="tag in post.tags.slice(0, 1)" :key="tag.id">
								<nuxt-link
									:to="{path: '/tag/' + tag.slug}"
									:title="tag.name"
									class="tags text-xs uppercase mr-2 font-semibold whitespace-no-wrap"
									>{{ tag.name.replace(/^(#)/, '') }}&nbsp;&nbsp;•</nuxt-link
								>
							</div>
							<div v-for="tag in post.tags.slice(1, 2)" :key="tag.id">
								<nuxt-link
									:to="{path: '/tag/' + tag.slug}"
									:title="tag.name"
									class="tags text-xs uppercase whitespace-no-wrap"
									>{{ tag.name.replace(/^(#)/, '') }}</nuxt-link
								>
							</div>
						</div>
						<span
							class="published_at text-xs md:text-sm whitespace-no-wrap text-gray-600"
							>{{ post.published_at | dayjs }}</span
						>
					</div>
					<h2
						v-if="post.title"
						class="title capitalize md:text-lg lg:text-xl my-1"
					>
						<nuxt-link
							:to="{path: '/' + post.slug}"
							:title="post.title"
							class="hvr-forward font-bold"
							>{{ post.title }}
						</nuxt-link>
					</h2>
					<div class="excerpt text-sm mt-2 mb-1 text-gray-700">
						<p v-if="post.custom_excerpt">{{ post.custom_excerpt }}</p>
						<p v-else-if="post.excerpt && !post.custom_excerpt">
							{{ post.excerpt }}
						</p>
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
					<hr class="my-2 mx-auto" />
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
.excerpt {
	line-height: 1.2;
}
.tags {
	color: #03a688;
}
.published_at {
	font-weight: 600;
}
.list {
	li {
		color: #0d0d0d;
	}
}
.article {
	.title {
		line-height: 1.1;
		letter-spacing: 0.5px;
		font-family: 'Lora', sans-serif;
		font-weight: 500;
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
