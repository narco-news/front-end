<template>
	<div>
		<li @click="handleClick">
			<h3>{{ item.title }}</h3>
			<p class="details" v-show="iAmSelected">{{ item.description }}</p>
		</li>
	</div>
</template>

<script>
export default {
	props: {
		item: Object,
		isSelected: Number
	},

	computed: {
		iAmSelected() {
			return this.isSelected === this.item.id;
		}
	},

	methods: {
		handleClick() {
			this.$emit('selected', this.item.id);
		}
	}
};
</script>

<style lang="scss" scoped></style>
