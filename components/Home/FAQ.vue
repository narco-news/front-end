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
					content:
						'Just a couple of folks with varying expertise but a shared interest in better understanding these issues and helping others do the same.',
					isExpanded: false
				},
				{
					title: "Why'd you make this website?",
					content:
						'We wanted to join the conversation and have our own place to share ideas without restraint or censorship. We also needed a place to organized and compile any and all information relating to these topics.',
					isExpanded: false
				},
				{
					title: 'Are you cops?',
					content:
						'No! We have never been employed or had assocation with any law enforcement agencies. ',
					isExpanded: false
				},
				{
					title: 'Whose paying you?',
					content: '<strong>No one!</strong> We are not funded by anyone',
					isExpanded: false
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped></style>
