<template>
	<div class="title-box">
		<div class="inline-block">
			<n-link :to="localePath('/')">
				<img
					src="~/assets/images/bw-nn-logo.png"
					alt="narco.news Logo"
					class="w-56 md:w-64"
				/>
				<p class="subtitle">
					{{ $t('message.sub') }}
				</p>
			</n-link>
		</div>
	</div>
</template>

<script>
export default {
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
	display: inline-block;
	letter-spacing: 1;
	max-width: 260px;
	font-size: 14px;
}
</style>
