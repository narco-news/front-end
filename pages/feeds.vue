<template>
	<div class="feeds m-4">
		<h1 class="text-xl font-bold underline mb-2">
			Spanish Blogs
		</h1>
		<div
			class="feeds-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
		>
			<Feed
				feedTitle="El Blog del Narco"
				feedUrl="https://www.blog-del-narco.com.mx/feeds/posts/default"
				class="mb-4"
			/>
			<Feed
				feedTitle="El Blog del Narco 2"
				feedUrl="https://politepol.com/fd/Gvy978u4mFrE"
				class="mb-4"
			/>
			<Feed
				feedTitle="Valor por Tamaulipas"
				feedUrl="https://www.blogger.com/feeds/7836566447402492737/posts/default"
				class="mb-4"
			/>
			<Feed
				feedTitle="Historias del Narco"
				feedUrl="https://narcobloggermx.blogspot.com/feeds/posts/default"
				class="mb-4"
			/>
			<Feed
				feedTitle="Narco En Mexico"
				feedUrl="http://www.narcoenmexico.com/feeds/posts/default"
				class="mb-4"
			/>
			<Feed
				feedTitle="Infobae"
				feedUrl="https://politepol.com/fd/daPnDbtuFfIx"
				class="mb-4"
			/>
		</div>
		<h1 class="text-xl font-bold underline mb-2">
			English
		</h1>
		<div
			class="feeds-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
		>
			<Feed
				feedTitle="Borderland Beat"
				feedUrl="http://www.borderlandbeat.com/feeds/posts/default"
				class="mb-4"
			/>
			<Feed
				feedTitle="Breitbart"
				feedUrl="https://politepol.com/fd/sB6eoKsPo3Oq"
				class="mb-4"
			/>
			<Feed
				feedTitle="Border Report"
				feedUrl="https://www.borderreport.com/feed/"
				class="mb-4"
			/>
			<Feed
				feedTitle="InSight Crime"
				feedUrl="https://www.insightcrime.org/category/news/feed/"
				class="mb-4"
			/>
		</div>
	</div>
</template>

<script>
import Feed from '~/components/Feed';

export default {
	name: 'Feeds',
	components: {
		Feed
	}
};
</script>

<style lang="scss" scoped>
.feeds {
	.feeds-wrapper {
		padding: 1em;
	}
}
</style>
