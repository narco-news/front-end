<template>
	<div
		v-if="!isHidden"
		style="animation-delay: 2s;"
		class="fixed bottom-0 z-20 animate__animated animate__backInUp w-full flex justify-center py-6 px-6"
	>
		<div>
			<div
				class="pop inline-flex items-center leading-none rounded-lg p-3 shadow-xl"
			>
				<span
					class="inline-flex text-white rounded-full h-14 w-14 p-2 ml-2 justify-center items-center"
					style="background-color: #f2f2f2; color: #f2b705;"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
					>
						<path
							fill="#F24405"
							d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"
						/></svg
				></span>
				<span class="grid grid-rows-1 px-1">
					<span
						style="color: #f2f2f2; font-weight: 700;"
						class="text-sm md:text-md text-center p-1"
						>{{ $t('message.popupText') }}</span
					>
				</span>
				<img
					src="../assets/icons/times.svg"
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
					popupText:
						"Hello again. The design portion of the website is almost complete. Please reach out if you notice anything wrong or that you feel isn't functioning properly. Thank you!"
				}
			},
			es: {
				message: {
					popupText:
						'Hola de nuevo. La parte de diseño del sitio web está casi completa. Comuníquese si nota que algo está mal o si siente que no funciona correctamente. ¡Gracias!'
				}
			}
		}
	}
};
</script>

<style>
.pop {
	background-color: #f24405;
}
.Lottie {
	margin-left: -25px;
	margin-top: -25px;
	margin-bottom: -20px;
	margin-right: -20px;
}
</style>
