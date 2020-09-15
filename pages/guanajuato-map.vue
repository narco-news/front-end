<template>
	<div id="map" class="mt-4 sm:mt-8 sm:mx-5 sm:mb-5"></div>
</template>

<script>
export default {
	name: 'GuanajuatoMap',
	data() {
		return {
			selectedMarker: null,
			markers: [],
			map: null
		};
	},
	// computed: {
	// 	incidents() {
	// 		return this.$store.state.incidents;
	// 	}
	// },
	// https://vuejs.org/v2/api/#activated
	activated() {
		if (!this.map || !this.map.loaded()) return;
		this.toggleMarker();
		this.scrollToBottom();
	},
	deactivated() {
		this.markers.forEach(marker => {
			const popup = marker.getPopup();
			if (popup.isOpen()) {
				marker.togglePopup();
			}
		});
	},
	mounted() {
		const mapboxgl = require('mapbox-gl');
		const geojson = {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: {
						'marker-color': '#ee1919',
						'marker-size': 'medium',
						'marker-symbol': 'police'
					},
					geometry: {
						type: 'Point',
						coordinates: [-101.18408203124999, 20.679044609010408]
					}
				},
				{
					type: 'Feature',
					properties: {
						'marker-color': '#2333e7',
						'marker-size': 'medium',
						'marker-symbol': ''
					},
					geometry: {
						type: 'Point',
						coordinates: [-101.5521240234375, 21.12549763660628]
					}
				},
				{
					type: 'Feature',
					properties: {
						'marker-color': '#12dc4d',
						'marker-size': 'medium',
						'marker-symbol': ''
					},
					geometry: {
						type: 'Point',
						coordinates: [-100.799560546875, 20.5967942442688]
					}
				}
			]
		};
		const bounds = [
			[-101.918758, 20.191622], // Southwest coordinates
			[-100.090473, 21.591358] // Northeast coordinates
		];

		this.map = new mapboxgl.Map({
			accessToken: process.env.accessToken,
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-101.266667, 21.016667],
			zoom: 0,
			pitch: 0,
			maxZoom: 17,
			maxBounds: bounds
		});

		geojson.features.forEach(marker => {
			// create a HTML element for each feature
			const el = document.createElement('div');
			el.className = 'marker';

			// make a marker for each feature and add to the map
			new mapboxgl.Marker(el)
				.setLngLat(marker.geometry.coordinates)
				.addTo(this.map);
		});

		this.map.addControl(new mapboxgl.NavigationControl());
		this.map.addControl(new mapboxgl.FullscreenControl());

		this.toggleMarker();
	},
	methods: {
		toggleMarker() {
			const street = this.$route.query.street;
			if (!street) return;
			const marker = this.markers.find(marker => marker.street === street);
			if (!marker) return;
			this.map.jumpTo({
				center: marker.getLngLat()
			});
			marker.togglePopup();
		}
	}
};
</script>

<style lang="postcss">
@import url('https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css');

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

#map {
	min-height: 75vh;
}

@screen md {
	#map {
		min-height: 85vh;
	}
}

.marker {
	background-image: url('/assets/icons/map-pin-red.svg');
	background-size: cover;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	cursor: pointer;
}
</style>
