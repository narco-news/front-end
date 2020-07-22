<template>
	<div style="background-color: #0d0d0d;" class="pt-3">
		<div class="h-full flex justify-center my-4">
			<div class="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-9 mx-2 gap-2">
				<!-- Mailing -->
				<div class="col-span-2 md:col-span-3 lg:col-span-3 p-2">
					<span class="text-md w-full font-bold foot-title">Mailing list</span>
					<div class="p-2">
						<mailchimp-subscribe
							url="https://news.us10.list-manage.com/subscribe/post-json"
							:user-id="user"
							:list-id="list"
							@error="onError"
							@success="onSuccess"
						>
							<template v-slot="{subscribe, setEmail, error, success, loading}">
								<form class="flex flex-col" @submit.prevent="subscribe">
									<div class="h-8 flex flex-col">
										<input
											id="email"
											class="appearance-none rounded-md py-2 px-3 text-gray-700 leading-tight"
											type="email"
											placeholder="Enter email address"
											@input="setEmail($event.target.value)"
										/>
										<div
											style="color: #dff2e9;"
											class="float-right uppercase font-semibold font-mono mt-12"
										>
											<div v-if="loading" class="text-xs p-2">Loading…</div>
											<div v-if="error" class="text-xs">
												{{ error }}
											</div>
											<div
												v-if="success"
												style="color: #dff2e9;"
												class="text-xs mt-2 ml-6"
											>
												Success! 🥳
											</div>
										</div>
									</div>
									<div class="mt-4 subut">
										<button
											class="text-sm px-4 py-2 rounded-md font-bold"
											type="button"
											@click.prevent="subscribe"
										>
											Submit
										</button>
									</div>
								</form>
							</template>
						</mailchimp-subscribe>
					</div>
				</div>
				<!-- narco news Links -->
				<div class="col-span-2 lg:col-span-2 p-2">
					<span class="text-md w-full font-bold foot-title">narco.news</span>
					<div class="grid grid-cols-2 lg:grid-cols-3 text-xs">
						<n-link class="p-1" to="/about">About</n-link>
						<n-link class="p-1" to="/booklist">Book list</n-link>
						<n-link class="p-1" to="/academia">Academia</n-link>
						<n-link class="p-1" to="/wire">Newswire</n-link>
						<a class="p-1" href="mailto:hello@narco.news">Contact Us</a>
						<a class="p-1" href="https://github.com/narco-news/front-end"
							>Github</a
						>
						<a class="p-1" href="https://publish.narco.news/rss">RSS</a>
						<n-link class="p-1" to="/minecraft">MC</n-link>
					</div>
				</div>
				<!-- Newswire links -->
				<div class="col-span-3 lg:col-span-3 p-2">
					<span class="text-md w-full font-bold foot-title">Newswire</span>
					<div class="w-full grid grid-cols-2 lg:grid-cols-3 text-xs">
						<n-link class="p-1" to="/tag/united-states">United States</n-link>
						<n-link class="p-1" to="/tag/mexican-dto">Mexico</n-link>
						<n-link class="p-1" to="/tag/central-america"
							>Central America</n-link
						>
						<n-link class="p-1" to="/tag/south-america">South America</n-link>
						<n-link class="p-1" to="#">Southeast Asia</n-link>
						<!-- <n-link class="p-1" to="/tag/central-asia">Central Asia</n-link> -->
						<!-- <n-link class="p-1" to="/tag/middle-east">Middle East</n-link> -->
						<n-link class="p-1" to="/tag/uk-scene">UK Scene</n-link>
						<n-link class="p-1" to="#">Europe</n-link>
						<!-- <n-link class="p-1" to="#">Femme Fatale</n-link> -->
						<n-link class="p-1" to="/tag/film-and-television"
							>Film & Television</n-link
						>
						<!-- <n-link class="p-1" to="/tag/opinion">Opinion</n-link> -->
						<n-link class="p-1" to="/tag/development">Development</n-link>
						<n-link class="p-1" to="/tag/announcement">Announcements</n-link>
					</div>
				</div>
				<!-- Favorites -->
				<div class="col-span-1 p-2">
					<span class="text-md w-full font-bold foot-title">Favorites</span>
					<div class="flex flex-col text-xs">
						<a
							class="p-1"
							target="_blank"
							href="https://smallwarsjournal.com/elcentro"
							>El Centro</a
						>
						<a class="p-1" target="_blank" href="http://www.borderlandbeat.com/"
							>Borderland Beat</a
						>
						<a class="p-1" target="_blank" href="https://www.insightcrime.org/"
							>InSight Crime</a
						>
						<a
							class="p-1"
							target="_blank"
							href="https://www.crisisgroup.org/latin-america-caribbean/mexico"
							>Crisis Group MX</a
						>
					</div>
				</div>
			</div>
		</div>
		<div class="text-center">
			<div class="trademark w-4/5 lg:w-1/3 mb-2 mx-auto">
				All company, product and service names used in this website are for
				identification purposes only. All product names, logos, and brands are
				property of their respective owners. Use of these names, logos, and
				brands does not imply endorsement. We disclaims proprietary interest in
				the marks and names of others.
			</div>
			<div
				class="cursor-not-allowed site text-xs flex items-center justify-center"
			>
				<span class="siteName mr-1 h-auto">
					narco<span class="italic">&nbsp;dot&nbsp;</span> news</span
				>
				<span></span>
			</div>
		</div>
	</div>
</template>

<script>
import MailchimpSubscribe from 'vue-mailchimp-subscribe';

export default {
	components: {
		MailchimpSubscribe
	},
	data() {
		return {
			// ActAnim: Activity,
			// LottieOptions: {
			// 	autoplay: true,
			// 	loop: true,
			// 	speed: 0.5,
			// 	width: '20px',
			// 	height: '20px'
			// }
			user: process.env.userID,
			list: process.env.listID
		};
	},
	i18n: {
		messages: {
			en: {
				message: {
					os: 'open source drug war investigations'
				}
			},
			es: {
				message: {
					os:
						'investigaciones de código abierto sobre la guerra contra las drogas'
				}
			}
		}
	},

	methods: {
		onError() {
			// handle error
		},
		onSuccess() {
			// handle success
		}
	}
};
</script>

<style lang="scss" scoped>
.trademark {
	font-size: 9px;
	color: #8590a6;
}
.site {
	color: #252525;
	background: #ff5f6d; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to right,
		#ffc371,
		#ff5f6d
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to right,
		#ffc371,
		#ff5f6d
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.foot-title {
	color: #03a688;
}
div {
	color: #f2f2f2;
	font-weight: 700;
	font-family: 'IBM Plex Sans', sans;
}

button {
	background-color: #f2f2f2;
	color: #0d0d0d;
	border: solid 1px #03a688;
	&:hover {
		color: #f2f2f2;
		border-color: #f2f2f2;
		transition: ease-in 0.15s;
		background-color: lighten(#03a688, 5%);
	}
}
</style>
