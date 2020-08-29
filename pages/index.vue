<template>
	<div class="h-full">
		<HomeArticles />
		<hr style="border-color: #e5e5e5;" class="my-6 mx-auto" width="90%" />
		<Headlines />
		<hr style="border-color: #e5e5e5;" class="my-6 mx-auto" width="90%" />

		<Cats />
		<Features />
		<FAQ />
		<SitAware />
		<Popup />
	</div>
</template>

<script>
import HomeArticles from '~/components/Home/HomeArticles';
import Headlines from '~/components/Home/Headlines';
import Cats from '~/components/Cats';
import SitAware from '~/components/Home/SitAware';
import Features from '~/components/Home/Features.vue';
import FAQ from '~/components/Home/FAQ.vue';
import Popup from '~/components/Home/Popup';

export default {
	layout: 'default',
	components: {
		HomeArticles,
		Headlines,
		Cats,
		SitAware,
		Features,
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
