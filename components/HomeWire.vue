<template>
	<div
		class="card overflow-y-scroll h-screen max-w-lg rounded overflow-hidden shadow-lg"
	>
		<div class="px-6 py-4">
			<client-only>
				<Timeline
					:timeline-items="timelineItems"
					:message-when-no-items="messageWhenNoItems"
				/>
			</client-only>
		</div>
	</div>
</template>

<script>
import Timeline from 'timeline-vuejs';
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css';

export default {
	components: {
		Timeline
	},
	data: () => ({
		messageWhenNoItems: 'There are not items',
		timelineItems: [
			{
				from: new Date(2018, 7),
				title: 'Name',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
			},
			{
				from: new Date(2016, 1),
				title: 'Name',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
			},
			{
				from: new Date(2016, 6),
				title: 'Name',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
			},
			{
				from: new Date(2012, 1),
				title: 'Name',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
			}
		]
	})
};
</script>

<style lang="scss">
.dot {
	background: #d93b48 !important;
}
</style>
