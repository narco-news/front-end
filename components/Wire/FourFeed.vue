<template>
	<div class="h-full m-2 overflow-y-hidden">
		<div class="grid grid-cols-2 md:grid-cols-3 feed-cols">
			<Feed
				feedTitle="El Blog del Narco"
				feedUrl="https://www.blog-del-narco.com.mx/feeds/posts/default"
				class="m-1 my-4"
			/>
			<Feed
				feedTitle="El Blog del Narco 2"
				feedUrl="https://politepol.com/fd/Gvy978u4mFrE"
				class="m-1 my-4"
			/>
			<Feed
				feedTitle="Historias del Narco"
				feedUrl="https://narcobloggermx.blogspot.com/feeds/posts/default"
				class="m-1 my-4"
			/>
			<Feed
				feedTitle="Narco En Mexico"
				feedUrl="http://www.narcoenmexico.com/feeds/posts/default"
				class="m-1 my-4"
			/>
			<Feed
				feedTitle="Valor por Tamaulipas"
				feedUrl="https://politepol.com/fd/IwktcglgqukT"
				class="m-1 my-4"
			/>
			<Feed
				feedTitle="Infobae"
				feedUrl="https://politepol.com/fd/daPnDbtuFfIx"
				class="m-1 my-4"
			/>
		</div>
	</div>
</template>

<script>
import Feed from '~/components/Feed';
export default {
	name: 'FourFeed',
	components: {
		Feed
	}
};
</script>

<style lang="scss" scoped></style>
