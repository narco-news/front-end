<template>
	<div class="h-auto w-4/5 md:w-3/5 lg:w-2/5 rounded shadow-inner mx-auto">
		<div class="text-center p-2">
			<span
				style="color: #ff5e70;"
				class="text-sm font-bold font-mono uppercase"
			>
				Essential Resources
			</span>
			<button
				class="toggle-features float-right text-xs text-gray-800 font-bold uppercase font-mono"
				aria-controls="features"
				:aria-expanded="featuresOpen ? 'true' : 'false'"
				@click="toggleFeatures"
			>
				{{ featuresOpen ? 'Hide' : 'Show' }}
			</button>
		</div>
		<div
			id="features"
			v-show-slide="featuresOpen"
			class="features text-xs px-6"
		>
			<p class="pb-1 font-bold">Governmental Press Releases</p>
			<div class="flex h-auto whitespace-no-wrap gap-2 text-center">
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
			<p class="py-1 font-bold">Data</p>
			<div class="flex h-auto whitespace-no-wrap gap-2 text-center">
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
