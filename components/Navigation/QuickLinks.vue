<template>
	<div class="flex flex-row flex-no-wrap gap-4 md:gap-8 whitespace-no-wrap">
		<n-link to="/wire" class="news flex flex-row flex-no-wrap mr-2">
			<img
				src="~/assets/icons/activity-16.svg"
				alt="Newswire icon"
				class="mr-1"
			/>
			<div class="hidden md:inline">{{ $t('message.newswire') }}</div>
		</n-link>

		<n-link to="#" class="discuss flex flex-row flex-no-wrap">
			<img
				src="~/assets/icons/message-circle-16.svg"
				alt="Discussion icon"
				class="mr-1"
			/>
			<div class="hidden md:inline">{{ $t('message.discussionboard') }}</div>
		</n-link>
	</div>
</template>

<script>
export default {
	name: 'QuickLinks',
	i18n: {
		messages: {
			en: {
				message: {
					newswire: 'Newswire',
					discussionboard: 'Discussion Board'
				}
			},

			es: {
				message: {
					newswire: 'Portal de noticias',
					discussionboard: 'Panel de discusión'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.news {
	div:hover {
		color: #f26457;
	}
}
.discuss {
	div:hover {
		color: #595fd9;
	}
}
</style>
