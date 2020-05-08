<template>
	<div>
		<Headlines />
		<!-- TOP -->
		<div class="grid grid-cols-1">
			<div class="px-4">
				<EssentialResources />
			</div>
		</div>
		<!-- MIDDLE -->
		<div class="grid grid-cols-1 md:grid-cols-6 gap-1 mt-4">
			<div class="cols-span-1 md:col-span-4 px-4"><Landing /></div>
			<div class="cols-span-1 md:col-span-2 px-4"><HomeWire /></div>
		</div>
		<!-- BOTTOM -->
		<notifications
			position="bottom center"
			group="foo"
			animation-type="velocity"
		/>
	</div>
</template>

<script>
import EssentialResources from '~/components/EssentialResources.vue';
// import RSSWire from '~/components/RSSWire.vue';
import Landing from '~/components/Landing.vue';
import HomeWire from '~/components/HomeWire.vue';
import Headlines from '~/components/Headlines.vue';

export default {
	layout: 'default',
	components: {
		EssentialResources,
		// RSSWire,
		Landing,
		HomeWire,
		Headlines
	},
	mounted() {
		this.$notify({
			group: 'foo',
			type: 'error',
			title: 'Thanks for stopping by!',
			text:
				'Just a heads up! Everything around here is still much in the works so please excuse any funkiness you come across while perusing.',
			speed: 500,
			duration: 6000,
			animation: {
				enter: {
					opacity: [1, 0],
					translateX: [0, -300],
					scale: [1, 0.2]
				},
				leave: {
					opacity: 0,
					height: 0
				}
			}
		});
	}
};
</script>

<style>
.top {
	height: 400px;
}

.error {
	border-left-color: #e54d42 !important;
	border: 4px solid #b82e24 !important;
}
</style>
