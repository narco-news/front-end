<template>
	<div class="grid grid-cols-1 m-2 gap-2">
		<div class="col-span-1">
			<WebsiteUpdates />
		</div>
		<div class="col-span-1">
			<EssResources />
		</div>
	</div>
</template>

<script>
import EssResources from '~/components/EssResources.vue';
import WebsiteUpdates from '~/components/WebsiteUpdates.vue';
export default {
	components: {
		EssResources,
		WebsiteUpdates
	}
};
</script>

<style lang="sass"></style>
