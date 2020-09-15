<template>
	<div
		id="logobanner"
		style="animation-delay: 2s;"
		class="h-20 flex flex-row flex-no-wrap justify-center"
	>
		<div>
			<n-link :to="localePath('/')">
				<img
					src="~/assets/images/bw-nn-logo.png"
					alt="narco.news Logo"
					class="w-56 md:w-64"
				/>
				<p id="high" class="text-center absolute">
					{{ $t('message.sub') }}
				</p>
			</n-link>
		</div>
	</div>
</template>

<script>
import {annotate} from 'rough-notation';
export default {
	mounted() {
		this.highlight();
	},
	methods: {
		highlight() {
			const e = document.querySelector('#high');
			const annotation = annotate(e, {
				type: 'highlight',
				color: '#FFD54F',
				strokeWidth: 2,
				iterations: 3,
				animationDuration: 1500
			});
			annotation.show();
		}
	},
	i18n: {
		messages: {
			en: {
				message: {
					sub: 'Open Source Drug War Investigations'
				}
			},
			es: {
				message: {
					sub:
						'Investigaciones de código abierto sobre la guerra contra las drogas'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Crete+Round&family=Faustina:wght@700&display=swap');
#logobanner {
	margin-top: 4px;
}
p {
	font-family: 'IBM Plex Sans', sans;
	font-weight: 700;
	font-size: 14px;
	color: #0d0d0d;
	margin-top: 4px;
	width: 250px;
}
</style>
