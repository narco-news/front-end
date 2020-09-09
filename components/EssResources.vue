<template>
	<div class="box shadow-inner my-4">
		<div class="p-2 mx-2">
			<button
				class="float-right text-gray-700 text-xs uppercase"
				aria-controls="features"
				:aria-expanded="featuresOpen ? 'true' : 'false'"
				@click="toggleFeatures"
			>
				{{ featuresOpen ? 'Hide' : 'Show' }}
			</button>
			<div class="flex flex-row flex-no-wrap">
				<span class="title text-md">
					Quick Links
				</span>
			</div>
		</div>
		<div
			id="features"
			v-show-slide:400-example-easing="featuresOpen"
			class="features mx-6"
		>
			<p class="font-semibold text-xs uppercase text-gray-700">
				Press Releases
			</p>
			<hr width="95%" class="border-gray-700" />
			<div class="link flex h-auto whitespace-no-wrap p-2 font-mono text-sm">
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
			<p class="font-semibold text-xs uppercase text-gray-700">Data</p>
			<hr width="95%" class="border-gray-700" />
			<div
				class="link flex flex-row flex-wrap h-auto whitespace-no-wrap p-2 font-mono text-sm"
			>
				<!--  -->
				<div class="p-1 mr-2">
					<a
						href="https://feminicidiosmx.crowdmap.com"
						target="_blank"
						tabindex="7"
					>
						<span class="borderLeftRight">Feminicidio Map</span>
					</a>
				</div>
				<!--  -->
				<div class="p-1 mr-2">
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
			<hr width="100%" class="border-gray-400 border-dashed my-2" />
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

<style lang="scss" scoped>
.title {
	color: #03a688;
}
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
	background-color: #f26457;
	transform-origin: bottom right;
	transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
}
.borderLeftRight:hover::after {
	transform: scaleX(1);
	transform-origin: bottom left;
}
</style>
