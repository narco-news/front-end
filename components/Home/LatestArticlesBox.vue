<template>
	<div>
		<div class="latest uppercase md:text-2xl">
			<div class="flex flex-row flex-no-wrap items-center gap-2">
				<div>Latest</div>
				<div class="blink bg-red-500 rounded-full h-2 w-2 mb-1"></div>
			</div>
		</div>
		<div class="ml-4 px-1">
			<ul
				v-for="article in $options.articles.article"
				:key="article.id"
				class="list-outside"
			>
				<li class="text-xs">{{ article.title }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Articles from '~/assets/latestA.json';
export default {
	name: 'LatestArticlesBox',
	articles: Articles
};
</script>

<style lang="scss" scoped>
.latest {
	font-family: 'Courier Prime', monospace;
	font-weight: 700;
}

ul li {
	list-style: square;
	line-height: 1.2;
	margin: 0 0 0.5em;
}

.blink {
	animation: blinker 2s step-start infinite;
}

@keyframes blinker {
	50% {
		opacity: 0;
	}
}
</style>
