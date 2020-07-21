<template>
	<div class="grid grid-cols-1 lg:grid-cols-6 gap-4 antialiased">
		<!-- Back Navigation -->
		<n-link to="/">
			<div
				class="col-start-1 col-end-3 w-32 md:w-40 h-10 bg-white rounded-md shadow-md m-10 animate__animated animate__slideInLeft"
			>
				<div class="flex items-center">
					<span class="p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							data-name="Layer 1"
							viewBox="0 0 24 24"
							width="15"
							height="15"
						>
							<path
								fill="#0d0d0d"
								d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"
							/>
						</svg>
					</span>
					<h3 class="text-sm">Back Home</h3>
				</div>
			</div>
		</n-link>
		<!-- Last Updated -->
		<div
			class="col-end-7 col-span-2 w-32 md:w-48 h-auto md:h-16 bg-white rounded-md shadow-md m-10 animate__animated animate__slideInRight"
		>
			<div class="flex flex-wrap items-center justify-center text-center">
				<span class="my-2">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="15"
						height="15"
					>
						<path
							fill="#0d0d0d"
							d="M12,6a.99974.99974,0,0,0-1,1v4.38379L8.56934,12.60693a.99968.99968,0,1,0,.89843,1.78614l2.98145-1.5A.99874.99874,0,0,0,13,12V7A.99974.99974,0,0,0,12,6Zm0-4A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"
						/>
					</svg>
				</span>
				<h3 class="text-sm ml-1">Last Updated</h3>
				<div class="w-full">
					<hr class="mx-auto" width="75%" />
					<p class="text-xs font-mono my-2">
						19.06.2020
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SigNav'
};
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
	color: #f24405;
	font-weight: 500;
}
hr {
	border-color: #c5c6b6;
}
</style>
