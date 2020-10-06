<template>
	<div
		class="flex flex-row flex-wrap justify-center content-center text-md font-semibold text-blue-500 mb-4"
	>
		<div v-for="tag in pageTags" :key="tag.id">
			<div v-if="tag.count.posts >= 3">
				<nuxt-link
					:to="{path: '/tag/' + tag.slug}"
					class="tag hover:text-blue-300 hover:underline"
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
	computed: {
		pageTags() {
			return this.$store.state.pageTags;
		},

		pageSettings() {
			return this.$store.state.pageSettings;
		},

		pageUrl() {
			return this.pageSettings.url
				.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '')
				.split('/')[0];
		}
	}
};
</script>

<style lang="scss" scoped>
.tag {
	margin: 0 0.5em;
	padding: 10px 0;
}
</style>
