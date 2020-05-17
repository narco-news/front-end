<template>
	<div id="homewire" class="rounded p-2 pt-4">
		<!-- Latest update -->
		<vue-timeline-update
			:date="new Date('2020-05-02')"
			title="I Am A Title"
			description="Nullam quis semper felis. Aliquam imperdiet fringilla tortor vitae rhoncus. Curabitur semper vehicula pulvinar. Quisque sagittis ex vitae volutpat tempor. Nulla efficitur elit id ante sagittis consectetur. Maecenas quis ipsum maximus, ultricies erat vel, elementum lorem. Ut ac odio semper, luctus neque quis, consequat arcu."
			category="Drug Trafficking"
			icon="airplanemode_active"
			color="blue"
		/>

		<!-- Another update -->
		<vue-timeline-update
			:date="new Date('2020-04-20')"
			title="I Am A Title"
			description="Nullam quis semper felis. Aliquam imperdiet fringilla tortor vitae rhoncus. Curabitur semper vehicula pulvinar. Quisque sagittis ex vitae volutpat tempor. Nulla efficitur elit id ante sagittis consectetur. Maecenas quis ipsum maximus, ultricies erat vel, elementum lorem. Ut ac odio semper, luctus neque quis, consequat arcu."
			category="Press Article"
			icon="speaker_notes"
			color="red"
		/>
	</div>
</template>

<script>
export default {};
</script>

<style>
#homewire {
	background-color: #1b2431;
}
.gb-base-badge--red {
	background-color: #ff5e70 !important;
}
.gb-base-number--red {
	border-color: #ff5e70 !important;
}
/* Fonts */

[class^='gb-']:not(.gb-base-icon) {
	font-family: Arial, Helvetica, sans-serif !important;
}
</style>
