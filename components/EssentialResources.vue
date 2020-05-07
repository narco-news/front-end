<template>
	<div class="grid grid-cols-1">
		<!--  -->
		<div
			style="border: 2px solid #f23030;"
			class="card shadow-md max-w-lg rounded overflow-hidden"
		>
			<div class="px-4 py-2">
				<div style="color: #f23030;" class="font-bold text-xl mb-2">
					Essential Resources
					<button
						class="toggle-features float-right text-sm text-gray-900"
						aria-controls="features"
						:aria-expanded="featuresOpen ? 'true' : 'false'"
						@click="toggleFeatures"
					>
						{{ featuresOpen ? 'Hide' : 'View' }}
					</button>
				</div>

				<div
					id="features"
					v-show-slide="featuresOpen"
					class="features grid grid-cols-2 lg:grid-cols-3 whitespace-no-wrap text-sm gap-1 text-center"
				>
					<!--  -->
					<div>
						<a
							href="https://www.dea.gov/press-releases"
							target="_blank"
							tabindex="1"
						>
							<span class="borderLeftRight">DEA Press Releases</span>
						</a>
					</div>
					<!--  -->
					<div>
						<a
							href="https://www.justice.gov/usao/pressreleases"
							target="_blank"
							tabindex="2"
						>
							<span class="borderLeftRight">DOJ Press Releases</span>
						</a>
					</div>
					<!--  -->
					<div>
						<a
							href="https://www.fbi.gov/news/pressrel"
							target="_blank"
							tabindex="3"
						>
							<span class="borderLeftRight">FBI Press Releases</span>
						</a>
					</div>
					<!--  -->
					<!--  -->
					<div>
						<a
							href="https://www.gob.mx/sedena/prensa/comunicados-de-prensa-2020"
							target="_blank"
							tabindex="4"
						>
							<span class="borderLeftRight">SEDENA Press Releases</span>
						</a>
					</div>
					<!--  -->
					<div>
						<a
							href="https://www.gob.mx/semar/archivo/prensa"
							target="_blank"
							tabindex="5"
						>
							<span class="borderLeftRight">SEMAR Press Releases</span>
						</a>
					</div>
					<!--  -->
					<div>
						<a
							href="https://www.gob.mx/fgr/es/archivo/prensa"
							target="_blank"
							tabindex="6"
						>
							<span class="borderLeftRight">FGR Press Releases</span>
						</a>
					</div>
					<!--  -->
					<!--  -->
					<div>
						<a
							href="https://feminicidiosmx.crowdmap.com"
							target="_blank"
							tabindex="7"
						>
							<span class="borderLeftRight">Feminicidio Map</span>
						</a>
					</div>
					<!--  -->
					<div>
						<a href="https://elcri.men/en" target="_blank" tabindex="8">
							<span class="borderLeftRight">ELCRI.en</span>
						</a>
					</div>
					<!--  -->
					<div>
						<a href="http://semaforo.com.mx" target="_blank" tabindex="9">
							<span class="borderLeftRight">Semáforo Delictivo</span>
						</a>
					</div>
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

<style lang="scss">
.card {
	background-color: white;
	border: 1px solid #0d0000;
}
.highlighter span {
	position: relative;
	z-index: 1;
}

.highlighter span::before {
	content: '';
	position: absolute;
	z-index: -1;
	top: 0;
	bottom: 0;
	left: -0.25em;
	right: -0.25em;
	background-color: hsla(341, 97%, 59%, 0.75);
	transform-origin: center right;
	transform: scaleX(0);
	transition: transform 0.2s ease-in-out;
}

.highlighter span:hover::before {
	transform: scaleX(1);
	transform-origin: center left;
}

.underline span {
	position: relative;
}

.underline span::before {
	content: '';
	position: absolute;
	left: 50%;
	bottom: 0;
	width: 100%;
	height: 2px;
	background-color: #fc2f70;
	transform-origin: center;
	transform: translate(-50%, 0) scaleX(0);
	transition: transform 0.3s ease-in-out;
}

.underline span:hover::before {
	transform: translate(-50%, 0) scaleX(1);
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
	background-color: #d52548;
	transform-origin: bottom right;
	transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
}

.borderLeftRight:hover::after {
	transform: scaleX(1);
	transform-origin: bottom left;
}
</style>
