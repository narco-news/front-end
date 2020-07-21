<template>
	<div id="navbar" class="flex justify-end md:justify-center z-0">
		<div
			id="logo"
			class="px-12 mr-4 mt-4 max-w-xs animate__animated animate__slideInDown"
		>
			<n-link to="/">
				<img
					src="~/assets/images/bw-nn-logo.png"
					alt="narco.news Logo"
					title="narco.news Logo"
				/>
			</n-link>
			<span id="subtext" class="flex justify-center text-center select-none">
				{{ $t('message.subtext') }}
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Nav',
	data() {
		return {
			isOpen: false
		};
	},
	i18n: {
		messages: {
			en: {
				message: {
					subtext: 'open source drug war investigations'
				}
			},
			es: {
				message: {
					subtext:
						'investigaciones de código abierto sobre la guerra contra las drogas'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
#navbar {
	background-color: #f2f2f2;
}
#navLinks {
	font-weight: 600;
}
#subtext {
	color: #038c4c;
	font-family: 'Martel', serif;
	font-weight: 700;
	font-size: 11px;
}
</style>
