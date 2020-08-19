<template>
	<a :href="url" :onClick="click" class="mx-1">
		<slot />
	</a>
</template>

<script>
// Inspired by "Dropdowns in Vue: The Right Way"
// Credit: Victor Rønnow
// https://ronnow.io/articles/dropdowns-in-vue
export default {
	name: 'SocialIcons',

	props: {
		url: {
			type: String,
			required: true,
			default: '#!'
		},

		click: {
			type: String,
			required: true,
			default: '#!'
		}
	}
};
</script>
