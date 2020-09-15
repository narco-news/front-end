<template>
	<div>
		<h1 class="desc text-xl font-bold ml-12 my-4">
			Focus
		</h1>
		<div class="feat-box p-6">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
				<div class="grid grid-flow-row">
					<img
						src="~/assets/icons/research.svg"
						class="w-16"
						alt="Research icon"
					/>
					<h2 class="text-xl font-bold">Collection & Research</h2>
					<p class="text-xs md:text-sm">
						Aggregation of information from social media, press publications,
						academic literature, think tanks and public court documents.
					</p>
				</div>
				<div class="grid grid-flow-row">
					<img
						src="~/assets/icons/flow-chart-design.svg"
						class="w-16"
						alt="Flow chart icon"
					/>
					<h2 class="text-xl font-bold">Graphics & Diagrams</h2>
					<p class="text-xs md:text-sm">
						Coming up with creative and effective ways that make it easier for
						people to understand it all. A picture says a thousand words!
					</p>
				</div>
				<div class="grid grid-flow-row">
					<img
						src="~/assets/icons/image-analysis.svg"
						class="w-16"
						alt="Image analysis icon"
					/>
					<h2 class="text-xl font-bold">Geolocation & Mapping</h2>
					<p class="text-xs md:text-sm">
						Paying extra close attention to geography and it's relation to
						everything. Including using maps to make everything easier to
						visualize.
					</p>
				</div>
				<div class="grid grid-flow-row">
					<img
						src="~/assets/icons/layer.svg"
						class="w-16"
						alt="Social trends icon"
					/>
					<h2 class="text-xl font-bold">Social Media Trends</h2>
					<p class="text-xs md:text-sm">
						In the past many gave little attention to what was uploaded to
						social media networks. We're trying to change that and further
						understand the role they play.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Features'
};
</script>

<style lang="scss" scoped>
.desc {
	color: #0d0d0d;
}
.feat-box {
	background-color: white;
	h1 {
		margin-bottom: 10px;
	}
	img {
		margin-bottom: 10px;
	}
}
h2 {
	font-family: 'IBM Plex Sans', sans;
	color: #03a688;
	line-height: 1.3;
}
</style>
