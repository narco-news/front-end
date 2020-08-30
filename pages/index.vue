<template>
	<div class="h-full lg:mx-12">
		<HomeArticles />
		<FeaturedArticles />
		<hr style="border-color: #e5e5e5;" class="my-6 mx-auto" width="90%" />
		<Headlines />
		<hr style="border-color: #e5e5e5;" class="my-6 mx-auto" width="90%" />
		<TagsList />
		<Focus />
		<FAQ />
		<SitAware />
		<Popup />
	</div>
</template>

<script>
import HomeArticles from '~/components/Home/HomeArticles';
import FeaturedArticles from '~/components/Home/FeaturedArticles';
import Headlines from '~/components/Home/Headlines';
import TagsList from '~/components/TagsList';
import SitAware from '~/components/Home/SitAware';
import Focus from '~/components/Home/Focus';
import FAQ from '~/components/Home/FAQ';
import Popup from '~/components/Home/Popup';

export default {
	layout: 'default',
	components: {
		HomeArticles,
		FeaturedArticles,
		Headlines,
		TagsList,
		SitAware,
		Focus,
		FAQ,
		Popup
	},
	async fetch({error, params, payload, store}) {
		if (payload) {
			store.commit('setPostsIndex', payload);
		} else {
			let pageNumber = 1;
			if (params.pageNumber) {
				pageNumber = params.pageNumber;
			}

			try {
				await store.dispatch('getPostsIndex', {
					filter: '',
					pageNumber
				});
			} catch (err) {
				error({
					statusCode: 404,
					message: err.message
				});
			}
		}
	}
};
</script>

<style lang="scss" scoped></style>
