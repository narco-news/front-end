<template>
	<div class="p-2 md:p-6">
		<h1 class="focus uppercase font-bold">Our Focus</h1>
		<div class="grid grid-cols-2 md:grid-cols-3">
			<div class="grid grid-flow-row">
				<img src="~/assets/icons/research.svg" class="w-16" />
				<h1 class="text-xl font-bold">Collection & Research</h1>
				<p class="text-xs md:text-sm">
					Paying close attention to how information is uploaded and distributed
					on the Internet by social media, press publications, academic
					literature, think tanks and court documents.
				</p>
			</div>
			<div class="grid grid-flow-row">
				<img src="~/assets/icons/flow-chart-design.svg" class="w-16" />
				<h1 class="text-xl font-bold">Graphics & Diagrams</h1>
				<p class="text-xs md:text-sm">
					A picture is worth a thousand words right? We think so, which is why
					we aim to provide creative visual aids alongside the analysis and data
					to help better make sense of what is going on.
				</p>
			</div>
			<div class="grid grid-flow-row">
				<img src="~/assets/icons/image-analysis.svg" class="w-16" />
				<h1 class="text-xl font-bold mb-1">Geolocation & Imagery Analysis</h1>
				<p class="text-xs md:text-sm">
					Little scrutiny has been given to social media content, including
					judging its authenticity and spending time on geolocation.
				</p>
			</div>
			<div class="grid grid-flow-row">
				<img src="~/assets/icons/layer.svg" class="w-16" />
				<h1 class="text-xl font-bold">Social Media Trends</h1>
				<p class="text-xs md:text-sm">
					Working to better understand social media trends and communities
					across platforms. Including how information is distributed among them
					and by whom.
				</p>
			</div>
			<div class="grid grid-flow-row">
				<img src="~/assets/icons/integration.svg" class="w-16" />
				<h1 class="text-xl font-bold mb-1">Needle In A Cluster</h1>
				<p class="text-xs md:text-sm">
					We'd like to think that we are pretty good at finding things on the
					Internet. If we can't find something, we might be able to find someone
					who can. At the very least pointing you in the right direction.
				</p>
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
.focus {
	font-family: 'Lora', sans-serif;
	font-weight: 700;
	color: #f26457;
}
.features {
	height: 100%;
	margin: 0 auto;
}
h1 {
	font-family: 'IBM Plex Sans', sans;
	color: #03a688;
	line-height: 1.3;
}
div {
	margin: 1em 0.5em;
}
</style>
