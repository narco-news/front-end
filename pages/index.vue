<template>
	<div>
		<!-- TOP -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
			<div class="">
				<EssentialResources />
			</div>
			<div class="">
				<RSSWire />
			</div>
		</div>
		<!-- MIDDLE -->
		<div class="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4">
			<div class="cols-span-1 md:col-span-4"><Landing /></div>
			<div class="cols-span-1 md:col-span-2"><HomeWire /></div>
		</div>
		<!-- BOTTOM -->
	</div>
</template>

<script>
import EssentialResources from '~/components/EssentialResources.vue';
import RSSWire from '~/components/RSSWire.vue';
import Landing from '~/components/Landing.vue';
import HomeWire from '~/components/HomeWire.vue';

export default {
	layout: 'default',
	components: {
		EssentialResources,
		RSSWire,
		Landing,
		HomeWire
	}
};
</script>

<style>
.top {
	height: 400px;
}
</style>
