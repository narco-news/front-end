<template>
	<div class="relative mb-4">
		<div class="grid grid-cols-3">
			<div class="col-span-1">
				<LatestArticlesBox />
			</div>
			<div class="col-span-2 pattern-dots-md overflow-hidden">
				<img
					style="transform: translate(20px, 20px);"
					class="opic object-cover"
					src="~/assets/images/opium.jpg"
					alt="Opium"
				/>
				<div class="relative mt-12 grid grid-rows-1">
					<div class="px-4">
						<Welcome />
					</div>
					<div class="bg-white rounded-md shadow-md my-6 md:mb-4 p-2 mx-4 h-48">
						<h1 class="uppercase float-right">Website Updates</h1>
						<WebsiteUpdates class="clear-right" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import LatestArticlesBox from '~/components/Home/LatestArticlesBox';
import WebsiteUpdates from '~/components/Home/WebsiteUpdates';
import Welcome from '~/components/Home/Welcome';
export default {
	components: {
		LatestArticlesBox,
		WebsiteUpdates,
		Welcome
	}
};
</script>

<style lang="scss" scoped>
h1 {
	font-family: 'Courier Prime', serif;
	font-size: 12px;
	font-weight: 700;
}
.opic {
	max-height: 400px;
	width: 100%;
}
</style>
