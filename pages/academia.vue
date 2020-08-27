<template>
	<div class="p-2 md:p-4 lg:p-8">
		<div class="grid grid-cols-1 md:grid-cols-4">
			<div class="col-span-1 md:col-span-1"><LatestPapers /></div>
			<div class="col-span-1 md:col-span-3"><ABooks /></div>
		</div>
		<ResearchPaper />
	</div>
</template>

<script>
import ABooks from '~/components/Academic/ABooks';
import LatestPapers from '~/components/Academic/LatestPapers';
import ResearchPaper from '~/components/ResearchPaper';

export default {
	components: {
		ABooks,
		LatestPapers,
		ResearchPaper
	},
	head() {
		return {
			title: 'Academic'
		};
	}
};
</script>

<style lang="scss" scope>
.updates {
	background-color: #f9c89e;
	border: 1px solid #f2913d;
}

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
	background-color: #03a688;
	color: #f2f2f2;
	position: relative;
	bottom: -1px;
}

.vue-tab[aria-selected='true'] {
	background-color: lighten(#03a688, 5%);
	// border-color: #e2e2e2;
	// border-bottom-color: transparent;
}

.vue-tab[aria-disabled='true'] {
	cursor: not-allowed;
	color: #999;
}
</style>
