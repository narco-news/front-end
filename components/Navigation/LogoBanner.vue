<template>
	<div class="title-box">
		<div class="inline-block">
			<n-link :to="localePath('/')">
				<img
					src="~/assets/images/bw-nn-logo.png"
					alt="narco.news Logo"
					class="w-56 md:w-64"
				/>
				<div class="subtitle">
					<RoughNotation
						:is-show="isShow"
						:iterations="3"
						:animationDuration="1500"
						type="highlight"
						color="#FFD54F"
					>
						<span class="text-md">
							{{ $t('message.sub') }}
						</span>
					</RoughNotation>
				</div>
			</n-link>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isShow: true
		};
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
	max-width: 280px;
	font-weight: 600;
	letter-spacing: 0.4px;
}
</style>
