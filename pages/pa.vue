<template>
	<div class="feeds m-4">
		<p class="intro my-2 text-sm">{{ $t('message.intro') }}</p>
		<h1 class="text-xl font-bold underline mb-2">
			{{ $t('message.spanishblogs') }}
		</h1>
		<div class="feeds-wrapper grid grid-cols-2 md:grid-cols-3">
			<LongFeed
				feedTitle="El Blog del Narco"
				feedUrl="https://www.blog-del-narco.com.mx/feeds/posts/default"
				class="mb-4"
			/>
			<LongFeed
				feedTitle="El Blog del Narco 2"
				feedUrl="https://politepol.com/fd/Gvy978u4mFrE"
				class="mb-4"
			/>
			<LongFeed
				feedTitle="Valor por Tamaulipas"
				feedUrl="https://politepol.com/fd/IwktcglgqukT"
				class="mb-4"
			/>
			<LongFeed
				feedTitle="Historias del Narco"
				feedUrl="https://narcobloggermx.blogspot.com/feeds/posts/default"
				class="mb-4"
			/>
			<LongFeed
				feedTitle="Narco En Mexico"
				feedUrl="http://www.narcoenmexico.com/feeds/posts/default"
				class="mb-4"
			/>
			<LongFeed
				feedTitle="Infobae"
				feedUrl="https://politepol.com/fd/daPnDbtuFfIx"
				class="mb-4"
			/>
		</div>
		<h1 class="text-xl font-bold underline mb-2">
			{{ $t('message.english') }}
		</h1>
		<div class="feeds-wrapper grid grid-cols-2 md:grid-cols-3">
			<LongFeed
				feedTitle="Borderland Beat"
				feedUrl="http://www.borderlandbeat.com/feeds/posts/default"
				class="mb-4"
			/>
			<LongFeed
				feedTitle="Breitbart"
				feedUrl="https://politepol.com/fd/sB6eoKsPo3Oq"
				class="mb-4"
			/>
			<LongFeed
				feedTitle="Border Report"
				feedUrl="https://www.borderreport.com/feed/"
				class="mb-4"
			/>
			<LongFeed
				feedTitle="InSight Crime"
				feedUrl="https://www.insightcrime.org/category/news/feed/"
				class="mb-4"
			/>
			<LongFeed
				feedTitle="AP Mexico"
				feedUrl="https://politepol.com/fd/alizJaQpFYpJ"
				class="mb-4"
			/>
			<LongFeed
				feedTitle="NYT Americas"
				feedUrl="https://politepol.com/fd/9u1Yh1m9wVId"
				class="mb-4"
			/>
		</div>
	</div>
</template>

<script>
import LongFeed from '~/components/LongFeed';

export default {
	name: 'Feeds',
	components: {
		LongFeed
	},
	i18n: {
		messages: {
			en: {
				message: {
					intro:
						"This page is still under development. Some feeds might not always load and depending on how I'm scrapping from the source, the amount of articles per source will vary. They will all automatically update when a new article is published.",
					spanishblogs: 'Spanish Blogs',
					english: 'English Press',
					mexicopress: 'Mexico Press'
				}
			},
			es: {
				message: {
					intro:
						'Esta página está todavía en desarrollo. Algunas fuentes no siempre se cargan y, dependiendo de cómo esté desechando la fuente, la cantidad de artículos por fuente variará. Todos se actualizarán automáticamente cuando se publique un nuevo artículo.',
					spanishblogs: 'Blogs en Español',
					english: 'Prensa Inglesa',
					mexicopress: 'Prensa México'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.intro {
	color: #f26457;
}
.feeds {
	.feeds-wrapper {
		padding: 0em;
		div {
			margin: 1em 0.5em;
		}
	}
}
</style>
