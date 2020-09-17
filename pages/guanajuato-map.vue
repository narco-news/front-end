<template>
	<div class="m-4">
		<div
			id="map"
			class="mt-4 sm:mt-8 sm:mx-5 sm:mb-5 rounded-md shadow-md"
		></div>
	</div>
</template>

<script>
export default {
	name: 'GuanajuatoMap',
	data() {
		return {
			map: null,
			markers: []
		};
	},
	computed: {
		incidents() {
			return this.$store.state.incidents;
		}
	},
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
		// const bounds = [
		// 	[-101.918758, 20.191622], // Southwest coordinates
		// 	[-100.090473, 21.591358] // Northeast coordinates
		// ];
		this.map = new mapboxgl.Map({
			accessToken: process.env.accessToken,
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-100.99, 20.51],
			zoom: 8,
			pitch: 0,
			minZoom: 8,
			maxZoom: 17
			// maxBounds: bounds
		});
		this.incidents.geojson.features.forEach(marker => {
			const LngLat = [
				marker.geometry.coordinates[0],
				marker.geometry.coordinates[1]
			];
			let popup = `<h2 class="text-xl mb-2 mt-2">${marker.properties.title}</h2>`;
			popup += `<p class="text-md font-bold">${marker.properties.muni}</p>`;
			popup += `<p class="my-1 text-sm">Date: <span class="font-bold">${marker.properties.date}</span></p>`;
			popup += `<p class="text-sm p-1">${marker.properties.desc}</p>`;
			popup += `<p class="font-mono text-xs text-green-500 px-1 mt-1">${LngLat[0]}</p>`;
			popup += `<p class="font-mono text-xs text-green-500 px-1">${LngLat[1]}</p>`;
			popup += `<p class="text-sm p-2 font-bold">Sources:</p>`;
			popup += `<div class="px-2">
			<a href="${marker.properties.links}" class="underline text-blue-500 text-sm" target="_blank">
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
			</a>
			</div>`;
			const popupElement = new mapboxgl.Popup({
				offset: -10,
				anchor: 'bottom'
			}).setHTML(popup);
			popupElement.on('close', () => {
				if (this.selectedMarker) {
					this.selectedMarker.classList.remove('hidden');
				}
			});
			new mapboxgl.Marker({color: marker.properties.color})
				.setLngLat(LngLat)
				.setPopup(popupElement)
				.addTo(this.map);
		});
		this.map.addControl(new mapboxgl.NavigationControl());
		this.map.addControl(new mapboxgl.FullscreenControl(), 'top-left');
		this.scrollToBottom();
		this.toggleMarker();
	},
	methods: {
		toggleMarker() {},
		scrollToBottom() {
			if (!window) return;
			window.scrollTo({
				top: 40,
				left: 0,
				behavior: 'smooth'
			});
		}
	},
	head() {
		return {
			link: [
				{
					rel: 'stylesheet',
					href: 'https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css'
				}
			]
		};
	}
};
</script>

<style lang="scss">
.mapboxgl-popup {
	will-change: auto;
	min-width: 200px;
	max-width: 300px;
}

.mapboxgl-popup-content {
	@apply text-lg;
	font-family: 'Source Sans Pro', sans;
	background-color: #262626;
	color: #f2f2f2;
	padding: 1em 1em;
	h2 {
		font-family: 'EB Garamond', sans-serif;
		font-weight: 700;
	}
}

.mapboxgl-popup-close-button {
	@apply text-3xl;
	@apply mt-2;
	@apply mr-4;
}

.mapboxgl-popup-tip {
	margin-top: -2px;
	border: 2rem solid transparent;
}

.mapboxgl-popup-anchor-top .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {
	border-bottom-color: #262626;
}

.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip {
	border-top-color: #262626;
}

.mapboxgl-popup-anchor-left .mapboxgl-popup-tip {
	border-right-color: #262626;
}

.mapboxgl-popup-anchor-right .mapboxgl-popup-tip {
	border-left-color: #262626;
}

#map {
	min-height: 75vh;
	@media (max-width: 768px) {
		min-height: 85vh;
	}
}

.marker {
	cursor: pointer;
}
</style>
