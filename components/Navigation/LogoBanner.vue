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
export default {
	name: 'LogoBanner'
};
</script>

<style lang="scss" scoped>
.logo {
	background-color: #f2f2f2;
	height: 40px;
}
</style>
