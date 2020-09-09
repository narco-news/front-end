<template>
	<div class="overflow-hidden rounded-md shadow-lg">
		<div id="map" class="h-screen">
			<mapbox
				:access-token="accessToken"
				:map-options="{
					style: 'mapbox://styles/mapbox/streets-v11',
					center: [-101.266667, 21.016667],
					zoom: 8,
					pitch: 0,
					minZoom: 8,
					maxZoom: 17
				}"
				:fullscreen-control="{
					show: true,
					position: 'top-left'
				}"
				@map-load="loaded"
			/>
		</div>
	</div>
</template>

<script>
import Mapbox from 'mapbox-gl-vue';

export default {
	components: {
		Mapbox
	},
	data() {
		return {
			accessToken: process.env.accessToken
		};
	},
	methods: {
		loaded(map) {
			map.addLayer({
				id: 'points',
				type: 'symbol',
				source: {
					type: 'geojson',
					data: {
						type: 'FeatureCollection',
						features: [
							{
								type: 'Feature',
								geometry: {
									type: 'Point',
									coordinates: [-100.7487, 20.4691]
								},
								properties: {
									title: 'Mapbox',
									description: 'Incident'
								}
							}
						]
					}
				}
			});
		}
	}
};
</script>

<style src="mapbox-gl/dist/mapbox-gl.css"></style>

<style lang="scss" scoped>
.spot__map {
	margin: 0 20px;
	width: auto;

	.mgl-map-wrapper {
		position: absolute;
	}
}

.mapboxgl-popup {
	will-change: auto;
	min-width: 200px;
	max-width: 300px;
}

.mapboxgl-popup-content {
	font-family: europa, sans-serif;
	@apply text-white bg-black rounded-none pt-16 px-6 pb-12 leading-snug text-lg;
}

.mapboxgl-popup-close-button {
	@apply text-3xl mt-2 mr-4;
}

.mapboxgl-popup-tip {
	border: 2rem solid transparent;
}

.mapboxgl-popup-anchor-top .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {
	border-bottom-color: black;
}

.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip {
	border-top-color: black;
}

.mapboxgl-popup-anchor-left .mapboxgl-popup-tip {
	border-right-color: black;
}

.mapboxgl-popup-anchor-right .mapboxgl-popup-tip {
	border-left-color: black;
}
</style>
