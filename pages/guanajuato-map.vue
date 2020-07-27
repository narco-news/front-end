<template>
	<div>
		<div
			style="color: #3a656a;"
			class="rounded bg-white overflow-hidden shadow-md m-4"
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
							<div
								slot="marker"
								style="background-color: #ff5e70;"
								class="rounded-full dot"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="30"
									width="30"
									fill="#fff"
									viewBox="0 0 24 24"
								>
									<g data-name="Layer 2">
										<g data-name="alert-circle">
											<rect width="24" height="24" opacity="0" />
											<path
												d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"
											/>
											<circle cx="12" cy="16" r="1" />
											<path
												d="M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z"
											/>
										</g>
									</g>
								</svg>
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
		<!-- <div class="m-4">
			<div class="bg-white rounded h-64 w-full p-6">
				<ol class="list-decimal">
					<li @click="event(marker.togglePopup)">Event 1</li>
					<li>Event 2</li>
					<li>Event 3</li>
				</ol>
			</div>
		</div> -->
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
