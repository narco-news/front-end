<template>
	<div class="my-6">
		<h1 class="desc text-xl md:text-2xl font-bold my-4 ml-8 md:ml-12">
			{{ $t('message.faq') }}
		</h1>
		<div class="accord shadow-inner rounded-md mx-8">
			<Accordion :items="items" />
		</div>
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
					title: 'Are you cops?',
					content:
						'<strong>No.</strong> We have never been employed or had assocation with any law enforcement agencies. ',
					isExpanded: false
				},
				{
					title: "Who's paying you?",
					content: '<strong>No one.</strong> We are not funded by anyone.',
					isExpanded: false
				}
			]
		};
	},
	i18n: {
		messages: {
			en: {
				message: {
					faq: 'Frequently Asked Questions'
				}
			},
			es: {
				message: {
					faq: 'Preguntas frecuentes'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.accord {
	background-color: #fafafa;
}
</style>
