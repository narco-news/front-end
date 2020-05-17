<template>
	<div class="cats flex flex-row justify-center flex-wrap h-auto py-2 mx-4">
		<div class="px-2">
			<a class="text-sm md:text-md" href="#">
				Press Aggregate
			</a>
		</div>
		<div class="px-2">
			<a class="text-sm md:text-md" href="#">
				Drug Trafficking
			</a>
		</div>
		<div class="px-2">
			<a class="text-sm md:text-md" href="#">
				Mexican DTOs
			</a>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.cats {
	background-color: #eef3ed;
	a {
		color: #2a413e;
		font-weight: 600;
	}
}
.borderMarker a {
	position: relative !important;
}

.borderMarker::after a {
	content: '' !important;
	position: absolute !important;
	z-index: -1 !important;
	top: 70% !important;
	left: -0.1px !important;
	right: -0.1px !important;
	bottom: 0 !important;
	transition: top 0.1s ease-in-out !important;
	background-color: rgba(87, 120, 243, 0.5) !important;
}

.borderMarker:hover::after a {
	top: 0 !important;
}
</style>
