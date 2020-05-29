<template>
	<div>
		<div
			style="color: #3a656a; background-color: #eef3ed;"
			class="rounded bg-white overflow-hidden shadow-md m-4"
		>
			<div
				style="font-family: 'Patua One', cursive;"
				class="flex justify-end lg:justify-start text-xl m-4"
			>
				ACADEMIA
			</div>
			<!-- <div v-for="paper in myPapers" :key="paper.id">
				<ResearchPaper
					:title="paper.title"
					:date="10"
					:authors="paper.authors"
					:abstract="paper.abstract"
				/>
			</div> -->
			<div class="grid grid-cols-1 lg:grid-cols-2">
				<ResearchPaper />
				<ResearchBooks />
			</div>
		</div>
	</div>
</template>

<script>
import ResearchPaper from '~/components/ResearchPaper';
import ResearchBooks from '~/components/ResearchBooks';
import Papers from '~/assets/papers.json';
export default {
	components: {
		ResearchPaper,
		ResearchBooks
	},
	data() {
		return {
			myPapers: Papers.papers
		};
	}
};
</script>

<style></style>
