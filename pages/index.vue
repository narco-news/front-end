<template>
	<div>
		<!-- Top sticky notif -->
		<Popup />
		<!-- Interdictions FY19 -->
		<div>
			<FYNine />
		</div>
		<!-- RSS Marquee -->
		<!-- <div class="h-12 mb-2">
			<Marquee />
		</div> -->
		<!-- Landing Header -->
		<Cats />

		<!-- Landing Image -->
		<div class="mx-4">
			<Landing />
		</div>
		<!-- Content -->
		<div class="mb-10 mx-4">
			<div class="grid grid-cols-1 md:grid-cols-5">
				<div class="grid-span-1 md:col-span-3">
					<div
						style="background-color: #eef3ed;"
						class="h-auto shadow-md pt-2 pb-10"
					>
						<div class="grid-span-1 md:col-span-2">
							<div class="my-2">
								<Information />
							</div>
						</div>
					</div>
				</div>
				<!-- END -->
			</div>
		</div>
	</div>
</template>

<script>
import Popup from '~/components/Popup.vue';
import FYNine from '~/components/FYNine.vue';
import Landing from '~/components/Landing.vue';
import Information from '~/components/Information.vue';
// import HomeWire from '~/components/HomeWire.vue';
// import Marquee from '~/components/Marquee.vue';
import Cats from '~/components/Cats.vue';

export default {
	layout: 'default',
	components: {
		Popup,
		FYNine,
		Landing,
		Information,
		// HomeWire,
		// Marquee,
		Cats
	}
};
</script>

<style lang="sass"></style>
