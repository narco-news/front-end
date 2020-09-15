<template>
	<div id="app">
		<client-only>
			<mapbox
				access-token="pk.eyJ1IjoibmFyY29uZXdzIiwiYSI6ImNrYWVmcWdwZTAxaW8ycW5mZmtpeHBqdDgifQ.iKstL5TyVw798ani5vGfyg"
				:map-options="{
					style: 'mapbox://styles/mapbox/light-v9',
					center: [-96, 37.8],
					zoom: 3
				}"
				:geolocate-control="{
					show: true,
					position: 'top-left'
				}"
				@map-load="loaded"
				@map-zoomend="zoomend"
				@map-click:points="clicked"
				@geolocate-error="geolocateError"
				@geolocate-geolocate="geolocate"
			/>
		</client-only>
	</div>
</template>

<script>
import Mapbox from 'mapbox-gl-vue';

export default {
	components: {Mapbox},
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
									coordinates: [-77.03238901390978, 38.913188059745586]
								},
								properties: {
									title: 'Mapbox',
									description: 'Washington, D.C.'
								}
							},
							{
								type: 'Feature',
								geometry: {
									type: 'Point',
									coordinates: [-122.414, 37.776]
								},
								properties: {
									title: 'Mapbox SF',
									icon: 'marker'
								}
							}
						]
					}
				},
				layout: {
					'icon-image': '{icon}-15',
					'text-field': '{title}',
					'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
					'text-offset': [0, 0.6],
					'text-anchor': 'top'
				}
			});
		},
		zoomend(map, e) {
			// eslint-disable-next-line
			console.log('Map zoomed');
		},
		clicked(map, e) {
			const title = e.features[0].properties.title;
			// eslint-disable-next-line
			console.log(title);
		},
		geolocateError(control, positionError) {
			// eslint-disable-next-line
			console.log(positionError);
		},
		geolocate(control, position) {
			// eslint-disable-next-line
			console.log(
				`User position: ${position.coords.latitude}, ${position.coords.longitude}`
			);
		}
	}
};
</script>

<style>
#map {
	width: 100%;
	height: 500px;
}
</style>
