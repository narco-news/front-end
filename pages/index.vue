<template>
	<div class="h-full">
		<HeaderImage />
		<Popup />
	</div>
</template>

<script>
import HeaderImage from '~/components/Home/HeaderImage';
import Popup from '~/components/Home/Popup';
export default {
	layout: 'default',
	components: {
		HeaderImage,
		Popup
	}
};
</script>

<style lang="sass"></style>
