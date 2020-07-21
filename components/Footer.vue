<template>
	<div style="background-color: #1b2431;" class="pt-3">
		<div class="h-full flex justify-center my-4">
			<div class="grid grid-cols-2 md:grid-cols-5 gap-4 text-white">
				<div class="col-span-3 p-2">
					<span class="text-md w-full font-bold foot-title">Newswire</span>
					<div class="w-full grid grid-cols-2 lg:grid-cols-3 text-xs">
						<n-link class="p-1" to="/tag/mexican-dto">Mexico</n-link>
						<n-link class="p-1" to="/tag/central-america"
							>Central America</n-link
						>
						<n-link class="p-1" to="/tag/south-america">South America</n-link>
						<n-link class="p-1" to="/tag/southeast-asia">Southeast Asia</n-link>
						<n-link class="p-1" to="/tag/central-asia">Central Asia</n-link>
						<n-link class="p-1" to="/tag/middle-east">Middle East</n-link>
						<n-link class="p-1" to="/tag/uk-scene">UK Scene</n-link>
						<n-link class="p-1" to="/tag/europe">Europe</n-link>
						<n-link class="p-1" to="/tag/femme-fatale">Femme Fatale</n-link>
						<n-link class="p-1" to="/tag/film-and-television"
							>Film & Television</n-link
						>
						<n-link class="p-1" to="/tag/opinion">Opinion</n-link>
						<n-link class="p-1" to="/tag/development">Development</n-link>
						<n-link class="p-1" to="/tag/announcement">Announcements</n-link>
					</div>
				</div>
				<div class="col-span-1 p-2">
					<span class="text-md w-full font-bold foot-title">narco.news</span>
					<div class="flex flex-col text-xs">
						<n-link class="p-1" to="/about">About</n-link>
						<n-link class="p-1" to="/booklist">Booklist</n-link>
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
		<div></div>
		<div class="bottom-0 pb-1 text-center">
			<span class="text-gray-600 text-xs">narco news 2020</span>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.foot-title {
	color: #ff5e70;
}
</style>
