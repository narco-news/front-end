<template>
	<div class="p-4">
		<div class="embed-container">
			<iframe
				width="500"
				height="400"
				frameborder="0"
				scrolling="no"
				marginheight="0"
				marginwidth="0"
				title="Historical 'Grupo Elite' Attributed SIGACTs"
				src="//www.arcgis.com/apps/Embed/index.html?webmap=98d260e6f0234ef5ac753967a124b551&extent=-102.046,19.5533,-99.9971,21.748&zoom=true&previewImage=false&scale=true&legendlayers=true&basemap_gallery=true&disable_scroll=true&theme=dark"
			></iframe>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GeMap'
};
</script>

<style lang="scss" scoped>
.embed-container {
	position: relative;
	padding-bottom: 80%;
	height: 0;
	max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
small {
	position: absolute;
	z-index: 40;
	bottom: 0;
	margin-bottom: -15px;
}
</style>
