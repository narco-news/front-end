<template>
	<div class="mx-2">
		<h1 class="text-xl font-bold p-2">Recent Papers</h1>
		<div class="h-5 pattern-dots-md"></div>
		<p class="text-xs p-2">
			This is not necessarily meant to be a highly curated list but more so a
			record of everything I can find that is topic relevant. Inclusion on this
			list is not an endorsement.
		</p>
		<p class="text-xs font-bold underline text-center mb-4">
			None of the papers listed on this website are hosted on this website
		</p>
		<div
			v-for="paper in papers"
			id="paper"
			:key="paper.id"
			class="bg-white rounded-lg shadow-sm p-2 mb-2"
		>
			<a :href="paper.dLink" target="_blank">
				<img
					src="~/assets/icons/download.svg"
					alt="Download icon"
					title="Download icon"
					class="cursor-pointer float-right m-1"
				/>
			</a>
			<a :href="paper.link" class="cursor-pointer" target="_blank">
				<p class="title text-md">{{ paper.title }}</p>
			</a>
			<p class="authors text-sm">{{ paper.authors }}</p>
			<p class="date-published text-xs">{{ paper.datePublished }}</p>
		</div>
	</div>
</template>

<script>
import RecentPapers from '~/assets/recentpapers.json';

export default {
	data() {
		return {
			papers: RecentPapers.papers,
			featuresOpen: false
		};
	},
	methods: {
		toggleFeatures() {
			this.featuresOpen = !this.featuresOpen;
			this.$emit('selected', this.paper.id);
		},
		handleSelected(id) {
			this.selectedItem = id;
		}
	}
};
</script>

<style lang="scss" scoped>
.paperbox {
	background-color: #dadada;
}
.authors {
	color: #03a688;
}
.date-published {
	font-family: 'Courier Prime', monospace;
}
</style>
