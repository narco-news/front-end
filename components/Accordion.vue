<template>
	<div class="mx-2 md:mx-10">
		<div class="container">
			<h2 v-if="title">{{ title }}</h2>
			<div class="accordion">
				<div
					v-for="(item, index) in items"
					:key="item.title"
					class="accordion-item"
				>
					<button
						:id="'accordion-button-' + index"
						:aria-expanded="item.isExpanded"
						@click="toggleItem(item)"
					>
						<span class="accordion-title text-2xl">{{ item.title }}</span>
						<span class="icon" aria-hidden="true"></span>
					</button>
					<div class="accordion-content">
						<!-- eslint-disable-next-line vue/no-v-html -->
						<p v-html="item.content"></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Accordion',
	props: {
		title: {
			type: String,
			required: false,
			default: ''
		},
		items: {
			type: Array,
			required: true
		}
	},
	methods: {
		toggleItem(item) {
			const status = item.isExpanded;
			this.items.forEach(item => (item.isExpanded = false));
			if (!status) {
				item.isExpanded = true;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
$text: #7288a2;
$gray: #4d5974;
$lightgray: #e5e5e5;
$blue: #595fd9;
.container {
	margin: 0 auto;
	padding: 1em;
}
.accordion {
	.accordion-item {
		// border-bottom: 1px solid $lightgray;
		button[aria-expanded='true'] {
			border-bottom: 1px solid $blue;
		}
	}
	button {
		position: relative;
		display: block;
		text-align: left;
		width: 100%;
		padding: 1em 0;
		color: $text;
		font-size: 1.15rem;
		border: none;
		background: none;
		outline: none;
		&:hover,
		&:focus {
			cursor: pointer;
			color: black;
			&::after {
				cursor: pointer;
				color: $blue;
				border: 1px solid $blue;
			}
		}
		.accordion-title {
			padding: 1em 1.5em 1em 0;
		}
		.icon {
			display: inline-block;
			position: absolute;
			top: 18px;
			right: 0;
			width: 22px;
			height: 22px;
			&::before {
				display: block;
				position: absolute;
				content: '';
				top: 9px;
				left: 5px;
				width: 10px;
				height: 2px;
				background: currentColor;
			}
			&::after {
				display: block;
				position: absolute;
				content: '';
				top: 5px;
				left: 9px;
				width: 2px;
				height: 10px;
				background: currentColor;
			}
		}
	}
	button[aria-expanded='true'] {
		color: $blue;
		.icon {
			&::after {
				width: 0;
			}
		}
		+ .accordion-content {
			opacity: 1;
			max-height: 10em;
			transition: all 200ms linear;
			will-change: opacity, max-height;
		}
	}
	.accordion-content {
		opacity: 0;
		max-height: 0;
		overflow: hidden;
		transition: opacity 200ms ease-out, max-height 200ms ease-out;
		will-change: opacity, max-height;
		p {
			font-weight: 300;
			margin: 2em 0;
		}
	}
}
</style>
