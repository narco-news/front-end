<template>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
		<div class="">
			<EssentialResources />
		</div>
		<div class="">
			<RSSWire />
		</div>
	</div>
</template>

<script>
import EssentialResources from '~/components/EssentialResources.vue';
import RSSWire from '~/components/RSSWire.vue';

export default {
	layout: 'default',
	components: {
		EssentialResources,
		RSSWire
	}
};
</script>

<style>
.top {
	height: 400px;
}
</style>
