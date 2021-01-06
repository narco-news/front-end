<template>
	<div>
		<h2
			class="text-2xl lg:text-3xl font-bold mb-4 px-4 border-b-2 border-teal-600 m-6"
		>
			Tags
		</h2>
		<div class="tag-box flex flex-row flex-wrap items-center justify-center">
			<div v-for="tag in pageTags" :key="tag.id">
				<div v-if="tag.count.posts >= filter">
					<nuxt-link
						:to="{path: '/tag/' + tag.slug}"
						:title="tag.name"
						class="whitespace-no-wrap mx-4 p-2 rounded-md text-sm md:text-md text-blue-500 bg-royal-100 hover:text-royal-100 hover:bg-blue-400"
						>{{ tag.name }} ({{ tag.count.posts }})
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TagsBox',
	props: {
		filter: {
			type: Number,
			default: 3
		}
	},
	computed: {
		pageTags() {
			return this.$store.state.pageTags;
		}
	}
};
</script>

<style lang="scss" scoped>
.tag-box {
	margin: 1em 0;
	height: 400px;
	@media (min-width: 415px) {
		height: 200px;
	}
}
</style>
