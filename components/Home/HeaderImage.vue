<template>
	<div class="relative mb-4">
		<div class="grid grid-cols-3">
			<div class="col-span-1">
				<LatestArticlesBox />
			</div>
			<div class="col-span-2 grid grid-rows-2 pattern-dots-md overflow-hidden">
				<img
					style="transform: translate(20px, 20px);"
					class="opic object-cover"
					src="~/assets/images/opium.jpg"
					alt="Opium"
				/>
				<div class="website my-4 md:mt-12 mx-5">
					<div class="bg-white rounded-md shadow-md p-2 mx-4 h-48">
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
export default {
	components: {
		LatestArticlesBox,
		WebsiteUpdates
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
