<template>
	<div class="grid grid-cols-1 shadow-2xl">
		<div class="overflow-y-auto h-48 card max-w-xlg rounded overflow-hidden">
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">Situational Awareness</div>
				<!--  -->
				<!--  -->
				<div
					v-for="data in $options.myJson.article"
					:key="data.id"
					class="max-w-md w-full flex lg:max-w-full lg:flex gap-5"
				>
					<!-- START OF ENTRY -->
					<div
						class="mx-4 my-1 flex flex-col-reverse md:flex-col justify-center"
					>
						<div class="px-4">
							<img class="favicon rounded-full" :src="data.favicon" />
						</div>
						<p class="text-sm">{{ data.date }}</p>
					</div>
					<p class="text-sm p-2">
						{{ data.title }}
					</p>
					<!--  -->
					<!-- END OF ENTRY -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Articles from '~/assets/sitAware.json';
export default {
	myJson: Articles
};
</script>

<style>
.favicon {
	width: 20px;
	height: 20px;
	margin: 5px;
}
</style>
