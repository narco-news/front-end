<template>
	<div class="logo flex justify-center items-center">
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
export default {};
</script>

<style lang="scss" scoped>
.logo {
	height: 65px;
}
img {
	padding-top: 10px;
}
</style>
