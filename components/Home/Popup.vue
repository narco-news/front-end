<template>
	<div
		v-if="!isHidden"
		style="animation-delay: 2s;"
		class="fixed bottom-0 z-20 animate__animated animate__backInUp w-full flex justify-center py-8 px-8 md:px-16 lg:px-32"
	>
		<div>
			<div
				class="box flex flex-row items-center justify-center p-3 rounded-lg shadow-xl"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#f2f2f2"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-alert-circle w-24"
				>
					<circle cx="12" cy="12" r="10"></circle>
					<line x1="12" y1="8" x2="12" y2="12"></line>
					<line x1="12" y1="16" x2="12.01" y2="16"></line>
				</svg>
				<span class="grid grid-rows-1 px-1">
					<span class="words text-sm md:text-md text-center p-1">{{
						$t('message.text')
					}}</span>
				</span>
				<img
					src="~/assets/icons/times.svg"
					width="20"
					height="20"
					style="min-width: 20px; min-height: 20px;"
					@click="isHidden = true"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isHidden: false
		};
	},
	i18n: {
		messages: {
			en: {
				message: {
					text:
						'Hello again! Much still in development around here, but getting closer. Feel free to send me a public or private message on Twitter if you see something you think I missed. Thank you!'
				}
			},
			es: {
				message: {
					text:
						'¡Hola de nuevo! Mucho aún en desarrollo por aquí, pero cada vez más cerca. No dudes en enviarme un mensaje público o privado en Twitter si ves algo que crees que me perdí. ¡Gracias!'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.box {
	background-color: #f26457;
	color: #f2f2f2;
}
.words {
	font-family: 'IBM Plex Sans', sans-serif;
	font-weight: 500;
}
</style>
