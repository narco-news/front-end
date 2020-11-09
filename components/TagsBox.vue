<template>
	<div class="flex flex-row flex-wrap md:grid tags-box p-1 m-2 text-right">
		<div v-for="tag in pageTags" :key="tag.id">
			<div v-if="tag.count.posts >= filter">
				<nuxt-link
					:to="{path: '/tag/' + tag.slug}"
					class="text-blue-500 hover:text-blue-300 hover:underline text-sm font-semibold whitespace-no-wrap px-1"
					:title="tag.name"
					>{{ tag.name }} ({{ tag.count.posts }})
				</nuxt-link>
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
.tags-box {
}
</style>
