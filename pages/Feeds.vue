<template>
	<div class="feeds m-4">
		<h1 class="text-2xl text-center font-mono font-bold underline">
			Feeds
		</h1>
		<div
			class="feeds-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
		>
			<EBDNFeed class="mb-4" />
			<ENMFeed class="mb-4" />
			<ValorTFeed class="mb-4" />
		</div>
	</div>
</template>

<script>
import EBDNFeed from '~/components/EBDNFeed';
import ENMFeed from '~/components/ENMFeed';
import ValorTFeed from '~/components/ValorTFeed';

export default {
	name: 'Feeds',
	components: {
		EBDNFeed,
		ENMFeed,
		ValorTFeed
	}
};
</script>

<style lang="scss" scoped>
.feeds {
	.feeds-wrapper {
		padding: 1em;
	}
}
</style>
