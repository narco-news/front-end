<template>
	<div class="text-center md:text-left">
		<!-- <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
			English
		</nuxt-link>

		<nuxt-link v-if="$i18n.locale !== 'es'" :to="switchLocalePath('es')">
			Español
		</nuxt-link> -->
		<nuxt-link
			v-for="locale in availableLocales"
			:key="locale.code"
			:to="switchLocalePath(locale.code)"
			@click.prevent.stop="setLocale(locale.code)"
			>{{ locale.name }}</nuxt-link
		>
	</div>
</template>

<script>
export default {
	name: 'LanguageToggle',
	computed: {
		availableLocales() {
			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
		}
	}
};
</script>

<style lang="scss" scoped></style>
