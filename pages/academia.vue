<template>
	<div class="p-2 md:p-4 lg:p-8">
		<div class="grid grid-cols-1 md:grid-cols-4">
			<div class="col-span-1 md:col-span-1"><LatestPapers /></div>
			<div class="col-span-1 md:col-span-3"><ABooks /></div>
		</div>
		<ResearchPaper />
	</div>
</template>

<script>
import ABooks from '~/components/Academic/ABooks';
import LatestPapers from '~/components/Academic/LatestPapers';
import ResearchPaper from '~/components/ResearchPaper';

export default {
	components: {
		ABooks,
		LatestPapers,
		ResearchPaper
	},
	data() {
		return {
			twitter_description:
				'Collection of journals and books from the academic world.',
			twitter_title: 'narco.news',
			feature_image: 'https://narco.news/images/booklist.png',
			title: 'Academic resources'
		};
	},
	head() {
		return {
			title: 'narco.news - Academic Resources',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.twitter_description
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.twitter_description
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: this.feature_image
				},
				{
					hid: 'og:site_name',
					property: 'og:site_name',
					content: this.twitter_title
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: this.twitter_title
				},
				{hid: 'og:url', property: 'og:url', content: process.env.blogUrl},
				{
					hid: 'apple-mobile-web-app-title',
					name: 'apple-mobile-web-app-title',
					content: this.twitter_title
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: this.twitter_description
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: this.feature_image
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: this.twitter_title
				}
			]
		};
	}
};
</script>

<style lang="scss" scope>
.updates {
	background-color: #f9c89e;
	border: 1px solid #f2913d;
}

.vue-tablist {
	list-style: none;
	display: flex;
	padding-left: 0;
	border-bottom: 1px solid #e2e2e2;
}

.vue-tab {
	padding: 5px 10px;
	margin-right: 5px;
	margin-left: 10px;
	cursor: pointer;
	user-select: none;
	// border: 1px solid transparent;
	// border-bottom-color: #e2e2e2;
	border-radius: 5px 5px 0 0;
	background-color: #03a688;
	color: #f2f2f2;
	position: relative;
	bottom: -1px;
}

.vue-tab[aria-selected='true'] {
	background-color: lighten(#03a688, 5%);
	// border-color: #e2e2e2;
	// border-bottom-color: transparent;
}

.vue-tab[aria-disabled='true'] {
	cursor: not-allowed;
	color: #999;
}
</style>
