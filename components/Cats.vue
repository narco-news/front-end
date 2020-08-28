<template>
	<div>
		<h1 class="desc text-xl font-bold ml-12 my-4">
			Categories
		</h1>
		<div
			class="cats grid grid-flow-col grid-cols-2 grid-rows-4 text-lg md:text-xl bg-white shadow-inner rounded-md mx-8"
		>
			<div class="px-2 lg:px-4">
				<n-link class="text-md md:text-md" to="/tag/united-states"
					>United States</n-link
				>
			</div>
			<div class="px-2 lg:px-4">
				<n-link class="text-md md:text-md" to="/tag/mexican-dto">Mexico</n-link>
			</div>
			<div class="px-2 lg:px-4">
				<n-link class="text-md md:text-md" to="/tag/central-america"
					>Central America</n-link
				>
			</div>
			<div class="px-2 lg:px-4">
				<n-link class="text-md md:text-md" to="/tag/south-america"
					>South America</n-link
				>
			</div>
			<div class="px-2 lg:px-4">
				<n-link class="text-md md:text-md" to="/tag/southeast-asia"
					>Southeast Asia</n-link
				>
			</div>
			<div class="px-2 lg:px-4">
				<n-link class="text-md md:text-md" to="/tag/film-and-television"
					>Film & Television</n-link
				>
			</div>
			<div class="px-2 lg:px-4">
				<n-link class="text-md md:text-md" to="/tag/announcements"
					>Announcements</n-link
				>
			</div>
			<div class="px-2 lg:px-4">
				<n-link class="text-md md:text-md" to="/tag/development"
					>Development</n-link
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cats {
	padding: 1em;
	a {
		box-shadow: inset 0 -8px 0 0 #f2cb05;
		font-weight: 700;
		white-space: nowrap;
	}
}
</style>
