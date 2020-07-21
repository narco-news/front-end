<template>
	<div id="panel" class="grid grid-cols-1 md:grid-cols-3 gap-4 my-12 mx-8">
		<WebsiteUpdates />
		<EssentialLinks />
		<Box />
	</div>
</template>

<script>
import WebsiteUpdates from '~/components/InfoComs/WebsiteUpdates';
import EssentialLinks from '~/components/InfoComs/EssentialLinks';
import Box from '~/components/InfoComs/Box';
export default {
	name: 'InfoPanel',
	components: {
		WebsiteUpdates,
		EssentialLinks,
		Box
	}
};
</script>

<style lang="scss" scoped></style>
