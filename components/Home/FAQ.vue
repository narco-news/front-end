<template>
	<div class="my-6">
		<h1 class="text-2xl md:text-3xl lg:text-4xl font-bold px-4 my-4 underline">
			Frequently Asked Questions
		</h1>
		<Accordion :items="items" />
	</div>
</template>

<script>
import Accordion from '~/components/Accordion';
export default {
	name: 'FAQ',
	components: {
		Accordion
	},
	data() {
		return {
			items: [
				{
					title: 'Who are you people?',
					content: 'Answer',
					isExpanded: false
				},
				{
					title: 'Are you cops?',
					content: 'Answer 2',
					isExpanded: false
				},
				{
					title: 'What is the',
					content: 'Answer 2',
					isExpanded: false
				},
				{
					title: 'Whose paying you?',
					content: 'Answer 2',
					isExpanded: false
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped></style>
