<template>
	<div
		class="navbar flex flex-wrap justify-center items-center text-xs md:text-sm text-blue-500"
	>
		<n-link to="/about" alt="About page">About</n-link>
		<n-link to="/wire" alt="Wire page">Wire</n-link>
		<n-link to="/pa" alt="Press Aggregate page">Press Aggregate</n-link>
		<n-link to="/library" alt="Book list page">Library</n-link>
	</div>
</template>

<script>
export default {
	name: 'Navbar'
};
</script>

<style lang="scss" scoped>
.navbar {
	background-color: #f2f2f2;
	height: 30px;
	width: 100%;
	z-index: 30;
	padding-bottom: 10px;
	a {
		margin: 0 0.5em;
		white-space: nowrap;
		font-weight: 600;
		font-family: 'Source Sans Pro', serif;
		&:hover {
			color: #7a7fe1;
			text-decoration: underline;
		}
		&:active {
			color: #7a7fe1;
		}
	}
}
</style>
