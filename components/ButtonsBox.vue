<template>
	<div class="mb-4">
		<div class="font-bold py-2 px-2 rounded-md">
			About
		</div>
		<div class="font-bold py-2 px-2 rounded-md">
			Contact
		</div>
		<div class="font-bold py-2 px-2 rounded-md">
			Book list
		</div>
		<div class="font-bold py-2 px-2 rounded-md">
			Academic
		</div>
		<div class="font-bold py-2 px-2 rounded-md">
			Wiki
		</div>
	</div>
</template>

<script>
export default {
	name: 'ButtonsBox'
};
</script>

<style lang="scss" scoped>
div {
	color: white;
	margin: 0.5em 0.5em;
	text-align: center;
	:nth-child(1) {
		background-color: #595fd9;
	}
	:nth-child(2) {
		background-color: #03a688;
	}
	:nth-child(3) {
		background-color: #f2913d;
	}
	:nth-child(4) {
		background-color: #f26457;
	}
	:nth-child(5) {
		background-color: #f28177;
	}
}
</style>
