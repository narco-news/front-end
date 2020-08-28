<template>
	<div class="h-full">
		<HeaderImage />
		<Cats />
		<Features />
		<FAQ />
		<SitAware />
		<!-- <Popup /> -->
	</div>
</template>

<script>
import HeaderImage from '~/components/Home/HeaderImage';
import Cats from '~/components/Cats';
import SitAware from '~/components/Home/SitAware';
import Features from '~/components/Home/Features.vue';
import FAQ from '~/components/Home/FAQ.vue';
// import Popup from '~/components/Home/Popup';

export default {
	layout: 'default',
	components: {
		HeaderImage,
		Cats,
		SitAware,
		Features,
		FAQ
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
