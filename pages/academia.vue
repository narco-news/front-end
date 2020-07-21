<template>
	<div>
		<div
			style="color: #3a656a; background-color: #eef3ed;"
			class="rounded shadow-md p-2 m-4 h-full"
		>
			<div
				style="font-family: 'Patua One', cursive;"
				class="flex justify-end lg:justify-start text-xl m-4"
			>
				ACADEMIA
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-1 mb-6">
				<tabs>
					<tab title="Research Papers">
						<ResearchPaper />
					</tab>
					<tab title="Books">
						<ResearchBooks />
					</tab>
				</tabs>
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

<style lang="scss" scope>
.vue-tablist {
	list-style: none;
	display: flex;
	padding-left: 0;
	border-bottom: 1px solid #e2e2e2;
}

.vue-tab {
	padding: 5px 10px;
	margin-right: 5px;
	margin-left: 10px;
	cursor: pointer;
	user-select: none;
	// border: 1px solid transparent;
	// border-bottom-color: #e2e2e2;
	border-radius: 5px 5px 0 0;
	background-color: #3a656a;
	color: #eef3ed;
	position: relative;
	bottom: -1px;
}

.vue-tab[aria-selected='true'] {
	background-color: lighten(#3a656a, 10%);
	// border-color: #e2e2e2;
	// border-bottom-color: transparent;
}

.vue-tab[aria-disabled='true'] {
	cursor: not-allowed;
	color: #999;
}
</style>
