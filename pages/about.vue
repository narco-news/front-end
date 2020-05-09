<template>
	<div>
		<div class="rounded bg-white overflow-hidden shadow-md m-4">
			<div
				style="font-family: 'IBM Plex Sans', sans-serif; font-weight: 700;"
				class="px-8 py-6 uppercase leading-10 flex justify-center"
			>
				<span
					style="animation-delay: 0.5;"
					class="text-gray-300 animate__animated animate__fadeInDown text-3xl mx-1"
				>
					Who
				</span>
				<br />
				<span
					style="animation-delay: 0.6s;"
					class="text-gray-400 animate__animated animate__fadeInDown text-2xl mx-1"
				>
					What
				</span>
				<br />
				<span
					style="animation-delay: 0.7s;"
					class="text-gray-500 animate__animated animate__fadeInDown text-xl mx-1"
				>
					Why
				</span>
			</div>
			<div
				style="animation-duration: 1s;"
				class="px-10 mx-5 text-center animate__animated animate__fadeIn"
			>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae
					lorem porta, suscipit urna ornare, tempus mauris. Proin faucibus
					semper pulvinar. Quisque a turpis porta ante tempor blandit in tempus
					ipsum. Phasellus pharetra nibh elit, vitae auctor quam semper nec.
					Quisque vel urna quis lacus condimentum tincidunt ac sit amet elit.
					Donec malesuada auctor nisi eu suscipit. Praesent vel enim pulvinar,
					convallis velit nec, auctor lacus. Quisque sodales aliquet lectus, sit
					amet fermentum mauris malesuada vitae.
				</p>
			</div>
			<div class="flex flex-wrap justify-center my-5">
				<div class="m-4">
					<img class="shadow-lg" src="../assets/images/ani-avatar.png" />
					<div class="flex flex-col justify-center m-2">
						<span class="py-1 text-3xl font-bold text-center">
							Ani
						</span>
						<span class="py-1 text-xl italic text-center">
							Chief Translation Officer
						</span>
					</div>
					<div class="py-2 flex justify-center color-soc-icons">
						<a href="#">
							<img
								class="mx-4"
								width="25"
								height="25"
								src="../assets/icons/twitter-pink.svg"
							/>
						</a>
						<a href="#">
							<img
								class="mx-4"
								width="25"
								height="25"
								src="../assets/icons/envelope-edit-pink.svg"
							/>
						</a>
						<a href="#">
							<img
								class="mx-4"
								width="25"
								height="25"
								src="../assets/icons/link-pink.svg"
							/>
						</a>
					</div>
				</div>
				<div class="m-4">
					<img
						class="shadow-lg"
						src="../assets/images/christopher-avatar.png"
					/>
					<div class="flex flex-col justify-center m-2">
						<span class="py-1 text-3xl font-bold text-center">
							Christopher
						</span>
						<span class="py-1 text-xl italic text-center">
							Chief Technology Officer
						</span>
					</div>
					<div class="py-2 flex justify-center color-soc-icons">
						<a href="#">
							<img
								class="mx-4"
								width="25"
								height="25"
								src="../assets/icons/twitter-green.svg"
							/>
						</a>
						<a href="#">
							<img
								class="mx-4"
								width="25"
								height="25"
								src="../assets/icons/envelope-edit-green.svg"
							/>
						</a>
						<a href="#">
							<img
								class="mx-4"
								width="25"
								height="25"
								src="../assets/icons/link-green.svg"
							/>
						</a>
					</div>
				</div>
				<div class="m-4">
					<img class="shadow-lg" src="../assets/images/parece-avatar.png" />
					<div class="flex flex-col justify-center m-2">
						<span class="py-1 text-3xl font-bold text-center">
							Parece
						</span>
						<span class="py-1 text-xl italic text-center">
							Chief Research Officer
						</span>
					</div>
					<div class="py-2 flex justify-center color-soc-icons">
						<a href="#">
							<img
								class="mx-4"
								width="25"
								height="25"
								src="../assets/icons/twitter-blue.svg"
							/>
						</a>
						<a href="#">
							<img
								class="mx-4"
								width="25"
								height="25"
								src="../assets/icons/envelope-edit-blue.svg"
							/>
						</a>
						<a href="#">
							<img
								class="mx-4"
								width="25"
								height="25"
								src="../assets/icons/link-blue.svg"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
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
