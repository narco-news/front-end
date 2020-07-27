<template>
	<div class="h-full">
		<HeaderImage />
		<Popup />
	</div>
</template>

<script>
import HeaderImage from '~/components/Home/HeaderImage';
import Popup from '~/components/Home/Popup';

export default {
	layout: 'default',
	components: {
		HeaderImage,
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
	},
	head() {
		return {
			title: 'Home',
			meta: [
				{
					hid: 'twitter:card',
					property: 'twitter:card',
					content: 'summary_large_image'
				},
				{
					hid: 'twitter:title',
					property: 'twitter:title',
					content: 'narco.news'
				},
				{
					hid: 'twitter:description',
					property: 'twitter:description',
					content: 'Open Source Drug War Investigations'
				},
				{
					hid: 'twitter:image',
					property: 'twitter:image',
					content: 'https://narco.news/images/opium.jpg'
				}
			]
		};
	}
};
</script>
