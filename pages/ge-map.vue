<template>
	<div class="grid grid-cols-4">
		<div class="col-span-1">
			<h1 class="uppercase font-mono p-2">Incidents</h1>
			<div class="incident hvr-sink" @click="onClick">
				<h1>Incident #1</h1>
				<p>
					This is a description of this incident. You can find information and
					links here.
				</p>
			</div>
		</div>
		<div
			style="color: #3a656a;"
			class="col-span-3 rounded bg-white overflow-hidden shadow-md m-4"
		>
			<div id="map" class="">
				<no-ssr>
					<MglMap
						:accessToken="token"
						:mapStyle="mapStyle"
						:center="center"
						:zoom="zoom"
						@load="onMapLoaded"
					>
						<MglMarker :coordinates="coordinates" anchor="bottom">
							<div slot="marker">
								<img src="~/assets/icons/map-pin-black.svg" class="h-8" />
							</div>
							<MglPopup>
								<div class="p-4">
									Hello I am a popup!
								</div>
							</MglPopup></MglMarker
						>
					</MglMap>
				</no-ssr>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Map of Guanajuato',
			pageImage: '/assets/images/guana-map.png',
			token: process.env.accessToken,
			mapStyle: 'mapbox://styles/mapbox/streets-v11', // your map style
			center: [-101.1617, 20.917],
			zoom: 8,
			coordinates: [-101.35628, 20.67675]
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
		},
		onClick() {}
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

<style lang="scss">
@import url('https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css');
.incident {
	margin: 1em 1em;
	padding: 0.5em 0.5em;
	border: 2px dashed black;
	p {
		font-size: 12px;
	}
	h1 {
		font-size: 18px;
	}
}

#map {
	height: 550px;
}

@keyframes blink {
	0% {
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}

.dot {
	animation: blink 2s infinite;
}
</style>
