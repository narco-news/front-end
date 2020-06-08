<template>
	<div style="background-color: #1b2431;" class="pt-3">
		<div
			class="h-full mb-2 flex flex-auto justify-center content-center items-center p-2"
		>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
				<!-- MAILING LIST LINKS -->
				<div class="sm:inline sm:grid-cols-1">
					<span class="text-md w-full font-bold">
						Email List
					</span>
					<form class="w-full max-w-sm px-2 pt-1 sm:pt-2">
						<div class="md:flex md:items-center mb-6">
							<div class="md:w-1/3">
								<label
									class="block text-xs text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
									for="inline-full-name"
								>
									Name
								</label>
							</div>
							<div class="md:w-2/3">
								<input
									id="inline-full-name"
									class="text-xs bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
									type="text"
									placeholder="El Juan Doe"
								/>
							</div>
						</div>
						<div class="md:flex md:items-center mb-6">
							<div class="md:w-1/3">
								<label
									class="block text-xs text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
									for="inline-username"
								>
									Email
								</label>
							</div>
							<div class="md:w-2/3">
								<input
									id="inline-username"
									class="text-xs bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
									type="password"
									placeholder="whodoe701@mail.com"
								/>
							</div>
						</div>
						<div class="md:flex md:items-center">
							<div class="md:w-1/3"></div>
							<div class="md:w-2/3">
								<button
									class="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white text-xs font-bold py-1 px-2 rounded"
									type="button"
								>
									Sign Up
								</button>
							</div>
						</div>
					</form>
				</div>
				<!-- WIRE LINKS -->
				<div class="grid-cols-1">
					<div>
						<span class="text-md w-full font-bold">
							Newswire
						</span>
						<div class="grid grid-cols-2 lg:grid-cols-3 text-xs ml-4">
							<n-link class="p-1" to="/tag/mexican-dto">Mexican DTOs</n-link>
							<n-link class="p-1" to="/tag/central-america"
								>Central America</n-link
							>
							<n-link class="p-1" to="/tag/south-america">South America</n-link>
							<n-link class="p-1" to="/tag/southeast-asia"
								>Southeast Asia</n-link
							>
							<n-link class="p-1" to="/tag/central-asia">Central Asia</n-link>
							<n-link class="p-1" to="/tag/middle-east">Middle East</n-link>
							<n-link class="p-1" to="/tag/uk-scene">UK Scene</n-link>
							<n-link class="p-1" to="/tag/europe">Europe</n-link>
							<n-link class="p-1" to="/tag/femme-fatale">Femme Fatale</n-link>
							<n-link class="p-1" to="/tag/film-and-television"
								>Film and Television</n-link
							>
							<n-link class="p-1" to="/tag/opinion">Opinion</n-link>
							<n-link class="p-1" to="/tag/development">Development</n-link>
							<n-link class="p-1" to="/tag/announcement">Announcements</n-link>
						</div>
					</div>
				</div>
				<div class="grid-cols-1">
					<div>
						<span class="text-md w-full font-bold">
							narco.news
						</span>
						<div class="grid grid-cols-2 text-xs ml-4">
							<n-link class="p-1" to="/about">About</n-link>
							<n-link class="p-1" to="/booklist">Booklist</n-link>
							<n-link class="p-1" to="/academia">Academia</n-link>
							<n-link class="p-1" to="/wire">Newswire</n-link>
							<a class="p-1" href="mailto:hello@narco.news">Contact Us</a>
							<a class="p-1" href="https://github.com/narco-news/front-end"
								>Github</a
							>
							<a class="p-1" href="https://publish.narco.news/rss">RSS</a>
						</div>
					</div>
				</div>
				<div class="grid-cols-1">
					<div>
						<span class="text-md w-full font-bold">
							Favorites
						</span>
						<div class="flex flex-auto md:flex-col flex-wrap text-xs ml-4">
							<a
								class="p-1"
								target="_blank"
								href="https://smallwarsjournal.com/elcentro"
								>El Centro</a
							>
							<a
								class="p-1"
								target="_blank"
								href="http://www.borderlandbeat.com/"
								>Borderland Beat</a
							>

							<a
								class="p-1"
								target="_blank"
								href="https://www.insightcrime.org/"
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
		</div>
		<div></div>
		<div class="bottom-0 pb-2 text-center">
			<span class="text-gray-600 text-xs">narco news 2020</span>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
