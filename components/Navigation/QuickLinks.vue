<template>
	<div
		class="flex flex-row flex-no-wrap whitespace-no-wrap justify-end md:justify-start"
	>
		<div class="item">
			<n-link :to="localePath('/wire')" class="news flex flex-row flex-no-wrap">
				<svg
					class="w-4 h-4"
					fill="none"
					stroke="#595FD9"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 10V3L4 14h7v7l9-11h-7z"
					></path>
				</svg>
				<div class="hidden md:inline">{{ $t('message.newswire') }}</div>
			</n-link>
		</div>
		<div class="item">
			<n-link :to="localePath('/pa')" class="feeds flex flex-row flex-no-wrap">
				<svg
					class="w-4 h-4"
					fill="none"
					stroke="#03A688"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
					></path>
				</svg>
				<div class="hidden md:inline">{{ $t('message.feeds') }}</div>
			</n-link>
		</div>
		<!-- <div class="item">
			<a href="https://wiki.narco.news" class="wiki flex flex-row flex-no-wrap">
				<svg
					class="w-4 h-4"
					fill="none"
					stroke="#595FD9"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
					></path>
				</svg>
				<div class="hidden md:inline">{{ $t('message.wiki') }}</div>
			</a>
		</div> -->
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
					wiki: 'Wiki',
					feeds: 'Press Aggregate'
				}
			},

			es: {
				message: {
					newswire: 'Portal de noticias',
					wiki: 'Wiki',
					feeds: 'Agregada de prensa'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.item {
	svg {
		margin-right: 0.5em;
	}
	margin: 0 0.1em;
	@media (min-width: 415px) {
		margin: 0 1em;
	}
}
.news {
	div:hover {
		color: #595fd9;
	}
}
.wiki {
	div:hover {
		color: #595fd9;
	}
}
.feeds {
	div:hover {
		color: #03a688;
	}
}
</style>
