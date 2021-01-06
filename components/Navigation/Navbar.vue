<template>
	<div
		class="navbar flex flex-row flex-no-wrap items-center text-xs md:text-sm text-blue-500"
	>
		<div class="flex flex-row flex-no-wrap">
			<n-link :to="localePath('/about')" alt="About page">
				{{ $t('message.about') }}
			</n-link>
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
					library: 'Library',
					about: 'About'
				}
			},
			es: {
				message: {
					pa: 'Agregado de la prensa',
					library: 'Biblioteca',
					about: 'Sobre'
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
		text-decoration: underline;
		@apply rounded-md;
		-webkit-tap-highlight-color: transparent;
		&:active {
			@apply bg-gray-100;
			@apply text-blue-600;
			text-decoration: none;
		}
	}
	@media (hover: hover) and (pointer: fine) {
		a:hover {
			@apply bg-gray-100;
			@apply text-royal-600;
			text-decoration: none;
		}
	}
}
</style>
