<template>
	<div class="m-4">
		<h1 class="text-lg underline my-2">{{ $t('message.recentpapers') }}</h1>
		<div v-for="paper in papers" id="paper" :key="paper.id">
			<a :href="paper.link" class="cursor-pointer" target="_blank">
				<p class="title text-md">{{ paper.title }}</p>
			</a>
			<div class="grid grid-cols-4">
				<div class="col-span-3">
					<p class="authors text-sm">{{ paper.authors }}</p>
					<p class="date-published text-xs">{{ paper.datePublished }}</p>
				</div>
				<div class="col-span-1">
					<a :href="paper.dLink" target="_blank" class="float-right">
						<img
							src="~/assets/icons/download.svg"
							alt="Download icon"
							title="Download icon"
							class="cursor-pointer"
						/>
					</a>
				</div>
			</div>
			<div class="pattern-dots-sm h-2 my-2"></div>
		</div>
	</div>
</template>

<script>
import RecentPapers from '~/assets/recentpapers.json';

export default {
	data() {
		return {
			papers: RecentPapers.papers,
			featuresOpen: false
		};
	},
	i18n: {
		messages: {
			en: {
				message: {
					recentpapers: 'Recent papers'
				}
			},
			es: {
				message: {
					recentpapers: 'Documentos recientes'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.title {
	max-width: 600px;
}
.paperbox {
	background-color: #dadada;
}
.authors {
	color: #03a688;
}
.date-published {
	font-family: 'Courier Prime', monospace;
}
</style>
