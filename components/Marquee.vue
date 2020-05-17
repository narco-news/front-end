<template>
	<client-only>
		<dynamic-marquee direction="row" :repeatMargin="margin" :repeat="repeat">
			<div class="bg-white h-10 w-64 shadow-md rounded">
				<div class="text-center py-2">
					🤪
				</div>
			</div>
		</dynamic-marquee>
	</client-only>
</template>

<script>
export default {
	data() {
		return {
			repeat: true,
			margin: 30
		};
	}
};
</script>

<style></style>
