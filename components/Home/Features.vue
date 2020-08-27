<template>
	<div>
		<h1
			class="desc text-2xl md:text-3xl lg:text-4xl font-bold my-4 md:mb-6 underline ml-4"
		>
			Our Objectives
		</h1>
		<div class="feat-box shadow-inner rounded-md p-4">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
				<div class="grid grid-flow-row">
					<img src="~/assets/icons/research.svg" class="w-16" />
					<h1 class="text-xl font-bold">Collection & Research</h1>
					<p class="text-xs md:text-sm">
						Paying close attention to how information is uploaded and
						distributed on the Internet by social media, press publications,
						academic literature, think tanks and court documents.
					</p>
				</div>
				<div class="grid grid-flow-row">
					<img src="~/assets/icons/flow-chart-design.svg" class="w-16" />
					<h1 class="text-xl font-bold">Graphics & Diagrams</h1>
					<p class="text-xs md:text-sm">
						A picture is worth a thousand words right? We think so, which is why
						we aim to provide creative visual aids alongside the analysis and
						data to help better make sense of what is going on.
					</p>
				</div>
				<div class="grid grid-flow-row">
					<img src="~/assets/icons/image-analysis.svg" class="w-16" />
					<h1 class="text-xl font-bold">Geolocation & Imagery Analysis</h1>
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
						across platforms. Including how information is distributed among
						them and by whom.
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
	margin: 1em 2em;
	background-color: white;
	img {
		margin-bottom: 10px;
	}
	@media (min-width: 780px) {
		margin: 4em 10em;
	}
}
h1 {
	font-family: 'IBM Plex Sans', sans;
	color: #03a688;
	line-height: 1.5;
}
</style>
