<template>
	<div
		style="background-color: #c2d6d9;"
		class="grid grid-cols-1 h-auto rounded shadow-md mb-2"
	>
		<div class="px-4 mt-2">
			<span style="color: #2a413e;" class="text-sm md:text-md font-bold">
				Website Updates
				<hr class="mb-1" style="border-color: #2a413e;" width="65%" />
			</span>
		</div>
		<div
			style="color: #2a413e; font-family: 'Baloo Thambi 2', cursive;"
			class="features grid grid-cols-1 px-6"
		>
			<div class="h-32 overflow-y-scroll">
				<ul class="list-none">
					<li>
						<span class="text-xs font-bold">24.06.2020</span>
						<p class="text-xs">
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
						<span class="text-xs font-bold">09.06.2020</span>
						<p class="text-xs">
							The essentials for the design of the blog portion of the site have
							been finished. I'm sure as we post I'll notice more oddities I
							need to go in and fix but for now it all seems to look orderly.
						</p>
					</li>
					<li>
						<span class="text-xs font-bold">05.06.2020</span>
						<p class="text-xs">
							Happy June! Things are starting to feel more lively around here.
							Check out the wire! Still lots to do though.
						</p>
					</li>
					<li>
						<span class="text-xs font-bold">28.05.2020</span>
						<p class="text-xs">
							Added books and academia pages. Academia page still needs work but
							it's serves the purpose for now.
						</p>
					</li>
					<li>
						<span class="text-xs font-bold">20.05.2020</span>
						<p class="text-xs">
							Added pages for Tamaulipas and Michoacán maps with basic map for
							now. Library pages up but empty.
						</p>
					</li>
					<li>
						<span class="text-xs font-bold">17.05.2020</span>
						<p class="text-xs">
							Pushed the latest changes to production... testing over the next
							24 hours.
						</p>
					</li>
					<li>
						<span class="text-xs font-bold">15.04.2020</span>
						<p class="text-xs line-through">
							More home page stuff, still far from satisfied but wire frame is
							pretty much done. Oh and still need a footer!
						</p>
					</li>
					<li>
						<span class="text-xs font-bold">14.04.2020</span>
						<p class="text-xs line-through">
							Alpha launch(!!!). Home page to production state, basic unexciting
							Tamaulipas map working in it's simplest form.
						</p>
					</li>
					<li>
						<span class="text-xs font-bold">07.04.2020</span>
						<p class="text-xs">
							First Test! Can you hear me?
						</p>
					</li>
				</ul>
			</div>
		</div>
		<div
			style="color: #2a413e;"
			class="uppercase font-bold rounded m-4 flex flex-auto justify-end"
		>
			<button
				style="border: 1px solid #2a413e; font-size: 0.5rem;"
				class="rounded uppercase p-1"
				@click="show = true"
			>
				Checklist
			</button>
			<vodal
				className="checklist"
				:height="height"
				measure="px"
				:show="show"
				:animation="animation"
				@hide="show = false"
			>
				<div
					class="m-2"
					style="font-family: 'Patua One', cursive; font-weight: 400;"
				>
					<div class="flex flex-col justify-center px-4">
						<!--  -->
						<div class="flex">
							<div class="flex-shrink p-2">
								<img
									src="~/assets/icons/square-full.svg"
									width="35"
									height="35"
									fill="#fff"
								/>
							</div>
							<div class="flex-none text-2xl p-1">home page</div>
						</div>
						<!--  -->
						<div class="flex">
							<div class="flex-shrink p-2">
								<img
									src="~/assets/icons/check-square.svg"
									width="35"
									height="35"
									fill="#fff"
								/>
							</div>
							<div class="flex-none text-2xl p-1">about page</div>
						</div>
						<!--  -->
						<div class="flex">
							<div class="flex-shrink p-2">
								<img
									src="~/assets/icons/check-square.svg"
									width="35"
									height="35"
									fill="#fff"
								/>
							</div>
							<div class="flex-none text-2xl p-1">maps page</div>
						</div>
						<!--  -->
						<div class="flex">
							<div class="flex-shrink p-2">
								<img
									src="~/assets/icons/square-full.svg"
									width="35"
									height="35"
									fill="#fff"
								/>
							</div>
							<div class="flex-none text-2xl p-1">blog page</div>
						</div>
						<!--  -->
						<div class="flex">
							<div class="flex-shrink p-2">
								<img
									src="~/assets/icons/check-square.svg"
									width="35"
									height="35"
									fill="#fff"
								/>
							</div>
							<div class="flex-none text-2xl p-1">book list page</div>
						</div>
						<!--  -->
						<div class="flex">
							<div class="flex-shrink p-2">
								<img
									src="~/assets/icons/check-square.svg"
									width="35"
									height="35"
									fill="#fff"
								/>
							</div>
							<div class="flex-none text-2xl p-1">academia page</div>
						</div>
					</div>
				</div>
			</vodal>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			animation: 'flip',
			height: 400
		};
	}
};
</script>

<style lang="scss">
@import 'vodal/common.css';
@import 'vodal/flip.css';

.checklist {
	color: #204653 !important;
	.vodal-dialog {
		background-color: #a0ec77;
		border-radius: 15px;
	}
	.vodal-close:after {
		background: #204653;
	}
	.vodal-close:before {
		background: #204653;
	}
}
</style>
