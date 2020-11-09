<template>
	<div class="flex flex-col">
		<div id="main">
			<div id="home-icon">
				<n-link :to="localePath('/')">
					<img src="~/assets/icons/home-40.svg" alt="Home icon" />
				</n-link>
			</div>
			<div id="top">
				<n-link
					:to="localePath('/about')"
					class="hl-link flex flex-row flex-no-wrap items-center mb-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-help-circle"
					>
						<circle cx="12" cy="12" r="10"></circle>
						<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
						<line x1="12" y1="17" x2="12.01" y2="17"></line>
					</svg>

					<div class="hvr-forward ml-4">{{ $t('message.about') }}</div>
				</n-link>
				<n-link
					:to="localePath('/contact')"
					class="hl-link flex flex-row flex-no-wrap items-center mb-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-mail"
					>
						<path
							d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
						></path>
						<polyline points="22,6 12,13 2,6"></polyline>
					</svg>
					<div class="hvr-forward ml-4">{{ $t('message.contact') }}</div>
				</n-link>
			</div>
			<div id="mid">
				<n-link
					:to="localePath('/wire')"
					alt="Newswire"
					class="flex flex-row flex-no-wrap items-center gap-4 mb-2"
				>
					<span class="text-2xl whitespace-no-wrap">{{
						$t('message.newswire')
					}}</span>
				</n-link>
				<n-link
					:to="localePath('/pa')"
					alt="Press Aggregate"
					class="flex flex-row flex-no-wrap items-center gap-4 mb-2"
				>
					<span class="text-2xl whitespace-no-wrap">{{
						$t('message.feeds')
					}}</span>
				</n-link>
				<n-link
					:to="localePath('/booklist')"
					alt="Book list"
					class="flex flex-row flex-no-wrap items-center mb-2"
				>
					<span class="text-2xl">{{ $t('message.booklist') }}</span>
				</n-link>
				<n-link
					:to="localePath('/academia')"
					alt="Academia"
					class="flex flex-row flex-no-wrap items-center mb-2"
				>
					<span class="text-2xl">{{ $t('message.academia') }}</span>
				</n-link>
			</div>
		</div>
		<img id="logo" src="/logo/nn-colorful-300.png" alt="narco.news logo" />
	</div>
</template>

<script>
export default {
	name: 'Burger',
	i18n: {
		messages: {
			en: {
				message: {
					about: 'About',
					contact: 'Contact',
					newswire: 'Newswire',
					booklist: 'Book list',
					academia: 'Academia',
					guanajuato: 'Guanajuato',
					wiki: 'Wiki',
					feeds: 'Press Aggregate'
				}
			},
			es: {
				message: {
					about: 'Sobre',
					contact: 'Contáctanos',
					newswire: 'Portal de noticias',
					booklist: 'Lista de libros',
					academia: 'Académico',
					guanajuato: 'Guanajuato',
					wiki: 'Wiki',
					feeds: 'Agregada de prensa'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
a {
	color: #f2f2f2;
	&:hover svg {
		color: #595fd9;
	}
}
#home-icon {
	position: absolute;
	top: 0;
	left: 0;
	margin: 1em 1em;
}
#logo {
	position: absolute;
	bottom: 0;
	width: 50%;
	margin: 0 0 25px 25px;
}
#top {
	position: relative;
	margin: 1em 0;
	text-transform: uppercase;
	font-family: 'Source Sans Pro', sans-serif;
}
#mid {
	position: relative;
	margin: 1em 0 1em;
	color: #f2f2f2;
	font-weight: 500;
	font-family: 'Source Serif Pro', serif;
	span {
		&:hover {
			color: #595fd9;
		}
	}
}

#map-links {
	font-weight: 500;
	color: #494949;
	text-transform: uppercase;
	a {
		&:hover {
			color: #595fd9;
		}
	}
	h1 {
		text-transform: none;
	}
}
</style>
