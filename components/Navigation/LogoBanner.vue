<template>
	<div class="title-box">
		<n-link :to="localePath('/')">
			<img
				src="~/assets/images/bw-nn-logo.png"
				alt="narco.news Logo"
				class="w-56 md:w-64"
			/>
			<p id="high" class="subtitle">
				{{ $t('message.sub') }}
			</p>
		</n-link>
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
.title-box {
	margin-top: 1em;
	margin-bottom: 3em;
	text-align: center;
	img {
		margin: 0 auto;
	}
}
.subtitle {
	display: inline;
	font-weight: 600;
	letter-spacing: 1;
}
</style>
