<template>
	<div
		class="flex flex-row flex-no-wrap whitespace-no-wrap justify-end md:justify-center"
	>
		<n-link to="/wire" class="news flex flex-row flex-no-wrap mr-2">
			<img
				src="~/assets/icons/activity-16.svg"
				alt="Newswire icon"
				class="mr-1"
			/>
			<div class="hidden md:inline">{{ $t('message.newswire') }}</div>
		</n-link>

		<a
			href="https://wiki.narco.news"
			class="discuss flex flex-row flex-no-wrap"
		>
			<img
				src="~/assets/icons/sidebar.svg"
				alt="Discussion icon"
				class="mr-1"
			/>
			<div class="hidden md:inline">{{ $t('message.wiki') }}</div>
		</a>
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
					wiki: 'Wiki'
				}
			},

			es: {
				message: {
					newswire: 'Portal de noticias',
					wiki: 'Wiki'
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
