<template>
	<div class="m-4 md:m-8">
		<Tabs>
			<tab title="Books" class="tab">
				<BookList />
			</tab>
			<tab title="Academic Books" class="tab">
				<ABooks />
			</tab>
			<tab title="Academic Papers" class="tab">
				<LatestPapers />
			</tab>
		</Tabs>
	</div>
</template>

<script>
import {Tabs, Tab} from 'vue-slim-tabs';
import BookList from '~/components/Academic/BookList';
import ABooks from '~/components/Academic/ABooks';
import LatestPapers from '~/components/Academic/LatestPapers';

export default {
	components: {
		BookList,
		Tabs,
		Tab,
		ABooks,
		LatestPapers
	}
};
</script>

<style lang="scss">
.tab {
	border: 1px solid #e5e5e5;
	background-color: #f6f6f6;
}
.vue-tablist {
	list-style: none;
	display: flex;
	padding-left: 0;
}
.vue-tab {
	padding: 5px 10px;
	cursor: pointer;
	user-select: none;
	border: 1px solid transparent;
	border-bottom-color: #e5e5e5;
	border-radius: 3px 3px 0 0;
	background-color: white;
	position: relative;
	bottom: -1px;
}

.vue-tab[aria-selected='true'] {
	background-color: #f6f6f6;
	border-color: #e2e2e2;
	border-bottom-color: transparent;
	color: #595fd9;
	font-weight: 600;
}

.vue-tab[aria-disabled='true'] {
	cursor: not-allowed;
	color: #999;
}
</style>
