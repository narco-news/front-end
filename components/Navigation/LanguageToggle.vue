<template>
	<div class="text-center md:text-left">
		<nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
			English
		</nuxt-link>

		<nuxt-link v-if="$i18n.locale !== 'es'" :to="switchLocalePath('es')">
			Español
		</nuxt-link>
	</div>
</template>

<script>
export default {
	name: 'LanguageToggle'
};
</script>

<style lang="scss" scoped></style>
