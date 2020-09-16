<template>
	<div>
		<h1 class="desc text-xl font-bold ml-12 my-4">
			{{ $t('message.tags') }}
		</h1>
		<div
			class="cats grid grid-flow-col grid-cols-2 grid-rows-4 text-lg md:text-xl bg-white shadow-inner rounded-md mx-8"
		>
			<div class="px-2 lg:px-4">
				<n-link class="text-md md:text-md" to="/tag/united-states">{{
					$t('message.us')
				}}</n-link>
			</div>
			<div class="px-2 lg:px-4">
				<n-link class="text-md md:text-md" to="/tag/mexican-dto">{{
					$t('message.mx')
				}}</n-link>
			</div>
			<div class="px-2 lg:px-4">
				<n-link class="text-md md:text-md" to="/tag/central-america">{{
					$t('message.ca')
				}}</n-link>
			</div>
			<div class="px-2 lg:px-4">
				<n-link class="text-md md:text-md" to="/tag/south-america">{{
					$t('message.sa')
				}}</n-link>
			</div>
			<div class="px-2 lg:px-4">
				<n-link class="text-md md:text-md" to="/tag/southeast-asia">{{
					$t('message.sea')
				}}</n-link>
			</div>
			<div class="px-2 lg:px-4">
				<n-link class="text-md md:text-md" to="/tag/film-and-television">{{
					$t('message.ft')
				}}</n-link>
			</div>
			<div class="px-2 lg:px-4">
				<n-link class="text-md md:text-md" to="/tag/announcements">{{
					$t('message.an')
				}}</n-link>
			</div>
			<div class="px-2 lg:px-4">
				<n-link class="text-md md:text-md" to="/tag/development">{{
					$t('message.dev')
				}}</n-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TagsList',
	i18n: {
		messages: {
			en: {
				message: {
					tags: 'Categories',
					us: 'United States',
					mx: 'Mexico',
					ca: 'Central America',
					sa: 'South America',
					sea: 'Southeast Asia',
					ft: 'Film & Television',
					an: 'Announcements',
					dev: 'Development'
				}
			},
			es: {
				message: {
					tags: 'Categorías',
					us: 'Estados Unidos',
					mx: 'México',
					ca: 'América Central',
					sa: 'América del Sur',
					sea: 'El sudeste de Asia',
					ft: 'Cine y Televisión',
					an: 'Anuncios',
					dev: 'Desarrollo de sitios web'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.cats {
	padding: 1em;
	a {
		box-shadow: inset 0 -8px 0 0 #f2cb05;
		font-weight: 700;
		white-space: nowrap;
	}
}
</style>
