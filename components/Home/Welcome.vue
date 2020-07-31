<template>
	<div>
		<!-- Welcome Message -->
		<div class="grid grid-cols-1">
			<div style="background-color: #f2f2f2;">
				<p
					style="font-weight: 500;"
					class="text-sm md:text-md lg:text-xl px-4 py-2"
				>
					{{ $t('message.greeting') }}
					<i18n path="message.aboutGreeting" tag="label" for="message.about">
						<n-link id="e1" to="/about" class="hvr-pop">{{
							$t('message.about')
						}}</n-link>
					</i18n>
					<i18n
						path="message.newswireGreeting"
						tag="label"
						for="message.newswire"
					>
						<n-link id="e2" to="/wire" class="hvr-pop">{{
							$t('message.newswire')
						}}</n-link>
					</i18n>
					<i18n path="message.conclude" tag="label" for="message.email">
						<n-link id="e3" to="#" class="hvr-pop disabled">
							{{ $t('message.email') }}
						</n-link>
					</i18n>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
import {annotate, annotationGroup} from 'rough-notation';

export default {
	name: 'Welcome',
	mounted() {
		this.highlight();
	},
	methods: {
		highlight() {
			const a1 = annotate(document.querySelector('#e1'), {
				type: 'highlight',
				color: '#FFD54F',
				strokeWidth: 0.5,
				iterations: 1,
				animationDuration: 1000
			});
			const a2 = annotate(document.querySelector('#e2'), {
				type: 'highlight',
				color: '#FFD54F',
				strokeWidth: 0.5,
				iterations: 1,
				animationDuration: 1000
			});
			const a3 = annotate(document.querySelector('#e3'), {
				type: 'highlight',
				color: '#FFD54F',
				strokeWidth: 0.5,
				iterations: 1,
				animationDuration: 1000
			});
			const ag = annotationGroup([a1, a2, a3]);
			ag.show();
		}
	},

	i18n: {
		messages: {
			en: {
				message: {
					featured: 'Featured',
					welcome: 'Welcome!',
					greeting:
						"You've stumbled upon our digital compendium on drug trafficking and organized crime. We focus on aggregating and parsing open source information from various places around the Internet.",
					about: 'about',
					aboutGreeting: 'For more regarding us, look at the {0} page.',
					newswire: 'newswire.',
					newswireGreeting:
						'To see the latest work published by our team, check the {0}',
					conclude:
						"Should you have any questions, please don't hesitate to {0}",
					email: 'contact us.'
				}
			},
			es: {
				message: {
					featured: 'Destacados',
					welcome: '¡Bienvenido!',
					greeting:
						'Te has topado con nuestro compendio digital sobre narcotráfico y crimen organizado. Nos enfocamos en agregar y analizar información de código abierto de varios lugares en Internet.',
					about: 'acerca',
					aboutGreeting: 'Para más sobre nosotros, consulte la página {0} de.',
					newswire: 'portal de noticias',
					newswireGreeting:
						'Para ver el último trabajo publicado por nuestro equipo, consulte el {0}.',
					conclude: 'Si tiene alguna pregunta, por favor no dude en {0}.',
					email: 'contactarnos'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped></style>
