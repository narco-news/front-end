<template>
	<div>
		<div
			style="color: #3a656a;"
			class="rounded bg-white overflow-hidden shadow-md m-4"
		>
			<!-- <div
				style="font-family: 'Patua One', cursive;"
				class="flex justify-end lg:justify-start text-md m-4 uppercase"
			>
				Michoacán Interactive Map
			</div> -->
			<div id="map" class="">
				<no-ssr>
					<MglMap
						:accessToken="token"
						:mapStyle="mapStyle"
						:center="center"
						:zoom="zoom"
						@load="onMapLoaded"
					/>
				</no-ssr>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Map of Guanajuato, México',
			pageImage: '/assets/images/guana-map.png',
			token: process.env.accessToken,
			mapStyle: 'mapbox://styles/mapbox/streets-v11', // your map style
			center: [-101.1617, 20.917],
			zoom: 8
		};
	},

	created() {
		this.map = null;
	},
	methods: {
		onMapLoaded(event) {
			// in component
			this.map = event.map;
			// or just to store if you want have access from other components
			this.$store.map = event.map;
		}
	},
	head() {
		return {
			title: this.title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Interactive map of Guanajuato, México'
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: 'Interactive map of Guanajuato, México'
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: this.pageImage
				},
				{
					hid: 'og:site_name',
					property: 'og:site_name',
					content: this.title
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: this.title
				},
				{
					hid: 'twitter:card',
					property: 'twitter:card',
					content: 'summary_large_image'
				},
				{
					hid: 'twitter:title',
					property: 'twitter:title',
					content: 'Interactive map of Guanajuato, México'
				},
				{
					hid: 'twitter:image',
					property: 'twitter:image',
					content: 'https://narco.news/images/guana-map.png'
				}
			]
		};
	}
};
</script>

<style lang="css">
@import 'https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css';
#map {
	height: 550px;
}
</style>
