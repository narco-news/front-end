<template>
	<div class="navbar text-sm">
		<div class="flex flex-row flex-no-wrap text-blue-500">
			<!-- <n-link :to="localePath('/about')" alt="About page">About</n-link> -->
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
		white-space: nowrap;
		font-weight: 600;
		font-family: 'Source Sans Pro', serif;
		&:hover {
			color: #7a7fe1;
			text-decoration: underline;
		}
		&:active {
			color: #7a7fe1;
		}
	}
}
</style>
