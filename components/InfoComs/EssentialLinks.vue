<template>
	<div>
		<div class="">
			<span
				style="color: #f24405;"
				class="text-sm md:text-md font-bold font-mono"
			>
				{{ $t('message.esslinks') }}
			</span>
		</div>
		<div id="box" class="h-64 p-2 rounded-lg shadow-lg">
			<div class="px-4 mt-2">
				<div>
					<h1 class="uppercase font-bold text-xs">
						[ {{ $t('message.data') }} ]
					</h1>
					<div
						class="flex flex-row flex-wrap gap-2 px-2 text-xs font-mono py-1"
					>
						<div class="mr-4">
							<a
								href="https://feminicidiosmx.crowdmap.com"
								target="_blank"
								tabindex="7"
							>
								<span class="borderLeftRight">Feminicidio Map</span>
							</a>
						</div>
						<div>
							<a href="https://elcri.men/en" target="_blank" tabindex="8">
								<span class="borderLeftRight">ELCRI.en</span>
							</a>
						</div>
						<div>
							<a href="http://semaforo.com.mx" target="_blank" tabindex="9">
								<span class="borderLeftRight">Semáforo Delictivo</span>
							</a>
						</div>
					</div>
				</div>
				<div>
					<h1 class="uppercase font-bold text-xs">
						[ {{ $t('message.gov') }} ]
					</h1>
					<div
						class="flex flex-row flex-wrap gap-2 px-2 text-xs font-mono py-1"
					>
						<div class="mr-2">
							<a
								href="https://www.dea.gov/press-releases"
								target="_blank"
								tabindex="1"
							>
								<span class="borderLeftRight">DEA</span>
							</a>
						</div>
						<div class="mr-2">
							<a
								href="https://www.justice.gov/usao/pressreleases"
								target="_blank"
								tabindex="2"
							>
								<span class="borderLeftRight">DOJ</span>
							</a>
						</div>

						<div class="mr-2">
							<a
								href="https://www.fbi.gov/news/pressrel"
								target="_blank"
								tabindex="3"
							>
								<span class="borderLeftRight">FBI</span>
							</a>
						</div>

						<div class="mr-2">
							<a
								href="https://www.gob.mx/sedena/prensa/comunicados-de-prensa-2020"
								target="_blank"
								tabindex="4"
							>
								<span class="borderLeftRight">SEDENA</span>
							</a>
						</div>
						<div class="mr-2">
							<a
								href="https://www.gob.mx/semar/archivo/prensa"
								target="_blank"
								tabindex="5"
							>
								<span class="borderLeftRight">SEMAR</span>
							</a>
						</div>
						<div class="mr-2">
							<a
								href="https://www.gob.mx/fgr/es/archivo/prensa"
								target="_blank"
								tabindex="6"
							>
								<span class="borderLeftRight">FGR</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'EssentialLinks',
	i18n: {
		messages: {
			en: {
				message: {
					esslinks: 'Essential Links',
					data: 'Data',
					gov: 'Government Press Releases'
				}
			},
			es: {
				message: {
					esslinks: 'Enlaces esenciales de internet',
					data: 'Datos',
					gov: 'Comunicados de prensa del gobierno'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
a {
	color: #f24405;
	text-decoration: underline;
}
h1 {
	color: #f24405;
}
#box {
	background-color: #f2f2f2;
}
</style>
