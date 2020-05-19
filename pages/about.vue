<template>
	<div>
		<div
			style="color: #3a656a;"
			class="rounded bg-white overflow-hidden shadow-md m-4"
		>
			<div
				style="font-family: 'Patua One', cursive;"
				class="flex justify-end lg:justify-start text-xl m-4"
			>
				ABOUT
			</div>
			<div
				style="animation-duration: 1s;"
				class="px-2 text-center animate__animated animate__fadeIn"
			>
				<p>
					<!--  -->
				</p>
			</div>
			<div class="flex flex-wrap justify-center my-5">
				<div class="m-4">
					<img
						class="shadow-lg mx-auto"
						src="../assets/images/ani-avatar.png"
					/>

					<div class="flex flex-col justify-center m-2">
						<span class="py-1 text-2xl font-bold text-center">
							Ani
						</span>
						<span class="py-1 text-lg italic text-center">
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
						class="shadow-lg mx-auto"
						src="../assets/images/christopher-avatar.png"
					/>
					<div class="flex flex-col justify-center m-2">
						<span class="py-1 text-2xl font-bold text-center">
							Christopher
						</span>
						<span class="py-1 text-lg italic text-center">
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
					<img
						class="shadow-lg mx-auto"
						src="../assets/images/parece-avatar.png"
					/>
					<div class="flex flex-col justify-center m-2">
						<span class="py-1 text-2xl font-bold text-center">
							Parece
						</span>
						<span class="py-1 text-lg italic text-center">
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
