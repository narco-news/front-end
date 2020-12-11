<template>
	<div class="my-2 md:my-0">
		<article v-for="post in posts.slice(7, 16)" :key="post.id" class="article">
			<nuxt-link :to="localePath({path: '/' + post.slug})" class="md:hidden">
				<div class="overflow-hidden img-wrap">
					<img :src="post.feature_image" :alt="post.title" class="hvr-grow" />
				</div>
			</nuxt-link>
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
									>{{ tag.name.replace(/^(#)/, '') }}</nuxt-link
								>
							</div>
							<div v-for="tag in post.tags.slice(1, 2)" :key="tag.id">
								<div v-if="tag.slug != 'hash-es'">
									<nuxt-link
										:to="{path: '/tag/' + tag.slug}"
										:title="tag.name"
										class="tags text-xs uppercase whitespace-no-wrap"
										>•&nbsp;&nbsp;{{ tag.name.replace(/^(#)/, '') }}</nuxt-link
									>
								</div>
							</div>
						</div>
						<span
							class="published_at text-xs md:text-sm whitespace-no-wrap sub-gray"
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
					<div class="excerpt md:hidden text-sm mt-2 mb-1 ex-gray">
						<p v-if="post.custom_excerpt">{{ post.custom_excerpt }}</p>
						<p v-else-if="post.excerpt && !post.custom_excerpt">
							{{ post.excerpt }}
						</p>
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
				</li>
			</ul>
		</article>
	</div>
</template>

<script>
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);

dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
	relativeTime: {
		future: 'in %s',
		past: '%s ago',
		s: 'a few seconds',
		m: 'a minute',
		mm: '%d minutes',
		h: 'an hour',
		hh: '%d hours',
		d: 'a day',
		dd: '%d days',
		M: '%d days',
		MM: '%d months',
		y: 'a year',
		yy: '%d years'
	}
});

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
	border-radius: 5px;
	-webkit-border-radius: 5px;
}
img {
	max-height: 115px;
	width: 100%;
	object-fit: cover;
	@media (max-width: 375px) {
		max-height: 160px;
	}
}
.excerpt {
	line-height: 1.2;
}
.tags {
	color: #03a688;
}
.published_at {
	font-weight: 600;
}
.author {
	margin-bottom: 1em;
}
.article {
	margin-bottom: 0.5em;
	border-bottom: 1px solid #e2e8f0;
	&:last-child {
		border-bottom: 0px;
	}
	.title {
		font-family: 'Source Serif Pro', serif;
		font-weight: 500;
		letter-spacing: 0.6px;
		line-height: 1.1;
	}
}
</style>