<template>
	<div>
		<div class="relative">
			<div class="static">
				<div class="grid grid-cols-1">
					<div class="col-span-1">
						<div
							style="color: #038c4c;"
							class="pattern-dots-md float-right overflow-x-hidden"
						>
							<div class="grid grid-cols-5">
								<div class="col-span-2 animate__animated animate__slideInLeft">
									<laList />
								</div>
								<div class="col-span-3">
									<img
										v-tippy="{
											arrow: true,
											theme: 'light',
											placement: 'bottom',
											animation: 'perspective',
											trigger: 'click'
										}"
										src="~/assets/images/opium.jpg"
										alt="Poppy plants"
										style="transform: translate(10px, 20px);"
										class="object-cover h-48 lg:h-64 w-full animate__animated animate__zoomIn rounded-lg"
										:content="`<span style='font-size: 10px;'
										>Photo by
										<span style='color: #f24822;'>Tim Cooper</span> from
										unsplashed.com</span
									>`"
									/>
								</div>
							</div>
							<!-- Tags Box -->
							<div class="lg:mt-10">
								<TagsBox />
							</div>
							<!-- Welcome Message -->
							<div class="grid grid-cols-1 mt-4 lg:px-20">
								<div
									style="background-color: #f2f2f2; color: #038c4c;"
									class="rounded px-6 mx-8 flex-row lg:px-12 float-left mb-8"
								>
									<!-- <p
										style="
											color: #f24822;
											font-weight: 700;
											font-family: 'Martel', serif;
										"
										class="text-sm lg:text-3xl font-extrabold uppercase mt-4 lg:mt-2"
									>
										{{ $t('message.welcome') }}
									</p> -->
									<p style="font-weight: 500;" class="text-md lg:text-xl p-4">
										{{ $t('message.greeting') }}
										<i18n
											path="message.aboutGreeting"
											tag="label"
											for="message.about"
										>
											<n-link to="/about" class="hvr-pop">{{
												$t('message.about')
											}}</n-link>
										</i18n>
										<i18n
											path="message.newswireGreeting"
											tag="label"
											for="message.newswire"
										>
											<n-link to="/wire" class="hvr-pop">{{
												$t('message.newswire')
											}}</n-link>
										</i18n>
										<i18n
											path="message.discussGreeting"
											tag="label"
											for="message.discuss"
										>
											<n-link to="#" class="hvr-pop">
												<s>
													{{ $t('message.discuss') }}
												</s></n-link
											>
										</i18n>
										<i18n
											path="message.conclude"
											tag="label"
											for="message.email"
										>
											<n-link to="#" class="hvr-pop disabled">
												<s>
													{{ $t('message.email') }}
												</s>
											</n-link>
										</i18n>
									</p>
								</div>
								<!-- Featured Articles -->
								<div class="lg:px-40">
									<span class="featTextBox shadow-md ml-10 md:ml-14">
										<h2
											style="font-weight: 700;"
											class="text-2xl uppercase animate__animated animate__flash whitespace-no-wrap pt-1"
										>
											{{ $t('message.featured') }}
										</h2>
									</span>

									<div
										style="background-color: #f2f2f2;"
										class="featArticleBox rounded-md p-4 mx-4 md:mx-8 mb-6"
									>
										<ol id="feat">
											<li
												v-for="article in $options.articles.article"
												:key="article.id"
												class="text-lg my-2"
											>
												<n-link :to="article.url">
													{{ article.title }}
												</n-link>
											</li>
										</ol>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Features from '~/assets/features.json';
import bookmark from '~/assets/ani-icons/flower.json';
import laList from '~/components/laList';
import TagsBox from '~/components/TagsBox';
export default {
	name: 'Landing',
	articles: Features,
	components: {
		laList,
		TagsBox
	},
	data() {
		return {
			options: {
				autoplay: true,
				speed: 2,
				loop: true,
				height: '100px',
				width: '100px'
			},
			lotJSON: bookmark
		};
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
					newswire: 'newswire',
					newswireGreeting:
						'To see the latest work published by our team, check the {0}.',
					discuss: 'discussion board',
					discussGreeting:
						"If you're interested in getting involved in the conversation, head over to the {0}.",
					conclude:
						"If you have any questions, please don't hesitate to {0} us.",
					email: 'contact'
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
					discuss: 'panel de discusión',
					discussGreeting:
						'Si está interesado en participar en la conversación, diríjase al {0}.',
					conclude: 'Si tiene alguna pregunta, no dude en {0}.',
					email: 'contactarnos'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.featArticleBox {
	margin-top: -8px;
}
.featTextBox {
	margin-bottom: -2em;
	z-index: 20;
	width: 200px;
	text-align: center;
	display: inline-block;
	background: #0d0d0d;
	color: #f2f2f2;
	h2 {
		font-family: 'Martel', sans-serif;
	}
}
li {
	margin-left: 1em;
	list-style: square;
	font-family: 'Raleway', sans-serif;
}
a {
	border-style: solid;
	border-width: 0 0 6px 0;
	padding-bottom: 0px;
	padding-top: 2px;
	margin-bottom: 0px;
	width: fit-content;
	border-image: linear-gradient(45deg, #f24822, #f2cd5c) 1;
	&:hover {
		border-image: linear-gradient(45deg, #262626, #262626) 1;
		background: -webkit-linear-gradient(45deg, #f24822, #f2cd5c) !important;
		-webkit-background-clip: text !important;
		-webkit-text-fill-color: transparent !important;
	}
}
#feat {
	font-weight: 500;
	line-height: 1.1;
	:nth-child(1) {
		color: #f24822;
		&:hover {
			color: #0d0d0d;
		}
		a {
			line-height: 1.6;
			color: #0d0d0d;
			font-weight: 700;
		}
	}
	:nth-child(2) {
		color: #f24822;
		&:hover {
			color: #0d0d0d;
		}

		a {
			border-width: 0 0 0px 0;
			color: #262626;
			font-weight: 600;
		}
	}
	:nth-child(3) {
		color: #f24822;
		&:hover {
			color: #0d0d0d;
		}

		a {
			border-width: 0 0 0px 0;
			color: #262626;
			font-weight: 600;
		}
	}
	:nth-child(4) {
		color: #f24822;
		&:hover {
			color: #0d0d0d;
		}

		a {
			border-width: 0 0 0px 0;
			color: #262626;
			font-weight: 600;
		}
	}
}
@keyframes blink {
	0% {
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}

.dot {
	height: 5px;
	width: 5px;
	animation: blink 2s infinite;
	background-color: #f24405;
}
</style>
