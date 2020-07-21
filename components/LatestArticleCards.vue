<template>
	<div class="h-56">
		<client-only>
			<dynamic-marquee
				direction="row"
				:speed="speed"
				:repeatMargin="margin"
				:repeat="true"
				:reverse="true"
			>
				<div class="flex flex-row">
					<ol
						v-for="article in $options.articles.article"
						:key="article.id"
						class="flex flex-row"
					>
						<li class="w-48 m-4">
							<n-link :to="article.slug">
								<div class="bg-white rounded-md shadow-md h-48">
									<div class="object-cover">
										<img
											:src="article.img"
											class="rounded-tl-md rounded-tr-md h-24 w-48"
										/>
									</div>
									<p
										style="font-family: 'IBM Plex Sans"
										class="grid grid-col-1 p-2"
									>
										<span style="color: #f24405;" class="text-xs uppercase">
											{{ article.date }}
										</span>
										<span style="line-height: 1;" class="font-bold text-lg">
											{{ article.title }}
										</span>
									</p>
								</div>
							</n-link>
						</li>
					</ol>
				</div>
			</dynamic-marquee>
		</client-only>
	</div>
</template>

<script>
import LatestArticles from '~/assets/latestArticles.json';
export default {
	articles: LatestArticles,
	name: 'LatestArticleCards',
	data() {
		return {
			speed: {
				number: 50,
				type: 'pps'
			},
			margin: 30
		};
	},
	i18n: {
		messages: {
			en: {
				message: {
					latest: 'Latest Articles'
				}
			},
			es: {
				message: {
					latest: 'Los últimos artículos'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
h1 {
	font-family: 'Martel', sans-serif;
	font-family: 600;
}
#hor-list {
	display: flex;
	flex-direction: row;
}
</style>
