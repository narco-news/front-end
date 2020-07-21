<template>
	<div class="flex flex-row justify-end mt-1 mb-3">
		<div
			class="tags w-4/5 md:w-3/4 lg:w-2/3 flex flex-wrap md:flex-row text-md whitespace-no-wrap justify-end pr-2 mb-2"
		>
			<n-link to="#">{{ $t('message.unitedstates') }}</n-link>
			<n-link to="#">{{ $t('message.mexico') }}</n-link>
			<n-link to="#">{{ $t('message.centralamerica') }}</n-link>
			<n-link to="#">{{ $t('message.southamerica') }}</n-link>
			<n-link to="#">{{ $t('message.europe') }}</n-link>
			<n-link to="#">{{ $t('message.seasia') }}</n-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TagsBox',
	i18n: {
		messages: {
			en: {
				message: {
					mexico: 'Mexico',
					centralamerica: 'Central America',
					southamerica: 'South America',
					europe: 'Europe',
					unitedstates: 'United States',
					seasia: 'Southeast Asia'
				}
			},
			es: {
				message: {
					mexico: 'México',
					centralamerica: 'Centroamérica',
					southamerica: 'Sudamerica',
					europe: 'Europa',
					unitedstates: 'Estados Unidos',
					seasia: 'El sudeste de Asia'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.tags {
	background-color: #f2f2f2;

	line-height: 1.3;
}
a {
	background-color: #f2f2f2 !important;
	padding: 1px 3px;
	margin: 2px 4px;
	font-weight: 700;
	text-transform: uppercase;
	color: black;
	box-shadow: inset 0 -10px 0 0 #f2cb05;
	&:hover {
		box-shadow: inset 0 0px 0 0 #f2e205;
	}
	&:active {
		box-shadow: inset 0 0px 0 0 #f2e205;
	}
}
</style>
