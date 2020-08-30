<template>
	<div class="h-auto rounded-md shadow-inner m-4">
		<div class="p-2">
			<span style="color: #f26457;" class="text-sm font-mono">
				Essential Resources
			</span>
			<button
				class="toggle-features float-right text-xs text-gray-900"
				aria-controls="features"
				:aria-expanded="featuresOpen ? 'true' : 'false'"
				@click="toggleFeatures"
			>
				{{ featuresOpen ? 'Hide' : 'Show' }}
			</button>
		</div>
		<div
			id="features"
			v-show-slide:400-example-easing="featuresOpen"
			class="features text-xs"
		>
			<p class="pb-1 font-bold text-center">Press Releases</p>
			<div class="flex h-auto whitespace-no-wrap gap-2 text-center px-4">
				<div class="p-1">
					<a
						href="https://www.dea.gov/press-releases"
						target="_blank"
						tabindex="1"
					>
						<span class="borderLeftRight">DEA</span>
					</a>
				</div>
				<!--  -->
				<div class="p-1">
					<a
						href="https://www.justice.gov/usao/pressreleases"
						target="_blank"
						tabindex="2"
					>
						<span class="borderLeftRight">DOJ</span>
					</a>
				</div>
				<!--  -->
				<div class="p-1">
					<a
						href="https://www.fbi.gov/news/pressrel"
						target="_blank"
						tabindex="3"
					>
						<span class="borderLeftRight">FBI</span>
					</a>
				</div>
				<!--  -->
				<!--  -->
				<div class="p-1">
					<a
						href="https://www.gob.mx/sedena/prensa/comunicados-de-prensa-2020"
						target="_blank"
						tabindex="4"
					>
						<span class="borderLeftRight">SEDENA</span>
					</a>
				</div>
				<!--  -->
				<div class="p-1">
					<a
						href="https://www.gob.mx/semar/archivo/prensa"
						target="_blank"
						tabindex="5"
					>
						<span class="borderLeftRight">SEMAR</span>
					</a>
				</div>
				<!--  -->
				<div class="p-1">
					<a
						href="https://www.gob.mx/fgr/es/archivo/prensa"
						target="_blank"
						tabindex="6"
					>
						<span class="borderLeftRight">FGR</span>
					</a>
				</div>
			</div>
			<!--  -->
			<p class="py-1 font-bold text-center">Data</p>
			<div class="flex h-auto whitespace-no-wrap gap-2 text-center pb-2 mx-2">
				<!--  -->
				<div class="p-1">
					<a
						href="https://feminicidiosmx.crowdmap.com"
						target="_blank"
						tabindex="7"
					>
						<span class="borderLeftRight">Feminicidio Map</span>
					</a>
				</div>
				<!--  -->
				<div class="p-1">
					<a href="https://elcri.men/en" target="_blank" tabindex="8">
						<span class="borderLeftRight">ELCRI.en</span>
					</a>
				</div>
				<!--  -->
				<div class="p-1">
					<a href="http://semaforo.com.mx" target="_blank" tabindex="9">
						<span class="borderLeftRight">Semáforo Delictivo</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			featuresOpen: false
		};
	},
	methods: {
		toggleFeatures() {
			this.featuresOpen = !this.featuresOpen;
		}
	}
};
</script>

<style>
.borderLeftRight {
	display: inline-block;
	position: relative;
	color: #474e51;
}

.borderLeftRight::after {
	content: '';
	position: absolute;
	width: 100%;
	transform: scaleX(0);
	height: 2px;
	bottom: 0;
	left: 0;
	background-color: #ff5e70;
	transform-origin: bottom right;
	transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
}

.borderLeftRight:hover::after {
	transform: scaleX(1);
	transform-origin: bottom left;
}
</style>
