<template>
	<div>
		<h1 class="desc text-xl font-bold ml-12 my-4">
			{{ $t('message.focus') }}
		</h1>
		<div class="feat-box p-6">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
				<div class="grid grid-flow-row">
					<img
						src="~/assets/icons/research.svg"
						class="w-16"
						alt="Research icon"
					/>
					<h2 class="text-xl font-bold">{{ $t('message.title1') }}</h2>
					<p class="text-xs md:text-sm">
						{{ $t('message.text1') }}
					</p>
				</div>
				<div class="grid grid-flow-row">
					<img
						src="~/assets/icons/flow-chart-design.svg"
						class="w-16"
						alt="Flow chart icon"
					/>
					<h2 class="text-xl font-bold">{{ $t('message.title2') }}</h2>
					<p class="text-xs md:text-sm">
						{{ $t('message.text2') }}
					</p>
				</div>
				<div class="grid grid-flow-row">
					<img
						src="~/assets/icons/image-analysis.svg"
						class="w-16"
						alt="Image analysis icon"
					/>
					<h2 class="text-xl font-bold">{{ $t('message.title3') }}</h2>
					<p class="text-xs md:text-sm">
						{{ $t('message.text3') }}
					</p>
				</div>
				<div class="grid grid-flow-row">
					<img
						src="~/assets/icons/layer.svg"
						class="w-16"
						alt="Social trends icon"
					/>
					<h2 class="text-xl font-bold">{{ $t('message.title4') }}</h2>
					<p class="text-xs md:text-sm">
						{{ $t('message.text4') }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Features',
	i18n: {
		messages: {
			en: {
				message: {
					focus: 'Focus',
					title1: 'Collection & Research',
					text1:
						'Aggregation of information from social media, press publications, academic literature, think tanks and public court documents. ',
					title2: 'Graphics & Diagrams',
					text2:
						'Coming up with creative and effective ways that make it easier for people to understand it all. A picture says a thousand words! ',
					title3: 'Geolocation & Mapping',
					text3:
						"Paying extra close attention to geography and it's relation to everything. Including using maps to make everything easier to visualize. ",
					title4: 'Social Media Trends',
					text4:
						"In the past many gave little attention to what was uploaded to social media networks. We're trying to change that and further understand the role they play. "
				}
			},
			es: {
				message: {
					focus: 'Enfoque',
					title1: 'Colección e investigación',
					text1:
						'Agregación de información de los medios de comunicación social, publicaciones de prensa, literatura académica, grupos de reflexión y documentos judiciales públicos. ',
					title2: 'Gráficos y diagramas',
					text2:
						'Inventar formas creativas y efectivas que faciliten a la gente la comprensión de todo esto. ¡Una imagen dice mil palabras! ',
					title3: 'Geolocalización y cartografía',
					text3:
						'Prestando una atención extra a la geografía y su relación con todo. Incluyendo el uso de mapas para hacer todo más fácil de visualizar. ',
					title4: 'Tendencias en redes sociales',
					text4:
						'En el pasado, muchos prestaron poca atención a lo que se subía a las redes de medios sociales. Estamos tratando de cambiar eso y entender mejor el papel que juegan. '
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.desc {
	color: #0d0d0d;
}
.feat-box {
	background-color: white;
	h1 {
		margin-bottom: 10px;
	}
	img {
		margin-bottom: 10px;
	}
}
h2 {
	font-family: 'IBM Plex Sans', sans;
	color: #03a688;
	line-height: 1.3;
}
</style>
