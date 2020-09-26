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
	computed: {},
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

		this.map = new mapboxgl.Map({
			accessToken: process.env.accessToken,
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11?optimize=true', // your map style
			center: [-98.566667, 24.283333],
			zoom: 7,
			pitch: 0,
			maxZoom: 14,
			minZoom: 7
		});

		this.map.addControl(new mapboxgl.NavigationControl());
		this.map.addControl(new mapboxgl.FullscreenControl());

		// this.markers = new mapboxgl.Marker({})

		// 	.setLngLat([-101.194826, 20.585389])
		// 	.addTo(this.map)
		// 	.setPopup(
		// 		new mapboxgl.Popup().setHTML('<h1>Almost done testing ;)</h1>')
		// 	); // add popup;

		this.toggleMarker();
		this.scrollToBottom();
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
		},
		scrollToBottom() {
			if (!window) return;
			window.scrollTo({
				top: 75,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
};
</script>

<style lang="postcss" scoped>
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
	cursor: pointer;
}
</style>
