<template>
	<div id="larticles" class="my-2 mr-2 ml-3">
		<div class="flex flex-row flex-no-wrap">
			<h1 class="text-sm md:text-md lg:text-2xl">{{ $t('message.latest') }}</h1>
			<div class="dot rounded-full h-1 w-1 float-right"></div>
		</div>
		<div class="text-xs md:text-sm p-1">
			<ol
				v-for="article in $options.articles.article.slice(0, 4)"
				:key="article.id"
			>
				<n-link :to="article.slug">
					<li>
						<span class="text-red-400 date font-extrabold float-left"
							>{{ article.date }} »
						</span>
						<p class="font-bold underline title">{{ article.title }}</p>
					</li>
				</n-link>
			</ol>
		</div>
	</div>
</template>

<script>
import LatestArticles from '~/assets/latestArticles.json';
export default {
	name: 'LAList',
	articles: LatestArticles,
	i18n: {
		messages: {
			en: {
				message: {
					latest: 'Latest'
				}
			},
			es: {
				message: {
					latest: 'Último'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.title {
	font-family: 'Martel', sans-serif;
}
.date {
	font-family: 'Courier New', Courier, monospace;
	font-size: 10px;
	padding-right: 4px;
}
#larticles {
	background-color: #f2f2f2;
	color: #0d0d0d;

	line-height: 1.5;
}
h1 {
	font-family: 'IBM Plex Sans', sans;
	font-weight: 700;
	text-transform: uppercase;
	padding: 2px 0;
}

@keyframes blink {
	0% {
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}

.dot {
	animation: blink 3s infinite;
	background-color: #f24405;
	margin: 10px 7px;
}
</style>
