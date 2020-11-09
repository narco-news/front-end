<template>
	<div class="large-barrier p-6 lg:p-8">
		<div class="text-sm md:text-lg">
			{{ $t('message.introduction') }}
		</div>
		<div class="quote shadow-md rounded-md text-sm md:text-md">
			<i18n path="message.first_quote" for="source">
				<a
					href="https://mexicobusiness.news/policyandeconomy/news/mexico-ranks-second-fake-news-generation"
					rel="nofollow"
					target="_blank"
					class="underline text-green-500"
					>{{ $t('message.source') }}</a
				>
			</i18n>
			<span class="font-bold italic">{{ $t('message.second_quote') }}</span>
		</div>
		<div class="text-sm md:text-lg">
			{{ $t('message.textone') }}
			<RoughNotation
				:is-show="isShow"
				:iterations="3"
				:animationDuration="1500"
				type="highlight"
				color="#FFD54F"
			>
				<span>{{ $t('message.ic') }}</span>
			</RoughNotation>
			{{ $t('message.texttwo') }}
		</div>
		<Focus />
		<FAQ />
		<div
			class="quote-2 text-sm md:text-md h-auto rounded-md shadow-md overflow-hidden"
		>
			<span class="float-left italic"> "{{ $t('message.dt') }}" </span>

			<div
				style="
					color: #03a688;
					font-weight: 600;
					font-size: 9px;
					font-family: 'Courier Prime';
					max-width: 300px;
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
</template>

<script>
import Focus from '~/components/Home/Focus';
import FAQ from '~/components/Home/FAQ';
export default {
	components: {
		Focus,
		FAQ
	},
	data() {
		return {
			isShow: true,
			twitter_description:
				'Open source research and tooling focused on the global war on the drugs',
			twitter_title: 'narco.news',
			feature_image: 'https://narco.news/images/twt-banner.png',
			title: 'About Us'
		};
	},
	i18n: {
		messages: {
			en: {
				message: {
					introduction:
						'We created this website out of the need for better information about violence in Mexico. A lot of it in English is not well documented and often shared without much context. Our plan is to change that by documenting and providing accurate sourcing for significant activities. Also, publishing deep dives and analysis from open-source information with a focus on social media.',
					first_quote:
						'An {0} conducted by Luis Ángel Hurtado, Professor and Researcher at UNAM’s School of Political and Social Sciences concluded',
					source: 'analysis',
					second_quote:
						'"the misinformation epidemic reaches important figures in our country and renders us (Mexico) the second-largest generator of fake news after Turkey."',
					textone:
						"Currently we're in an era of information and conversation wealth. That paired with confusion and disarray throws us into a realm we've dubbed the",
					ic: 'information clusterfuck.',
					texttwo:
						'Merriam-Websters defines clusterfuck as a "complex and utterly disordered and mismanaged situation." While Oxford states it as a "disastrously mishandled situation or undertaking." These definitions provide us valuable reminders, the situation is complex and it has disastrous consequences.',
					dt:
						"Drug trafficking, for example, is not the behavior of a daring, secretive, and clever operator; it is a complex international business system, deeply touching the lives of peasant farmers, political leaders in the nation's capital, or the highly competent business men and women who make the system go, and reap enormous profits from it. Therefore, in order for us to understand them, to perceive their broader meaning, they must be studied as systematic behavior, in the full context of their economic, political, and cultural aspects."
				}
			},
			es: {
				message: {
					introduction: '',
					first_quote:
						'Un {0} realizado por Luis Ángel Hurtado, profesor e investigador de la Facultad de Ciencias Políticas y Sociales de la UNAM concluyó',
					source: 'análisis',
					second_quote:
						'"la epidemia de desinformación llega a importantes figuras de nuestro país y nos convierte (México) en el segundo mayor generador de noticias falsas después de Turquía".',
					textone:
						'Actualmente estamos en una era de riqueza de información y conversación. Eso, junto con la confusión y el desorden, nos lleva a un reino que hemos llamado el',
					ic: 'información clusterfuck.',
					texttwo:
						'Merriam-Websters define clusterfuck como una "compleja y completamente desordenada y mal manejada situación". Mientras que Oxford lo declara como una "situación o empresa desastrosamente mal manejada". Estas definiciones nos proporcionan valiosos recordatorios, la situación es compleja y tiene consecuencias desastrosas.',
					dt:
						'"El tráfico de drogas, por ejemplo, no es el comportamiento de un operador audaz, reservado e inteligente; es un complejo sistema internacional de negocios, que toca profundamente la vida de los campesinos, los líderes políticos de la capital de la nación, o los hombres y mujeres de negocios altamente competentes que hacen funcionar el sistema y cosechan enormes beneficios de él. Por lo tanto, para que los entendamos, para percibir su significado más amplio, deben ser estudiados como un comportamiento sistemático, en el contexto completo de sus aspectos económicos, políticos y culturales".'
				}
			}
		}
	},
	head() {
		return {
			title: 'narco.news - About',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.twitter_description
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.twitter_description
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: this.feature_image
				},
				{
					hid: 'og:site_name',
					property: 'og:site_name',
					content: this.twitter_title
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: this.twitter_title
				},
				{hid: 'og:url', property: 'og:url', content: process.env.blogUrl},
				{
					hid: 'apple-mobile-web-app-title',
					name: 'apple-mobile-web-app-title',
					content: this.twitter_title
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: this.twitter_description
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: this.feature_image
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: this.twitter_title
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.quote {
	background-color: white;
	font-family: 'EB Garamond', sans-serif;
	padding: 1em 1em;
	margin: 2em 2em;
	border: 1px solid #03a688;
}
.quote-2 {
	background-color: white;
	font-family: 'EB Garamond', sans-serif;
	padding: 1em 1em;
	margin: 8em 2em 1em 2em;
	border: 1px solid #03a688;
}
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
