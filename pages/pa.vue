<template>
	<div class="large-barrier feeds p-4 md:p-8 bg-white">
		<p class="intro my-2 text-sm">{{ $t('message.intro') }}</p>
		<h1 class="text-xl font-bold underline mb-2">
			{{ $t('message.spanishblogs') }}
		</h1>
		<details class="mb-6">
			<summary class="text-sm select-none cursor-pointer">{{
				$t('message.moreinfo')
			}}</summary>
			<p class="text-xs px-4 py-2 mb-4">
				<i18n path="message.sbtext" tag="p">
					<a
						href="https://en.wikipedia.org/wiki/Blog_del_Narco"
						class="text-red-600 underline font-bold"
						target="_blank"
						>{{ $t('message.ebdn') }}</a
					>
					<a
						href="https://en.wikipedia.org/wiki/Valor_por_Tamaulipas"
						class="text-red-600 underline font-bold"
						target="_blank"
					>
						{{ $t('message.vpt') }}
					</a>
				</i18n>
			</p>
		</details>

		<div
			class="feeds-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-serif"
		>
			<LongFeed feedTitle="El Blog del Narco" :feedUrl="ebdn2" class="mb-4" />
			<LongFeed feedTitle="Valor por Tamaulipas" :feedUrl="vpt" class="mb-4" />
			<LongFeed feedTitle="Historias del Narco" :feedUrl="hdn" class="mb-4" />
			<LongFeed feedTitle="Narco En Mexico" :feedUrl="nem" class="mb-4" />
			<LongFeed feedTitle="Mexico Codigo Rojo" :feedUrl="mcr" class="mb-4" />
			<LongFeed feedTitle="Infobae" :feedUrl="ib" class="mb-4" />
		</div>
		<h1 class="text-xl font-bold underline mb-2">
			{{ $t('message.english') }}
		</h1>
		<p class="text-xs px-4 mb-4">
			{{ $t('message.entext') }}
		</p>
		<div
			class="feeds-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-serif"
		>
			<LongFeed feedTitle="Border Report" :feedUrl="br" class="mb-4" />
			<LongFeed feedTitle="Mexico News Daily" :feedUrl="mnd" class="mb-b" />
			<LongFeed feedTitle="Mexico Today" :feedUrl="mt" class="mb-b" />
			<LongFeed feedTitle="AP Mexico" :feedUrl="apmx" class="mb-4" />
			<LongFeed feedTitle="Breitbart" :feedUrl="bbtx" class="mb-4" />
		</div>
		<h1 class="text-xl font-bold underline mb-2">
			Research & Investigative
		</h1>
		<div
			class="feeds-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-serif"
		>
			<LongFeed feedTitle="InSight Crime" :feedUrl="ic" class="mb-4" />
			<LongFeed feedTitle="El Centro" :feedUrl="swec" class="mb-4" />
		</div>
		<h1 class="text-xl font-bold underline mb-2">
			Tamsec
		</h1>
		<p class="text-xs px-4 mb-4">
			{{ $t('message.tamtext') }}
		</p>
		<div
			class="feeds-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-serif"
		>
			<LongFeed feedTitle="Hoy Tamaulipas" :feedUrl="ht" class="mb-4" />
			<LongFeed feedTitle="El Mañana Reynosa" :feedUrl="em" class="mb-4" />
			<LongFeed feedTitle="El Mañana NL" :feedUrl="emnl" class="mb-4" />
			<LongFeed
				feedTitle="El Diario de Victoria"
				:feedUrl="eddv"
				class="mb-4"
			/>
			<LongFeed feedTitle="El Sol de Tampico" :feedUrl="esdt" class="mb-4" />
			<LongFeed feedTitle="Optimus Informativo" :feedUrl="oi" class="mb-4" />
			<LongFeed feedTitle="Valor Tamaulipeco" :feedUrl="vpto" class="mb-4" />
		</div>
		<h1 class="text-xl font-bold underline mb-2">
			Gtosec
		</h1>
		<p class="text-xs px-4 mb-4">
			{{ $t('message.gtext') }}
		</p>
		<div
			class="feeds-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-serif"
		>
			<LongFeed feedTitle="El Sol de Bajío" :feedUrl="esdb" class="mb-4" />
			<LongFeed feedTitle="Noticieros En Línea" :feedUrl="nel" class="mb-4" />
			<LongFeed feedTitle="El Heraldo de León" :feedUrl="ehdl" class="mb-4" />
			<LongFeed feedTitle="Guanajuato Informa" :feedUrl="gi" class="mb-4" />
			<LongFeed feedTitle="Periódico Correo" :feedUrl="pc" class="mb-4" />
			<LongFeed feedTitle="Zona Franca" :feedUrl="zf" class="mb-4" />
			<LongFeed feedTitle="El Celayense" :feedUrl="ec" class="mb-4" />
			<LongFeed feedTitle="Informativo Agora GTO" :feedUrl="ia" />
		</div>
	</div>
</template>

<script>
import LongFeed from '~/components/LongFeed';

export default {
	name: 'Feeds',
	components: {
		LongFeed
	},
	data() {
		return {
			twitter_description:
				'Collection of feeds related to organized crime and security',
			twitter_title: 'Press Aggregate Tool',
			feature_image: 'https://narco.news/images/pa.png',
			title: 'narco.news',
			ebdn: process.env.ebdn,
			ebdn2: process.env.ebdn2,
			vpt: process.env.vpt,
			hdn: process.env.hdn,
			nem: process.env.nem,
			ib: process.env.ib,
			bb: process.env.bb,
			bbtx: process.env.bbtx,
			br: process.env.br,
			ic: process.env.ic,
			apmx: process.env.apmx,
			nyta: process.env.nyta,
			vpto: process.env.vpto,
			em: process.env.em,
			emnl: process.env.emnl,
			eddv: process.env.eddv,
			esdt: process.env.esdt,
			mnd: process.env.mnd,
			swec: process.env.swec,
			mt: process.env.mt,
			esdb: process.env.esdb,
			nel: process.env.nel,
			ehdl: process.env.ehdl,
			gi: process.env.gi,
			pc: process.env.pc,
			zf: process.env.zf,
			mcr: process.env.mcr,
			ec: process.env.ec,
			ia: process.env.ia,
			ht: process.env.ht,
			oi: process.env.oi
		};
	},
	i18n: {
		messages: {
			en: {
				message: {
					moreinfo: 'More info',
					intro:
						"This page is still under development. Some feeds might not always load and depending on how I'm scraping from the source, the amount of articles per source will vary. They will all automatically update when a new article is published.",
					spanishblogs: 'Spanish Narco Blogs',
					english: 'English Press',
					mexicopress: 'Mexico Press',
					sbtext:
						"The heart and soul of the information clusterfuck. Neither {0} (EBDN) listed is the original or ran by those who first launched it back in 2010. But the two websites listed below have the biggest presence on social media at the moment out of the assortment of old and/or fake EBDN accounts that exist. Same goes for {1} (VPT), that was started in 2012. The current incarnation is not the original and it is unknown who is running the one listed below. But whomever it is does a pretty good job of chronicling the various organized crime related incidents around the country on a consistent basis. These sites in the past have been considered by some as a clearinghouse of sorts for primary source narco material. At the time that was partially the case since things were being sent exclusively to them. Now adays though most of what is posted to these websites is plagarized articles and photos collected from smaller regional press outlets and social media nota rojas. Most now have been designed to maximize advertisement revenue so I advise you to use an adblock like my favorite uBlock Origin or download the web browser Brave which is available for both desktop and mobile platforms. Infobae (IB) does an elegant job of summarizing much of this mess up which is why it is included. These sites combined have significant influence on the narco narrative and news cycle. They do a decent job of aggregating regional news items that then are picked up by national news outlets who weren't paying attention to that particular region at that time.",
					ebdn: 'El Blog del Narco',
					vpt: 'Valor por Tamaulipas',
					entext: 'English language press with a focus on Mexico',
					tamtext:
						'Spanish language press from Tamaulipas showing only law enforcement related incidents',
					gtext:
						'Spanish language press from Guanajuato showing only law enforcement related incidents'
				}
			},
			es: {
				message: {
					moreinfo: 'Más información',
					intro:
						'Esta página está todavía en desarrollo. Algunas fuentes no siempre se cargan y, dependiendo de cómo esté desechando la fuente, la cantidad de artículos por fuente variará. Todos se actualizarán automáticamente cuando se publique un nuevo artículo.',
					spanishblogs: 'Los blogs de Narco Españoles',
					english: 'Prensa Inglesa',
					mexicopress: 'Prensa México',
					sbtext:
						'Los blogs de los narcos españoles, el corazón y el alma de la información. Ninguno de los {0} (EBDN) listados es el original o ejecutado por aquellos que lo lanzaron por primera vez en 2010. Pero los dos sitios web listados a continuación tienen la mayor presencia en los medios sociales en este momento, fuera del surtido de viejas y/o falsas cuentas de EBDN que existen. Lo mismo ocurre con {1} (VPT), que se inició en 2012. La encarnación actual no es la original y se desconoce quién está ejecutando la que se indica a continuación. Pero quienquiera que sea hace un buen trabajo de crónica de los diversos incidentes relacionados con el crimen organizado en todo el país de manera consistente. Estos sitios en el pasado han sido considerados por algunos como una especie de centro de intercambio de material de narcotráfico de fuente primaria. En ese momento eso era parcialmente el caso ya que las cosas se enviaban exclusivamente a ellos. Ahora, sin embargo, la mayor parte de lo que se envía a estos sitios web son artículos plagados y fotos recogidas de medios de comunicación regionales más pequeños y de medios sociales no rojos. La mayoría de ellos han sido diseñados para maximizar los ingresos por publicidad, así que les aconsejo que usen un bloque como mi uBlock Origin favorito o que descarguen el navegador Brave que está disponible para plataformas de escritorio y móviles. Infobae (IB) hace un trabajo elegante de resumir gran parte de este lío, por lo que está incluido. Estos sitios combinados tienen una influencia significativa en la narrativa de los narcos y el ciclo de noticias. Hacen un trabajo decente al agregar las noticias regionales que luego son recogidas por los medios de comunicación nacionales que no prestaban atención a esa región en particular en ese momento.',
					ebdn: 'Blog del Narco',
					vpt: 'Valor por Tamaulipas',
					entext: 'La prensa de lengua inglesa con un enfoque en México',
					tamtext:
						'La prensa en español de Tamaulias muestra sólo los incidentes relacionados con la policía',
					gtext:
						'La prensa en español de Guanajuato muestra sólo los incidentes relacionados con la policía'
				}
			}
		}
	},
	head() {
		return {
			title: 'narco.news - Press Aggregate',
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
summary {
	outline: none;
}

.large-barrier {
	max-width: 1200px;
	margin: 0 auto;
}
.intro {
	background-color: #fce0dd;
	border-left: 4px solid #f26457;
	color: #f26457;
	max-width: 500px;
	padding: 1em 1em;
	margin-bottom: 2em;
	font-weight: 500;
}
.feeds {
	.feeds-wrapper {
		padding: 0em;
		div {
			margin: 1em 0.5em;
		}
	}
}
</style>
