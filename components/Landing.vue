<template>
	<div>
		<div class="relative">
			<img
				src="~/assets/images/opium.jpg"
				alt="Poppy plants"
				class="object-cover h-64 w-full"
			/>
			<div class="static">
				<div
					style="--animation-delay: 2.5s; --animate-duration: 2000ms;"
					class="w-56 h-40 absolute bottom-0 left-0 bg-white mx-12 lg:mx-24 my-12 p-3 rounded-md grid grid-cols-1 text-center animate__animated animate__fadeIn"
				>
					<div class="word grid grid-cols-2">
						<div class="flex justify-center">
							<h2 class="text-xl lg:text-2xl sm:text-3xl md:text-4xl px-1">
								narco
							</h2>
						</div>
						<div
							style="font-family: 'Baloo Thambi 2', cursive; font-weight: 500;"
							class="grid grid-flow-row float-right text-center"
						>
							<p class="gram font-extrabold text-xs">noun</p>
							<p
								style="font-family: 'Patua One', display; letter-spacing: 1px;"
								class="text-xs"
							>
								/ nAHR-koh /
							</p>
						</div>
					</div>
					<div class="grid grid-cols-1">
						<p class="gram definition text-sm lg:text-lg">
							Dealer in drugs
						</p>
						<p class="exp text-xs">
							"political bosses who may
							<br />
							have links to the narcos"
						</p>
					</div>
				</div>
				<div
					style="--animation-delay: 2.5s; --animate-duration: 2000ms;"
					class="w-56 h-40 absolute bottom-0 right-0 bg-white mx-12 lg:mx-24 my-12 p-3 rounded-md grid grid-cols-1 text-center animate__animated animate__fadeIn"
				>
					<div class="word grid grid-cols-2">
						<div class="flex justify-center">
							<h2
								class="text-xl lg:text-2xl sm:text-3xl md:text-4xl px-1 font-bolder"
							>
								news
							</h2>
						</div>
						<div
							style="font-family: 'Baloo Thambi 2', cursive; font-weight: 500;"
							class="grid grid-flow-row float-right text-center"
						>
							<p class="gram font-extrabold text-xs">noun</p>
							<p
								style="font-family: 'Patua One', display; letter-spacing: 1px;"
								class="text-xs"
							>
								/ nOOZ /
							</p>
						</div>
					</div>
					<div class="grid grid-cols-1">
						<p class="gram definition text-sm lg:text-lg">
							Newly received or
							<br />
							noteworthy information
						</p>
						<p class="exp text-xs">
							"we have good news for you"
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass">
.definition
	p
		font-family: 'Baloo Thambi 2', cursive
.word
	h2
		font-family: 'Patua One', display
.exp
	font-family: 'Montserrat', sans-serif
	font-style: italic
.gram
	color: #ff5e70
</style>
