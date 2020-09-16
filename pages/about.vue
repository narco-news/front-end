<template>
	<div class="p-2 md:p-8">
		<div class="overflow-hidden mx-2">
			<div
				style="animation-duration: 1s;"
				class="px-2 text-center animate__animated animate__fadeIn"
			></div>
			<div class="pattern-dots-md py-2 m-4">
				<div
					style="
						color: #0d0d0d;
						border: solid 2px #03a688;
						background-color: #fbfbfb;
					"
					class="shadow-md m-6 p-4 text-xs rounded"
				>
					{{ $t('message.quoteone') }}
					<span class="italic font-bold">{{ $t('message.quotetwo') }}</span>
				</div>
			</div>

			<div class="text-md px-4 pt-2">
				{{ $t('message.textone') }}
				<span id="highway">{{ $t('message.ic') }}</span>
				{{ $t('message.texttwo') }}

				<div class="pattern-dots-md py-2 m-4">
					<div
						style="
							color: #0d0d0d;
							border: solid 2px #03a688;
							background-color: #fbfbfb;
						"
						class="p-4 m-5 text-xs h-auto rounded-md shadow-md overflow-hidden"
					>
						<span class="float-left italic">
							{{ $t('message.dt') }}
						</span>

						<div
							style="
								color: #262626;
								font-weight: 600;
								font-size: 9px;
								font-family: 'Courier Prime';
							"
							class="mt-2 float-right text-right"
						>
							Martin, J. M., and A. T. Romano.
							<span class="italic"
								>Multinational crime: Terrorism, espionage, drug and arms
								trafficking</span
							>. SAGE Publications, 1992.
						</div>
					</div>
				</div>

				{{ $t('message.focus') }}

				<div style="color: #ff5e70; text-align: center;" class="text-lg my-6">
					{{ $t('message.lastline') }}
				</div>
			</div>
		</div>
		<div class="flex flex-wrap justify-center my-5">
			<div class="m-4">
				<img class="shadow-lg mx-auto" src="~/assets/images/ani-avatar.png" />

				<div class="flex flex-col justify-center m-2">
					<span class="py-1 text-2xl font-bold text-center">
						Ani
					</span>
				</div>
				<div class="py-2 flex justify-center color-soc-icons"></div>
			</div>
			<div class="m-4">
				<img
					class="shadow-lg mx-auto"
					src="~/assets/images/christopher-avatar.png"
				/>
				<div class="flex flex-col justify-center m-2">
					<span class="py-1 text-2xl font-bold text-center">
						Christopher
					</span>
				</div>
				<div class="py-2 flex justify-center color-soc-icons">
					<a href="https://twitter.com/just_some_d00d" target="_blank">
						<img
							src="~/assets/icons/twitter.svg"
							class="mx-4"
							width="25"
							height="25"
						/>
					</a>

					<a href="https://d00d.blog" target="_blank">
						<img
							src="~/assets/icons/link.svg"
							class="mx-4"
							width="25"
							height="25"
						/>
					</a>
				</div>
			</div>
			<div class="m-4">
				<img
					class="shadow-lg mx-auto"
					src="~/assets/images/parece-avatar.png"
				/>
				<div class="flex flex-col justify-center m-2">
					<span class="py-1 text-2xl font-bold text-center">
						Parece
					</span>
				</div>
				<div class="py-2 flex justify-center color-soc-icons">
					<a href="https://twitter.com/ElParece" target="_blank">
						<img
							src="~/assets/icons/twitter.svg"
							class="mx-4"
							width="25"
							height="25"
						/>
					</a>

					<a href="https://narco.news/author/elparece" target="_blank">
						<img
							src="~/assets/icons/link.svg"
							class="mx-4"
							width="25"
							height="25"
						/>
					</a>
				</div>
			</div>
			<div class="m-4">
				<img
					class="shadow-lg mx-auto"
					src="../assets/images/michael-avatar.png"
				/>
				<div class="flex flex-col justify-center m-2">
					<span class="py-1 text-2xl font-bold text-center">
						Michael
					</span>
				</div>
				<div class="py-2 flex justify-center color-soc-icons">
					<a href="https://twitter.com/OptimisticOsi" target="_blank">
						<img
							src="~/assets/icons/twitter.svg"
							class="mx-4"
							width="25"
							height="25"
						/>
					</a>

					<a href="https://narco.news/author/michael" target="_blank">
						<img
							src="~/assets/icons/link.svg"
							class="mx-4"
							width="25"
							height="25"
						/>
					</a>
				</div>
			</div>
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
			const e = document.querySelector('#highway');
			const annotation = annotate(e, {
				type: 'highlight',
				color: '#FFD54F',
				strokeWidth: 1,
				iterations: 2,
				animationDuration: 2000
			});
			annotation.show();
		}
	},
	head() {
		return {
			title: 'About narco.news'
		};
	},
	i18n: {
		messages: {
			en: {
				message: {
					quoteone:
						'An analysis conducted by Luis Ángel Hurtado, Professor and Researcher at UNAM’s School of Political and Social Sciences concluded',
					quotetwo:
						'"the misinformation epidemic reaches important figures in our country and renders us (Mexico) the second-largest generator of fake news after Turkey."',
					textone:
						"We're currently in an era of information and conversation wealth. That paired with confusion and disarray throws us into a realm we've dubbed the",
					ic: 'information clusterfuck',
					texttwo:
						'. Merriam-Websters defines clusterfuck as a "complex and utterly disordered and mismanaged situation." While Oxford states it as a "disastrously mishandled situation or undertaking." These definitions provide us valuable reminders, the situation is complex and it has disastrous consequences.',
					dt:
						"Drug trafficking, for example, is not the behavior of a daring, secretive, and clever operator; it is a complex international business system, deeply touching the lives of peasant farmers, political leaders in the nation's capital, or the highly competent business men and women who make the system go, and reap enormous profits from it. Therefore, in order for us to understand them, to perceive their broader meaning, they must be studied as systematic behavior, in the full context of their economic, political, and cultural aspects.",
					focus:
						"Our focused is on drug trafficking and organized crime. But further how it plays out in a digital globally-connected 21st century world. Every day more people around the world link up to the Internet for the first time. It would be foolish to think that any of it will become clearer as time goes on. But we're lucky though with the plethora of information the digital world naturally offers. Therefore our quest becomes aggregating into a central place the chaos. With a hope of untangling and parsing it to provide beneficial insight.",
					lastline:
						"We've established this digital compendium as our starting place."
				}
			},
			es: {
				message: {
					quoteone:
						'Un análisis realizado por Luis Ángel Hurtado, profesor e investigador de la Facultad de Ciencias Políticas y Sociales de la UNAM concluyó',
					quotetwo:
						'"la epidemia de desinformación llega a importantes figuras de nuestro país y nos convierte (México) en el segundo mayor generador de noticias falsas después de Turquía".',
					textone:
						'Actualmente estamos en una era de riqueza de información y conversación. Eso, junto con la confusión y el desorden, nos lleva a un reino que hemos llamado el',
					ic: 'información clusterfuck',
					texttwo:
						'. Merriam-Websters define clusterfuck como una "compleja y completamente desordenada y mal manejada situación". Mientras que Oxford lo declara como una "situación o empresa desastrosamente mal manejada". Estas definiciones nos proporcionan valiosos recordatorios, la situación es compleja y tiene consecuencias desastrosas.',
					dt:
						'"El tráfico de drogas, por ejemplo, no es el comportamiento de un operador audaz, reservado e inteligente; es un complejo sistema internacional de negocios, que toca profundamente la vida de los campesinos, los líderes políticos de la capital de la nación, o los hombres y mujeres de negocios altamente competentes que hacen funcionar el sistema y cosechan enormes beneficios de él. Por lo tanto, para que los entendamos, para percibir su significado más amplio, deben ser estudiados como un comportamiento sistemático, en el contexto completo de sus aspectos económicos, políticos y culturales".',
					focus:
						'Nos centramos en el tráfico de drogas y la delincuencia organizada. Pero más allá de cómo se desarrolla en un mundo digital del siglo XXI conectado globalmente. Cada día más personas de todo el mundo se conectan a Internet por primera vez. Sería tonto pensar que algo de esto se aclarará con el paso del tiempo. Pero tenemos suerte con la plétora de información que el mundo digital ofrece naturalmente. Por lo tanto, nuestra búsqueda se convierte en agregar en un lugar central el caos. Con la esperanza de desenredarlo y analizarlo para proporcionar una visión beneficiosa.',
					lastline:
						'Hemos establecido este compendio digital como nuestro punto de partida.'
				}
			}
		}
	}
};
</script>

<style lang="scss">
.color-soc-icons {
	img {
		-webkit-transition: -webkit-transform 0.8s ease-in-out;
		transition: transform 0.8s ease-in-out;
	}
	a:hover img {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
</style>
