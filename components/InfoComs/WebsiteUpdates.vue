<template>
	<div>
		<div>
			<span
				style="color: #038c4c;"
				class="text-sm md:text-md font-bold font-mono"
			>
				{{ $t('message.webupdates') }}
			</span>
		</div>
		<div
			style="background-color: #f2f2f2;"
			class="grid grid-cols-1 rounded-lg shadow-lg h-64 p-1"
		>
			<div style="color: #55a61c;" class="grid grid-cols-1">
				<div class="h-56 overflow-y-scroll ml-2">
					<ul class="list-none date">
						<li>
							<span
								style="font-family: '', sans-serif;"
								class="text-xs font-bold"
								>[18.07.2020]</span
							>
							<p class="text-xs font-mono">
								Yuge design face lift to take us to closer to finalization. Need
								to rework wire area now!
							</p>
						</li>
						<li>
							<span
								style="font-family: '', sans-serif;"
								class="text-xs font-bold"
								>[11.07.2020]</span
							>
							<p class="text-xs font-mono">
								Even though things are getting more comfy around here there is
								still lots to do on the development front. Which will be most of
								my focus next week. Really thankful to all who've checked out
								the site thus far and appreciate your patience throughout this
								development process.
							</p>
						</li>
						<li>
							<span class="text-xs font-bold">[24.06.2020]</span>
							<p class="text-xs font-mono">
								Howdy! Took a breather last week and did some work behind the
								scenes. Trying to figure out best way to catelog a lot of events
								that isn't blog posts, more later. Check out the
								<a
									style="color: #3e82fc;"
									href="https://discuss.narco.news/index.php?p=/"
									target="_blank"
									class="font-semibold"
									>discussion board</a
								>!!
							</p>
						</li>
						<li>
							<span class="text-xs font-bold">[09.06.2020]</span>
							<p class="text-xs font-mono">
								The essentials for the design of the blog portion of the site
								have been finished. I'm sure as we post I'll notice more
								oddities I need to go in and fix but for now it all seems to
								look orderly.
							</p>
						</li>
						<li>
							<span class="text-xs font-bold">[05.06.2020]</span>
							<p class="text-xs font-mono">
								Happy June! Things are starting to feel more lively around here.
								Check out the wire! Still lots to do though.
							</p>
						</li>
						<li>
							<span class="text-xs font-bold">[28.05.2020]</span>
							<p class="text-xs font-mono">
								Added books and academia pages. Academia page still needs work
								but it's serves the purpose for now.
							</p>
						</li>
						<li>
							<span class="text-xs font-bold">[20.05.2020]</span>
							<p class="text-xs font-mono">
								Added pages for Tamaulipas and Michoacán maps with basic map for
								now. Library pages up but empty.
							</p>
						</li>
						<li>
							<span class="text-xs font-bold">[17.05.2020]</span>
							<p class="text-xs font-mono">
								Pushed the latest changes to production... testing over the next
								24 hours.
							</p>
						</li>
						<li>
							<span class="text-xs font-bold">[15.04.2020]</span>
							<p class="text-xs line-through font-mono">
								More home page stuff, still far from satisfied but wire frame is
								pretty much done. Oh and still need a footer!
							</p>
						</li>
						<li>
							<span class="text-xs font-bold">[14.04.2020]</span>
							<p class="text-xs line-through font-mono">
								Alpha launch(!!!). Home page to production state, basic
								unexciting Tamaulipas map working in it's simplest form.
							</p>
						</li>
						<li>
							<span class="text-xs font-bold">[07.04.2020]</span>
							<p class="text-xs font-mono">
								First Test! Can you hear me?
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'WebsiteUpdates',
	i18n: {
		messages: {
			en: {
				message: {
					webupdates: 'Website Updates',
					esslinks: 'Essential Links',
					data: 'Data',
					gov: 'Government Press Releases'
				}
			},
			es: {
				message: {
					webupdates: 'Actualizaciones del sitio web',
					esslinks: 'Enlaces esenciales de internet',
					data: 'Datos',
					gov: 'Comunicados de prensa del gobierno'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
ul li span {
	color: #a1d991;
}

ul li p {
	line-height: 1.1;
	padding: 5px;
	color: #038c4c;
}
</style>
