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
				Tamaulipas Interactive Map
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
			token: process.env.accessToken,
			mapStyle: 'mapbox://styles/mapbox/streets-v11', // your map style
			center: [-98.6, 24.2],
			zoom: 7
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
	}
};
</script>

<style lang="css">
@import 'https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css';
#map {
	height: 500px;
}
</style>
