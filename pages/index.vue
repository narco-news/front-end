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
		<notifications
			position="top center"
			group="foo"
			animation-type="velocity"
		/>
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
	},
	mounted() {
		this.$notify({
			group: 'foo',
			type: 'error',
			position: 'top center',
			title: 'Thanks for stopping by!',
			text:
				'Just a heads up! Everything around here is still much in the works so please excuse any funkiness for the time being that you happen to stumble upon while perusing around. 🤪',
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
	// methods: {
	// 	show() {
	// 		this.$notify({
	// 			group: 'foo',
	// 			title: 'Important message',
	// 			text: 'Hello world! This is a notification.',
	// 			position: 'top center',
	// 			speed: '5000'
	// 		});
	// 	}
	// }
};
</script>

<style>
.top {
	height: 400px;
}
</style>
