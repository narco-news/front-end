<template>
	<div class="flex flex-col items-center mt-10">
		<div class="mx-4">
			<WebsiteUpdates />
		</div>
		<div class="mx-4">
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
