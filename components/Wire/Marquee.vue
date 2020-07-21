<template>
	<div id="notice" class="bg-red-500 h-8 my-4">
		<client-only>
			<dynamic-marquee
				direction="row"
				:speed="speed"
				:repeatMargin="margin"
				:repeat="repeat"
				:reverse="true"
			>
				<div class="whitespace-no-wrap flex flex-row items-center">
					<ol class="flex flex-row">
						<li>
							{{ $t('message.message1') }}
							<span class="mx-2">►</span>
						</li>
						<li>
							{{ $t('message.message2') }}
							<span class="mx-2">►</span>
						</li>
						<li>{{ $t('message.message3') }}<span class="mx-2">►</span></li>
					</ol>
				</div>
			</dynamic-marquee>
		</client-only>
	</div>
</template>

<script>
export default {
	data() {
		return {
			repeat: true,
			margin: 30,
			speed: {
				number: 75,
				type: 'pps'
			}
		};
	},
	i18n: {
		messages: {
			en: {
				message: {
					message1:
						'Hello! Thanks for stopping by. Make sure to check out the other areas of the website like our booklist!',
					message2:
						"Also, if you haven't messed around with the maps... go mess around with the maps!",
					message3:
						"Lastly, if you so happen to come across any funkiness or something you think isn't functioning properly, please let me know. Thanks!"
				}
			},
			es: {
				message: {
					message1:
						'¡Hola! Gracias por pasar. ¡Asegúrese de revisar las otras áreas del sitio web como nuestra lista de libros!',
					message2:
						'Además, si no ha jugado con los mapas ... ¡juegue con los mapas!',
					message3:
						'Por último, si te encuentras con alguna funkiness o algo que crees que no funciona correctamente, avísame. ¡Gracias!'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
#notice {
	background-color: #fae29b;
	border-top: 2px;
	border-bottom: 2px;
	border-color: #f2b705;
	border-style: dotted;
	padding: 2px 0;
}
</style>
