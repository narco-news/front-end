<template>
	<div
		id="sticky-header"
		class="grid grid-cols-4 md:grid-cols-5 gap-4 sticky top-0 py-1 z-40"
	>
		<div class="col-span-1 whitespace-no-wrap">
			{{ $t('message.date') }}
		</div>
		<div class="col-span-1"></div>
		<div class="hidden md:inline"></div>
		<div class="col-span-1">
			<SocialLinks />
		</div>
	</div>
</template>

<script>
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import SocialLinks from '~/components/Navigation/SocialLinks';

export default {
	name: 'StickyHeader',
	components: {
		SocialLinks
	},
	i18n: {
		messages: {
			en: {
				message: {
					date: dayjs().locale('en').format('MMMM D, YYYY')
				}
			},

			es: {
				message: {
					date: dayjs().locale('es').format('MMMM D, YYYY')
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
#sticky-header {
	background-color: #262626;
	color: #fefefe;
	font-weight: 600;
	font-size: 11px;
}
</style>
