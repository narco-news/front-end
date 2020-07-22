<template>
	<div id="sticky-header" class="grid grid-cols-4 gap-4 sticky top-0 py-1 z-40">
		<div class="col-span-1 ml-2"><LanguageToggle /></div>
		<div class="col-span-1">{{ $t('message.date') }}</div>
		<div class="col-span-1">
			<QuickLinks />
		</div>
		<div class="col-span-1">
			<SocialLinks />
		</div>
	</div>
</template>

<script>
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import LanguageToggle from '~/components/Navigation/LanguageToggle';
import QuickLinks from '~/components/Navigation/QuickLinks';
import SocialLinks from '~/components/Navigation/SocialLinks';

export default {
	name: 'StickyHeader',
	components: {
		LanguageToggle,
		QuickLinks,
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
	color: #f2f2f2;
	font-weight: 600;
	font-size: 11px;
}
</style>
