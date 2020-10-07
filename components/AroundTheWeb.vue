<template>
	<div>
		<h1 class="flex flex-row justify-end mr-2 text-xs">
			{{ $t('message.aroundtheweb') }}
		</h1>
		<div class="box h-8 py-1">
			<client-only>
				<dynamic-marquee
					direction="row"
					:speed="speed"
					:reverse="true"
					:repeat="true"
				>
					<ul id="articles">
						<li
							v-for="article in $options.articles.article"
							:key="article.id"
							class="whitespace-no-wrap"
						>
							<a :href="article.url" target="_blank">
								<span class="text-md underline capitalize">
									<img :src="article.favicon" class="inline h-5 mr-4 ml-6" />
									{{ article.title }}
								</span>
							</a>
						</li>
					</ul>
				</dynamic-marquee>
			</client-only>
		</div>
	</div>
</template>

<script>
import Articles from '~/assets/atw.json';
export default {
	articles: Articles,
	data() {
		return {
			margin: 40,
			speed: {
				type: 'pps',
				number: 70
			}
		};
	},
	i18n: {
		messages: {
			en: {
				message: {
					aroundtheweb: 'Around the web'
				}
			},
			es: {
				message: {
					aroundtheweb: 'En la red'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
ul#articles li {
	display: inline;
	font-family: 'EB Garamond', sans-serif;
}
li:nth-child(8) {
	margin-right: 5em;
}
li:nth-child(1) {
	margin-left: 5em;
}
</style>
