<template>
	<div
		class="navbar flex flex-row flex-no-wrap items-center text-xs md:text-sm text-shamrock-600"
	>
		<div class="flex flex-row flex-no-wrap">
			<n-link :to="localePath('/about')" alt="About page">About</n-link>
			<n-link :to="localePath('/pa')" alt="Press Aggregate page">{{
				$t('message.pa')
			}}</n-link>
			<n-link :to="localePath('/library')" alt="Book list page">{{
				$t('message.library')
			}}</n-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Navbar',
	i18n: {
		messages: {
			en: {
				message: {
					pa: 'Press Aggregate',
					library: 'Library'
				}
			},
			es: {
				message: {
					pa: 'Agregado de la prensa',
					library: 'Biblioteca'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.navbar {
	a {
		margin: 0 0.25em;
		padding: 5px;
		@apply rounded-md;
		-webkit-tap-highlight-color: transparent;
		&:active {
			@apply bg-gray-200;
			@apply text-shamrock-400;
		}
	}
	@media (hover: hover) and (pointer: fine) {
		a:hover {
			@apply bg-gray-200;
			@apply text-shamrock-400;
		}
	}
}
</style>
