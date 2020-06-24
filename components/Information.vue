<template>
	<div class="flex flex-col items-center mt-4">
		<div class="mx-4">
			<WebsiteUpdates />
		</div>
		<div class="mx-4">
			<MailChimpSub />
		</div>
		<div class="mx-4">
			<EssResources />
		</div>
	</div>
</template>

<script>
import MailChimpSub from '~/components/MailChimpSub.vue';
import EssResources from '~/components/EssResources.vue';
import WebsiteUpdates from '~/components/WebsiteUpdates.vue';
export default {
	components: {
		EssResources,
		WebsiteUpdates,
		MailChimpSub
	}
};
</script>

<style lang="sass"></style>
