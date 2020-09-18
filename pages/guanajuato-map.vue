<template>
	<div class="m-2">
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
			let popup = `<h2 class="text-lg my-1 font-bold mb-2">${marker.properties.title}</h2>`;
			popup += `<p class="text-sm my-1 font-semibold"><span class=" text-red">Municipality: </span>${marker.properties.muni}</p>`;
			popup += `<p class="text-sm my-1 font-semibold"><span class=" text-red">Date: </span>${marker.properties.date}</p>`;
			if (marker.properties.desc) {
				popup += `<p class="text-sm my-1 font-semibold"><span class="text-red">Desc: </span>${marker.properties.desc}</p>`;
			}
			popup += `<p class="font-mono text-xs px-1 mt-1">${LngLat[0]}</p>`;
			popup += `<p class="font-mono text-xs px-1">${LngLat[1]}</p>`;
			popup += `<p class="text-sm p-2 font-bold">Sources:</p>`;
			marker.properties.links.forEach(link => {
				popup += `<div class="px-2 inline-block">
			<a href="${link}" class="underline text-blue-500 text-sm" target="_blank">
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
			</a>
			</div>`;
			});

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
	background-color: #262626 !important;
	color: white;
	padding-top: 3em !important;
}
.mapboxgl-popup-close-button {
	font-size: 2em !important;
	margin-top: 0.3em !important;
	margin-right: 0.5em !important;
}
.mapboxgl-popup-tip {
	margin-top: -0.5em !important;
	margin-bottom: -2em !important;
	border: 2rem solid transparent !important;
}
.mapboxgl-popup-anchor-top .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {
	border-bottom-color: #262626 !important;
}
.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip {
	border-top-color: #262626 !important;
}
.mapboxgl-popup-anchor-left .mapboxgl-popup-tip {
	border-right-color: #262626 !important;
}
.mapboxgl-popup-anchor-right .mapboxgl-popup-tip {
	border-left-color: #262626 !important;
}
#map {
	min-height: 75vh;
	border: 1px solid black;
	@media (max-height: 768px) {
		min-height: 85vh;
	}
}

.marker {
	cursor: pointer;
}
</style>
