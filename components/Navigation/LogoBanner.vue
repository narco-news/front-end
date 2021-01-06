<template>
	<div class="logo-box flex justify-center items-center h-16 bg-gray-200">
		<n-link :to="localePath('/')">
			<img
				src="~/assets/images/bw-nn-logo.png"
				alt="narco.news Logo"
				class="w-48 md:w-56"
			/>
		</n-link>
	</div>
</template>

<script>
export default {
	name: 'LogoBanner'
};
</script>

<style lang="scss" scoped>
.logo-box {
	border-bottom: 1px solid #262626;
}
</style>
